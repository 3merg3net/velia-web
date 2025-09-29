"use client";

import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  return (
    // removed "sticky top-0 z-40"; header is now static
    <header className="glass gradient-hairline-b w-full">
      {/* Top row */}
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center">
        {/* Left: logo */}
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

        {/* Right: desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/buy" className="btn-outline text-sm">Buy Crypto</Link>
          <ConnectButton label="Connect" showBalance={false} chainStatus="icon" />
        </div>

        {/* Spacer so logo isn't jammed when actions hidden on mobile */}
        <div className="flex-1 md:hidden" />
      </div>

      {/* Mobile actions bar (ONLY mobile) */}
      <div className="md:hidden border-t border-blue-100/50">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <Link href="/buy" className="btn-outline text-sm">Buy Crypto</Link>
          <ConnectButton label="Connect" showBalance={false} chainStatus="icon" />
        </div>
      </div>
    </header>
  );
}








