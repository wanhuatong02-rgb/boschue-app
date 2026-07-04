import type { Lesson } from '@/types';
import { E_B00 } from './E-B00';
import { E_B01 } from './E-B01';
import { E_B04 } from './E-B04';
import { E_B05 } from './E-B05';
import { E_A00 } from './E-A00';
import { E_P00 } from './E-P00';
import {
  E_B02,
  E_B03,
  E_B06,
  E_B07,
  E_A01,
  E_A02,
  E_A03,
  E_A04,
  E_A05,
  E_A06,
  E_A07,
  E_A08,
  E_P01,
  E_P02,
  E_P03,
  E_P04,
  E_P05,
  E_P06,
  E_P07,
} from './others';
import {
  E_B22,
  E_B23,
  E_B24,
  E_B25,
  E_B26,
  E_B27,
  E_B28,
  E_B29,
  E_B30,
  E_B31,
  E_B32,
  E_B33,
  E_B34,
  E_B35,
  E_B36,
} from './new-chapters';

// 经济学全部 40 节课程（课程重复已做交叉引用整合）
// 基础篇 8 节: E-B00(导论), E-B01~E-B07
// 进阶篇 9 节: E-A00(导引), E-A01~E-A08
// 应用篇 8 节: E-P00(导引), E-P01~E-P07
// E-CH4~E-CH8 各 3 节: E-B22~E-B36
// 注: E-A01/E-A02/E-A07 与 E-B28/E-B29/E-B25 内容部分重叠，已通过交叉引用整合
export const ECONOMICS_LESSONS: Lesson[] = [
  // 基础篇 8 节
  E_B00, // 学习导论
  E_B01,
  E_B02,
  E_B03,
  E_B04,
  E_B05,
  E_B06,
  E_B07,
  // 进阶篇 9 节
  E_A00, // 进阶篇导引
  E_A01,
  E_A02,
  E_A03,
  E_A04,
  E_A05,
  E_A06,
  E_A07,
  E_A08,
  // 应用篇 8 节
  E_P00, // 应用篇导引
  E_P01,
  E_P02,
  E_P03,
  E_P04,
  E_P05,
  E_P06,
  E_P07,
  // E-CH4 市场结构与竞争 3 节
  E_B22,
  E_B23,
  E_B24,
  // E-CH5 劳动市场与收入分配 3 节
  E_B25,
  E_B26,
  E_B27,
  // E-CH6 公共部门经济学 3 节
  E_B28,
  E_B29,
  E_B30,
  // E-CH7 宏观经济学核心 3 节
  E_B31,
  E_B32,
  E_B33,
  // E-CH8 开放经济与全球化 3 节
  E_B34,
  E_B35,
  E_B36,
];

export function getLessonById(lessonId: string): Lesson | undefined {
  return ECONOMICS_LESSONS.find((l) => l.id === lessonId);
}
