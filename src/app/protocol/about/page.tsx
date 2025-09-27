import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-3xl mx-auto flex-1 p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">About Velia.finance</h1>
        <p className="text-gray-600 mb-8">
          Velia.finance makes sending and escrowing crypto as simple as Venmo — but on-chain, powered by Base and $SYNC.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="border rounded-2xl p-5">
            <h3 className="font-semibold mb-2">Mission</h3>
            <p className="text-gray-600 text-sm">
              Build the easiest peer-to-peer money rail for Web3 — safe, fast, and global.
            </p>
          </div>
          <div className="border rounded-2xl p-5">
            <h3 className="font-semibold mb-2">Technology</h3>
            <p className="text-gray-600 text-sm">
              Trustless escrows, fee routing, and staking tiers — all secured by smart contracts on Base.
            </p>
          </div>
          <div className="border rounded-2xl p-5">
            <h3 className="font-semibold mb-2">Community</h3>
            <p className="text-gray-600 text-sm">
              Built for users first — from crypto traders to everyday people paying across borders.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
