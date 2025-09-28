// src/app/payments/request/page.tsx
"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { toast } from "sonner";

export default function RequestPage() {
  const [from, setFrom] = useState("");
  const [amount, setAmount] = useState("");
  const [memo, setMemo] = useState("");

  function isHandleOrAddr(s: string) {
    return /^@?[a-z0-9._-]{2,}$/i.test(s) || /^0x[a-f0-9]{40}$/i.test(s);
  }
  function isAmount(s: string) {
    return /^\d+(\.\d{1,6})?$/.test(s) && parseFloat(s) > 0;
  }

  async function createLink() {
    if (!isHandleOrAddr(from)) return toast.error("Enter a valid @handle or 0x address");
    if (!isAmount(amount)) return toast.error("Enter a valid amount");
    toast.loading("Creating request link…", { id: "req" });
    await new Promise(r => setTimeout(r, 700));
    const url = `${location.origin}/send?to=${encodeURIComponent(from)}&amount=${amount}&memo=${encodeURIComponent(memo)}`;
    await navigator.clipboard.writeText(url).catch(()=>{});
    toast.success("Request link copied!", { id: "req" });
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-xl mx-auto flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Request Payment</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">From (handle / address)</label>
            <input value={from} onChange={e=>setFrom(e.target.value)} className="w-full border rounded-xl px-4 py-3" placeholder="@alice.eth or 0x…" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Amount</label>
              <input value={amount} onChange={e=>setAmount(e.target.value)} className="w-full border rounded-xl px-4 py-3" placeholder="0.00" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Token</label>
              <select className="w-full border rounded-xl px-3 py-3"><option>USDC</option></select>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Memo (optional)</label>
            <input value={memo} onChange={e=>setMemo(e.target.value)} className="w-full border rounded-xl px-4 py-3" placeholder="For coffee" />
          </div>
          <button onClick={createLink} className="btn-primary w-full">Create Request Link</button>
        </div>
      </section>
      <Footer />
    </main>
  );
}

