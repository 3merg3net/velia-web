// src/app/faq/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FAQPage() {
  const faqs = [
    { q: "Is Velia custodial?", a: "No. Payments and escrows execute via smart contracts; you control your keys." },
    { q: "What tokens can I use?", a: "USDC by default on Base; more tokens available for escrow swaps." },
    { q: "How do fees work?", a: "Base fee ~0.30%. $SYNC holders/stakers may unlock reduced or 0% fees." },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-2xl mx-auto flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">FAQ</h1>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="border rounded-xl p-4">
              <summary className="font-medium cursor-pointer">{f.q}</summary>
              <p className="text-gray-600 mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
