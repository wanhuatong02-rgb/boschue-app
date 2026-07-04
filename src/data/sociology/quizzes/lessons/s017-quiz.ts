import type { Quiz } from '@/types';

// S017 社区与城市化 - 章节测验
export const S017_QUIZ: Quiz[] = [
  {
    id: 'soc_s017_q001',
    type: 'lesson-quiz',
    refId: 'S017',
    subjectId: 'sociology',

    question: '社区的三大要素不包括以下哪项？',
    options: [
      { id: 'a', text: '共同地域' },
      { id: 'b', text: '社会关系' },
      { id: 'c', text: '集体认同' },
      { id: 'd', text: '相同职业' }
    ],
    correctOptionId: 'd',
    explanation: '社区通常包括三个要素：共同地域、社会关系和集体认同，不要求相同职业。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s017_q002',
    type: 'lesson-quiz',
    refId: 'S017',
    subjectId: 'sociology',

    question: '滕尼斯区分的礼俗社会（Gemeinschaft）和法理社会（Gesellschaft）中，礼俗社会基于什么？',
    options: [
      { id: 'a', text: '契约关系' },
      { id: 'b', text: '血缘、地缘关系' },
      { id: 'c', text: '经济关系' },
      { id: 'd', text: '政治关系' }
    ],
    correctOptionId: 'b',
    explanation: '礼俗社会基于血缘、地缘关系，法理社会基于契约关系。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s017_q003',
    type: 'lesson-quiz',
    refId: 'S017',
    subjectId: 'sociology',

    question: '城市社会学中，齐美尔认为城市人具有什么特征？',
    options: [
      { id: 'a', text: '情感丰富' },
      { id: 'b', text: '理性、冷漠、精明' },
      { id: 'c', text: '依赖性强' },
      { id: 'd', text: '保守传统' }
    ],
    correctOptionId: 'b',
    explanation: '齐美尔认为城市人具有理性、冷漠、精明的特征。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s017_q004',
    type: 'lesson-quiz',
    refId: 'S017',
    subjectId: 'sociology',

    question: '传统上，城市以农业为主，农村以第二、三产业为主。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '传统上，农村以农业为主，城市以第二、三产业为主。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s017_q005',
    type: 'lesson-quiz',
    refId: 'S017',
    subjectId: 'sociology',

    question: '现代社会中，城乡差异的趋势是什么？',
    options: [
      { id: 'a', text: '差异越来越大' },
      { id: 'b', text: '差异有所缩小' },
      { id: 'c', text: '完全没有差异' },
      { id: 'd', text: '城乡一体化' }
    ],
    correctOptionId: 'b',
    explanation: '现代社会中，城乡差异有所缩小，但仍然存在。',
  hint: '',
  knowledgePoints: []
  },
];

export default S017_QUIZ;