import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
          <div className="flex gap-3 mt-6">
            <a href="#contracts" className="bg-blue-500 text-white rounded-full px-5 py-2">View Contracts</a>
            <a href="#sdk" className="border border-blue-500 text-blue-500 rounded-full px-5 py-2">SDK</a>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="p-5 border rounded-xl">
          <h3 className="font-semibold mb-1">Base-native</h3>
          <p className="text-gray-600">Low fees, fast finality, Coinbase alignment. $SYNC is the fee rail.</p>
        </div>
        <div className="p-5 border rounded-xl">
          <h3 className="font-semibold mb-1">Trustless Escrow</h3>
          <p className="text-gray-600">Two-sided funding, expiry + refund, clean events for bots & UX.</p>
        </div>
        <div className="p-5 border rounded-xl">
          <h3 className="font-semibold mb-1">Fee Tiers</h3>
          <p className="text-gray-600">Hold/stake $SYNC to reduce fees to 0% for qualified accounts.</p>
        </div>
      </section>

      {/* CONTRACTS */}
      <section id="contracts" className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Contracts (placeholders)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 border rounded-xl">
            <h4 className="font-semibold">EscrowHTLC</h4>
            <p className="text-gray-600 text-sm mb-3">Two-party escrow with expiry/refund, fee skim to FeeManager.</p>
            <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm text-gray-700">
              base-mainnet: <span className="text-gray-500">0xEscrow…TBD</span><br />
              base-sepolia: <span className="text-gray-500">0xEscrow…TBD</span>
            </div>
          </div>
          <div className="p-5 border rounded-xl">
            <h4 className="font-semibold">$SYNC (ERC-20)</h4>
            <p className="text-gray-600 text-sm mb-3">Permit (EIP-2612). Utility for fee tiers + staking.</p>
            <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm text-gray-700">
              base-mainnet: <span className="text-gray-500">0xSYNC…TBD</span><br />
              base-sepolia: <span className="text-gray-500">0xSYNC…TBD</span>
            </div>
          </div>
          <div className="p-5 border rounded-xl">
            <h4 className="font-semibold">SyncFeeManager</h4>
            <p className="text-gray-600 text-sm mb-3">Computes & collects fees; 0% for eligible $SYNC holders/stakers.</p>
            <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm text-gray-700">
              base-mainnet: <span className="text-gray-500">0xFee…TBD</span><br />
              base-sepolia: <span className="text-gray-500">0xFee…TBD</span>
            </div>
          </div>
          <div className="p-5 border rounded-xl">
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
        <h2 className="text-2xl font-bold mb-4">SDK & Integration</h2>
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
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Security & Parameters</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>OpenZeppelin libs, SafeTransfer, non-reentrancy, event logs.</li>
          <li>Bounds: min/max amounts, sane expiries (e.g., 5m–72h).</li>
          <li>Pausable FeeManager, multisig-owned, time-locked updates.</li>
          <li>Base fee target: 30 bps (0.30%), 0% for eligible $SYNC holders/stakers.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="border rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Ready to build on Velia?</h3>
            <p className="text-gray-600">Hook into $SYNC rails on Base for P2P send + escrow.</p>
          </div>
          <div className="flex gap-3">
            <a className="bg-blue-500 text-white rounded-full px-5 py-2" href="/dashboard">Try the Web</a>
            <a className="border border-blue-500 text-blue-500 rounded-full px-5 py-2" href="#sdk">Use the SDK</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
