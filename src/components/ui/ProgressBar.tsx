interface ProgressBarProps {
  value: number; // 0-100
  color?: string; // 自定义颜色，默认 accent
  height?: number; // px
  showLabel?: boolean;
  label?: string;
  className?: string;
}

export default function ProgressBar({
  value,
  color,
  height = 6,
  showLabel = false,
  label,
  className = '',
}: ProgressBarProps) {
  const v = Math.max(0, Math.min(100, value));
  const bg = color ?? '#7AAEC0';
  return (
    <div className={className}>
      {showLabel && (
        <div className="flex justify-between mb-1 text-xs text-ink-light">
          <span>{label ?? ''}</span>
          <span>{Math.round(v)}%</span>
        </div>
      )}
      <div
        className="w-full rounded-full bg-accent/15 overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${v}%`, backgroundColor: bg }}
        />
      </div>
    </div>
  );
}
