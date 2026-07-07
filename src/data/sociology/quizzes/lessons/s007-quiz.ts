import type { Quiz } from '@/types';

// S007 社会化过程 - 章节测验
export const S007_QUIZ: Quiz[] = [
  {
    id: 'soc_s007_q001',
    type: 'lesson-quiz',
    refId: 'S-A07',
    subjectId: 'sociology',

    question: '社会化的本质是什么？',
    options: [
      { id: 'a', text: '个体学习知识的过程' },
      { id: 'b', text: '个体从生物人转变为社会人的过程' },
      { id: 'c', text: '个体获得职业技能的过程' },
      { id: 'd', text: '个体获得学历的过程' }
    ],
    correctOptionId: 'b',
    explanation: '社会化是个体从生物人转变为社会人的过程，通过学习社会规范、价值和角色，获得社会成员资格。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s007_q002',
    type: 'lesson-quiz',
    refId: 'S-A07',
    subjectId: 'sociology',

    question: '在社会化过程中，最重要的初始机构是什么？',
    options: [
      { id: 'a', text: '学校' },
      { id: 'b', text: '同辈群体' },
      { id: 'c', text: '家庭' },
      { id: 'd', text: '大众媒体' }
    ],
    correctOptionId: 'c',
    explanation: '家庭是最初和最重要的社会化机构，提供情感基础和基本价值观。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s007_q003',
    type: 'lesson-quiz',
    refId: 'S-A07',
    subjectId: 'sociology',

    question: '再社会化是指什么过程？',
    options: [
      { id: 'a', text: '重复学习同一内容' },
      { id: 'b', text: '个体放弃原有角色，学习全新角色的过程' },
      { id: 'c', text: '复习旧知识' },
      { id: 'd', text: '学习第二门语言' }
    ],
    correctOptionId: 'b',
    explanation: '再社会化是个体放弃原有角色，学习全新角色的过程，通常发生在剧烈社会变迁时。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s007_q004',
    type: 'lesson-quiz',
    refId: 'S-A07',
    subjectId: 'sociology',

    question: '性别角色社会化是个体学习性别相关行为模式的过程。',
    options: [
      { id: 'a', text: '正确' },
      { id: 'b', text: '错误' }
    ],
    correctOptionId: 'b',
    explanation: '性别角色社会化确实是帮助个体学习与其性别相关的社会期望和行为模式的过程。',
  hint: '',
  knowledgePoints: []
  },
  {
    id: 'soc_s007_q005',
    type: 'lesson-quiz',
    refId: 'S-A07',
    subjectId: 'sociology',

    question: '预期社会化指的是什么？',
    options: [
      { id: 'a', text: '对社会的抱怨' },
      { id: 'b', text: '个体为未来角色做准备的学习过程' },
      { id: 'c', text: '对社会变迁的预测' },
      { id: 'd', text: '社会对个体的期望' }
    ],
    correctOptionId: 'b',
    explanation: '预期社会化是个体为未来角色做准备的学习过程，如职业训练、婚前准备等。',
  hint: '',
  knowledgePoints: []
  },
];

export default S007_QUIZ;