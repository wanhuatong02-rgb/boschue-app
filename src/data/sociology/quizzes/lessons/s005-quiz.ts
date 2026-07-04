import type { Quiz } from '@/types';

// S005 数据分析基础 - 章节测验
export const S005_QUIZ: Quiz[] = [
  {
    id: 'soc_s005_q001',
    type: 'lesson-quiz',
    refId: 'S005',
    subjectId: 'sociology',

    question: '在描述统计中，以下哪个指标代表数据的中心位置？',
    options: [
      { id: 'a', text: '方差' },
      { id: 'b', text: '标准差' },
      { id: 'c', text: '平均数' },
      { id: 'd', text: '极差' }
    ],
    correctOptionId: 'c',
    explanation: '平均数、中位数、众数是描述数据集中趋势的指标，代表数据的中心位置。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s005_q002',
    type: 'lesson-quiz',
    refId: 'S005',
    subjectId: 'sociology',

    question: '推断统计的主要目的是什么？',
    options: [
      { id: 'a', text: '描述现有数据' },
      { id: 'b', text: '通过样本数据推断总体特征' },
      { id: 'c', text: '制作图表' },
      { id: 'd', text: '清理数据' }
    ],
    correctOptionId: 'b',
    explanation: '推断统计通过样本数据推断总体特征，包括参数估计和假设检验。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s005_q003',
    type: 'lesson-quiz',
    refId: 'S005',
    subjectId: 'sociology',

    question: '哪种图表最适合显示两个变量之间的关系？',
    options: [
      { id: 'a', text: '饼图' },
      { id: 'b', text: '柱状图' },
      { id: 'c', text: '散点图' },
      { id: 'd', text: '折线图' }
    ],
    correctOptionId: 'c',
    explanation: '散点图可以直观显示两个变量之间的关系和相关性。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s005_q004',
    type: 'lesson-quiz',
    refId: 'S005',
    subjectId: 'sociology',

    question: '质性数据分析处理非数值数据，如访谈记录、观察笔记等。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '质性数据分析确实处理非数值数据，通过主题分析、编码等方法进行分析。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s005_q005',
    type: 'lesson-quiz',
    refId: 'S005',
    subjectId: 'sociology',

    question: '在数据分析中，信度指的是什么？',
    options: [
      { id: 'a', text: '测量准确性' },
      { id: 'b', text: '测量结果的一致性和稳定性' },
      { id: 'c', text: '数据的真实性' },
      { id: 'd', text: '数据的完整性' }
    ],
    correctOptionId: 'b',
    explanation: '信度指测量结果的一致性和稳定性，效度指测量的准确性。',
  hint: '',
  knowledgePoints: []
  },
];

export default S005_QUIZ;