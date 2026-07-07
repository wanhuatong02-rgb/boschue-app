import type { Quiz } from '@/types';

// S026 教育社会学 - 章节测验
export const S026_QUIZ: Quiz[] = [
  {
    id: 'soc_s026_q001',
    type: 'lesson-quiz',
    refId: 'S-C06',
    subjectId: 'sociology',

    question: '教育的社会功能不包括以下哪项？',
    options: [
      { id: 'a', text: '社会化功能' },
      { id: 'b', text: '社会选择功能' },
      { id: 'c', text: '文化传承功能' },
      { id: 'd', text: '娱乐功能' }
    ],
    correctOptionId: 'd',
    explanation: '教育的社会功能包括社会化、社会选择、文化传承、社会整合、社会控制、经济发展、社会流动等，娱乐功能不是主要社会功能。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s026_q002',
    type: 'lesson-quiz',
    refId: 'S-C06',
    subjectId: 'sociology',

    question: '教育机会不平等的体现不包括以下哪项？',
    options: [
      { id: 'a', text: '入学机会' },
      { id: 'b', text: '教育过程' },
      { id: 'c', text: '教育结果' },
      { id: 'd', text: '学校颜色' }
    ],
    correctOptionId: 'd',
    explanation: '教育机会不平等问题体现在入学机会、教育过程、教育结果等多个层面，与学校颜色无关。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s026_q003',
    type: 'lesson-quiz',
    refId: 'S-C06',
    subjectId: 'sociology',

    question: '学校的隐藏课程（hidden curriculum）传递什么信息？',
    options: [
      { id: 'a', text: '学科知识' },
      { id: 'b', text: '权力关系、服从权威等信息' },
      { id: 'c', text: '娱乐信息' },
      { id: 'd', text: '体育技能' }
    ],
    correctOptionId: 'b',
    explanation: '隐藏课程传递权力关系、服从权威、等级秩序等信息，对学生社会化有重要影响。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s026_q004',
    type: 'lesson-quiz',
    refId: 'S-C06',
    subjectId: 'sociology',

    question: '教育既是社会发展的手段，也是社会不平等的再生产机制。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '教育一方面促进社会发展，另一方面也可能延续和再生产社会不平等。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s026_q005',
    type: 'lesson-quiz',
    refId: 'S-C06',
    subjectId: 'sociology',

    question: '影响教育机会的因素不包括以下哪项？',
    options: [
      { id: 'a', text: '家庭背景' },
      { id: 'b', text: '社会经济地位' },
      { id: 'c', text: '性别、种族' },
      { id: 'd', text: '星座' }
    ],
    correctOptionId: 'd',
    explanation: '影响教育机会的因素包括家庭背景、社会经济地位、性别、种族、地区差异等，不包括星座。',
  hint: '',
  knowledgePoints: []
  },
];

export default S026_QUIZ;