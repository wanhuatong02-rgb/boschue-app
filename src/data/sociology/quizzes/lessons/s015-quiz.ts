import type { Quiz } from '@/types';

// S015 年龄与生命周期 - 章节测验
export const S015_QUIZ: Quiz[] = [
  {
    id: 'soc_s015_q001',
    type: 'lesson-quiz',
    refId: 'S-B05',
    subjectId: 'sociology',

    question: '年龄等级制度在传统社会中的特点是什么？',
    options: [
      { id: 'a', text: '年幼者地位更高' },
      { id: 'b', text: '年长者通常享有更高的地位和权威' },
      { id: 'c', text: '年龄无关地位' },
      { id: 'd', text: '只有特定年龄有权威' }
    ],
    correctOptionId: 'b',
    explanation: '在传统社会中，年长者通常享有更高的地位和权威。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s015_q002',
    type: 'lesson-quiz',
    refId: 'S-B05',
    subjectId: 'sociology',

    question: '童年社会学关注的核心是什么？',
    options: [
      { id: 'a', text: '成人世界' },
      { id: 'b', text: '儿童的社会地位、权利和经历' },
      { id: 'c', text: '老人问题' },
      { id: 'd', text: '青年问题' }
    ],
    correctOptionId: 'b',
    explanation: '童年社会学关注儿童的社会地位、权利和经历，以及儿童与成人的关系。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s015_q003',
    type: 'lesson-quiz',
    refId: 'S-B05',
    subjectId: 'sociology',

    question: '青少年期的特点是什么？',
    options: [
      { id: 'a', text: '完全没有变化' },
      { id: 'b', text: '介于儿童和成人之间的过渡阶段，伴随生理、心理和社会角色的重大变化' },
      { id: 'c', text: '直接变成成人' },
      { id: 'd', text: '只发生生理变化' }
    ],
    correctOptionId: 'b',
    explanation: '青少年期是介于儿童和成人之间的过渡阶段，伴随着生理、心理和社会角色的重大变化。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s015_q004',
    type: 'lesson-quiz',
    refId: 'S-B05',
    subjectId: 'sociology',

    question: '人口老龄化是现代社会的重要趋势，对社会结构、经济体系和文化价值观产生深远影响。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '人口老龄化确实是现代社会的重要趋势，对社会各个方面都产生深远影响。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s015_q005',
    type: 'lesson-quiz',
    refId: 'S-B05',
    subjectId: 'sociology',

    question: '老年社会学研究的主要内容不包括哪项？',
    options: [
      { id: 'a', text: '老年人的社会角色' },
      { id: 'b', text: '老年人的生活状况' },
      { id: 'c', text: '老年人的社会地位' },
      { id: 'd', text: '青少年的教育问题' }
    ],
    correctOptionId: 'd',
    explanation: '老年社会学研究老年人的社会角色、生活状况、社会地位等，不包括青少年教育问题。',
  hint: '',
  knowledgePoints: []
  },
];

export default S015_QUIZ;