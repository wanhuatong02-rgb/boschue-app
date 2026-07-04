import type { Subject, Quiz } from '@/types';
import { LOGIC_LESSONS } from './lessons';
import { CHAPTER_QUIZ_1_EXTENDED } from './quizzes/chapter-quiz-1-extended';
import { CHAPTER_QUIZ_2_EXTENDED } from './quizzes/chapter-quiz-2-extended';
import { CHAPTER_QUIZ_3_EXTENDED } from './quizzes/chapter-quiz-3-extended';
import { CHAPTER_QUIZ_4_EXTENDED } from './quizzes/chapter-quiz-4-extended';
import { CHAPTER_QUIZ_5_EXTENDED } from './quizzes/chapter-quiz-5-extended';
import { FINAL_QUIZ } from './quizzes/final-quiz';

// 逻辑学学科定义（50 章）
export const LOGIC_SUBJECT: Subject = {
  id: 'logic',
  name: '逻辑学',
  code: 'L',
  color: '#D4A574',
  colorLight: '#F5EFE5',
  textbook: '陈波《逻辑学导论》（第4/5版）',
  goal: '学完全部课程，用户能够系统掌握逻辑学的基本概念和推理方法，理解命题逻辑、谓词逻辑等核心理论，识别日常论证中的逻辑谬误，培养批判性思维能力，能够将逻辑思维运用于学习、工作和生活决策中，达到逻辑学入门水平。',
  status: 'active',
  chapters: [
    {
      id: 'L-CH1',
      subjectId: 'logic',
      title: '逻辑学基础',
      subtitle: '入门与核心概念',
      description: '涵盖逻辑学的定义、命题与语句、推理与论证、演绎与归纳等内容，为深入学习形式逻辑奠定坚实基础。',
      order: 1,
      lessons: LOGIC_LESSONS.slice(0, 10),
      chapterQuiz: CHAPTER_QUIZ_1_EXTENDED,
      unlockCondition: { type: 'none' },
    },
    {
      id: 'L-CH2',
      subjectId: 'logic',
      title: '命题逻辑',
      subtitle: '形式化推理入门',
      description: '深入学习逻辑联结词、真值表、重言式、推理规则和自然演绎，掌握命题逻辑的符号化方法和形式推理技巧。',
      order: 2,
      lessons: LOGIC_LESSONS.slice(10, 20),
      chapterQuiz: CHAPTER_QUIZ_2_EXTENDED,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'L-CH1', requireScore: 60 },
    },
    {
      id: 'L-CH3',
      subjectId: 'logic',
      title: '谓词逻辑',
      subtitle: '量化推理与关系分析',
      description: '掌握谓词与量词的使用、符号化方法、量化推理规则和自然演绎，理解关系谓词和多重量化，体会谓词逻辑的表达力和局限性。',
      order: 3,
      lessons: LOGIC_LESSONS.slice(20, 30),
      chapterQuiz: CHAPTER_QUIZ_3_EXTENDED,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'L-CH2', requireScore: 60 },
    },
    {
      id: 'L-CH4',
      subjectId: 'logic',
      title: '非形式逻辑与谬误',
      subtitle: '日常论证分析',
      description: '学习非形式逻辑的基本概念，识别各种常见逻辑谬误（歧义谬误、相干谬误、预设谬误、证据谬误），掌握归纳推理和科学推理的实用技能。',
      order: 4,
      lessons: LOGIC_LESSONS.slice(30, 40),
      chapterQuiz: CHAPTER_QUIZ_4_EXTENDED,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'L-CH3', requireScore: 60 },
    },
    {
      id: 'L-CH5',
      subjectId: 'logic',
      title: '进阶逻辑与逻辑思维',
      subtitle: '拓展与应用',
      description: '了解模态逻辑、道义逻辑、认知逻辑等非经典逻辑，探索逻辑与计算机科学的关系，系统培养批判性思维和论证写作能力，完成逻辑学习之旅。',
      order: 5,
      lessons: LOGIC_LESSONS.slice(40, 50),
      chapterQuiz: CHAPTER_QUIZ_5_EXTENDED,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'L-CH4', requireScore: 60 },
    },
  ],
  finalQuiz: FINAL_QUIZ,
};

export const LOGIC_FINAL_QUIZ: Quiz[] = FINAL_QUIZ;