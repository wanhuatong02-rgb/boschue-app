import { ReactNode } from 'react';
import TabBar from './TabBar';

interface AppLayoutProps {
  children: ReactNode;
  showTabBar?: boolean;
}

export default function AppLayout({ children, showTabBar = true }: AppLayoutProps) {
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="relative w-full max-w-mobile bg-canvas h-screen flex flex-col overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.18)]">
        <div className="safe-top bg-canvas" />
        <main className={`flex-1 overflow-y-auto ${showTabBar ? 'pb-20' : ''}`}>{children}</main>
        {showTabBar && <TabBar />}
      </div>
    </div>
  );
}
