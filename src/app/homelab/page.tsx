import type { Metadata } from "next";

import { Link } from "@/components/PageTransitions";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import HomelabMap from "@/components/homelab/HomelabMap";
import { readSnapshot } from "@/lib/homelab";
import { text } from "@/lib/typography";

export const metadata: Metadata = {
  title: "Homelab – Pryce Tharpe",
  description:
    "The self-hosted homelab behind Sazed, my personal AI agent: a live architecture map, how it deploys itself, and how it stays private.",
  alternates: { canonical: "/homelab" },
};

// The snapshot is re-read at most once a minute; the map then polls for fresher data itself.
export const revalidate = 60;

const SECTIONS = [
  {
    title: "Runs as containers",
    body: "One Proxmox host runs each service in its own LXC container: the agent, the API gateway, the knowledge base, Postgres with pgvector, a sandboxed worker, and the web console behind Caddy.",
  },
  {
    title: "Private by default",
    body: "Everything is reachable only over my Tailscale network. Caddy injects API keys at the edge so no client holds a secret, secrets live in root-only files, and the worker's outbound traffic is allow-listed. This page is fed by a one-way push of a sanitized snapshot, so nothing here can reach back in.",
  },
  {
    title: "Ships itself",
    body: "A push to main deploys through a self-hosted GitHub runner on each container. The worker runs Claude Code and Gemini jobs on demand, and code changes come back as pull requests from a GitHub App bot, with CI, an automatic fix loop for red builds, and a human merge.",
  },
  {
    title: "Watches itself",
    body: "A service registry drives health checks every minute, outage and disk alerts to my phone, and this map. Every action Sazed takes lands in an activity timeline, and a weekly job compares the map with last week's and flags drift.",
  },
];

const REPOS = [
  { name: "sazed", href: "https://github.com/tharpep/sazed" },
  { name: "api-gateway", href: "https://github.com/tharpep/api-gateway" },
  { name: "sazed-worker", href: "https://github.com/tharpep/sazed-worker" },
  { name: "knowledge-base", href: "https://github.com/tharpep/knowledge-base" },
  { name: "sazed-frontend", href: "https://github.com/tharpep/sazed-frontend" },
];

export default async function Homelab() {
  const snapshot = await readSnapshot();
  const s = snapshot.stats_24h;
  const stats = [
    { label: "Messages to Sazed", value: s.messages },
    { label: "Model calls", value: s.model_calls },
    { label: "Tool calls", value: s.tool_calls },
    { label: "Worker jobs", value: s.jobs },
    { label: "Automation runs", value: s.automation_runs },
    { label: "Phone alerts", value: s.notifications },
  ];

  return (
    <main id="main" className="bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12 min-h-screen overflow-visible">
      <div className="max-w-5xl mx-auto">
        <ScrollFadeIn>
          <section className="mb-10">
            <h1 className={`${text.pageTitle} mb-5`}>Homelab</h1>
            <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl">
              Everything behind{" "}
              <Link href="/projects/sazed" className="text-cyan-300 hover:text-cyan-200 underline-offset-4 hover:underline">
                Sazed
              </Link>
              , my personal AI agent, runs on a single server at home, on a private network with nothing
              exposed to the internet. The map below is live: it&apos;s drawn from the homelab&apos;s own
              service registry and updates every minute.
            </p>
          </section>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <section aria-label="Last 24 hours" className="mb-8">
            <h2 className={`${text.meta} mb-3`}>Last 24 hours</h2>
            <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-2.5">
                  <dt className="text-xs text-neutral-400">{stat.label}</dt>
                  <dd className="font-mono text-xl text-white">{stat.value.toLocaleString()}</dd>
                </div>
              ))}
            </dl>
          </section>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <section aria-label="Live architecture map" className="mb-14">
            <HomelabMap initial={snapshot} />
          </section>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <section className="mb-14 grid gap-4 md:grid-cols-2">
            {SECTIONS.map((section) => (
              <div key={section.title} className="rounded-lg border border-neutral-800 p-5">
                <h2 className={`${text.subTitle} mb-2`}>{section.title}</h2>
                <p className="text-neutral-300 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </section>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <section className="mb-10 border-t border-neutral-800 pt-8">
            <h2 className={`${text.subTitle} mb-2`}>Built from data</h2>
            <p className="text-neutral-300 leading-relaxed max-w-3xl">
              The map isn&apos;t drawn by hand. Its boxes, positions and lines come from one data file in the
              gateway&apos;s registry, and the same file drives the map in Sazed&apos;s own console. Adding a
              service to the homelab is one entry there; this page and the console both pick it up within a
              minute.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {REPOS.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${text.tag} hover:border-cyan-500 hover:text-cyan-200 transition-colors`}
                >
                  {repo.name}
                </a>
              ))}
            </div>
          </section>
        </ScrollFadeIn>
      </div>
    </main>
  );
}
