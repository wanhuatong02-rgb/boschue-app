import type { Quiz } from '@/types';

// S036 社会认同理论 - 章节测验
export const S036_QUIZ: Quiz[] = [
  {
    id: 'soc_s036_q001',
    type: 'lesson-quiz',
    refId: 'S-D06',
    subjectId: 'sociology',

    question: '社会认同理论解释什么？',
    options: [
      { id: 'a', text: '个人独自行为' },
      { id: 'b', text: '个体如何通过群体归属定义自我，以及群体身份如何影响个体行为和态度' },
      { id: 'c', text: '纯粹经济行为' },
      { id: 'd', text: '生理反应' }
    ],
    correctOptionId: 'b',
    explanation: '社会认同理论解释个体如何通过群体归属定义自我，以及群体身份如何影响个体行为和态度。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s036_q002',
    type: 'lesson-quiz',
    refId: 'S-D06',
    subjectId: 'sociology',

    question: '泰菲尔和特纳提出的自我分类理论认为，自我概念包括哪两个方面？',
    options: [
      { id: 'a', text: '经济身份和政治身份' },
      { id: 'b', text: '个体身份和社会身份' },
      { id: 'c', text: '年龄身份和性别身份' },
      { id: 'd', text: '职业身份和教育身份' }
    ],
    correctOptionId: 'b',
    explanation: '自我概念包括个体身份（个人独特性）和社会身份（群体成员身份）。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s036_q003',
    type: 'lesson-quiz',
    refId: 'S-D06',
    subjectId: 'sociology',

    question: '内群体偏爱是指什么？',
    options: [
      { id: 'a', text: '厌恶自己所属群体' },
      { id: 'b', text: '偏好自己所属的群体，给予内群体成员更多正面评价和帮助' },
      { id: 'c', text: '对外群体的偏爱' },
      { id: 'd', text: '对所有群体一视同仁' }
    ],
    correctOptionId: 'b',
    explanation: '内群体偏爱是指个体偏好自己所属的群体，给予内群体成员更多正面评价和帮助。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s036_q004',
    type: 'lesson-quiz',
    refId: 'S-D06',
    subjectId: 'sociology',

    question: '刻板印象是对群体成员的概括性认知，可能准确也可能错误。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '刻板印象是对群体成员的概括性认知，有助于简化信息处理，但也可能歪曲现实。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s036_q005',
    type: 'lesson-quiz',
    refId: 'S-D06',
    subjectId: 'sociology',

    question: '现代社会中，个体认同的特征是什么？',
    options: [
      { id: 'a', text: '单一且不变' },
      { id: 'b', text: '多重且可能相互冲突，具有流动性' },
      { id: 'c', text: '完全由遗传决定' },
      { id: 'd', text: '不受社会影响' }
    ],
    correctOptionId: 'b',
    explanation: '现代社会中，个体拥有多种社会认同（民族、职业、性别、宗教等），这些认同可能相互强化或冲突，具有流动性。',
  hint: '',
  knowledgePoints: []
  },
];

export default S036_QUIZ;