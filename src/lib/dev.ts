// src/lib/dev.ts
export const DEV_BYPASS_KEY = "velia-dev-bypass";

/** Returns true if dev-bypass is active (env flag, localStorage, or dev mode). */
export function getDevBypass(): boolean {
  if (typeof window === "undefined") return false;
  const envOn = process.env.NEXT_PUBLIC_DEV_BYPASS === "1";
  const localOn = localStorage.getItem(DEV_BYPASS_KEY) === "1";
  const defaultOnInDev = process.env.NODE_ENV !== "production";
  return envOn || localOn || defaultOnInDev;
}

/** Toggle and broadcast to listeners (DevBypass pill, etc.). */
export function setDevBypass(on: boolean) {
  if (typeof window === "undefined") return;
  localStorage.setItem(DEV_BYPASS_KEY, on ? "1" : "0");
  window.dispatchEvent(new CustomEvent("velia:dev-bypass", { detail: on }));
}
