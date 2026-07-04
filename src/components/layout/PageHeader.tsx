import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  right?: ReactNode;
  onBack?: () => void;
  defaultBackTo?: string;
}

export default function PageHeader({ title, subtitle, right, onBack, defaultBackTo }: PageHeaderProps) {
  const navigate = useNavigate();
  const handleBack = () => {
    if (onBack) onBack();
    else if (defaultBackTo) navigate(defaultBackTo);
    else navigate(-1);
  };
  return (
    <header className="sticky top-0 z-20 bg-canvas/95 backdrop-blur-md">
      <div className="h-14 px-4 flex items-center justify-between">
        <button
          onClick={handleBack}
          className="min-w-[44px] min-h-[44px] flex items-center justify-start -ml-2 text-ink"
          aria-label="返回"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex-1 text-center">
          <h1 className="text-[16px] font-semibold text-ink truncate">{title}</h1>
          {subtitle && <p className="text-[11px] text-ink-light truncate">{subtitle}</p>}
        </div>
        <div className="min-w-[44px] flex justify-end">{right}</div>
      </div>
    </header>
  );
}
