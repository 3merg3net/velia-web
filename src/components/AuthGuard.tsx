// src/components/AuthGuard.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { getDevBypass } from "@/lib/dev";
import Link from "next/link";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);
  const [bypass, setBypass] = useState(false);

  useEffect(() => {
    setMounted(true);
    setBypass(getDevBypass());
    const handler = () => setBypass(getDevBypass());
    window.addEventListener("velia:dev-bypass", handler);
    return () => window.removeEventListener("velia:dev-bypass", handler);
  }, []);

  // 🔒 During SSR (and first client paint), render a stable placeholder
  if (!mounted) {
    return <div className="min-h-screen" suppressHydrationWarning />;
  }

  if (!isConnected && !bypass) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full border rounded-2xl p-6 text-center bg-white/80">
          <h1 className="text-xl font-semibold">Connect wallet to continue</h1>
          <p className="text-gray-600 mt-1">Or enable Dev Bypass for testing.</p>
          <div className="mt-4 flex justify-center gap-3">
            <Link href="/login" className="btn-primary">Connect</Link>
            <button
              className="btn-outline"
              onClick={() => {
                localStorage.setItem("velia-dev-bypass", "1");
                window.dispatchEvent(new CustomEvent("velia:dev-bypass"));
                location.reload();
              }}
            >
              Enable Dev Bypass
            </button>
          </div>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}


