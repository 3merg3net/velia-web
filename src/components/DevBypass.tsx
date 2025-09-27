// src/components/DevBypass.tsx
"use client";

import { useEffect, useState } from "react";

const DEV_FLAG_KEY = "velia-dev-bypass";

export function getDevBypassLocal(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(DEV_FLAG_KEY) === "1";
}

export function setDevBypassLocal(on: boolean) {
  if (typeof window === "undefined") return;
  localStorage.setItem(DEV_FLAG_KEY, on ? "1" : "0");
  window.dispatchEvent(new CustomEvent("velia:dev-bypass", { detail: on }));
}

export default function DevBypass() {
  const [on, setOn] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    // default: show ON in dev for convenience
    const envOn = (process.env.NEXT_PUBLIC_DEV_BYPASS === "1");
    const local = localStorage.getItem(DEV_FLAG_KEY) === "1";
    // in development, default to on for immediate dev UX
    const defaultOn = process.env.NODE_ENV !== "production";
    return envOn || local || defaultOn;
  });

  useEffect(() => {
    // sync when other tabs toggle
    const handler = () => setOn(getDevBypassLocal());
    window.addEventListener("velia:dev-bypass", handler);
    return () => window.removeEventListener("velia:dev-bypass", handler);
  }, []);

  function toggle() {
    const next = !on;
    setDevBypassLocal(next);
    setOn(next);
  }

  // Show control in dev OR when env flag forced
  const show = process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_DEV_BYPASS === "1";
  if (!show) return null;

  return (
    <button
      onClick={toggle}
      className={`text-xs px-3 py-1 rounded-full border flex items-center gap-2 ${
        on ? "bg-velia-blue/10 border-velia-blue text-velia-blue" : "border-gray-200 text-gray-700"
      }`}
      title="Dev bypass (toggles rendering of gated pages without wallet)"
      aria-pressed={on}
    >
      <span className="whitespace-nowrap">Dev: {on ? "Bypass ON" : "Bypass OFF"}</span>
    </button>
  );
}
