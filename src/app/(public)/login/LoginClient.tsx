"use client";

import { useSearchParams } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

export default function LoginClient() {
  const sp = useSearchParams();
  const next = sp.get("next") || "";

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl p-10 bg-white/70 backdrop-blur-md border border-blue-200 shadow-2xl flex flex-col items-center text-center gap-6 animate-fade-in">
        {/* Logo */}
        <Image
          src="/logo1.png"
          alt="Velia Logo"
          width={180}
          height={180}
          className="mb-2"
          priority
        />

        {/* Headline */}
        <h1 className="text-2xl font-bold text-blue-800">Sign in to Velia</h1>
        <p className="text-xs font-medium text-blue-700/80 -mt-4">
          Powered by <span className="font-semibold">$SYNC</span> on Base
        </p>

        {/* Wallet Connect */}
        <ConnectButton
          label="Connect Wallet"
          showBalance={false}
          chainStatus="icon"
        />

        {/* Info text */}
        <p className="text-sm text-gray-600">
          After connecting you’ll be redirected
          <span className="font-mono text-blue-700">{next}</span>.
        </p>
      </div>
    </div>
  );
}


