import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthGuard from "@/components/AuthGuard";
import { absUrl } from "@/lib/abs-url";
import Link from "next/link";
import Copy from "@/components/Copy";

type EscrowRow = {
  id: string;
  maker: string;
  taker: string;
  token: string;
  amount: string;
  status: 0 | 1 | 2;
  deadline: number; // ms
};

async function getEscrows(): Promise<EscrowRow[]> {
  const res = await fetch(absUrl("/api/escrow"), { cache: "no-store" });
  if (!res.ok) return [];
  const json = (await res.json()) as { items: EscrowRow[] };
  return json.items || [];
}

type Props = { params: Promise<{ id: string }> };

export default async function EscrowDetailPage({ params }: Props) {
  const { id } = await params; // ✅ Next 15 expects a Promise for params
  const all = await getEscrows();
  const escrow = all.find((e) => e.id.toLowerCase() === id.toLowerCase());

  return (
    <AuthGuard>
      <main className="min-h-screen flex flex-col">
        <Header />

        <section className="max-w-2xl mx-auto flex-1 p-6" id="escrow-detail">
          {!escrow ? (
            <div className="border rounded-2xl p-8 text-center bg-white/70">
              <h1 className="text-xl font-semibold mb-2">Escrow not found</h1>
              <p className="text-gray-600">It may not exist in the mock list.</p>
              <Link href="/escrow" className="btn-primary mt-4 inline-block">Back to escrows</Link>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold">Escrow</h1>
              <p className="text-gray-600 text-sm mt-1 break-all">
                ID: {escrow.id}
                <Copy text={escrow.id} />
              </p>

              <div className="mt-6 border rounded-2xl p-6 space-y-4 bg-white/70">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600">Maker</p>
                    <p className="font-mono">{escrow.maker}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Taker</p>
                    <p className="font-mono">{escrow.taker}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Amount</p>
                    <p className="font-semibold">{escrow.amount} {escrow.token}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Deadline</p>
                    <p>{new Date(escrow.deadline).toLocaleString()}</p>
                  </div>
                </div>

                <div className="pt-2 border-t" id="escrow-actions">
                  <div className="flex gap-3">
                    <button className="btn-primary">Release</button>
                    <button className="btn-outline">Refund</button>
                    <Link href="/escrow" className="btn-outline">Back</Link>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Actions are placeholders in dev; wire to contracts when deployed.
                  </p>
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

