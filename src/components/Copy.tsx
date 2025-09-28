"use client";

export default function Copy({ text }: { text: string }) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(text)}
      className="ml-2 text-blue-600 underline text-xs align-middle"
    >
      copy
    </button>
  );
}
