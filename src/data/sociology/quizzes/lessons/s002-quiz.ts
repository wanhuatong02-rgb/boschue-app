import type { Quiz } from '@/types';

// S002 社会学的基本视角与思维方法 - 章节测验
export const S002_QUIZ: Quiz[] = [
  {
    id: 'soc_s002_q001',
    type: 'lesson-quiz',
    refId: 'S-A02',
    subjectId: 'sociology',

    question: '社会学想象力的概念是由哪位学者提出的？',
    options: [
      { id: 'a', text: '埃米尔·涂尔干' },
      { id: 'b', text: 'C.赖特·米尔斯' },
      { id: 'c', text: '塔尔科特·帕森斯' },
      { id: 'd', text: '赫伯特·布鲁默' }
    ],
    correctOptionId: 'b',
    explanation: 'C.赖特·米尔斯提出了"社会学想象力"这一重要概念，强调将个人困扰与公共议题联系起来的能力',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s002_q002',
    type: 'lesson-quiz',
    refId: 'S-A02',
    subjectId: 'sociology',

    question: '结构功能主义理论强调社会的哪一方面？',
    options: [
      { id: 'a', text: '冲突和竞争' },
      { id: 'b', text: '个体间的互动' },
      { id: 'c', text: '稳定和平衡' },
      { id: 'd', text: '权力关系' }
    ],
    correctOptionId: 'c',
    explanation: '结构功能主义将社会视为一个有机整体，强调各个部分相互关联以维持社会稳定和平衡',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s002_q003',
    type: 'lesson-quiz',
    refId: 'S-A02',
    subjectId: 'sociology',

    question: '符号互动论的主要关注点是什么？',
    options: [
      { id: 'a', text: '社会结构和制度' },
      { id: 'b', text: '个体间的互动过程' },
      { id: 'c', text: '社会冲突和竞争' },
      { id: 'd', text: '经济发展和变化' }
    ],
    correctOptionId: 'b',
    explanation: '符号互动论关注个体间的互动过程以及这些互动如何构建社会现实',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s002_q004',
    type: 'lesson-quiz',
    refId: 'S-A02',
    subjectId: 'sociology',

    question: '社会学研究仅限于宏观层面，不关注微观层面的社会现象。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '社会学研究既关注宏观层面（如社会制度、社会结构），也关注微观层面（如个体互动、日常行为），两者相互补充',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s002_q005',
    type: 'lesson-quiz',
    refId: 'S-A02',
    subjectId: 'sociology',

    question: '冲突理论的主要代表人物是谁？',
    options: [
      { id: 'a', text: '埃米尔·涂尔干' },
      { id: 'b', text: '卡尔·马克思' },
      { id: 'c', text: '马克斯·韦伯' },
      { id: 'd', text: '塔尔科特·帕森斯' }
    ],
    correctOptionId: 'b',
    explanation: '卡尔·马克思是冲突理论的先驱，强调阶级斗争在历史发展中的作用，冲突理论强调社会中的不平等、竞争和冲突。',
  hint: '',
  knowledgePoints: []
  },
];

export default S002_QUIZ;