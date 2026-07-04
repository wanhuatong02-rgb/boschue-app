/**
 * Persistence service:
 *  - In Electron: uses IPC to write JSON files via main process.
 *  - In pywebview/HTTP: uses fetch API to /api/... routes.
 *  - Always falls back to localStorage if primary method fails.
 */

const isElectron = (): boolean => {
  return typeof window !== "undefined" && !!(window as any).electronAPI;
};

const API = {
  async saveCardKey(data: { cardKey: string | null; activated: boolean; activatedAt: number | null }): Promise<void> {
    if (isElectron()) {
      try { await (window as any).electronAPI.saveCardKey(data); return; } catch { /* fallback */ }
    }
    try { await fetch("/api/cardkey/save", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); return; } catch { /* fallback */ }
    try { localStorage.setItem("boschue-cardkey-fallback", JSON.stringify(data)); } catch { /* */ }
  },

  async loadCardKey(): Promise<{ cardKey: string | null; activated: boolean; activatedAt: number | null }> {
    if (isElectron()) {
      try { const d = await (window as any).electronAPI.loadCardKey(); if (d) return d; } catch { /* fallback */ }
    }
    try { const r = await fetch("/api/cardkey"); if (r.ok) return await r.json(); } catch { /* */ }
    try { const raw = localStorage.getItem("boschue-cardkey-fallback"); return raw ? JSON.parse(raw) : { cardKey: null, activated: false, activatedAt: null }; }
    catch { return { cardKey: null, activated: false, activatedAt: null }; }
  },

  async saveProgress(data: { state: unknown }): Promise<void> {
    if (isElectron()) {
      try { await (window as any).electronAPI.saveProgress(data); return; } catch { /* fallback */ }
    }
    try { await fetch("/api/progress/save", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); return; } catch { /* fallback */ }
    try { localStorage.setItem("boschue-progress-fallback", JSON.stringify(data)); } catch { /* */ }
  },

  async loadProgress(): Promise<unknown | null> {
    if (isElectron()) {
      try { const d = await (window as any).electronAPI.loadProgress(); if (d) return d; } catch { /* fallback */ }
    }
    try { const r = await fetch("/api/progress"); if (r.ok) { const d = await r.json(); return d.state ?? null; } } catch { /* */ }
    try { const raw = localStorage.getItem("boschue-progress-fallback"); return raw ? JSON.parse(raw) : null; }
    catch { return null; }
  },

  getUserDataDir(): string {
    if (isElectron()) return (window as any).electronAPI.getUserDataDir();
    return "";
  },
};

export default API;
