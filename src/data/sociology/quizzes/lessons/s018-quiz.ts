import type { Quiz } from '@/types';

// S018 社会网络分析 - 章节测验
export const S018_QUIZ: Quiz[] = [
  {
    id: 'soc_s018_q001',
    type: 'lesson-quiz',
    refId: 'S-B08',
    subjectId: 'sociology',

    question: '社会网络分析关注什么？',
    options: [
      { id: 'a', text: '个人特征' },
      { id: 'b', text: '个体或组织之间关系模式的理论和方法' },
      { id: 'c', text: '经济数据' },
      { id: 'd', text: '政治制度' }
    ],
    correctOptionId: 'b',
    explanation: '社会网络分析是研究个体或组织之间关系模式的理论和方法。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s018_q002',
    type: 'lesson-quiz',
    refId: 'S-B08',
    subjectId: 'sociology',

    question: '格兰诺维特提出的强关系与弱关系理论中，弱关系的作用是什么？',
    options: [
      { id: 'a', text: '提供情感支持' },
      { id: 'b', text: '提供深度信息' },
      { id: 'c', text: '提供新颖信息和资源，有助于拓展机会' },
      { id: 'd', text: '维持亲密关系' }
    ],
    correctOptionId: 'c',
    explanation: '弱关系提供新颖信息和资源，有助于拓展机会，这就是著名的"弱关系的力量"。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s018_q003',
    type: 'lesson-quiz',
    refId: 'S-B08',
    subjectId: 'sociology',

    question: '社会资本理论中，普特南区分了哪两种类型的社会资本？',
    options: [
      { id: 'a', text: '个人和集体' },
      { id: 'b', text: '粘合型和桥接型' },
      { id: 'c', text: '内部和外部' },
      { id: 'd', text: '正式和非正式' }
    ],
    correctOptionId: 'b',
    explanation: '普特南区分了粘合型社会资本（内部凝聚力）和桥接型社会资本（外部连接）。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s018_q004',
    type: 'lesson-quiz',
    refId: 'S-B08',
    subjectId: 'sociology',

    question: '结构洞是指不同群体间的桥梁位置，占据结构洞的个体具有信息和控制优势。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '结构洞指不同群体间的桥梁位置，占据结构洞的个体确实具有信息和控制优势。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s018_q005',
    type: 'lesson-quiz',
    refId: 'S-B08',
    subjectId: 'sociology',

    question: '在社会网络中，中心度衡量什么？',
    options: [
      { id: 'a', text: '网络中实际连接数与可能连接数的比例' },
      { id: 'b', text: '节点在网路中的重要性' },
      { id: 'c', text: '节点的位置' },
      { id: 'd', text: '节点的数量' }
    ],
    correctOptionId: 'b',
    explanation: '中心度衡量节点在网路中的重要性。',
  hint: '',
  knowledgePoints: []
  },
];

export default S018_QUIZ;