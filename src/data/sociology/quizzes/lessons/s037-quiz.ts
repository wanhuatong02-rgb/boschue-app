import type { Quiz } from '@/types';

// S037 社会认知过程 - 章节测验
export const S037_QUIZ: Quiz[] = [
  {
    id: 'soc_s037_q001',
    type: 'lesson-quiz',
    refId: 'S-D07',
    subjectId: 'sociology',

    question: '社会认知研究什么？',
    options: [
      { id: 'a', text: '纯生理过程' },
      { id: 'b', text: '人们如何理解、解释和记忆社会信息' },
      { id: 'c', text: '物理现象' },
      { id: 'd', text: '化学反应' }
    ],
    correctOptionId: 'b',
    explanation: '社会认知研究人们如何理解、解释和记忆社会信息，影响对他人的理解、社会现象的判断和人际关系的建立。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s037_q002',
    type: 'lesson-quiz',
    refId: 'S-D07',
    subjectId: 'sociology',

    question: '首因效应指的是什么？',
    options: [
      { id: 'a', text: '最后印象最重要' },
      { id: 'b', text: '第一印象对后续判断的影响' },
      { id: 'c', text: '中间印象最重要' },
      { id: 'd', text: '没有影响' }
    ],
    correctOptionId: 'b',
    explanation: '首因效应是指第一印象对后续判断的影响。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s037_q003',
    type: 'lesson-quiz',
    refId: 'S-D07',
    subjectId: 'sociology',

    question: '归因理论中的内部归因是指什么？',
    options: [
      { id: 'a', text: '外部环境因素' },
      { id: 'b', text: '个人特质因素' },
      { id: 'c', text: '地理位置' },
      { id: 'd', text: '时间因素' }
    ],
    correctOptionId: 'b',
    explanation: '内部归因是指将行为原因归于个人特质、性格等内部因素。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s037_q004',
    type: 'lesson-quiz',
    refId: 'S-D07',
    subjectId: 'sociology',

    question: '基本归因错误是指倾向于过度强调外部因素而忽视内部因素解释他人行为。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '基本归因错误是指倾向于过度强调内部因素而忽视外部因素解释他人行为。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s037_q005',
    type: 'lesson-quiz',
    refId: 'S-D07',
    subjectId: 'sociology',

    question: '代表性启发是指什么？',
    options: [
      { id: 'a', text: '根据容易想起的例子判断概率' },
      { id: 'b', text: '根据典型特征判断概率' },
      { id: 'c', text: '根据初始信息判断' },
      { id: 'd', text: '根据数量判断' }
    ],
    correctOptionId: 'b',
    explanation: '代表性启发是指根据典型特征判断概率，可能忽视基础概率。',
  hint: '',
  knowledgePoints: []
  },
];

export default S037_QUIZ;