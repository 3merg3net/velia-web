"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OnrampPage() {
  const apiKey = process.env.NEXT_PUBLIC_RAMP_API_KEY!;
  const appName = process.env.NEXT_PUBLIC_RAMP_APP_NAME || "Velia";
  const returnUrl = process.env.NEXT_PUBLIC_ONRAMP_RETURN || (typeof window !== "undefined" ? window.location.origin + "/dashboard" : "");
  const url = `https://buy.ramp.network/?hostAppName=${encodeURIComponent(appName)}&hostApiKey=${apiKey}&defaultAsset=USDC&finalUrl=${encodeURIComponent(returnUrl)}`;

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-4xl mx-auto flex-1 p-6">
        <h1 className="text-2xl font-bold mb-2">Buy crypto</h1>
        <p className="text-gray-600 mb-4">USDC on Base, deposited to your connected wallet.</p>
        <div className="rounded-2xl overflow-hidden border h-[720px]">
          <iframe src={url} className="w-full h-full" allow="accelerometer; autoplay; payment *; clipboard-write;" />
        </div>
      </section>
      <Footer />
    </main>
  );
}

