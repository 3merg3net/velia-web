"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OnrampPage() {
  function buyCard() {
    alert("Stub: integrate Ramp / MoonPay widget or redirect here");
  }
  function buyBank() {
    alert("Stub: integrate bank ACH onramp");
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-2xl mx-auto flex-1 p-6 text-center">
        <h1 className="text-2xl font-bold mb-3">Buy crypto with card or bank</h1>
        <p className="text-gray-600 mb-6">
          Quickly purchase USDC and have it available in your Velia account or wallet.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <button onClick={buyCard} className="bg-velia-blue text-white rounded-full px-6 py-3">
            Buy USDC (Card)
          </button>
          <button onClick={buyBank} className="border border-velia-blue text-velia-blue rounded-full px-6 py-3">
            Bank Transfer
          </button>
        </div>

        <div className="mt-8 text-left border rounded-2xl p-4">
          <h3 className="font-semibold mb-2">How it works</h3>
          <ol className="list-decimal pl-5 text-gray-700 space-y-1">
            <li>Choose an amount and payment method.</li>
            <li>Provider converts fiat → USDC and deposits to your connected wallet or custodial account.</li>
            <li>You can now Send or open Escrow in Velia.</li>
          </ol>
        </div>
      </section>
      <Footer />
    </main>
  );
}
