export const DEV_BYPASS_ENABLED =
  process.env.NEXT_PUBLIC_DEV_BYPASS === "1";

/** Is bypass feature allowed at all (env-gated) */
export function isDevEnv() {
  return DEV_BYPASS_ENABLED;
}

export function setDevBypass(on: boolean) {
  if (!DEV_BYPASS_ENABLED) return;
  if (typeof window !== "undefined") {
    localStorage.setItem("velia:dev:bypass", on ? "1" : "0");
    window.dispatchEvent(new Event("velia:dev-bypass"));
  }
}

export function getDevBypass() {
  if (!DEV_BYPASS_ENABLED) return false;
  if (typeof window === "undefined") return false;
  return localStorage.getItem("velia:dev:bypass") === "1";
}

