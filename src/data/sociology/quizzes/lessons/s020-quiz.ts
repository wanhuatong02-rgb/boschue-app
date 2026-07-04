import type { Quiz } from '@/types';

// S020 社会规范与控制 - 章节测验
export const S020_QUIZ: Quiz[] = [
  {
    id: 'soc_s020_q001',
    type: 'lesson-quiz',
    refId: 'S020',
    subjectId: 'sociology',

    question: '社会规范按强制程度可分为哪三类？',
    options: [
      { id: 'a', text: '高级、中级、低级' },
      { id: 'b', text: '民俗、民德和法律' },
      { id: 'c', text: '正式、非正式、半正式' },
      { id: 'd', text: '一级、二级、三级' }
    ],
    correctOptionId: 'b',
    explanation: '社会规范按强制程度可分为民俗、民德和法律三类。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s020_q002',
    type: 'lesson-quiz',
    refId: 'S020',
    subjectId: 'sociology',

    question: '社会控制机制不包括以下哪种？',
    options: [
      { id: 'a', text: '内部控制' },
      { id: 'b', text: '外部控制' },
      { id: 'c', text: '自我控制' },
      { id: 'd', text: '物理控制' }
    ],
    correctOptionId: 'd',
    explanation: '社会控制机制包括内部控制和外部控制，不包括物理控制。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s020_q003',
    type: 'lesson-quiz',
    refId: 'S020',
    subjectId: 'sociology',

    question: '正式控制的特点是什么？',
    options: [
      { id: 'a', text: '非制度化' },
      { id: 'b', text: '程序化、标准化、具有强制执行力' },
      { id: 'c', text: '反应慢' },
      { id: 'd', text: '成本低' }
    ],
    correctOptionId: 'b',
    explanation: '正式控制由官方机构实施，具有制度化特征，特点是程序化、标准化、具有强制执行力。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s020_q004',
    type: 'lesson-quiz',
    refId: 'S020',
    subjectId: 'sociology',

    question: '标签理论认为，越轨不仅是行为本身，更是社会定义的结果。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '标签理论确实认为越轨不仅是行为本身，更是社会定义的结果。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s020_q005',
    type: 'lesson-quiz',
    refId: 'S020',
    subjectId: 'sociology',

    question: '越轨行为可能有哪些影响？',
    options: [
      { id: 'a', text: '只有有害影响' },
      { id: 'b', text: '只有有益影响' },
      { id: 'c', text: '既有有害的（破坏社会秩序），也有有益的（推动社会创新）' },
      { id: 'd', text: '没有任何影响' }
    ],
    correctOptionId: 'c',
    explanation: '越轨行为可能有害于社会秩序，也可能有益于社会创新，影响是双重的。',
  hint: '',
  knowledgePoints: []
  },
];

export default S020_QUIZ;