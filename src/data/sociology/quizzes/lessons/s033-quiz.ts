import type { Quiz } from '@/types';

// S033 大众传播与媒体 - 章节测验
export const S033_QUIZ: Quiz[] = [
  {
    id: 'soc_s033_q001',
    type: 'lesson-quiz',
    refId: 'S033',
    subjectId: 'sociology',

    question: '媒体的社会功能不包括以下哪项？',
    options: [
      { id: 'a', text: '信息传递功能' },
      { id: 'b', text: '社会监督功能' },
      { id: 'c', text: '社会整合功能' },
      { id: 'd', text: '物理建造功能' }
    ],
    correctOptionId: 'd',
    explanation: '媒体的社会功能包括信息传递、社会监督、社会整合、教育娱乐、经济等功能，不包括物理建造功能。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s033_q002',
    type: 'lesson-quiz',
    refId: 'S033',
    subjectId: 'sociology',

    question: '议程设置理论的核心观点是什么？',
    options: [
      { id: 'a', text: '媒体告诉人们怎么想' },
      { id: 'b', text: '媒体告诉人们想什么' },
      { id: 'c', text: '媒体不影响人们' },
      { id: 'd', text: '媒体只传播娱乐' }
    ],
    correctOptionId: 'b',
    explanation: '议程设置理论认为媒体不能告诉人们"怎么想"，但能告诉人们"想什么"。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s033_q003',
    type: 'lesson-quiz',
    refId: 'S033',
    subjectId: 'sociology',

    question: '沉默螺旋理论描述的是什么现象？',
    options: [
      { id: 'a', text: '所有人都大声说话' },
      { id: 'b', text: '人们感知社会主流意见并可能在感觉属于少数时保持沉默' },
      { id: 'c', text: '媒体永远沉默' },
      { id: 'd', text: '没有意见分歧' }
    ],
    correctOptionId: 'b',
    explanation: '沉默螺旋理论认为人们会感知社会主流意见，并在感觉自己处于少数时保持沉默。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s033_q004',
    type: 'lesson-quiz',
    refId: 'S033',
    subjectId: 'sociology',

    question: '媒体在民主社会中扮演"第四权力"的角色，发挥制衡作用。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '媒体在民主社会中确实扮演"第四权力"的角色，对政府和企业进行监督，发挥制衡作用。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s033_q005',
    type: 'lesson-quiz',
    refId: 'S033',
    subjectId: 'sociology',

    question: '数字媒体时代对议程设置理论产生了什么影响？',
    options: [
      { id: 'a', text: '完全无效' },
      { id: 'b', text: '公众也可以设置议程' },
      { id: 'c', text: '没有变化' },
      { id: 'd', text: '议程设置消失' }
    ],
    correctOptionId: 'b',
    explanation: '数字媒体时代，公众也可以设置议程，改变了传统的议程设置模式。',
  hint: '',
  knowledgePoints: []
  },
];

export default S033_QUIZ;