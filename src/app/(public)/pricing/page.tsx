import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-3xl mx-auto flex-1 p-6">
        <h1 className="text-3xl font-bold mb-2">Pricing</h1>
        <p className="text-gray-600 mb-8">Fair fees on Base. Reduced or 0% with $SYNC.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold mb-1">Standard</h3>
            <p className="text-4xl font-bold mb-1">0.30%</p>
            <p className="text-gray-600 text-sm">Per send/escrow release</p>
          </div>
          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold mb-1">Tier 1</h3>
            <p className="text-4xl font-bold mb-1">0.10%</p>
            <p className="text-gray-600 text-sm">Hold 10,000 $SYNC</p>
          </div>
          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold mb-1">Tier 2</h3>
            <p className="text-4xl font-bold mb-1">0%</p>
            <p className="text-gray-600 text-sm">Hold/Stake 25,000 $SYNC</p>
          </div>
        </div>

        <div className="mt-8 border rounded-2xl p-6">
          <h4 className="font-semibold mb-2">Notes</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
            <li>Network gas fees on Base still apply (minimal).</li>
            <li>Escrow refunds are fee-free.</li>
            <li>Fees route via $SYNC for transparency and tiers.</li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
