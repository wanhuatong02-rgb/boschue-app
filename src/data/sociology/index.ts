import type { Quiz } from '@/types';
import { SOCIOLOGY_SUBJECT } from './subject';

// 重导出课程数据
export { SOCIOLOGY_LESSONS, getLessonById } from './lessons';

// 导出学科定义
export { SOCIOLOGY_SUBJECT } from './subject';

// 获取所有社会学测验
export { SOCIOLOGY_ALL_QUIZZES, getSociologyQuizById } from './quizzes';
