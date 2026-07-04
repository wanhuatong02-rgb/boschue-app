import type { Quiz } from '@/types';

// S032 社会运动分析 - 章节测验
export const S032_QUIZ: Quiz[] = [
  {
    id: 'soc_s032_q001',
    type: 'lesson-quiz',
    refId: 'S032',
    subjectId: 'sociology',

    question: '社会运动的主要特征不包括以下哪项？',
    options: [
      { id: 'a', text: '集体性' },
      { id: 'b', text: '持续性' },
      { id: 'c', text: '非制度化' },
      { id: 'd', text: '短暂性' }
    ],
    correctOptionId: 'd',
    explanation: '社会运动具有集体性、持续性、非制度化、价值导向等特点，不是短暂性。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s032_q002',
    type: 'lesson-quiz',
    refId: 'S032',
    subjectId: 'sociology',

    question: '资源动员理论强调社会运动需要什么？',
    options: [
      { id: 'a', text: '不需要资源' },
      { id: 'b', text: '动员和使用资源来实现目标' },
      { id: 'c', text: '仅需要金钱' },
      { id: 'd', text: '仅需要人力' }
    ],
    correctOptionId: 'b',
    explanation: '资源动员理论强调社会运动需要动员和使用资源（资金、人力、时间、知识等）来实现目标。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s032_q003',
    type: 'lesson-quiz',
    refId: 'S032',
    subjectId: 'sociology',

    question: '框架分析关注社会运动的哪个方面？',
    options: [
      { id: 'a', text: '仅关注资金' },
      { id: 'b', text: '如何建构和传播意义' },
      { id: 'c', text: '仅关注人员' },
      { id: 'd', text: '仅关注时间' }
    ],
    correctOptionId: 'b',
    explanation: '框架分析关注社会运动如何建构和传播意义，通过"框架"解释问题、定义目标、动员支持。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s032_q004',
    type: 'lesson-quiz',
    refId: 'S032',
    subjectId: 'sociology',

    question: '社会运动是通过非常规政治参与方式争取资源、权利或价值观改变的集体行为。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '社会运动确实是有组织的、持续的、挑战或改变现状的集体行为，通过非常规政治参与方式实现目标。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s032_q005',
    type: 'lesson-quiz',
    refId: 'S032',
    subjectId: 'sociology',

    question: '社会运动的发生受哪些因素影响？',
    options: [
      { id: 'a', text: '仅经济因素' },
      { id: 'b', text: '仅政治因素' },
      { id: 'c', text: '相对剥夺感、政治机会结构、文化框架、社会网络、资源可获得性等' },
      { id: 'd', text: '无影响因素' }
    ],
    correctOptionId: 'c',
    explanation: '社会运动的发生受多种因素影响：相对剥夺感、政治机会结构、文化框架、社会网络、资源可获得性等。',
  hint: '',
  knowledgePoints: []
  },
];

export default S032_QUIZ;