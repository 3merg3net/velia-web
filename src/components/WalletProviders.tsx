"use client";

import { ReactNode, useMemo } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { RainbowKitProvider, getDefaultConfig, lightTheme } from "@rainbow-me/rainbowkit";
import { base, baseSepolia } from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";

export default function WalletProviders({ children }: { children: ReactNode }) {
  const config = useMemo(() => {
    return createConfig(
      getDefaultConfig({
        appName: "Velia.finance",
        projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || "demo",
        chains: [base, baseSepolia],
        transports: {
          [base.id]: http(),
          [baseSepolia.id]: http(),
        },
        ssr: true,
      })
    );
  }, []);

  return (
    <WagmiProvider config={config}>
      <RainbowKitProvider theme={lightTheme({ accentColor: "#3B82F6" })}>
        {children}
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
