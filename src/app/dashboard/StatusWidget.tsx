"use client";

import { useAccount, useChainId, useBalance } from "wagmi";
import { useMemo } from "react";
import Link from "next/link";
import { C } from "@/lib/chain"; // ok if tokens missing — widget handles null

function short(addr?: string) {
  return addr ? `${addr.slice(0, 6)}…${addr.slice(-4)}` : "";
}

export default function StatusWidget() {
  const { address, isConnected, chain } = useAccount();
  const chainId = useChainId();

  // Optional token addresses; safe if undefined
  const SYNC = useMemo(() => (C()?.TOKENS?.SYNC as `0x${string}`) || null, [chainId]);
  const USDC = useMemo(() => (C()?.TOKENS?.USDC as `0x${string}`) || null, [chainId]);

  const { data: syncBal } = useBalance({
    address,
    token: SYNC ?? undefined,
    query: { enabled: Boolean(isConnected && SYNC) },
  });

  const { data: usdcBal } = useBalance({
    address,
    token: USDC ?? undefined,
    query: { enabled: Boolean(isConnected && USDC) },
  });

  return (
    <div className="border rounded-2xl p-6 bg-white/70">
      {/* 👇 make it obvious this is rendering */}
      <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
        STATUS WIDGET
      </div>

      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="font-semibold">Connection</h2>
          <p className="text-sm text-gray-600">
            {isConnected ? (
              <>
                {chain?.name ?? "Unknown net"} · {short(address)}
              </>
            ) : (
              "Wallet not connected"
            )}
          </p>
        </div>
        <div
          className={`text-xs px-2 py-1 rounded-full ${
            isConnected
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-gray-50 text-gray-600 border border-gray-200"
          }`}
        >
          {isConnected ? "Connected" : "Disconnected"}
        </div>
      </div>

      {(SYNC || USDC) && isConnected && (
        <div className="mt-4 grid grid-cols-2 gap-3">
          {SYNC && (
            <div className="rounded-lg border p-3">
              <div className="text-xs text-gray-500">$SYNC</div>
              <div className="font-mono">
                {syncBal ? `${syncBal.formatted.slice(0, 12)} ${syncBal.symbol}` : "—"}
              </div>
            </div>
          )}
          {USDC && (
            <div className="rounded-lg border p-3">
              <div className="text-xs text-gray-500">USDC</div>
              <div className="font-mono">
                {usdcBal ? `${usdcBal.formatted.slice(0, 12)} ${usdcBal.symbol}` : "—"}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-3">
        <Link href="/send" className="btn-primary">Send</Link>
        <Link href="/escrow/new" className="btn-outline">New Escrow</Link>
        <Link href="/sync" className="btn-outline">$SYNC</Link>
      </div>
    </div>
  );
}

