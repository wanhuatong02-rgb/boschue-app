import type { Quiz } from '@/types';

// 进阶篇章节测验（E-CH2，4 道样题）
export const CHAPTER_QUIZ_2: Quiz[] = [
  {
    id: 'E-CH2-Q1',
    type: 'chapter-quiz',
    refId: 'E-CH2',
    subjectId: 'economics',
    question: '工厂排污影响周边居民属于？应如何纠正？',
    options: [
      { id: 'A', text: '正外部性，应补贴' },
      { id: 'B', text: '负外部性，可通过庇古税纠正' },
      { id: 'C', text: '公共物品，应由政府提供' },
      { id: 'D', text: '内部成本，无需干预' },
    ],
    correctOptionId: 'B',
    explanation:
      '污染是负外部性——私人成本低于社会成本，市场均衡产量过高。庇古税让企业承担外部成本，使私人成本等于社会成本，达到有效率产量。也可通过排污权交易或直接管制实现。',
    hint: '负外部性 → 让外部成本内部化',
    knowledgePoints: ['负外部性', '庇古税'],
  },
  {
    id: 'E-CH2-Q2',
    type: 'chapter-quiz',
    refId: 'E-CH2',
    subjectId: 'economics',
    question: '完全竞争企业短期停产的条件是？',
    options: [
      { id: 'A', text: 'P < ATC' },
      { id: 'B', text: 'P < AVC' },
      { id: 'C', text: 'P < AFC' },
      { id: 'D', text: 'P < MC' },
    ],
    correctOptionId: 'B',
    explanation:
      '若 P < AVC，企业连可变成本都收不回，每生产一单位都在亏可变成本 + 固定成本，停产只亏固定成本，所以停产更优。若 AVC ≤ P < ATC，企业亏损但继续生产以分摊固定成本。',
    hint: '停产点 = P 跌破 AVC',
    knowledgePoints: ['停产决策'],
  },
  {
    id: 'E-CH2-Q3',
    type: 'chapter-quiz',
    refId: 'E-CH2',
    subjectId: 'economics',
    question: '卡特尔天然不稳定的原因是？',
    options: [
      { id: 'A', text: '法律禁止' },
      { id: 'B', text: '每个成员都有偷偷增产的激励（囚徒困境）' },
      { id: 'C', text: '成本过高' },
      { id: 'D', text: '需求不足' },
    ],
    correctOptionId: 'B',
    explanation:
      '卡特尔通过集体限产抬高价格。但每个成员都有"偷偷增产"的激励——按卡特尔高价出售额外产量可获厚利。这种囚徒困境使卡特尔天然不稳定，需要强力监督与惩罚机制维持。OPEC 是典型案例。',
    hint: '囚徒困境',
    knowledgePoints: ['卡特尔', '囚徒困境'],
  },
  {
    id: 'E-CH2-Q4',
    type: 'chapter-quiz',
    refId: 'E-CH2',
    subjectId: 'economics',
    question: '完全价格歧视下的结果是？',
    options: [
      { id: 'A', text: '存在无谓损失' },
      { id: 'B', text: '无谓损失为零，所有剩余归垄断者' },
      { id: 'C', text: '消费者剩余最大化' },
      { id: 'D', text: '产量低于单一价格垄断' },
    ],
    correctOptionId: 'B',
    explanation:
      '完全价格歧视下，垄断者对每个消费者按其最高支付意愿定价，所有支付意愿 ≥ 边际成本的交易都会发生，产量达到竞争水平，无谓损失为零。但所有剩余都被垄断者拿走，消费者剩余为零——有效率但极不公平。',
    hint: '完全歧视 = 无效率损失，分配极不公',
    knowledgePoints: ['价格歧视'],
  },
];
