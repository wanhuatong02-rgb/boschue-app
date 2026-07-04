import { useState } from 'react';
import { Lightbulb, ChevronDown } from 'lucide-react';

interface HintBlockProps {
  hint: string;
  used: boolean;
  onUse: () => void;
}

export default function HintBlock({ hint, used, onUse }: HintBlockProps) {
  const [expanded, setExpanded] = useState(false);

  if (used) {
    return (
      <div className="mt-3 p-3 rounded-card bg-logic-light border border-logic/30 animate-fade-in-up">
        <div className="flex items-center gap-1.5 text-logic mb-1">
          <Lightbulb size={13} />
          <span className="text-[11px] font-semibold">提示（已使用）</span>
        </div>
        <p className="text-[13px] text-ink-secondary leading-relaxed">{hint}</p>
      </div>
    );
  }

  return (
    <div className="mt-3">
      <button
        onClick={() => {
          setExpanded(!expanded);
          if (!expanded) onUse();
        }}
        className="flex items-center gap-1.5 text-[12px] text-logic font-medium px-2 py-1 rounded-pill hover:bg-logic/10 transition-colors"
      >
        <Lightbulb size={13} />
        <span>看一次提示</span>
        <ChevronDown size={12} className={expanded ? 'rotate-180 transition-transform' : 'transition-transform'} />
      </button>
      {expanded && (
        <div className="mt-2 p-3 rounded-card bg-logic-light border border-logic/30 animate-fade-in-up">
          <p className="text-[13px] text-ink-secondary leading-relaxed">{hint}</p>
        </div>
      )}
    </div>
  );
}
