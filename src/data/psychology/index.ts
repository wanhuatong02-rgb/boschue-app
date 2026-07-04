import type { Quiz } from '@/types';
import { PSYCHOLOGY_SUBJECT, PSYCHOLOGY_FINAL_QUIZ } from './subject';
import { LESSON_QUIZZES } from './quizzes/lesson-quizzes';
import { CHAPTER_QUIZ_1 } from './quizzes/chapter-quiz-1';
import { CHAPTER_QUIZ_2 } from './quizzes/chapter-quiz-2';
import { CHAPTER_QUIZ_3 } from './quizzes/chapter-quiz-3';
import { CHAPTER_QUIZ_4 } from './quizzes/chapter-quiz-4';
import { CHAPTER_QUIZ_5 } from './quizzes/chapter-quiz-5';
import { CHAPTER_QUIZ_6 } from './quizzes/chapter-quiz-6';
import { CHAPTER_QUIZ_7 } from './quizzes/chapter-quiz-7';
import { CHAPTER_QUIZ_8 } from './quizzes/chapter-quiz-8';
import { PSYCHOLOGY_LESSONS, getLessonById } from './lessons';

// 心理学全部题目集合
export const PSYCHOLOGY_ALL_QUIZZES: Quiz[] = [
  ...LESSON_QUIZZES,
  ...CHAPTER_QUIZ_1,
  ...CHAPTER_QUIZ_2,
  ...CHAPTER_QUIZ_3,
  ...CHAPTER_QUIZ_4,
  ...CHAPTER_QUIZ_5,
  ...CHAPTER_QUIZ_6,
  ...CHAPTER_QUIZ_7,
  ...CHAPTER_QUIZ_8,
  ...PSYCHOLOGY_FINAL_QUIZ,
];

// 心理学完整数据导出
export const PSYCHOLOGY_DATA = {
  subject: PSYCHOLOGY_SUBJECT,
  lessons: PSYCHOLOGY_LESSONS,
  quizzes: PSYCHOLOGY_ALL_QUIZZES,
};

export { PSYCHOLOGY_SUBJECT, PSYCHOLOGY_LESSONS, getLessonById };

// 心理学课程查询函数
export function getPsychologyQuizById(quizId: string): Quiz | undefined {
  return PSYCHOLOGY_ALL_QUIZZES.find((q) => q.id === quizId);
}

export function getPsychologyQuizzesByRef(refId: string): Quiz[] {
  return PSYCHOLOGY_ALL_QUIZZES.filter((q) => q.refId === refId);
}
