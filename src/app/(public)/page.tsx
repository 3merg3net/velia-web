import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function PublicHome() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
       <section className="flex-1 grid place-items-center text-center px-6 py-16">
        
         <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/0 via-blue-50/40 to-white/0" />
        <div className="max-w-3xl">
           <img src="/wave.svg" alt="" className="pointer-events-none select-none absolute -top-12 left-1/2 -translate-x-1/2 w-[140%] max-w-none" />
  <div className="flex-1 grid place-items-center text-center px-6 py-16 relative"></div>
          <Image src="/logo.png" alt="Velia.finance" width={220} height={60} className="mx-auto mb-6" priority />
          <h1 className="text-4xl font-bold mb-4">Money that moves like messages</h1>
          <p className="text-gray-600 mb-8">
            Velia makes on-chain payments feel as easy as Venmo. Send USDC, request, or escrow a trade —
            all on Base, powered by $SYNC.
          </p>
          <div className="flex gap-4 justify-center">
            <a className="bg-blue-500 text-white rounded-full px-6 py-2" href="/login">Launch Web</a>
            <a className="border border-blue-500 text-blue-500 rounded-full px-6 py-2" href="/escrow">Learn Escrow</a>
          </div>

          {/* 3-up feature grid */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            <div className="border rounded-2xl p-5">
              <h3 className="font-semibold mb-1">P2P, but crypto</h3>
              <p className="text-gray-600 text-sm">Pay @handles or addresses. USDC by default, simple memos, instant history.</p>
            </div>
            <div className="border rounded-2xl p-5">
              <h3 className="font-semibold mb-1">Trustless escrow</h3>
              <p className="text-gray-600 text-sm">Both sides fund. Auto-release on confirm. Refund on expiry. No middlemen.</p>
            </div>
            <div className="border rounded-2xl p-5">
              <h3 className="font-semibold mb-1">$SYNC rails</h3>
              <p className="text-gray-600 text-sm">Fees route via $SYNC. Hold or stake to unlock reduced or 0% fees.</p>
            </div>
          </div>

          <Image src="/infographic.png" alt="How Velia works" width={960} height={400} className="mx-auto mt-10 rounded-xl shadow-sm" />
        </div>
      </section>

      {/* Download App Section */}
<section className="relative mt-16 text-center">
  <h2 className="text-2xl font-bold mb-4">Velia goes mobile</h2>
  <Image
  src="/infographic-app.png"
  alt="Velia Everywhere infographic"
  width={960}
  height={500}
  className="mx-auto mt-12 rounded-xl shadow-sm"
/>

  <p className="text-gray-600 mb-8">Soon available on iOS and Android. Get ready to send crypto like Venmo — anywhere.</p>
  <div className="flex justify-center gap-6">
    <a
      href="#"
      className="block w-40 h-12 bg-black rounded-lg flex items-center justify-center text-white text-sm font-semibold"
    >
      App Store (soon)
    </a>
    <a
      href="#"
      className="block w-40 h-12 bg-black rounded-lg flex items-center justify-center text-white text-sm font-semibold"
    >
      Google Play (soon)
    </a>
  </div>
</section>

      <Footer />
    </main>
  );
}





