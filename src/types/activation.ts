// ============================================================
// 激活相关类型定义
// ============================================================

/** 卡密验证响应 code 枚举 */
export type VerifyCode =
  | 'ACTIVATED'
  | 'ALREADY_ACTIVATED'
  | 'INVALID_INPUT'
  | 'INVALID_KEY'
  | 'DISABLED'
  | 'DEVICE_MISMATCH'
  | 'DEVICE_REPLACED'
  | 'SESSION_EXPIRED'
  | 'RATE_LIMITED'
  | 'SYSTEM_ERROR'
  | 'NETWORK_ERROR';

/** 卡密验证接口响应 */
export interface VerifyResult {
  success: boolean;
  message: string;
  code: VerifyCode;
  unlockedSubjects?: string[];
  activatedAt?: number;
}

/** 激活状态（持久化） */
export interface ActivationState {
  activated: boolean;
  cardKey: string | null;
  activatedAt: number | null;
  unlockedSubjects: string[];
  /** 被踢原因（多设备互踢时由 forceDeactivate 写入，null 表示正常状态） */
  kickReason: string | null;
}
