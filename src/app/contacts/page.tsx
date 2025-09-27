// src/app/contacts/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactsPage() {
  const contacts = [
    { handle: "@alice.eth", note: "Coworker" },
    { handle: "@bob", note: "Gym" },
    { handle: "@charlie.eth", note: "NFT group" },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-xl mx-auto flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Contacts</h1>

        <div className="space-y-3">
          {contacts.map((c) => (
            <div key={c.handle} className="flex items-center justify-between border rounded-xl px-4 py-3">
              <div>
                <p className="font-medium">{c.handle}</p>
                <p className="text-sm text-gray-600">{c.note}</p>
              </div>
              <div className="flex gap-2">
                <a className="bg-blue-500 text-white rounded-full px-4 py-2" href="/send">Send</a>
                <a className="border border-blue-500 text-blue-500 rounded-full px-4 py-2" href="/payments/request">Request</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
