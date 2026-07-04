import type { Quiz } from '@/types';

// S014 性别与社会 - 章节测验
export const S014_QUIZ: Quiz[] = [
  {
    id: 'soc_s014_q001',
    type: 'lesson-quiz',
    refId: 'S014',
    subjectId: 'sociology',

    question: '生理性别（sex）与社会性别（gender）的区别是什么？',
    options: [
      { id: 'a', text: '没有区别' },
      { id: 'b', text: '生理性别是生物学上的差异，社会性别是社会文化赋予的差异' },
      { id: 'c', text: '生理性别是社会构建的，社会性别是生物学的' },
      { id: 'd', text: '生理性别是文化差异，社会性别是生物学差异' }
    ],
    correctOptionId: 'b',
    explanation: '生理性别指生物学上的男女差异，社会性别指社会文化赋予男女的不同角色、行为和期望。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s014_q002',
    type: 'lesson-quiz',
    refId: 'S014',
    subjectId: 'sociology',

    question: '传统社会中性别角色分工的特点是什么？',
    options: [
      { id: 'a', text: '男女完全平等' },
      { id: 'b', text: '男性主要从事公共领域的生产活动，女性主要承担私人领域的再生产活动' },
      { id: 'c', text: '女性从事所有工作' },
      { id: 'd', text: '没有分工' }
    ],
    correctOptionId: 'b',
    explanation: '传统社会中，男性主要从事公共领域的生产活动，女性主要承担私人领域的再生产活动。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s014_q003',
    type: 'lesson-quiz',
    refId: 'S014',
    subjectId: 'sociology',

    question: '性别不平等可能体现在哪些方面？',
    options: [
      { id: 'a', text: '就业机会' },
      { id: 'b', text: '薪酬待遇' },
      { id: 'c', text: '权力分配' },
      { id: 'd', text: '以上都是' }
    ],
    correctOptionId: 'd',
    explanation: '性别不平等体现在就业机会、薪酬待遇、权力分配、教育资源等多个方面。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s014_q004',
    type: 'lesson-quiz',
    refId: 'S014',
    subjectId: 'sociology',

    question: '女性主义社会学批判传统社会学的男性中心视角。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '女性主义社会学确实批判传统社会学的男性中心视角，强调女性经验和视角的重要性。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s014_q005',
    type: 'lesson-quiz',
    refId: 'S014',
    subjectId: 'sociology',

    question: '现代社会中性别角色的变化趋势是什么？',
    options: [
      { id: 'a', text: '更加固化' },
      { id: 'b', text: '性别角色边界逐渐模糊' },
      { id: 'c', text: '只有一方改变' },
      { id: 'd', text: '完全一致' }
    ],
    correctOptionId: 'b',
    explanation: '现代社会中，性别角色边界逐渐模糊，女性参与公共领域活动增加，男性也更多承担家庭责任。',
  hint: '',
  knowledgePoints: []
  },
];

export default S014_QUIZ;