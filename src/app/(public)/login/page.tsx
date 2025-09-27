"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { isConnected } = useAccount();
  const sp = useSearchParams();
  const next = sp.get("next") || "/dashboard";
  const router = useRouter();

  useEffect(() => {
    if (isConnected) router.replace(next);
  }, [isConnected, next, router]);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-1 grid place-items-center px-6 py-16 text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold mb-3">Sign in to Velia</h1>
          <p className="text-gray-600 mb-6">
            Connect your wallet to access Dashboard, Send, and Escrow.
          </p>
          <div className="grid place-items-center">
            <ConnectButton showBalance={false} chainStatus="icon" />
          </div>
          <p className="text-sm text-gray-500 mt-4">
            By continuing you agree to our <a href="/legal" className="text-blue-600">Terms</a>.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
