import type { Quiz } from '@/types';

// S013 种族与民族关系 - 章节测验
export const S013_QUIZ: Quiz[] = [
  {
    id: 'soc_s013_q001',
    type: 'lesson-quiz',
    refId: 'S013',
    subjectId: 'sociology',

    question: '种族主要指什么？',
    options: [
      { id: 'a', text: '基于文化、语言等因素的身份认同' },
      { id: 'b', text: '基于生物学特征的分类' },
      { id: 'c', text: '基于地理位置的分类' },
      { id: 'd', text: '基于职业的分类' }
    ],
    correctOptionId: 'b',
    explanation: '种族通常指基于生物学特征（如肤色、面部特征）的分类。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s013_q002',
    type: 'lesson-quiz',
    refId: 'S013',
    subjectId: 'sociology',

    question: '民族主要指什么？',
    options: [
      { id: 'a', text: '基于生物学特征的分类' },
      { id: 'b', text: '基于文化、语言、历史等因素的身份认同群体' },
      { id: 'c', text: '基于收入的分类' },
      { id: 'd', text: '基于年龄的分类' }
    ],
    correctOptionId: 'b',
    explanation: '民族是基于文化、语言、历史、地域等因素形成的身份认同群体。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s013_q003',
    type: 'lesson-quiz',
    refId: 'S013',
    subjectId: 'sociology',

    question: '种族偏见是指什么？',
    options: [
      { id: 'a', text: '积极的态度' },
      { id: 'b', text: '对特定种族群体的负面态度' },
      { id: 'c', text: '中性的认知' },
      { id: 'd', text: '个人喜好' }
    ],
    correctOptionId: 'b',
    explanation: '种族偏见是对特定种族群体的负面态度，基于刻板印象而非实际接触。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s013_q004',
    type: 'lesson-quiz',
    refId: 'S013',
    subjectId: 'sociology',

    question: '种族歧视是基于种族偏见的行为，表现为不公平的差别对待。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '种族歧视确实是基于种族偏见的行为，表现为不公平的差别对待。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s013_q005',
    type: 'lesson-quiz',
    refId: 'S013',
    subjectId: 'sociology',

    question: '少数民族可能采取的适应策略不包括哪一项？',
    options: [
      { id: 'a', text: '同化' },
      { id: 'b', text: '分离' },
      { id: 'c', text: '整合' },
      { id: 'd', text: '强制同化' }
    ],
    correctOptionId: 'd',
    explanation: '少数民族可能采取的适应策略包括同化、分离、整合、边缘化，强制同化不是一种适应策略。',
  hint: '',
  knowledgePoints: []
  },
];

export default S013_QUIZ;