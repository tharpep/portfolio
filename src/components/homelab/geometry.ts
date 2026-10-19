import type { HomelabEdge, HomelabNode, HomelabSnapshot } from "@/lib/homelab";

// Same layout rules as the console's map (sazed-frontend mapGeometry.ts), so both draw the same
// picture from the same data: curves into the next column, drops within a column, and
// `route: over` lines across the top.

export const NODE_H = 48;
export const MAP_W = 680;

type Layout = HomelabSnapshot["map"]["layout"];

export interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

export function boxOf(layout: Layout, n: HomelabNode): Box {
  const col = layout.columns[n.col];
  return { x: col.x, y: layout.top + n.row * layout.row_height, w: col.w, h: NODE_H };
}

export const edgeKey = (e: HomelabEdge) => `${e.from}>${e.to}`;

export function edgePath(layout: Layout, a: Box, b: Box, route: HomelabEdge["route"]): string {
  if (route === "over") {
    const lane = layout.top - 18;
    return `M${a.x + a.w / 2} ${a.y} V${lane} H${b.x + b.w / 2} V${b.y}`;
  }
  const curve = (x1: number, y1: number, x2: number, y2: number) => {
    const m = (x1 + x2) / 2;
    return `M${x1} ${y1} C${m} ${y1} ${m} ${y2} ${x2} ${y2}`;
  };
  if (b.x > a.x + a.w) return curve(a.x + a.w, a.y + a.h / 2, b.x, b.y + b.h / 2);
  if (b.x + b.w < a.x) return curve(a.x, a.y + a.h / 2, b.x + b.w, b.y + b.h / 2);
  const cx = a.x + a.w / 2;
  return b.y > a.y ? `M${cx} ${a.y + a.h} V${b.y}` : `M${cx} ${a.y} V${b.y + b.h}`;
}

export function homelabFrame(layout: Layout, nodes: HomelabNode[]): Box | null {
  const boxes = nodes.filter((n) => n.kind === "homelab").map((n) => boxOf(layout, n));
  if (!boxes.length) return null;
  const x = Math.min(...boxes.map((b) => b.x)) - 10;
  const y = Math.min(...boxes.map((b) => b.y)) - 36;
  const right = Math.max(...boxes.map((b) => b.x + b.w)) + 12;
  const bottom = Math.max(...boxes.map((b) => b.y + b.h)) + 10;
  return { x, y, w: right - x, h: bottom - y };
}

export function mapHeight(layout: Layout, nodes: HomelabNode[]): number {
  const frame = homelabFrame(layout, nodes);
  const bottoms = nodes.map((n) => boxOf(layout, n).y + NODE_H);
  return Math.max(...bottoms, frame ? frame.y + frame.h : 0) + 12;
}

/** Seconds per dash cycle: faster with more traffic, slow for idle lines. */
export function flowSeconds(count: number, quiet: boolean): number {
  if (count === 0) return quiet ? 4 : 6;
  return Math.max(0.6, 2.8 / Math.sqrt(count));
}
