// ============================================================
// 博学者 · 核心数据模型类型定义
// ============================================================

// ============ 学科 ============
export type SubjectId = 'economics' | 'sociology' | 'logic' | 'psychology' | 'management';
export type SubjectStatus = 'active' | 'coming-soon';

export interface Subject {
  id: SubjectId;
  name: string;
  code: string; // 'E' | 'S' | 'L' | 'P' | 'M'
  color: string;
  colorLight: string;
  textbook: string;
  goal: string;
  status: SubjectStatus;
  chapters: Chapter[];
  finalQuiz?: Quiz[];
}

// ============ 章节/篇 ============
export interface Chapter {
  id: string; // 'E-CH1'
  subjectId: SubjectId;
  title: string; // '基础篇'
  subtitle: string; // '微观入门'
  description: string;
  order: number; // 1-based
  lessons: Lesson[];
  chapterQuiz: Quiz[];
  unlockCondition: ChapterUnlockCondition;
}

export interface ChapterUnlockCondition {
  type: 'none' | 'chapter-quiz-pass';
  requireChapterId?: string;
  requireScore?: number; // 默认 60
}

// ============ 课程节 ============
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Lesson {
  id: string; // 'E-B01'
  subjectId: SubjectId;
  chapterId: string;
  title: string;
  textbookRef: string;
  keyPoints: string[];
  content: LessonContent;
  lessonQuizzes?: string[]; // quizId 数组（可选，运行时通过 getLessonQuizzes 查询）
  order: number; // 篇内序号
  estimatedMinutes: number;
  /** 该课程涉及的知识节点 ID 列表 */
  knowledgeNodeIds?: string[];
  // ============ 初学者优化字段 ============
  /** 难度等级，帮助学习者选择适合的课程 */
  difficulty?: Difficulty;
  /** 前置课程 ID 列表，建议学习本课前先掌握的课程 */
  prerequisites?: string[];
  /** 学习目标，课程结束后应该掌握的内容 */
  learningOutcomes?: string[];
  /** 常见误区与纠正 */
  commonPitfalls?: CommonPitfall[];
  /** 记忆口诀，帮助记忆核心概念 */
  memoryTips?: string[];
}

export interface CommonPitfall {
  /** 常见的错误理解 */
  mistake: string;
  /** 正确的理解 */
  correction: string;
}

// ============ 课程正文 ============
export interface LessonContent {
  intro: string;
  sections: ContentSection[];
  exercises?: ExerciseItem[];
  caseStudy?: CaseStudy;
  summary: string;
}

export interface ExerciseItem {
  type: string;
  prompt: string;
}

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  conceptBox?: ConceptBox;
}

export interface ConceptBox {
  title: string;
  definition: string;
}

export interface CaseStudy {
  title: string;
  content: string;
  insight: string;
}

// ============ 题目 ============
export type QuizType = 'lesson-quiz' | 'chapter-quiz' | 'final-quiz';

export interface Quiz {
  id: string; // 'E-B01-Q1'
  type: QuizType;
  refId: string; // lessonId 或 chapterId 或 subjectId
  subjectId: SubjectId;
  question: string;
  options: QuizOption[];
  correctOptionId: string; // 'A' | 'B' | 'C' | 'D'
  explanation: string;
  hint: string;
  knowledgePoints: string[];
}

export interface QuizOption {
  id: string;
  text: string;
  /** 为什么这个选项是错的（可选） */
  whyWrong?: string;
}

// ============ 学习进度（持久化） ============
export interface Progress {
  lessons: Record<string, LessonProgress>;
  chapters: Record<string, ChapterProgress>;
  /** 满分通过的测验 ID 列表 */
  perfectQuizIds?: string[];
  /** 错题记录：测验ID -> 答错的题ID列表 */
  wrongQuizAnswers?: Record<string, string[]>;
  /** 已解锁的知识节点 ID 列表 */
  unlockedKnowledgeNodeIds?: string[];
}

export type LessonStatus = 'not-started' | 'in-progress' | 'completed';

export interface LessonProgress {
  lessonId: string;
  status: LessonStatus;
  readingProgress: number; // 0 ~ 1
  readingDurationSec: number;
  startedAt?: number;
  completedAt?: number;
  /** 上次复习时间戳 */
  lastReviewAt?: number;
  /** 复习次数 */
  reviewCount?: number;
  /** 复习间隔（天），用于艾宾浩斯曲线计算下次复习时间 */
  reviewIntervalDays?: number;
}

export type ChapterStatus = 'locked' | 'unlocked' | 'in-progress' | 'completed';

export interface ChapterProgress {
  chapterId: string;
  status: ChapterStatus;
  completedLessonCount: number;
  quizScore?: number;
  quizCompletedAt?: number;
}

// ============ 连击记录 ============
export interface StreakRecord {
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string; // 'YYYY-MM-DD'
  totalStudyDays: number;
  achievedMilestones: number[];
}

// ============ 成就 ============
export type AchievementType = 'streak' | 'lesson' | 'chapter' | 'subject' | 'accuracy' | 'exploration' | 'mastery' | 'subject-specific';

export interface Achievement {
  id: string;
  type: AchievementType;
  title: string;
  description: string;
  icon: string; // lucide 图标名
  color: string;
  unlocked: boolean;
  unlockedAt?: number;
  unlockDetail?: string; // 解锁原因描述，如"经济学第一章"、"连续学习7天"
}

// ============ 答题会话（运行时状态） ============
export interface QuizSession {
  type: QuizType;
  refId: string;
  quizIds: string[];
  currentIndex: number;
  answers: Record<string, QuizAnswer>;
  startedAt: number;
}

export interface QuizAnswer {
  quizId: string;
  selectedOptionId: string;
  isCorrect: boolean;
  hintUsed: boolean;
  answeredAt: number;
}

export interface QuizSessionResult {
  type: QuizType;
  refId: string;
  total: number;
  correct: number;
  accuracy: number; // 0-100
  durationSec: number;
  answers: QuizAnswer[];
  knowledgePointStats: KnowledgePointStat[];
}

export interface KnowledgePointStat {
  point: string;
  total: number;
  correct: number;
  mastery: number; // 0-100
}
