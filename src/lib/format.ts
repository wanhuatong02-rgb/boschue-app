// 格式化工具

// 秒数 → "x 分 y 秒"
export function formatDuration(sec: number): string {
  if (sec < 60) return `${Math.floor(sec)} 秒`;
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return s > 0 ? `${m} 分 ${s} 秒` : `${m} 分`;
}

// 秒数 → "x 分钟"（取整）
export function formatMinutes(sec: number): number {
  return Math.max(1, Math.round(sec / 60));
}

// 0-1 → "x%"
export function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

// 0-100 → "x%"
export function formatScore(score: number): string {
  return `${Math.round(score)}%`;
}
