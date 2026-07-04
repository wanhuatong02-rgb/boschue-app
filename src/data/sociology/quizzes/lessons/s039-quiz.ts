import type { Quiz } from '@/types';

// S039 社会变迁中的心理适应 - 章节测验
export const S039_QUIZ: Quiz[] = [
  {
    id: 'soc_s039_q001',
    type: 'lesson-quiz',
    refId: 'S039',
    subjectId: 'sociology',

    question: '社会变迁对个体的主要影响是什么？',
    options: [
      { id: 'a', text: '没有影响' },
      { id: 'b', text: '产生新的挑战和压力，需要个体调整适应' },
      { id: 'c', text: '只有正面影响' },
      { id: 'd', text: '只有负面影响' }
    ],
    correctOptionId: 'b',
    explanation: '社会变迁会带来新的挑战和压力，个体需要调整认知、情感和行为来适应。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s039_q002',
    type: 'lesson-quiz',
    refId: 'S039',
    subjectId: 'sociology',

    question: '心理应激是指什么？',
    options: [
      { id: 'a', text: '身体疲劳' },
      { id: 'b', text: '个体面对超出应对能力的需求、限制或期望时的身心反应' },
      { id: 'c', text: '纯心理反应' },
      { id: 'd', text: '物理现象' }
    ],
    correctOptionId: 'b',
    explanation: '心理应激是个体在面对超出应对能力的需求、限制或期望时的身心反应。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s039_q003',
    type: 'lesson-quiz',
    refId: 'S039',
    subjectId: 'sociology',

    question: '快速社会变迁可能导致的问题不包括以下哪项？',
    options: [
      { id: 'a', text: '角色冲突' },
      { id: 'b', text: '价值观冲突' },
      { id: 'c', text: '身份认同困惑' },
      { id: 'd', text: '完全稳定不变' }
    ],
    correctOptionId: 'd',
    explanation: '快速变迁可能导致角色冲突、价值观冲突、身份认同困惑等问题，不会导致完全稳定不变。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s039_q004',
    type: 'lesson-quiz',
    refId: 'S039',
    subjectId: 'sociology',

    question: '变迁也可能带来积极心理影响，如新的机会、更开放的环境、个人发展空间等。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '社会变迁既可能带来挑战，也可能带来积极影响，如新机会、开放环境等。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s039_q005',
    type: 'lesson-quiz',
    refId: 'S039',
    subjectId: 'sociology',

    question: '社会支持系统在个体适应变迁中的作用是什么？',
    options: [
      { id: 'a', text: '没有作用' },
      { id: 'b', text: '缓解变迁压力，提供情感、信息、工具支持' },
      { id: 'c', text: '增加压力' },
      { id: 'd', text: '干扰适应' }
    ],
    correctOptionId: 'b',
    explanation: '社会支持系统可以缓解变迁压力，提供情感支持、信息支持、工具支持等。',
  hint: '',
  knowledgePoints: []
  },
];

export default S039_QUIZ;