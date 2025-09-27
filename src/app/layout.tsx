import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import BackgroundFX from "@/components/BackgroundFX";

export const metadata: Metadata = {
  title: "Velia.finance — Send crypto like Venmo",
  description: "Send & escrow crypto on Base. Powered by $SYNC.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="deep">
      <body>
        <Providers>
          <BackgroundFX />
          {children}
        </Providers>
      </body>
    </html>
  );
}




