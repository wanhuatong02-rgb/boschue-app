import type { Quiz } from '@/types';

// S049 社会学理论的当代发展 - 章节测验
export const S049_QUIZ: Quiz[] = [
  {
    id: 'soc_s049_q001',
    type: 'lesson-quiz',
    refId: 'S049',
    subjectId: 'sociology',

    question: '当代社会学理论的代表人物不包括以下哪位？',
    options: [
      { id: 'a', text: '安东尼·吉登斯' },
      { id: 'b', text: '尤尔根·哈贝马斯' },
      { id: 'c', text: '皮埃尔·布尔迪厄' },
      { id: 'd', text: '牛顿' }
    ],
    correctOptionId: 'd',
    explanation: '当代社会学理论的代表人物包括吉登斯、哈贝马斯、布尔迪厄、卢曼等，牛顿是物理学家。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s049_q002',
    type: 'lesson-quiz',
    refId: 'S049',
    subjectId: 'sociology',

    question: '吉登斯的结构化理论试图解决什么问题？',
    options: [
      { id: 'a', text: '结构与能动性的二元对立问题' },
      { id: 'b', text: '只有结构问题' },
      { id: 'c', text: '只有能动性问题' },
      { id: 'd', text: '没有问题' }
    ],
    correctOptionId: 'a',
    explanation: '吉登斯的结构化理论试图解决结构与能动性的二元对立问题，认为结构和行动相互构成。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s049_q003',
    type: 'lesson-quiz',
    refId: 'S049',
    subjectId: 'sociology',

    question: '哈贝马斯提出的交往行为理论强调什么？',
    options: [
      { id: 'a', text: '仅工具理性' },
      { id: 'b', text: '通过理性对话达成共识的重要性' },
      { id: 'c', text: '仅战略行动' },
      { id: 'd', text: '非理性行为' }
    ],
    correctOptionId: 'b',
    explanation: '哈贝马斯的交往行为理论强调通过理性对话达成共识的重要性。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s049_q004',
    type: 'lesson-quiz',
    refId: 'S049',
    subjectId: 'sociology',

    question: '现象学社会学关注个体的主观经验和社会意义建构过程。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '现象学社会学确实关注个体的主观经验和社会意义建构过程。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s049_q005',
    type: 'lesson-quiz',
    refId: 'S049',
    subjectId: 'sociology',

    question: '哈贝马斯的"生活世界的殖民化"理论分析什么？',
    options: [
      { id: 'a', text: '自然环境被破坏' },
      { id: 'b', text: '系统理性（经济、政治）对生活世界（文化、社会、个体）的侵蚀' },
      { id: 'c', text: '城市化' },
      { id: 'd', text: '没有此理论' }
    ],
    correctOptionId: 'b',
    explanation: '哈贝马斯的"生活世界的殖民化"理论分析系统理性对生活世界的侵蚀。',
  hint: '',
  knowledgePoints: []
  },
];

export default S049_QUIZ;