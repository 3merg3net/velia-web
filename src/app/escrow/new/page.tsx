import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NewEscrowPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-2xl mx-auto flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Create Escrow</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-2xl p-5">
            <h3 className="font-semibold mb-3">Maker (You)</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Token In</label>
                <select className="w-full border rounded-xl px-3 py-3">
                  <option>USDC</option>
                  <option>WETH</option>
                  <option>DAI</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Amount In</label>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="0.00" />
              </div>
            </div>
          </div>

          <div className="border rounded-2xl p-5">
            <h3 className="font-semibold mb-3">Taker (Counterparty)</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Token Out</label>
                <select className="w-full border rounded-xl px-3 py-3">
                  <option>USDC</option>
                  <option>WETH</option>
                  <option>DAI</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Amount Out</label>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="0.00" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Taker (handle / address)</label>
            <input className="w-full border rounded-xl px-4 py-3" placeholder="@charlie.eth or 0x..." />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Expiry</label>
            <select className="w-full border rounded-xl px-3 py-3">
              <option>1 hour</option>
              <option>6 hours</option>
              <option>24 hours</option>
              <option>72 hours</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" id="htlc" className="h-4 w-4" />
          <label htmlFor="htlc">Use secret (HTLC-style)</label>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="bg-blue-500 text-white rounded-full px-6 py-3">Approve & Create</button>
          <a href="/escrow" className="border border-blue-500 text-blue-500 rounded-full px-6 py-3">
            Cancel
          </a>
        </div>

        <div className="mt-10 border rounded-2xl p-5">
          <h3 className="font-semibold mb-2">How Escrow Works</h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>You open a deal and deposit funds.</li>
            <li>Counterparty funds their side.</li>
            <li>Both sides claimed automatically on funding.</li>
            <li>If time expires and unmatched, either side can refund.</li>
          </ol>
        </div>
      </section>
      <Footer />
    </main>
  );
}
