import type { Quiz } from '@/types';

// S001 社会学的定义与发展历程 - 章节测验
export const S001_QUIZ: Quiz[] = [
  {
    id: 'soc_s001_q001',
    type: 'lesson-quiz',
    refId: 'S001',
    subjectId: 'sociology',

    question: '社会学这个词的词根"socius"来自哪种语言？',
    options: [
      { id: 'a', text: '希腊文' },
      { id: 'b', text: '拉丁文' },
      { id: 'c', text: '法文' },
      { id: 'd', text: '德文' }
    ],
    correctOptionId: 'b',
    explanation: 'Sociology一词来源于拉丁文"socius"（社会、伙伴）和希腊文"logos"（学问）',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s001_q002',
    type: 'lesson-quiz',
    refId: 'S001',
    subjectId: 'sociology',

    question: '哪位学者被认为是社会学的创始人？',
    options: [
      { id: 'a', text: '埃米尔·涂尔干' },
      { id: 'b', text: '卡尔·马克思' },
      { id: 'c', text: '奥古斯特·孔德' },
      { id: 'd', text: '马克斯·韦伯' }
    ],
    correctOptionId: 'c',
    explanation: '奥古斯特·孔德首次提出了"sociologie"这个术语，并主张用实证主义的方法研究社会现象，被认为是社会学的创始人',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s001_q003',
    type: 'lesson-quiz',
    refId: 'S001',
    subjectId: 'sociology',

    question: 'C.赖特·米尔斯提出的哪个概念是社会学的核心思维方式？',
    options: [
      { id: 'a', text: '社会事实' },
      { id: 'b', text: '社会学想象力' },
      { id: 'c', text: '理想类型' },
      { id: 'd', text: '科层制' }
    ],
    correctOptionId: 'b',
    explanation: 'C.赖特·米尔斯提出了"社会学想象力"这一重要概念，强调将个人困扰与公共议题联系起来的能力',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s001_q004',
    type: 'lesson-quiz',
    refId: 'S001',
    subjectId: 'sociology',

    question: '社会学是研究社会行为、社会关系和社会结构的学科。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '这是社会学的基本定义，社会学研究个体行为如何受到社会环境的影响，以及社会结构如何塑造我们的生活。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s001_q005',
    type: 'lesson-quiz',
    refId: 'S001',
    subjectId: 'sociology',

    question: '下列哪位不是社会学的奠基人？',
    options: [
      { id: 'a', text: '奥古斯特·孔德' },
      { id: 'b', text: '埃米尔·涂尔干' },
      { id: 'c', text: '马克斯·韦伯' },
      { id: 'd', text: '西格蒙德·弗洛伊德' }
    ],
    correctOptionId: 'd',
    explanation: '西格蒙德·弗洛伊德是精神分析学的创始人，不是社会学的奠基人。社会学的奠基人主要包括孔德、涂尔干、韦伯、马克思、斯宾塞等人。',
  hint: '',
  knowledgePoints: []
  },
];

export default S001_QUIZ;