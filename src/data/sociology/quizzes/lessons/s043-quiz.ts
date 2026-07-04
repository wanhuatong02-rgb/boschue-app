import type { Quiz } from '@/types';

// S043 宗教社会学 - 章节测验
export const S043_QUIZ: Quiz[] = [
  {
    id: 'soc_s043_q001',
    type: 'lesson-quiz',
    refId: 'S043',
    subjectId: 'sociology',

    question: '宗教社会学研究什么？',
    options: [
      { id: 'a', text: '纯神学问题' },
      { id: 'b', text: '宗教现象的社会根源、社会功能和社会影响' },
      { id: 'c', text: '物理现象' },
      { id: 'd', text: '化学反应' }
    ],
    correctOptionId: 'b',
    explanation: '宗教社会学研究宗教现象的社会根源、社会功能和社会影响，而非纯神学问题。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s043_q002',
    type: 'lesson-quiz',
    refId: 'S043',
    subjectId: 'sociology',

    question: '涂尔干认为宗教的核心社会功能是什么？',
    options: [
      { id: 'a', text: '个人修行' },
      { id: 'b', text: '社会整合，通过神圣性与世俗性的区分提供集体认同和道德基础' },
      { id: 'c', text: '商业活动' },
      { id: 'd', text: '艺术创作' }
    ],
    correctOptionId: 'b',
    explanation: '涂尔干认为宗教的核心功能是社会整合，通过神圣性与世俗性的区分，为社会提供集体认同和道德基础。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s043_q003',
    type: 'lesson-quiz',
    refId: 'S043',
    subjectId: 'sociology',

    question: '世俗化理论的核心观点是什么？',
    options: [
      { id: 'a', text: '宗教将完全消失' },
      { id: 'b', text: '随着现代化进程，宗教在社会生活中的作用将减弱' },
      { id: 'c', text: '宗教将更加繁荣' },
      { id: 'd', text: '宗教不受社会影响' }
    ],
    correctOptionId: 'b',
    explanation: '世俗化理论认为，随着现代化进程，宗教在社会生活中的作用将减弱。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s043_q004',
    type: 'lesson-quiz',
    refId: 'S043',
    subjectId: 'sociology',

    question: '宗教具有心理慰藉功能，帮助个体应对生死、苦难等终极问题。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '宗教确实具有心理慰藉功能，帮助个体应对生死、苦难等终极问题。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s043_q005',
    type: 'lesson-quiz',
    refId: 'S043',
    subjectId: 'sociology',

    question: '政教关系的理想原则是什么？',
    options: [
      { id: 'a', text: '完全合一' },
      { id: 'b', text: '完全分离' },
      { id: 'c', text: '现代国家的重要原则是政教分离' },
      { id: 'd', text: '宗教统治' }
    ],
    correctOptionId: 'c',
    explanation: '政教分离是现代国家的重要原则，宗教与政治各有其领域和功能。',
  hint: '',
  knowledgePoints: []
  },
];

export default S043_QUIZ;