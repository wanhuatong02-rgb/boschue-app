import type { Quiz } from '@/types';

export const CHAPTER_QUIZ_3: Quiz[] = [
  {
    id: 'SOC-CH3-Q1',
    type: 'chapter-quiz',
    refId: 'S-CH3',
    subjectId: 'sociology',
    question: '社会变迁的主要动力不包括以下哪项？',
    options: [
      { id: 'a', text: '生产力发展' },
      { id: 'b', text: '技术进步' },
      { id: 'c', text: '个人性格差异' },
      { id: 'd', text: '社会冲突' }
    ],
    correctOptionId: 'c',
    explanation: '社会变迁的动力包括生产力发展、技术进步、文化创新、社会冲突、外部影响等，个人性格差异不属于社会变迁的动力。',
    hint: '社会变迁的宏观动力',
    knowledgePoints: ['社会变迁', '变迁动力']
  },
  {
    id: 'SOC-CH3-Q2',
    type: 'chapter-quiz',
    refId: 'S-CH3',
    subjectId: 'sociology',
    question: '现代化理论认为，传统社会向现代社会转型的核心特征是：',
    options: [
      { id: 'a', text: '宗教信仰的强化' },
      { id: 'b', text: '工业化和城市化' },
      { id: 'c', text: '等级制度的固化' },
      { id: 'd', text: '农业生产的主导' }
    ],
    correctOptionId: 'b',
    explanation: '现代化理论认为工业化和城市化是传统社会向现代社会转型的核心特征，伴随民主化、教育普及等过程。',
    hint: '工业化是现代化的核心',
    knowledgePoints: ['现代化理论', '社会转型']
  },
  {
    id: 'SOC-CH3-Q3',
    type: 'chapter-quiz',
    refId: 'S-CH3',
    subjectId: 'sociology',
    question: '全球化对社会的影响不包括：',
    options: [
      { id: 'a', text: '文化同质化' },
      { id: 'b', text: '经济一体化' },
      { id: 'c', text: '地方文化消失' },
      { id: 'd', text: '社会问题的全球治理' }
    ],
    correctOptionId: 'c',
    explanation: '全球化虽然带来文化同质化趋势，但地方文化并未完全消失，而是出现文化多元化和本土化现象。',
    hint: '全球化是"在地化"与"全球化"并存',
    knowledgePoints: ['全球化', '文化变迁']
  },
  {
    id: 'SOC-CH3-Q4',
    type: 'chapter-quiz',
    refId: 'S-CH3',
    subjectId: 'sociology',
    question: '以下哪种社会控制属于"非正式控制"？',
    options: [
      { id: 'a', text: '法律制裁' },
      { id: 'b', text: '道德舆论' },
      { id: 'c', text: '行政处罚' },
      { id: 'd', text: '军队管制' }
    ],
    correctOptionId: 'b',
    explanation: '道德舆论属于非正式社会控制，通过社会规范和群体压力实现。法律制裁、行政处罚、军队管制属于正式控制。',
    hint: '非正式控制依赖社会规范和舆论',
    knowledgePoints: ['社会控制', '非正式控制']
  },
  {
    id: 'SOC-CH3-Q5',
    type: 'chapter-quiz',
    refId: 'S-CH3',
    subjectId: 'sociology',
    question: '社会运动的核心特征是：',
    options: [
      { id: 'a', text: '短期的集体行为' },
      { id: 'b', text: '有组织、有目标的集体行动' },
      { id: 'c', text: '无组织的暴乱' },
      { id: 'd', text: '个人行为的简单集合' }
    ],
    correctOptionId: 'b',
    explanation: '社会运动是有组织、有目标、持续时间较长的集体行动，旨在改变社会现状或维护既得利益。',
    hint: '有组织、有目标、持续性',
    knowledgePoints: ['社会运动', '集体行动']
  }
];

export default CHAPTER_QUIZ_3;
