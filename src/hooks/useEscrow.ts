"use client";

import { useWriteContract } from "wagmi";
import { EscrowABI } from "@/lib/abi/Escrow";
import { C, toWei } from "@/lib/chain";
import { getDevBypass } from "@/lib/dev";

type CreateArgs = {
  counterparty: `0x${string}`;
  token: `0x${string}`;
  amount: string;   // human (e.g., "12.34")
  deadline: number; // unix seconds
};

type CreateResult = {
  hash: `0x${string}`;
  escrowId: `0x${string}`;
};

export function useEscrowWrite() {
  const write = useWriteContract();

  async function create(args: CreateArgs): Promise<CreateResult> {
    const { counterparty, token, amount, deadline } = args;

    // Dev bypass sim: return stable placeholders
    if (getDevBypass()) {
      const escrowId = `0x${"deadbeef".repeat(8)}` as `0x${string}`;
      return { hash: "0xdev" as const, escrowId };
    }

    // USDC uses 6 decimals
    const wei = toWei(amount, 6); // bigint
    const hash = await write.writeContractAsync({
      address: C().ESCROW as `0x${string}`,
      abi: EscrowABI,
      functionName: "createEscrow",
      args: [counterparty, token, wei, BigInt(deadline)],
    });

    // TODO: parse escrowId from logs if your contract emits it
    const escrowId = `0x${"facefeed".repeat(8)}` as `0x${string}`;
    return { hash, escrowId };
  }

  return {
    create,
    writing: write.isPending ?? false,
  };
}

