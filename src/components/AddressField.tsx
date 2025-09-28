"use client";
import { useEffect, useState } from "react";
import { resolveAny } from "@/lib/ens";
import { isAddress, type Address } from "viem";

export default function AddressField({
  label = "To (@handle / ENS / 0x…)",
  value, onChange, onResolved,
  placeholder = "@alice.eth"
}: {
  label?: string;
  value: string;
  onChange: (v: string) => void;
  onResolved?: (addr: Address | null) => void;
  placeholder?: string;
}) {
  const [resolved, setResolved] = useState<Address | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => { onResolved?.(resolved); }, [resolved, onResolved]);

  async function tryResolve(v: string) {
    setLoading(true);
    const addr = await resolveAny(v);
    setResolved(addr);
    setLoading(false);
  }

  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <div className="relative">
        <input
          value={value}
          onChange={(e)=>onChange(e.target.value)}
          onBlur={()=> value && tryResolve(value)}
          placeholder={placeholder}
          className="w-full border rounded-xl px-4 py-3 pr-28"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs">
          {loading ? <span className="text-gray-500">resolving…</span> :
            resolved ? <span className="text-green-600">resolved</span> :
            value && isAddress(value) ? <span className="text-green-600">address</span> :
            value ? <span className="text-gray-500">unresolved</span> : null}
        </div>
      </div>
      {resolved && (
        <p className="mt-1 font-mono text-xs text-gray-600 break-all">{resolved}</p>
      )}
    </div>
  );
}
