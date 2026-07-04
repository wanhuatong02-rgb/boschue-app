import type { Quiz } from '@/types';
import { LOGIC_SUBJECT } from './subject';

// 重导出课程数据
export { LOGIC_LESSONS, getLessonById } from './lessons';

// 导出学科定义
export { LOGIC_SUBJECT } from './subject';

// 获取所有逻辑学测验
import { CHAPTER_QUIZ_1_EXTENDED } from './quizzes/chapter-quiz-1-extended';
import { CHAPTER_QUIZ_2_EXTENDED } from './quizzes/chapter-quiz-2-extended';
import { CHAPTER_QUIZ_3_EXTENDED } from './quizzes/chapter-quiz-3-extended';
import { CHAPTER_QUIZ_4_EXTENDED } from './quizzes/chapter-quiz-4-extended';
import { CHAPTER_QUIZ_5_EXTENDED } from './quizzes/chapter-quiz-5-extended';
import { FINAL_QUIZ } from './quizzes/final-quiz';
import { ALL_LOGIC_LESSON_QUIZZES } from './quizzes/lesson-quizzes-full';

export const LOGIC_ALL_QUIZZES: Quiz[] = [
  ...ALL_LOGIC_LESSON_QUIZZES,  // 小节测验 - 新增
  ...CHAPTER_QUIZ_1_EXTENDED,
  ...CHAPTER_QUIZ_2_EXTENDED,
  ...CHAPTER_QUIZ_3_EXTENDED,
  ...CHAPTER_QUIZ_4_EXTENDED,
  ...CHAPTER_QUIZ_5_EXTENDED,
  ...FINAL_QUIZ,
];

export function getLogicQuizById(quizId: string): Quiz | undefined {
  return LOGIC_ALL_QUIZZES.find(quiz => quiz.id === quizId);
}