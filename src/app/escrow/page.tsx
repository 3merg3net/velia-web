"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthGuard from "@/components/AuthGuard";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type EscrowRow = {
  id: string;
  maker: string;
  taker: string;
  token: string;
  amount: string;
  status: 0 | 1 | 2; // 0=pending,1=released,2=refunded
  deadline: number;  // ms
};

function statusBadge(s: number) {
  const map: Record<number, { text: string; cls: string }> = {
    0: { text: "Pending",  cls: "bg-amber-100 text-amber-700" },
    1: { text: "Released", cls: "bg-green-100 text-green-700" },
    2: { text: "Refunded", cls: "bg-gray-200 text-gray-700" },
  };
  const v = map[s] ?? map[0];
  return <span className={`px-2 py-0.5 rounded-full text-xs ${v.cls}`}>{v.text}</span>;
}

function short(id: string, n = 6) {
  return id.length > n * 2 + 2 ? `${id.slice(0, n + 2)}…${id.slice(-n)}` : id;
}

export default function EscrowIndexPage() {
  const [items, setItems] = useState<EscrowRow[]>([]);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"all" | "0" | "1" | "2">("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/escrow", { cache: "no-store" });
        const json = (await res.json()) as { items: EscrowRow[] };
        if (alive) setItems(json.items || []);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return items.filter((e) => {
      const matchesQ =
        !term ||
        e.id.toLowerCase().includes(term) ||
        (e.maker || "").toLowerCase().includes(term) ||
        (e.taker || "").toLowerCase().includes(term);
      const matchesS = status === "all" ? true : e.status === Number(status);
      return matchesQ && matchesS;
    });
  }, [items, q, status]);

  return (
    <AuthGuard>
      <main className="min-h-screen flex flex-col">
        <Header />
        <section className="max-w-5xl mx-auto flex-1 p-6" id="escrow-list">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h1 className="text-2xl font-bold">Escrows</h1>
            <Link href="/escrow/new" className="btn-primary">New Escrow</Link>
          </div>

          {/* Filter bar */}
          <div className="mt-4 grid md:grid-cols-3 gap-3" id="filters">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by ID, maker, or taker…"
              className="border rounded-xl px-4 py-3 md:col-span-2"
            />
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as any)}
              className="border rounded-xl px-4 py-3"
            >
              <option value="all">All statuses</option>
              <option value="0">Pending</option>
              <option value="1">Released</option>
              <option value="2">Refunded</option>
            </select>
          </div>

          {/* List */}
          {loading ? (
            <div className="mt-6 animate-pulse space-y-3">
              <div className="h-16 rounded-xl bg-gray-100" />
              <div className="h-16 rounded-xl bg-gray-100" />
              <div className="h-16 rounded-xl bg-gray-100" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="mt-6 border rounded-2xl p-8 text-center text-gray-600 bg-white/70">
              No escrows match your filter.{" "}
              <Link href="/escrow/new" className="text-blue-600">Create a new one</Link>.
            </div>
          ) : (
            <div className="mt-6 overflow-x-auto border rounded-2xl bg-white/70">
              <table className="min-w-full text-sm">
                <thead className="text-left text-gray-600">
                  <tr className="border-b">
                    <th className="p-3">Escrow ID</th>
                    <th className="p-3">Counterparty</th>
                    <th className="p-3">Amount</th>
                    <th className="p-3">Status</th>
                    <th className="p-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((e) => (
                    <tr key={e.id} className="border-b last:border-0">
                      <td className="p-3 font-mono">{short(e.id)}</td>
                      <td className="p-3">
                        <div className="text-gray-900">{e.taker || "—"}</div>
                        <div className="text-xs text-gray-500">Maker: {e.maker || "—"}</div>
                      </td>
                      <td className="p-3 font-semibold">{e.amount} {e.token}</td>
                      <td className="p-3">{statusBadge(e.status)}</td>
                      <td className="p-3 text-right">
                        <Link href={`/escrow/${e.id}`} className="btn-outline">View</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
        <Footer />
      </main>
    </AuthGuard>
  );
}


