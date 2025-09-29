"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    // Static header (not sticky)
    <header className="glass gradient-hairline-b w-full">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center gap-3">
        {/* Left: hamburger (mobile) + logo */}
        <button
          className="md:hidden inline-flex flex-col justify-center items-center gap-1 p-2 rounded-lg hover:bg-blue-50/60 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-5 bg-blue-700 transition ${open ? "translate-y-1 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-blue-700 transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-blue-700 transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
        </button>

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-full.png"
            alt="Velia.finance"
            width={140}
            height={32}
            priority
          />
        </Link>

        {/* Center: desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium mx-auto">
          <Link href="/sync">$SYNC</Link>
          <Link href="/protocol">Protocol</Link>
          <Link href="/send">Send</Link>
          <Link href="/escrow">Escrow</Link>
          
           </nav>

        {/* Right: actions (visible on all sizes) */}
        <div className="flex items-center gap-3 ml-auto">
          <Link
            href="/buy"
            className="btn-outline text-xs md:text-sm px-3 py-2 md:px-5 md:py-2.5"
          >
            Buy Crypto
          </Link>
          <div className="[&>button]:text-xs md:[&>button]:text-sm">
            <ConnectButton label="Connect" showBalance={false} chainStatus="icon" />
          </div>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <div className="md:hidden border-t border-blue-100/60 bg-white/80 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-6 py-3 flex flex-col gap-3 text-sm">
            <Link href="/sync" onClick={() => setOpen(false)} className="py-1">$SYNC</Link>
            <Link href="/protocol" onClick={() => setOpen(false)} className="py-1">Protocol</Link>
            <Link href="/send" onClick={() => setOpen(false)} className="py-1">Send</Link>
            <Link href="/escrow" onClick={() => setOpen(false)} className="py-1">Escrow</Link>
            </div>
        </div>
      )}
    </header>
  );
}









