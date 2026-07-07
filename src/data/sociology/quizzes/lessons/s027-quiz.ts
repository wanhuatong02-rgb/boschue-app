import type { Quiz } from '@/types';

// S027 工作与职业社会学 - 章节测验
export const S027_QUIZ: Quiz[] = [
  {
    id: 'soc_s027_q001',
    type: 'lesson-quiz',
    refId: 'S-C07',
    subjectId: 'sociology',

    question: '涂尔干认为劳动分工有什么社会作用？',
    options: [
      { id: 'a', text: '增加冲突' },
      { id: 'b', text: '通过功能相互依赖增强社会团结' },
      { id: 'c', text: '削弱团结' },
      { id: 'd', text: '无关紧要' }
    ],
    correctOptionId: 'b',
    explanation: '涂尔干认为劳动分工通过功能相互依赖增强社会团结，形成有机团结。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s027_q002',
    type: 'lesson-quiz',
    refId: 'S-C07',
    subjectId: 'sociology',

    question: '职业声望通常与哪些因素相关？',
    options: [
      { id: 'a', text: '仅与颜色相关' },
      { id: 'b', text: '收入、教育水平、权力等因素' },
      { id: 'c', text: '与季节相关' },
      { id: 'd', text: '与星座相关' }
    ],
    correctOptionId: 'b',
    explanation: '职业声望通常与收入、教育水平、权力等因素相关。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s027_q003',
    type: 'lesson-quiz',
    refId: 'S-C07',
    subjectId: 'sociology',

    question: '后工业社会的劳动特征不包括以下哪项？',
    options: [
      { id: 'a', text: '服务业、知识经济为主导' },
      { id: 'b', text: '体力劳动比重下降' },
      { id: 'c', text: '脑力劳动比重上升' },
      { id: 'd', text: '知识不再是重要生产要素' }
    ],
    correctOptionId: 'd',
    explanation: '后工业社会中知识成为重要生产要素，人力资本价值凸显。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s027_q004',
    type: 'lesson-quiz',
    refId: 'S-C07',
    subjectId: 'sociology',

    question: '地位获得模型分析个体如何获得特定社会地位，包括先赋地位和自致地位。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '地位获得模型分析个体如何获得特定社会地位，包括先赋地位（出身）和自致地位（成就）。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s027_q005',
    type: 'lesson-quiz',
    refId: 'S-C07',
    subjectId: 'sociology',

    question: '现代工作场所的特点不包括以下哪项？',
    options: [
      { id: 'a', text: '正式和非正式结构并存' },
      { id: 'b', text: '非正式组织满足员工社交需求' },
      { id: 'c', text: '仅存在正式结构' },
      { id: 'd', text: '存在工作-生活平衡等议题' }
    ],
    correctOptionId: 'c',
    explanation: '现代工作场所既存在正式结构也存在非正式结构，而非仅有正式结构。',
  hint: '',
  knowledgePoints: []
  },
];

export default S027_QUIZ;