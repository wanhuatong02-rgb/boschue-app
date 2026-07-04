import type { Quiz } from '@/types';

// S034 消费社会学 - 章节测验
export const S034_QUIZ: Quiz[] = [
  {
    id: 'soc_s034_q001',
    type: 'lesson-quiz',
    refId: 'S034',
    subjectId: 'sociology',

    question: '消费社会学研究的核心是什么？',
    options: [
      { id: 'a', text: '纯经济行为' },
      { id: 'b', text: '消费行为的社会维度，消费不仅是满足物质需要也具有社会意义' },
      { id: 'c', text: '生产过程' },
      { id: 'd', text: '销售技巧' }
    ],
    correctOptionId: 'b',
    explanation: '消费社会学研究消费行为的社会维度，消费不仅是满足物质需要，也是社会地位、身份认同、文化表达的重要方式。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s034_q002',
    type: 'lesson-quiz',
    refId: 'S034',
    subjectId: 'sociology',

    question: '消费主义的核心价值观是什么？',
    options: [
      { id: 'a', text: '节俭' },
      { id: 'b', text: '以消费为核心价值，认为消费是经济增长和个人幸福的源泉' },
      { id: 'c', text: '禁止消费' },
      { id: 'd', text: '只消费必需品' }
    ],
    correctOptionId: 'b',
    explanation: '消费主义是一种以消费为核心价值的社会意识形态，认为消费是经济增长的动力和个人幸福的源泉。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s034_q003',
    type: 'lesson-quiz',
    refId: 'S034',
    subjectId: 'sociology',

    question: '鲍德里亚认为现代消费主要是哪种类型的消费？',
    options: [
      { id: 'a', text: '使用价值消费' },
      { id: 'b', text: '符号消费' },
      { id: 'c', text: '必需品消费' },
      { id: 'd', text: '免费消费' }
    ],
    correctOptionId: 'b',
    explanation: '鲍德里亚认为现代消费主要是符号消费，人们购买商品不仅为了使用价值，更是为了其象征意义。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s034_q004',
    type: 'lesson-quiz',
    refId: 'S034',
    subjectId: 'sociology',

    question: '品牌不仅是产品质量的标识，也是身份认同的符号。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '品牌不仅是产品质量的标识，也是身份认同的符号，消费者通过选择特定品牌表达自我认同和社会归属。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s034_q005',
    type: 'lesson-quiz',
    refId: 'S034',
    subjectId: 'sociology',

    question: '可持续消费强调什么？',
    options: [
      { id: 'a', text: '无限制消费' },
      { id: 'b', text: '消费的环境和社会影响，追求消费与环境、社会的和谐发展' },
      { id: 'c', text: '只关注经济影响' },
      { id: 'd', text: '只关注个人满足' }
    ],
    correctOptionId: 'b',
    explanation: '可持续消费强调消费的环境和社会影响，追求消费与环境、社会的和谐发展。',
  hint: '',
  knowledgePoints: []
  },
];

export default S034_QUIZ;