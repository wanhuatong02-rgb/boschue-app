import type { Quiz } from '@/types';

// 经济学通关测验（E-FINAL，4 道跨章综合样题）
export const FINAL_QUIZ: Quiz[] = [
  {
    id: 'E-FINAL-Q1',
    type: 'final-quiz',
    refId: 'economics',
    subjectId: 'economics',
    question: '某人放弃年薪 10 万元的工作创业，年投入 20 万元，年营收 30 万元。其经济利润是？',
    options: [
      { id: 'A', text: '10 万元' },
      { id: 'B', text: '0 元' },
      { id: 'C', text: '20 万元' },
      { id: 'D', text: '30 万元' },
    ],
    correctOptionId: 'B',
    explanation:
      '会计利润 = 30 - 20 = 10 万。但经济利润要扣除隐性机会成本（放弃的工资 10 万），所以经济利润 = 30 - 20 - 10 = 0。经济利润为零意味着此人创业与上班无差异，这是经济学"正常利润"的概念。',
    hint: '经济利润要扣隐性成本',
    knowledgePoints: ['机会成本', '经济利润'],
  },
  {
    id: 'E-FINAL-Q2',
    type: 'final-quiz',
    refId: 'economics',
    subjectId: 'economics',
    question: '某垄断企业面对线性需求曲线，现政府实施价格管制使其等于边际成本。可能的结果是？',
    options: [
      { id: 'A', text: '无谓损失增加' },
      { id: 'B', text: '无谓损失减少，但企业可能亏损' },
      { id: 'C', text: '消费者剩余减少' },
      { id: 'D', text: '产量下降' },
    ],
    correctOptionId: 'B',
    explanation:
      '垄断定价 P > MC 带来无谓损失。强制 P = MC 可消除无谓损失，实现配置效率。但若 P < ATC，企业亏损需要补贴（常见于自然垄断管制）。这就是为什么自然垄断管制常用"平均成本定价"折中。',
    hint: 'P=MC 消除无谓损失，但可能亏损',
    knowledgePoints: ['垄断', '市场效率', '价格管制'],
  },
  {
    id: 'E-FINAL-Q3',
    type: 'final-quiz',
    refId: 'economics',
    subjectId: 'economics',
    question: '一国长期生活水平的决定因素是？短期内提升生活水平最直接的政策是？',
    options: [
      { id: 'A', text: '货币量；增发货币' },
      { id: 'B', text: '生产率；鼓励储蓄、投资与教育' },
      { id: 'C', text: '人口；鼓励生育' },
      { id: 'D', text: '自然资源；扩大领土' },
    ],
    correctOptionId: 'B',
    explanation:
      '原理八：长期生活水平取决于生产率。生产率由物质资本、人力资本、自然资源、技术知识决定。储蓄→投资→资本积累，教育→人力资本，研发→技术知识，这些都是提升生产率的核心政策。增发货币只影响名义变量。',
    hint: '生产率 + 资本/教育/技术',
    knowledgePoints: ['生产率', '长期增长'],
  },
  {
    id: 'E-FINAL-Q4',
    type: 'final-quiz',
    refId: 'economics',
    subjectId: 'economics',
    question: '政府扩大支出刺激经济，乘数效应会被以下哪项部分抵消？',
    options: [
      { id: 'A', text: '消费增加' },
      { id: 'B', text: '挤出效应（利率上升抑制私人投资）' },
      { id: 'C', text: '进口减少' },
      { id: 'D', text: '税收减少' },
    ],
    correctOptionId: 'B',
    explanation:
      '政府支出增加 → 总需求上升 → 利率上升 → 私人投资减少 → 部分抵消乘数效应。这就是"挤出效应"。乘数效应与挤出效应的相对大小，是财政政策效果争论的核心。极端情况（流动性陷阱）下挤出效应为零，乘数最大。',
    hint: '利率上升 → 私人投资被挤出',
    knowledgePoints: ['乘数效应', '挤出效应'],
  },
];
