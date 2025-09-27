import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-3xl mx-auto flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Legal</h1>
        <p className="text-gray-600 mb-6">Please read these terms carefully.</p>

        <h2 className="text-lg font-semibold mb-2">Terms of Use</h2>
        <p className="text-gray-600 mb-6">
          Velia.finance is a peer-to-peer payments protocol. All transactions are executed by smart contracts.
          Users are responsible for their activity and funds.
        </p>

        <h2 className="text-lg font-semibold mb-2">Privacy Policy</h2>
        <p className="text-gray-600 mb-6">
          Velia.finance does not collect personal data beyond what’s required to operate wallet connections and notifications.
        </p>

        <h2 className="text-lg font-semibold mb-2">Disclaimer</h2>
        <p className="text-gray-600">
          Using Velia involves risk. Crypto values can fluctuate. Smart contracts may have bugs. Always double-check before sending funds.
        </p>
      </section>
      <Footer />
    </main>
  );
}
