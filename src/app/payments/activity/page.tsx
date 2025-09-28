import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthGuard from "@/components/AuthGuard";
import { absUrl } from "@/lib/abs-url";
import Link from "next/link";

type TxItem = {
  id: string;
  type: "send" | "escrow";
  from: string;
  to: string;
  amount: string;
  token: string;
  status: "confirmed" | "pending";
  memo?: string;
  time: number; // ms
};

async function getActivity(): Promise<{ items: TxItem[] }> {
  const res = await fetch(absUrl("/api/tx"), { cache: "no-store" });
  return res.ok ? res.json() : { items: [] };
}

function timeAgo(ms: number) {
  const s = Math.floor((Date.now() - ms) / 1000);
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

export default async function ActivityPage() {
  const { items } = await getActivity();

  return (
    <AuthGuard>
      <main className="min-h-screen flex flex-col">
        <Header />
        <section className="max-w-2xl mx-auto flex-1 p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Activity</h1>
            <div className="flex items-center gap-2">
              <Link href="/send" className="btn-outline">Send</Link>
              <Link href="/escrow/new" className="btn-primary">New Escrow</Link>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="mt-6 border rounded-2xl p-8 text-center text-gray-600 bg-white/70">
              No recent activity. <Link href="/send" className="text-blue-600">Send your first payment</Link>.
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((t) => (
                <div key={t.id} className="border rounded-xl p-4 flex items-center justify-between bg-white/70">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full grid place-items-center text-white ${t.type === "send" ? "bg-blue-500" : "bg-indigo-500"}`}>
                      {t.type === "send" ? "→" : "⎌"}
                    </div>
                    <div>
                      <p className="font-medium">
                        {t.type === "send" ? "Sent" : "Escrow"}
                        <span className="ml-2 font-semibold">
                          {t.amount} {t.token}
                        </span>
                      </p>
                      <p className="text-sm text-gray-600">
                        {t.memo || (t.type === "send" ? `to ${t.to}` : `with ${t.to}`)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{timeAgo(t.time)}</p>
                    <p className={`text-xs mt-1 ${t.status === "confirmed" ? "text-green-600" : "text-amber-600"}`}>
                      {t.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        <Footer />
      </main>
    </AuthGuard>
  );
}
