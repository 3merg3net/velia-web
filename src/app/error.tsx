"use client";
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void; }) {
  return (
    <html>
      <body>
        <main className="min-h-screen grid place-items-center p-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Something went wrong</h1>
            <p className="text-gray-600 mt-2">{error.message || "Unknown error"}</p>
            <button onClick={reset} className="btn-primary mt-6">Try again</button>
          </div>
        </main>
      </body>
    </html>
  );
}
