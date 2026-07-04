// 日期工具函数

// 格式化为 YYYY-MM-DD（本地时区）
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// 今日 'YYYY-MM-DD'
export function today(): string {
  return formatDate(new Date());
}

// 昨日 'YYYY-MM-DD'
export function yesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return formatDate(d);
}

// 两个日期相差天数（d2 - d1）
export function daysBetween(d1: string, d2: string): number {
  const date1 = new Date(d1 + 'T00:00:00');
  const date2 = new Date(d2 + 'T00:00:00');
  return Math.round((date2.getTime() - date1.getTime()) / (24 * 60 * 60 * 1000));
}

// 友好显示日期
export function friendlyDate(timestamp: number): string {
  const d = new Date(timestamp);
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}.${month}.${day}`;
}
