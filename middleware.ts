// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APP_PATHS = [
  "/dashboard",
  "/send",
  "/escrow",
  "/profile",
  "/activity",
  "/rewards",
  "/contacts",
  "/invite",
  "/payments",
  "/staking",
  "/transactions",
  "/protocol",
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // public files & paths
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.startsWith("/public")) {
    return NextResponse.next();
  }

  // require auth for app paths
  const needsAuth = APP_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"));
  if (needsAuth) {
    const authed = req.cookies.get("velia-auth")?.value === "1";
    if (!authed) {
      const loginUrl = new URL("/login", req.nextUrl);
      loginUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // protect everything except the public group and assets
    "/((?!_next|api|favicon.ico|icon.png|logo.png|logo-full.png|logo-dark.png|og.png|qr.png|splash.png).*)",
  ],
};
