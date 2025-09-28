// Build an absolute URL using the configured base URL.
// Works in both server and client without touching request headers.
export function absUrl(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
