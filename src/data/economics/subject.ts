import type { Subject, Quiz } from '@/types';
import { ECONOMICS_LESSONS } from './lessons';
import { CHAPTER_QUIZ_1 } from './quizzes/chapter-quiz-1';
import { CHAPTER_QUIZ_2 } from './quizzes/chapter-quiz-2';
import { CHAPTER_QUIZ_3 } from './quizzes/chapter-quiz-3';
import { CHAPTER_QUIZ_4 } from './quizzes/chapter-quiz-4';
import { CHAPTER_QUIZ_5 } from './quizzes/chapter-quiz-5';
import { CHAPTER_QUIZ_6 } from './quizzes/chapter-quiz-6';
import { CHAPTER_QUIZ_7 } from './quizzes/chapter-quiz-7';
import { CHAPTER_QUIZ_8 } from './quizzes/chapter-quiz-8';
import { FINAL_QUIZ } from './quizzes/final-quiz';

// 经济学学科定义（8 章）
export const ECONOMICS_SUBJECT: Subject = {
  id: 'economics',
  name: '经济学',
  code: 'E',
  color: '#7BB661',
  colorLight: '#E8F5E8',
  textbook: '曼昆《经济学原理》（第9版）',
  goal: '学完全部课程，用户能像经济学家一样分析日常现象（涨价、征税、失业、通胀），读懂财经新闻，具备基本的经济学直觉与批判能力，达到非经济专业大学一学期通识课水平。',
  status: 'active',
  chapters: [
    {
      id: 'E-CH1',
      subjectId: 'economics',
      title: '基础篇',
      subtitle: '微观入门',
      description: '对应曼昆第 1-9 章。建立"供需"核心直觉，这是理解一切经济现象的起点。',
      order: 1,
      lessons: ECONOMICS_LESSONS.filter((l) => l.chapterId === 'E-CH1'),
      chapterQuiz: CHAPTER_QUIZ_1,
      unlockCondition: { type: 'none' },
    },
    {
      id: 'E-CH2',
      subjectId: 'economics',
      title: '进阶篇',
      subtitle: '微观深入',
      description: '对应曼昆第 10-22 章。从"市场有效"走向"市场失灵"与"企业行为"，深化机制理解。',
      order: 2,
      lessons: ECONOMICS_LESSONS.filter((l) => l.chapterId === 'E-CH2'),
      chapterQuiz: CHAPTER_QUIZ_2,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'E-CH1', requireScore: 60 },
    },
    {
      id: 'E-CH3',
      subjectId: 'economics',
      title: '应用篇',
      subtitle: '宏观与现实',
      description: '对应曼昆第 23-36 章精选。从微观走向宏观，连接通胀、失业、增长、政策等真实议题。',
      order: 3,
      lessons: ECONOMICS_LESSONS.filter((l) => l.chapterId === 'E-CH3'),
      chapterQuiz: CHAPTER_QUIZ_3,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'E-CH2', requireScore: 60 },
    },
    {
      id: 'E-CH4',
      subjectId: 'economics',
      title: '市场结构与竞争',
      subtitle: '完全竞争到垄断',
      description: '对应曼昆第 14-17 章。理解市场结构的谱系，从完全竞争的效率基准到垄断的势力与损失。',
      order: 4,
      lessons: ECONOMICS_LESSONS.filter((l) => l.chapterId === 'E-CH4'),
      chapterQuiz: CHAPTER_QUIZ_4,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'E-CH3', requireScore: 60 },
    },
    {
      id: 'E-CH5',
      subjectId: 'economics',
      title: '劳动市场与收入分配',
      subtitle: '工资与公平',
      description: '对应曼昆第 18-20 章。劳动需求是派生需求，工资差异源于人力资本与歧视，收入不平等需要再分配矫正。',
      order: 5,
      lessons: ECONOMICS_LESSONS.filter((l) => l.chapterId === 'E-CH5'),
      chapterQuiz: CHAPTER_QUIZ_5,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'E-CH4', requireScore: 60 },
    },
    {
      id: 'E-CH6',
      subjectId: 'economics',
      title: '公共部门经济学',
      subtitle: '税收与外部性',
      description: '对应曼昆第 10-12 章。外部性与公共物品是市场失灵的两大根源，税制设计需平衡效率与公平。',
      order: 6,
      lessons: ECONOMICS_LESSONS.filter((l) => l.chapterId === 'E-CH6'),
      chapterQuiz: CHAPTER_QUIZ_6,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'E-CH5', requireScore: 60 },
    },
    {
      id: 'E-CH7',
      subjectId: 'economics',
      title: '宏观经济学核心',
      subtitle: 'GDP·CPI·失业',
      description: '对应曼昆第 23-28 章。GDP衡量产出，CPI衡量物价，失业率衡量就业——三大指标构成宏观分析的基础语言。',
      order: 7,
      lessons: ECONOMICS_LESSONS.filter((l) => l.chapterId === 'E-CH7'),
      chapterQuiz: CHAPTER_QUIZ_7,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'E-CH6', requireScore: 60 },
    },
    {
      id: 'E-CH8',
      subjectId: 'economics',
      title: '开放经济与全球化',
      subtitle: '贸易·汇率·发展',
      description: '对应曼昆贸易与开放经济部分。比较优势是贸易共赢的逻辑，汇率是开放经济的关键价格，全球化需要制度协调。',
      order: 8,
      lessons: ECONOMICS_LESSONS.filter((l) => l.chapterId === 'E-CH8'),
      chapterQuiz: CHAPTER_QUIZ_8,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'E-CH7', requireScore: 60 },
    },
  ],
  finalQuiz: FINAL_QUIZ,
};

export const ECONOMICS_FINAL_QUIZ: Quiz[] = FINAL_QUIZ;
