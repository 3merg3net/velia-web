"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAccount } from "wagmi";
import { useMemo, useState } from "react";

function buildUrl(wallet: string | undefined) {
  const key = process.env.NEXT_PUBLIC_MOONPAY_API_KEY || "";
  const redirect = process.env.NEXT_PUBLIC_ONRAMP_RETURN || (typeof window !== "undefined" ? window.location.origin + "/dashboard" : "");
  // Docs: https://www.moonpay.com/dashboard (buy widget query params)
  const params = new URLSearchParams({
    apiKey: key,
    currencyCode: "usdc",
    baseCurrencyCode: "usd",
    enabledPaymentMethods: "apple_pay,credit_debit_card",
    walletAddress: wallet || "",
    showWalletAddressForm: wallet ? "false" : "true",
    theme: "light",
    colorCode: "3B82F6",
    redirectURL: redirect,
    defaultNetworkCode: "base",
  });
  return `https://buy.moonpay.com/?${params.toString()}`;
}

export default function MoonPayPage() {
  const { address } = useAccount();
  const [manual, setManual] = useState("");
  const wallet = address || (manual || undefined);
  const url = useMemo(() => buildUrl(wallet), [wallet]);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-4xl mx-auto flex-1 p-6">
        <h1 className="text-2xl font-bold mb-2">Buy crypto (MoonPay)</h1>
        <p className="text-gray-600 mb-4">USDC on Base, deposited to your wallet.</p>

        {!address && (
          <div className="border rounded-xl p-4 bg-white/70 mb-4">
            <label className="block text-sm text-gray-600 mb-1">Wallet address</label>
            <input
              value={manual}
              onChange={(e) => setManual(e.target.value)}
              placeholder="0x…"
              className="w-full border rounded-xl px-4 py-3"
            />
            <p className="text-xs text-gray-500 mt-1">Not connected? Paste an address to prefill the widget.</p>
          </div>
        )}

        <div className="rounded-2xl overflow-hidden border h-[720px] bg-white">
          <iframe
            src={url}
            className="w-full h-full"
            allow="accelerometer; autoplay; payment *; clipboard-write;"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
