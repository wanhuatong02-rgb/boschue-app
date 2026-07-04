import { ReactNode } from 'react';

interface QuizCardProps {
  children: ReactNode;
  index: number;
  total: number;
  knowledgePoints?: string[];
}

export default function QuizCard({ children, index, total, knowledgePoints }: QuizCardProps) {
  return (
    <div className="bg-card rounded-card shadow-card p-5 animate-fade-in-up">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] text-ink-light font-medium">
          第 {index + 1} / {total} 题
        </span>
        {knowledgePoints && knowledgePoints.length > 0 && (
          <div className="flex gap-1 flex-wrap justify-end">
            {knowledgePoints.slice(0, 2).map((p) => (
              <span
                key={p}
                className="text-[10px] px-1.5 py-0.5 rounded bg-accent/8 text-accent"
              >
                {p}
              </span>
            ))}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
