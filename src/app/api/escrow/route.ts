import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    items: [
      {
        id: "0x" + "deadbeef".repeat(8),
        maker: "0x1111...aaaa",
        taker: "0x2222...bbbb",
        token: "USDC",
        amount: "50.00",
        status: 0,
        deadline: Date.now() + 3 * 24 * 3600_000,
      },
      {
        id: "0x" + "cafe".repeat(16),
        maker: "0x3333...cccc",
        taker: "0x4444...dddd",
        token: "USDC",
        amount: "120.00",
        status: 1,
        deadline: Date.now() - 24 * 3600_000,
      },
    ],
  });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  return NextResponse.json({ ok: true, escrowId: "0x" + "deadbeef".repeat(8), received: body });
}
