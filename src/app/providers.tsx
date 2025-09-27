"use client";

import { ReactNode, useMemo } from "react";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, getDefaultConfig, lightTheme } from "@rainbow-me/rainbowkit";
import { base, baseSepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import "@rainbow-me/rainbowkit/styles.css";

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID || "demo";

export default function Providers({ children }: { children: ReactNode }) {
  const config = useMemo(
    () =>
      getDefaultConfig({
        appName: "Velia.finance",
        projectId,
        chains: [base, baseSepolia],
        transports: {
          [base.id]: http(),
          [baseSepolia.id]: http(),
        },
        ssr: true,
      }),
    []
  );

  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={lightTheme({ accentColor: "#3B82F6" })}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

