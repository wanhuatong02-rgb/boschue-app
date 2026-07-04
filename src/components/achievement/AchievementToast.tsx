import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award } from 'lucide-react';
import type { Achievement } from '@/types';

interface AchievementToastProps {
  achievements: Achievement[];
  onDismiss: () => void;
}

export default function AchievementToast({ achievements, onDismiss }: AchievementToastProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (achievements.length === 0) return;
    const t = setTimeout(onDismiss, 5000);
    return () => clearTimeout(t);
  }, [achievements, onDismiss]);

  if (achievements.length === 0) return null;

  // 取第一个成就作为主要显示
  const primaryAchievement = achievements[0];

  return (
    <div
      className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-mobile animate-slide-down"
      onClick={() => {
        navigate('/me');
        onDismiss();
      }}
    >
      <div className="bg-card rounded-card shadow-card-hover p-3.5 flex items-center gap-3 border border-accent/20">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${primaryAchievement.color}1A`, color: primaryAchievement.color }}
        >
          <Award size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] text-ink-light">解锁新成就</div>
          <div className="text-[14px] font-semibold text-ink truncate">
            {primaryAchievement.title}
          </div>
          {primaryAchievement.unlockDetail && (
            <div className="text-[11px] text-ink-light mt-0.5 truncate">
              {primaryAchievement.unlockDetail}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
