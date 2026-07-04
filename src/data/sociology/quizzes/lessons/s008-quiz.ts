import type { Quiz } from '@/types';

// S008 社会互动 - 章节测验
export const S008_QUIZ: Quiz[] = [
  {
    id: 'soc_s008_q001',
    type: 'lesson-quiz',
    refId: 'S008',
    subjectId: 'sociology',

    question: '社会互动的基本形式不包括以下哪项？',
    options: [
      { id: 'a', text: '交换' },
      { id: 'b', text: '合作' },
      { id: 'c', text: '竞争' },
      { id: 'd', text: '孤立' }
    ],
    correctOptionId: 'd',
    explanation: '社会互动的基本形式包括交换、合作、竞争、冲突、调适，孤立不是社会互动的形式。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s008_q002',
    type: 'lesson-quiz',
    refId: 'S008',
    subjectId: 'sociology',

    question: '符号互动论强调什么在互动中的核心作用？',
    options: [
      { id: 'a', text: '物质利益' },
      { id: 'b', text: '权力关系' },
      { id: 'c', text: '符号' },
      { id: 'd', text: '地理空间' }
    ],
    correctOptionId: 'c',
    explanation: '符号互动论强调符号在互动中的核心作用，人们通过符号（语言、姿态、表情等）传递意义。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s008_q003',
    type: 'lesson-quiz',
    refId: 'S008',
    subjectId: 'sociology',

    question: '戈夫曼的拟剧理论将社会互动比作什么？',
    options: [
      { id: 'a', text: '体育比赛' },
      { id: 'b', text: '戏剧表演' },
      { id: 'c', text: '商业谈判' },
      { id: 'd', text: '课堂学习' }
    ],
    correctOptionId: 'b',
    explanation: '戈夫曼将社会互动比作戏剧表演，人们在不同情境中扮演不同角色。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s008_q004',
    type: 'lesson-quiz',
    refId: 'S008',
    subjectId: 'sociology',

    question: '面对面互动是最基本的社会互动形式。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '面对面互动是最基本的社会互动形式，个体通过非言语沟通等方式进行交流。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s008_q005',
    type: 'lesson-quiz',
    refId: 'S008',
    subjectId: 'sociology',

    question: '在戈夫曼的拟剧理论中，"前台"指的是什么？',
    options: [
      { id: 'a', text: '准备表演的地方' },
      { id: 'b', text: '他人可见的表演区域' },
      { id: 'c', text: '观众席' },
      { id: 'd', text: '后台休息区' }
    ],
    correctOptionId: 'b',
    explanation: '在戈夫曼的拟剧理论中，"前台"是他人可见的表演区域，"后台"是准备表演的私密空间。',
  hint: '',
  knowledgePoints: []
  },
];

export default S008_QUIZ;