"use client";

export default function MiniToc() {
  const items = [
    { href: "#overview", label: "Overview" },
    { href: "#utility", label: "$SYNC Utility" },
    { href: "#contracts", label: "Contracts" },
    { href: "#sdk", label: "SDK" },
    { href: "#security", label: "Security" },
    { href: "#roadmap", label: "Roadmap" },
  ];
  return (
    <nav className="sticky top-16 z-30 bg-white/70 backdrop-blur-sm border rounded-xl p-2 flex gap-2 overflow-x-auto">
      {items.map((i) => (
        <a key={i.href} href={i.href} className="px-3 py-1.5 rounded-full text-sm border hover:bg-blue-50">
          {i.label}
        </a>
      ))}
    </nav>
  );
}

