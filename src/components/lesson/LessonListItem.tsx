import { useNavigate } from 'react-router-dom';
import { Check, Lock, Clock } from 'lucide-react';
import type { Lesson } from '@/types';
import type { LessonStatus } from '@/types';
import { getSubjectConfig } from '@/config/subjects';

interface LessonListItemProps {
  lesson: Lesson;
  status: LessonStatus;
  locked?: boolean;
  onClick?: () => void;
}

export default function LessonListItem({ lesson, status, locked = false, onClick }: LessonListItemProps) {
  const navigate = useNavigate();
  const config = getSubjectConfig(lesson.subjectId);
  const color = config?.color ?? '#7AAEC0';

  const handleClick = () => {
    if (locked) return;
    if (onClick) onClick();
    else navigate(`/reading/${lesson.id}`);
  };

  return (
    <button
      onClick={handleClick}
      disabled={locked}
      className={[
        'w-full text-left p-3.5 rounded-card transition-all duration-200 flex items-center gap-3',
        locked
          ? 'bg-white/50 opacity-60 cursor-not-allowed'
          : 'bg-card hover:shadow-card-hover active:scale-[0.99]',
      ].join(' ')}
    >
      {/* 左侧状态图标 */}
      <div
        className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: locked ? 'rgba(136,136,136,0.1)' : `${color}1A`,
          color: locked ? '#888' : color,
        }}
      >
        {locked ? (
          <Lock size={14} />
        ) : status === 'completed' ? (
          <Check size={16} strokeWidth={3} />
        ) : status === 'in-progress' ? (
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
        ) : (
          <span className="text-[12px] font-semibold">{lesson.order}</span>
        )}
      </div>

      {/* 中间标题 */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[14px] font-medium text-ink truncate">{lesson.title}</h3>
        <p className="text-[11px] text-ink-light truncate mt-0.5">
          {lesson.textbookRef}
          {status === 'in-progress' && <span className="ml-2 text-accent">继续学习</span>}
        </p>
      </div>

      {/* 右侧时长 */}
      <div className="flex items-center gap-1 text-[11px] text-ink-light flex-shrink-0">
        <Clock size={12} />
        <span>{lesson.estimatedMinutes}′</span>
      </div>
    </button>
  );
}
