path = r"C:/Users/Administrator/WorkBuddy/2026-06-27-12-11-05/boschue-app/src/components/layout/PhoneFrame.tsx"

new_content = '''import { ReactNode, CSSProperties } from "react";
import { Capacitor } from "@capacitor/core";

interface PhoneFrameProps {
  children: ReactNode;
}

// iPhone 17 Pro: 6.3" OLED, 19.5:9, 2622x1206
// Logical viewport portrait: 402 x 874
const PHONE_W = 402;
const PHONE_H = 874;

const styles = {
  bg: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0a0a0a",
    overflow: "hidden",
  } as CSSProperties,
  phone: {
    position: "relative" as const,
    width: PHONE_W,
    height: PHONE_H,
  } as CSSProperties,
  bezel: {
    position: "absolute",
    inset: 0,
    background: "#000",
    borderRadius: 48,
    overflow: "hidden",
    boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.6)",
  } as CSSProperties,
  screen: {
    position: "absolute",
    inset: 10,
    borderRadius: 40,
    overflow: "hidden",
    background: "#fff",
  } as CSSProperties,
  notch: {
    position: "absolute",
    top: 12,
    left: "50%",
    transform: "translateX(-50%)",
    width: 120,
    height: 32,
    background: "#000",
    borderRadius: 9999,
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  } as CSSProperties,
  camera: {
    width: 8,
    height: 8,
    borderRadius: 9999,
    background: "#1a1a2e",
  } as CSSProperties,
  homeBar: {
    position: "absolute",
    bottom: 14,
    left: "50%",
    transform: "translateX(-50%)",
    width: 120,
    height: 4,
    borderRadius: 9999,
    background: "rgba(255,255,255,0.3)",
    zIndex: 50,
  } as CSSProperties,
};

export default function PhoneFrame({ children }: PhoneFrameProps) {
  if (Capacitor.isNativePlatform()) {
    return <>{children}</>;
  }

  const scale = Math.min(
    typeof window !== "undefined" ? window.innerWidth / PHONE_W : 1,
    typeof window !== "undefined" ? window.innerHeight / PHONE_H : 1
  );

  return (
    <div style={styles.bg}>
      <div style={{ ...styles.phone, transform: `scale(${scale})`, transformOrigin: "center center" }}>
        <div style={styles.bezel}>
          <div style={styles.screen}>
            {children}
          </div>
          <div style={styles.notch}>
            <div style={styles.camera} />
          </div>
          <div style={styles.homeBar} />
        </div>
      </div>
    </div>
  );
}
'''

with open(path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("OK")
