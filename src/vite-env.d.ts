/// <reference types="vite/client" />

interface ElectronAPIBridge {
  saveCardKey: (data: unknown) => Promise<unknown>;
  loadCardKey: () => Promise<unknown>;
  saveProgress: (data: unknown) => Promise<unknown>;
  loadProgress: () => Promise<unknown>;
  getUserDataDir: () => Promise<string>;
  minimizeWindow: () => Promise<void>;
  maximizeWindow: () => Promise<void>;
  unmaximizeWindow: () => Promise<void>;
  closeWindow: () => Promise<void>;
  isWindowMaximized: () => Promise<boolean>;
}

declare global {
  interface Window {
    electronAPI?: ElectronAPIBridge;
  }
}

export {};
