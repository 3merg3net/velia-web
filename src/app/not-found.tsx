import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="text-gray-600 mt-2">The page you’re looking for doesn’t exist.</p>
        <Link href="/" className="btn-primary mt-6 inline-block">Back home</Link>
      </div>
    </main>
  );
}

