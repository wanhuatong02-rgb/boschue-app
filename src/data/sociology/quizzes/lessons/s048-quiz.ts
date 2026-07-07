import type { Quiz } from '@/types';

// S048 比较社会学 - 章节测验
export const S048_QUIZ: Quiz[] = [
  {
    id: 'soc_s048_q001',
    type: 'lesson-quiz',
    refId: 'S-E08',
    subjectId: 'sociology',

    question: '比较社会学通过什么方式揭示社会发展规律？',
    options: [
      { id: 'a', text: '只研究本国' },
      { id: 'b', text: '通过比较不同社会、不同文化、不同发展阶段的社会现象' },
      { id: 'c', text: '只研究历史' },
      { id: 'd', text: '只研究个人' }
    ],
    correctOptionId: 'b',
    explanation: '比较社会学通过比较不同社会、不同文化、不同发展阶段的社会现象，揭示社会发展的普遍规律和特殊性。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s048_q002',
    type: 'lesson-quiz',
    refId: 'S-E08',
    subjectId: 'sociology',

    question: '霍夫斯泰德的文化维度理论包括以下哪项？',
    options: [
      { id: 'a', text: '权力距离、个人主义vs集体主义、男性气质vs女性气质、不确定性规避' },
      { id: 'b', text: '只有个人主义' },
      { id: 'c', text: '只有权力距离' },
      { id: 'd', text: '没有维度' }
    ],
    correctOptionId: 'a',
    explanation: '霍夫斯泰德的文化维度理论包括权力距离、个人主义vs集体主义、男性气质vs女性气质、不确定性规避等维度。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s048_q003',
    type: 'lesson-quiz',
    refId: 'S-E08',
    subjectId: 'sociology',

    question: '不同社会的发展路径通常呈现什么特点？',
    options: [
      { id: 'a', text: '完全相同' },
      { id: 'b', text: '多样化，各国根据自身历史传统、文化背景选择适合的发展道路' },
      { id: 'c', text: '完全不同' },
      { id: 'd', text: '没有路径' }
    ],
    correctOptionId: 'b',
    explanation: '不同社会选择不同的发展路径，各国根据自身历史传统、文化背景、制度条件选择适合的发展道路。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s048_q004',
    type: 'lesson-quiz',
    refId: 'S-E08',
    subjectId: 'sociology',

    question: '比较研究需要处理可比性问题，比较单位需要具有可比性。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '比较研究确实需要处理可比性问题，比较单位是否具有可比性是关键问题。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s048_q005',
    type: 'lesson-quiz',
    refId: 'S-E08',
    subjectId: 'sociology',

    question: '比较社会学在研究中需要避免什么？',
    options: [
      { id: 'a', text: '文化中心主义' },
      { id: 'b', text: '深入了解文化语境' },
      { id: 'c', text: '本土化研究' },
      { id: 'd', text: '跨文化理解' }
    ],
    correctOptionId: 'a',
    explanation: '比较社会学需要避免文化中心主义，应采用文化相对主义的视角，避免用一种文化标准评判另一种文化。',
  hint: '',
  knowledgePoints: []
  },
];

export default S048_QUIZ;