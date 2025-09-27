import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Profile() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-md mx-auto flex-1 p-6 text-center">
        <div className="mx-auto mb-4 w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold">V</span>
        </div>
        <h1 className="text-xl font-bold">@your.handle</h1>
        <p className="text-gray-500">0x3D…484C</p>
        <div className="border rounded-lg p-4 mt-6">
          <p className="font-semibold">Balance: 25,000 $SYNC</p>
          <p className="text-sm text-gray-500">Tier 2 — 0% Fees</p>
        </div>
        <div className="mt-6">
          <Image src="/qr.png" alt="QR code" width={160} height={160} className="mx-auto"/>
        </div>
      </section>
      <Footer />
    </main>
  );
}
