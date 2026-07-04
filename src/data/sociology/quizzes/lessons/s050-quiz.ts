import type { Quiz } from '@/types';

// S050 社会学的未来展望 - 章节测验
export const S050_QUIZ: Quiz[] = [
  {
    id: 'soc_s050_q001',
    type: 'lesson-quiz',
    refId: 'S050',
    subjectId: 'sociology',

    question: '数字化时代对社会学提出的主要挑战是什么？',
    options: [
      { id: 'a', text: '传统社会学理论完全失效' },
      { id: 'b', text: '社会学理论和方法需要适应社会交往方式的变化' },
      { id: 'c', text: '社会学不再需要研究人际关系' },
      { id: 'd', text: '社会学只研究技术' }
    ],
    correctOptionId: 'b',
    explanation: '数字化时代改变了社会交往方式，社会学需要在保持核心理论的基础上适应这些新变化。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s050_q002',
    type: 'lesson-quiz',
    refId: 'S050',
    subjectId: 'sociology',

    question: '社会学研究中出现的新兴现象包括哪些？',
    options: [
      { id: 'a', text: '只关注传统问题' },
      { id: 'b', text: '网络社会学、生物社会学、环境社会学等新领域' },
      { id: 'c', text: '没有新现象' },
      { id: 'd', text: '只研究古代社会' }
    ],
    correctOptionId: 'b',
    explanation: '社会学不断拓展新的研究领域，如网络社会学、生物社会学、环境社会学等新兴领域。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s050_q003',
    type: 'lesson-quiz',
    refId: 'S050',
    subjectId: 'sociology',

    question: '社会学的未来发展需要重点关注什么？',
    options: [
      { id: 'a', text: '只关注个人发展' },
      { id: 'b', text: '人文关怀、社会正义和人类命运共同体' },
      { id: 'c', text: '只关注技术发展' },
      { id: 'd', text: '忽视社会问题' }
    ],
    correctOptionId: 'b',
    explanation: '社会学未来发展需要在技术快速发展的背景下更加关注人文关怀、社会正义和人类命运共同体。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s050_q004',
    type: 'lesson-quiz',
    refId: 'S050',
    subjectId: 'sociology',

    question: '社会学有责任揭示社会不公，为弱势群体发声。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '社会学确实有责任揭示社会不公，为弱势群体发声，促进社会公平正义。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s050_q005',
    type: 'lesson-quiz',
    refId: 'S050',
    subjectId: 'sociology',

    question: '社会学的社会责任包括哪些方面？',
    options: [
      { id: 'a', text: '只进行理论研究' },
      { id: 'b', text: '揭示社会不公、参与公共政策讨论、培养批判思维' },
      { id: 'c', text: '只关注学术发表' },
      { id: 'd', text: '没有社会责任' }
    ],
    correctOptionId: 'b',
    explanation: '社会学的社会责任包括揭示社会不公、为社会决策提供科学依据、培养学生的批判思维和社会责任感。',
  hint: '',
  knowledgePoints: []
  },
];

export default S050_QUIZ;