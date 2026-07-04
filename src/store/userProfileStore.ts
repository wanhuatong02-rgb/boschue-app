import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { STORAGE_KEYS } from '@/lib/storage';

// ============================================================
// userProfileStore（持久化）
// ============================================================

interface UserProfileState {
  nickname: string;
  avatarUrl: string | null;
}

interface UserProfileStore extends UserProfileState {
  setNickname: (name: string) => void;
  setAvatarUrl: (url: string | null) => void;
  resetProfile: () => void;
}

const DEFAULT_PROFILE: UserProfileState = {
  nickname: '博学者',
  avatarUrl: null,
};

export const useUserProfileStore = create<UserProfileStore>()(
  persist(
    (set) => ({
      ...DEFAULT_PROFILE,

      setNickname: (name: string) => {
        set({ nickname: name });
      },

      setAvatarUrl: (url: string | null) => {
        set({ avatarUrl: url });
      },

      resetProfile: () => {
        set(DEFAULT_PROFILE);
      },
    }),
    {
      name: STORAGE_KEYS.USER_PROFILE,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        nickname: state.nickname,
        avatarUrl: state.avatarUrl,
      }),
    },
  ),
);
