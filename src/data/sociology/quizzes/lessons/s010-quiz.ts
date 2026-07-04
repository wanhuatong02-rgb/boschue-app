import type { Quiz } from '@/types';

// S010 社会制度 - 章节测验
export const S010_QUIZ: Quiz[] = [
  {
    id: 'soc_s010_q001',
    type: 'lesson-quiz',
    refId: 'S010',
    subjectId: 'sociology',

    question: '社会制度的主要功能不包括以下哪项？',
    options: [
      { id: 'a', text: '目标达成功能' },
      { id: 'b', text: '适应功能' },
      { id: 'c', text: '整合功能' },
      { id: 'd', text: '破坏功能' }
    ],
    correctOptionId: 'd',
    explanation: '社会制度的主要功能包括目标达成功能、适应功能、整合功能、模式维护功能，不包括破坏功能。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s010_q002',
    type: 'lesson-quiz',
    refId: 'S010',
    subjectId: 'sociology',

    question: '社会制度的主要特征不包括以下哪项？',
    options: [
      { id: 'a', text: '普遍性' },
      { id: 'b', text: '强制性' },
      { id: 'c', text: '稳定性' },
      { id: 'd', text: '随机性' }
    ],
    correctOptionId: 'd',
    explanation: '社会制度的特征包括普遍性、强制性、稳定性、文化传承性，不包括随机性。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s010_q003',
    type: 'lesson-quiz',
    refId: 'S010',
    subjectId: 'sociology',

    question: '下列哪项不是五大主要社会制度之一？',
    options: [
      { id: 'a', text: '家庭制度' },
      { id: 'b', text: '教育制度' },
      { id: 'c', text: '宗教制度' },
      { id: 'd', text: '娱乐制度' }
    ],
    correctOptionId: 'd',
    explanation: '五大主要社会制度包括家庭、教育、宗教、经济、政治制度，娱乐制度不是其中之一。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s010_q004',
    type: 'lesson-quiz',
    refId: 'S010',
    subjectId: 'sociology',

    question: '制度化是指社会实践逐渐固定为常规模式的过程。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '制度化确实是社会实践逐渐固定为常规模式的过程，通过规范约束和价值导向协调个体行为。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s010_q005',
    type: 'lesson-quiz',
    refId: 'S010',
    subjectId: 'sociology',

    question: '社会制度变迁的动力不包括以下哪项？',
    options: [
      { id: 'a', text: '社会需求变化' },
      { id: 'b', text: '环境变迁' },
      { id: 'c', text: '价值观念更新' },
      { id: 'd', text: '制度的永恒不变' }
    ],
    correctOptionId: 'd',
    explanation: '社会制度变迁的动力包括社会需求变化、环境变迁、价值观念更新等，制度不是永恒不变的。',
  hint: '',
  knowledgePoints: []
  },
];

export default S010_QUIZ;