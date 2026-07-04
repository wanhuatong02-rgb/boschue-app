import type { Quiz } from '@/types';

export const CHAPTER_QUIZ_4: Quiz[] = [
  {
    id: 'SOC-CH4-Q1',
    type: 'chapter-quiz',
    refId: 'S-CH4',
    subjectId: 'sociology',
    question: '人口社会学关注的核心议题不包括：',
    options: [
      { id: 'a', text: '人口增长与老龄化' },
      { id: 'b', text: '人口迁移与城市化' },
      { id: 'c', text: '人口遗传与基因' },
      { id: 'd', text: '人口政策与社会发展' }
    ],
    correctOptionId: 'c',
    explanation: '人口社会学关注人口的社会属性，如增长、老龄化、迁移、政策等，人口遗传与基因属于生物学范畴。',
    hint: '人口社会学研究人口的社会特征',
    knowledgePoints: ['人口社会学', '人口问题']
  },
  {
    id: 'SOC-CH4-Q2',
    type: 'chapter-quiz',
    refId: 'S-CH4',
    subjectId: 'sociology',
    question: '环境社会学的核心观点是：',
    options: [
      { id: 'a', text: '环境问题纯粹是自然科学问题' },
      { id: 'b', text: '环境问题是社会建构的，与社会结构密切相关' },
      { id: 'c', text: '环境问题与人类活动无关' },
      { id: 'd', text: '环境问题只能通过技术手段解决' }
    ],
    correctOptionId: 'b',
    explanation: '环境社会学认为环境问题不仅是自然问题，更是社会问题，与社会结构、生产方式、消费模式等密切相关。',
    hint: '环境问题的社会建构性',
    knowledgePoints: ['环境社会学', '环境问题']
  },
  {
    id: 'SOC-CH4-Q3',
    type: 'chapter-quiz',
    refId: 'S-CH4',
    subjectId: 'sociology',
    question: '网络社会学研究的核心议题不包括：',
    options: [
      { id: 'a', text: '网络社交与人际关系' },
      { id: 'b', text: '网络舆情与社会影响' },
      { id: 'c', text: '网络硬件技术规格' },
      { id: 'd', text: '数字鸿沟与社会不平等' }
    ],
    correctOptionId: 'c',
    explanation: '网络社会学研究网络对社会的影响，如社交关系、舆情传播、数字鸿沟等，网络硬件技术规格属于计算机科学范畴。',
    hint: '网络社会学关注社会层面的影响',
    knowledgePoints: ['网络社会学', '数字社会']
  },
  {
    id: 'SOC-CH4-Q4',
    type: 'chapter-quiz',
    refId: 'S-CH4',
    subjectId: 'sociology',
    question: '医疗社会学认为，健康与疾病：',
    options: [
      { id: 'a', text: '完全是生理问题' },
      { id: 'b', text: '受社会文化因素影响' },
      { id: 'c', text: '与社会阶层无关' },
      { id: 'd', text: '只能通过医学手段解决' }
    ],
    correctOptionId: 'b',
    explanation: '医疗社会学认为健康与疾病不仅是生理问题，还受到社会阶层、文化观念、医疗制度等社会因素的影响。',
    hint: '健康的社会决定因素',
    knowledgePoints: ['医疗社会学', '健康社会学']
  },
  {
    id: 'SOC-CH4-Q5',
    type: 'chapter-quiz',
    refId: 'S-CH4',
    subjectId: 'sociology',
    question: '消费社会学关注的核心议题是：',
    options: [
      { id: 'a', text: '商品的生产成本' },
      { id: 'b', text: '消费行为的社会意义和符号价值' },
      { id: 'c', text: '商品的物理属性' },
      { id: 'd', text: '消费者的生理需求' }
    ],
    correctOptionId: 'b',
    explanation: '消费社会学关注消费行为的社会文化意义，如消费作为身份认同的表达、符号消费、消费主义等议题。',
    hint: '消费的符号意义',
    knowledgePoints: ['消费社会学', '符号消费']
  }
];

export default CHAPTER_QUIZ_4;
