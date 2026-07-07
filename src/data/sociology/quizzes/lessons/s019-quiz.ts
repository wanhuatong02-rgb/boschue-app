import type { Quiz } from '@/types';

// S019 社会角色理论 - 章节测验
export const S019_QUIZ: Quiz[] = [
  {
    id: 'soc_s019_q001',
    type: 'lesson-quiz',
    refId: 'S-B09',
    subjectId: 'sociology',

    question: '角色期待是指什么？',
    options: [
      { id: 'a', text: '个人的愿望' },
      { id: 'b', text: '社会对处于特定地位的个体行为的期待和要求' },
      { id: 'c', text: '个人对社会的期待' },
      { id: 'd', text: '对未来的期望' }
    ],
    correctOptionId: 'b',
    explanation: '角色期待是社会对处于特定地位的个体行为的期待和要求。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s019_q002',
    type: 'lesson-quiz',
    refId: 'S-B09',
    subjectId: 'sociology',

    question: '角色冲突发生在什么情况下？',
    options: [
      { id: 'a', text: '只有一个角色时' },
      { id: 'b', text: '个体同时承担的多个角色要求不一致时' },
      { id: 'c', text: '角色要求一致时' },
      { id: 'd', text: '角色很简单时' }
    ],
    correctOptionId: 'b',
    explanation: '角色冲突发生在个体同时承担的多个角色要求不一致时。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s019_q003',
    type: 'lesson-quiz',
    refId: 'S-B09',
    subjectId: 'sociology',

    question: '角色认同是指什么？',
    options: [
      { id: 'a', text: '拒绝角色' },
      { id: 'b', text: '个体对特定角色的接受和内化程度' },
      { id: 'c', text: '批评角色' },
      { id: 'd', text: '忽略角色' }
    ],
    correctOptionId: 'b',
    explanation: '角色认同是个体对特定角色的接受和内化程度。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s019_q004',
    type: 'lesson-quiz',
    refId: 'S-B09',
    subjectId: 'sociology',

    question: '角色紧张是指个体履行单一角色时遇到的困难和压力。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '角色紧张确实是指个体履行单一角色时遇到的困难和压力。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s019_q005',
    type: 'lesson-quiz',
    refId: 'S-B09',
    subjectId: 'sociology',

    question: '现代社会中，个体通常承担什么样的角色？',
    options: [
      { id: 'a', text: '单一角色' },
      { id: 'b', text: '同时承担多种角色' },
      { id: 'c', text: '没有角色' },
      { id: 'd', text: '固定角色' }
    ],
    correctOptionId: 'b',
    explanation: '现代社会中，个体通常同时承担多种角色。',
  hint: '',
  knowledgePoints: []
  },
];

export default S019_QUIZ;