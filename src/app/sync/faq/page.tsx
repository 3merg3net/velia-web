import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SyncFaqPage() {
  const QA = [
    {
      q: "What is $SYNC?",
      a: "$SYNC is Velia’s utility token on Base. It powers fee routing, staking tiers (reduced/zero fees), rewards, and small escrow bonds."
    },
    {
      q: "Is $SYNC an investment?",
      a: "No. $SYNC is intended for protocol utility. Nothing on this site is financial, legal, or tax advice. Always DYOR and follow local laws."
    },
    {
      q: "How do fee tiers work?",
      a: "Standard is 0.30%. Holding/staking 10k $SYNC reduces to 0.10%. Holding/staking 25k $SYNC reduces to 0%. Enforced by SyncFeeManager + SyncStaking."
    },
    {
      q: "When token?",
      a: "Token addresses and contracts will be published at launch. Until then, placeholders are shown in the Protocol page."
    },
    {
      q: "Where can I earn $SYNC?",
      a: "Planned rewards include cashback on sends/escrows and referrals—paid in $SYNC. Exact programs TBA in the litepaper and announcements."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-4xl mx-auto flex-1 p-6">
        <h1 className="text-3xl font-bold">$SYNC — FAQ</h1>
        <p className="text-gray-600 mt-2">Utility first. User-owned by design.</p>

        <div className="mt-6 space-y-3">
          {QA.map((item, i) => (
            <details key={i} className="border rounded-xl bg-white/70 p-4">
              <summary className="font-semibold cursor-pointer">{item.q}</summary>
              <p className="text-gray-700 mt-2">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <a href="/sync#tokenomics" className="btn-outline">Tokenomics</a>
          <a href="/protocol#contracts" className="btn-primary">Contracts (TBD)</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
