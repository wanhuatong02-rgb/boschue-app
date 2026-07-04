import * as Icons from 'lucide-react';
import type { Achievement } from '@/types';

interface AchievementBadgeProps {
  achievement: Achievement;
  size?: number;
}

export default function AchievementBadge({ achievement, size = 64 }: AchievementBadgeProps) {
  // 动态取图标
  const IconComp = (Icons as unknown as Record<string, Icons.LucideIcon>)[achievement.icon] ?? Icons.Award;
  const color = achievement.unlocked ? achievement.color : '#CCCCCC';
  return (
    <div className="flex flex-col items-center gap-1.5" style={{ width: size + 10 }}>
      <div
        className="rounded-full flex items-center justify-center transition-all"
        style={{
          width: size,
          height: size,
          backgroundColor: achievement.unlocked ? `${color}1A` : '#F0F0F0',
          color,
          boxShadow: achievement.unlocked ? `0 0 0 2px ${color}30` : 'none',
        }}
      >
        <IconComp size={size * 0.42} strokeWidth={achievement.unlocked ? 2 : 1.5} />
      </div>
      <div className="text-center">
        <div
          className="text-[11px] font-medium leading-tight"
          style={{ color: achievement.unlocked ? '#1F1F1F' : '#999' }}
        >
          {achievement.title}
        </div>
        <div className="text-[9px] text-ink-light leading-tight mt-0.5">{achievement.description}</div>
      </div>
    </div>
  );
}
