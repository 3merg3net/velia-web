import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-white/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Velia logo"
              width={80}
              height={80}
              className="rounded"
            />
            <span className="font-semibold text-lg">Velia.finance</span>
          </Link>
          <p className="text-sm text-gray-600 mt-3">
            Retail-simple payments & escrow, crypto-native underneath.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link href="/send">Send</Link></li>
            <li><Link href="/escrow">Escrow</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/protocol">Protocol</Link></li>
          </ul>
        </div>

        {/* Token */}
        <div>
          <h3 className="font-semibold mb-3">$SYNC</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link href="/sync">Overview</Link></li>
            <li><Link href="/sync/faq">FAQ</Link></li>
            <li><Link href="/sync/buy">Get $SYNC</Link></li>
            <li><a href="/protocol#tiers">Fee Tiers</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link href="/developers">Developers</Link></li>
            <li><Link href="/press">Press Kit</Link></li>
            <li><Link href="/legal/terms">Terms</Link></li>
            <li><Link href="/legal/privacy">Privacy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t mt-8 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Velia.finance — Built on Base, powered by $SYNC
      </div>
    </footer>
  );
}



