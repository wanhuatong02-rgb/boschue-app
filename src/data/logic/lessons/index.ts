import type { Lesson } from '@/types';
import { L_A01 } from './L-A01';
import { L_A02 } from './L-A02';
import { L_A03 } from './L-A03';
import { L_A04 } from './L-A04';
import { L_A05 } from './L-A05';
import { L_A06 } from './L-A06';
import { L_A07 } from './L-A07';
import { L_A08 } from './L-A08';
import { L_A09 } from './L-A09';
import { L_A10 } from './L-A10';
import { L_B01 } from './L-B01';
import { L_B02 } from './L-B02';
import { L_B03 } from './L-B03';
import { L_B04 } from './L-B04';
import { L_B05 } from './L-B05';
import { L_B06 } from './L-B06';
import { L_B07 } from './L-B07';
import { L_B08 } from './L-B08';
import { L_B09 } from './L-B09';
import { L_B10 } from './L-B10';
import { L_C01 } from './L-C01';
import { L_C02 } from './L-C02';
import { L_C03 } from './L-C03';
import { L_C04 } from './L-C04';
import { L_C05 } from './L-C05';
import { L_C06 } from './L-C06';
import { L_C07 } from './L-C07';
import { L_C08 } from './L-C08';
import { L_C09 } from './L-C09';
import { L_C10 } from './L-C10';
import { L_D01 } from './L-D01';
import { L_D02 } from './L-D02';
import { L_D03 } from './L-D03';
import { L_D04 } from './L-D04';
import { L_D05 } from './L-D05';
import { L_D06 } from './L-D06';
import { L_D07 } from './L-D07';
import { L_D08 } from './L-D08';
import { L_D09 } from './L-D09';
import { L_D10 } from './L-D10';
import { L_E01 } from './L-E01';
import { L_E02 } from './L-E02';
import { L_E03 } from './L-E03';
import { L_E04 } from './L-E04';
import { L_E05 } from './L-E05';
import { L_E06 } from './L-E06';
import { L_E07 } from './L-E07';
import { L_E08 } from './L-E08';
import { L_E09 } from './L-E09';
import { L_E10 } from './L-E10';

export const LOGIC_LESSONS: Lesson[] = [
  L_A01, L_A02, L_A03, L_A04, L_A05, L_A06, L_A07, L_A08, L_A09, L_A10,
  L_B01, L_B02, L_B03, L_B04, L_B05, L_B06, L_B07, L_B08, L_B09, L_B10,
  L_C01, L_C02, L_C03, L_C04, L_C05, L_C06, L_C07, L_C08, L_C09, L_C10,
  L_D01, L_D02, L_D03, L_D04, L_D05, L_D06, L_D07, L_D08, L_D09, L_D10,
  L_E01, L_E02, L_E03, L_E04, L_E05, L_E06, L_E07, L_E08, L_E09, L_E10,
];

export function getLessonById(lessonId: string): Lesson | undefined {
  return LOGIC_LESSONS.find(lesson => lesson.id === lessonId);
}