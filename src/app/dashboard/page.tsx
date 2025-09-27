import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TransactionCard from "@/components/TransactionCard";
import AuthGuard from "@/components/AuthGuard";

export default function DashboardPage() {
  return (
    <AuthGuard>
      <main className="min-h-screen flex flex-col">
        <Header />
        <section className="max-w-2xl mx-auto flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          <div className="flex gap-4 mb-6">
            <a className="bg-blue-500 text-white rounded-full px-4 py-2" href="/send">Send</a>
            <a className="border border-blue-500 text-blue-500 rounded-full px-4 py-2" href="/payments/request">Request</a>
          </div>
          <div className="space-y-4">
            <TransactionCard sender="Alice" receiver="@charlie.eth" amount="20 USDC" memo="Dinner" />
            <TransactionCard sender="Bob" receiver="You" amount="50 USDC" memo="Tickets" />
          </div>
        </section>
        <Footer />
      </main>
    </AuthGuard>
  );
}


