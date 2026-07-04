// localStorage 键名常量
export const STORAGE_KEYS = {
  PROGRESS: 'boschue-progress',
  VERSION: 'boschue-version',
  DEVICE_ID: 'boschue-device-id',
  ACTIVATION: 'boschue-activation',
  USER_PROFILE: 'boschue-user-profile',
  CARD_KEY: 'boschue-card-key', // 用于保存已激活的卡密
} as const;

export const STORAGE_VERSION = 4;
