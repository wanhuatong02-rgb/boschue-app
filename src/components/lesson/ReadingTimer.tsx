import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface ReadingTimerProps {
  active: boolean;
  onTick?: (totalSec: number) => void;
}

export default function ReadingTimer({ active, onTick }: ReadingTimerProps) {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    if (!active) return;
    const timer = setInterval(() => {
      setSec((s) => {
        const next = s + 1;
        onTick?.(next);
        return next;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [active, onTick]);

  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;

  return (
    <div className="flex items-center gap-1 text-[12px] text-ink-light">
      <Clock size={13} />
      <span>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
}
