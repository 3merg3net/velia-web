// src/app/(public)/litepaper/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LitepaperPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-3xl mx-auto flex-1 p-6">
        <h1 className="text-3xl font-bold mb-2">Velia.finance Litepaper</h1>
        <p className="text-gray-600 mb-6">
          A high-level overview of the Velia protocol, $SYNC utility, and roadmap.
        </p>

        <div className="border rounded-2xl p-6 bg-white/70">
          <h2 className="text-lg font-semibold mb-2">Summary</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Simple P2P + trustless Escrow on Base</li>
            <li>$SYNC for fees, staking tiers, rewards, and escrow bonds</li>
            <li>Web now, mobile next; onramp and merchant mode coming</li>
          </ul>

          <a
            href="/litepaper.pdf"
            className="btn-primary inline-block mt-5"
            download
          >
            Download PDF
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
