import type { Lesson } from '@/types';
import { M_00 } from './M-00';
import { M_A00 } from './M-A00';
import { M_A01 } from './M-A01';
import { M_A02 } from './M-A02';
import { M_A03 } from './M-A03';
import { M_A04 } from './M-A04';
import { M_A05 } from './M-A05';
import { M_A06 } from './M-A06';
import { M_A07 } from './M-A07';
import { M_A08 } from './M-A08';
import { M_A09 } from './M-A09';
import { M_A10 } from './M-A10';
import { M_B00 } from './M-B00';
import { M_B01 } from './M-B01';
import { M_B02 } from './M-B02';
import { M_B03 } from './M-B03';
import { M_B04 } from './M-B04';
import { M_B05 } from './M-B05';
import { M_B06 } from './M-B06';
import { M_B07 } from './M-B07';
import { M_B08 } from './M-B08';
import { M_B09 } from './M-B09';
import { M_B10 } from './M-B10';
import { M_C00 } from './M-C00';
import { M_C01 } from './M-C01';
import { M_C02 } from './M-C02';
import { M_C03 } from './M-C03';
import { M_C04 } from './M-C04';
import { M_C05 } from './M-C05';
import { M_C06 } from './M-C06';
import { M_C07 } from './M-C07';
import { M_C08 } from './M-C08';
import { M_C09 } from './M-C09';
import { M_C10 } from './M-C10';
import { M_D00 } from './M-D00';
import { M_D01 } from './M-D01';
import { M_D02 } from './M-D02';
import { M_D03 } from './M-D03';
import { M_D04 } from './M-D04';
import { M_D05 } from './M-D05';
import { M_D06 } from './M-D06';
import { M_D07 } from './M-D07';
import { M_D08 } from './M-D08';
import { M_D09 } from './M-D09';
import { M_D10 } from './M-D10';
import { M_E00 } from './M-E00';
import { M_E01 } from './M-E01';
import { M_E02 } from './M-E02';
import { M_E03 } from './M-E03';
import { M_E04 } from './M-E04';
import { M_E05 } from './M-E05';
import { M_E06 } from './M-E06';
import { M_E07 } from './M-E07';
import { M_E08 } from './M-E08';
import { M_E09 } from './M-E09';
import { M_E10 } from './M-E10';

// 管理学全部 55 节课程
// 学习导论 1 节: M-00（管理学学习导论）
// M-CH1 管理基础 11 节: M-A00(导引), M-A01~M-A10
// M-CH2 计划职能 11 节: M-B00(导引), M-B01~M-B10
// M-CH3 组织职能 11 节: M-C00(导引), M-C01~M-C10
// M-CH4 领导职能 11 节: M-D00(导引), M-D01~M-D10
// M-CH5 控制职能 11 节: M-E00(导引), M-E01~M-E10
export const MANAGEMENT_LESSONS: Lesson[] = [
  // 学习导论
  M_00,
  // M-CH1 管理基础 11 节
  M_A00, // 导引
  M_A01, M_A02, M_A03, M_A04, M_A05, M_A06, M_A07, M_A08, M_A09, M_A10,
  // M-CH2 计划职能 11 节
  M_B00, // 导引
  M_B01, M_B02, M_B03, M_B04, M_B05, M_B06, M_B07, M_B08, M_B09, M_B10,
  // M-CH3 组织职能 11 节
  M_C00, // 导引
  M_C01, M_C02, M_C03, M_C04, M_C05, M_C06, M_C07, M_C08, M_C09, M_C10,
  // M-CH4 领导职能 11 节
  M_D00, // 导引
  M_D01, M_D02, M_D03, M_D04, M_D05, M_D06, M_D07, M_D08, M_D09, M_D10,
  // M-CH5 控制职能 11 节
  M_E00, // 导引
  M_E01, M_E02, M_E03, M_E04, M_E05, M_E06, M_E07, M_E08, M_E09, M_E10,
];

export function getLessonById(lessonId: string): Lesson | undefined {
  return MANAGEMENT_LESSONS.find(lesson => lesson.id === lessonId);
}
