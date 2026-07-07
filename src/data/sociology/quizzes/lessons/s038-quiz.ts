import type { Quiz } from '@/types';

// S038 社会影响与从众 - 章节测验
export const S038_QUIZ: Quiz[] = [
  {
    id: 'soc_s038_q001',
    type: 'lesson-quiz',
    refId: 'S-D08',
    subjectId: 'sociology',

    question: '社会影响是指什么？',
    options: [
      { id: 'a', text: '物理力量' },
      { id: 'b', text: '他人存在或社会情境对个体行为、态度、信念的影响' },
      { id: 'c', text: '化学反应' },
      { id: 'd', text: '地理变化' }
    ],
    correctOptionId: 'b',
    explanation: '社会影响是指他人存在或社会情境对个体行为、态度、信念的影响。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s038_q002',
    type: 'lesson-quiz',
    refId: 'S-D08',
    subjectId: 'sociology',

    question: '阿希的从众实验表明什么？',
    options: [
      { id: 'a', text: '人们完全不受群体影响' },
      { id: 'b', text: '个体在面对群体一致意见时，即使知道群体是错误的，也可能选择从众' },
      { id: 'c', text: '群体总是正确的' },
      { id: 'd', text: '没有影响' }
    ],
    correctOptionId: 'b',
    explanation: '阿希的从众实验显示，个体在面对群体一致意见时，即使知道群体是错误的，也常常选择从众。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s038_q003',
    type: 'lesson-quiz',
    refId: 'S-D08',
    subjectId: 'sociology',

    question: '米尔格拉姆的服从实验揭示了什么？',
    options: [
      { id: 'a', text: '权威对个体行为的微弱影响' },
      { id: 'b', text: '权威对个体行为的强大影响' },
      { id: 'c', text: '权威不存在' },
      { id: 'd', text: '人们总是反抗权威' }
    ],
    correctOptionId: 'b',
    explanation: '米尔格拉姆的服从实验揭示了权威对个体行为的强大影响。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s038_q004',
    type: 'lesson-quiz',
    refId: 'S-D08',
    subjectId: 'sociology',

    question: '社会压力有助于维护社会秩序和群体凝聚力，但也可能抑制创新和个性。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '社会压力确实有助于维护秩序和凝聚力，但也可能抑制创新和个性。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s038_q005',
    type: 'lesson-quiz',
    refId: 'S-D08',
    subjectId: 'sociology',

    question: '社会压力的机制不包括以下哪项？',
    options: [
      { id: 'a', text: '规范压力' },
      { id: 'b', text: '信息压力' },
      { id: 'c', text: '认同压力' },
      { id: 'd', text: '物理压力' }
    ],
    correctOptionId: 'd',
    explanation: '社会压力的机制包括规范压力、信息压力、认同压力等，不包括物理压力。',
  hint: '',
  knowledgePoints: []
  },
];

export default S038_QUIZ;