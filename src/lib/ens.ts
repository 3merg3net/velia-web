import { createPublicClient, http, isAddress, type Address } from "viem";
import { mainnet } from "viem/chains";

// mainnet client for ENS lookups (works even if dapp is on Base)
const ENS = createPublicClient({ chain: mainnet, transport: http() });

export async function resolveEns(nameOrAddr: string): Promise<Address | null> {
  if (!nameOrAddr) return null;
  const n = nameOrAddr.trim();
  if (isAddress(n)) return n as Address;
  if (n.endsWith(".eth")) {
    try {
      const addr = await ENS.getEnsAddress({ name: n as any });
      return addr ?? null;
    } catch { return null; }
  }
  return null;
}

// simple placeholder for @handle registry (plug your own later)
const LOCAL_HANDLES: Record<string, Address> = {
  "@alice": "0x000000000000000000000000000000000000dEaD",
  "@bob":   "0x000000000000000000000000000000000000bEEF",
};
export async function resolveHandle(raw: string): Promise<Address | null> {
  const n = raw.trim();
  if (isAddress(n)) return n as Address;
  if (n.startsWith("@")) return LOCAL_HANDLES[n.toLowerCase()] ?? null;
  return null;
}

export async function resolveAny(input: string): Promise<Address | null> {
  return (await resolveHandle(input)) ?? (await resolveEns(input));
}
