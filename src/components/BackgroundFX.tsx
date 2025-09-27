"use client";

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none select-none fixed inset-0 -z-10 overflow-hidden">
      {/* Top center glow (deeper) */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-40 h-[44rem] w-[44rem] rounded-full
                      bg-gradient-to-b from-blue-500/30 via-blue-500/16 to-transparent blur-3xl" />
      {/* Top-right tint */}
      <div className="absolute right-[-12rem] -top-24 h-[30rem] w-[30rem] rounded-full
                      bg-gradient-to-bl from-blue-500/22 via-blue-500/12 to-transparent blur-3xl" />
      {/* Bottom-left whisper */}
      <div className="absolute -left-32 bottom-[-12rem] h-[34rem] w-[34rem] rounded-full
                      bg-gradient-to-tr from-violet-500/18 via-violet-500/10 to-transparent blur-3xl" />
    </div>
  );
}

