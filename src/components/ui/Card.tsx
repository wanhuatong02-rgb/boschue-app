import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: 'sm' | 'md' | 'lg' | 'none';
  hover?: boolean;
}

const padClasses = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-5',
};

export default function Card({ padding = 'md', hover = false, className = '', children, ...rest }: CardProps) {
  const cls = [
    'bg-card rounded-card shadow-card',
    hover ? 'transition-shadow duration-200 hover:shadow-card-hover' : '',
    padClasses[padding],
    className,
  ].join(' ');
  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  );
}
