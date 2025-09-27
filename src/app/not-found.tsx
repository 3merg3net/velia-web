// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] grid place-items-center text-center px-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Page not found</h1>
        <p className="text-gray-600 mb-6">The page you’re looking for doesn’t exist.</p>
        <Link href="/" className="bg-blue-500 text-white rounded-full px-6 py-2 inline-block">Go Home</Link>
      </div>
    </main>
  );
}
