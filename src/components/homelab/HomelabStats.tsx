import type { HomelabSnapshot } from "@/lib/homelab";

/** One compact line of the homelab's last-24-hours counts. */
export default function HomelabStats({ stats }: { stats: HomelabSnapshot["stats_24h"] }) {
  const items = [
    [stats.messages, "messages"],
    [stats.model_calls, "model calls"],
    [stats.tool_calls, "tool calls"],
    [stats.jobs, "worker jobs"],
    [stats.automation_runs, "automation runs"],
  ] as const;
  return (
    <p className="mb-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-neutral-400">
      <span className="text-neutral-500">Last 24 h</span>
      {items.map(([n, label]) => (
        <span key={label}>
          <span className="text-neutral-100">{n.toLocaleString()}</span> {label}
        </span>
      ))}
    </p>
  );
}
