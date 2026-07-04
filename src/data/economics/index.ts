import type { Quiz, SubjectId } from '@/types';
import { ECONOMICS_SUBJECT, ECONOMICS_FINAL_QUIZ } from './subject';
import { LESSON_QUIZZES } from './quizzes/lesson-quizzes';
import { CHAPTER_QUIZ_1 } from './quizzes/chapter-quiz-1';
import { CHAPTER_QUIZ_2 } from './quizzes/chapter-quiz-2';
import { CHAPTER_QUIZ_3 } from './quizzes/chapter-quiz-3';
import { CHAPTER_QUIZ_4 } from './quizzes/chapter-quiz-4';
import { CHAPTER_QUIZ_5 } from './quizzes/chapter-quiz-5';
import { CHAPTER_QUIZ_6 } from './quizzes/chapter-quiz-6';
import { CHAPTER_QUIZ_7 } from './quizzes/chapter-quiz-7';
import { CHAPTER_QUIZ_8 } from './quizzes/chapter-quiz-8';
import { ECONOMICS_LESSONS, getLessonById } from './lessons';

// 经济学全部题目集合
export const ECONOMICS_ALL_QUIZZES: Quiz[] = [
  ...LESSON_QUIZZES,
  ...CHAPTER_QUIZ_1,
  ...CHAPTER_QUIZ_2,
  ...CHAPTER_QUIZ_3,
  ...CHAPTER_QUIZ_4,
  ...CHAPTER_QUIZ_5,
  ...CHAPTER_QUIZ_6,
  ...CHAPTER_QUIZ_7,
  ...CHAPTER_QUIZ_8,
  ...ECONOMICS_FINAL_QUIZ,
];

// 经济学完整数据导出
export const ECONOMICS_DATA = {
  subject: ECONOMICS_SUBJECT,
  lessons: ECONOMICS_LESSONS,
  quizzes: ECONOMICS_ALL_QUIZZES,
};

export { ECONOMICS_SUBJECT, ECONOMICS_LESSONS, getLessonById };

// 经济学课程查询函数
export function getEconomicsQuizById(quizId: string): Quiz | undefined {
  return ECONOMICS_ALL_QUIZZES.find((q) => q.id === quizId);
}

export function getEconomicsQuizzesByRef(refId: string): Quiz[] {
  return ECONOMICS_ALL_QUIZZES.filter((q) => q.refId === refId);
}
