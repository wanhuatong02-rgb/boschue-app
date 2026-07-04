import type { Quiz } from '@/types';

// S035 风险社会理论 - 章节测验
export const S035_QUIZ: Quiz[] = [
  {
    id: 'soc_s035_q001',
    type: 'lesson-quiz',
    refId: 'S035',
    subjectId: 'sociology',

    question: '风险社会理论是由哪位学者提出的？',
    options: [
      { id: 'a', text: '马克斯·韦伯' },
      { id: 'b', text: '埃米尔·涂尔干' },
      { id: 'c', text: '乌尔里希·贝克' },
      { id: 'd', text: '卡尔·马克思' }
    ],
    correctOptionId: 'c',
    explanation: '风险社会理论由德国社会学家乌尔里希·贝克提出，强调现代社会的特征是系统性风险的增加。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s035_q002',
    type: 'lesson-quiz',
    refId: 'S035',
    subjectId: 'sociology',

    question: '风险社会中风险的主要特征不包括以下哪项？',
    options: [
      { id: 'a', text: '全球性' },
      { id: 'b', text: '不可感知性' },
      { id: 'c', text: '未来性' },
      { id: 'd', text: '个体性' }
    ],
    correctOptionId: 'd',
    explanation: '风险社会中风险的特征包括全球性、不可感知性、未来性、人为性、反思性，不是个体性。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s035_q003',
    type: 'lesson-quiz',
    refId: 'S035',
    subjectId: 'sociology',

    question: '传统社会的风险主要是哪一类？',
    options: [
      { id: 'a', text: '工业发展产生的内生风险' },
      { id: 'b', text: '自然灾害等外生风险' },
      { id: 'c', text: '个人风险' },
      { id: 'd', text: '技术风险' }
    ],
    correctOptionId: 'b',
    explanation: '传统社会的风险主要是自然灾害等外生风险，而风险社会的风险主要是工业发展产生的内生风险。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s035_q004',
    type: 'lesson-quiz',
    refId: 'S035',
    subjectId: 'sociology',

    question: '风险与信任关系密切，对政府、企业、科学机构的信任影响公众对风险的接受度。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '信任对风险感知和接受度有重要影响，信任危机可能放大风险感知。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s035_q005',
    type: 'lesson-quiz',
    refId: 'S035',
    subjectId: 'sociology',

    question: '风险社会的治理需要什么模式？',
    options: [
      { id: 'a', text: '仅政府治理' },
      { id: 'b', text: '仅企业治理' },
      { id: 'c', text: '政府、企业、NGO、公众等多方协作的治理模式' },
      { id: 'd', text: '不需要治理' }
    ],
    correctOptionId: 'c',
    explanation: '风险社会需要政府、企业、NGO、公众等多方协作的治理模式，体现了多主体参与的特点。',
  hint: '',
  knowledgePoints: []
  },
];

export default S035_QUIZ;