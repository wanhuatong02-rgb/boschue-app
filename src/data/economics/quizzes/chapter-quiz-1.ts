import type { Quiz } from '@/types';

// 基础篇章节测验（E-CH1，4 道样题）
export const CHAPTER_QUIZ_1: Quiz[] = [
  {
    id: 'E-CH1-Q1',
    type: 'chapter-quiz',
    refId: 'E-CH1',
    subjectId: 'economics',
    question: '某人为读研放弃年薪 12 万元的工作，学费 6 万元/年。两年读研的机会成本（不含生活费）是？',
    options: [
      { id: 'A', text: '12 万元' },
      { id: 'B', text: '24 万元' },
      { id: 'C', text: '36 万元' },
      { id: 'D', text: '12 + 6 = 18 万元' },
    ],
    correctOptionId: 'C',
    explanation:
      '机会成本 = 显性（学费 6×2=12）+ 隐性（放弃工资 12×2=24）= 36 万元。读研两年总成本不只是学费，更要算上放弃的工资收入。',
    hint: '机会成本 = 显性 + 隐性',
    knowledgePoints: ['机会成本'],
  },
  {
    id: 'E-CH1-Q2',
    type: 'chapter-quiz',
    refId: 'E-CH1',
    subjectId: 'economics',
    question: '糖价上涨对冰淇淋市场的影响是？',
    options: [
      { id: 'A', text: '需求曲线右移，价格上升，数量上升' },
      { id: 'B', text: '供给曲线左移，价格上升，数量下降' },
      { id: 'C', text: '供给曲线右移，价格下降，数量上升' },
      { id: 'D', text: '需求曲线左移，价格下降' },
    ],
    correctOptionId: 'B',
    explanation:
      '糖是冰淇淋的投入品，价格上涨推高生产成本，使供给曲线左移。新均衡点上价格上升、数量下降。这是"成本推动型涨价"的微观基础，也是供需分析三步法的典型应用。',
    hint: '糖是投入品 → 影响供给',
    knowledgePoints: ['供给变动', '市场均衡'],
  },
  {
    id: 'E-CH1-Q3',
    type: 'chapter-quiz',
    refId: 'E-CH1',
    subjectId: 'economics',
    question: '政府对香烟征税，税负主要由消费者承担，因为？',
    options: [
      { id: 'A', text: '消费者比烟草公司更穷' },
      { id: 'B', text: '香烟需求缺乏弹性，消费者难以逃离' },
      { id: 'C', text: '法律向消费者征税' },
      { id: 'D', text: '烟草公司利润太低' },
    ],
    correctOptionId: 'B',
    explanation:
      '税收归宿由弹性决定：弹性小的一方承担得多。香烟因成瘾性需求极度缺乏弹性，税负大部分通过涨价转嫁到消费者身上。立法指向与实际承担可以不同。',
    hint: '弹性小的一方承担多',
    knowledgePoints: ['税收归宿', '弹性'],
  },
  {
    id: 'E-CH1-Q4',
    type: 'chapter-quiz',
    refId: 'E-CH1',
    subjectId: 'economics',
    question: '关于市场均衡的福利分析，以下正确的是？',
    options: [
      { id: 'A', text: '征税不改变总剩余' },
      { id: 'B', text: '征税带来无谓损失，因为减少了互惠交易' },
      { id: 'C', text: '消费者剩余等于生产者剩余' },
      { id: 'D', text: '均衡产量等于无谓损失' },
    ],
    correctOptionId: 'B',
    explanation:
      '税收使价格扭曲，部分本可发生的交易（买者支付意愿 ≥ 卖者成本）不再发生，这部分剩余净损失就是无谓损失。无谓损失是市场效率的净损失，也是评估税收效率的关键指标。',
    hint: '无谓损失 = 没做成的生意',
    knowledgePoints: ['无谓损失', '市场效率'],
  },
];
