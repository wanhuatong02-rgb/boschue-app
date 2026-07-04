import type { Quiz } from '@/types';

// S025 贫困与社会福利 - 章节测验
export const S025_QUIZ: Quiz[] = [
  {
    id: 'soc_s025_q001',
    type: 'lesson-quiz',
    refId: 'S025',
    subjectId: 'sociology',

    question: '贫困问题属于社会学研究的哪个范畴？',
    options: [
      { id: 'a', text: '纯经济问题' },
      { id: 'b', text: '社会问题' },
      { id: 'c', text: '政治问题' },
      { id: 'd', text: '个人问题' }
    ],
    correctOptionId: 'b',
    explanation: '贫困不仅是经济问题，更是社会问题，涉及社会结构、制度、不平等等社会学议题。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s025_q002',
    type: 'lesson-quiz',
    refId: 'S025',
    subjectId: 'sociology',

    question: '教育机会不平等问题如何影响社会？',
    options: [
      { id: 'a', text: '促进社会流动' },
      { id: 'b', text: '加剧贫困的代际传递' },
      { id: 'c', text: '对社会无影响' },
      { id: 'd', text: '提高整体生活水平' }
    ],
    correctOptionId: 'b',
    explanation: '教育机会不平等会加剧贫困的代际传递，限制社会流动。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s025_q003',
    type: 'lesson-quiz',
    refId: 'S025',
    subjectId: 'sociology',

    question: '社会福利制度的主要目标是什么？',
    options: [
      { id: 'a', text: '仅照顾富人' },
      { id: 'b', text: '减少贫困、保障基本生活、促进社会公平' },
      { id: 'c', text: '限制人口增长' },
      { id: 'd', text: '增加税收' }
    ],
    correctOptionId: 'b',
    explanation: '社会福利制度的主要目标是减少贫困、保障基本生活、促进社会公平。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s025_q004',
    type: 'lesson-quiz',
    refId: 'S025',
    subjectId: 'sociology',

    question: '社会资本、文化资本、经济资本等影响教育机会，进而影响贫困问题。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '家庭的社会资本、文化资本、经济资本等确实影响教育机会，进而影响贫困的代际传递。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s025_q005',
    type: 'lesson-quiz',
    refId: 'S025',
    subjectId: 'sociology',

    question: '贫困的社会根源不包括以下哪项？',
    options: [
      { id: 'a', text: '社会不平等' },
      { id: 'b', text: '制度缺陷' },
      { id: 'c', text: '个人道德品质' },
      { id: 'd', text: '社会结构因素' }
    ],
    correctOptionId: 'c',
    explanation: '贫困的社会根源包括社会不平等、制度缺陷、社会结构等因素，而不是单纯的个人道德品质问题。',
  hint: '',
  knowledgePoints: []
  },
];

export default S025_QUIZ;