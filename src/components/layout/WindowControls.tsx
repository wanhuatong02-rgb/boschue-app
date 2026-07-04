import { useEffect, useState } from 'react';
import { X, Minus, Square } from 'lucide-react';

export default function WindowControls() {
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    if (window.electronAPI?.isWindowMaximized) {
      window.electronAPI.isWindowMaximized().then(setIsMaximized);
    }
  }, []);

  const handleToggleMax = () => {
    if (isMaximized) window.electronAPI?.unmaximizeWindow();
    else window.electronAPI?.maximizeWindow();
    setIsMaximized(!isMaximized);
  };

  return (
    <div className="absolute top-2 right-2 z-50 flex items-center gap-1.5 electron-no-drag">
      <button onClick={() => window.electronAPI?.minimizeWindow()} className="w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors" aria-label="最小化">
        <Minus size={14} className="text-ink/70" />
      </button>
      <button onClick={handleToggleMax} className="w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors" aria-label={isMaximized ? '还原' : '最大化'}>
        <Square size={12} className="text-ink/70" />
      </button>
      <button onClick={() => window.electronAPI?.closeWindow()} className="w-7 h-7 rounded-full bg-red-500/80 hover:bg-red-500 flex items-center justify-center transition-colors" aria-label="关闭">
        <X size={14} className="text-white" />
      </button>
    </div>
  );
}

