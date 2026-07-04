interface SubjectProgressRingProps {
  size?: number; // 直径
  stroke?: number; // 圆环宽度
  value: number; // 0-100
  color?: string;
  label?: string;
  sublabel?: string;
}

export default function SubjectProgressRing({
  size = 80,
  stroke = 6,
  value,
  color = '#7AAEC0',
  label,
  sublabel,
}: SubjectProgressRingProps) {
  const v = Math.max(0, Math.min(100, value));
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (v / 100) * circumference;
  return (
    <div className="inline-flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(122, 174, 192, 0.15)"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[18px] font-semibold text-ink leading-none">{label ?? `${Math.round(v)}%`}</span>
          {sublabel && <span className="text-[10px] text-ink-light mt-0.5">{sublabel}</span>}
        </div>
      </div>
    </div>
  );
}
