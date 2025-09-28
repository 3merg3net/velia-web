"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { getDevBypass, setDevBypass } from "@/lib/dev";

export default function SettingsPage() {
  const [bypass, setBypass] = useState(false);

  useEffect(() => {
    setBypass(getDevBypass());
    const handler = () => setBypass(getDevBypass());
    window.addEventListener("velia:dev-bypass", handler);
    return () => window.removeEventListener("velia:dev-bypass", handler);
  }, []);

  function toggleBypass() {
    setDevBypass(!bypass);
    setBypass(!bypass);
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-3xl mx-auto flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <div className="border rounded-2xl p-6 bg-white/70 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Dev Bypass</p>
              <p className="text-sm text-gray-600">Use the app without connecting a wallet (simulated sends & escrow).</p>
            </div>
            <button onClick={toggleBypass} className={`px-4 py-2 rounded-full ${bypass ? "bg-green-600 text-white" : "bg-gray-200"}`}>
              {bypass ? "ON" : "OFF"}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Theme</p>
              <p className="text-sm text-gray-600">Light / Dark (coming soon)</p>
            </div>
            <button className="btn-outline">System</button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

