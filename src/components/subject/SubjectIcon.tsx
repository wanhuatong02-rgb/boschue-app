import type { SubjectId } from '@/types';
import { getSubjectConfig } from '@/config/subjects';

interface SubjectIconProps {
  subjectId: SubjectId;
  size?: number;
  className?: string;
}

export default function SubjectIcon({ subjectId, size = 40, className = '' }: SubjectIconProps) {
  const config = getSubjectConfig(subjectId);
  const label = config?.name.charAt(0) ?? '?';
  const color = config?.color ?? '#7AAEC0';
  return (
    <div
      className={`inline-flex items-center justify-center rounded-card font-serif font-semibold text-white ${className}`}
      style={{ width: size, height: size, backgroundColor: color, fontSize: size * 0.45 }}
    >
      {label}
    </div>
  );
}
