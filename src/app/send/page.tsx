// src/app/send/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SendPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-xl mx-auto flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Send</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">To (handle / address)</label>
            <input className="w-full border rounded-xl px-4 py-3" placeholder="@alice.eth or 0x..." />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Amount</label>
              <input className="w-full border rounded-xl px-4 py-3" placeholder="0.00" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Token</label>
              <select className="w-full border rounded-xl px-3 py-3">
                <option>USDC</option><option>WETH</option><option>DAI</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Memo (optional)</label>
            <input className="w-full border rounded-xl px-4 py-3" placeholder="For dinner" />
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" id="sync" className="h-4 w-4" defaultChecked />
            <label htmlFor="sync">Route fees via $SYNC (best pricing)</label>
          </div>

          <button type="button" className="w-full bg-blue-500 text-white rounded-full py-3">
            Review & Send
          </button>
        </form>
      </section>
      <Footer />
    </main>
  );
}

