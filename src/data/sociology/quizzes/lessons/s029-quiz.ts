import type { Quiz } from '@/types';

// S029 人口社会学 - 章节测验
export const S029_QUIZ: Quiz[] = [
  {
    id: 'soc_s029_q001',
    type: 'lesson-quiz',
    refId: 'S-C09',
    subjectId: 'sociology',

    question: '人口统计学的基本指标不包括以下哪项？',
    options: [
      { id: 'a', text: '人口规模' },
      { id: 'b', text: '出生率' },
      { id: 'c', text: '死亡率' },
      { id: 'd', text: '股票价格' }
    ],
    correctOptionId: 'd',
    explanation: '人口统计学的基本指标包括人口规模、出生率、死亡率、迁移率、人口结构等，不包括股票价格。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s029_q002',
    type: 'lesson-quiz',
    refId: 'S-C09',
    subjectId: 'sociology',

    question: '人口转变理论中的第三阶段特征是什么？',
    options: [
      { id: 'a', text: '高出生率、高死亡率' },
      { id: 'b', text: '高出生率、低死亡率' },
      { id: 'c', text: '低出生率、低死亡率' },
      { id: 'd', text: '死亡率高于出生率' }
    ],
    correctOptionId: 'c',
    explanation: '人口转变理论的第三阶段是低出生率、低死亡率的阶段。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s029_q003',
    type: 'lesson-quiz',
    refId: 'S-C09',
    subjectId: 'sociology',

    question: '中国目前处于人口转变的哪个阶段？',
    options: [
      { id: 'a', text: '第一阶段' },
      { id: 'b', text: '第二阶段' },
      { id: 'c', text: '第三阶段' },
      { id: 'd', text: '基本完成人口转变' }
    ],
    correctOptionId: 'd',
    explanation: '中国通过计划生育政策加速了人口转变进程，目前已基本完成人口转变。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s029_q004',
    type: 'lesson-quiz',
    refId: 'S-C09',
    subjectId: 'sociology',

    question: '人口老龄化是指65岁以上人口比例超过7%的社会现象。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '当65岁以上人口比例超过7%时，社会被认为进入老龄化社会。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s029_q005',
    type: 'lesson-quiz',
    refId: 'S-C09',
    subjectId: 'sociology',

    question: '人口老龄化带来的社会挑战不包括以下哪项？',
    options: [
      { id: 'a', text: '养老金支付压力' },
      { id: 'b', text: '医疗需求增加' },
      { id: 'c', text: '劳动力短缺' },
      { id: 'd', text: '教育投资增加' }
    ],
    correctOptionId: 'd',
    explanation: '人口老龄化带来的挑战包括养老金支付压力、医疗需求增加、劳动力短缺等，但不会直接导致教育投资增加。',
  hint: '',
  knowledgePoints: []
  },
];

export default S029_QUIZ;