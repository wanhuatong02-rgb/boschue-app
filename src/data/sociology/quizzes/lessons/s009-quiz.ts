import type { Quiz } from '@/types';

// S009 社会群体 - 章节测验
export const S009_QUIZ: Quiz[] = [
  {
    id: 'soc_s009_q001',
    type: 'lesson-quiz',
    refId: 'S-A09',
    subjectId: 'sociology',

    question: '社会群体的核心特征是什么？',
    options: [
      { id: 'a', text: '成员数量' },
      { id: 'b', text: '成员间有稳定的社会关系和共同的认同感' },
      { id: 'c', text: '相同的兴趣' },
      { id: 'd', text: '地理位置相近' }
    ],
    correctOptionId: 'b',
    explanation: '社会群体的核心特征是成员间有稳定的社会关系和共同的认同感。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s009_q002',
    type: 'lesson-quiz',
    refId: 'S-A09',
    subjectId: 'sociology',

    question: '初级群体和次级群体的主要区别是什么？',
    options: [
      { id: 'a', text: '成员数量的多少' },
      { id: 'b', text: '成员关系的亲密程度和互动频率' },
      { id: 'c', text: '群体存续时间' },
      { id: 'd', text: '群体功能' }
    ],
    correctOptionId: 'b',
    explanation: '初级群体成员关系亲密、互动频繁，次级群体关系相对疏远、互动局限于特定领域。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s009_q003',
    type: 'lesson-quiz',
    refId: 'S-A09',
    subjectId: 'sociology',

    question: '参照群体的作用是什么？',
    options: [
      { id: 'a', text: '提供娱乐' },
      { id: 'b', text: '个体在评价自身和他人时所使用的标准群体' },
      { id: 'c', text: '提供经济支持' },
      { id: 'd', text: '提供食物' }
    ],
    correctOptionId: 'b',
    explanation: '参照群体是个体在评价自身和他人时所使用的标准群体，提供行为标准、价值取向和比较基准。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s009_q004',
    type: 'lesson-quiz',
    refId: 'S-A09',
    subjectId: 'sociology',

    question: '群体思维是指为维护群体和谐而牺牲理性判断的现象。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '群体思维确实是指为维护群体和谐而牺牲理性判断的现象。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s009_q005',
    type: 'lesson-quiz',
    refId: 'S-A09',
    subjectId: 'sociology',

    question: '在群体动力学中，凝聚力指的是什么？',
    options: [
      { id: 'a', text: '群体的物理结构' },
      { id: 'b', text: '成员对群体的认同和归属感' },
      { id: 'c', text: '群体的规模' },
      { id: 'd', text: '群体的领导力' }
    ],
    correctOptionId: 'b',
    explanation: '凝聚力是群体成员对群体的认同和归属感，影响群体的稳定性和效能。',
  hint: '',
  knowledgePoints: []
  },
];

export default S009_QUIZ;