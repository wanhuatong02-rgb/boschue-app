import { ReactNode } from "react";
import TabBar from "./TabBar";

interface AppLayoutProps {
  children: ReactNode;
  showTabBar?: boolean;
}

export default function AppLayout({ children, showTabBar = true }: AppLayoutProps) {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden bg-canvas">
      <div className="safe-top" />
      <main className={`flex-1 overflow-y-auto ${showTabBar ? "pb-16" : ""}`}>{children}</main>
      {showTabBar && <TabBar />}
    </div>
  );
}
