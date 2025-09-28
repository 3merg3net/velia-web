import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    items: [
      { id: "0xabc1", type: "send", from: "you", to: "@alice.eth", amount: "20", token: "USDC", status: "confirmed", memo: "Dinner", time: Date.now() - 3600_000 },
      { id: "0xabc2", type: "escrow", from: "you", to: "@bob", amount: "50", token: "USDC", status: "pending", memo: "Tickets", time: Date.now() - 7200_000 },
    ],
  });
}

