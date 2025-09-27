// src/app/staking/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StakingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-2xl mx-auto flex-1 p-6">
        <h1 className="text-2xl font-bold mb-2">Staking</h1>
        <p className="text-gray-600 mb-6">Stake $SYNC to unlock reduced fees and priority routing.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-2xl p-5">
            <h3 className="font-semibold mb-2">Your Status</h3>
            <p className="text-gray-700">Staked: 0 $SYNC</p>
            <p className="text-gray-700">Tier: None</p>
            <div className="mt-4 flex gap-3">
              <button className="bg-blue-500 text-white rounded-full px-5 py-2">Stake</button>
              <button className="border border-blue-500 text-blue-500 rounded-full px-5 py-2">Unstake</button>
            </div>
          </div>
          <div className="border rounded-2xl p-5">
            <h3 className="font-semibold mb-2">Tiers</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>Tier 1 — 10,000 $SYNC → 0.10% fee</li>
              <li>Tier 2 — 25,000 $SYNC → 0% fee</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
