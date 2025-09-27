"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function InvitePage() {
  const code = "VELIA-8K29";

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      alert("Copied invite code!");
    } catch {
      alert("Copy failed—select and copy manually.");
    }
  }

  function share() {
    const url = typeof window !== "undefined" ? window.location.origin : "";
    const text = `Join me on Velia — use code ${code} ${url}`;
    if (navigator.share) {
      navigator.share({ title: "Velia Invite", text, url });
    } else {
      alert(text);
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-xl mx-auto flex-1 p-6 text-center">
        <h1 className="text-2xl font-bold mb-2">Invite friends</h1>
        <p className="text-gray-600 mb-6">Earn $SYNC when your friends join and send their first payment.</p>

        <div className="border rounded-2xl p-6">
          <p className="text-sm text-gray-600">Your code</p>
          <p className="text-3xl font-bold tracking-wider mt-1">{code}</p>
          <div className="mt-4 flex gap-3 justify-center">
            <button onClick={copy} className="bg-velia-blue text-white rounded-full px-5 py-2">Copy</button>
            <button onClick={share} className="border border-velia-blue text-velia-blue rounded-full px-5 py-2">Share</button>
          </div>
        </div>

        <a className="inline-block mt-6 text-blue-600" href="/rewards">See rewards</a>
      </section>
      <Footer />
    </main>
  );
}

