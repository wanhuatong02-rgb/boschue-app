// ============================================================
// 卡密服务层 — 负责设备 ID 生成、卡密验证、健康检查
// ============================================================

import { API_BASE } from '@/config/api';
import { STORAGE_KEYS } from '@/lib/storage';
import persistence from '@/services/persistence';
import type { VerifyResult } from '@/types/activation';

/**
 * 简单字符串哈希（cyrb53 算法变体）
 * 用于生成设备指纹
 */
function hashString(str: string): string {
  let h1 = 0xdeadbeef;
  let h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16);
}

/**
 * 生成设备指纹
 * 组合 userAgent + 屏幕 + 时区 + 随机数
 */
function generateDeviceFingerprint(): string {
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown';
  const screenW = typeof window !== 'undefined' ? window.screen.width : 0;
  const screenH = typeof window !== 'undefined' ? window.screen.height : 0;
  const screenD = typeof window !== 'undefined' ? window.screen.colorDepth : 0;
  const tz =
    typeof Intl !== 'undefined'
      ? Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown'
      : 'unknown';
  const random = Math.random().toString(36).substring(2, 12);
  const ts = Date.now().toString(36);
  return `${ua}|${screenW}x${screenH}x${screenD}|${tz}|${random}|${ts}`;
}

/**
 * 获取或创建设备 ID
 * 首次调用时生成并持久化到 localStorage，后续直接读取
 */
export function getOrCreateDeviceId(): string {
  const stored = localStorage.getItem(STORAGE_KEYS.DEVICE_ID);
  if (stored && stored.length > 0) return stored;

  const fingerprint = generateDeviceFingerprint();
  const hash = hashString(fingerprint);
  const deviceId = `dev_${hash}`;
  localStorage.setItem(STORAGE_KEYS.DEVICE_ID, deviceId);
  return deviceId;
}

/**
 * 检查本地是否已有激活状态
 * 已激活即永久有效，不再调用后端重新验证。
 * 仅检查本地持久化的激活状态，不发起任何网络请求。
 */
export async function checkStoredActivation(): Promise<{ activated: boolean; cardKey?: string }> {
  // 1) Try file-backed persistence first (API)
  try {
    const data = await persistence.loadCardKey();
    if (data && data.activated && data.cardKey) {
      return { activated: true, cardKey: data.cardKey };
    }
  } catch (e) {
    console.warn('persistence API failed, falling back to localStorage:', e);
  }
  // 2) Fallback: localStorage (zustand persist format)
  const activationData = localStorage.getItem(STORAGE_KEYS.ACTIVATION);
  if (activationData) {
    try {
      const parsed = JSON.parse(activationData);
      if (parsed.state && parsed.state.activated) {
        return { activated: true, cardKey: parsed.state.cardKey };
      }
    } catch (e) {
      console.warn('Failed to parse activation data:', e);
    }
  }
  return { activated: false };
}

/**
 * 验证卡密
 * 调用 POST /api/verify，处理网络异常。
 * 无客户端侧频率限制 — 429 响应直接返回给调用方处理。
 *
 * @param cardKey 用户输入的卡密（会自动 trim + toUpperCase）
 * @returns VerifyResult 验证结果
 */
export async function verifyCardKey(cardKey: string): Promise<VerifyResult> {
  const trimmedKey = cardKey.trim().toUpperCase();

  try {
    const deviceId = getOrCreateDeviceId();
    const res = await fetch(`${API_BASE}/api/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cardKey: trimmedKey, deviceId }),
    });

    // 尝试解析 JSON 响应（包括 429 在内的所有状态码都尝试解析）
    const data = await res.json().catch(() => null);
    if (data && typeof data.success === 'boolean' && typeof data.code === 'string') {
      // 如果验证成功，保存卡密到本地存储 + 文件持久化
      if (data.success) {
        localStorage.setItem(STORAGE_KEYS.CARD_KEY, trimmedKey);
        void persistence.saveCardKey({ cardKey: trimmedKey, activated: true, activatedAt: data.activatedAt ?? Date.now() });
      }
      return data as VerifyResult;
    }

    // 无法解析的响应视为系统错误
    return {
      success: false,
      message: '系统繁忙，请稍后重试',
      code: 'SYSTEM_ERROR',
    };
  } catch {
    // 网络异常（fetch 抛出）
    return {
      success: false,
      message: '网络异常，请检查网络后重试',
      code: 'NETWORK_ERROR',
    };
  }
}

/**
 * 发送心跳检测
 * 应用运行期间定期调用，后端可借此主动推送 DEVICE_REPLACED（多设备互踢）。
 * 收到 DEVICE_REPLACED 或 SESSION_EXPIRED 时，调用方应清除本地激活状态。
 *
 * @returns VerifyResult | null — null 表示心跳正常，非 null 表示需要处理的状态变更
 */
export async function heartbeat(): Promise<VerifyResult | null> {
  const storedCardKey = localStorage.getItem(STORAGE_KEYS.CARD_KEY);
  if (!storedCardKey) {
    return null;
  }

  try {
    const deviceId = getOrCreateDeviceId();
    const res = await fetch(`${API_BASE}/api/heartbeat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cardKey: storedCardKey, deviceId }),
    });

    const data = await res.json().catch(() => null);
    if (data && typeof data.code === 'string') {
      // DEVICE_REPLACED: 卡密已在新设备激活，当前设备被踢
      // SESSION_EXPIRED: 会话已过期
      if (data.code === 'DEVICE_REPLACED' || data.code === 'SESSION_EXPIRED') {
        return data as VerifyResult;
      }
    }
    return null;
  } catch {
    // 心跳网络异常不阻塞用户使用
    return null;
  }
}

/**
 * 检查后端服务是否可达
 * 调用 GET /health，返回 true/false
 */
export async function checkServerHealth(): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/health`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) return false;
    const data = await res.json().catch(() => null);
    return data?.status === 'ok';
  } catch {
    return false;
  }
}
