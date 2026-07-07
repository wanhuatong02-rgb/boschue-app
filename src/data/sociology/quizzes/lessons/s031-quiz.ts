import type { Quiz } from '@/types';

// S031 集体行为理论 - 章节测验
export const S031_QUIZ: Quiz[] = [
  {
    id: 'soc_s031_q001',
    type: 'lesson-quiz',
    refId: 'S-D01',
    subjectId: 'sociology',

    question: '集体行为的类型不包括以下哪项？',
    options: [
      { id: 'a', text: '群众行为' },
      { id: 'b', text: '集群行为' },
      { id: 'c', text: '流行行为' },
      { id: 'd', text: '个人行为' }
    ],
    correctOptionId: 'd',
    explanation: '集体行为包括群众行为、集群行为、流行行为、社会运动等，个人行为不是集体行为的类型。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s031_q002',
    type: 'lesson-quiz',
    refId: 'S-D01',
    subjectId: 'sociology',

    question: '勒庞的乌合之众理论认为群体中的个体会怎样？',
    options: [
      { id: 'a', text: '更加理性' },
      { id: 'b', text: '丧失理性，变得冲动、易变、情绪化' },
      { id: 'c', text: '更加冷静' },
      { id: 'd', text: '不受影响' }
    ],
    correctOptionId: 'b',
    explanation: '勒庞认为，个体一旦进入群体就会丧失理性，变得冲动、易变、情绪化。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s031_q003',
    type: 'lesson-quiz',
    refId: 'S-D01',
    subjectId: 'sociology',

    question: '相对剥夺理论关注的是什么？',
    options: [
      { id: 'a', text: '绝对贫困' },
      { id: 'b', text: '人们对相对于参照群体的期望未得到满足的感觉' },
      { id: 'c', text: '身体健康' },
      { id: 'd', text: '个人兴趣' }
    ],
    correctOptionId: 'b',
    explanation: '相对剥夺理论关注的是人们对相对于参照群体的期望未得到满足的感觉。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s031_q004',
    type: 'lesson-quiz',
    refId: 'S-D01',
    subjectId: 'sociology',

    question: '集体行为与制度化行为不同，它缺乏明确的组织结构、规章制度和正式目标。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '集体行为确实是非制度化的、自发性的行为，缺乏明确的组织结构和规章制度。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s031_q005',
    type: 'lesson-quiz',
    refId: 'S-D01',
    subjectId: 'sociology',

    question: '情绪感染理论强调什么在集体行为中的作用？',
    options: [
      { id: 'a', text: '理性分析' },
      { id: 'b', text: '情绪的作用' },
      { id: 'c', text: '经济因素' },
      { id: 'd', text: '政治因素' }
    ],
    correctOptionId: 'b',
    explanation: '情绪感染理论强调情绪在集体行为中的重要作用，情绪在人群中快速传播。',
  hint: '',
  knowledgePoints: []
  },
];

export default S031_QUIZ;