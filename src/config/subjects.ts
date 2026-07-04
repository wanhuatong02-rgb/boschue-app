import type { SubjectId, SubjectStatus } from '@/types';

export interface SubjectConfig {
  id: SubjectId;
  name: string;
  code: string;
  color: string;
  colorLight: string;
  textbook: string;
  status: SubjectStatus;
}

// 五学科配置（economics 与 psychology active，其余 coming-soon）
export const SUBJECTS: SubjectConfig[] = [
  {
    id: 'economics',
    name: '经济学',
    code: 'E',
    color: '#7BB661',
    colorLight: '#E8F5E8',
    textbook: '曼昆《经济学原理》（第9版）',
    status: 'active',
  },
  {
    id: 'sociology',
    name: '社会学',
    code: 'S',
    color: '#7AAEC0',
    colorLight: '#E8F5F9',
    textbook: '郑杭生《社会学概论新修》（第五版）',
    status: 'active',
  },
  {
    id: 'logic',
    name: '逻辑学',
    code: 'L',
    color: '#D4A574',
    colorLight: '#F5EFE5',
    textbook: '陈波《逻辑学导论》（第4/5版）',
    status: 'active',
  },
  {
    id: 'psychology',
    name: '心理学',
    code: 'P',
    color: '#D08068',
    colorLight: '#F5E8E5',
    textbook: '彭聃龄《普通心理学》（第5版）',
    status: 'active',
  },
  {
    id: 'management',
    name: '管理学',
    code: 'M',
    color: '#9B7BB8',
    colorLight: '#EFE8F5',
    textbook: '周三多《管理学：原理与方法》',
    status: 'active',
  },
];

export function getSubjectConfig(subjectId: SubjectId): SubjectConfig | undefined {
  return SUBJECTS.find((s) => s.id === subjectId);
}
