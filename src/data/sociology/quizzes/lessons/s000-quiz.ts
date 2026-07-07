import type { Quiz } from '@/types';

// S-00 社会学学习导论 - 章节测验
export const S00_QUIZ: Quiz[] = [
  {
    id: 'soc_intro_00_q001',
    type: 'lesson-quiz',
    refId: 'S-00',
    subjectId: 'sociology',
    question: '社会学这门学科的核心价值在于培养什么能力？',
    options: [
      { id: 'a', text: '社会学想象力，连接个人经历与社会结构的能力' },
      { id: 'b', text: '精确预测个体行为的能力' },
      { id: 'c', text: '对社会现象进行道德评判的能力' },
      { id: 'd', text: '超越其他社会科学的独门方法论' },
    ],
    correctOptionId: 'a',
    explanation: '正确答案是「社会学想象力，连接个人经历与社会结构的能力」。本题考察「社会学学习导论」的基础认知，其他选项为相近概念的混淆项。 参见：C.赖特·米尔斯《社会学想象力》',
    hint: '',
    knowledgePoints: ['社会学学习导论']
  },
  {
    id: 'soc_intro_00_q002',
    type: 'lesson-quiz',
    refId: 'S-00',
    subjectId: 'sociology',
    question: '以下关于「社会学学习导论」的描述，正确的是？',
    options: [
      { id: 'a', text: '社会学想象力，连接个人经历与社会结构的能力' },
      { id: 'b', text: '错误：预测个体行为的能力' },
      { id: 'c', text: '错误：会现象进行道德评判的能力' },
      { id: 'd', text: '错误：其他社会科学的独门方法论' },
    ],
    correctOptionId: 'a',
    explanation: '正确选项是「社会学想象力，连接个人经历与社会结构的能力」。参见：C.赖特·米尔斯《社会学想象力》',
    hint: '',
    knowledgePoints: ['社会学学习导论概念']
  },
  {
    id: 'soc_intro_00_q003',
    type: 'lesson-quiz',
    refId: 'S-00',
    subjectId: 'sociology',
    question: '下列选项中，与「社会学学习导论」最相关的是？',
    options: [
      { id: 'a', text: '以上都是' },
      { id: 'b', text: '以上都不是' },
      { id: 'c', text: '社会学想象力，连接个人经历与社会结构的能力' },
      { id: 'd', text: '精确预测个体行为的能力' },
    ],
    correctOptionId: 'c',
    explanation: '「社会学想象力，连接个人经历与社会结构的能力」与社会学学习导论直接相关。',
    hint: '',
    knowledgePoints: ['社会学学习导论应用']
  }
];
