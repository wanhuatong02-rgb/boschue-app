import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from '@/components/ErrorBoundary';
import './index.css';

// 全局错误捕获 — 输出到控制台便于调试
window.addEventListener('error', (event) => {
  console.error('[Global Error]', event.error);
});
window.addEventListener('unhandledrejection', (event) => {
  console.error('[Unhandled Promise Rejection]', event.reason);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </ErrorBoundary>,
);
