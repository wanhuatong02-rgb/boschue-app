import type { Quiz } from '@/types';

// S011 社会分层与不平等 - 章节测验
export const S011_QUIZ: Quiz[] = [
  {
    id: 'soc_s011_q001',
    type: 'lesson-quiz',
    refId: 'S011',
    subjectId: 'sociology',

    question: '社会分层的主要标准不包括以下哪项？',
    options: [
      { id: 'a', text: '财富' },
      { id: 'b', text: '权力' },
      { id: 'c', text: '声望' },
      { id: 'd', text: '身高' }
    ],
    correctOptionId: 'd',
    explanation: '社会分层的主要标准包括财富、权力、声望、教育等，身高不是分层标准。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s011_q002',
    type: 'lesson-quiz',
    refId: 'S011',
    subjectId: 'sociology',

    question: '韦伯的三维分层理论包括哪三个方面？',
    options: [
      { id: 'a', text: '财富、权力、知识' },
      { id: 'b', text: '阶级、地位、党派' },
      { id: 'c', text: '收入、教育、职业' },
      { id: 'd', text: '年龄、性别、种族' }
    ],
    correctOptionId: 'b',
    explanation: '韦伯提出三维分层理论：阶级（经济）、地位（声望）、党派（权力）。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s011_q003',
    type: 'lesson-quiz',
    refId: 'S011',
    subjectId: 'sociology',

    question: '马克思认为社会阶级划分的依据是什么？',
    options: [
      { id: 'a', text: '社会声望' },
      { id: 'b', text: '政治权力' },
      { id: 'c', text: '生产资料占有关系' },
      { id: 'd', text: '教育水平' }
    ],
    correctOptionId: 'c',
    explanation: '马克思认为阶级由生产关系决定，核心是生产资料的占有关系。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s011_q004',
    type: 'lesson-quiz',
    refId: 'S011',
    subjectId: 'sociology',

    question: '种姓制是开放的分层体系，允许自由流动。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '种姓制是封闭的分层体系，限制社会流动。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s011_q005',
    type: 'lesson-quiz',
    refId: 'S011',
    subjectId: 'sociology',

    question: '社会分层的功能包括哪些？',
    options: [
      { id: 'a', text: '只有正功能' },
      { id: 'b', text: '激励、整合（正功能）和冲突、浪费（负功能）' },
      { id: 'c', text: '只有负功能' },
      { id: 'd', text: '无任何功能' }
    ],
    correctOptionId: 'b',
    explanation: '社会分层既有正功能（激励、整合），也有负功能（冲突、浪费）。',
  hint: '',
  knowledgePoints: []
  },
];

export default S011_QUIZ;