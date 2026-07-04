import type { Lesson } from '@/types';
import { S00 } from './S-00';
import { SA00 } from './S-A00';
import { SA01 } from './S-A01';
import { SA02 } from './S-A02';
import { SA03 } from './S-A03';
import { SA04 } from './S-A04';
import { SA05 } from './S-A05';
import { SA06 } from './S-A06';
import { SA07 } from './S-A07';
import { SA08 } from './S-A08';
import { SA09 } from './S-A09';
import { SA10 } from './S-A10';
import { SB00 } from './S-B00';
import { SB01 } from './S-B01';
import { SB02 } from './S-B02';
import { SB03 } from './S-B03';
import { SB04 } from './S-B04';
import { SB05 } from './S-B05';
import { SB06 } from './S-B06';
import { SB07 } from './S-B07';
import { SB08 } from './S-B08';
import { SB09 } from './S-B09';
import { SB10 } from './S-B10';
import { SC00 } from './S-C00';
import { SC01 } from './S-C01';
import { SC02 } from './S-C02';
import { SC03 } from './S-C03';
import { SC04 } from './S-C04';
import { SC05 } from './S-C05';
import { SC06 } from './S-C06';
import { SC07 } from './S-C07';
import { SC08 } from './S-C08';
import { SC09 } from './S-C09';
import { SC10 } from './S-C10';
import { SD00 } from './S-D00';
import { SD01 } from './S-D01';
import { SD02 } from './S-D02';
import { SD03 } from './S-D03';
import { SD04 } from './S-D04';
import { SD05 } from './S-D05';
import { SD06 } from './S-D06';
import { SD07 } from './S-D07';
import { SD08 } from './S-D08';
import { SD09 } from './S-D09';
import { SD10 } from './S-D10';
import { SE00 } from './S-E00';
import { SE01 } from './S-E01';
import { SE02 } from './S-E02';
import { SE03 } from './S-E03';
import { SE04 } from './S-E04';
import { SE05 } from './S-E05';
import { SE06 } from './S-E06';
import { SE07 } from './S-E07';
import { SE08 } from './S-E08';
import { SE09 } from './S-E09';
import { SE10 } from './S-E10';

export const SOCIOLOGY_LESSONS: Lesson[] = [
  S00,
  SA00, SA01, SA02, SA03, SA04, SA05, SA06, SA07, SA08, SA09, SA10,
  SB00, SB01, SB02, SB03, SB04, SB05, SB06, SB07, SB08, SB09, SB10,
  SC00, SC01, SC02, SC03, SC04, SC05, SC06, SC07, SC08, SC09, SC10,
  SD00, SD01, SD02, SD03, SD04, SD05, SD06, SD07, SD08, SD09, SD10,
  SE00, SE01, SE02, SE03, SE04, SE05, SE06, SE07, SE08, SE09, SE10,
];

export function getLessonById(lessonId: string): Lesson | undefined {
  return SOCIOLOGY_LESSONS.find(lesson => lesson.id === lessonId);
}
