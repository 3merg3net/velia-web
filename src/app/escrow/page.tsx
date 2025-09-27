import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Escrow() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-2xl mx-auto flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Secure Online Escrow</h1>
        <p className="text-gray-600 mb-6">
          Trustless trades on Base. Funds lock until both parties fund and confirm. Refund if expiry passes.
        </p>
        <div className="border rounded-lg p-4 mb-6">
          <h2 className="font-semibold mb-2">How Escrow Works</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Create a deal and deposit funds</li>
            <li>Counterparty funds match</li>
            <li>Auto-release to both parties</li>
            <li>Refund anytime after expiry if unmatched</li>
          </ol>
        </div>
        <a className="bg-blue-500 text-white rounded-full px-6 py-2 inline-block" href="/dashboard">Get Started</a>
      </section>
      <Footer />
    </main>
  );
}
