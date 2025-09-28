"use client";
import { useWriteContract } from "wagmi";
import { RouterABI } from "@/lib/abi/Router";
import { C, toWei } from "@/lib/chain";
import { getDevBypass } from "@/lib/dev";

export function usePaymentRouter() {
  const write = useWriteContract();
  const addr = C().Router as `0x${string}`;

  async function send({ token, to, amount, memo }: {
    token: `0x${string}`, to: `0x${string}`, amount: string, memo: string
  }) {
    if (getDevBypass()) return { hash: "0xdev" as const, txId: `0x${"cafe".repeat(16)}` as const };
    const wei = toWei(amount, 6);
    const hash = await write.writeContractAsync({
      abi: RouterABI, address: addr, functionName: "send", args: [token, to, wei, memo],
    });
    return { hash };
  }
  return { send, writing: write.isPending };
}

