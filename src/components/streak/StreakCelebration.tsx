import { useEffect } from 'react';
import { PartyPopper, X } from 'lucide-react';

interface StreakCelebrationProps {
  open: boolean;
  days: number;
  onClose: () => void;
}

export default function StreakCelebration({ open, days, onClose }: StreakCelebrationProps) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-scale-in" onClick={onClose}>
      <div
        className="relative bg-card rounded-card p-8 mx-8 max-w-[300px] text-center animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-ink-light"
        >
          <X size={16} />
        </button>
        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-psychology-light flex items-center justify-center">
          <PartyPopper size={32} color="#D08068" />
        </div>
        <h2 className="text-[20px] font-serif font-semibold text-ink mb-1">连击 {days} 天！</h2>
        <p className="text-[13px] text-ink-secondary leading-relaxed">
          持续学习是最难的事，你已经超越了大多数人。
        </p>
      </div>
    </div>
  );
}
