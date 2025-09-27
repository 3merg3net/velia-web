import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ActivityPage() {
  const activity = [
    { user: "Alice", action: "sent", target: "@bob.eth", amount: "15 USDC", memo: "Lunch" },
    { user: "Charlie", action: "requested", target: "You", amount: "25 USDC", memo: "Tickets" },
    { user: "You", action: "funded escrow", target: "#123", amount: "0.2 WETH", memo: "Swap deal" },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-2xl mx-auto flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Activity</h1>
        <div className="space-y-4">
          {activity.map((item, i) => (
            <div key={i} className="p-4 border rounded-xl shadow-sm">
              <p>
                <span className="font-bold">{item.user}</span> {item.action}{" "}
                <span className="text-blue-600">{item.target}</span>
              </p>
              <p className="text-gray-500 text-sm">{item.amount} · {item.memo}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
