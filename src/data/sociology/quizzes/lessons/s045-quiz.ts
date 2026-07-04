import type { Quiz } from '@/types';

// S045 经济社会学 - 章节测验
export const S045_QUIZ: Quiz[] = [
  {
    id: 'soc_s045_q001',
    type: 'lesson-quiz',
    refId: 'S045',
    subjectId: 'sociology',

    question: '经济社会学研究什么？',
    options: [
      { id: 'a', text: '纯经济现象' },
      { id: 'b', text: '经济行为和经济制度的社会维度' },
      { id: 'c', text: '政治制度' },
      { id: 'd', text: '文化现象' }
    ],
    correctOptionId: 'b',
    explanation: '经济社会学研究经济行为和经济制度的社会维度，关注经济活动如何嵌入社会关系、文化价值观和制度结构中。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s045_q002',
    type: 'lesson-quiz',
    refId: 'S045',
    subjectId: 'sociology',

    question: '波兰尼提出的经济活动嵌入观点是指什么？',
    options: [
      { id: 'a', text: '经济完全独立于社会' },
      { id: 'b', text: '早期社会中经济活动嵌入在社会、政治、宗教关系中' },
      { id: 'c', text: '经济只嵌入技术' },
      { id: 'd', text: '经济嵌入个人' }
    ],
    correctOptionId: 'b',
    explanation: '波兰尼提出经济活动嵌入社会关系的观点，认为早期社会中经济活动嵌入在社会、政治、宗教关系中。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s045_q003',
    type: 'lesson-quiz',
    refId: 'S045',
    subjectId: 'sociology',

    question: '格兰诺维特的"镶嵌理论"强调什么？',
    options: [
      { id: 'a', text: '经济完全独立' },
      { id: 'b', text: '经济行为嵌入在社会关系网络中' },
      { id: 'c', text: '只嵌入技术' },
      { id: 'd', text: '只嵌入个人' }
    ],
    correctOptionId: 'b',
    explanation: '格兰诺维特的"镶嵌理论"指出，经济行为嵌入在社会关系网络中。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s045_q004',
    type: 'lesson-quiz',
    refId: 'S045',
    subjectId: 'sociology',

    question: '韦伯在《新教伦理与资本主义精神》中分析了资本主义兴起的文化条件。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '韦伯的《新教伦理与资本主义精神》分析了资本主义兴起的文化条件。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s045_q005',
    type: 'lesson-quiz',
    refId: 'S045',
    subjectId: 'sociology',

    question: '不同的资本主义模式包括哪些？',
    options: [
      { id: 'a', text: '只有盎格鲁-撒克逊模式' },
      { id: 'b', text: '只有莱茵模式' },
      { id: 'c', text: '盎格鲁-撒克逊模式、莱茵模式、东亚模式等' },
      { id: 'd', text: '只有一种模式' }
    ],
    correctOptionId: 'c',
    explanation: '不同的资本主义模式包括盎格鲁-撒克逊模式强调市场自由、莱茵模式强调社会合作、东亚模式强调国家引导等。',
  hint: '',
  knowledgePoints: []
  },
];

export default S045_QUIZ;