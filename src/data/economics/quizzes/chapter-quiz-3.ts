import type { Quiz } from '@/types';

// 应用篇章节测验（E-CH3，4 道样题）
export const CHAPTER_QUIZ_3: Quiz[] = [
  {
    id: 'E-CH3-Q1',
    type: 'chapter-quiz',
    refId: 'E-CH3',
    subjectId: 'economics',
    question: '以下哪项应计入当年 GDP？',
    options: [
      { id: 'A', text: '二手车交易' },
      { id: 'B', text: '当年生产的新车销售' },
      { id: 'C', text: '股票交易金额' },
      { id: 'D', text: '家庭主妇家务' },
    ],
    correctOptionId: 'B',
    explanation:
      'GDP 只包含当年生产的最终物品与劳务的市场价值。二手车、二手房不含当年生产；股票交易是金融资产转移，不创造新产出；家务不通过市场。这是 GDP 的三大边界：当年、最终、市场。',
    hint: '当年 + 最终 + 市场',
    knowledgePoints: ['GDP 的定义'],
  },
  {
    id: 'E-CH3-Q2',
    type: 'chapter-quiz',
    refId: 'E-CH3',
    subjectId: 'economics',
    question: '长期通胀的根本原因是？',
    options: [
      { id: 'A', text: '工会推动工资上涨' },
      { id: 'B', text: '政府增发货币过多' },
      { id: 'C', text: '石油价格上涨' },
      { id: 'D', text: '企业垄断定价' },
    ],
    correctOptionId: 'B',
    explanation:
      '货币数量论：长期通胀的唯一原因是货币供给增长超过产出增长。弗里德曼"通胀始终是货币现象"。工会、石油价格、垄断可能影响相对价格或短期物价，但无法持续推高整体通胀。',
    hint: '货币数量论',
    knowledgePoints: ['通胀的成因'],
  },
  {
    id: 'E-CH3-Q3',
    type: 'chapter-quiz',
    refId: 'E-CH3',
    subjectId: 'economics',
    question: '长期菲利普斯曲线垂直于自然失业率，说明？',
    options: [
      { id: 'A', text: '长期可用扩张政策降低失业' },
      { id: 'B', text: '长期货币政策不影响失业率，只影响通胀' },
      { id: 'C', text: '长期通胀与失业正向相关' },
      { id: 'D', text: '自然失业率为零' },
    ],
    correctOptionId: 'B',
    explanation:
      '长期菲利普斯曲线垂直于自然失业率，意味着长期货币政策无法把失业率持续压到自然率以下，扩张政策只会换来更高通胀，而不会降低失业。这就是为什么现代央行强调"预期管理"与"信誉"。',
    hint: '长期无权衡',
    knowledgePoints: ['长期菲利普斯曲线'],
  },
  {
    id: 'E-CH3-Q4',
    type: 'chapter-quiz',
    refId: 'E-CH3',
    subjectId: 'economics',
    question: '供给冲击（如石油危机）会导致？',
    options: [
      { id: 'A', text: '通胀下降、失业下降' },
      { id: 'B', text: '通胀上升、失业上升（滞胀）' },
      { id: 'C', text: '通胀上升、失业下降' },
      { id: 'D', text: '通胀下降、失业上升' },
    ],
    correctOptionId: 'B',
    explanation:
      '负向供给冲击使企业成本上升，整条菲利普斯曲线上移——同一失业率对应更高通胀，或同一通胀率对应更高失业。这就是"滞胀"（高通胀 + 高失业并存）。1970 年代石油危机是典型例子，传统凯恩斯政策对此束手无策。',
    hint: '滞胀 = 滞 + 胀',
    knowledgePoints: ['供给冲击', '滞胀'],
  },
];
