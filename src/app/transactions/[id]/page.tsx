import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthGuard from "@/components/AuthGuard";
import { absUrl } from "@/lib/abs-url";
import Link from "next/link";
import Copy from "@/components/Copy";

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

async function getTx(id: string): Promise<TxItem | null> {
  const res = await fetch(absUrl("/api/tx"), { cache: "no-store" });
  if (!res.ok) return null;
  const { items } = (await res.json()) as { items: TxItem[] };
  return items.find((t) => t.id.toLowerCase() === id.toLowerCase()) ?? null;
}

type Props = { params: Promise<{ id: string }> };

export default async function TransactionDetailPage({ params }: Props) {
  const { id } = await params; // Next 15 expects Promise for params
  const tx = await getTx(id);

  return (
    <AuthGuard>
      <main className="min-h-screen flex flex-col">
        <Header />
        <section className="max-w-2xl mx-auto flex-1 p-6">
          {!tx ? (
            <div className="border rounded-2xl p-8 text-center bg-white/70">
              <h1 className="text-xl font-semibold mb-2">Transaction not found</h1>
              <p className="text-gray-600">It may not exist in the mock list.</p>
              <Link href="/payments/activity" className="btn-primary mt-4 inline-block">
                Back to Activity
              </Link>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold">Transaction</h1>
              <p className="text-gray-600 text-sm mt-1 break-all">
                ID: {tx.id} <Copy text={tx.id} />
              </p>

              <div className="mt-6 border rounded-2xl p-6 space-y-4 bg-white/70">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600">Type</p>
                    <p className="font-medium capitalize">{tx.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Status</p>
                    <p className={tx.status === "confirmed" ? "text-green-700" : "text-amber-700"}>
                      {tx.status}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">From</p>
                    <p className="font-mono break-all">{tx.from}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">To</p>
                    <p className="font-mono break-all">{tx.to}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Amount</p>
                    <p className="font-semibold">
                      {tx.amount} {tx.token}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Timestamp</p>
                    <p>{new Date(tx.time).toLocaleString()}</p>
                  </div>
                </div>

                {tx.memo && (
                  <div className="pt-2 border-t">
                    <p className="text-xs text-gray-600">Memo</p>
                    <p>{tx.memo}</p>
                  </div>
                )}

                <div className="pt-2 border-t flex gap-3">
                  <Link href="/payments/activity" className="btn-outline">
                    Back
                  </Link>
                </div>
              </div>
            </>
          )}
        </section>
        <Footer />
      </main>
    </AuthGuard>
  );
}

