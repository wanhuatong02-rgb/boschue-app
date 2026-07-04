import type { Quiz } from '@/types';

// S004 数据收集技术 - 章节测验
export const S004_QUIZ: Quiz[] = [
  {
    id: 'soc_s004_q001',
    type: 'lesson-quiz',
    refId: 'S004',
    subjectId: 'sociology',

    question: '问卷调查法的最大优势是什么？',
    options: [
      { id: 'a', text: '可以获得深度信息' },
      { id: 'b', text: '效率高、成本低、便于比较分析' },
      { id: 'c', text: '不需要统计知识' },
      { id: 'd', text: '完全避免偏见' }
    ],
    correctOptionId: 'b',
    explanation: '问卷调查法的优势在于效率高、成本低、便于进行统计分析和比较分析，但可能缺乏深度信息。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s004_q002',
    type: 'lesson-quiz',
    refId: 'S004',
    subjectId: 'sociology',

    question: '深度访谈最适合用于哪种情况？',
    options: [
      { id: 'a', text: '大样本统计分析' },
      { id: 'b', text: '探索性研究，获得丰富细节信息' },
      { id: 'c', text: '快速收集数据' },
      { id: 'd', text: '标准化比较' }
    ],
    correctOptionId: 'b',
    explanation: '深度访谈适合探索性研究，能够获得丰富的细节信息，但不适合大样本统计分析。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s004_q003',
    type: 'lesson-quiz',
    refId: 'S004',
    subjectId: 'sociology',

    question: '参与观察中研究者如何进行研究？',
    options: [
      { id: 'a', text: '保持客观距离观察' },
      { id: 'b', text: '融入研究对象的环境中' },
      { id: 'c', text: '通过问卷收集数据' },
      { id: 'd', text: '进行实验研究' }
    ],
    correctOptionId: 'b',
    explanation: '参与观察中研究者融入研究对象的环境中，以内部视角进行观察和研究。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s004_q004',
    type: 'lesson-quiz',
    refId: 'S004',
    subjectId: 'sociology',

    question: '文献分析法的成本低，能追溯历史变迁，但依赖于文献的可获得性和可靠性。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '文献分析法确实成本低且能追溯历史，但其质量受限于可获得文献的质量和真实性。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s004_q005',
    type: 'lesson-quiz',
    refId: 'S004',
    subjectId: 'sociology',

    question: '网络数据收集面临的最大挑战之一是什么？',
    options: [
      { id: 'a', text: '技术过于复杂' },
      { id: 'b', text: '样本可能不代表总体人口' },
      { id: 'c', text: '无法收集数据' },
      { id: 'd', text: '数据完全不准确' }
    ],
    correctOptionId: 'b',
    explanation: '网络数据收集的挑战之一是样本代表性问题，因为网络使用者可能不代表总体人口。',
  hint: '',
  knowledgePoints: []
  },
];

export default S004_QUIZ;