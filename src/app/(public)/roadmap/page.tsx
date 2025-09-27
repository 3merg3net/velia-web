import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RoadmapPage() {
  const items = [
    { phase: "Now", points: ["Web MVP (P2P, Escrow)", "Wallet connect", "Velia brand site"] },
    { phase: "Next", points: ["Wiring contracts", "Requests & QR flows", "Staking tiers UI"] },
    { phase: "Soon", points: ["Mobile apps", "On/Off ramps", "Merchant mode"] },
  ];
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-3xl mx-auto flex-1 p-6">
        <h1 className="text-3xl font-bold mb-2">Roadmap</h1>
        <p className="text-gray-600 mb-6">Transparent milestones as we ship Velia.</p>
        <div className="space-y-4">
          {items.map(({ phase, points }) => (
            <div key={phase} className="border rounded-2xl p-5">
              <h3 className="font-semibold">{phase}</h3>
              <ul className="list-disc pl-5 text-gray-700 mt-2">
                {points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
