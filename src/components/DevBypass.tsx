"use client";

import { useEffect, useState } from "react";
import { getDevBypass, setDevBypass } from "@/lib/dev";

export default function DevBypass() {
  // hide in production unless explicitly enabled via env
  const allow =
    process.env.NODE_ENV !== "production" ||
    process.env.NEXT_PUBLIC_DEV_BYPASS === "1";
  if (!allow) return null;

  const [on, setOn] = useState(false);

  useEffect(() => {
    setOn(getDevBypass());
    const handler = () => setOn(getDevBypass());
    window.addEventListener("velia:dev-bypass", handler);
    return () => window.removeEventListener("velia:dev-bypass", handler);
  }, []);

  function toggle() {
    const next = !on;
    setDevBypass(next);
    setOn(next);
  }

  return (
    <button
      onClick={toggle}
      className={`fixed bottom-5 right-5 z-50 rounded-full px-3 py-1.5 text-xs shadow
        ${on ? "bg-green-600 text-white" : "bg-gray-900 text-white/80"}`}
      aria-pressed={on}
      title="Toggle Dev Bypass"
    >
      {on ? "Dev Bypass: ON" : "Dev Bypass: OFF"}
    </button>
  );
}


