import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import LoginClient from "./LoginClient";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 via-white to-blue-200 relative overflow-hidden">
      <Header />

      {/* Decorative wave (blue, not black) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-40 text-blue-300/50"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0,192L80,170.7C160,149,320,107,480,128C640,149,800,235,960,234.7C1120,235,1280,149,1360,106.7L1440,64V320H0Z"
          />
        </svg>
      </div>

      {/* Content */}
      <section className="relative flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <h1 className="text-2xl font-bold text-blue-900 text-center">Login</h1>
          <p className="text-gray-600 mt-1 text-center">
            Connect your wallet to continue.
          </p>

          <div className="mt-6 animate-fade-in">
            <Suspense fallback={<div className="text-sm text-gray-500 text-center">Loading…</div>}>
              <LoginClient />
            </Suspense>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

