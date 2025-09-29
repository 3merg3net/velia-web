"use client";

import { useEffect, useState } from "react";
import { getDevBypass, setDevBypass, isDevEnv } from "@/lib/dev";

export default function DevBypass() {
  // If env says no, render nothing (works on Preview/Prod)
  if (!isDevEnv()) return null;

  const [on, setOn] = useState(false);
  useEffect(() => {
    setOn(getDevBypass());
    const handler = () => setOn(getDevBypass());
    window.addEventListener("velia:dev-bypass", handler);
    return () => window.removeEventListener("velia:dev-bypass", handler);
  }, []);

  return (
    <button
      onClick={() => setDevBypass(!on)}
      className="fixed bottom-4 right-4 px-3 py-1.5 text-xs rounded-full border border-amber-500 text-amber-700 bg-amber-50 hover:bg-amber-100"
      title="Dev bypass"
    >
      Dev {on ? "ON" : "OFF"}
    </button>
  );
}




