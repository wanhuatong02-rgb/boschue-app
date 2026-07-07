import type { Quiz } from '@/types';

// S041 犯罪社会学 - 章节测验
export const S041_QUIZ: Quiz[] = [
  {
    id: 'soc_s041_q001',
    type: 'lesson-quiz',
    refId: 'S-E01',
    subjectId: 'sociology',

    question: '犯罪社会学主要从什么角度研究犯罪现象？',
    options: [
      { id: 'a', text: '纯生物学角度' },
      { id: 'b', text: '社会学角度，关注犯罪行为的社会根源和社会影响' },
      { id: 'c', text: '纯心理学角度' },
      { id: 'd', text: '纯经济学角度' }
    ],
    correctOptionId: 'b',
    explanation: '犯罪社会学从社会学角度研究犯罪现象，关注犯罪行为的社会根源、社会影响以及社会控制机制。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s041_q002',
    type: 'lesson-quiz',
    refId: 'S-E01',
    subjectId: 'sociology',

    question: '犯罪的社会根源不包括以下哪项？',
    options: [
      { id: 'a', text: '社会经济地位低下' },
      { id: 'b', text: '教育水平不高' },
      { id: 'c', text: '家庭结构不完整' },
      { id: 'd', text: '个人星座' }
    ],
    correctOptionId: 'd',
    explanation: '犯罪的社会根源包括社会经济地位、教育水平、家庭结构等因素，不包括个人星座。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s041_q003',
    type: 'lesson-quiz',
    refId: 'S-E01',
    subjectId: 'sociology',

    question: '犯罪预防的层次不包括以下哪项？',
    options: [
      { id: 'a', text: '原生预防' },
      { id: 'b', text: '次生预防' },
      { id: 'c', text: '再生预防' },
      { id: 'd', text: '超生预防' }
    ],
    correctOptionId: 'd',
    explanation: '犯罪预防包括三个层次：原生预防、次生预防、再生预防，没有超生预防这一概念。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s041_q004',
    type: 'lesson-quiz',
    refId: 'S-E01',
    subjectId: 'sociology',

    question: '刑罚具有报应、威慑、矫正、保护等多种社会功能。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '刑罚具有报应功能（满足社会正义感）、威慑功能（阻止潜在犯罪）、矫正功能（改造犯罪人）、保护功能（隔离危险分子）等多种功能。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s041_q005',
    type: 'lesson-quiz',
    refId: 'S-E01',
    subjectId: 'sociology',

    question: '社会失范理论认为什么导致了犯罪增加？',
    options: [
      { id: 'a', text: '社会变迁导致价值观念混乱和规范缺失' },
      { id: 'b', text: '仅仅因为贫穷' },
      { id: 'c', text: '仅仅因为教育不够' },
      { id: 'd', text: '仅仅因为法律不够严厉' }
    ],
    correctOptionId: 'a',
    explanation: '社会失范理论认为社会变迁导致价值观念混乱和规范缺失，增加犯罪可能。',
  hint: '',
  knowledgePoints: []
  },
];

export default S041_QUIZ;