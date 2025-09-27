import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const url = new URL(req.url);
  const next = url.searchParams.get("next") || "/dashboard";

  const res = NextResponse.json({ ok: true, next });
  // Set a simple auth cookie for demo; replace with real wallet/session later
  res.cookies.set("velia-auth", "1", { httpOnly: true, path: "/", maxAge: 60 * 60 * 24 * 7 });
  return res;
}
