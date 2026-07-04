interface DividerProps {
  color?: string;
  className?: string;
}

export default function Divider({ color, className = '' }: DividerProps) {
  return (
    <div
      className={`w-full h-px ${className}`}
      style={{ backgroundColor: color ?? 'rgba(122, 174, 192, 0.15)' }}
    />
  );
}
