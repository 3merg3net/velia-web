import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-3xl mx-auto flex-1 p-6 prose">
        <h1>Privacy Policy</h1>
        <p>We minimize data collection. See this page for the final policy before production.</p>
        <h2>Wallet Data</h2>
        <p>Wallet addresses are public by design. We do not custody funds or keys.</p>
      </section>
      <Footer />
    </main>
  );
}
