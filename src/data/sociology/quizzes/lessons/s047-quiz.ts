import type { Quiz } from '@/types';

// S047 社会政策分析 - 章节测验
export const S047_QUIZ: Quiz[] = [
  {
    id: 'soc_s047_q001',
    type: 'lesson-quiz',
    refId: 'S047',
    subjectId: 'sociology',

    question: '社会政策的本质是什么？',
    options: [
      { id: 'a', text: '纯经济政策' },
      { id: 'b', text: '政府为解决社会问题、增进社会福利而采取的行动' },
      { id: 'c', text: '个人行为' },
      { id: 'd', text: '商业策略' }
    ],
    correctOptionId: 'b',
    explanation: '社会政策是政府为解决社会问题、增进社会福利而采取的行动，包括社会保障、就业、住房、教育、健康等政策。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s047_q002',
    type: 'lesson-quiz',
    refId: 'S047',
    subjectId: 'sociology',

    question: '社会政策的特征不包括以下哪项？',
    options: [
      { id: 'a', text: '公共性' },
      { id: 'b', text: '福利性' },
      { id: 'c', text: '制度性' },
      { id: 'd', text: '私人性' }
    ],
    correctOptionId: 'd',
    explanation: '社会政策的特征包括公共性、福利性、制度性等，不是私人性。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s047_q003',
    type: 'lesson-quiz',
    refId: 'S047',
    subjectId: 'sociology',

    question: '艾斯平-安德森将福利国家分为哪三类？',
    options: [
      { id: 'a', text: '只有一种模式' },
      { id: 'b', text: '保守主义、自由主义、社会民主主义福利国家' },
      { id: 'c', text: '两种模式' },
      { id: 'd', text: '四种模式' }
    ],
    correctOptionId: 'b',
    explanation: '艾斯平-安德森将福利国家分为保守主义福利国家、自由主义福利国家、社会民主主义福利国家三类。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s047_q004',
    type: 'lesson-quiz',
    refId: 'S047',
    subjectId: 'sociology',

    question: '政策评估包括过程评估（政策如何实施）和结果评估（政策效果如何）。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '政策评估确实包括过程评估和结果评估两个方面。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s047_q005',
    type: 'lesson-quiz',
    refId: 'S047',
    subjectId: 'sociology',

    question: '社会政策制定的影响因素不包括以下哪项？',
    options: [
      { id: 'a', text: '问题的严重性和紧急性' },
      { id: 'b', text: '意识形态' },
      { id: 'c', text: '政治制度' },
      { id: 'd', text: '个人星座' }
    ],
    correctOptionId: 'd',
    explanation: '社会政策制定受到问题严重性、意识形态、政治制度、经济资源、社会压力等因素影响，不包括个人星座。',
  hint: '',
  knowledgePoints: []
  },
];

export default S047_QUIZ;