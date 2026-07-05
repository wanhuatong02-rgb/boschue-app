import { NavLink, useLocation } from 'react-router-dom';
import { Sparkles, User } from 'lucide-react';

const tabs = [
  { to: '/today', label: 'TODAY', icon: Sparkles },
  { to: '/me', label: 'ME', icon: User },
];

export default function TabBar() {
  const location = useLocation();
  return (
    <nav
      className="fixed bottom-0 inset-x-0 w-full bg-white/95 backdrop-blur-md border-t border-accent/10"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex justify-around items-center h-16 px-4">
        {tabs.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/today'}
            className={({ isActive }) =>
              [
                'flex flex-col items-center justify-center gap-0.5 min-w-[44px] min-h-[44px] px-4 py-1.5 rounded-pill transition-colors',
                isActive ? 'text-accent' : 'text-ink-light',
              ].join(' ')
            }
          >
            {({ isActive }) => (
              <>
                <Icon size={20} strokeWidth={isActive ? 2.4 : 1.8} />
                <span className="text-[10px] font-semibold tracking-wider">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
