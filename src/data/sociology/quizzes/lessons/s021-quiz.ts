import type { Quiz } from '@/types';

// S021 社会变迁理论 - 章节测验
export const S021_QUIZ: Quiz[] = [
  {
    id: 'soc_s021_q001',
    type: 'lesson-quiz',
    refId: 'S021',
    subjectId: 'sociology',

    question: '社会变迁的主要动力不包括以下哪项？',
    options: [
      { id: 'a', text: '技术进步' },
      { id: 'b', text: '人口变化' },
      { id: 'c', text: '经济发展' },
      { id: 'd', text: '个人喜好' }
    ],
    correctOptionId: 'd',
    explanation: '社会变迁的动力包括技术进步、人口变化、经济发展、环境变化、文化传播、社会冲突等，不包括个人喜好。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s021_q002',
    type: 'lesson-quiz',
    refId: 'S021',
    subjectId: 'sociology',

    question: '社会进化论的代表人物是谁？',
    options: [
      { id: 'a', text: '马克思' },
      { id: 'b', text: '孔德和斯宾塞' },
      { id: 'c', text: '韦伯' },
      { id: 'd', text: '涂尔干' }
    ],
    correctOptionId: 'b',
    explanation: '孔德提出三阶段定律，斯宾塞认为社会是从军事型向工业型转变，都是社会进化论的代表人物。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s021_q003',
    type: 'lesson-quiz',
    refId: 'S021',
    subjectId: 'sociology',

    question: '循环论认为社会变迁呈现什么特征？',
    options: [
      { id: 'a', text: '直线前进' },
      { id: 'b', text: '周期性变化，盛衰交替' },
      { id: 'c', text: '停止不动' },
      { id: 'd', text: '随机变化' }
    ],
    correctOptionId: 'b',
    explanation: '循环论认为社会变迁呈周期性变化，盛衰交替，如文明的生命周期理论。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s021_q004',
    type: 'lesson-quiz',
    refId: 'S021',
    subjectId: 'sociology',

    question: '冲突论强调社会变迁源于不同利益群体的斗争。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '冲突论强调社会变迁源于不同利益群体的斗争，马克思认为阶级斗争是社会变迁的根本动力。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s021_q005',
    type: 'lesson-quiz',
    refId: 'S021',
    subjectId: 'sociology',

    question: '社会变迁可能呈现什么特点？',
    options: [
      { id: 'a', text: '只能缓慢渐进' },
      { id: 'b', text: '只能急剧突发' },
      { id: 'c', text: '既可能缓慢渐进，也可能急剧突发' },
      { id: 'd', text: '完全随机' }
    ],
    correctOptionId: 'c',
    explanation: '社会变迁既可能缓慢渐进，也可能急剧突发，取决于影响因素的性质和强度。',
  hint: '',
  knowledgePoints: []
  },
];

export default S021_QUIZ;