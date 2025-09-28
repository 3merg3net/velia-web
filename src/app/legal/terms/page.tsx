import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-3xl mx-auto flex-1 p-6 prose">
        <h1>Terms of Use</h1>
        <p>This is a draft placeholder. Replace with counsel-approved terms prior to token launch.</p>
        <h2>Service</h2>
        <p>Velia provides software for interacting with public blockchains. You are responsible for your keys and transactions.</p>
        <h2>Risks</h2>
        <p>Crypto assets and smart contracts carry risk. Use at your own discretion.</p>
      </section>
      <Footer />
    </main>
  );
}
