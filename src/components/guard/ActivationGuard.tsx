// ============================================================
// 路由守卫 — 未激活时重定向到激活页
// ============================================================

import { ReactNode, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useActivationStore } from '@/store/activationStore';
import { heartbeat } from '@/services/cardService';
import persistence from '@/services/persistence';
import { ROUTES } from '@/config/routes';

/** 心跳检测间隔（5 分钟） */
const HEARTBEAT_INTERVAL_MS = 5 * 60 * 1000;

interface ActivationGuardProps {
  children: ReactNode;
}

/**
 * 包裹整个 App 路由。
 * - 激活页本身不守卫（否则死循环）
 * - 未激活且不在激活页 → 重定向到 /activate
 * - 已激活 → 正常渲染 children
 *
 * 激活策略：已验证即永久有效，启动时只检查本地状态，不发起网络请求重新验证。
 * 多设备互踢：运行期间定期发送心跳，若后端返回 DEVICE_REPLACED / SESSION_EXPIRED，
 *   则自动清除本地激活状态并跳转到激活页。
 */
export default function ActivationGuard({ children }: ActivationGuardProps) {
  const activated = useActivationStore((s) => s.activated);
  const forceDeactivate = useActivationStore((s) => s.forceDeactivate);
  const activate = useActivationStore((s) => s.activate);
  const location = useLocation();

  // Restore activation from file-backed persistence on mount
  useEffect(() => {
    if (activated) return;
    if (location.pathname === ROUTES.ACTIVATE) return;
    let cancelled = false;
    (async () => {
      try {
        const data = await persistence.loadCardKey();
        if (!cancelled && data && data.activated && data.cardKey) {
          activate({ success: true, code: 'ACTIVATED', message: '', activatedAt: data.activatedAt ?? Date.now(), unlockedSubjects: [] } as any, data.cardKey);
        }
      } catch { /* ignore */ }
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // 已激活状态下，定期发送心跳以检测多设备互踢
  useEffect(() => {
    if (!activated) return;
    if (location.pathname === ROUTES.ACTIVATE) return;

    let cancelled = false;

    const sendHeartbeat = async () => {
      const result = await heartbeat();
      if (cancelled) return;
      if (result && (result.code === 'DEVICE_REPLACED' || result.code === 'SESSION_EXPIRED')) {
        const reason =
          result.code === 'DEVICE_REPLACED'
            ? '此设备已被其他设备登录，请重新输入卡密'
            : '会话已过期，请重新输入卡密';
        forceDeactivate(reason);
      }
    };

    // 首次延迟 30 秒后开始心跳，避免与应用启动竞争
    const firstTimer = window.setTimeout(() => {
      sendHeartbeat();
    }, 30 * 1000);

    // 之后每 5 分钟一次
    const intervalTimer = window.setInterval(() => {
      sendHeartbeat();
    }, HEARTBEAT_INTERVAL_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(firstTimer);
      window.clearInterval(intervalTimer);
    };
  }, [activated, location.pathname, forceDeactivate]);

  // 激活页本身不需要守卫
  if (location.pathname === ROUTES.ACTIVATE) {
    return <>{children}</>;
  }

  // 未激活则重定向到激活页
  if (!activated) {
    return <Navigate to={ROUTES.ACTIVATE} replace />;
  }

  return <>{children}</>;
}
