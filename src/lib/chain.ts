import { getContracts, CHAINS } from "@/lib/contracts";
import { createPublicClient, formatUnits, parseUnits, http, Hex } from "viem";
import { base, baseSepolia } from "wagmi/chains";
import type { Address } from "viem";

export const PUBLIC = createPublicClient({
  chain: (process.env.NEXT_PUBLIC_CHAIN === "base" ? base : baseSepolia),
  transport: http(), // use your RPC if desired
});

// utils
export const toWei = (v: string, decimals = 6) => parseUnits(v, decimals);
export const fromWei = (v: bigint, decimals = 6) => Number(formatUnits(v, decimals));

export const getChainId = () =>
  process.env.NEXT_PUBLIC_CHAIN === "base" ? CHAINS.base : CHAINS.baseSepolia;

export const C = () => getContracts(getChainId());
export type { Address, Hex };
