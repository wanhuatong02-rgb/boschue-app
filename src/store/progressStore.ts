import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type {
  Achievement,
  Chapter,
  ChapterProgress,
  ChapterStatus,
  Lesson,
  LessonProgress,
  Progress,
  Quiz,
  QuizAnswer,
  StreakRecord,
  Subject,
  SubjectId,
} from '@/types';
import { ACHIEVEMENTS, STREAK_MILESTONES } from '@/config/achievements';
import { ALL_SUBJECTS, getSubjectData, getLessonById, getQuizById } from '@/data';
import { KNOWLEDGE_GRAPH_DATA } from '@/data/knowledgeGraph';
import { today, yesterday, daysBetween } from '@/lib/date';
import { STORAGE_KEYS, STORAGE_VERSION } from '@/lib/storage';
import persistence from '@/services/persistence';

// ============================================================
// progressStore（持久化）
// ============================================================

interface ProgressStore {
  progress: Progress;
  streak: StreakRecord;
  achievements: Achievement[];
  lastUnlockedAchievements: Achievement[]; // 上次新解锁的成就
  lastUnlockedKnowledgeNodes: string[]; // 上次新解锁的知识节点 ID

  // 查询
  getLessonProgress: (lessonId: string) => LessonProgress;
  getChapterProgress: (chapterId: string) => ChapterProgress;
  isChapterUnlocked: (chapterId: string) => boolean;
  getNextLesson: (subjectId: SubjectId) => Lesson | null;
  getTodayLesson: () => Lesson | null;
  getSubjectMastery: (subjectId: SubjectId) => number;
  getCompletedLessonCount: (subjectId: SubjectId) => number;
  getTotalLessonCount: (subjectId: SubjectId) => number;
  isKnowledgeNodeUnlocked: (nodeId: string) => boolean;
  getUnlockedKnowledgeNodeIds: () => string[];

  // 更新
  markLessonInProgress: (lessonId: string) => void;
  updateReadingProgress: (lessonId: string, progress: number, durationSec: number) => void;
  markLessonCompleted: (lessonId: string) => void;
  recordChapterQuizResult: (chapterId: string, score: number) => void;
  recordFinalQuizResult: (subjectId: string, score: number) => void;

  // 连击
  updateStreak: () => void;

  // 成就
  checkAndUnlockAchievements: () => Achievement[];

  // 错题本
  getWrongQuizzes: (subjectId?: SubjectId) => Quiz[];
  recordQuizAnswer: (quizId: string, quizAnswerIds: string[], isCorrect: boolean) => void;
  clearWrongQuiz: (quizId: string) => void;

  // 复习提醒
  markLessonReviewed: (lessonId: string) => void;
  getLessonsForReview: (daysOverdue?: number) => Lesson[];
  getNextReviewDate: (lessonId: string) => Date | null;

  // 清除
  clearLastUnlocked: () => void;
  clearLastUnlockedKnowledgeNodes: () => void;
  resetAll: () => void;
}

// 初始化空进度
function createEmptyProgress(): Progress {
  return { lessons: {}, chapters: {}, unlockedKnowledgeNodeIds: [] };
}

function createEmptyStreak(): StreakRecord {
  return {
    currentStreak: 0,
    longestStreak: 0,
    lastStudyDate: '',
    totalStudyDays: 0,
    achievedMilestones: [],
  };
}

function defaultLessonProgress(lessonId: string): LessonProgress {
  return {
    lessonId,
    status: 'not-started',
    readingProgress: 0,
    readingDurationSec: 0,
  };
}

function defaultChapterProgress(chapterId: string, status: ChapterStatus = 'locked'): ChapterProgress {
  return {
    chapterId,
    status,
    completedLessonCount: 0,
  };
}

// 学科专属成就检查辅助函数
function checkSubjectAchievement(state: ReturnType<typeof useProgressStore.getState>, subjectId: string, achievementId: string): boolean {
  const subject = ALL_SUBJECTS.find((s) => s.id === subjectId);
  if (!subject) return false;

  const completedLessons = subject.chapters.flatMap((ch) => ch.lessons)
    .filter((l) => state.getLessonProgress(l.id).status === 'completed').length;

  // 第一章成就：检查第一章第一节是否完成
  if (achievementId.endsWith('-first-chapter')) {
    const firstChapter = subject.chapters[0];
    if (!firstChapter) return false;
    return firstChapter.lessons.some((l) => state.getLessonProgress(l.id).status === 'completed');
  }

  // 完成5节课成就
  if (achievementId.endsWith('-master-5')) {
    return completedLessons >= 5;
  }

  // 章节测验成就：检查任意章节测验是否通过（≥60分）
  if (achievementId.endsWith('-chapter-pass')) {
    return subject.chapters.some((ch) => {
      const cp = state.getChapterProgress(ch.id);
      return cp.quizScore !== undefined && cp.quizScore >= 60;
    });
  }

  // 通关测验成就：检查通关测验是否通过（≥80分）
  if (achievementId.endsWith('-subject-pass')) {
    const finalProgress = state.getChapterProgress(`${subjectId}-final`);
    return finalProgress.quizScore !== undefined && finalProgress.quizScore >= 80;
  }

  // 掌握度80%成就
  if (achievementId.endsWith('-mastery-80')) {
    return state.getSubjectMastery(subjectId as SubjectId) >= 80;
  }

  return false;
}

// 生成学科专属成就的解锁详情
function generateSubjectAchievementDetail(
  subjectId: string,
  achievementId: string,
  state: ReturnType<typeof useProgressStore.getState>,
  getSubjectName: (id: string) => string,
  getCompletedChapterCount: (id: string) => number,
): string {
  const subjectName = getSubjectName(subjectId);

  if (achievementId.endsWith('-first-chapter')) {
    return `完成${subjectName}第一章`;
  }
  if (achievementId.endsWith('-master-5')) {
    return `完成${subjectName}5节课`;
  }
  if (achievementId.endsWith('-chapter-pass')) {
    const completedChapters = getCompletedChapterCount(subjectId);
    return `通过${subjectName}章节测验`;
  }
  if (achievementId.endsWith('-subject-pass')) {
    return `通过${subjectName}通关测验`;
  }
  if (achievementId.endsWith('-mastery-80')) {
    return `${subjectName}掌握度达到80%`;
  }

  return '';
}

// 初始化 chapter 进度（遍历所有学科，首篇默认 unlocked，其余 locked）
function initChapters(): Record<string, ChapterProgress> {
  const result: Record<string, ChapterProgress> = {};
  for (const subject of ALL_SUBJECTS) {
    for (const chapter of subject.chapters) {
      const status: ChapterStatus = chapter.unlockCondition.type === 'none' ? 'unlocked' : 'locked';
      result[chapter.id] = defaultChapterProgress(chapter.id, status);
    }
  }
  return result;
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      progress: { lessons: {}, chapters: initChapters() },
      streak: createEmptyStreak(),
      achievements: ACHIEVEMENTS.map((a) => ({ ...a })),
      lastUnlockedAchievements: [],
      lastUnlockedKnowledgeNodes: [],

      getLessonProgress: (lessonId) => {
        const p = get().progress.lessons[lessonId];
        return p ?? defaultLessonProgress(lessonId);
      },

      getChapterProgress: (chapterId) => {
        const p = get().progress.chapters[chapterId];
        return p ?? defaultChapterProgress(chapterId, 'locked');
      },

      isChapterUnlocked: (chapterId) => {
        const p = get().getChapterProgress(chapterId);
        if (p.status === 'locked') return false;
        // 运行时验证：即使状态不是 locked，也要检查 unlockCondition 是否真正满足
        // 解锁条件：前置章节 quizScore ≥ 60 且所有课程已完成
        for (const subject of ALL_SUBJECTS) {
          const chapter = subject.chapters.find((c) => c.id === chapterId);
          if (chapter && chapter.unlockCondition.type === 'chapter-quiz-pass') {
            const prereqId = chapter.unlockCondition.requireChapterId;
            if (prereqId) {
              const prereq = get().progress.chapters[prereqId];
              const prereqScore = prereq?.quizScore;
              // 检查前置章节所有课程是否完成
              const prereqChapter = subject.chapters.find((c) => c.id === prereqId);
              const allLessonsDone = prereqChapter
                ? prereqChapter.lessons.every(
                    (l) => get().progress.lessons[l.id]?.status === 'completed',
                  )
                : false;
              if (prereqScore === undefined || prereqScore < 60 || !allLessonsDone) {
                // 前置条件未满足，立即修正状态并返回 false
                set((state) => ({
                  progress: {
                    ...state.progress,
                    chapters: {
                      ...state.progress.chapters,
                      [chapterId]: { ...p, status: 'locked' as ChapterStatus },
                    },
                  },
                }));
                return false;
              }
            }
            break;
          }
        }
        return true;
      },

      getNextLesson: (subjectId) => {
        const subject = getSubjectData(subjectId);
        if (!subject) return null;
        // 章节按 order 排序
        const chapters = [...subject.chapters].sort((a, b) => a.order - b.order);
        for (const chapter of chapters) {
          // 先看章节是否解锁
          if (!get().isChapterUnlocked(chapter.id)) continue;
          // 找该章节内第一个未完成的课
          for (const lesson of chapter.lessons) {
            const lp = get().getLessonProgress(lesson.id);
            if (lp.status !== 'completed') return lesson;
          }
        }
        return null;
      },

      getTodayLesson: () => {
        // 查找学习进度最高的学科，返回其下一节课
        let bestSubject: SubjectId | null = null;
        let maxProgress = 0;
        for (const subject of ALL_SUBJECTS) {
          const total = subject.chapters.reduce((acc, c) => acc + c.lessons.length, 0);
          if (total === 0) continue;
          let completed = 0;
          for (const chapter of subject.chapters) {
            for (const lesson of chapter.lessons) {
              if (get().getLessonProgress(lesson.id).status === 'completed') completed += 1;
            }
          }
          const progress = completed / total;
          if (progress > maxProgress) {
            maxProgress = progress;
            bestSubject = subject.id;
          }
        }
        // 如果所有学科都没有进度，返回第一个学科的第一节课
        if (!bestSubject || maxProgress === 0) {
          bestSubject = ALL_SUBJECTS[0]?.id ?? null;
        }
        return bestSubject ? get().getNextLesson(bestSubject) : null;
      },

      getSubjectMastery: (subjectId) => {
        const subject = getSubjectData(subjectId);
        if (!subject) return 0;
        // 掌握度 = 已完成课程数 / 总课程数 * 60 + 已通过章节测验得分 * 0.4 / 章节数
        let totalLessons = 0;
        let completedLessons = 0;
        let chapterScoreSum = 0;
        let chapterCount = 0;
        for (const chapter of subject.chapters) {
          totalLessons += chapter.lessons.length;
          for (const lesson of chapter.lessons) {
            if (get().getLessonProgress(lesson.id).status === 'completed') {
              completedLessons += 1;
            }
          }
          chapterCount += 1;
          const cp = get().getChapterProgress(chapter.id);
          if (cp.quizScore !== undefined) {
            chapterScoreSum += cp.quizScore;
          }
        }
        if (totalLessons === 0) return 0;
        const lessonRatio = completedLessons / totalLessons;
        const avgQuizScore = chapterCount > 0 ? chapterScoreSum / chapterCount : 0;
        const mastery = lessonRatio * 60 + (avgQuizScore / 100) * 40;
        return Math.round(mastery);
      },

      getCompletedLessonCount: (subjectId) => {
        const subject = getSubjectData(subjectId);
        if (!subject) return 0;
        let count = 0;
        for (const chapter of subject.chapters) {
          for (const lesson of chapter.lessons) {
            if (get().getLessonProgress(lesson.id).status === 'completed') count += 1;
          }
        }
        return count;
      },

      getTotalLessonCount: (subjectId) => {
        const subject = getSubjectData(subjectId);
        if (!subject) return 0;
        return subject.chapters.reduce((acc, c) => acc + c.lessons.length, 0);
      },

      isKnowledgeNodeUnlocked: (nodeId) => {
        return get().progress.unlockedKnowledgeNodeIds?.includes(nodeId) ?? false;
      },

      getUnlockedKnowledgeNodeIds: () => {
        return get().progress.unlockedKnowledgeNodeIds ?? [];
      },

      markLessonInProgress: (lessonId) => {
        set((state) => {
          const prev = state.progress.lessons[lessonId] ?? defaultLessonProgress(lessonId);
          if (prev.status === 'completed') return state; // 已完成不回退
          return {
            progress: {
              ...state.progress,
              lessons: {
                ...state.progress.lessons,
                [lessonId]: {
                  ...prev,
                  status: 'in-progress',
                  startedAt: prev.startedAt ?? Date.now(),
                },
              },
            },
          };
        });
      },

      updateReadingProgress: (lessonId, readingProgress, durationSec) => {
        set((state) => {
          const prev = state.progress.lessons[lessonId] ?? defaultLessonProgress(lessonId);
          if (prev.status === 'completed') return state;
          return {
            progress: {
              ...state.progress,
              lessons: {
                ...state.progress.lessons,
                [lessonId]: {
                  ...prev,
                  status: prev.status === 'not-started' ? 'in-progress' : prev.status,
                  readingProgress: Math.max(prev.readingProgress, readingProgress),
                  readingDurationSec: prev.readingDurationSec + durationSec,
                  startedAt: prev.startedAt ?? Date.now(),
                },
              },
            },
          };
        });
      },

      markLessonCompleted: (lessonId) => {
        const newlyUnlockedNodes: string[] = [];
        set((state) => {
          const prev = state.progress.lessons[lessonId] ?? defaultLessonProgress(lessonId);
          const lesson = getLessonById(lessonId);
          const newLessonProgress: LessonProgress = {
            ...prev,
            status: 'completed',
            readingProgress: 1,
            completedAt: Date.now(),
            startedAt: prev.startedAt ?? Date.now(),
          };
          // 更新章节完成数
          const newChapters = { ...state.progress.chapters };
          if (lesson) {
            const cp = newChapters[lesson.chapterId] ?? defaultChapterProgress(lesson.chapterId);
            const chapterLessons = lesson ? getSubjectData(lesson.subjectId)?.chapters.find((c) => c.id === lesson.chapterId)?.lessons ?? [] : [];
            const completedCount = chapterLessons.filter(
              (l) => l.id === lessonId || state.progress.lessons[l.id]?.status === 'completed',
            ).length;
            const allCompleted = completedCount >= chapterLessons.length;
            newChapters[lesson.chapterId] = {
              ...cp,
              completedLessonCount: completedCount,
              // Bug fix: locked chapters should only be unlocked via recordChapterQuizResult (score >= 60),
              // not via markLessonCompleted. So we preserve locked status here.
              status: allCompleted ? 'in-progress' : cp.status,
            };
          }
          // 解锁知识节点
          const existingUnlocked = state.progress.unlockedKnowledgeNodeIds ?? [];
          const newUnlockedNodes = [...existingUnlocked];
          if (lesson?.knowledgeNodeIds) {
            for (const nodeId of lesson.knowledgeNodeIds) {
              if (!newUnlockedNodes.includes(nodeId)) {
                newUnlockedNodes.push(nodeId);
                newlyUnlockedNodes.push(nodeId); // 记录新增的节点
              }
            }
          }
          return {
            progress: {
              ...state.progress,
              lessons: {
                ...state.progress.lessons,
                [lessonId]: newLessonProgress,
              },
              chapters: newChapters,
              unlockedKnowledgeNodeIds: newUnlockedNodes,
            },
            // 保存新解锁的节点到状态，供 UI 显示
            lastUnlockedKnowledgeNodes: newlyUnlockedNodes,
          };
        });
        // 触发成就检查和连击更新
        get().updateStreak();
        get().checkAndUnlockAchievements();
        // 返回新解锁的节点（用于弹窗提示）
        return newlyUnlockedNodes;
      },

      recordChapterQuizResult: (chapterId, score) => {
        set((state) => {
          const newChapters = { ...state.progress.chapters };
          const cp = newChapters[chapterId] ?? defaultChapterProgress(chapterId);
          const newStatus: ChapterStatus = score >= 60 ? 'completed' : cp.status;
          newChapters[chapterId] = {
            ...cp,
            quizScore: score,
            quizCompletedAt: Date.now(),
            status: newStatus,
          };

          // 追踪满分成绩
          const isPerfect = score === 100;
          const prevPerfectIds = state.progress.perfectQuizIds ?? [];
          const newPerfectIds = isPerfect && !prevPerfectIds.includes(chapterId)
            ? [...prevPerfectIds, chapterId]
            : prevPerfectIds;

          // 解锁后续章节（遍历所有学科，查找 unlockCondition 匹配的章节）
          // 解锁条件：当前章节 quizScore ≥ 60 且当前章节所有课程已完成
          if (score >= 60) {
            // 先检查当前章节的所有课程是否完成
            const currentChapter = (() => {
              for (const subject of ALL_SUBJECTS) {
                const ch = subject.chapters.find((c) => c.id === chapterId);
                if (ch) return { subject, chapter: ch };
              }
              return null;
            })();
            const allLessonsDone = currentChapter
              ? currentChapter.chapter.lessons.every(
                  (l) => state.progress.lessons[l.id]?.status === 'completed',
                )
              : false;

            if (allLessonsDone) {
              for (const subject of ALL_SUBJECTS) {
                for (const ch of subject.chapters) {
                  if (ch.unlockCondition.type === 'chapter-quiz-pass' && ch.unlockCondition.requireChapterId === chapterId) {
                    const nextCp = newChapters[ch.id] ?? defaultChapterProgress(ch.id, 'locked');
                    newChapters[ch.id] = { ...nextCp, status: 'unlocked' };
                  }
                }
              }
            }
          }
          return {
            progress: {
              ...state.progress,
              chapters: newChapters,
              perfectQuizIds: newPerfectIds,
            },
          };
        });
        // 检查成就
        get().checkAndUnlockAchievements();
      },

      recordFinalQuizResult: (subjectId, score) => {
        set((state) => {
          const newChapters = { ...state.progress.chapters };
          newChapters[`${subjectId}-final`] = {
            chapterId: `${subjectId}-final`,
            status: score >= 80 ? 'completed' : 'in-progress',
            completedLessonCount: 0,
            quizScore: score,
            quizCompletedAt: Date.now(),
          };

          // 追踪满分成绩
          const isPerfect = score === 100;
          const prevPerfectIds = state.progress.perfectQuizIds ?? [];
          const perfectKey = `${subjectId}-final`;
          const newPerfectIds = isPerfect && !prevPerfectIds.includes(perfectKey)
            ? [...prevPerfectIds, perfectKey]
            : prevPerfectIds;

          return {
            progress: {
              ...state.progress,
              chapters: newChapters,
              perfectQuizIds: newPerfectIds,
            },
          };
        });
        // 触发成就检查
        get().checkAndUnlockAchievements();
      },

      updateStreak: () => {
        set((state) => {
          const t = today();
          const y = yesterday();
          const s = state.streak;
          if (s.lastStudyDate === t) {
            // 今日已更新过连击
            return state;
          }
          let newCurrent: number;
          let newTotalDays = s.totalStudyDays;
          if (s.lastStudyDate === y) {
            newCurrent = s.currentStreak + 1;
          } else if (s.lastStudyDate === '') {
            newCurrent = 1;
          } else {
            // 断签
            newCurrent = 1;
          }
          if (s.lastStudyDate !== t) {
            newTotalDays = s.totalStudyDays + 1;
          }
          const newLongest = Math.max(s.longestStreak, newCurrent);
          const newMilestones = [...s.achievedMilestones];
          for (const m of STREAK_MILESTONES) {
            if (newCurrent >= m && !newMilestones.includes(m)) {
              newMilestones.push(m);
            }
          }
          return {
            streak: {
              currentStreak: newCurrent,
              longestStreak: newLongest,
              lastStudyDate: t,
              totalStudyDays: newTotalDays,
              achievedMilestones: newMilestones,
            },
          };
        });
      },

      checkAndUnlockAchievements: () => {
        const state = get();
        const newlyUnlocked: Achievement[] = [];

        // 辅助函数：统计已完成课程数
        const completedLessonCount = () => {
          let count = 0;
          for (const subject of ALL_SUBJECTS) {
            for (const chapter of subject.chapters) {
              for (const lesson of chapter.lessons) {
                if (state.getLessonProgress(lesson.id).status === 'completed') count++;
              }
            }
          }
          return count;
        };

        // 辅助函数：统计已通过的学科数
        const completedSubjectCount = () => {
          return ALL_SUBJECTS.filter((subject) => {
            const finalProgress = state.getChapterProgress(`${subject.id}-final`);
            return finalProgress.quizScore !== undefined && finalProgress.quizScore >= 80;
          }).length;
        };

        // 辅助函数：检查是否所有学科的第一章都已通过
        const allFirstChaptersCompleted = () => {
          return ALL_SUBJECTS.every((subject) => {
            const firstChapter = subject.chapters[0];
            if (!firstChapter) return false;
            const cp = state.getChapterProgress(firstChapter.id);
            return cp.quizScore !== undefined && cp.quizScore >= 60;
          });
        };

        // 辅助函数：统计已解锁的知识节点（按分类）
        const getUnlockedKnowledgeCounts = () => {
          const unlockedIds = state.progress.unlockedKnowledgeNodeIds ?? [];
          const counts = {
            total: unlockedIds.length,
            concept: 0,
            principle: 0,
            law: 0,
            theory: 0,
            effect: 0,
            fallacy: 0,
          };
          for (const nodeId of unlockedIds) {
            for (const subject of ALL_SUBJECTS) {
              const nodes = KNOWLEDGE_GRAPH_DATA[subject.id] || [];
              const node = nodes.find((n) => n.id === nodeId);
              if (node) {
                const category = node.category as keyof typeof counts;
                if (category in counts) {
                  (counts as Record<string, number>)[category]++;
                }
                break;
              }
            }
          }
          return counts;
        };

        // 辅助函数：获取学科中文名
        const getSubjectName = (subjectId: string) => {
          const map: Record<string, string> = {
            economics: '经济学',
            sociology: '社会学',
            logic: '逻辑学',
            psychology: '心理学',
            management: '管理学',
          };
          return map[subjectId] || subjectId;
        };

        // 辅助函数：获取已完成的章节数（用于学科专属成就）
        const getCompletedChapterCount = (subjectId: string) => {
          const subject = ALL_SUBJECTS.find((s) => s.id === subjectId);
          if (!subject) return 0;
          return subject.chapters.filter((ch) => {
            const cp = state.getChapterProgress(ch.id);
            return cp.quizScore !== undefined && cp.quizScore >= 60;
          }).length;
        };

        const updated = state.achievements.map((a) => {
          if (a.unlocked) return a;
          let shouldUnlock = false;
          let unlockDetail = '';

          // 连击里程碑
          if (a.id === 'streak-3' && state.streak.currentStreak >= 3) {
            shouldUnlock = true;
            unlockDetail = `连续学习 3 天`;
          } else if (a.id === 'streak-7' && state.streak.currentStreak >= 7) {
            shouldUnlock = true;
            unlockDetail = `连续学习 7 天`;
          } else if (a.id === 'streak-21' && state.streak.currentStreak >= 21) {
            shouldUnlock = true;
            unlockDetail = `连续学习 21 天`;
          } else if (a.id === 'streak-50' && state.streak.currentStreak >= 50) {
            shouldUnlock = true;
            unlockDetail = `连续学习 50 天`;
          } else if (a.id === 'streak-100' && state.streak.currentStreak >= 100) {
            shouldUnlock = true;
            unlockDetail = `连续学习 100 天`;
          } else if (a.id === 'streak-150' && state.streak.currentStreak >= 150) {
            shouldUnlock = true;
            unlockDetail = `连续学习 150 天`;
          } else if (a.id === 'streak-200' && state.streak.currentStreak >= 200) {
            shouldUnlock = true;
            unlockDetail = `连续学习 200 天`;
          } else if (a.id === 'streak-365' && state.streak.currentStreak >= 365) {
            shouldUnlock = true;
            unlockDetail = `连续学习 365 天`;
          }

          // 首次成就
          else if (a.id === 'first-lesson') {
            shouldUnlock = ALL_SUBJECTS.some((subject) =>
              subject.chapters.some((ch) =>
                ch.lessons.some((l) => state.getLessonProgress(l.id).status === 'completed'),
              ),
            );
            if (shouldUnlock) unlockDetail = `完成第一节课`;
          } else if (a.id === 'first-chapter') {
            shouldUnlock = ALL_SUBJECTS.some((subject) =>
              subject.chapters.some((ch) => (state.getChapterProgress(ch.id).quizScore ?? 0) >= 60),
            );
            if (shouldUnlock) {
              // 找出是通过哪个章节解锁的
              for (const subject of ALL_SUBJECTS) {
                for (const ch of subject.chapters) {
                  const cp = state.getChapterProgress(ch.id);
                  if (cp.quizScore !== undefined && cp.quizScore >= 60) {
                    const chapterIndex = subject.chapters.findIndex((c) => c.id === ch.id) + 1;
                    unlockDetail = `通过${getSubjectName(subject.id)}第${chapterIndex}章测验`;
                    break;
                  }
                }
                if (unlockDetail) break;
              }
            }
          } else if (a.id === 'first-perfect') {
            // 满分通过章节测验或通关测验
            shouldUnlock = (state.progress.perfectQuizIds ?? []).length > 0;
            if (shouldUnlock) unlockDetail = `章节测验满分`;
          }

          // 学科通关成就
          else if (a.id === 'first-subject' && completedSubjectCount() >= 1) {
            shouldUnlock = true;
            unlockDetail = `通过1门学科通关测验`;
          } else if (a.id === 'dual-master' && completedSubjectCount() >= 2) {
            shouldUnlock = true;
            unlockDetail = `通过2门学科通关测验`;
          } else if (a.id === 'triple-master' && completedSubjectCount() >= 3) {
            shouldUnlock = true;
            unlockDetail = `通过3门学科通关测验`;
          } else if (a.id === 'polymath' && completedSubjectCount() >= 4) {
            shouldUnlock = true;
            unlockDetail = `通过4门及以上学科通关测验`;
          }

          // 探索成就
          else if (a.id === 'all-first-chapters') {
            shouldUnlock = allFirstChaptersCompleted();
            if (shouldUnlock) unlockDetail = `完成所有学科第一章`;
          } else if (a.id === 'first-knowledge-graph') {
            // 首次解锁任意知识节点时触发（而非页面访问）
            const counts = getUnlockedKnowledgeCounts();
            shouldUnlock = counts.total >= 1;
            if (shouldUnlock) unlockDetail = `解锁第1个知识概念`;
          } else if (a.id === 'knowledge-concept-10') {
            const counts = getUnlockedKnowledgeCounts();
            shouldUnlock = counts.total >= 10;
            if (shouldUnlock) unlockDetail = `解锁10个知识概念`;
          } else if (a.id === 'knowledge-concept-30') {
            const counts = getUnlockedKnowledgeCounts();
            shouldUnlock = counts.total >= 30;
            if (shouldUnlock) unlockDetail = `解锁30个知识概念`;
          } else if (a.id === 'knowledge-fallacy-5') {
            const counts = getUnlockedKnowledgeCounts();
            shouldUnlock = counts.fallacy >= 5;
            if (shouldUnlock) unlockDetail = `解锁5个逻辑谬误`;
          } else if (a.id === 'knowledge-effect-5') {
            const counts = getUnlockedKnowledgeCounts();
            shouldUnlock = counts.effect >= 5;
            if (shouldUnlock) unlockDetail = `解锁5个心理/管理效应`;
          } else if (a.id === 'knowledge-law-5') {
            const counts = getUnlockedKnowledgeCounts();
            shouldUnlock = counts.law >= 5;
            if (shouldUnlock) unlockDetail = `解锁5个定律/法则`;
          }

          // 掌握度成就
          else if (a.id === 'master-10' && completedLessonCount() >= 10) {
            shouldUnlock = true;
            unlockDetail = `完成10节课`;
          } else if (a.id === 'master-25' && completedLessonCount() >= 25) {
            shouldUnlock = true;
            unlockDetail = `完成25节课`;
          } else if (a.id === 'master-50' && completedLessonCount() >= 50) {
            shouldUnlock = true;
            unlockDetail = `完成50节课`;
          } else if (a.id === 'master-100' && completedLessonCount() >= 100) {
            shouldUnlock = true;
            unlockDetail = `完成100节课`;
          } else if (a.id === 'master-200' && completedLessonCount() >= 200) {
            shouldUnlock = true;
            unlockDetail = `完成200节课`;
          }

          // 阅读时长成就
          else if (a.id === 'read-100') {
            const totalMin = Object.values(state.progress.lessons).reduce(
              (acc, lp) => acc + (lp.readingDurationSec ?? 0), 0,
            ) / 60;
            shouldUnlock = totalMin >= 100;
            if (shouldUnlock) unlockDetail = `累计阅读100分钟`;
          } else if (a.id === 'read-500') {
            const totalMin = Object.values(state.progress.lessons).reduce(
              (acc, lp) => acc + (lp.readingDurationSec ?? 0), 0,
            ) / 60;
            shouldUnlock = totalMin >= 500;
            if (shouldUnlock) unlockDetail = `累计阅读500分钟`;
          } else if (a.id === 'read-1000') {
            const totalMin = Object.values(state.progress.lessons).reduce(
              (acc, lp) => acc + (lp.readingDurationSec ?? 0), 0,
            ) / 60;
            shouldUnlock = totalMin >= 1000;
            if (shouldUnlock) unlockDetail = `累计阅读1000分钟`;
          } else if (a.id === 'read-5000') {
            const totalMin = Object.values(state.progress.lessons).reduce(
              (acc, lp) => acc + (lp.readingDurationSec ?? 0), 0,
            ) / 60;
            shouldUnlock = totalMin >= 5000;
            if (shouldUnlock) unlockDetail = `累计阅读5000分钟`;
          }

          // 错题本成就
          else if (a.id === 'wrong-zero') {
            const wrongAnswers = state.progress.wrongQuizAnswers ?? {};
            shouldUnlock = Object.keys(wrongAnswers).length === 0;
            if (shouldUnlock) unlockDetail = `错题本已清空`;
          }

          // 学科专属成就
          else if (a.id.startsWith('e-') && a.type === 'subject-specific') {
            shouldUnlock = checkSubjectAchievement(state, 'economics', a.id);
            if (shouldUnlock) unlockDetail = generateSubjectAchievementDetail('economics', a.id, state, getSubjectName, getCompletedChapterCount);
          } else if (a.id.startsWith('s-') && a.type === 'subject-specific') {
            shouldUnlock = checkSubjectAchievement(state, 'sociology', a.id);
            if (shouldUnlock) unlockDetail = generateSubjectAchievementDetail('sociology', a.id, state, getSubjectName, getCompletedChapterCount);
          } else if (a.id.startsWith('l-') && a.type === 'subject-specific') {
            shouldUnlock = checkSubjectAchievement(state, 'logic', a.id);
            if (shouldUnlock) unlockDetail = generateSubjectAchievementDetail('logic', a.id, state, getSubjectName, getCompletedChapterCount);
          } else if (a.id.startsWith('p-') && a.type === 'subject-specific') {
            shouldUnlock = checkSubjectAchievement(state, 'psychology', a.id);
            if (shouldUnlock) unlockDetail = generateSubjectAchievementDetail('psychology', a.id, state, getSubjectName, getCompletedChapterCount);
          } else if (a.id.startsWith('m-') && a.type === 'subject-specific') {
            shouldUnlock = checkSubjectAchievement(state, 'management', a.id);
            if (shouldUnlock) unlockDetail = generateSubjectAchievementDetail('management', a.id, state, getSubjectName, getCompletedChapterCount);
          }

          if (shouldUnlock) {
            const unlocked = { ...a, unlocked: true, unlockedAt: Date.now(), unlockDetail };
            newlyUnlocked.push(unlocked);
            return unlocked;
          }
          return a;
        });
        set({ achievements: updated, lastUnlockedAchievements: newlyUnlocked });
        return newlyUnlocked;
      },

      getWrongQuizzes: (subjectId) => {
        const state = get();
        const wrongQuizIds = new Set<string>();
        const wrongAnswers = state.progress.wrongQuizAnswers ?? {};
        for (const quizId in wrongAnswers) {
          wrongAnswers[quizId].forEach((qId) => wrongQuizIds.add(qId));
        }
        // 根据 subjectId 过滤并返回 Quiz 对象
        const allQuizzes = wrongQuizIds.size > 0
          ? Array.from(wrongQuizIds).map((qId) => getQuizById(qId)).filter(Boolean) as Quiz[]
          : [];
        if (subjectId) {
          return allQuizzes.filter((q) => q.subjectId === subjectId);
        }
        return allQuizzes;
      },

      recordQuizAnswer: (quizId, quizAnswerIds, isCorrect) => {
        set((state) => {
          const wrongAnswers = { ...(state.progress.wrongQuizAnswers ?? {}) };
          if (!isCorrect) {
            // 记录错题
            const existing = wrongAnswers[quizId] ?? [];
            const newWrongIds = [...new Set([...existing, ...quizAnswerIds])];
            wrongAnswers[quizId] = newWrongIds;
          } else {
            // 答对了，从错题记录中移除
            delete wrongAnswers[quizId];
          }
          return {
            progress: {
              ...state.progress,
              wrongQuizAnswers: wrongAnswers,
            },
          };
        });
      },

      clearWrongQuiz: (quizId) => {
        set((state) => {
          const wrongAnswers = { ...(state.progress.wrongQuizAnswers ?? {}) };
          delete wrongAnswers[quizId];
          return {
            progress: {
              ...state.progress,
              wrongQuizAnswers: wrongAnswers,
            },
          };
        });
      },

      markLessonReviewed: (lessonId) => {
        set((state) => {
          const prev = state.progress.lessons[lessonId] ?? defaultLessonProgress(lessonId);
          const now = Date.now();
          // 艾宾浩斯复习间隔：1天 -> 3天 -> 7天 -> 14天 -> 30天
          const intervals = [1, 3, 7, 14, 30];
          const reviewCount = (prev.reviewCount ?? 0) + 1;
          const intervalIdx = Math.min(reviewCount - 1, intervals.length - 1);
          const nextInterval = intervals[intervalIdx];
          return {
            progress: {
              ...state.progress,
              lessons: {
                ...state.progress.lessons,
                [lessonId]: {
                  ...prev,
                  lastReviewAt: now,
                  reviewCount,
                  reviewIntervalDays: nextInterval,
                },
              },
            },
          };
        });
      },

      getLessonsForReview: (daysOverdue = 0) => {
        const state = get();
        const lessonsToReview: { lesson: Lesson; daysOverdue: number }[] = [];
        const now = Date.now();
        const MS_PER_DAY = 1000 * 60 * 60 * 24;
        for (const subject of ALL_SUBJECTS) {
          for (const chapter of subject.chapters) {
            for (const lesson of chapter.lessons) {
              const lp = state.getLessonProgress(lesson.id);
              if (lp.status === 'completed' && lp.lastReviewAt) {
                const intervalDays = lp.reviewIntervalDays ?? 1;
                const nextReviewMs = lp.lastReviewAt + intervalDays * MS_PER_DAY;
                const daysSinceReview = (now - lp.lastReviewAt) / MS_PER_DAY;
                const overdue = daysSinceReview - intervalDays;
                if (overdue >= daysOverdue) {
                  lessonsToReview.push({ lesson, daysOverdue: Math.round(overdue) });
                }
              }
            }
          }
        }
        return lessonsToReview
          .sort((a, b) => b.daysOverdue - a.daysOverdue)
          .map((item) => item.lesson);
      },

      getNextReviewDate: (lessonId) => {
        const lp = get().getLessonProgress(lessonId);
        if (!lp.lastReviewAt) {
          // 首次学习完成，1天后复习
          return new Date(lp.completedAt ?? Date.now() + 1000 * 60 * 60 * 24);
        }
        const MS_PER_DAY = 1000 * 60 * 60 * 24;
        const interval = lp.reviewIntervalDays ?? 1;
        return new Date(lp.lastReviewAt + interval * MS_PER_DAY);
      },

      clearLastUnlocked: () => set({ lastUnlockedAchievements: [] }),

      clearLastUnlockedKnowledgeNodes: () => set({ lastUnlockedKnowledgeNodes: [] }),

      resetAll: () => {
        set({
          progress: { lessons: {}, chapters: initChapters(), perfectQuizIds: [], wrongQuizAnswers: {}, unlockedKnowledgeNodeIds: [] },
          streak: createEmptyStreak(),
          achievements: ACHIEVEMENTS.map((a) => ({ ...a })),
          lastUnlockedAchievements: [],
          lastUnlockedKnowledgeNodes: [],
        });
      },
    }),
    {
      name: STORAGE_KEYS.PROGRESS,
      version: STORAGE_VERSION,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        progress: state.progress,
        streak: state.streak,
        achievements: state.achievements,
      }),
      migrate: (persisted, version) => {
        // v1→v2：清除旧版本中所有进度数据
        if (version === 1) {
          return {
            ...(persisted as any),
            progress: { lessons: {}, chapters: {} },
          };
        }
        // v2→v3：全量重置进度，彻底清除脏数据
        if (version === 2) {
          return {
            ...(persisted as any),
            progress: { lessons: {}, chapters: {}, unlockedKnowledgeNodeIds: [] },
          };
        }
        // v3→v4：添加 unlockedKnowledgeNodeIds 字段
        if (version === 3) {
          return {
            ...(persisted as any),
            progress: {
              ...(persisted as any).progress,
              unlockedKnowledgeNodeIds: [],
            },
          };
        }
        return persisted as any;
      },
      merge: (persisted, current) => {
        const p = (persisted ?? {}) as Partial<ProgressStore>;
        // 合并时确保新章节被初始化
        const baseChapters = initChapters();
        const persistedChapters = p.progress?.chapters ?? {};
        // 合并章节：先用持久化数据覆盖 baseChapters
        const mergedRaw = { ...baseChapters, ...persistedChapters };
        // 验证：对 initChapters 标记为 locked 的章节，检查解锁条件是否真正满足
        const mergedChapters: Record<string, ChapterProgress> = {};
        for (const chapterId in mergedRaw) {
          const ch = mergedRaw[chapterId];
          const base = baseChapters[chapterId];
          // 如果章节应该 locked 但持久化数据显示非 locked，验证前置条件
          if (base && base.status === 'locked' && ch.status !== 'locked') {
            // 查找该章节的 unlockCondition
            let legitimatelyUnlocked = false;
            for (const subject of ALL_SUBJECTS) {
              const chapter = subject.chapters.find((c) => c.id === chapterId);
              if (chapter && chapter.unlockCondition.type === 'chapter-quiz-pass') {
                const prereqId = chapter.unlockCondition.requireChapterId;
                if (prereqId) {
                  const prereqScore = persistedChapters[prereqId]?.quizScore;
                  // 检查前置章节所有课程是否完成
                  const prereqChapter = subject.chapters.find((c) => c.id === prereqId);
                  const allLessonsDone = prereqChapter
                    ? prereqChapter.lessons.every(
                        (l) => (p.progress?.lessons?.[l.id]?.status) === 'completed',
                      )
                    : false;
                  if (prereqScore !== undefined && prereqScore >= 60 && allLessonsDone) {
                    legitimatelyUnlocked = true;
                  }
                }
                break;
              }
            }
            if (!legitimatelyUnlocked) {
              // 前置条件未满足，强制重置为 locked
              mergedChapters[chapterId] = { ...ch, status: 'locked' };
              continue;
            }
          }
          mergedChapters[chapterId] = ch;
        }
        return {
          ...current,
          progress: {
            lessons: p.progress?.lessons ?? {},
            chapters: mergedChapters,
          },
          streak: p.streak ?? createEmptyStreak(),
          achievements: current.achievements.map((a) => {
            const stored = p.achievements?.find((x) => x.id === a.id);
            return stored ? { ...a, ...stored } : a;
          }),
          lastUnlockedAchievements: [],
        };
      },
    },
  ),
);

/* == File-backed persistence: mirror progress state to disk after each change == */
try {
  let saveTimer: ReturnType<typeof setTimeout> | null = null;
  useProgressStore.subscribe((state) => {
    // Debounce to avoid hammering the API on rapid changes
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      const snapshot = {
        progress: state.progress ?? { lessons: {}, chapters: {} },
        streak: state.streak ?? {},
        achievements: state.achievements ?? [],
      };
      void persistence.saveProgress({ state: snapshot });
    }, 400);
  });
} catch (e) {
  console.warn("progress file-persistence subscribe failed:", e);
}
/* == end file-backed persistence == */

