// src/app/support/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SupportPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-2xl mx-auto flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Support</h1>
        <p className="text-gray-600 mb-6">Need help? Reach out and we’ll get you sorted.</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input className="w-full border rounded-xl px-4 py-3" placeholder="you@domain.com" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Message</label>
            <textarea className="w-full border rounded-xl px-4 py-3 h-32" placeholder="Tell us what’s up…" />
          </div>
          <button className="bg-blue-500 text-white rounded-full px-6 py-3">Send</button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
