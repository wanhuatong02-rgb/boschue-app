import { Component, type ReactNode, type ErrorInfo } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; error: Error | null; }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: 40, textAlign: 'center', fontFamily: 'system-ui',
          color: '#1F1F1F', backgroundColor: '#E8F5F9', minHeight: '100vh'
        }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>⚠️</div>
          <h2 style={{ margin: '0 0 12px' }}>应用遇到问题</h2>
          <p style={{ color: '#666', margin: '0 0 16px', fontSize: 14 }}>
            {this.state.error?.message || '未知错误'}
          </p>
          <button
            onClick={() => {
              localStorage.clear(); // 清除可能损坏的本地存储
              window.location.reload();
            }}
            style={{
              padding: '10px 24px', borderRadius: 8, border: 'none',
              background: '#7AAEC0', color: 'white', cursor: 'pointer', fontSize: 14
            }}
          >
            重置并重新加载
          </button>
        </div>
      );
    }
    return this.props.children;
  }
};
