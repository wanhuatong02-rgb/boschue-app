import type { Quiz } from '@/types';

// S022 现代化过程 - 章节测验
export const S022_QUIZ: Quiz[] = [
  {
    id: 'soc_s022_q001',
    type: 'lesson-quiz',
    refId: 'S-C02',
    subjectId: 'sociology',

    question: '现代化的特征不包括以下哪项？',
    options: [
      { id: 'a', text: '经济工业化' },
      { id: 'b', text: '政治民主化' },
      { id: 'c', text: '文化世俗化' },
      { id: 'd', text: '社会单一化' }
    ],
    correctOptionId: 'd',
    explanation: '现代化的特征包括经济工业化、政治民主化、社会城市化、文化世俗化等，不是社会单一化。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s022_q002',
    type: 'lesson-quiz',
    refId: 'S-C02',
    subjectId: 'sociology',

    question: '传统社会向现代社会转型的过程中，社会结构发生了怎样的变化？',
    options: [
      { id: 'a', text: '变化不大' },
      { id: 'b', text: '从农业为基础到工业和服务业为基础' },
      { id: 'c', text: '回到农业社会' },
      { id: 'd', text: '完全相同' }
    ],
    correctOptionId: 'b',
    explanation: '传统社会以农业为基础，现代社会以工业和服务业为基础，这是转型的重要特征。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s022_q003',
    type: 'lesson-quiz',
    refId: 'S-C02',
    subjectId: 'sociology',

    question: '现代化的负面后果不包括以下哪项？',
    options: [
      { id: 'a', text: '环境污染' },
      { id: 'b', text: '社会分化' },
      { id: 'c', text: '文化冲击' },
      { id: 'd', text: '社会整合增强' }
    ],
    correctOptionId: 'd',
    explanation: '现代化的负面后果包括环境污染、社会分化、文化冲击、人际关系疏远等，社会整合通常是减弱的。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s022_q004',
    type: 'lesson-quiz',
    refId: 'S-C02',
    subjectId: 'sociology',

    question: '依附理论认为发展中国家被纳入世界资本主义体系后，处于依附地位，难以实现真正的自主发展。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '依附理论确实认为发展中国家处于依附地位，导致财富从边缘流向中心，加剧不平等。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s022_q005',
    type: 'lesson-quiz',
    refId: 'S-C02',
    subjectId: 'sociology',

    question: '现代化过程中的一个重要价值观转变是什么？',
    options: [
      { id: 'a', text: '从重视效率到忽视效率' },
      { id: 'b', text: '从重视传统到重视理性、个人主义、社会流动' },
      { id: 'c', text: '从重视个人到忽视个人' },
      { id: 'd', text: '从重视创新到重视保守' }
    ],
    correctOptionId: 'b',
    explanation: '现代化过程中，社会更加注重理性、个人主义、社会流动等现代价值观念。',
  hint: '',
  knowledgePoints: []
  },
];

export default S022_QUIZ;