const { contextBridge, ipcRenderer } = require('electron');

// 暴露安全的 IPC 通信接口
contextBridge.exposeInMainWorld('electronAPI', {
  // 获取应用版本
  getVersion: () => ipcRenderer.invoke('get-version'),

  // 最小化窗口
  minimize: () => ipcRenderer.invoke('window-minimize'),

  // 最大化/还原窗口
  maximize: () => ipcRenderer.invoke('window-maximize'),

  // 关闭窗口
  close: () => ipcRenderer.invoke('window-close'),

  // 检查是否最大化
  isMaximized: () => ipcRenderer.invoke('window-is-maximized'),
});

// 监听窗口状态变化
ipcRenderer.on('window-maximized', () => {
  document.dispatchEvent(new CustomEvent('window-maximized'));
});

ipcRenderer.on('window-unmaximized', () => {
  document.dispatchEvent(new CustomEvent('window-unmaximized'));
});
