import type { Quiz } from '@/types';

// S023 全球化现象 - 章节测验
export const S023_QUIZ: Quiz[] = [
  {
    id: 'soc_s023_q001',
    type: 'lesson-quiz',
    refId: 'S023',
    subjectId: 'sociology',

    question: '全球化的维度不包括以下哪项？',
    options: [
      { id: 'a', text: '经济全球化' },
      { id: 'b', text: '政治全球化' },
      { id: 'c', text: '文化全球化' },
      { id: 'd', text: '气候全球化' }
    ],
    correctOptionId: 'd',
    explanation: '全球化的主要维度包括经济、政治、文化、社会等，气候全球化不是标准分类。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s023_q002',
    type: 'lesson-quiz',
    refId: 'S023',
    subjectId: 'sociology',

    question: '文化全球化的一个典型例子是什么？',
    options: [
      { id: 'a', text: '麦当劳化' },
      { id: 'b', text: '本土文化复兴' },
      { id: 'c', text: '传统文化保护' },
      { id: 'd', text: '文化多样性' }
    ],
    correctOptionId: 'a',
    explanation: '麦当劳化是文化全球化的典型例子，指标准化、效率化、可计算性、可预测性等特征在全球蔓延。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s023_q003',
    type: 'lesson-quiz',
    refId: 'S023',
    subjectId: 'sociology',

    question: '经济全球化的表现不包括以下哪项？',
    options: [
      { id: 'a', text: '国际贸易增长' },
      { id: 'b', text: '跨国公司发展' },
      { id: 'c', text: '产业链全球化配置' },
      { id: 'd', text: '本土经济独立发展' }
    ],
    correctOptionId: 'd',
    explanation: '经济全球化表现为国际贸易、投资、金融市场的全球一体化，跨国公司和产业链全球化配置，不是本土经济独立发展。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s023_q004',
    type: 'lesson-quiz',
    refId: 'S023',
    subjectId: 'sociology',

    question: '政治全球化表现为国际组织、跨国治理机制的发展以及国际法和人权观念的传播。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '政治全球化确实表现为国际组织、跨国治理机制的发展，以及国际法和人权观念的传播。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s023_q005',
    type: 'lesson-quiz',
    refId: 'S023',
    subjectId: 'sociology',

    question: '文化全球化带来的影响是什么？',
    options: [
      { id: 'a', text: '只有文化趋同' },
      { id: 'b', text: '只有文化冲突' },
      { id: 'c', text: '既促进文化交流与理解，也可能冲击本土文化' },
      { id: 'd', text: '没有任何影响' }
    ],
    correctOptionId: 'c',
    explanation: '文化全球化既有促进文化交流与理解的积极影响，也可能冲击本土文化，带来文化冲突。',
  hint: '',
  knowledgePoints: []
  },
];

export default S023_QUIZ;