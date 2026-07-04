import type { Quiz } from '@/types';

// S046 数字社会学 - 章节测验
export const S046_QUIZ: Quiz[] = [
  {
    id: 'soc_s046_q001',
    type: 'lesson-quiz',
    refId: 'S046',
    subjectId: 'sociology',

    question: '数字社会学研究什么？',
    options: [
      { id: 'a', text: '纯技术问题' },
      { id: 'b', text: '数字技术对社会结构、社会关系、社会行为的影响' },
      { id: 'c', text: '数学问题' },
      { id: 'd', text: '物理现象' }
    ],
    correctOptionId: 'b',
    explanation: '数字社会学研究数字技术对社会结构、社会关系、社会行为的影响，探讨数字技术如何改变人类生活方式。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s046_q002',
    type: 'lesson-quiz',
    refId: 'S046',
    subjectId: 'sociology',

    question: '数字化对社会交往的主要影响是什么？',
    options: [
      { id: 'a', text: '只减少交往' },
      { id: 'b', text: '从面对面交流扩展到线上互动' },
      { id: 'c', text: '没有影响' },
      { id: 'd', text: '只增加交往' }
    ],
    correctOptionId: 'b',
    explanation: '数字化改变了人们的交往方式，从面对面交流扩展到线上互动，突破了时空限制。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s046_q003',
    type: 'lesson-quiz',
    refId: 'S046',
    subjectId: 'sociology',

    question: '卡斯特尔提出的"网络社会"概念强调什么？',
    options: [
      { id: 'a', text: '网络不重要' },
      { id: 'b', text: '网络是信息时代社会的组织逻辑' },
      { id: 'c', text: '网络只用于娱乐' },
      { id: 'd', text: '网络是过时概念' }
    ],
    correctOptionId: 'b',
    explanation: '卡斯特尔提出"网络社会"概念，认为网络是信息时代社会的组织逻辑。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s046_q004',
    type: 'lesson-quiz',
    refId: 'S046',
    subjectId: 'sociology',

    question: '数字鸿沟指不同群体在数字技术接入、使用、受益方面的差距。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '数字鸿沟确实指不同群体在数字技术接入、使用、受益方面的差距。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s046_q005',
    type: 'lesson-quiz',
    refId: 'S046',
    subjectId: 'sociology',

    question: '人工智能在社会中的影响不包括以下哪项？',
    options: [
      { id: 'a', text: '改变就业结构' },
      { id: 'b', text: '影响决策过程' },
      { id: 'c', text: '引发伦理问题' },
      { id: 'd', text: '完全消除所有社会问题' }
    ],
    correctOptionId: 'd',
    explanation: 'AI虽然带来很多变化，但不能完全消除所有社会问题，甚至可能带来新的挑战。',
  hint: '',
  knowledgePoints: []
  },
];

export default S046_QUIZ;