import pathlib

path = pathlib.Path(r'C:\Users\Administrator\WorkBuddy\2026-06-27-12-11-05\boschue-app\src\components\layout\AppLayout.tsx')

content = '''import { ReactNode, useMemo } from 'react';
import { Capacitor } from '@capacitor/core';
import TabBar from './TabBar';

interface AppLayoutProps {
  children: ReactNode;
  showTabBar?: boolean;
}

export default function AppLayout({ children, showTabBar = true }: AppLayoutProps) {
  const isNative = useMemo(() => {
    return Capacitor.isNativePlatform();
  }, []);

  const shellClass = isNative
    ? 'relative w-full h-screen flex flex-col overflow-hidden'
    : 'relative w-full max-w-mobile bg-canvas h-screen flex flex-col overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.18)]';
  const outerClass = isNative
    ? 'h-screen w-screen'
    : 'h-screen w-screen flex justify-center';
  const topSafeClass = isNative ? 'safe-top' : 'safe-top bg-canvas';

  return (
    <div className={outerClass}>
      <div className={shellClass}>
        <div className={topSafeClass} />
        <main className={lex-1 overflow-y-auto }>{children}</main>
        {showTabBar && <TabBar />}
      </div>
    </div>
  );
}
'''
path.write_text(content, encoding='utf-8')
print('Written')
