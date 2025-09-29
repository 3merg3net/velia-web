import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DashboardClient from "./DashboardClient";
import { Suspense } from "react";

export const dynamic = "force-dynamic"; // avoid stale caches on preview

export default function DashboardPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="max-w-6xl mx-auto flex-1 p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Overview of your activity and quick actions.
        </p>

        <div className="mt-6">
          <Suspense
            fallback={
              <div className="border rounded-2xl p-6 bg-white/70">
                <div className="h-5 w-40 bg-gray-100 rounded mb-3" />
                <div className="h-5 w-64 bg-gray-100 rounded" />
              </div>
            }
          >
            <DashboardClient />
          </Suspense>
        </div>
      </section>
      <Footer />
    </main>
  );
}





