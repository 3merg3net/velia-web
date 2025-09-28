"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthGuard from "@/components/AuthGuard";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { resolveEns } from "@/lib/ens";

function short(addr?: string, n = 4) {
  if (!addr) return "";
  return `${addr.slice(0, 2 + n)}…${addr.slice(-n)}`;
}

export default function ProfilePage() {
  const { address, isConnected } = useAccount();
  const [ens, setEns] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (address) {
        const name = await resolveEns(address);
        if (mounted) setEns(name as any);
      } else setEns(null);
    })();
    return () => {
      mounted = false;
    };
  }, [address]);

  return (
    <AuthGuard>
      <main className="min-h-screen flex flex-col">
        <Header />
        <section className="max-w-3xl mx-auto flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Profile</h1>

          <div className="border rounded-2xl p-6 bg-white/70">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-500/90 text-white grid place-items-center text-xl font-bold">
                {address ? address.slice(2, 4).toUpperCase() : "??"}
              </div>
              <div>
                <div className="text-lg font-semibold">
                  {ens || short(address || "0x??")}
                </div>
                <div className="text-sm text-gray-600">{address}</div>
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="border rounded-xl p-4">
                <p className="text-xs text-gray-600">Balance (USDC)</p>
                <p className="text-xl font-semibold">—</p>
              </div>
              <div className="border rounded-xl p-4">
                <p className="text-xs text-gray-600">$SYNC holdings</p>
                <p className="text-xl font-semibold">—</p>
              </div>
              <div className="border rounded-xl p-4">
                <p className="text-xs text-gray-600">Fee tier</p>
                <p className="text-xl font-semibold">Standard</p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="/staking" className="btn-outline">View staking</a>
              <a href="/escrow/new" className="btn-primary">Open escrow</a>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </AuthGuard>
  );
}
