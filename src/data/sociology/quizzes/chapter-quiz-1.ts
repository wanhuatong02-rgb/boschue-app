import type { Quiz } from '@/types';

// 社会学导论 章节测验（SOC-CH1）
export const CHAPTER_QUIZ_1: Quiz[] = [
  {
    id: 'SOC-CH1-Q1',
    type: 'chapter-quiz',
    refId: 'SOC-CH1',
    subjectId: 'sociology',
    question: '奥古斯特·孔德提出的"三阶段法则"中，不包括以下哪个阶段？',
    options: [
      { id: 'a', text: '神学阶段' },
      { id: 'b', text: '形而上学阶段' },
      { id: 'c', text: '实证阶段' },
      { id: 'd', text: '后现代阶段' }
    ],
    correctOptionId: 'd',
    explanation: '孔德将人类思想发展划分为神学、形而上学和实证三阶段，后现代阶段并非法则内容。',
    hint: '三阶段包括：神学、形而上学、实证',
    knowledgePoints: ['孔德', '三阶段法则']
  },
  {
    id: 'SOC-CH1-Q2',
    type: 'chapter-quiz',
    refId: 'SOC-CH1',
    subjectId: 'sociology',
    question: '迪尔凯姆（涂尔干）主张社会学研究的核心对象是什么？',
    options: [
      { id: 'a', text: '社会事实' },
      { id: 'b', text: '个人心理' },
      { id: 'c', text: '经济基础' },
      { id: 'd', text: '文化符号' }
    ],
    correctOptionId: 'a',
    explanation: '迪尔凯姆主张把社会事实当作"事物"来研究，视其为社会学独特的研究对象。',
    hint: '涂尔干把社会事实看作"事物"',
    knowledgePoints: ['涂尔干', '社会事实']
  },
  {
    id: 'SOC-CH1-Q3',
    type: 'chapter-quiz',
    refId: 'SOC-CH1',
    subjectId: 'sociology',
    question: '韦伯提出的"理想类型"（Ideal Type）是一种：',
    options: [
      { id: 'a', text: '现实中完全存在的模型' },
      { id: 'b', text: '分析社会现象的概念工具' },
      { id: 'c', text: '道德上最完美的社会形态' },
      { id: 'd', text: '统计学上的平均类型' }
    ],
    correctOptionId: 'b',
    explanation: '理想类型是社会学家为分析和理解现实构建的概念工具，不是现实中恰好存在的模型。',
    hint: '一种分析用的"标尺"',
    knowledgePoints: ['韦伯', '理想类型']
  },
  {
    id: 'SOC-CH1-Q4',
    type: 'chapter-quiz',
    refId: 'SOC-CH1',
    subjectId: 'sociology',
    question: '以下哪项属于"社会学想象力"（米尔斯）的核心含义？',
    options: [
      { id: 'a', text: '预测未来社会走向' },
      { id: 'b', text: '将个人困扰与公共议题相联系' },
      { id: 'c', text: '用大数据建模分析社会' },
      { id: 'd', text: '用文学手法书写社会' }
    ],
    correctOptionId: 'b',
    explanation: '米尔斯所谓"社会学想象力"是指能够将个人困扰转化为公共议题，理解个人经历与历史社会结构关联的能力。',
    hint: '个人困扰 ↔ 公共议题',
    knowledgePoints: ['米尔斯', '社会学想象力']
  },
  {
    id: 'SOC-CH1-Q5',
    type: 'chapter-quiz',
    refId: 'SOC-CH1',
    subjectId: 'sociology',
    question: '社会学与心理学的主要区别在于：',
    options: [
      { id: 'a', text: '社会学只研究群体不研究个体' },
      { id: 'b', text: '社会学关注社会结构层面而非个体心理过程' },
      { id: 'c', text: '社会学不进行实证研究' },
      { id: 'd', text: '社会学仅在现代才有意义' }
    ],
    correctOptionId: 'b',
    explanation: '社会学更侧重群体与社会结构层面的现象，心理学更侧重个体心理过程。两者对象不同，但可互补。',
    hint: '群体/结构 vs 个体/心理',
    knowledgePoints: ['社会学与心理学的区别']
  }
];

export default CHAPTER_QUIZ_1;