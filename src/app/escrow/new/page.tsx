"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthGuard from "@/components/AuthGuard";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { C } from "@/lib/chain";
import { useEscrowWrite } from "@/hooks/useEscrow";
import { getDevBypass } from "@/lib/dev";
import Link from "next/link";

export default function EscrowNewPage() {
  const router = useRouter();
  const { create, writing } = useEscrowWrite();

  const [counterparty, setCounterparty] = useState("");
  const [amount, setAmount] = useState("");
  const [deadline, setDeadline] = useState<string>(""); // yyyy-mm-ddThh:mm

  const token = C().USDC as `0x${string}`;

  const isAddrOrHandle = (s: string) =>
    /^0x[a-fA-F0-9]{40}$/.test(s) || /^@?[a-z0-9._-]{2,}$/i.test(s);

  const validAmount = (s: string) =>
    /^\d+(\.\d{1,6})?$/.test(s) && parseFloat(s) > 0;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isAddrOrHandle(counterparty)) return toast.error("Enter a valid @handle or 0x address");
    if (!validAmount(amount)) return toast.error("Enter a valid amount (up to 6 decimals)");
    if (!deadline) return toast.error("Choose a deadline");

    // naive handle → address placeholder (replace with ENS/registry later)
    const cp: `0x${string}` = counterparty.startsWith("0x")
      ? (counterparty as `0x${string}`)
      : "0x000000000000000000000000000000000000bEEF";

    const deadlineSec = Math.floor(new Date(deadline).getTime() / 1000);
    toast.loading("Creating escrow…", { id: "escnew" });

    try {
      const res: unknown = await create({ counterparty: cp, token, amount, deadline: deadlineSec });

      // derive an escrowId for navigation (dev-friendly)
      const escrowId: `0x${string}` =
        (res as { escrowId?: `0x${string}` })?.escrowId ??
        (`0x${"deadbeef".repeat(8)}` as `0x${string}`);

      toast.success("Escrow created!", { id: "escnew" });
      router.replace(`/escrow/${escrowId}`);
    } catch (err: any) {
      toast.error(err?.shortMessage || err?.message || "Failed to create escrow", { id: "escnew" });
    }
  }

  return (
    <AuthGuard>
      <main className="min-h-screen flex flex-col">
        <Header />
        <section className="max-w-xl mx-auto flex-1 p-6" id="create-escrow-form">
          <h1 className="text-2xl font-bold mb-2">Create Escrow</h1>
          <p className="text-gray-600 mb-6">Set terms, lock funds, and release when both sides confirm.</p>

          <form onSubmit={onSubmit} className="space-y-5 border rounded-2xl p-6 bg-white/70">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Counterparty (@handle or 0x…)</label>
              <input
                value={counterparty}
                onChange={(e) => setCounterparty(e.target.value)}
                placeholder="@alice.eth"
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <label className="block text-sm text-gray-600 mb-1">Amount (USDC)</label>
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Token</label>
                <div className="w-full border rounded-xl px-4 py-3 bg-gray-50">USDC</div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Deadline</label>
              <input
                type="datetime-local"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div className="flex gap-3">
              <button type="submit" disabled={writing} className="btn-primary disabled:opacity-50">
                Create Escrow
              </button>
              <Link href="/escrow" className="btn-outline">Cancel</Link>
            </div>

            {getDevBypass() && (
              <p className="text-xs text-gray-500">Dev Bypass is ON — transaction will simulate and navigate with a placeholder ID.</p>
            )}
          </form>
        </section>
        <Footer />
      </main>
    </AuthGuard>
  );
}

