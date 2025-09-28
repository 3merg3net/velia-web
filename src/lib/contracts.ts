export const CHAINS = { base: 8453, baseSepolia: 84532 };

export const CONTRACTS = {
  84532: { // Base Sepolia
    Escrow: "0xE...SEPOLIA_ESCROW",
    Router: "0xR...SEPOLIA_ROUTER",
    USDC:   "0xA...SEPOLIA_USDC",
  },
  8453: {  // Base
    Escrow: "0xE...BASE_ESCROW",
    Router: "0xR...BASE_ROUTER",
    USDC:   "0xA...BASE_USDC",
  },
} as const;

export function getContracts(chainId: number) {
  return (CONTRACTS as any)[chainId];
}

