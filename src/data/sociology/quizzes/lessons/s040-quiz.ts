import type { Quiz } from '@/types';

// S040 社会价值观变迁 - 章节测验
export const S040_QUIZ: Quiz[] = [
  {
    id: 'soc_s040_q001',
    type: 'lesson-quiz',
    refId: 'S040',
    subjectId: 'sociology',

    question: '价值观在社会中的作用是什么？',
    options: [
      { id: 'a', text: '没有作用' },
      { id: 'b', text: '社会成员共享的关于什么是重要的、值得追求的观念体系' },
      { id: 'c', text: '纯个人事务' },
      { id: 'd', text: '物理现象' }
    ],
    correctOptionId: 'b',
    explanation: '价值观是社会成员共享的关于什么是重要的、值得追求的观念体系，影响个体行为和社会结构。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s040_q002',
    type: 'lesson-quiz',
    refId: 'S040',
    subjectId: 'sociology',

    question: '传统价值强调什么？',
    options: [
      { id: 'a', text: '个人主义、平等主义、理性主义、成就本位' },
      { id: 'b', text: '集体主义、等级秩序、宗教信仰、家庭本位' },
      { id: 'c', text: '完全一致' },
      { id: 'd', text: '没有特征' }
    ],
    correctOptionId: 'b',
    explanation: '传统价值强调集体主义、等级秩序、宗教信仰、家庭本位等，重视社会稳定和连续性。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s040_q003',
    type: 'lesson-quiz',
    refId: 'S040',
    subjectId: 'sociology',

    question: '现代价值强调什么？',
    options: [
      { id: 'a', text: '集体主义、等级秩序' },
      { id: 'b', text: '个人主义、平等主义、理性主义、成就本位' },
      { id: 'c', text: '完全相同' },
      { id: 'd', text: '没有价值' }
    ],
    correctOptionId: 'b',
    explanation: '现代价值强调个人主义、平等主义、理性主义、成就本位等，重视创新和变化。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s040_q004',
    type: 'lesson-quiz',
    refId: 'S040',
    subjectId: 'sociology',

    question: '价值观具有层次性，核心价值观相对稳定，外围价值观容易发生变化。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '价值观具有层次性，核心价值观相对稳定，外围价值观容易发生变化。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s040_q005',
    type: 'lesson-quiz',
    refId: 'S040',
    subjectId: 'sociology',

    question: '全球化对价值观变迁的影响是什么？',
    options: [
      { id: 'a', text: '没有影响' },
      { id: 'b', text: '西方个人主义价值观在全球范围内扩散，同时激发本土价值观复兴' },
      { id: 'c', text: '仅西方价值观传播' },
      { id: 'd', text: '仅本土价值观传播' }
    ],
    correctOptionId: 'b',
    explanation: '全球化促进了价值观的跨国传播和融合，西方个人主义价值观扩散，同时激发了本土价值观复兴。',
  hint: '',
  knowledgePoints: []
  },
];

export default S040_QUIZ;