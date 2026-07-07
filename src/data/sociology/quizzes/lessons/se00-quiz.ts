import type { Quiz } from '@/types';

// S-E00 研究前沿导引 - 章节测验
export const SE00_QUIZ: Quiz[] = [
  {
    id: 'soc_intro_e00_q001',
    type: 'lesson-quiz',
    refId: 'S-E00',
    subjectId: 'sociology',
    question: '当代社会学前沿最可能关注的话题是？',
    options: [
      { id: 'a', text: '数字社会与人工智能对社会结构的影响' },
      { id: 'b', text: '18世纪欧洲宫廷政治' },
      { id: 'c', text: '纯理论思辨的哲学命题' },
      { id: 'd', text: '天体物理与社会结构的关系' },
    ],
    correctOptionId: 'a',
    explanation: '正确答案是「数字社会与人工智能对社会结构的影响」。本题考察「研究前沿导引」的基础认知，其他选项为相近概念的混淆项。 前沿研究回应时代新现象',
    hint: '',
    knowledgePoints: ['研究前沿导引']
  },
  {
    id: 'soc_intro_e00_q002',
    type: 'lesson-quiz',
    refId: 'S-E00',
    subjectId: 'sociology',
    question: '以下关于「研究前沿导引」的描述，正确的是？',
    options: [
      { id: 'a', text: '数字社会与人工智能对社会结构的影响' },
      { id: 'b', text: '错误：世纪欧洲宫廷政治' },
      { id: 'c', text: '错误：论思辨的哲学命题' },
      { id: 'd', text: '错误：物理与社会结构的关系' },
    ],
    correctOptionId: 'a',
    explanation: '正确选项是「数字社会与人工智能对社会结构的影响」。前沿研究回应时代新现象',
    hint: '',
    knowledgePoints: ['研究前沿导引概念']
  },
  {
    id: 'soc_intro_e00_q003',
    type: 'lesson-quiz',
    refId: 'S-E00',
    subjectId: 'sociology',
    question: '下列选项中，与「研究前沿导引」最相关的是？',
    options: [
      { id: 'a', text: '以上都是' },
      { id: 'b', text: '以上都不是' },
      { id: 'c', text: '数字社会与人工智能对社会结构的影响' },
      { id: 'd', text: '18世纪欧洲宫廷政治' },
    ],
    correctOptionId: 'c',
    explanation: '「数字社会与人工智能对社会结构的影响」与研究前沿导引直接相关。',
    hint: '',
    knowledgePoints: ['研究前沿导引应用']
  }
];
