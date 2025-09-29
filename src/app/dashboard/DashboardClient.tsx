"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useAccount } from "wagmi";
import StatusWidget from "./StatusWidget";

type Tx = {
  id: string;
  type: "send" | "escrow";
  status: "confirmed" | "pending";
  amount: string;
  token: string;
  time: number;
};

export default function DashboardClient() {
  const { isConnected } = useAccount();
  const [items, setItems] = useState<Tx[] | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/tx", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as { items: Tx[] };
        if (!cancelled) setItems(json.items || []);
      } catch (e: any) {
        if (!cancelled) setErr(String(e?.message || e));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const recent = useMemo(() => (items ?? []).slice(0, 5), [items]);

  // Not connected → still show StatusWidget prominently
  if (!isConnected) {
    return (
      <div className="grid md:grid-cols-2 gap-6">
        <StatusWidget />
        <div className="border rounded-2xl p-6 bg-white/70">
          <h2 className="font-semibold mb-2">Quick Actions</h2>
          <p className="text-sm text-gray-600 mb-3">
            Connect your wallet to enable all features.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/send" className="btn-primary">Send</Link>
            <Link href="/escrow/new" className="btn-outline">New Escrow</Link>
            <Link href="/sync" className="btn-outline">$SYNC</Link>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (err) {
    return (
      <div className="grid md:grid-cols-2 gap-6">
        <StatusWidget />
        <div className="border rounded-2xl p-6 bg-white/70">
          <h2 className="font-semibold mb-2">Activity</h2>
          <p className="text-red-700">Could not load activity.</p>
          <p className="text-xs text-gray-500 mt-1">({err})</p>
          <div className="mt-4">
            <button
              className="btn-outline"
              onClick={() => {
                setErr(null);
                setItems(null);
                fetch("/api/tx", { cache: "no-store" })
                  .then((r) => r.json())
                  .then((j) => setItems((j?.items ?? []) as Tx[]))
                  .catch((e) => setErr(String(e?.message || e)));
              }}
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Connected + loaded
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Status first */}
      <StatusWidget />

      <div className="border rounded-2xl p-6 bg-white/70">
        <h2 className="font-semibold mb-2">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/send" className="btn-primary">Send</Link>
          <Link href="/escrow/new" className="btn-outline">New Escrow</Link>
          <Link href="/sync" className="btn-outline">$SYNC</Link>
        </div>
      </div>

      <div className="md:col-span-2 border rounded-2xl p-6 bg-white/70">
        <h2 className="font-semibold mb-2">Recent Activity</h2>
        {recent.length === 0 ? (
          <p className="text-sm text-gray-600">No activity yet.</p>
        ) : (
          <ul className="divide-y">
            {recent.map((t) => (
              <li key={t.id} className="py-3 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium capitalize">{t.type}</div>
                  <div className="text-xs text-gray-500">
                    {new Date(t.time).toLocaleString()}
                  </div>
                </div>
                <div className="text-sm font-mono">
                  {t.amount} {t.token}
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-3">
          <Link href="/payments/activity" className="btn-outline text-sm">See all</Link>
        </div>
      </div>
    </div>
  );
}

