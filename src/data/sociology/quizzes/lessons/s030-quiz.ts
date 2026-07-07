import type { Quiz } from '@/types';

// S030 环境社会学 - 章节测验
export const S030_QUIZ: Quiz[] = [
  {
    id: 'soc_s030_q001',
    type: 'lesson-quiz',
    refId: 'S-C10',
    subjectId: 'sociology',

    question: '环境社会学研究的主要内容是什么？',
    options: [
      { id: 'a', text: '纯自然环境' },
      { id: 'b', text: '人类社会与自然环境的相互关系' },
      { id: 'c', text: '纯社会问题' },
      { id: 'd', text: '动物保护' }
    ],
    correctOptionId: 'b',
    explanation: '环境社会学研究人类社会与自然环境的相互关系，关注环境问题的社会维度。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s030_q002',
    type: 'lesson-quiz',
    refId: 'S-C10',
    subjectId: 'sociology',

    question: '环境问题的社会根源不包括以下哪项？',
    options: [
      { id: 'a', text: '工业化进程' },
      { id: 'b', text: '消费主义文化' },
      { id: 'c', text: '社会不平等' },
      { id: 'd', text: '天气预报' }
    ],
    correctOptionId: 'd',
    explanation: '环境问题的社会根源包括工业化、消费主义、社会不平等等，与天气预报无关。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s030_q003',
    type: 'lesson-quiz',
    refId: 'S-C10',
    subjectId: 'sociology',

    question: '可持续发展的核心理念是什么？',
    options: [
      { id: 'a', text: '仅关注经济发展' },
      { id: 'b', text: '仅关注环境保护' },
      { id: 'c', text: '在满足当代人需求的同时不损害后代人满足需求的能力' },
      { id: 'd', text: '不发展经济' }
    ],
    correctOptionId: 'c',
    explanation: '可持续发展强调在满足当代人需求的同时，不损害后代人满足需求的能力。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s030_q004',
    type: 'lesson-quiz',
    refId: 'S-C10',
    subjectId: 'sociology',

    question: '环境正义关注环境负担和环境收益的公平分配。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '环境正义确实关注环境负担和环境收益的公平分配，特别是对弱势群体的保护。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s030_q005',
    type: 'lesson-quiz',
    refId: 'S-C10',
    subjectId: 'sociology',

    question: '生态运动的主要作用是什么？',
    options: [
      { id: 'a', text: '没有作用' },
      { id: 'b', text: '仅关注娱乐' },
      { id: 'c', text: '推动环境保护立法和国际合作' },
      { id: 'd', text: '阻止经济发展' }
    ],
    correctOptionId: 'c',
    explanation: '生态运动通过推动环境保护立法和国际合作，对环境保护发挥了重要作用。',
  hint: '',
  knowledgePoints: []
  },
];

export default S030_QUIZ;