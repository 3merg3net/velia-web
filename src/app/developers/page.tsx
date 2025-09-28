import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DevelopersPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-5xl mx-auto flex-1 p-6">
        <h1 className="text-3xl font-bold">Developers</h1>
        <p className="text-gray-600 mt-2">
          Build on Velia rails — Send and Escrow on Base, with $SYNC-powered fees & tiers.
        </p>

        {/* Quick start */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="border rounded-2xl p-6 bg-white/70">
            <h2 className="text-xl font-semibold mb-2">Quick start</h2>
            <pre className="bg-gray-50 rounded-lg p-3 text-sm overflow-auto">
{`# viem + wagmi + RainbowKit
npm i viem wagmi @rainbow-me/rainbowkit

# Velia app SDK (planned)
// npm i @velia/protocol`}
            </pre>
            <p className="text-sm text-gray-600 mt-3">
              Use our example hooks for now: <code>usePaymentRouter</code>, <code>useEscrowWrite</code>, <code>useEscrowRead</code>.
            </p>
          </div>

          <div className="border rounded-2xl p-6 bg-white/70">
            <h2 className="text-xl font-semibold mb-2">Networks</h2>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><span className="font-medium">Base</span> — chainId 8453</li>
              <li><span className="font-medium">Base Sepolia</span> — chainId 84532 (test)</li>
            </ul>
          </div>
        </div>

        {/* ABIs */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="border rounded-2xl p-6 bg-white/70">
            <h3 className="font-semibold mb-2">Escrow ABI (minimal)</h3>
            <pre className="bg-gray-50 rounded-lg p-3 text-sm overflow-auto">
{`import { EscrowABI } from "@/lib/abi/Escrow";

read:  viewEscrow(bytes32 escrowId) -> (maker, taker, token, amount, deadline, status)
write: createEscrow(address counterparty, address token, uint256 amount, uint256 deadline)
write: release(bytes32 escrowId)
write: refund(bytes32 escrowId)`}
            </pre>
          </div>
          <div className="border rounded-2xl p-6 bg-white/70">
            <h3 className="font-semibold mb-2">Router ABI (minimal)</h3>
            <pre className="bg-gray-50 rounded-lg p-3 text-sm overflow-auto">
{`import { RouterABI } from "@/lib/abi/Router";

write: send(address token, address to, uint256 amount, string memo) -> bytes32 txId`}
            </pre>
          </div>
        </div>

        {/* viem examples */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="border rounded-2xl p-6 bg-white/70">
            <h3 className="font-semibold mb-2">viem read</h3>
            <pre className="bg-gray-50 rounded-lg p-3 text-sm overflow-auto">
{`import { createPublicClient, http } from "viem";
import { base } from "viem/chains";
import { EscrowABI } from "@/lib/abi/Escrow";

const client = createPublicClient({ chain: base, transport: http() });
const escrow = await client.readContract({
  address: "0xEscrow…",
  abi: EscrowABI,
  functionName: "viewEscrow",
  args: ["0x…escrowId"],
});`}
            </pre>
          </div>
          <div className="border rounded-2xl p-6 bg-white/70">
            <h3 className="font-semibold mb-2">viem write (wagmi)</h3>
            <pre className="bg-gray-50 rounded-lg p-3 text-sm overflow-auto">
{`import { useWriteContract } from "wagmi";
import { RouterABI } from "@/lib/abi/Router";

const { writeContractAsync } = useWriteContract();
const hash = await writeContractAsync({
  address: "0xRouter…",
  abi: RouterABI,
  functionName: "send",
  args: ["0xUSDC…", "0xTO…", 20n * 10n**6n, "memo"],
});`}
            </pre>
          </div>
        </div>

        <div className="mt-8 border rounded-2xl p-6 bg-white/70">
          <h3 className="font-semibold mb-2">REST helpers (app endpoints)</h3>
          <pre className="bg-gray-50 rounded-lg p-3 text-sm overflow-auto">
{`GET /api/tx           # recent activity (mock)
GET /api/escrow        # list escrows (mock)
POST /api/escrow       # create escrow (mock)
GET /api/resolve?q=... # resolve @handle / ENS / 0x to address`}
          </pre>
          <p className="text-sm text-gray-600 mt-3">
            Replace with onchain-indexed data or your own service when contracts go live.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
