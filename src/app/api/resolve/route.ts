import { NextResponse } from "next/server";
import { resolveAny } from "@/lib/ens";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";
  const addr = await resolveAny(q);
  return NextResponse.json({ ok: true, input: q, address: addr });
}
