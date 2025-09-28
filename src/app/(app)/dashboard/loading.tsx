export default function Loading() {
  return (
    <section className="max-w-2xl mx-auto p-6 animate-pulse">
      <div className="h-6 w-40 rounded bg-gray-200 mb-4" />
      <div className="space-y-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-16 rounded-xl bg-gray-100" />
        ))}
      </div>
    </section>
  );
}
