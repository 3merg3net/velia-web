"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useAccount } from "wagmi";

export default function SyncBuyPage() {
  const { address } = useAccount();

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-4xl mx-auto flex-1 p-6">
        <h1 className="text-3xl font-bold">Get $SYNC</h1>
        <p className="text-gray-600 mt-2">When live, $SYNC will be available on Base via DEX/AMMs and onramps.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border rounded-2xl p-6 bg-white/70">
            <h3 className="font-semibold">Onramp (USDC → $SYNC)</h3>
            <p className="text-sm text-gray-600">Fund USDC on Base, then swap to $SYNC.</p>
            <div className="mt-3 flex gap-2">
              <Link href="/onramp/moonpay" className="btn-outline">MoonPay</Link>
              <Link href="/onramp" className="btn-outline">Other onramps</Link>
            </div>
          </div>

          <div className="border rounded-2xl p-6 bg-white/70">
            <h3 className="font-semibold">Swap on a DEX</h3>
            <p className="text-sm text-gray-600">After launch, use your favorite Base DEX/AMM.</p>
            <div className="mt-3 flex gap-2">
              <a className="btn-outline" href="#" aria-disabled>Uniswap (TBA)</a>
              <a className="btn-outline" href="#" aria-disabled>BaseSwap (TBA)</a>
            </div>
          </div>
        </div>

        <div className="mt-8 border rounded-2xl p-6 bg-white/70">
          <h3 className="font-semibold">Your wallet</h3>
          <p className="text-sm text-gray-600">{address ? address : "Not connected"}</p>
          <p className="text-xs text-gray-500 mt-2">
            Tip: After launch, add the token to your wallet using the published contract address.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
