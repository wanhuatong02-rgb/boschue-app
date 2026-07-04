import type { Subject, Quiz } from '@/types';
import { MANAGEMENT_LESSONS } from './lessons';
import { CHAPTER_QUIZ_1 } from './quizzes/chapter-quiz-1';
import { CHAPTER_QUIZ_2 } from './quizzes/chapter-quiz-2';
import { CHAPTER_QUIZ_3 } from './quizzes/chapter-quiz-3';
import { CHAPTER_QUIZ_4 } from './quizzes/chapter-quiz-4';
import { CHAPTER_QUIZ_5 } from './quizzes/chapter-quiz-5';
import { FINAL_QUIZ } from './quizzes/final-quiz';

// 管理学学科定义（55 节）
export const MANAGEMENT_SUBJECT: Subject = {
  id: 'management',
  name: '管理学',
  code: 'M',
  color: '#9B7BB8',
  colorLight: '#EFE8F5',
  textbook: '周三多《管理学：原理与方法》',
  goal: '学完全部课程，用户能够掌握现代管理的核心理论与实践技能，理解管理的本质、职能和方法，具备发现问题、分析问题和解决问题的能力，能够运用管理学理论指导实际管理工作，达到非管理专业大学一学期通识课水平。',
  status: 'active',
  chapters: [
    {
      id: 'M-CH1',
      subjectId: 'management',
      title: '管理学基础',
      subtitle: '入门与核心概念',
      description: '涵盖管理学导论、管理者角色与技能、管理思想演进等基础内容，为后续深入学习奠定坚实基础。',
      order: 1,
      lessons: MANAGEMENT_LESSONS.slice(0, 12), // M-00 导论 + M-A00 + M-A01~M-A10
      chapterQuiz: CHAPTER_QUIZ_1,
      unlockCondition: { type: 'none' },
    },
    {
      id: 'M-CH2',
      subjectId: 'management',
      title: '计划与决策',
      subtitle: '战略与决策制定',
      description: '深入学习战略规划、环境分析、决策过程与方法，掌握SWOT、PESTEL等分析工具，培养科学决策能力。',
      order: 2,
      lessons: MANAGEMENT_LESSONS.slice(12, 23), // M-B00 + M-B01~M-B10
      chapterQuiz: CHAPTER_QUIZ_2,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'M-CH1', requireScore: 60 },
    },
    {
      id: 'M-CH3',
      subjectId: 'management',
      title: '组织设计与管理',
      subtitle: '结构与文化建设',
      description: '探讨组织设计原则、结构类型、部门化策略、组织文化与变革管理，理解如何构建高效组织体系。',
      order: 3,
      lessons: MANAGEMENT_LESSONS.slice(23, 34), // M-C00 + M-C01~M-C10
      chapterQuiz: CHAPTER_QUIZ_3,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'M-CH2', requireScore: 60 },
    },
    {
      id: 'M-CH4',
      subjectId: 'management',
      title: '领导力与激励',
      subtitle: '影响力与员工激发',
      description: '研究领导力理论、激励机制、沟通技巧，学会如何影响他人、激发员工潜力，提高团队效能。',
      order: 4,
      lessons: MANAGEMENT_LESSONS.slice(34, 45), // M-D00 + M-D01~M-D10
      chapterQuiz: CHAPTER_QUIZ_4,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'M-CH3', requireScore: 60 },
    },
    {
      id: 'M-CH5',
      subjectId: 'management',
      title: '控制与现代管理',
      subtitle: '监控与未来趋势',
      description: '掌握控制过程、绩效管理、质量控制方法，了解现代管理专题及未来发展趋势。',
      order: 5,
      lessons: MANAGEMENT_LESSONS.slice(45, 56), // M-E00 + M-E01~M-E10
      chapterQuiz: CHAPTER_QUIZ_5,
      unlockCondition: { type: 'chapter-quiz-pass', requireChapterId: 'M-CH4', requireScore: 60 },
    },
  ],
  finalQuiz: FINAL_QUIZ,
};

// 管理学期末测验
export const MANAGEMENT_FINAL_QUIZ: Quiz[] = FINAL_QUIZ;