import type { Quiz } from '@/types';

// S024 社会问题概述 - 章节测验
export const S024_QUIZ: Quiz[] = [
  {
    id: 'soc_s024_q001',
    type: 'lesson-quiz',
    refId: 'S024',
    subjectId: 'sociology',

    question: '社会问题的界定标准不包括以下哪项？',
    options: [
      { id: 'a', text: '影响人数的多少' },
      { id: 'b', text: '问题的严重程度' },
      { id: 'c', text: '个人财富水平' },
      { id: 'd', text: '社会共识的程度' }
    ],
    correctOptionId: 'c',
    explanation: '社会问题的界定标准包括影响人数、严重程度、社会共识、对社会发展阻碍程度等，不包括个人财富水平。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s024_q002',
    type: 'lesson-quiz',
    refId: 'S024',
    subjectId: 'sociology',

    question: '社会问题的形成原因不包括以下哪项？',
    options: [
      { id: 'a', text: '结构性因素' },
      { id: 'b', text: '文化因素' },
      { id: 'c', text: '人口因素' },
      { id: 'd', text: '天文因素' }
    ],
    correctOptionId: 'd',
    explanation: '社会问题的形成原因包括结构性、文化、人口、环境等因素，不包括天文因素。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s024_q003',
    type: 'lesson-quiz',
    refId: 'S024',
    subjectId: 'sociology',

    question: '解决社会问题的途径不包括以下哪项？',
    options: [
      { id: 'a', text: '政府政策干预' },
      { id: 'b', text: '市场机制调节' },
      { id: 'c', text: '社会自治组织参与' },
      { id: 'd', text: '完全依赖个人解决' }
    ],
    correctOptionId: 'd',
    explanation: '解决社会问题需要政府、市场、社会、个人等多方面的共同努力，不能完全依赖个人。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s024_q004',
    type: 'lesson-quiz',
    refId: 'S024',
    subjectId: 'sociology',

    question: '社会问题的认定具有社会建构性，同一现象在不同时期、不同社会可能被认定为不同程度的问题。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '社会问题的认定确实具有社会建构性，会随时间、文化、价值观等变化。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s024_q005',
    type: 'lesson-quiz',
    refId: 'S024',
    subjectId: 'sociology',

    question: '社会政策在解决社会问题中的作用是什么？',
    options: [
      { id: 'a', text: '没有作用' },
      { id: 'b', text: '政府为解决社会问题、改善社会福利而采取的行动' },
      { id: 'c', text: '仅提供娱乐' },
      { id: 'd', text: '仅征收税款' }
    ],
    correctOptionId: 'b',
    explanation: '社会政策是政府为解决社会问题、改善社会福利而采取的行动，包括教育、卫生、就业、社会保障等政策。',
  hint: '',
  knowledgePoints: []
  },
];

export default S024_QUIZ;