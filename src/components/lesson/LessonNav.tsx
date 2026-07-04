import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Lesson } from '@/types';

interface LessonNavProps {
  prev?: Lesson;
  next?: Lesson;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function LessonNav({ prev, next, onPrev, onNext }: LessonNavProps) {
  return (
    <div className="grid grid-cols-2 gap-2.5 my-6">
      <button
        onClick={onPrev}
        disabled={!prev}
        className={[
          'p-3 rounded-card border text-left transition-all',
          prev
            ? 'border-accent/20 bg-card hover:shadow-card active:scale-[0.98]'
            : 'border-transparent bg-transparent opacity-30 cursor-not-allowed',
        ].join(' ')}
      >
        <div className="flex items-center gap-1 text-[11px] text-ink-light mb-0.5">
          <ChevronLeft size={12} /> 上一节
        </div>
        <div className="text-[13px] font-medium text-ink truncate">
          {prev ? prev.title : '已是第一节'}
        </div>
      </button>
      <button
        onClick={onNext}
        disabled={!next}
        className={[
          'p-3 rounded-card border text-right transition-all',
          next
            ? 'border-accent/20 bg-card hover:shadow-card active:scale-[0.98]'
            : 'border-transparent bg-transparent opacity-30 cursor-not-allowed',
        ].join(' ')}
      >
        <div className="flex items-center justify-end gap-1 text-[11px] text-ink-light mb-0.5">
          下一节 <ChevronRight size={12} />
        </div>
        <div className="text-[13px] font-medium text-ink truncate">
          {next ? next.title : '已是最后一节'}
        </div>
      </button>
    </div>
  );
}
