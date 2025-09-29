"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { DEV_BYPASS_ENABLED, getDevBypass } from "@/lib/dev";

type Props = {
  children: ReactNode;
};

/**
 * AuthGuard protects pages that require a connected wallet.
 * - In production, only allows when wallet is connected.
 * - In dev, can also allow when NEXT_PUBLIC_DEV_BYPASS=1 and toggle is ON.
 */
export default function AuthGuard({ children }: Props) {
  const { isConnected } = useAccount();
  const router = useRouter();

  const allowed = isConnected || (DEV_BYPASS_ENABLED && getDevBypass());

  useEffect(() => {
    if (!allowed) {
      // redirect to /login if not allowed
      router.push("/login");
    }
  }, [allowed, router]);

  if (!allowed) {
    // Render nothing while redirecting
    return null;
  }

  return <>{children}</>;
}



