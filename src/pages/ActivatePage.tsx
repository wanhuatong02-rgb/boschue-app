import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useActivationStore } from '@/store/activationStore';
import { verifyCardKey, checkStoredActivation } from '@/services/cardService';
import { STORAGE_KEYS } from '@/lib/storage';
import persistence from '@/services/persistence';
import { ROUTES } from '@/config/routes';
import type { VerifyCode, VerifyResult } from '@/types/activation';

/** 错误码 → 友好提示文案映射 */
const FEEDBACK_MESSAGES: Record<VerifyCode, string> = {
  ACTIVATED: '激活成功！正在进入应用...',
  ALREADY_ACTIVATED: '该设备已激活，正在进入应用...',
  INVALID_INPUT: '请输入卡密',
  INVALID_KEY: '卡密无效，请检查输入',
  DISABLED: '此卡密已被禁用',
  DEVICE_MISMATCH: '此卡密已在其他设备激活，每张卡密仅限一台设备',
  DEVICE_REPLACED: '此设备已被其他设备登录，请重新输入卡密',
  SESSION_EXPIRED: '会话已过期，请重新输入卡密',
  RATE_LIMITED: '验证次数过多，请稍后再试',
  SYSTEM_ERROR: '系统繁忙，请稍后重试',
  NETWORK_ERROR: '网络异常，请检查网络后重试',
};

/** 成功反馈色（economics 绿） */
const SUCCESS_BG = '#E8F5E8';
const SUCCESS_TEXT = '#5A8E3E';

/** 失败反馈色（psychology 暖橙） */
const ERROR_BG = '#F5E8E5';
const ERROR_TEXT = '#D08068';

/** 被踢提示条颜色（橙色） */
const KICK_BG = '#FFF3E0';
const KICK_TEXT = '#E65100';

export default function ActivatePage() {
  const navigate = useNavigate();
  const activated = useActivationStore((s) => s.activated);
  const activate = useActivationStore((s) => s.activate);
  const kickReason = useActivationStore((s) => s.kickReason);
  const clearKickReason = useActivationStore((s) => s.clearKickReason);

  const [cardKey, setCardKey] = useState(() => {
    // 自动预填上次保存的卡密
    return localStorage.getItem(STORAGE_KEYS.CARD_KEY) || '';
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerifyResult | null>(null);
  const [checkingAutoActivation, setCheckingAutoActivation] = useState(!cardKey);
  const inputRef = useRef<HTMLInputElement>(null);

  // 标记本次会话内刚激活，避免 useEffect 立即跳转（需要留 1.2s 展示成功反馈）
  const justActivatedRef = useRef(false);

  // 如果已经是激活状态访问此页，自动跳转到首页（仅在挂载时检查）
  // 激活后永久有效，只检查本地状态，不发起网络请求重新验证
  useEffect(() => {
    const checkAndRedirect = async () => {
      // 检查本地是否已经有激活状态（纯本地检查，无网络请求）
      const storedStatus = await checkStoredActivation();

      if (activated || storedStatus.activated) {
        // 本地已有激活状态，直接跳转首页
                // Restore store from file-backed persistence if needed
        if (!activated && storedStatus.activated && storedStatus.cardKey) {
          activate({ success: true, code: 'ACTIVATED', message: '', activatedAt: Date.now(), unlockedSubjects: [] } as any, storedStatus.cardKey);
        }
navigate(ROUTES.TODAY, { replace: true });
        setCheckingAutoActivation(false);
        return;
      }

      setCheckingAutoActivation(false);
    };

    checkAndRedirect();

    // 挂载后自动聚焦输入框
    if (!checkingAutoActivation) {
      inputRef.current?.focus();
    }
  }, []);

  /** 输入变化：实时转大写，清空上次反馈，清除被踢提示 */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const upper = e.target.value.toUpperCase();
    setCardKey(upper);
    if (result) setResult(null);
    // 用户开始输入时清除被踢原因
    if (kickReason) {
      clearKickReason();
    }
  };

  /** 简单格式校验：以 BOSCHUE- 开头且长度 >= 19 */
  const isValidFormat = cardKey.startsWith('BOSCHUE-') && cardKey.trim().length >= 19;

  /** 执行激活 */
  const handleActivate = async () => {
    if (!isValidFormat || loading) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await verifyCardKey(cardKey);
      setResult(res);

      // 如果是被踢状态（DEVICE_REPLACED / SESSION_EXPIRED），更新被踢原因
      if (res.code === 'DEVICE_REPLACED' || res.code === 'SESSION_EXPIRED') {
        clearKickReason(); // 清除旧的 kickReason，由 result 反馈区展示
      }

      if (res.success) {
        justActivatedRef.current = true;
        activate(res, cardKey);
        // 持久化保存卡密，下次访问自动预填
        localStorage.setItem(STORAGE_KEYS.CARD_KEY, cardKey);
        // 延迟 1.2s 让用户看到成功反馈后跳转
        window.setTimeout(() => {
          navigate(ROUTES.TODAY, { replace: true });
        }, 1200);
      }
    } finally {
      setLoading(false);
    }
  };

  /** 回车提交 */
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && isValidFormat && !loading) {
      handleActivate();
    }
  };

  const isSuccess = result?.success ?? false;
  const feedbackMessage = result
    ? result.success
      ? result.message || FEEDBACK_MESSAGES[result.code]
      : FEEDBACK_MESSAGES[result.code] || result.message
    : '';

  // 如果正在检查自动激活，显示加载状态
  if (checkingAutoActivation) {
    return (
      <AppLayout showTabBar={false}>
        <div className="min-h-screen flex flex-col items-center justify-center px-5 py-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white text-[24px] font-serif font-semibold mx-auto mb-3 animate-pulse">
              博
            </div>
            <h1 className="text-[22px] font-serif font-semibold text-ink">博学者</h1>
            <p className="text-[13px] text-ink-light mt-1">激活状态检查中...</p>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout showTabBar={false}>
      <div className="min-h-screen flex flex-col items-center justify-center px-5 py-8">
        {/* 被踢提示条 */}
        {kickReason && (
          <div
            className="w-full max-w-md mb-4 px-4 py-3 rounded-button text-[13px] font-medium animate-fade-in-up"
            style={{ backgroundColor: KICK_BG, color: KICK_TEXT }}
          >
            ⚠ {kickReason}
          </div>
        )}

        {/* Logo & 标题 */}
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white text-[24px] font-serif font-semibold mx-auto mb-3">
            博
          </div>
          <h1 className="text-[22px] font-serif font-semibold text-ink">博学者</h1>
          <p className="text-[13px] text-ink-light mt-1">通识学习 · 激活</p>
        </div>

        {/* 激活卡片 */}
        <Card padding="lg" className="w-full animate-scale-in">
          <p className="text-[14px] text-ink-secondary mb-4 text-center">
            输入您购买的卡密，激活全部学科
          </p>

          {/* 卡密输入框 */}
          <input
            ref={inputRef}
            type="text"
            value={cardKey}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="BOSCHUE-XXXX-XXXX-XXXX"
            disabled={loading}
            className="w-full h-12 px-4 rounded-button border border-accent/30 bg-canvas/50 font-mono text-[15px] text-ink placeholder:text-ink-light/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all uppercase disabled:opacity-50"
            style={{ letterSpacing: '0.05em' }}
            autoComplete="off"
            autoCapitalize="characters"
            spellCheck={false}
          />

          {/* 格式提示 */}
          {cardKey.length > 0 && !isValidFormat && (
            <p className="text-[11px] text-psychology mt-1.5 px-1">
              卡密格式：BOSCHUE-XXXX-XXXX-XXXX
            </p>
          )}

          {/* 激活按钮 */}
          <Button
            variant="primary"
            size="lg"
            block
            loading={loading}
            disabled={!isValidFormat}
            onClick={handleActivate}
            className="mt-4"
          >
            {loading ? '验证中...' : '激活'}
          </Button>

          {/* 反馈区 */}
          {result && (
            <div
              className="mt-4 px-4 py-3 rounded-button text-[13px] font-medium animate-fade-in-up"
              style={{
                backgroundColor: isSuccess ? SUCCESS_BG : ERROR_BG,
                color: isSuccess ? SUCCESS_TEXT : ERROR_TEXT,
              }}
            >
              {isSuccess ? '✓ ' : '⚠ '}
              {feedbackMessage}
            </div>
          )}
        </Card>

        {/* 底部小字提示 */}
        <div className="mt-6 text-center space-y-1">
          <p className="text-[11px] text-ink-light">
            卡密为 16 位混淆码，格式 BOSCHUE-XXXX-XXXX-XXXX
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
