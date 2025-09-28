import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SyncTokenPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* HERO */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <h1 className="text-4xl font-bold">$SYNC — Utility Token for Velia</h1>
          <p className="text-gray-600 mt-3">
            $SYNC powers Velia’s P2P rails on Base: fees, staking tiers (reduced/zero fees), rewards, and escrow bonds.
          </p>

          <div className="mt-6 flex gap-3">
            <a href="#utility" className="btn-primary">Utility</a>
            <a href="#tokenomics" className="btn-outline">Tokenomics</a>
            <a href="#tiers" className="btn-outline">Fee Tiers</a>
            <a href="#disclaimer" className="btn-outline">Disclaimer</a>
          </div>

          <div className="mt-8 border rounded-2xl bg-white/80 p-3">
            <Image
              src="/sync-utility.png"
              alt="$SYNC utility: fees, staking, rewards, escrow bonds"
              width={1200}
              height={720}
              className="w-full h-auto rounded-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div className="p-5 border rounded-xl bg-white/70">
          <h3 className="font-semibold mb-1">Base-native</h3>
          <p className="text-gray-600">Low fees & fast finality. $SYNC aligns value with network usage.</p>
        </div>
        <div className="p-5 border rounded-xl bg-white/70">
          <h3 className="font-semibold mb-1">Utility-first</h3>
          <p className="text-gray-600">Fee routing, staking tiers, rewards, and escrow bonds enforce real demand.</p>
        </div>
        <div className="p-5 border rounded-xl bg-white/70">
          <h3 className="font-semibold mb-1">User-owned</h3>
          <p className="text-gray-600">Future governance to steer parameters and upgrades.</p>
        </div>
      </section>

      {/* UTILITY */}
      <section id="utility" className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-3">$SYNC Utility</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li><span className="font-semibold">Fees:</span> Send & Escrow fees are computed via FeeManager using $SYNC.</li>
          <li><span className="font-semibold">Staking tiers:</span> Hold/stake to reduce fees to 0% (see tiers below).</li>
          <li><span className="font-semibold">Rewards:</span> Cashback/referral rewards paid in $SYNC (programs TBD).</li>
          <li><span className="font-semibold">Escrow bonds:</span> Small $SYNC collateral to reduce spam & anchor reputation.</li>
          <li><span className="font-semibold">Governance (later):</span> Tokenholders can vote on key parameters.</li>
        </ul>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-3">Tokenomics (draft)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-2xl p-6 bg-white/70">
            <h4 className="font-semibold mb-2">Supply</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Total supply: <span className="font-mono">TBD</span></li>
              <li>Chain: Base (ERC-20, EIP-2612 permit)</li>
              <li>Ticker: <span className="font-mono">$SYNC</span></li>
            </ul>
          </div>
          <div className="border rounded-2xl p-6 bg-white/70">
            <h4 className="font-semibold mb-2">Intended Distribution</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Community & Liquidity: <span className="font-mono">TBD%</span></li>
              <li>Partners & Growth: <span className="font-mono">TBD%</span></li>
              <li>Treasury & Grants: <span className="font-mono">TBD%</span></li>
              <li>Core Contributors: <span className="font-mono">TBD%</span> (with vesting)</li>
            </ul>
          </div>
          <div className="border rounded-2xl p-6 bg-white/70">
            <h4 className="font-semibold mb-2">Vesting</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Cliff + linear vesting for contributor/partner allocations (e.g., 12–36 months).</li>
              <li>Onchain timelocks and multisig oversight.</li>
            </ul>
          </div>
          <div className="border rounded-2xl p-6 bg-white/70">
            <h4 className="font-semibold mb-2">Initial Liquidity</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Liquidity to be seeded on Base DEX/AMMs; contracts & addresses published at launch.</li>
              <li>Staking contract & fee tier eligibility to go live with token.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FEE TIERS */}
      <section id="tiers" className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-3">Fee Tiers</h2>
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
        <p className="text-sm text-gray-600 mt-3">
          Tiers are enforced by <span className="font-mono">SyncFeeManager</span> and <span className="font-mono">SyncStaking</span>; parameters may evolve via governance.
        </p>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-3">Roadmap highlights</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>v0: Send & Escrow on Base with $SYNC fee routing and basic tiers.</li>
          <li>v1: Staking contract + referral/cashback rewards, developer SDK.</li>
          <li>v2: Governance, richer intents, and cross-app integrations.</li>
        </ul>
        <div className="mt-6 border rounded-2xl bg-white/80 p-3">
          <Image
            src="/roadmap-page.png"
            alt="Velia roadmap"
            width={1200}
            height={630}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </section>

      {/* HOW IT WORKS POSTER (optional supporting visual) */}
      <section id="poster" className="max-w-5xl mx-auto px-6 py-10">
        <div className="border rounded-2xl bg-white/80 p-3">
          <Image
            src="/how-velia-works.png"
            alt="How Velia works — Send, Escrow, Claim/Refund"
            width={1200}
            height={720}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </section>

      {/* DISCLAIMER */}
      <section id="disclaimer" className="max-w-5xl mx-auto px-6 py-12">
        <div className="border rounded-2xl p-6 bg-white/90">
          <h2 className="text-2xl font-bold mb-3">Legal & Risk Disclaimer</h2>
          <p className="text-gray-700">
            $SYNC is intended as a **utility token** for the Velia protocol. Nothing here is financial, legal, or tax advice.
            Token parameters are subject to change and may be governed by community processes. Always do your own research and
            comply with applicable laws in your jurisdiction.
          </p>
        </div>
        <div className="flex gap-3 mt-6">
          <a href="/protocol#contracts" className="btn-outline">View Contracts (TBD)</a>
          <a href="/litepaper" className="btn-primary">Read Litepaper</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
