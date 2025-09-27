"use client";

import { useAccount } from "wagmi";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, ReactNode } from "react";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { isConnected } = useAccount();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isConnected) {
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
    }
  }, [isConnected, pathname, router]);

  if (!isConnected) return null; // or skeleton
  return <>{children}</>;
}
