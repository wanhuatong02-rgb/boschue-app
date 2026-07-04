import type { Quiz } from '@/types';

// 导入所有社会学课程测验
import S001_QUIZ from './lessons/s001-quiz';
import S002_QUIZ from './lessons/s002-quiz';
import S003_QUIZ from './lessons/s003-quiz';
import S004_QUIZ from './lessons/s004-quiz';
import S005_QUIZ from './lessons/s005-quiz';
import S006_QUIZ from './lessons/s006-quiz';
import S007_QUIZ from './lessons/s007-quiz';
import S008_QUIZ from './lessons/s008-quiz';
import S009_QUIZ from './lessons/s009-quiz';
import S010_QUIZ from './lessons/s010-quiz';
import S011_QUIZ from './lessons/s011-quiz';
import S012_QUIZ from './lessons/s012-quiz';
import S013_QUIZ from './lessons/s013-quiz';
import S014_QUIZ from './lessons/s014-quiz';
import S015_QUIZ from './lessons/s015-quiz';
import S016_QUIZ from './lessons/s016-quiz';
import S017_QUIZ from './lessons/s017-quiz';
import S018_QUIZ from './lessons/s018-quiz';
import S019_QUIZ from './lessons/s019-quiz';
import S020_QUIZ from './lessons/s020-quiz';
import S021_QUIZ from './lessons/s021-quiz';
import S022_QUIZ from './lessons/s022-quiz';
import S023_QUIZ from './lessons/s023-quiz';
import S024_QUIZ from './lessons/s024-quiz';
import S025_QUIZ from './lessons/s025-quiz';
import S026_QUIZ from './lessons/s026-quiz';
import S027_QUIZ from './lessons/s027-quiz';
import S028_QUIZ from './lessons/s028-quiz';
import S029_QUIZ from './lessons/s029-quiz';
import S030_QUIZ from './lessons/s030-quiz';
import S031_QUIZ from './lessons/s031-quiz';
import S032_QUIZ from './lessons/s032-quiz';
import S033_QUIZ from './lessons/s033-quiz';
import S034_QUIZ from './lessons/s034-quiz';
import S035_QUIZ from './lessons/s035-quiz';
import S036_QUIZ from './lessons/s036-quiz';
import S037_QUIZ from './lessons/s037-quiz';
import S038_QUIZ from './lessons/s038-quiz';
import S039_QUIZ from './lessons/s039-quiz';
import S040_QUIZ from './lessons/s040-quiz';
import S041_QUIZ from './lessons/s041-quiz';
import S042_QUIZ from './lessons/s042-quiz';
import S043_QUIZ from './lessons/s043-quiz';
import S044_QUIZ from './lessons/s044-quiz';
import S045_QUIZ from './lessons/s045-quiz';
import S046_QUIZ from './lessons/s046-quiz';
import S047_QUIZ from './lessons/s047-quiz';
import S048_QUIZ from './lessons/s048-quiz';
import S049_QUIZ from './lessons/s049-quiz';
import S050_QUIZ from './lessons/s050-quiz';

// 导入章节测验和期末测验
import { CHAPTER_QUIZ_1 } from './chapter-quiz-1';
import { CHAPTER_QUIZ_2 } from './chapter-quiz-2';
import { CHAPTER_QUIZ_3 } from './chapter-quiz-3';
import { CHAPTER_QUIZ_4 } from './chapter-quiz-4';
import { CHAPTER_QUIZ_5 } from './chapter-quiz-5';
import { FINAL_QUIZ } from './final-quiz';

// 汇总所有社会学测验
export const ALL_SOCIOLOGY_LESSON_QUIZZES: Quiz[] = [
  ...S001_QUIZ, ...S002_QUIZ, ...S003_QUIZ, ...S004_QUIZ, ...S005_QUIZ,
  ...S006_QUIZ, ...S007_QUIZ, ...S008_QUIZ, ...S009_QUIZ, ...S010_QUIZ,
  ...S011_QUIZ, ...S012_QUIZ, ...S013_QUIZ, ...S014_QUIZ, ...S015_QUIZ,
  ...S016_QUIZ, ...S017_QUIZ, ...S018_QUIZ, ...S019_QUIZ, ...S020_QUIZ,
  ...S021_QUIZ, ...S022_QUIZ, ...S023_QUIZ, ...S024_QUIZ, ...S025_QUIZ,
  ...S026_QUIZ, ...S027_QUIZ, ...S028_QUIZ, ...S029_QUIZ, ...S030_QUIZ,
  ...S031_QUIZ, ...S032_QUIZ, ...S033_QUIZ, ...S034_QUIZ, ...S035_QUIZ,
  ...S036_QUIZ, ...S037_QUIZ, ...S038_QUIZ, ...S039_QUIZ, ...S040_QUIZ,
  ...S041_QUIZ, ...S042_QUIZ, ...S043_QUIZ, ...S044_QUIZ, ...S045_QUIZ,
  ...S046_QUIZ, ...S047_QUIZ, ...S048_QUIZ, ...S049_QUIZ, ...S050_QUIZ,
  ...CHAPTER_QUIZ_1, ...CHAPTER_QUIZ_2, ...CHAPTER_QUIZ_3, ...CHAPTER_QUIZ_4, ...CHAPTER_QUIZ_5,
  ...FINAL_QUIZ,
];

// 获取特定测验的函数
export function getSociologyQuizById(quizId: string): Quiz | undefined {
  return ALL_SOCIOLOGY_LESSON_QUIZZES.find(quiz => quiz.id === quizId);
}

// 导出所有社会学测验
export const SOCIOLOGY_ALL_QUIZZES = ALL_SOCIOLOGY_LESSON_QUIZZES;