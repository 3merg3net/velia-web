// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import DevBypass from "@/components/DevBypass";

export default function Header() {
  return (
    <header className="glass gradient-hairline-b sticky top-0 z-40 w-full">
      <div className="mx-auto max-w-6xl px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-full.png" alt="Velia.finance" width={164} height={36} priority />
        </Link>

        <nav className="flex items-center gap-4">
          <div className="flex items-center gap-6 text-gray-700">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/send">Send</Link>
            <Link href="/escrow">Escrow</Link>
            <Link href="/profile">Profile</Link>
          </div>

          {/* Onramp / Buy crypto (visible in public too) */}
          <Link
  href="/onramp"
  className="hidden md:btn-primary md:inline-flex" // <-- uses btn-primary
>
  Buy Crypto
</Link>


          {/* Wallet connect (if you keep it) */}
          <div className="hidden md:block">
            <ConnectButton showBalance={false} chainStatus="icon" />
          </div>

          {/* Dev bypass — visible in dev */}
          <DevBypass />
        </nav>
      </div>
    </header>
  );
}







