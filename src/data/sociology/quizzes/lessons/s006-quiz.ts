import type { Quiz } from '@/types';

// S006 社会与文化概论 - 章节测验
export const S006_QUIZ: Quiz[] = [
  {
    id: 'soc_s006_q001',
    type: 'lesson-quiz',
    refId: 'S006',
    subjectId: 'sociology',

    question: '文化的基本构成要素不包括以下哪项？',
    options: [
      { id: 'a', text: '符号' },
      { id: 'b', text: '价值观' },
      { id: 'c', text: '规范' },
      { id: 'd', text: '个体心理' }
    ],
    correctOptionId: 'd',
    explanation: '文化的构成要素包括符号、价值观、规范和物质产品，个体心理不属于文化的构成要素。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s006_q002',
    type: 'lesson-quiz',
    refId: 'S006',
    subjectId: 'sociology',

    question: '文化相对主义强调什么？',
    options: [
      { id: 'a', text: '所有文化都应该统一' },
      { id: 'b', text: '应从文化内部视角理解其合理性' },
      { id: 'c', text: '西方文化更先进' },
      { id: 'd', text: '文化无法比较' }
    ],
    correctOptionId: 'b',
    explanation: '文化相对主义强调应从文化内部视角理解其合理性，避免用其他文化标准评判。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s006_q003',
    type: 'lesson-quiz',
    refId: 'S006',
    subjectId: 'sociology',

    question: '物质文化与非物质文化的区别是什么？',
    options: [
      { id: 'a', text: '存在时间长短' },
      { id: 'b', text: '实体性与精神性' },
      { id: 'c', text: '传播方式' },
      { id: 'd', text: '重要性程度' }
    ],
    correctOptionId: 'b',
    explanation: '物质文化是文化的实体表现，如建筑、工具；非物质文化是文化的精神内涵，如信仰、价值观。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s006_q004',
    type: 'lesson-quiz',
    refId: 'S006',
    subjectId: 'sociology',

    question: '文化变迁是文化的固有特性，包括发明、发现和传播三种形式。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '文化变迁确实是文化的固有特性，主要通过发明、发现和传播三种形式实现。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s006_q005',
    type: 'lesson-quiz',
    refId: 'S006',
    subjectId: 'sociology',

    question: '文化多样性与相对主义面临的主要挑战是什么？',
    options: [
      { id: 'a', text: '文化无法传承' },
      { id: 'b', text: '在涉及人权等普世价值时与相对主义的冲突' },
      { id: 'c', text: '文化过于复杂' },
      { id: 'd', text: '文化传播困难' }
    ],
    correctOptionId: 'b',
    explanation: '文化相对主义与普世价值（如人权）之间存在冲突，这是其面临的主要挑战。',
  hint: '',
  knowledgePoints: []
  },
];

export default S006_QUIZ;