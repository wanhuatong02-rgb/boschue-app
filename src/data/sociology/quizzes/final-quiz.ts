import type { Quiz } from '@/types';

// 社会学通关测验
export const FINAL_QUIZ: Quiz[] = [
  {
    id: 'SOC-FINAL-Q1',
    type: 'final-quiz',
    refId: 'sociology',
    subjectId: 'sociology',
    question: '被称为"社会学之父"的法国哲学家是？',
    options: [
      { id: 'a', text: '奥古斯特·孔德' },
      { id: 'b', text: '埃米尔·涂尔干' },
      { id: 'c', text: '马克斯·韦伯' },
      { id: 'd', text: '赫伯特·斯宾塞' }
    ],
    correctOptionId: 'a',
    explanation: '孔德首次提出"sociologie"这一术语，被尊为"社会学之父"。',
    hint: '首次提出"sociologie"',
    knowledgePoints: ['孔德']
  },
  {
    id: 'SOC-FINAL-Q2',
    type: 'final-quiz',
    refId: 'sociology',
    subjectId: 'sociology',
    question: '涂尔干研究自杀现象的经典著作是什么？',
    options: [
      { id: 'a', text: '《社会分工论》' },
      { id: 'b', text: '《宗教生活的基本形式》' },
      { id: 'c', text: '《自杀论》' },
      { id: 'd', text: '《社会学方法的准则》' }
    ],
    correctOptionId: 'c',
    explanation: '《自杀论》（1897）是涂尔干社会学名著，用实证方法研究自杀现象。',
    hint: '书名表明研究主题',
    knowledgePoints: ['涂尔干', '自杀论']
  },
  {
    id: 'SOC-FINAL-Q3',
    type: 'final-quiz',
    refId: 'sociology',
    subjectId: 'sociology',
    question: '韦伯在《新教伦理与____精神》中探讨了宗教观念如何影响经济。',
    options: [
      { id: 'a', text: '共产主义' },
      { id: 'b', text: '资本主义' },
      { id: 'c', text: '封建主义' },
      { id: 'd', text: '社会主义' }
    ],
    correctOptionId: 'b',
    explanation: '韦伯《新教伦理与资本主义精神》探讨了新教伦理对兴起的资本主义的促进作用。',
    hint: '资本主义精神的兴起',
    knowledgePoints: ['韦伯', '新教伦理']
  },
  {
    id: 'SOC-FINAL-Q4',
    type: 'final-quiz',
    refId: 'sociology',
    subjectId: 'sociology',
    question: '马克思认为社会结构中起决定作用的是？',
    options: [
      { id: 'a', text: '经济基础' },
      { id: 'b', text: '意识形态' },
      { id: 'c', text: '法律制度' },
      { id: 'd', text: '文化传统' }
    ],
    correctOptionId: 'a',
    explanation: '马克思主张经济基础决定上层建筑，经济基础在社会结构中起决定性作用。',
    hint: '经济基础决定上层建筑',
    knowledgePoints: ['马克思', '经济基础']
  },
  {
    id: 'SOC-FINAL-Q5',
    type: 'final-quiz',
    refId: 'sociology',
    subjectId: 'sociology',
    question: '社会学中研究社会不平等的核心概念是？',
    options: [
      { id: 'a', text: '社会化' },
      { id: 'b', text: '社会分层' },
      { id: 'c', text: '越轨行为' },
      { id: 'd', text: '集体行为' }
    ],
    correctOptionId: 'b',
    explanation: '社会分层是社会不平等的结构体现，研究社会中因财富、权力、声望不同而形成的等级。',
    hint: '不平等 → 分层',
    knowledgePoints: ['社会分层']
  },
  {
    id: 'SOC-FINAL-Q6',
    type: 'final-quiz',
    refId: 'sociology',
    subjectId: 'sociology',
    question: '一个人学习社会规范、价值观念和行为方式的过程叫：',
    options: [
      { id: 'a', text: '同化' },
      { id: 'b', text: '顺应' },
      { id: 'c', text: '社会化' },
      { id: 'd', text: '组织化' }
    ],
    correctOptionId: 'c',
    explanation: '社会化是指个体与社会互动过程中学习社会规范、价值观和行为方式的过程。',
    hint: '个体学习社会规范的过程',
    knowledgePoints: ['社会化']
  },
  {
    id: 'SOC-FINAL-Q7',
    type: 'final-quiz',
    refId: 'sociology',
    subjectId: 'sociology',
    question: '违反社会规范的行为通常被称为：',
    options: [
      { id: 'a', text: '社会化' },
      { id: 'b', text: '越轨行为' },
      { id: 'c', text: '融合行为' },
      { id: 'd', text: '合作行为' }
    ],
    correctOptionId: 'b',
    explanation: '越轨行为是指偏离或违反社会规范的行为，是社会学的核心研究内容之一。',
    hint: '违反规范 → 越轨',
    knowledgePoints: ['越轨行为']
  },
  {
    id: 'SOC-FINAL-Q8',
    type: 'final-quiz',
    refId: 'sociology',
    subjectId: 'sociology',
    question: '以下哪种研究方法属于定量研究？',
    options: [
      { id: 'a', text: '深度访谈' },
      { id: 'b', text: '民族志观察' },
      { id: 'c', text: '问卷调查' },
      { id: 'd', text: '口述史' }
    ],
    correctOptionId: 'c',
    explanation: '问卷调查通过结构化问题收集数据并进行统计分析，是典型的定量研究方法。',
    hint: '统计+数字',
    knowledgePoints: ['定量研究']
  },
  {
    id: 'SOC-FINAL-Q9',
    type: 'final-quiz',
    refId: 'sociology',
    subjectId: 'sociology',
    question: '库利提出的"____"概念强调我们通过他人反馈形成自我认知。',
    options: [
      { id: 'a', text: '镜中我' },
      { id: 'b', text: '主我客我' },
      { id: 'c', text: '隐性自我' },
      { id: 'd', text: '社会化自我' }
    ],
    correctOptionId: 'a',
    explanation: '库利提出"镜中我"（looking-glass self），强调我们通过别人的反馈和评价形成自我认知。',
    hint: '像镜子一样从他人看自己',
    knowledgePoints: ['库利', '镜中我']
  },
  {
    id: 'SOC-FINAL-Q10',
    type: 'final-quiz',
    refId: 'sociology',
    subjectId: 'sociology',
    question: '中国社会学恢复重建以来，长期作为核心教材之一的是：',
    options: [
      { id: 'a', text: '《乡土中国》' },
      { id: 'b', text: '《社会学概论新修》' },
      { id: 'c', text: '《江村经济》' },
      { id: 'd', text: '《生育制度》' }
    ],
    correctOptionId: 'b',
    explanation: '郑杭生主编《社会学概论新修》是新中国社会学恢复重建后广泛使用的核心教材。',
    hint: '社会学入门概论',
    knowledgePoints: ['社会学教材']
  }
];

export default FINAL_QUIZ;