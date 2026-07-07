import type { Quiz } from '@/types';

// S-A00 社会基础导引 - 章节测验
export const SA00_QUIZ: Quiz[] = [
  {
    id: 'soc_intro_a00_q001',
    type: 'lesson-quiz',
    refId: 'S-A00',
    subjectId: 'sociology',
    question: '以下哪一项不属于社会学基础章节的学习重点？',
    options: [
      { id: 'a', text: '社会学的定义与发展历程' },
      { id: 'b', text: '宏观经济政策分析' },
      { id: 'c', text: '文化与社会化' },
      { id: 'd', text: '社会互动与群体' },
    ],
    correctOptionId: 'b',
    explanation: '正确答案是「宏观经济政策分析」。本题考察「社会基础导引」的基础认知，其他选项为相近概念的混淆项。 第一章聚焦社会学基本概念和研究方法',
    hint: '',
    knowledgePoints: ['社会基础导引']
  },
  {
    id: 'soc_intro_a00_q002',
    type: 'lesson-quiz',
    refId: 'S-A00',
    subjectId: 'sociology',
    question: '以下关于「社会基础导引」的描述，正确的是？',
    options: [
      { id: 'a', text: '宏观经济政策分析' },
      { id: 'b', text: '错误：与社会化' },
      { id: 'c', text: '错误：互动与群体' },
      { id: 'd', text: '错误：学的定义与发展历程' },
    ],
    correctOptionId: 'a',
    explanation: '正确选项是「宏观经济政策分析」。第一章聚焦社会学基本概念和研究方法',
    hint: '',
    knowledgePoints: ['社会基础导引概念']
  },
  {
    id: 'soc_intro_a00_q003',
    type: 'lesson-quiz',
    refId: 'S-A00',
    subjectId: 'sociology',
    question: '下列选项中，与「社会基础导引」最相关的是？',
    options: [
      { id: 'a', text: '以上都是' },
      { id: 'b', text: '以上都不是' },
      { id: 'c', text: '宏观经济政策分析' },
      { id: 'd', text: '文化与社会化' },
    ],
    correctOptionId: 'c',
    explanation: '「宏观经济政策分析」与社会基础导引直接相关。',
    hint: '',
    knowledgePoints: ['社会基础导引应用']
  }
];
