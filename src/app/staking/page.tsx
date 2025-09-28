import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StakingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-3xl mx-auto flex-1 p-6">
        <h1 className="text-3xl font-bold">Staking & Fee Tiers</h1>
        <p className="text-gray-600 mt-2 mb-6">Hold or stake $SYNC to reduce fees. Tiers apply automatically.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-6 bg-white/70">
            <h3 className="font-semibold">Standard</h3>
            <p className="text-4xl font-bold mt-1">0.30%</p>
            <p className="text-sm text-gray-600">No $SYNC required</p>
          </div>
          <div className="border rounded-2xl p-6 bg-white/70">
            <h3 className="font-semibold">Tier 1</h3>
            <p className="text-4xl font-bold mt-1">0.10%</p>
            <p className="text-sm text-gray-600">Hold 10,000 $SYNC</p>
          </div>
          <div className="border rounded-2xl p-6 bg-white/70">
            <h3 className="font-semibold">Tier 2</h3>
            <p className="text-4xl font-bold mt-1">0%</p>
            <p className="text-sm text-gray-600">Hold/Stake 25,000 $SYNC</p>
          </div>
        </div>

        <div className="mt-8 border rounded-2xl p-6 bg-white/70">
          <h4 className="font-semibold mb-2">$SYNC staking (coming soon)</h4>
          <p className="text-gray-700 text-sm">Connect wallet to view balance and stake. Tiers update in real-time and apply to Send and Escrow fees.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

