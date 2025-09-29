import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";
import BackgroundFX from "@/components/BackgroundFX";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import DevBypass from "@/components/DevBypass";

const base =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";



export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: "Velia.finance",
  description: "Send & escrow crypto on Base. Powered by $SYNC.",
  openGraph: {
    title: "Velia.finance — Send crypto like Venmo",
    description: "Send & escrow crypto on Base. Powered by $SYNC.",
    images: ["/api/og?variant=light"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?variant=light"],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="deep">
      <body>
        <Providers>
          <BackgroundFX />
          {children}
           <Toaster position="top-center" richColors />
           <Analytics />
            <DevBypass /> 
        </Providers>
      </body>
    </html>
  );
}






