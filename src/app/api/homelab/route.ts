import { readSnapshot } from "@/lib/homelab";

// The live map polls this every minute. Vercel's CDN serves it for 30 s, so visitors never
// read Upstash directly and a busy page costs at most a couple of reads a minute.
export const dynamic = "force-dynamic";

export async function GET() {
  const snapshot = await readSnapshot();
  return Response.json(snapshot, {
    headers: { "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60" },
  });
}
