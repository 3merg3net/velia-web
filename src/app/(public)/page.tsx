import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* HERO */}
      <section className="flex-1 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          {/* Tagline */}
          <p className="inline-block rounded-full border px-3 py-1 text-xs md:text-sm text-blue-700 border-blue-200 bg-white/60">
            Retail-simple. Crypto-native. User-owned.
          </p>

          {/* Headline */}
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Send & Escrow Crypto on <span className="text-blue-600">Base</span>
          </h1>

          {/* Subcopy */}
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Velia makes crypto feel like Venmo—simple UI on the surface, trustless rails underneath.
            Powered by <span className="font-semibold">$SYNC</span> for fees, tiers, and rewards.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/send" className="btn-primary">Send Crypto</Link>
            <Link href="/escrow/new" className="btn-outline">Start Escrow</Link>
            <Link href="/sync" className="btn-outline">Learn about $SYNC</Link>
          </div>

          {/* Visual */}
          <div className="mt-12">
  <Image
    src="/landing-hero.png"
    alt="Velia hero banner"
    width={800}   // intrinsic size
    height={400}
    className="mx-auto rounded-xl shadow-lg max-w-md w-full h-auto"
    priority
  />
</div>

        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-3">
          <div className="border rounded-2xl p-6 bg-white/70">
            <div className="text-2xl">🚀</div>
            <h3 className="mt-2 font-semibold">Base-native</h3>
            <p className="text-gray-600 text-sm mt-1">
              Low fees, fast finality, familiar UX. Built where users are.
            </p>
          </div>
          <div className="border rounded-2xl p-6 bg-white/70">
            <div className="text-2xl">🔒</div>
            <h3 className="mt-2 font-semibold">Trustless Escrow</h3>
            <p className="text-gray-600 text-sm mt-1">
              Two-sided funding, expiries & refunds, clean on-chain events.
            </p>
          </div>
          <div className="border rounded-2xl p-6 bg-white/70">
            <div className="text-2xl">💙</div>
            <h3 className="mt-2 font-semibold">$SYNC Utility</h3>
            <p className="text-gray-600 text-sm mt-1">
              Fee tiers (down to 0%), rewards, and escrow bonds to reduce spam.
            </p>
          </div>
        </div>
      </section>

      {/* SECONDARY CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="border rounded-2xl p-6 md:p-8 bg-white/70 text-center md:text-left md:flex md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Ready to try Velia?</h3>
            <p className="text-gray-600 mt-1">
              Use the web app now, then add the mobile app when you’re ready.
            </p>
          </div>
        <div className="mt-4 md:mt-0 flex gap-3 justify-center md:justify-end">
            <Link href="/dashboard" className="btn-primary">Open Web App</Link>
            <Link href="/onramp/moonpay" className="btn-outline">Buy Crypto</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}





