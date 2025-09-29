"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const nav = [
  { href: "/send", label: "Send" },
  { href: "/escrow", label: "Escrow" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/protocol", label: "Protocol" },
  { href: "/sync", label: "$SYNC" },
  { href: "/developers", label: "Developers" },
  { href: "/press", label: "Press" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="glass gradient-hairline-b sticky top-0 z-40 w-full">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo-full.png"
            alt="Velia.finance"
            width={164}
            height={36}
            priority
          />
        </Link>

        {/* Nav (desktop) */}
        <nav className="hidden md:flex items-center gap-5">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  active
                    ? "text-gray-900 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions (always visible) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Buy Crypto */}
          <Link
            href="/onramp/moonpay"
            className="btn-outline hidden sm:inline-flex"
          >
            Buy Crypto
          </Link>

          {/* Wallet connect */}
          <div className="min-w-[120px] flex justify-end">
            <ConnectButton label="Connect" showBalance={false} chainStatus="icon" />
          </div>
        </div>
      </div>

      {/* Mobile secondary row */}
      <div className="md:hidden border-t bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between gap-2">
          <div className="flex gap-4 overflow-x-auto no-scrollbar">
            {nav.slice(0, 4).map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm py-1 ${
                    active ? "text-gray-900 font-medium" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/onramp/moonpay"
              className="btn-outline px-3 py-1 text-sm"
            >
              Buy
            </Link>
            <ConnectButton label="Connect" showBalance={false} chainStatus="icon" />
          </div>
        </div>
      </div>
    </header>
  );
}







