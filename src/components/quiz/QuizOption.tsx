import { Check, X } from 'lucide-react';

export type OptionStatus = 'default' | 'selected' | 'correct' | 'wrong' | 'disabled';

interface QuizOptionProps {
  id: string; // 'A' | 'B' | 'C' | 'D'
  text: string;
  status: OptionStatus;
  onClick?: () => void;
}

export default function QuizOption({ id, text, status, onClick }: QuizOptionProps) {
  const cls = [
    'w-full p-3.5 rounded-card border-2 flex items-center gap-3 transition-all duration-200 text-left',
    status === 'default' && 'border-accent/15 bg-card hover:border-accent/40 hover:bg-accent/5 active:scale-[0.99]',
    status === 'selected' && 'border-accent bg-accent/8',
    status === 'correct' && 'border-economics bg-economics-light',
    status === 'wrong' && 'border-psychology bg-psychology-light',
    status === 'disabled' && 'border-accent/10 bg-card opacity-60',
  ].filter(Boolean).join(' ');

  const labelCls = [
    'flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-semibold',
    status === 'default' && 'bg-accent/10 text-accent',
    status === 'selected' && 'bg-accent text-white',
    status === 'correct' && 'bg-economics text-white',
    status === 'wrong' && 'bg-psychology text-white',
    status === 'disabled' && 'bg-accent/10 text-ink-light',
  ].filter(Boolean).join(' ');

  return (
    <button onClick={onClick} disabled={status === 'disabled' || status === 'correct' || status === 'wrong'} className={cls}>
      <span className={labelCls}>
        {status === 'correct' ? <Check size={14} strokeWidth={3} /> : status === 'wrong' ? <X size={14} strokeWidth={3} /> : id}
      </span>
      <span className="flex-1 text-[14px] text-ink leading-relaxed font-serif">{text}</span>
    </button>
  );
}
