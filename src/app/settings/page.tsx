// src/app/settings/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SettingsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-2xl mx-auto flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <div className="border rounded-2xl p-5 mb-6">
          <h3 className="font-semibold mb-2">Notifications</h3>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <input id="notif" type="checkbox" className="h-4 w-4" defaultChecked />
            <label htmlFor="notif">Enable transaction alerts</label>
          </div>
        </div>

        <div className="border rounded-2xl p-5 mb-6">
          <h3 className="font-semibold mb-2">Privacy</h3>
          <p className="text-gray-600 text-sm">Control how your handle and transactions appear.</p>
          <div className="mt-3 flex gap-3">
            <button className="border border-blue-500 text-blue-500 rounded-full px-5 py-2">Handle Visibility</button>
            <button className="border border-gray-300 text-gray-700 rounded-full px-5 py-2">Export Data</button>
          </div>
        </div>

        <div className="border rounded-2xl p-5">
          <h3 className="font-semibold mb-2">Danger Zone</h3>
          <button className="border border-red-500 text-red-600 rounded-full px-5 py-2">Disconnect Wallet</button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
