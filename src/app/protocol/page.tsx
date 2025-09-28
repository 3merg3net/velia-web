import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import MiniToc from "@/components/MiniToc";

export default function Protocol() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* HERO */}
      <section className="flex-1 w-full bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <h1 className="text-4xl font-bold">Velia Protocol — Powered by $SYNC on Base</h1>
          <p className="text-gray-600 mt-3">
            Trustless P2P rails for send + escrow. Retail-simple on the surface, crypto-native underneath.
          </p>

          <div className="flex flex-col md:flex-row gap-8 items-center mt-8">
            <div className="md:w-1/2">
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Base-native: low fees, fast finality, Coinbase-aligned ecosystem.</li>
                <li>Trustless Escrow: two-sided funding, expiry + refund, clean events.</li>
                <li>Fee Tiers: hold/stake $SYNC to reduce fees down to 0%.</li>
              </ul>
              <div className="flex gap-3 mt-6">
                <a href="#contracts" className="btn-primary">View Contracts</a>
                <a href="#sdk" className="btn-outline">SDK</a>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/sync-utility.png"
                alt="$SYNC utility: fees, staking, rewards, escrow bonds"
                width={960}
                height={540}
                className="w-full h-auto rounded-xl shadow-sm"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mini TOC */}
      <section className="max-w-5xl mx-auto px-6 mt-4" id="overview">
        <MiniToc />
      </section>

      {/* OVERVIEW */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="p-5 border rounded-xl bg-white/70">
          <h3 className="font-semibold mb-1">Base-native</h3>
          <p className="text-gray-600">Low fees, fast finality, Coinbase alignment. $SYNC is the fee rail.</p>
        </div>
        <div className="p-5 border rounded-xl bg-white/70">
          <h3 className="font-semibold mb-1">Trustless Escrow</h3>
          <p className="text-gray-600">Two-sided funding, expiry + refund, clean events for bots &amp; UX.</p>
        </div>
        <div className="p-5 border rounded-xl bg-white/70">
          <h3 className="font-semibold mb-1">Fee Tiers</h3>
          <p className="text-gray-600">Hold/stake $SYNC to reduce fees to 0% for qualified accounts.</p>
        </div>
      </section>

      {/* $SYNC UTILITY */}
      <section className="max-w-5xl mx-auto px-6 py-10" id="utility">
        <h2 className="text-2xl font-bold mb-2">$SYNC Token Utility</h2>
        <p className="text-gray-700">
          $SYNC routes value through the network: transaction fees, staking tiers (reduced/zero fees),
          rewards (cashback/referrals), and escrow collateral bonds. This creates recurring demand and network effects.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><span className="font-semibold">Fees:</span> P2P Send and Escrow route fees via $SYNC.</li>
            <li><span className="font-semibold">Staking tiers:</span> Standard 0.30% → Tier 1 (10k $SYNC) 0.10% → Tier 2 (25k $SYNC) 0%.</li>
            <li><span className="font-semibold">Rewards:</span> Cashback + referrals in $SYNC.</li>
            <li><span className="font-semibold">Escrow bonds:</span> Small collateral in $SYNC to reduce spam and anchor reputation.</li>
            <li><span className="font-semibold">Governance (later):</span> $SYNC holders steer upgrades and parameters.</li>
          </ul>
          <div className="border rounded-xl bg-white/70 p-3">
            <Image
              src="/velia-poster.png"
              alt="Velia one-pager: problem, solution, $SYNC utility, roadmap"
              width={960}
              height={1220}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* CONTRACTS */}
      <section id="contracts" className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Contracts (placeholders)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 border rounded-xl bg-white/70">
            <h4 className="font-semibold">EscrowHTLC</h4>
            <p className="text-gray-600 text-sm mb-3">Two-party escrow with expiry/refund, fee skim to FeeManager.</p>
            <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm text-gray-700">
              base-mainnet: <span className="text-gray-500">0xEscrow…TBD</span><br />
              base-sepolia: <span className="text-gray-500">0xEscrow…TBD</span>
            </div>
          </div>
          <div className="p-5 border rounded-xl bg-white/70">
            <h4 className="font-semibold">$SYNC (ERC-20)</h4>
            <p className="text-gray-600 text-sm mb-3">Permit (EIP-2612). Utility for fee tiers + staking.</p>
            <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm text-gray-700">
              base-mainnet: <span className="text-gray-500">0xSYNC…TBD</span><br />
              base-sepolia: <span className="text-gray-500">0xSYNC…TBD</span>
            </div>
          </div>
          <div className="p-5 border rounded-xl bg-white/70">
            <h4 className="font-semibold">SyncFeeManager</h4>
            <p className="text-gray-600 text-sm mb-3">Computes &amp; collects fees; 0% for eligible $SYNC holders/stakers.</p>
            <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm text-gray-700">
              base-mainnet: <span className="text-gray-500">0xFee…TBD</span><br />
              base-sepolia: <span className="text-gray-500">0xFee…TBD</span>
            </div>
          </div>
          <div className="p-5 border rounded-xl bg-white/70">
            <h4 className="font-semibold">SyncStaking</h4>
            <p className="text-gray-600 text-sm mb-3">Simple lock for tier eligibility (no emissions in v0).</p>
            <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm text-gray-700">
              base-mainnet: <span className="text-gray-500">0xStake…TBD</span><br />
              base-sepolia: <span className="text-gray-500">0xStake…TBD</span>
            </div>
          </div>
        </div>
      </section>

      {/* SDK */}
      <section id="sdk" className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">SDK &amp; Integration</h2>
        <p className="text-gray-600 mb-4">
          Lightweight TypeScript helpers for reading deal state, creating escrows, and reacting to events.
        </p>
        <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm text-gray-800 overflow-auto">
{`# install (planned)
npm i @velia/protocol

# example
import { Escrow, FeeManager } from "@velia/protocol";
const escrow = new Escrow(provider, { address: "0xEscrow…TBD" });

const id = await escrow.open({
  tokenIn: USDC, amountIn: "20000000",        // 20 USDC (6dp)
  tokenOut: WETH, amountOut: "12000000000000",// 0.012 WETH (18dp)
  taker: "0x...", expiresAt: Math.floor(Date.now()/1000)+3600
});

escrow.on("DealClaimed", (id) => console.log("claimed", id));`}
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Security &amp; Parameters</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>OpenZeppelin libs, SafeTransfer, non-reentrancy, event logs.</li>
          <li>Bounds: min/max amounts, sane expiries (e.g., 5m–72h).</li>
          <li>Pausable FeeManager, multisig-owned, time-locked updates.</li>
          <li>Base fee target: 30 bps (0.30%), 0% for eligible $SYNC holders/stakers.</li>
        </ul>
      </section>

      {/* ROADMAP visual */}
      <section className="max-w-5xl mx-auto px-6 pb-4" id="roadmap">
        <Image
          src="/roadmap-page.png"
          alt="Velia roadmap"
          width={1200}
          height={630}
          className="w-full h-auto rounded-2xl shadow"
        />
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="border rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white/70">
          <div>
            <h3 className="text-xl font-semibold">Ready to build on Velia?</h3>
            <p className="text-gray-600">Hook into $SYNC rails on Base for P2P send + escrow.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-primary" href="/dashboard">Try the Web</a>
            <a className="btn-outline" href="#sdk">Use the SDK</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

