// src/app/api/og/route.tsx
import { ImageResponse } from "next/server";

export const runtime = "edge";

const width = 1200;
const height = 630;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Velia.finance";
  const subtitle = searchParams.get("subtitle") || "Send & escrow crypto like Venmo — on Base, powered by $SYNC.";
  const variant = (searchParams.get("variant") || "light").toLowerCase(); // "light" | "dark"

  const isDark = variant === "dark";

  // Optional: load Inter SemiBold for nicer headings (fallbacks if fetch fails)
  const fontData = await fetch(
    "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50.woff2"
  ).then(r => r.arrayBuffer()).catch(() => null);

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
          background: isDark
            ? "linear-gradient(180deg,#0b1220 0%, #0f1b35 100%)"
            : "linear-gradient(180deg,#f6f9ff 0%, #ffffff 100%)",
        }}
      >
        {/* top glow */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: width / 2 - 300,
            width: 600,
            height: 300,
            borderRadius: 999,
            filter: "blur(64px)",
            background: "rgba(59,130,246,0.35)",
          }}
        />
        {/* header */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* logo circle */}
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
            {/* minimal V glyph */}
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
          <div style={{ fontSize: 28, fontWeight: 700, color: isDark ? "#fff" : "#0f172a" }}>
            Velia.finance
          </div>
        </div>

        {/* center copy */}
        <div style={{ display: "grid", gap: 16 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              color: isDark ? "#fff" : "#0b1220",
              letterSpacing: -0.5,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: isDark ? "rgba(255,255,255,0.85)" : "#334155",
              maxWidth: 980,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* footer strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: isDark ? "rgba(255,255,255,0.85)" : "#0f172a",
            borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.18)" : "rgba(59,130,246,0.25)"}`,
            paddingTop: 16,
          }}
        >
          <div>Built on Base · User-Owned by Design</div>
          <div style={{ color: "#3B82F6" }}>$SYNC Rails</div>
        </div>
      </div>
    ),
    {
      width,
      height,
      fonts: fontData
        ? [{ name: "Inter", data: fontData, weight: 600, style: "normal" }]
        : [],
    }
  );
}

