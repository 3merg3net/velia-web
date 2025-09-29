"use client";

import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  return (
    // static header (not sticky)
    <header className="glass gradient-hairline-b w-full">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center gap-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-full.png"
            alt="Velia.finance"
            width={140}
            height={32}
            priority
          />
        </Link>

        {/* Center nav: desktop only */}
        <nav className="hidden md:flex gap-6 text-sm font-medium mx-auto">
          <Link href="/send">Send</Link>
          <Link href="/escrow">Escrow</Link>
          <Link href="/sync">$SYNC</Link>
          <Link href="/protocol">Protocol</Link>
        </nav>

        {/* Actions: visible on ALL sizes, right-aligned */}
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
    </header>
  );
}








