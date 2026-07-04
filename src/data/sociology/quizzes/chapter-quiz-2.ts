import type { Quiz } from '@/types';

export const CHAPTER_QUIZ_2: Quiz[] = [
  {
    id: 'SOC-CH2-Q1',
    type: 'chapter-quiz',
    refId: 'S-CH2',
    subjectId: 'sociology',
    question: '社会分层的核心维度不包括以下哪项？',
    options: [
      { id: 'a', text: '经济地位' },
      { id: 'b', text: '社会声望' },
      { id: 'c', text: '个人身高' },
      { id: 'd', text: '政治权力' }
    ],
    correctOptionId: 'c',
    explanation: '社会分层的核心维度包括经济地位、社会声望、政治权力、教育程度等，个人身高不属于分层维度。',
    hint: '分层维度与社会资源分配相关',
    knowledgePoints: ['社会分层', '分层维度']
  },
  {
    id: 'SOC-CH2-Q2',
    type: 'chapter-quiz',
    refId: 'S-CH2',
    subjectId: 'sociology',
    question: '以下哪种流动属于"垂直流动"？',
    options: [
      { id: 'a', text: '从教师转为公务员' },
      { id: 'b', text: '从工人晋升为经理' },
      { id: 'c', text: '从北京迁移到上海' },
      { id: 'd', text: '从医生转为律师' }
    ],
    correctOptionId: 'b',
    explanation: '垂直流动指社会地位的升降变化，从工人到经理是地位上升。其他选项属于水平流动。',
    hint: '地位上升或下降',
    knowledgePoints: ['社会流动', '垂直流动']
  },
  {
    id: 'SOC-CH2-Q3',
    type: 'chapter-quiz',
    refId: 'S-CH2',
    subjectId: 'sociology',
    question: '马克思主义阶级理论认为，阶级划分的核心依据是：',
    options: [
      { id: 'a', text: '收入水平' },
      { id: 'b', text: '生产资料占有关系' },
      { id: 'c', text: '教育程度' },
      { id: 'd', text: '社会声望' }
    ],
    correctOptionId: 'b',
    explanation: '马克思主义认为阶级划分的核心是对生产资料的占有关系，即是否拥有生产资料决定了阶级归属。',
    hint: '生产资料的占有',
    knowledgePoints: ['阶级理论', '马克思主义']
  },
  {
    id: 'SOC-CH2-Q4',
    type: 'chapter-quiz',
    refId: 'S-CH2',
    subjectId: 'sociology',
    question: '性别不平等在社会中的主要表现不包括：',
    options: [
      { id: 'a', text: '同工不同酬' },
      { id: 'b', text: '职业隔离' },
      { id: 'c', text: '教育机会不均等' },
      { id: 'd', text: '性别认同差异' }
    ],
    correctOptionId: 'd',
    explanation: '性别不平等主要表现为经济、职业、教育等方面的机会不均等，性别认同差异是正常的社会多样性。',
    hint: '不平等指机会与资源分配差异',
    knowledgePoints: ['性别不平等', '性别歧视']
  },
  {
    id: 'SOC-CH2-Q5',
    type: 'chapter-quiz',
    refId: 'S-CH2',
    subjectId: 'sociology',
    question: '城市化进程带来的社会问题不包括：',
    options: [
      { id: 'a', text: '城市贫困' },
      { id: 'b', text: '交通拥堵' },
      { id: 'c', text: '农村人口减少' },
      { id: 'd', text: '文化多样性增加' }
    ],
    correctOptionId: 'd',
    explanation: '文化多样性增加是城市化的积极影响，而非社会问题。城市贫困、交通拥堵、农村人口减少都是城市化带来的挑战。',
    hint: '区分积极影响与社会问题',
    knowledgePoints: ['城市化', '社会问题']
  }
];

export default CHAPTER_QUIZ_2;
