import type { Quiz } from '@/types';

// S028 健康与医疗社会学 - 章节测验
export const S028_QUIZ: Quiz[] = [
  {
    id: 'soc_s028_q001',
    type: 'lesson-quiz',
    refId: 'S028',
    subjectId: 'sociology',

    question: '世界卫生组织指出，健康的社会决定因素对健康的影响力与医疗保健相比如何？',
    options: [
      { id: 'a', text: '小于医疗保健' },
      { id: 'b', text: '超过医疗保健' },
      { id: 'c', text: '等于医疗保健' },
      { id: 'd', text: '无关' }
    ],
    correctOptionId: 'b',
    explanation: '世界卫生组织指出，健康的社会决定因素（如收入、教育、就业等）对健康的影响力超过医疗保健本身。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s028_q002',
    type: 'lesson-quiz',
    refId: 'S028',
    subjectId: 'sociology',

    question: '医患关系的传统模式是什么？',
    options: [
      { id: 'a', text: '平等合作模式' },
      { id: 'b', text: '家长式关系，医生拥有绝对权威' },
      { id: 'c', text: '病人主导模式' },
      { id: 'd', text: '无关系' }
    ],
    correctOptionId: 'b',
    explanation: '传统的医患关系是家长式关系，医生拥有绝对权威。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s028_q003',
    type: 'lesson-quiz',
    refId: 'S028',
    subjectId: 'sociology',

    question: '医疗资源分配面临的挑战是什么？',
    options: [
      { id: 'a', text: '只需考虑效率' },
      { id: 'b', text: '只需考虑公平' },
      { id: 'c', text: '平衡效率与公平' },
      { id: 'd', text: '不需考虑任何因素' }
    ],
    correctOptionId: 'c',
    explanation: '医疗资源分配需要在效率与公平之间寻求平衡。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s028_q004',
    type: 'lesson-quiz',
    refId: 'S028',
    subjectId: 'sociology',

    question: '疾病不仅是生物现象，也是社会建构的产物。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '疾病不仅是生物现象，社会如何定义疾病、归因疾病、应对疾病都具有社会性。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s028_q005',
    type: 'lesson-quiz',
    refId: 'S028',
    subjectId: 'sociology',

    question: '健康不平等问题通常在哪些群体中表现明显？',
    options: [
      { id: 'a', text: '只在富人中' },
      { id: 'b', text: '只在穷人中' },
      { id: 'c', text: '不同社会群体之间' },
      { id: 'd', text: '不存在' }
    ],
    correctOptionId: 'c',
    explanation: '健康不平等问题在不同社会群体中普遍存在，体现在疾病发病率、治疗机会、健康结果等方面。',
  hint: '',
  knowledgePoints: []
  },
];

export default S028_QUIZ;