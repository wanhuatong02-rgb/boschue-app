import type { Quiz } from '@/types';

// S012 社会流动 - 章节测验
export const S012_QUIZ: Quiz[] = [
  {
    id: 'soc_s012_q001',
    type: 'lesson-quiz',
    refId: 'S-B02',
    subjectId: 'sociology',

    question: '垂直流动是指什么？',
    options: [
      { id: 'a', text: '社会地位不变但位置改变' },
      { id: 'b', text: '社会地位的升降变化' },
      { id: 'c', text: '地理位置的移动' },
      { id: 'd', text: '职业的转换' }
    ],
    correctOptionId: 'b',
    explanation: '垂直流动指社会地位的升降变化，分为向上流动和向下流动。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s012_q002',
    type: 'lesson-quiz',
    refId: 'S-B02',
    subjectId: 'sociology',

    question: '代际流动是指什么？',
    options: [
      { id: 'a', text: '个人一生中的地位变化' },
      { id: 'b', text: '子女与父母之间的社会地位变化' },
      { id: 'c', text: '同龄人之间的比较' },
      { id: 'd', text: '社会整体的变化' }
    ],
    correctOptionId: 'b',
    explanation: '代际流动指子女与父母之间的社会地位变化，反映社会机会是否受出身影响。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s012_q003',
    type: 'lesson-quiz',
    refId: 'S-B02',
    subjectId: 'sociology',

    question: '影响社会流动的最重要因素之一是什么？',
    options: [
      { id: 'a', text: '身高' },
      { id: 'b', text: '教育' },
      { id: 'c', text: '爱好' },
      { id: 'd', text: '血型' }
    ],
    correctOptionId: 'b',
    explanation: '教育是人际流动的重要通道，对社会流动有重要影响。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s012_q004',
    type: 'lesson-quiz',
    refId: 'S-B02',
    subjectId: 'sociology',

    question: '水平流动是指社会地位不变但位置改变。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '水平流动指社会地位不变但位置改变，如职业转换但社会地位未变。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s012_q005',
    type: 'lesson-quiz',
    refId: 'S-B02',
    subjectId: 'sociology',

    question: '社会流动率是衡量什么的指标？',
    options: [
      { id: 'a', text: '经济发展速度' },
      { id: 'b', text: '社会活力和开放程度' },
      { id: 'c', text: '人口增长率' },
      { id: 'd', text: '教育水平' }
    ],
    correctOptionId: 'b',
    explanation: '社会流动率是衡量社会活力和开放程度的重要指标。',
  hint: '',
  knowledgePoints: []
  },
];

export default S012_QUIZ;