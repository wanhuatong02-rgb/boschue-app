interface QuizProgressProps {
  current: number; // 1-based
  total: number;
  color?: string;
}

export default function QuizProgress({ current, total, color }: QuizProgressProps) {
  const pct = total > 0 ? (current / total) * 100 : 0;
  return (
    <div>
      <div className="flex justify-between mb-1.5 text-[11px] text-ink-light">
        <span>答题进度</span>
        <span>
          {current} / {total}
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-accent/15 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${pct}%`, backgroundColor: color ?? '#7AAEC0' }}
        />
      </div>
    </div>
  );
}
