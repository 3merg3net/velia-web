// File: src/app/api/og/route.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Velia.finance";
  const subtitle = searchParams.get("subtitle") || "Send & Escrow on Base — Powered by $SYNC";

  const width = 1200;
  const height = 630;

  return new ImageResponse(
    (
      <div
        style={{
          width,
          height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 48,
          background: "linear-gradient(180deg,#F6F9FF 0%, #FFFFFF 100%)",
          fontFamily:
            "Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 999,
              background: "#3B82F6",
              display: "grid",
              placeItems: "center",
            }}
          >
            {/* stylized V tick */}
            <div
              style={{
                width: 28,
                height: 18,
                borderBottom: "6px solid white",
                borderLeft: "6px solid white",
                transform: "skewX(-18deg) translateY(6px)",
              }}
            />
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#0f172a" }}>
            Velia.finance
          </div>
        </div>

        {/* Title / subtitle */}
        <div style={{ display: "grid", gap: 16 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#0b1220",
              letterSpacing: -0.5,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 28, color: "#334155", maxWidth: 980 }}>{subtitle}</div>
        </div>

        {/* Footer bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#0f172a",
            borderTop: "1px solid rgba(59,130,246,0.25)",
            paddingTop: 16,
          }}
        >
          <div>Built on Base</div>
          <div style={{ color: "#3B82F6" }}>$SYNC</div>
        </div>
      </div>
    ),
    { width, height }
  );
}

