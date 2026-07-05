import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Copy } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useActivationStore } from "@/store/activationStore";
import { verifyCardKey, checkStoredActivation } from "@/services/cardService";
import { STORAGE_KEYS } from "@/lib/storage";
import { ROUTES } from "@/config/routes";
import type { VerifyCode, VerifyResult } from "@/types/activation";

const FEEDBACK_MESSAGES: Record<VerifyCode, string> = {
  ACTIVATED: "激活成功！正在进入应用...",
  ALREADY_ACTIVATED: "此设备已激活，正在进入应用...",
  INVALID_INPUT: "请输入卡密",
  INVALID_KEY: "卡密无效，请检查输入",
  DISABLED: "此卡密已被禁用",
  DEVICE_MISMATCH: "此卡密已在其他设备激活，每张卡仅限一台设备",
  DEVICE_REPLACED: "此设备已被其他设备登录，请重新输入卡密",
  SESSION_EXPIRED: "会话已过期，请重新输入卡密",
  RATE_LIMITED: "验证次数过多，请稍后重试",
  SYSTEM_ERROR: "系统繁忙，请稍后重试",
  NETWORK_ERROR: "网络异常，请检查网络后重试",
};

const SUCCESS_BG = "#E8F5E8";
const SUCCESS_TEXT = "#5A8E3E";
const ERROR_BG = "#F5E8E5";
const ERROR_TEXT = "#D08068";
const KICK_BG = "#FFF3E0";
const KICK_TEXT = "#E65100";

export default function ActivatePage() {
  const navigate = useNavigate();
  const activated = useActivationStore((s) => s.activated);
  const activate = useActivationStore((s) => s.activate);
  const kickReason = useActivationStore((s) => s.kickReason);
  const clearKickReason = useActivationStore((s) => s.clearKickReason);

  const [cardKey, setCardKey] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.CARD_KEY) || "";
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerifyResult | null>(null);
  const [checkingAutoActivation, setCheckingAutoActivation] = useState(!cardKey);
  const inputRef = useRef<HTMLInputElement>(null);
  const [qqCopied, setQqCopied] = useState(false);
  const justActivatedRef = useRef(false);

  useEffect(() => {
    const checkAndRedirect = async () => {
      const storedStatus = await checkStoredActivation();
      if (activated || storedStatus.activated) {
        if (!activated && storedStatus.activated && storedStatus.cardKey) {
          activate({ success: true, code: "ACTIVATED", message: "", activatedAt: Date.now(), unlockedSubjects: [] } as any, storedStatus.cardKey);
        }
        navigate(ROUTES.TODAY, { replace: true });
        setCheckingAutoActivation(false);
        return;
      }
      setCheckingAutoActivation(false);
    };
    checkAndRedirect();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const upper = e.target.value.toUpperCase();
    setCardKey(upper);
    if (result) setResult(null);
    if (kickReason) clearKickReason();
  };

  const isValidFormat = cardKey.startsWith("BOSCHUE-") && cardKey.trim().length >= 19;

  const handleActivate = async () => {
    if (!isValidFormat || loading) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await verifyCardKey(cardKey);
      setResult(res);
      if (res.code === "DEVICE_REPLACED" || res.code === "SESSION_EXPIRED") {
        clearKickReason();
      }
      if (res.success) {
        justActivatedRef.current = true;
        activate(res, cardKey);
        localStorage.setItem(STORAGE_KEYS.CARD_KEY, cardKey);
        window.setTimeout(() => {
          navigate(ROUTES.TODAY, { replace: true });
        }, 1200);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isValidFormat && !loading) {
      handleActivate();
    }
  };

  const handleCopyQq = async () => {
    try {
      await navigator.clipboard.writeText("2455316106");
      setQqCopied(true);
      setTimeout(() => setQqCopied(false), 1500);
    } catch {}
  };

  const isSuccess = result?.success ?? false;
  const feedbackMessage = result
    ? result.success
      ? result.message || FEEDBACK_MESSAGES[result.code]
      : FEEDBACK_MESSAGES[result.code] || result.message
    : "";

  if (checkingAutoActivation) {
    return (
      <AppLayout showTabBar={false}>
        <div className="flex-1 flex flex-col items-center justify-center px-5">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white text-[24px] font-serif font-semibold mx-auto mb-3 animate-pulse">
              博
            </div>
            <h1 className="text-[22px] font-serif font-semibold text-ink">博学智</h1>
            <p className="text-[13px] text-ink-light mt-1">激活状态检查中...</p>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout showTabBar={false}>
      <div className="flex-1 flex flex-col px-5 py-6">
        <div className="flex-shrink-0 pt-6" />

        <div className="flex-shrink-0 text-center mb-6 animate-fade-in-up">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white text-[24px] font-serif font-semibold mx-auto mb-3">
            博
          </div>
          <h1 className="text-[22px] font-serif font-semibold text-ink">博学智</h1>
          <p className="text-[13px] text-ink-light mt-1">终身学习 · 激活</p>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          {kickReason && (
            <div
              className="w-full mb-4 px-4 py-3 rounded-button text-[13px] font-medium animate-fade-in-up"
              style={{ backgroundColor: KICK_BG, color: KICK_TEXT }}
            >
              系统提示：{kickReason}
            </div>
          )}

          <Card padding="lg" className="w-full animate-scale-in">
            <p className="text-[14px] text-ink-secondary mb-4 text-center">
              输入您购买的卡密，激活全部学科
            </p>

            <input
              ref={inputRef}
              type="text"
              value={cardKey}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="BOSCHUE-XXXX-XXXX-XXXX"
              disabled={loading}
              className="w-full h-12 px-4 rounded-button border border-accent/30 bg-canvas/50 font-mono text-[15px] text-ink placeholder:text-ink-light/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all uppercase disabled:opacity-50"
              style={{ letterSpacing: "0.05em" }}
              autoComplete="off"
              autoCapitalize="characters"
              spellCheck={false}
            />

            {cardKey.length > 0 && !isValidFormat && (
              <p className="text-[11px] text-psychology mt-1.5 px-1">
                卡密格式：BOSCHUE-XXXX-XXXX-XXXX
              </p>
            )}

            <Button
              variant="primary"
              size="lg"
              block
              loading={loading}
              disabled={!isValidFormat}
              onClick={handleActivate}
              className="mt-4"
            >
              {loading ? "验证中..." : "激活"}
            </Button>

            {result && (
              <div
                className="mt-4 px-4 py-3 rounded-button text-[13px] font-medium animate-fade-in-up"
                style={{
                  backgroundColor: isSuccess ? SUCCESS_BG : ERROR_BG,
                  color: isSuccess ? SUCCESS_TEXT : ERROR_TEXT,
                }}
              >
                {isSuccess ? "✓ " : "✗ "}
                {feedbackMessage}
              </div>
            )}
          </Card>
        </div>

        <div className="flex-shrink-0 mt-auto pt-4 pb-2">
          <div className="flex items-center justify-between rounded-xl bg-white/60 border border-accent/10 px-4 py-3">
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-ink-light">联系作者获取卡密</p>
              <p className="text-[13px] text-ink font-medium mt-0.5">作者QQ：2455316106</p>
            </div>
            <button
              onClick={handleCopyQq}
              className="flex items-center gap-1.5 shrink-0 ml-3 px-3 py-1.5 rounded-lg bg-accent/10 hover:bg-accent/20 active:scale-95 transition-all text-accent text-[12px] font-semibold"
            >
              <Copy size={13} />
              {qqCopied ? "已复制" : "复制"}
            </button>
          </div>
          <p className="text-[10px] text-ink-light/50 text-center mt-2">
            卡密格式：BOSCHUE-XXXX-XXXX-XXXX
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
