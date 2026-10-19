"use client";

import { useEffect, useState } from "react";

import { OFFLINE_AFTER_MS, type HomelabNode, type HomelabSnapshot, type HomelabStatus } from "@/lib/homelab";
import { MAP_W, boxOf, edgeKey, edgePath, flowSeconds, homelabFrame, mapHeight } from "./geometry";
import styles from "./HomelabMap.module.css";

const POLL_MS = 60_000;

const DOT: Record<HomelabStatus, string> = {
  up: "#10b981",
  down: "#ef4444",
  maintenance: "#f59e0b",
  unknown: "#737373",
};

const STATUS_TEXT: Record<HomelabStatus, string> = {
  up: "Healthy",
  down: "Down",
  maintenance: "Maintenance",
  unknown: "Not checked yet",
};

function ago(ms: number): string {
  const s = Math.max(0, Math.round(ms / 1000));
  if (s < 90) return `${s}s ago`;
  const m = Math.round(s / 60);
  if (m < 90) return `${m} min ago`;
  const h = Math.round(m / 60);
  return h < 48 ? `${h} h ago` : `${Math.round(h / 24)} days ago`;
}

interface Props {
  initial: HomelabSnapshot;
  /** Starts on this node's details (defaults to Sazed). */
  focus?: string;
}

/** The live architecture map: drawn entirely from the homelab's published snapshot, refreshed
 * every minute. Line speed follows the last 15 minutes of traffic. */
export default function HomelabMap({ initial, focus = "sazed" }: Props) {
  const [snap, setSnap] = useState(initial);
  const [now, setNow] = useState(() => Date.now());
  const [selected, setSelected] = useState(focus);

  useEffect(() => {
    const load = () =>
      fetch("/api/homelab", { cache: "no-store" })
        .then((r) => (r.ok ? r.json() : null))
        .then((s: HomelabSnapshot | null) => s && setSnap(s))
        .catch(() => undefined);
    const poll = setInterval(() => !document.hidden && load(), POLL_MS);
    const tick = setInterval(() => setNow(Date.now()), 15_000);
    return () => {
      clearInterval(poll);
      clearInterval(tick);
    };
  }, []);

  const { layout, nodes, edges, uptime_7d } = snap.map;
  const age = now - Date.parse(snap.generated_at);
  const offline = !snap.sample && age > OFFLINE_AFTER_MS;
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n])) as Record<string, HomelabNode>;
  const frame = homelabFrame(layout, nodes);
  const height = mapHeight(layout, nodes);
  const checked = nodes.filter((n) => n.status && n.status !== "unknown");
  const healthy = checked.filter((n) => n.status === "up").length;
  const node = byId[selected] ?? nodes[0];

  const state = offline
    ? { label: `Offline · last seen ${ago(age)}`, color: DOT.down, pulse: false }
    : snap.sample
      ? { label: "Sample data", color: DOT.unknown, pulse: false }
      : { label: `Live · updated ${ago(age)}`, color: DOT.up, pulse: true };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-neutral-400">
        <span className="flex items-center gap-1.5 text-neutral-200">
          <span
            className={`inline-block size-2 rounded-full ${state.pulse ? styles.pulse : ""}`}
            style={{ background: state.color }}
            aria-hidden="true"
          />
          {state.label}
        </span>
        {!offline && (
          <span className={healthy < checked.length ? "text-red-400" : undefined}>
            {healthy} of {checked.length} healthy
          </span>
        )}
        {uptime_7d != null && <span>{uptime_7d.toFixed(2)}% uptime, 7 days</span>}
        <span className="sm:ml-auto">Line speed = live traffic</span>
      </div>

      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <svg
          viewBox={`0 0 ${MAP_W} ${height}`}
          className={`w-full min-w-[620px] ${offline ? styles.offline : ""}`}
          role="img"
          aria-label="Architecture map of the homelab with live health and traffic"
        >
          <defs>
            <marker id="hl-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>
          {frame && (
            <>
              <rect x={frame.x} y={frame.y} width={frame.w} height={frame.h} rx={16} fill="none" stroke="#404040" strokeWidth={0.75} strokeDasharray="4 4" />
              <text x={frame.x + 14} y={frame.y + 18} fontSize={12} fill="#737373" fontFamily="var(--font-geist-mono), monospace">
                Homelab · Proxmox · private network
              </text>
            </>
          )}

          {edges.map((e) => {
            const a = byId[e.from];
            const b = byId[e.to];
            if (!a || !b) return null;
            const d = edgePath(layout, boxOf(layout, a), boxOf(layout, b), e.route);
            const count = snap.traffic_15m[edgeKey(e)] ?? 0;
            const down = a.status === "down" || b.status === "down";
            const external = a.kind === "external" || b.kind === "external";
            const color = down ? DOT.down : external ? "#737373" : "#22d3ee";
            return (
              <g key={edgeKey(e)}>
                <path d={d} fill="none" stroke="#3f3f46" strokeWidth={0.75} markerEnd="url(#hl-arrow)" />
                <path
                  d={d}
                  className={styles.flow}
                  stroke={color}
                  strokeWidth={1.5}
                  opacity={offline ? 0.3 : count > 0 || down ? 1 : 0.4}
                  style={{ ["--dur" as string]: `${flowSeconds(offline ? 0 : count, e.quiet)}s` }}
                />
              </g>
            );
          })}

          {nodes.map((n) => {
            const b = boxOf(layout, n);
            const status = offline ? "unknown" : n.status;
            return (
              <g
                key={n.id}
                className={`${styles.node} ${n.kind === "homelab" ? styles.homelab : styles.plain} ${selected === n.id ? styles.selected : ""}`}
                onClick={() => setSelected(n.id)}
                onKeyDown={(ev) => (ev.key === "Enter" || ev.key === " ") && setSelected(n.id)}
                role="button"
                tabIndex={0}
                aria-label={`${n.label}${status ? `, ${STATUS_TEXT[status].toLowerCase()}` : ""}`}
              >
                <rect x={b.x} y={b.y} width={b.w} height={b.h} rx={8} />
                <text className={styles.title} x={b.x + 10} y={b.y + 18} dominantBaseline="central">
                  {n.label}
                </text>
                {n.sub && (
                  <text className={styles.sub} x={b.x + 10} y={b.y + 34} dominantBaseline="central">
                    {n.sub}
                  </text>
                )}
                {status && (
                  <circle
                    cx={b.x + b.w - 10}
                    cy={b.y + 12}
                    r={4}
                    className={status === "down" ? styles.pulse : undefined}
                    fill={status === "unknown" ? "none" : DOT[status]}
                    stroke={status === "unknown" ? DOT.unknown : "none"}
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {node && (
        <div className="rounded-lg border border-neutral-800 bg-neutral-900/60 px-4 py-3">
          <div className="flex flex-wrap items-baseline gap-x-3">
            <span className="font-semibold text-white">{node.label}</span>
            {node.status && !offline && (
              <span className="font-mono text-xs" style={{ color: DOT[node.status] }}>
                {STATUS_TEXT[node.status]}
              </span>
            )}
            {node.sub && <span className="font-mono text-xs text-neutral-400">{node.sub}</span>}
          </div>
          {node.about && <p className="mt-1 text-sm leading-relaxed text-neutral-300">{node.about}</p>}
          {node.services_total > 1 && (
            <p className="mt-1 font-mono text-xs text-neutral-400">
              {node.services_up} of {node.services_total} services up
            </p>
          )}
        </div>
      )}
    </div>
  );
}
