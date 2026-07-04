import type { Quiz } from '@/types';

// S044 政治社会学 - 章节测验
export const S044_QUIZ: Quiz[] = [
  {
    id: 'soc_s044_q001',
    type: 'lesson-quiz',
    refId: 'S044',
    subjectId: 'sociology',

    question: '政治社会学研究什么？',
    options: [
      { id: 'a', text: '纯政治理论' },
      { id: 'b', text: '政治现象的社会基础和政治过程的社会影响' },
      { id: 'c', text: '物理现象' },
      { id: 'd', text: '个人事务' }
    ],
    correctOptionId: 'b',
    explanation: '政治社会学研究政治现象的社会基础和政治过程的社会影响，关注国家与社会的边界、权力分配、政治制度的社会根源等。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s044_q002',
    type: 'lesson-quiz',
    refId: 'S044',
    subjectId: 'sociology',

    question: '韦伯区分的三种权威类型不包括以下哪项？',
    options: [
      { id: 'a', text: '传统型权威' },
      { id: 'b', text: '魅力型权威' },
      { id: 'c', text: '法理型权威' },
      { id: 'd', text: '暴力型权威' }
    ],
    correctOptionId: 'd',
    explanation: '韦伯区分了三种权威类型：传统型（基于传统）、魅力型（基于个人魅力）、法理型（基于理性规则）。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s044_q003',
    type: 'lesson-quiz',
    refId: 'S044',
    subjectId: 'sociology',

    question: '现代国家主要以哪种权威类型为主导？',
    options: [
      { id: 'a', text: '传统型权威' },
      { id: 'b', text: '魅力型权威' },
      { id: 'c', text: '法理型权威' },
      { id: 'd', text: '以上都不是' }
    ],
    correctOptionId: 'c',
    explanation: '现代国家以法理型权威为主导，基于法律和理性规则。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s044_q004',
    type: 'lesson-quiz',
    refId: 'S044',
    subjectId: 'sociology',

    question: '市民社会概念强调独立于国家的社会组织的重要性。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '市民社会概念强调独立于国家的社会组织的重要性，是政治社会学的重要概念。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s044_q005',
    type: 'lesson-quiz',
    refId: 'S044',
    subjectId: 'sociology',

    question: '民主化的第三波浪潮与什么因素有关？',
    options: [
      { id: 'a', text: '经济发展和中产阶级壮大' },
      { id: 'b', text: '公民社会发育' },
      { id: 'c', text: '以上都对' },
      { id: 'd', text: '以上都不对' }
    ],
    correctOptionId: 'c',
    explanation: '民主化需要经济发展、中产阶级壮大、公民社会发育等多种条件。',
  hint: '',
  knowledgePoints: []
  },
];

export default S044_QUIZ;