// src/app/onboarding/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OnboardingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-xl mx-auto flex-1 p-6">
        <h1 className="text-2xl font-bold mb-2">Welcome to Velia</h1>
        <p className="text-gray-600 mb-6">Pick a handle, connect a wallet, and you’re ready.</p>

        <div className="space-y-5">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Handle</label>
            <div className="flex gap-2">
              <span className="inline-flex items-center px-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-600">@</span>
              <input className="w-full border rounded-xl px-4 py-3" placeholder="yourname" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Email (optional)</label>
            <input className="w-full border rounded-xl px-4 py-3" placeholder="you@domain.com" />
          </div>

          <button className="w-full bg-blue-500 text-white rounded-full py-3">Connect Wallet</button>
          <a href="/dashboard" className="w-full text-center border border-blue-500 text-blue-500 rounded-full py-3 inline-block">Skip for now</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
