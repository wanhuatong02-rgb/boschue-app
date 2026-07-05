import { useEffect, useState } from 'react';
import { SplashScreen } from '@capacitor/splash-screen';

/**
 * Splash 阶段"跳过"按钮
 * — 从 splash 开始显示，直到应用首帧完全渲染后才消失
 * — 给用户心理安慰：随时可点跳过，知道加载在进行
 */
export default function SplashSkipButton() {
  // 页面完全载入后（DOMContentLoaded + 资源加载）才隐藏
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // 监听 window load 事件（所有资源加载完成）
    const onLoad = () => {
      // 再延迟 600ms 确保首帧已经绘制
      setTimeout(() => setVisible(false), 600);
    };

    if (document.readyState === 'complete') {
      // 如果已经 load 了（极少数情况）
      setTimeout(() => setVisible(false), 600);
    } else {
      window.addEventListener('load', onLoad);
    }

    // 兜底：5 秒后无论如何都隐藏
    const fallback = setTimeout(() => setVisible(false), 5000);

    return () => {
      window.removeEventListener('load', onLoad);
      clearTimeout(fallback);
    };
  }, []);

  const handleSkip = async () => {
    try {
      await SplashScreen.hide();
    } catch {
      // fallback
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleSkip}
      className="fixed top-4 right-4 z-[99999]
        bg-white/70 backdrop-blur-md
        rounded-full px-4 py-1.5
        border border-white/40
        text-[13px] font-semibold text-[#5A8E9F]
        shadow-sm
        active:scale-95 transition-all"
    >
      跳过
    </button>
  );
}
