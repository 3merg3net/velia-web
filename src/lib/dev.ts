export function isDevEnv() {
  if (typeof window !== "undefined") {
    return process.env.NEXT_PUBLIC_DEV_BYPASS === "1";
  }
  return process.env.NEXT_PUBLIC_DEV_BYPASS === "1";
}

export function setDevBypass(on: boolean) {
  if (typeof window !== "undefined") {
    localStorage.setItem("velia:dev:bypass", on ? "1" : "0");
    window.dispatchEvent(new Event("velia:dev-bypass"));
  }
}

export function getDevBypass() {
  if (!isDevEnv()) return false;
  if (typeof window === "undefined") return false;
  return localStorage.getItem("velia:dev:bypass") === "1";
}

