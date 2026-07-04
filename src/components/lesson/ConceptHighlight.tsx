import { BookMarked } from 'lucide-react';
import type { ConceptBox, SubjectId } from '@/types';
import { getSubjectConfig } from '@/config/subjects';

interface ConceptHighlightProps {
  concept: ConceptBox;
  subjectId: SubjectId;
}

export default function ConceptHighlight({ concept, subjectId }: ConceptHighlightProps) {
  const config = getSubjectConfig(subjectId);
  const color = config?.color ?? '#7AAEC0';
  return (
    <div
      className="my-5 p-4 rounded-card relative overflow-hidden"
      style={{ backgroundColor: `${color}0F` }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: color }}
      />
      <div className="flex items-center gap-1.5 mb-1.5" style={{ color }}>
        <BookMarked size={14} />
        <span className="text-[12px] font-semibold tracking-wide">核心概念 · {concept.title}</span>
      </div>
      <p className="text-[14px] leading-relaxed text-ink font-serif">{concept.definition}</p>
    </div>
  );
}
