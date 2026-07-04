// ============================================================
// 激活状态 Store（Zustand + persist）
// 独立于 progressStore，键名 boschue-activation
// ============================================================

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { STORAGE_KEYS } from '@/lib/storage';
import persistence from '@/services/persistence';
import type { ActivationState, VerifyResult } from '@/types/activation';

interface ActivationStore extends ActivationState {
  /** 激活成功后写入状态 */
  activate: (result: VerifyResult, cardKey: string) => void;
  /** 清除激活状态（用户主动退出，不保留被踢原因） */
  deactivate: () => void;
  /** 强制清除激活状态（多设备互踢/会话过期），保留被踢原因供激活页展示 */
  forceDeactivate: (reason: string) => void;
  /** 清除被踢原因（用户在激活页重新输入卡密前调用） */
  clearKickReason: () => void;
  /** 便捷查询是否已激活 */
  isActivated: () => boolean;
}

export const useActivationStore = create<ActivationStore>()(
  persist(
    (set, get) => ({
      activated: false,
      cardKey: null,
      activatedAt: null,
      unlockedSubjects: [],
      kickReason: null,

      activate: (result, cardKey) => {
        const activatedAt = result.activatedAt ?? Date.now();
        set({
          activated: true,
          cardKey,
          activatedAt,
          unlockedSubjects: result.unlockedSubjects ?? [],
          kickReason: null,
        });
        // Sync to file-backed persistence (fire-and-forget)
        void persistence.saveCardKey({ cardKey, activated: true, activatedAt });
      },

      deactivate: () => {
        set({
          activated: false,
          cardKey: null,
          activatedAt: null,
          unlockedSubjects: [],
          kickReason: null,
        });
        void persistence.saveCardKey({ cardKey: null, activated: false, activatedAt: null });
      },

      forceDeactivate: (reason: string) => {
        set({
          activated: false,
          cardKey: null,
          activatedAt: null,
          unlockedSubjects: [],
          kickReason: reason,
        });
        void persistence.saveCardKey({ cardKey: null, activated: false, activatedAt: null });
      },

      clearKickReason: () => {
        set({ kickReason: null });
      },

      isActivated: () => get().activated,
    }),
    {
      name: STORAGE_KEYS.ACTIVATION,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        activated: state.activated,
        cardKey: state.cardKey,
        activatedAt: state.activatedAt,
        unlockedSubjects: state.unlockedSubjects,
        kickReason: state.kickReason,
      }),
    },
  ),
);
