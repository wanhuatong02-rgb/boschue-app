import { useNavigate } from 'react-router-dom';
import type { SubjectId } from '@/types';
import { getSubjectConfig } from '@/config/subjects';
import SubjectIcon from './SubjectIcon';
import { Lock } from 'lucide-react';

interface SubjectCardProps {
  subjectId: SubjectId;
  mastery?: number; // 0-100
  comingSoon?: boolean;
}

export default function SubjectCard({ subjectId, mastery = 0, comingSoon = false }: SubjectCardProps) {
  const config = getSubjectConfig(subjectId);
  const navigate = useNavigate();
  if (!config) return null;

  const handleClick = () => {
    if (comingSoon) return;
    navigate(`/subject/${subjectId}`);
  };

  return (
    <button
      onClick={handleClick}
      disabled={comingSoon}
      className={[
        'relative w-full text-left p-3 rounded-card bg-card shadow-card transition-all duration-200',
        comingSoon ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-card-hover active:scale-[0.98]',
      ].join(' ')}
    >
      <div className="flex items-center gap-3">
        <SubjectIcon subjectId={subjectId} size={40} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="text-[14px] font-semibold text-ink">{config.name}</h3>
            {comingSoon && (
              <span className="text-[10px] text-ink-light bg-canvas px-1.5 py-0.5 rounded">V1.0</span>
            )}
          </div>
          <p className="text-[11px] text-ink-light truncate mt-0.5">
            {comingSoon ? '即将上线' : config.textbook.replace(/（.+/, '')}
          </p>
        </div>
      </div>
      {!comingSoon && (
        <div className="mt-2.5">
          <div className="flex justify-between text-[10px] text-ink-light mb-1">
            <span>掌握度</span>
            <span>{mastery}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-accent/10 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${mastery}%`, backgroundColor: config.color }}
            />
          </div>
        </div>
      )}
      {comingSoon && (
        <div className="absolute top-2 right-2 text-ink-light">
          <Lock size={12} />
        </div>
      )}
    </button>
  );
}
