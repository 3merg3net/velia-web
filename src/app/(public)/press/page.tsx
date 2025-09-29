import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function PressPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-4xl mx-auto flex-1 p-6">
        <h1 className="text-3xl font-bold mb-2">Press & Brand</h1>
        <p className="text-gray-600 mb-8">Logos and copy for articles, integrations, and reviews.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-2xl p-6 text-center">
            <Image src="/logo-full.png" alt="Velia logo" width={260} height={60} className="mx-auto" />
            <a className="mt-3 inline-block text-blue-600" href="/logo-full.png" download>Download PNG</a>
          </div>
          <div className="border rounded-2xl p-6 text-center">
            <Image src="/logo1.png" alt="Velia icon" width={120} height={120} className="mx-auto" />
            <a className="mt-3 inline-block text-blue-600" href="/icon.png" download>Download PNG</a>
          </div>
        </div>
        // src/app/(public)/press/page.tsx (add)
<div className="mt-8 grid md:grid-cols-2 gap-6">
  <a href="/velia-poster.png" download className="block border rounded-2xl p-4 bg-white/70">
    <img src="/velia-poster.png" alt="Velia poster" className="rounded-lg" />
    <div className="mt-2 text-blue-600 text-sm">Download poster (PNG)</div>
  </a>
  <a href="/roadmap-page.png" download className="block border rounded-2xl p-4 bg-white/70">
    <img src="/roadmap-page.png" alt="Roadmap share image" className="rounded-lg" />
    <div className="mt-2 text-blue-600 text-sm">Download roadmap (PNG)</div>
  </a>
</div>


        <div className="mt-8 border rounded-2xl p-6">
          <h3 className="font-semibold mb-2">Boilerplate</h3>
          <p className="text-gray-700">
            Velia.finance makes on-chain payments feel like Venmo — simple P2P, trustless escrow, and transparent fees
            routed by $SYNC on Base.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
