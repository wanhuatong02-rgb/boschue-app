import type { Subject, Quiz } from '@/types';
import { PSYCHOLOGY_LESSONS } from './lessons';
import { CHAPTER_QUIZ_1 } from './quizzes/chapter-quiz-1';
import { CHAPTER_QUIZ_2 } from './quizzes/chapter-quiz-2';
import { CHAPTER_QUIZ_3 } from './quizzes/chapter-quiz-3';
import { CHAPTER_QUIZ_4 } from './quizzes/chapter-quiz-4';
import { CHAPTER_QUIZ_5 } from './quizzes/chapter-quiz-5';
import { CHAPTER_QUIZ_6 } from './quizzes/chapter-quiz-6';
import { CHAPTER_QUIZ_7 } from './quizzes/chapter-quiz-7';
import { CHAPTER_QUIZ_8 } from './quizzes/chapter-quiz-8';
import { FINAL_QUIZ } from './quizzes/final-quiz';

// 心理学学科定义（8+1 章）
export const PSYCHOLOGY_SUBJECT: Subject = {
  id: 'psychology',
  name: '心理学',
  code: 'P',
  color: '#D08068',
  colorLight: '#F5E8E5',
  textbook: '彭聃龄《普通心理学》（第5版）',
  goal: '学完全部课程，用户能像心理学家一样理解日常心理现象（刷手机上瘾、考试紧张、从众消费、情绪失控等），区分科学与伪心理学，掌握核心概念，达到非心理专业大学一学期通识课水平。',
  status: 'active',
  chapters: [
    {
      id: 'P-CH1',
      subjectId: 'psychology',
      title: '基础篇',
      subtitle: '心理过程',
      description: '对应彭聃龄第 1-7 章。从心理学是什么出发，建立认知过程（感觉、知觉、意识、注意、记忆、思维）的核心框架。',
      order: 1,
      lessons: PSYCHOLOGY_LESSONS.slice(0, 9), // P-00 + P-A00 + 基础篇 7 节
      chapterQuiz: CHAPTER_QUIZ_1,
      unlockCondition: { type: 'none' },
    },
    {
      id: 'P-CH2',
      subjectId: 'psychology',
      title: '进阶篇',
      subtitle: '动机·人格·社会',
      description: '对应彭聃龄第 8-12 章及社会心理学部分。从语言、动机、情绪到能力、人格，再到社会认知与社会影响。',
      order: 2,
      lessons: PSYCHOLOGY_LESSONS.slice(9, 18), // P-P00 + 进阶篇 8 节
      chapterQuiz: CHAPTER_QUIZ_2,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'P-CH1', requireScore: 60 },
    },
    {
      id: 'P-CH3',
      subjectId: 'psychology',
      title: '应用篇',
      subtitle: '发展·健康·应用',
      description: '对应发展、教育、健康、变态、咨询、积极及应用心理学。从理论走向现实，连接心理发展、心理健康与消费管理中的真实议题。',
      order: 3,
      lessons: PSYCHOLOGY_LESSONS.slice(18, 26), // P-Y00 + 应用篇 7 节
      chapterQuiz: CHAPTER_QUIZ_3,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'P-CH2', requireScore: 60 },
    },
    {
      id: 'P-CH4',
      subjectId: 'psychology',
      title: '语言与思维',
      subtitle: '符号加工与决策',
      description: '对应彭聃龄第 7-8 章（深化）。语言是思维的工具，决策偏差揭示了理性人假设的局限，创造力是发散与收敛的结合。',
      order: 4,
      lessons: PSYCHOLOGY_LESSONS.filter((l) => l.chapterId === 'P-CH4'),
      chapterQuiz: CHAPTER_QUIZ_4,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'P-CH3', requireScore: 60 },
    },
    {
      id: 'P-CH5',
      subjectId: 'psychology',
      title: '智力与创造力',
      subtitle: '能力差异与天赋',
      description: '对应彭聃龄第 11 章（深化）。从g因素到多元智力，理解"聪明"的多层含义，创造力可培养且有阈值效应。',
      order: 5,
      lessons: PSYCHOLOGY_LESSONS.filter((l) => l.chapterId === 'P-CH5'),
      chapterQuiz: CHAPTER_QUIZ_5,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'P-CH4', requireScore: 60 },
    },
    {
      id: 'P-CH6',
      subjectId: 'psychology',
      title: '社会心理',
      subtitle: '从众·偏见·群体',
      description: '对应彭聃龄社会心理学部分。从众与服从揭示情境力量，偏见与歧视源于认知分类和竞争，亲社会行为有进化和社会学习双重根源。',
      order: 6,
      lessons: PSYCHOLOGY_LESSONS.filter((l) => l.chapterId === 'P-CH6'),
      chapterQuiz: CHAPTER_QUIZ_6,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'P-CH5', requireScore: 60 },
    },
    {
      id: 'P-CH7',
      subjectId: 'psychology',
      title: '发展心理学',
      subtitle: '认知发展·社会化',
      description: '对应彭聃龄发展心理学部分。皮亚杰的认知阶段论与埃里克森的心理社会阶段论刻画发展轨迹，毕生发展观强调发展贯穿一生。',
      order: 7,
      lessons: PSYCHOLOGY_LESSONS.filter((l) => l.chapterId === 'P-CH7'),
      chapterQuiz: CHAPTER_QUIZ_7,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'P-CH6', requireScore: 60 },
    },
    {
      id: 'P-CH8',
      subjectId: 'psychology',
      title: '健康与变态心理学',
      subtitle: '压力·障碍·积极',
      description: '对应彭聃龄健康与变态心理学部分。压力应对是健康的基础，心理障碍需多标准判断，积极心理学关注幸福与优势。',
      order: 8,
      lessons: PSYCHOLOGY_LESSONS.filter((l) => l.chapterId === 'P-CH8'),
      chapterQuiz: CHAPTER_QUIZ_8,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'P-CH7', requireScore: 60 },
    },
  ],
  finalQuiz: FINAL_QUIZ,
};

export const PSYCHOLOGY_FINAL_QUIZ: Quiz[] = FINAL_QUIZ;
