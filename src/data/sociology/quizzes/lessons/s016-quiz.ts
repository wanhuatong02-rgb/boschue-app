import type { Quiz } from '@/types';

// S016 社会组织类型 - 章节测验
export const S016_QUIZ: Quiz[] = [
  {
    id: 'soc_s016_q001',
    type: 'lesson-quiz',
    refId: 'S016',
    subjectId: 'sociology',

    question: '正式组织的主要特征是什么？',
    options: [
      { id: 'a', text: '无明确目标' },
      { id: 'b', text: '明确的目标、固定的结构、成文的规章制度' },
      { id: 'c', text: '临时形成' },
      { id: 'd', text: '情感导向' }
    ],
    correctOptionId: 'b',
    explanation: '正式组织具有明确的目标、固定的结构、成文的规章制度，如公司、学校、政府部门。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s016_q002',
    type: 'lesson-quiz',
    refId: 'S016',
    subjectId: 'sociology',

    question: '非正式组织是如何形成的？',
    options: [
      { id: 'a', text: '官方指定' },
      { id: 'b', text: '在人际互动中自然形成' },
      { id: 'c', text: '政府设立' },
      { id: 'd', text: '法律规定' }
    ],
    correctOptionId: 'b',
    explanation: '非正式组织是在人际互动中自然形成的群体，如朋友圈、兴趣小组。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s016_q003',
    type: 'lesson-quiz',
    refId: 'S016',
    subjectId: 'sociology',

    question: '韦伯的科层制理论强调哪些特征？',
    options: [
      { id: 'a', text: '随意性管理' },
      { id: 'b', text: '明确的等级制、专业分工、书面规则、非人格化管理、职业生涯制' },
      { id: 'c', text: '非正式关系' },
      { id: 'd', text: '情感导向' }
    ],
    correctOptionId: 'b',
    explanation: '韦伯认为科层制具有明确的等级制、专业分工、书面规则、非人格化管理、职业生涯制等特征。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s016_q004',
    type: 'lesson-quiz',
    refId: 'S016',
    subjectId: 'sociology',

    question: '机械团结存在于现代社会，基于功能分化和相互依赖。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '机械团结存在于传统社会，基于相似性，法律以报复性为主；有机团结存在于现代社会，基于功能分化和相互依赖。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s016_q005',
    type: 'lesson-quiz',
    refId: 'S016',
    subjectId: 'sociology',

    question: '组织文化的作用是什么？',
    options: [
      { id: 'a', text: '没有作用' },
      { id: 'b', text: '仅用于娱乐' },
      { id: 'c', text: '影响组织氛围和绩效，增强凝聚力和认同感' },
      { id: 'd', text: '阻碍发展' }
    ],
    correctOptionId: 'c',
    explanation: '组织文化影响组织氛围和绩效，有助于增强凝聚力和认同感，但也可能阻碍创新。',
  hint: '',
  knowledgePoints: []
  },
];

export default S016_QUIZ;