import type { Quiz } from '@/types';

// S-B00 社会结构导引 - 章节测验
export const SB00_QUIZ: Quiz[] = [
  {
    id: 'soc_intro_b00_q001',
    type: 'lesson-quiz',
    refId: 'S-B00',
    subjectId: 'sociology',
    question: '社会分层研究最关注的是？',
    options: [
      { id: 'a', text: '人们在社会中的不平等地位及其形成机制' },
      { id: 'b', text: '个体心理差异' },
      { id: 'c', text: '语言符号系统' },
      { id: 'd', text: '自然环境变迁' },
    ],
    correctOptionId: 'a',
    explanation: '正确答案是「人们在社会中的不平等地位及其形成机制」。本题考察「社会结构导引」的基础认知，其他选项为相近概念的混淆项。 社会结构篇的核心问题是分层、流动与不平等',
    hint: '',
    knowledgePoints: ['社会结构导引']
  },
  {
    id: 'soc_intro_b00_q002',
    type: 'lesson-quiz',
    refId: 'S-B00',
    subjectId: 'sociology',
    question: '以下关于「社会结构导引」的描述，正确的是？',
    options: [
      { id: 'a', text: '人们在社会中的不平等地位及其形成机制' },
      { id: 'b', text: '错误：心理差异' },
      { id: 'c', text: '错误：符号系统' },
      { id: 'd', text: '错误：环境变迁' },
    ],
    correctOptionId: 'a',
    explanation: '正确选项是「人们在社会中的不平等地位及其形成机制」。社会结构篇的核心问题是分层、流动与不平等',
    hint: '',
    knowledgePoints: ['社会结构导引概念']
  },
  {
    id: 'soc_intro_b00_q003',
    type: 'lesson-quiz',
    refId: 'S-B00',
    subjectId: 'sociology',
    question: '下列选项中，与「社会结构导引」最相关的是？',
    options: [
      { id: 'a', text: '以上都是' },
      { id: 'b', text: '以上都不是' },
      { id: 'c', text: '人们在社会中的不平等地位及其形成机制' },
      { id: 'd', text: '个体心理差异' },
    ],
    correctOptionId: 'c',
    explanation: '「人们在社会中的不平等地位及其形成机制」与社会结构导引直接相关。',
    hint: '',
    knowledgePoints: ['社会结构导引应用']
  }
];
