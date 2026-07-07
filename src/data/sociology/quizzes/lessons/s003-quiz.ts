import type { Quiz } from '@/types';

// S003 社会研究方法论 - 章节测验
export const S003_QUIZ: Quiz[] = [
  {
    id: 'soc_s003_q001',
    type: 'lesson-quiz',
    refId: 'S-A03',
    subjectId: 'sociology',

    question: '定量研究和定性研究的主要区别在于什么？',
    options: [
      { id: 'a', text: '研究对象的不同' },
      { id: 'b', text: '数据类型的差异' },
      { id: 'c', text: '研究者身份的差异' },
      { id: 'd', text: '研究时间长短' }
    ],
    correctOptionId: 'b',
    explanation: '定量研究使用量化数据，通过统计分析得出结论；定性研究使用非量化数据，如文字、图像等，进行深入分析。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s003_q002',
    type: 'lesson-quiz',
    refId: 'S-A03',
    subjectId: 'sociology',

    question: '在研究方法中，概念化指的是什么？',
    options: [
      { id: 'a', text: '将概念转化为可测量的指标' },
      { id: 'b', text: '将抽象概念转化为可理解和可测量的形式' },
      { id: 'c', text: '收集数据的过程' },
      { id: 'd', text: '分析数据的过程' }
    ],
    correctOptionId: 'b',
    explanation: '概念化是将抽象的概念转化为可理解和可测量的形式，而操作化是将概念转化为可测量的指标。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s003_q003',
    type: 'lesson-quiz',
    refId: 'S-A03',
    subjectId: 'sociology',

    question: '下列哪种研究设计是在不同时间点收集数据？',
    options: [
      { id: 'a', text: '横截面研究' },
      { id: 'b', text: '纵贯研究' },
      { id: 'c', text: '案例研究' },
      { id: 'd', text: '实验研究' }
    ],
    correctOptionId: 'b',
    explanation: '纵贯研究（纵向研究）在不同时间点收集数据，可以追踪变化趋势，检验因果关系。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s003_q004',
    type: 'lesson-quiz',
    refId: 'S-A03',
    subjectId: 'sociology',

    question: '研究伦理中的知情同意要求参与者充分了解研究目的和可能的风险，自愿参与研究。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '知情同意是研究伦理的重要原则，确保参与者在充分了解情况后自愿参与研究。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s003_q005',
    type: 'lesson-quiz',
    refId: 'S-A03',
    subjectId: 'sociology',

    question: '信度和效度在研究中分别指的是什么？',
    options: [
      { id: 'a', text: '信度是准确性，效度是稳定性' },
      { id: 'b', text: '信度是稳定性和一致性，效度是测量准确性' },
      { id: 'c', text: '信度是测量工具，效度是统计方法' },
      { id: 'd', text: '信度是样本大小，效度是研究结果' }
    ],
    correctOptionId: 'b',
    explanation: '信度指测量结果的一致性和稳定性，效度指测量工具确实测量了所要测量的概念。',
  hint: '',
  knowledgePoints: []
  },
];

export default S003_QUIZ;