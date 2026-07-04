import { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export default function Tag({ children, active = false, onClick }: TagProps) {
  const cls = [
    'inline-flex items-center px-3 py-1.5 rounded-pill text-xs font-medium transition-colors',
    active
      ? 'bg-accent text-white'
      : 'bg-white text-ink-secondary border border-accent/20',
  ].join(' ');
  return onClick ? (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  ) : (
    <span className={cls}>{children}</span>
  );
}
