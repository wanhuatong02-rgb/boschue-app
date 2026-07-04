import type { Lesson } from '@/types';
import { P_00 } from './P-00';
import { P_A00 } from './P-A00';
import { P_B01 } from './P-B01';
import { P_B05 } from './P-B05';
import { P_B06 } from './P-B06';
import { P_P00 } from './P-P00';
import { P_Y00 } from './P-Y00';
import {
  P_B02,
  P_B03,
  P_B04,
  P_B07,
  P_B08,
  P_B09,
  P_B10,
  P_B11,
  P_B12,
  P_B13,
  P_B14,
  P_B15,
  P_B16,
  P_B17,
  P_B18,
  P_B19,
  P_B20,
  P_B21,
  P_B22,
} from './others';
import {
  P_B23,
  P_B24,
  P_B25,
  P_B26,
  P_B27,
  P_B28,
  P_B29,
  P_B30,
  P_B31,
  P_B32,
  P_B33,
  P_B34,
  P_B35,
  P_B36,
  P_B37,
} from './new-chapters';

// 心理学全部 41 节课程（4 节导引 + 7+8+7=22 节旧课程 + 5×3=15 节新课程）
export const PSYCHOLOGY_LESSONS: Lesson[] = [
  // 导引 4 节
  P_00,   // 心理学学习导论
  P_A00,  // P-CH1 导引 - 基础篇
  P_P00,  // P-CH2 导引 - 进阶篇
  P_Y00,  // P-CH3 导引 - 应用篇
  // 基础篇 7 节
  P_B01,
  P_B02,
  P_B03,
  P_B04,
  P_B05,
  P_B06,
  P_B07,
  // 进阶篇 8 节
  P_B08,
  P_B09,
  P_B10,
  P_B11,
  P_B12,
  P_B13,
  P_B14,
  P_B15,
  // 应用篇 7 节
  P_B16,
  P_B17,
  P_B18,
  P_B19,
  P_B20,
  P_B21,
  P_B22,
  // P-CH4 语言与思维 3 节
  P_B23,
  P_B24,
  P_B25,
  // P-CH5 智力与创造力 3 节
  P_B26,
  P_B27,
  P_B28,
  // P-CH6 社会心理 3 节
  P_B29,
  P_B30,
  P_B31,
  // P-CH7 发展心理学 3 节
  P_B32,
  P_B33,
  P_B34,
  // P-CH8 健康与变态心理学 3 节
  P_B35,
  P_B36,
  P_B37,
];

export function getLessonById(lessonId: string): Lesson | undefined {
  return PSYCHOLOGY_LESSONS.find((l) => l.id === lessonId);
}
