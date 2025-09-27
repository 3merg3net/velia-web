// src/app/payments/qr/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function QRPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-xl mx-auto flex-1 p-6 text-center">
        <h1 className="text-2xl font-bold mb-2">Your QR</h1>
        <p className="text-gray-600 mb-6">Let friends scan to pay you instantly.</p>

        <div className="mx-auto w-56 h-56 border rounded-2xl grid place-items-center bg-white shadow-sm">
          <Image src="/qr.png" alt="QR" width={200} height={200} />
        </div>

        <p className="mt-4 text-gray-600 text-sm">Handle: <span className="text-gray-900 font-medium">@your.handle</span></p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <a className="bg-blue-500 text-white rounded-full py-3" href="/send">Send</a>
          <button className="border border-blue-500 text-blue-500 rounded-full py-3">Scan QR</button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
