import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RewardsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-2xl mx-auto flex-1 p-6">
        <h1 className="text-2xl font-bold mb-2">Rewards</h1>
        <p className="text-gray-600 mb-6">Earn perks by using Velia.finance for payments and escrow.</p>

        <div className="grid gap-6">
          <div className="border rounded-2xl p-5">
            <h3 className="font-semibold mb-1">Cashback</h3>
            <p className="text-gray-600 text-sm">Get 0.5% back in $SYNC when you pay with Velia.</p>
          </div>
          <div className="border rounded-2xl p-5">
            <h3 className="font-semibold mb-1">Referral</h3>
            <p className="text-gray-600 text-sm">Invite friends. Earn $SYNC for every new user.</p>
          </div>
          <div className="border rounded-2xl p-5">
            <h3 className="font-semibold mb-1">Staking Boost</h3>
            <p className="text-gray-600 text-sm">Higher rewards if you’re in Tier 2 staking.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
