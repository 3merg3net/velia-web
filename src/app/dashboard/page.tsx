import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthGuard from "@/components/AuthGuard";
import { absUrl } from "@/lib/abs-url";

type TxItem = {
  id: string;
  type: "send" | "escrow";
  from: string;
  to: string;
  amount: string;
  token: string;
  status: "confirmed" | "pending";
  memo?: string;
  time: number;
};

async function getTx(): Promise<{ items: TxItem[] }> {
  const res = await fetch(absUrl("/api/tx"), { cache: "no-store" });
  return res.ok ? res.json() : { items: [] };
}

export default async function DashboardPage() {
  const data = await getTx();

  return (
    <AuthGuard>
      <main className="min-h-screen flex flex-col">
        <Header />
        <section className="max-w-2xl mx-auto flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

          {data.items.length ? (
            <div className="space-y-3">
              {data.items.map((t) => (
                <div key={t.id} className="border rounded-xl px-4 py-3 flex justify-between bg-white/70">
                  <div>
                    <p className="font-medium capitalize">{t.type}</p>
                    <p className="text-sm text-gray-600">{t.memo || "—"}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      {t.amount} {t.token}
                    </p>
                    <p className="text-sm text-gray-600">{t.status}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 border rounded-2xl p-8 text-center text-gray-600 bg-white/70">
              No activity yet. <a href="/send" className="text-blue-600">Send your first payment</a>.
            </div>
          )}
        </section>
        <Footer />
      </main>
    </AuthGuard>
  );
}




