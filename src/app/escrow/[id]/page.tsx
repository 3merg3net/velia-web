import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EscrowDetailPage() {
  // When wired to contracts, read id via params and fetch state
  const mock = {
    id: "123456",
    status: "Pending", // Pending | Funded | Claimed | Refunded
    expiresIn: "5h 12m",
    maker: { token: "USDC", amount: "200.00", funded: true },
    taker: { token: "WETH", amount: "0.12", funded: false },
    counterparty: "@charlie.eth",
  };

  const statusColor =
    mock.status === "Pending"
      ? "bg-amber-100 text-amber-700"
      : mock.status === "Funded"
      ? "bg-blue-100 text-blue-700"
      : mock.status === "Claimed"
      ? "bg-emerald-100 text-emerald-700"
      : "bg-gray-100 text-gray-700";

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-2xl mx-auto flex-1 p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Escrow #{mock.id}</h1>
          <span className={`px-3 py-1 rounded-full text-sm ${statusColor}`}>{mock.status}</span>
        </div>
        <p className="text-gray-600 mb-6">Counterparty: <span className="text-blue-600">{mock.counterparty}</span></p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-2xl p-5">
            <h3 className="font-semibold mb-2">Maker</h3>
            <p className="text-gray-700">{mock.maker.amount} {mock.maker.token}</p>
            <p className="text-sm mt-1">
              Status: {mock.maker.funded ? <span className="text-emerald-600">Funded</span> : <span className="text-amber-600">Not funded</span>}
            </p>
          </div>
          <div className="border rounded-2xl p-5">
            <h3 className="font-semibold mb-2">Taker</h3>
            <p className="text-gray-700">{mock.taker.amount} {mock.taker.token}</p>
            <p className="text-sm mt-1">
              Status: {mock.taker.funded ? <span className="text-emerald-600">Funded</span> : <span className="text-amber-600">Not funded</span>}
            </p>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-600">
          Expires in: <span className="font-medium text-gray-800">{mock.expiresIn}</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button className="bg-blue-500 text-white rounded-full px-6 py-3">Fund</button>
          <button className="border border-blue-500 text-blue-500 rounded-full px-6 py-3">Accept</button>
          <button className="border border-gray-300 text-gray-700 rounded-full px-6 py-3">Refund</button>
          <button className="bg-emerald-500 text-white rounded-full px-6 py-3">Claim</button>
          <a href="/escrow" className="border border-gray-300 text-gray-700 rounded-full px-6 py-3">Back</a>
        </div>

        <div className="mt-8 border rounded-2xl p-5">
          <h3 className="font-semibold mb-2">Event Log (sample)</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• DealOpened — maker 0x… created terms</li>
            <li>• DealFunded — maker funded 200 USDC</li>
            <li>• DealAccepted — awaiting taker funding</li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
