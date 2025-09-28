import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import LoginClient from "./LoginClient";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-md mx-auto flex-1 p-6">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="text-gray-600 mt-1">Connect your wallet to continue.</p>

        <div className="mt-6 border rounded-2xl p-6 bg-white/70">
          <Suspense fallback={<div className="text-sm text-gray-500">Loading…</div>}>
            <LoginClient />
          </Suspense>
        </div>
      </section>
      <Footer />
    </main>
  );
}
