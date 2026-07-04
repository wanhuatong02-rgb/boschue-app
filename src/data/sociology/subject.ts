import type { Subject, Quiz } from '@/types';
import { SOCIOLOGY_LESSONS } from './lessons';
import { CHAPTER_QUIZ_1 } from './quizzes/chapter-quiz-1';
import { CHAPTER_QUIZ_2 } from './quizzes/chapter-quiz-2';
import { CHAPTER_QUIZ_3 } from './quizzes/chapter-quiz-3';
import { CHAPTER_QUIZ_4 } from './quizzes/chapter-quiz-4';
import { CHAPTER_QUIZ_5 } from './quizzes/chapter-quiz-5';
import { FINAL_QUIZ } from './quizzes/final-quiz';

export const SOCIOLOGY_SUBJECT: Subject = {
  id: 'sociology',
  name: '社会学',
  code: 'S',
  color: '#7AAEC0',
  colorLight: '#E8F5F9',
  textbook: '郑杭生《社会学概论新修》（第五版）',
  goal: '学完全部课程，能够像社会学家一样分析日常现象（阶层、组织、文化、变迁），读懂社会新闻，具备基本的社会学直觉与非专业本科生通识水平。',
  status: 'active',
  chapters: [
    {
      id: 'S-CH1',
      subjectId: 'sociology',
      title: '社会基础篇',
      subtitle: '社会学导论',
      description: '涵盖社会学的起源、发展历程、核心概念和研究方法，建立社会学想象力。',
      order: 1,
      lessons: SOCIOLOGY_LESSONS.filter((l) => l.chapterId === 'S-CH1'),
      chapterQuiz: CHAPTER_QUIZ_1,
      unlockCondition: { type: 'none' as const },
    },
    {
      id: 'S-CH2',
      subjectId: 'sociology',
      title: '社会结构篇',
      subtitle: '分层与流动',
      description: '深入探讨社会分层、社会流动、社会阶级等核心议题，理解社会不平等的机制。',
      order: 2,
      lessons: SOCIOLOGY_LESSONS.filter((l) => l.chapterId === 'S-CH2'),
      chapterQuiz: CHAPTER_QUIZ_2,
      unlockCondition: { type: 'chapter-quiz-pass' as const, requireChapterId: 'S-CH1', requireScore: 60 },
    },
    {
      id: 'S-CH3',
      subjectId: 'sociology',
      title: '社会变迁篇',
      subtitle: '转型与发展',
      description: '分析社会变迁的动力机制、现代化理论、全球化与社会发展趋势。',
      order: 3,
      lessons: SOCIOLOGY_LESSONS.filter((l) => l.chapterId === 'S-CH3'),
      chapterQuiz: CHAPTER_QUIZ_3,
      unlockCondition: { type: 'chapter-quiz-pass' as const, requireChapterId: 'S-CH2', requireScore: 60 },
    },
    {
      id: 'S-CH4',
      subjectId: 'sociology',
      title: '应用领域篇',
      subtitle: '专题研究',
      description: '涵盖家庭、教育、宗教、性别、城市等社会学应用领域的专题探讨。',
      order: 4,
      lessons: SOCIOLOGY_LESSONS.filter((l) => l.chapterId === 'S-CH4'),
      chapterQuiz: CHAPTER_QUIZ_4,
      unlockCondition: { type: 'chapter-quiz-pass' as const, requireChapterId: 'S-CH3', requireScore: 60 },
    },
    {
      id: 'S-CH5',
      subjectId: 'sociology',
      title: '研究前沿篇',
      subtitle: '理论与方法',
      description: '介绍社会学前沿理论、研究方法创新以及中国社会学的发展现状。',
      order: 5,
      lessons: SOCIOLOGY_LESSONS.filter((l) => l.chapterId === 'S-CH5'),
      chapterQuiz: CHAPTER_QUIZ_5,
      unlockCondition: { type: 'chapter-quiz-pass' as const, requireChapterId: 'S-CH4', requireScore: 60 },
    },
  ],
  finalQuiz: FINAL_QUIZ,
};

export const SOCIOLOGY_FINAL_QUIZ: Quiz[] = FINAL_QUIZ as Quiz[];
