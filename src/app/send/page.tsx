"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthGuard from "@/components/AuthGuard";
import AddressField from "@/components/AddressField";
import { useState } from "react";
import { toast } from "sonner";
import { C } from "@/lib/chain";
import type { Address } from "viem";
import { usePaymentRouter } from "@/hooks/usePaymentRouter";

export default function SendPage() {
  const [toRaw, setToRaw] = useState("");
  const [toAddr, setToAddr] = useState<Address | null>(null);
  const [amount, setAmount] = useState("");
  const [memo, setMemo] = useState("");
  const { send, writing } = usePaymentRouter();

  function isAmount(s: string) {
    return /^\d+(\.\d{1,6})?$/.test(s) && parseFloat(s) > 0;
  }

  async function submit() {
    if (!toAddr) return toast.error("Enter a valid handle/ENS/address and blur to resolve");
    if (!isAmount(amount)) return toast.error("Enter a valid amount");
    toast.loading("Preparing transaction…", { id: "send" });
    const token = C().USDC as `0x${string}`;
    try {
      await send({ token, to: toAddr, amount, memo });
      toast.success(`Sent ${amount} USDC`, { id: "send" });
    } catch (e: any) {
      toast.error(e?.shortMessage || e?.message || "Failed to send", { id: "send" });
    }
  }

  return (
    <AuthGuard>
      <main className="min-h-screen flex flex-col">
        <Header />
        <section className="max-w-xl mx-auto flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Send</h1>

          <div className="space-y-4">
            <AddressField value={toRaw} onChange={setToRaw} onResolved={setToAddr} />

            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <label className="block text-sm text-gray-600 mb-1">Amount</label>
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full border rounded-xl px-4 py-3"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Token</label>
                <div className="w-full border rounded-xl px-4 py-3 bg-gray-50">USDC</div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Memo (optional)</label>
              <input
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                className="w-full border rounded-xl px-4 py-3"
                placeholder="For coffee"
              />
            </div>

            <div className="flex gap-3">
              <button onClick={submit} disabled={writing} className="btn-primary disabled:opacity-50">
                Review & Send
              </button>
              <a href="/payments/request" className="btn-outline">Request instead</a>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </AuthGuard>
  );
}


