import type { Quiz } from '@/types';

// S042 法律社会学 - 章节测验
export const S042_QUIZ: Quiz[] = [
  {
    id: 'soc_s042_q001',
    type: 'lesson-quiz',
    refId: 'S-E02',
    subjectId: 'sociology',

    question: '法律社会学研究什么？',
    options: [
      { id: 'a', text: '纯法律条文' },
      { id: 'b', text: '法律与社会的相互关系' },
      { id: 'c', text: '物理现象' },
      { id: 'd', text: '化学反应' }
    ],
    correctOptionId: 'b',
    explanation: '法律社会学研究法律与社会的相互关系，包括法律如何反映和塑造社会秩序，社会因素如何影响法律的制定和实施。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s042_q002',
    type: 'lesson-quiz',
    refId: 'S-E02',
    subjectId: 'sociology',

    question: '法律的社会功能不包括以下哪项？',
    options: [
      { id: 'a', text: '规范功能' },
      { id: 'b', text: '整合功能' },
      { id: 'c', text: '控制功能' },
      { id: 'd', text: '烹饪功能' }
    ],
    correctOptionId: 'd',
    explanation: '法律的社会功能包括规范功能、整合功能、控制功能、教育功能、预测功能等，不包括烹饪功能。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s042_q003',
    type: 'lesson-quiz',
    refId: 'S-E02',
    subjectId: 'sociology',

    question: '涂尔干认为法律反映社会团结的哪种类型？',
    options: [
      { id: 'a', text: '只有压制性法' },
      { id: 'b', text: '只有恢复性法' },
      { id: 'c', text: '机械团结对应压制性法，有机团结对应恢复性法' },
      { id: 'd', text: '不反映团结' }
    ],
    correctOptionId: 'c',
    explanation: '涂尔干认为机械团结（传统社会）对应压制性法，有机团结（现代社会）对应恢复性法。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s042_q004',
    type: 'lesson-quiz',
    refId: 'S-E02',
    subjectId: 'sociology',

    question: '程序正义强调过程的公正性，包括公开、参与、中立、尊重等要素。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '程序正义确实强调过程的公正性，包括公开、参与、中立、尊重等要素。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s042_q005',
    type: 'lesson-quiz',
    refId: 'S-E02',
    subjectId: 'sociology',

    question: '法律多元主义认为什么？',
    options: [
      { id: 'a', text: '只有一种法律' },
      { id: 'b', text: '社会中存在多种规范秩序：国家法、习惯法、宗教法、行业规范等' },
      { id: 'c', text: '法律不存在' },
      { id: 'd', text: '法律完全一致' }
    ],
    correctOptionId: 'b',
    explanation: '法律多元主义认为社会中存在多种规范秩序：国家法、习惯法、宗教法、行业规范等。',
  hint: '',
  knowledgePoints: []
  },
];

export default S042_QUIZ;