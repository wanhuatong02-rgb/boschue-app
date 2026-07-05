import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  // 直接全屏渲染，不做手机外壳模拟
  return <>{children}</>;
}
