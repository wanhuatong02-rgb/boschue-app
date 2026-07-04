import { ReactNode } from 'react';

interface BadgeProps {
  color?: string;
  children: ReactNode;
  size?: 'sm' | 'md';
  className?: string;
}

export default function Badge({ color = '#7AAEC0', children, size = 'md', className = '' }: BadgeProps) {
  const sizeCls = size === 'sm' ? 'text-[11px] px-2 py-0.5' : 'text-xs px-2.5 py-1';
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-pill font-medium ${sizeCls} ${className}`}
      style={{ color, backgroundColor: `${color}1A` }}
    >
      {children}
    </span>
  );
}
