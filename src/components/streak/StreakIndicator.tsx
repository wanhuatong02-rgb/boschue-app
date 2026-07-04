import { Flame } from 'lucide-react';

interface StreakIndicatorProps {
  days: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function StreakIndicator({ days, size = 'md' }: StreakIndicatorProps) {
  const sizeCls = {
    sm: { wrap: 'gap-1 px-2 py-1', icon: 14, num: 'text-[13px]', label: 'text-[10px]' },
    md: { wrap: 'gap-1.5 px-3 py-1.5', icon: 18, num: 'text-[18px]', label: 'text-[11px]' },
    lg: { wrap: 'gap-2 px-4 py-2', icon: 24, num: 'text-[24px]', label: 'text-[12px]' },
  }[size];

  const isActive = days > 0;
  const color = isActive ? '#D08068' : '#888';

  return (
    <div
      className={`inline-flex items-center ${sizeCls.wrap} rounded-pill bg-card shadow-card`}
      style={{ color }}
    >
      <Flame size={sizeCls.icon} fill={isActive ? color : 'transparent'} strokeWidth={isActive ? 1.5 : 2} />
      <div className="flex flex-col leading-tight">
        <span className={`${sizeCls.num} font-semibold font-serif`}>{days}</span>
      </div>
      <span className={`${sizeCls.label} text-ink-light`}>天连击</span>
    </div>
  );
}
