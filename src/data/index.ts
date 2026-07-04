import type { Lesson, Quiz, Subject, SubjectId } from '@/types';
import {
  ECONOMICS_SUBJECT,
  ECONOMICS_LESSONS,
  ECONOMICS_ALL_QUIZZES,
  getLessonById as getEconomicsLessonById,
  getEconomicsQuizById as getEconomicsQuizById,
} from './economics';
import {
  PSYCHOLOGY_SUBJECT,
  PSYCHOLOGY_LESSONS,
  PSYCHOLOGY_ALL_QUIZZES,
  getLessonById as getPsychologyLessonById,
  getPsychologyQuizById as getPsychologyQuizById,
} from './psychology';
import {
  MANAGEMENT_SUBJECT,
  MANAGEMENT_LESSONS,
  MANAGEMENT_ALL_QUIZZES,
  getLessonById as getManagementLessonById,
  getQuizById as getManagementQuizById,
} from './management';
import {
  LOGIC_SUBJECT,
  LOGIC_LESSONS,
  LOGIC_ALL_QUIZZES,
  getLessonById as getLogicLessonById,
  getLogicQuizById as getLogicQuizById,
} from './logic';
import {
  SOCIOLOGY_SUBJECT,
  SOCIOLOGY_LESSONS,
  SOCIOLOGY_ALL_QUIZZES,
  getLessonById as getSociologyLessonById,
  getSociologyQuizById as getSociologyQuizById,
} from './sociology';

// ============================================================
// 全学科数据聚合（经济学 + 心理学 + 管理学 + 逻辑学可用）
// ============================================================

// 全部课程（按学科篇章顺序合并，供跨学科导航使用）
const ALL_LESSONS: Lesson[] = [...ECONOMICS_LESSONS, ...PSYCHOLOGY_LESSONS, ...MANAGEMENT_LESSONS, ...LOGIC_LESSONS, ...SOCIOLOGY_LESSONS];
// 全部题目（按学科顺序合并）
const ALL_QUIZZES: Quiz[] = [...ECONOMICS_ALL_QUIZZES, ...PSYCHOLOGY_ALL_QUIZZES, ...MANAGEMENT_ALL_QUIZZES, ...LOGIC_ALL_QUIZZES, ...SOCIOLOGY_ALL_QUIZZES];

export const ALL_SUBJECTS: Subject[] = [ECONOMICS_SUBJECT, PSYCHOLOGY_SUBJECT, MANAGEMENT_SUBJECT, LOGIC_SUBJECT, SOCIOLOGY_SUBJECT];

export function getSubjectData(subjectId: SubjectId): Subject | undefined {
  return ALL_SUBJECTS.find((s) => s.id === subjectId);
}

export function getSubjectById(subjectId: SubjectId): Subject | undefined {
  return ALL_SUBJECTS.find((s) => s.id === subjectId);
}

export function getLessonById(lessonId: string): Lesson | undefined {
  return getEconomicsLessonById(lessonId) ?? getPsychologyLessonById(lessonId) ?? getManagementLessonById(lessonId) ?? getLogicLessonById(lessonId) ?? getSociologyLessonById(lessonId);
}

export function getQuizById(quizId: string): Quiz | undefined {
  return getEconomicsQuizById(quizId) ?? getPsychologyQuizById(quizId) ?? getManagementQuizById(quizId) ?? getLogicQuizById(quizId) ?? getSociologyQuizById(quizId);
}

export function getAllLessons(): Lesson[] {
  return ALL_LESSONS;
}

export function getAllQuizzes(): Quiz[] {
  return ALL_QUIZZES;
}

export function getQuizzesByRef(refId: string): Quiz[] {
  return ALL_QUIZZES.filter((q) => q.refId === refId);
}

export function getLessonQuizzes(lessonId: string): Quiz[] {
  return ALL_QUIZZES.filter((q) => q.type === 'lesson-quiz' && q.refId === lessonId);
}

export function getChapterQuiz(chapterId: string): Quiz[] {
  return ALL_QUIZZES.filter((q) => q.type === 'chapter-quiz' && q.refId === chapterId);
}

export function getFinalQuiz(subjectId: string): Quiz[] {
  return ALL_QUIZZES.filter((q) => q.type === 'final-quiz' && q.refId === subjectId);
}

// 获取下一节课（按全课程合并顺序，跨学科）
export function getNextLesson(lessonId: string): Lesson | undefined {
  const idx = ALL_LESSONS.findIndex((l) => l.id === lessonId);
  if (idx < 0 || idx >= ALL_LESSONS.length - 1) return undefined;
  return ALL_LESSONS[idx + 1];
}

// 获取上一节课
export function getPrevLesson(lessonId: string): Lesson | undefined {
  const idx = ALL_LESSONS.findIndex((l) => l.id === lessonId);
  if (idx <= 0) return undefined;
  return ALL_LESSONS[idx - 1];
}
