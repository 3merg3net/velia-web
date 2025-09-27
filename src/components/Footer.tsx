import Link from "next/link";

export default function Footer() {
  return (
    <footer className="glass gradient-hairline-t mt-16">
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <h4 className="font-semibold">Velia.finance</h4>
          <p className="text-sm text-gray-600 mt-2">
            Money that moves like messages. Send & escrow on Base — powered by $SYNC.
          </p>
        </div>
        <div>
          <h5 className="text-sm font-semibold">Product</h5>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/send">Send</Link></li>
            <li><Link href="/escrow">Escrow</Link></li>
            <li><Link href="/staking">Staking</Link></li>
            <li><Link href="/activity">Activity</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold">Company</h5>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/press">Press & Brand</Link></li>
            <li><Link href="/roadmap">Roadmap</Link></li>
            <li><Link href="/changelog">Changelog</Link></li>
            <li><Link href="/support">Support</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold">Developers</h5>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><Link href="/protocol">Protocol ($SYNC)</Link></li>
            <li><span className="opacity-60">SDK (soon)</span></li>
            <li><span className="opacity-60">GitHub (soon)</span></li>
          </ul>
          <h5 className="text-sm font-semibold mt-6">Legal</h5>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><Link href="/legal">Terms & Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="px-6 py-4 border-t border-white/30 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Velia.finance — Powered by $SYNC on Base
      </div>
      <img src="/wave.svg" alt="" className="pointer-events-none select-none w-full max-w-none opacity-70" />

    </footer>
  );
}


