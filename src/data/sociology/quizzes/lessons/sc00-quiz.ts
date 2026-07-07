import type { Quiz } from '@/types';

// S-C00 社会变迁导引 - 章节测验
export const SC00_QUIZ: Quiz[] = [
  {
    id: 'soc_intro_c00_q001',
    type: 'lesson-quiz',
    refId: 'S-C00',
    subjectId: 'sociology',
    question: '以下哪一项是社会变迁的直接表现？',
    options: [
      { id: 'a', text: '传统农业社会向现代工业社会转型' },
      { id: 'b', text: '个人日常习惯的改变' },
      { id: 'c', text: '单一个体的思想转变' },
      { id: 'd', text: '自然气候的季节性变化' },
    ],
    correctOptionId: 'a',
    explanation: '正确答案是「传统农业社会向现代工业社会转型」。本题考察「社会变迁导引」的基础认知，其他选项为相近概念的混淆项。 社会变迁关注宏观、长期的转型过程',
    hint: '',
    knowledgePoints: ['社会变迁导引']
  },
  {
    id: 'soc_intro_c00_q002',
    type: 'lesson-quiz',
    refId: 'S-C00',
    subjectId: 'sociology',
    question: '以下关于「社会变迁导引」的描述，正确的是？',
    options: [
      { id: 'a', text: '传统农业社会向现代工业社会转型' },
      { id: 'b', text: '错误：日常习惯的改变' },
      { id: 'c', text: '错误：个体的思想转变' },
      { id: 'd', text: '错误：气候的季节性变化' },
    ],
    correctOptionId: 'a',
    explanation: '正确选项是「传统农业社会向现代工业社会转型」。社会变迁关注宏观、长期的转型过程',
    hint: '',
    knowledgePoints: ['社会变迁导引概念']
  },
  {
    id: 'soc_intro_c00_q003',
    type: 'lesson-quiz',
    refId: 'S-C00',
    subjectId: 'sociology',
    question: '下列选项中，与「社会变迁导引」最相关的是？',
    options: [
      { id: 'a', text: '以上都是' },
      { id: 'b', text: '以上都不是' },
      { id: 'c', text: '传统农业社会向现代工业社会转型' },
      { id: 'd', text: '个人日常习惯的改变' },
    ],
    correctOptionId: 'c',
    explanation: '「传统农业社会向现代工业社会转型」与社会变迁导引直接相关。',
    hint: '',
    knowledgePoints: ['社会变迁导引应用']
  }
];
