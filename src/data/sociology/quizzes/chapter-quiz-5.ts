import type { Quiz } from '@/types';

export const CHAPTER_QUIZ_5: Quiz[] = [
  {
    id: 'SOC-CH5-Q1',
    type: 'chapter-quiz',
    refId: 'S-CH5',
    subjectId: 'sociology',
    question: '质性研究方法的主要特点是：',
    options: [
      { id: 'a', text: '强调统计分析和量化数据' },
      { id: 'b', text: '注重深入理解和解释社会现象' },
      { id: 'c', text: '追求大样本和代表性' },
      { id: 'd', text: '依赖实验设计和控制' }
    ],
    correctOptionId: 'b',
    explanation: '质性研究强调对社会现象的深入理解和解释，常用方法包括访谈、参与观察、文献分析等，注重情境化理解。',
    hint: '深入理解而非量化测量',
    knowledgePoints: ['质性研究', '研究方法']
  },
  {
    id: 'SOC-CH5-Q2',
    type: 'chapter-quiz',
    refId: 'S-CH5',
    subjectId: 'sociology',
    question: '量化研究方法的主要特点是：',
    options: [
      { id: 'a', text: '强调主观体验和意义理解' },
      { id: 'b', text: '依赖统计分析和可验证假设' },
      { id: 'c', text: '注重个案研究和深度访谈' },
      { id: 'd', text: '不追求研究结果的可重复性' }
    ],
    correctOptionId: 'b',
    explanation: '量化研究依赖统计分析和可验证假设，强调研究结果的可重复性和代表性，常用方法包括问卷调查、统计分析等。',
    hint: '数据化和统计分析',
    knowledgePoints: ['量化研究', '研究方法']
  },
  {
    id: 'SOC-CH5-Q3',
    type: 'chapter-quiz',
    refId: 'S-CH5',
    subjectId: 'sociology',
    question: '社会学研究伦理的核心原则不包括：',
    options: [
      { id: 'a', text: '知情同意' },
      { id: 'b', text: '保密原则' },
      { id: 'c', text: '欺骗参与者' },
      { id: 'd', text: '避免伤害' }
    ],
    correctOptionId: 'c',
    explanation: '社会学研究伦理要求知情同意、保密、避免伤害等原则，欺骗参与者一般是不允许的，除非有特殊理由并获得伦理审查批准。',
    hint: '保护研究参与者权益',
    knowledgePoints: ['研究伦理', '学术规范']
  },
  {
    id: 'SOC-CH5-Q4',
    type: 'chapter-quiz',
    refId: 'S-CH5',
    subjectId: 'sociology',
    question: '混合研究方法的主要优势是：',
    options: [
      { id: 'a', text: '只使用一种方法更简单' },
      { id: 'b', text: '结合质性和量化方法的优势' },
      { id: 'c', text: '不需要伦理审查' },
      { id: 'd', text: '研究成本更低' }
    ],
    correctOptionId: 'b',
    explanation: '混合研究方法结合了质性研究的深度理解和量化研究的广度代表性，能够更全面地理解社会现象。',
    hint: '优势互补',
    knowledgePoints: ['混合研究', '研究方法']
  },
  {
    id: 'SOC-CH5-Q5',
    type: 'chapter-quiz',
    refId: 'S-CH5',
    subjectId: 'sociology',
    question: '当代社会学理论前沿不包括：',
    options: [
      { id: 'a', text: '风险社会理论' },
      { id: 'b', text: '网络社会理论' },
      { id: 'c', text: '地心说理论' },
      { id: 'd', text: '文化社会学新发展' }
    ],
    correctOptionId: 'c',
    explanation: '当代社会学理论前沿包括风险社会理论、网络社会理论、文化社会学新发展、情感社会学等，地心说属于天文学范畴。',
    hint: '当代社会学理论的新发展',
    knowledgePoints: ['理论前沿', '社会学理论']
  }
];

export default CHAPTER_QUIZ_5;
