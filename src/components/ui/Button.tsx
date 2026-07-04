import { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  loading?: boolean;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-dark active:bg-accent-dark shadow-sm',
  secondary: 'bg-white text-ink border border-accent/30 hover:bg-canvas',
  ghost: 'bg-transparent text-accent hover:bg-accent/10',
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-12 px-6 text-base',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  loading = false,
  disabled,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const cls = [
    'inline-flex items-center justify-center gap-2 rounded-button font-medium transition-all duration-150',
    'focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed select-none',
    variantClasses[variant],
    sizeClasses[size],
    block ? 'w-full' : '',
    className,
  ].join(' ');
  return (
    <button className={cls} disabled={disabled || loading} {...rest}>
      {loading && (
        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
      )}
      {children}
    </button>
  );
}
