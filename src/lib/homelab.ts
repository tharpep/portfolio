import sample from "@/data/homelab-sample.json";

/**
 * The homelab's public snapshot, published every minute by Sazed (app/activity/public_map.py)
 * to Upstash Redis and read here with a read-only token. The homelab itself is never reachable
 * from the internet; when it goes down the snapshot stops updating and the page shows it offline.
 * The map's layout, nodes and lines all come from the snapshot (api-gateway/registry/map.yaml),
 * so changing the homelab never needs a portfolio change.
 */

export type HomelabStatus = "up" | "down" | "maintenance" | "unknown";

export interface HomelabNode {
  id: string;
  label: string;
  sub: string | null;
  about: string | null;
  kind: "client" | "homelab" | "external";
  col: number;
  row: number;
  status: HomelabStatus | null;
  services_up: number;
  services_total: number;
}

export interface HomelabEdge {
  from: string;
  to: string;
  quiet: boolean;
  route: "over" | null;
}

export interface HomelabSnapshot {
  version: number;
  generated_at: string;
  sample?: boolean;
  map: {
    layout: { columns: { x: number; w: number }[]; row_height: number; top: number };
    nodes: HomelabNode[];
    edges: HomelabEdge[];
    uptime_7d: number | null;
    generated_at: string;
  };
  traffic_15m: Record<string, number>;
  stats_24h: {
    messages: number;
    model_calls: number;
    tool_calls: number;
    jobs: number;
    prs: number;
    automation_runs: number;
    notifications: number;
  };
}

/** Older than this and the page calls the homelab offline (it pushes every 60 s). */
export const OFFLINE_AFTER_MS = 3 * 60_000;

const KEY = "homelab:map";

/** Read the latest snapshot from Upstash, or the bundled sample when the store isn't set up
 * (local dev, previews before the integration exists). Never throws. */
export async function readSnapshot(): Promise<HomelabSnapshot> {
  // Names from Vercel's Upstash integration (KV_* compatibility names first).
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_READ_ONLY_TOKEN ??
    process.env.UPSTASH_REDIS_REST_READ_ONLY_TOKEN ??
    process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return sample as HomelabSnapshot;
  try {
    const res = await fetch(`${url.replace(/\/$/, "")}/get/${encodeURIComponent(KEY)}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Upstash ${res.status}`);
    const body = (await res.json()) as { result: string | null };
    if (!body.result) return sample as HomelabSnapshot;
    return JSON.parse(body.result) as HomelabSnapshot;
  } catch (err) {
    console.warn("[homelab] snapshot read failed:", err);
    return sample as HomelabSnapshot;
  }
}
