import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ChangelogPage() {
  const notes = [
    { date: "2025-09-27", items: ["Wallet connect (RainbowKit)", "Dev bypass", "Landing infographic"] },
    { date: "2025-09-26", items: ["Initial scaffold: Dashboard, Send, Escrow, Profile", "Velia.finance assets"] },
  ];
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-3xl mx-auto flex-1 p-6">
        <h1 className="text-3xl font-bold mb-2">Changelog</h1>
        <p className="text-gray-600 mb-6">What’s new in Velia.</p>
        <div className="space-y-6">
          {notes.map(({ date, items }) => (
            <div key={date} className="border rounded-2xl p-5">
              <h3 className="font-semibold">{date}</h3>
              <ul className="list-disc pl-5 text-gray-700 mt-2">{items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
