"use client";

import { useSearchParams } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function LoginClient() {
  const sp = useSearchParams();
  const redirect = sp.get("redirect") || "/dashboard";

  return (
    <>
      <ConnectButton label="Connect" showBalance={false} chainStatus="icon" />
      <p className="text-xs text-gray-500 mt-3">
        After connecting you’ll be redirected to <span className="font-mono">{redirect}</span>.
      </p>
    </>
  );
}

