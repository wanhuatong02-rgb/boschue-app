import type { Quiz } from '@/types';

// S-D00 应用领域导引 - 章节测验
export const SD00_QUIZ: Quiz[] = [
  {
    id: 'soc_intro_d00_q001',
    type: 'lesson-quiz',
    refId: 'S-D00',
    subjectId: 'sociology',
    question: '社会学应用领域通常不包括以下哪个方向？',
    options: [
      { id: 'a', text: '教育学与教育社会学' },
      { id: 'b', text: '医学与医疗社会学' },
      { id: 'c', text: '量子物理与风险社会' },
      { id: 'd', text: '家庭社会学' },
    ],
    correctOptionId: 'c',
    explanation: '正确答案是「量子物理与风险社会」。本题考察「应用领域导引」的基础认知，其他选项为相近概念的混淆项。 应用社会学聚焦具体社会领域如家庭/教育/医疗',
    hint: '',
    knowledgePoints: ['应用领域导引']
  },
  {
    id: 'soc_intro_d00_q002',
    type: 'lesson-quiz',
    refId: 'S-D00',
    subjectId: 'sociology',
    question: '以下关于「应用领域导引」的描述，正确的是？',
    options: [
      { id: 'a', text: '量子物理与风险社会' },
      { id: 'b', text: '错误：社会学' },
      { id: 'c', text: '错误：学与教育社会学' },
      { id: 'd', text: '错误：与医疗社会学' },
    ],
    correctOptionId: 'a',
    explanation: '正确选项是「量子物理与风险社会」。应用社会学聚焦具体社会领域如家庭/教育/医疗',
    hint: '',
    knowledgePoints: ['应用领域导引概念']
  },
  {
    id: 'soc_intro_d00_q003',
    type: 'lesson-quiz',
    refId: 'S-D00',
    subjectId: 'sociology',
    question: '下列选项中，与「应用领域导引」最相关的是？',
    options: [
      { id: 'a', text: '以上都是' },
      { id: 'b', text: '以上都不是' },
      { id: 'c', text: '量子物理与风险社会' },
      { id: 'd', text: '家庭社会学' },
    ],
    correctOptionId: 'c',
    explanation: '「量子物理与风险社会」与应用领域导引直接相关。',
    hint: '',
    knowledgePoints: ['应用领域导引应用']
  }
];
