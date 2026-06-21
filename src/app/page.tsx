import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { getFeaturedProjects, getAllProjects } from "@/lib/getProjects";

const projectCount = getAllProjects().length;

const now = [
  "AI Acceleration Fellow, Eli Lilly",
  "B.S. Computer Engineering, Purdue — May 2026",
  "Building Sazed, a personal AI agent",
];

const stack: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "TypeScript", "C / C++", "SQL", "Bash"] },
  { group: "AI / ML", items: ["Anthropic SDK", "Agentic systems", "RAG", "pgvector", "Prompt engineering"] },
  { group: "Cloud / Infra", items: ["GCP Cloud Run", "AWS ECS", "Azure", "Docker", "CI/CD"] },
  { group: "Frontend", items: ["React 19", "Next.js", "Tailwind", "Tauri", "Vite"] },
];

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <main id="main" className="text-ink">
      {/* ───────── Hero ───────── */}
      <section className="mx-auto max-w-[80rem] px-5 sm:px-8 lg:px-12 pt-14 pb-20 sm:pt-20 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.45fr_1fr] lg:gap-16 lg:items-end">
          <div>
            <p className="label rise" style={{ animationDelay: "0ms" }}>
              Computer Engineer · Purdue ’26
            </p>
            <h1
              className="display rise mt-5 text-[clamp(2.75rem,8vw,5.5rem)] text-ink"
              style={{ animationDelay: "80ms" }}
            >
              Pryce Tharpe
            </h1>
            <div
              className="draw-rule mt-6 h-px w-full max-w-md bg-line-2"
              aria-hidden
            />
            <p
              className="rise mt-6 max-w-2xl text-pretty text-[1.15rem] sm:text-[1.3rem] leading-relaxed text-ink-2"
              style={{ animationDelay: "200ms" }}
            >
              I build AI agents, cloud infrastructure, and the systems that connect
              them. Right now I&apos;m an{" "}
              <span className="text-ink font-medium">AI Acceleration Fellow at Eli Lilly</span>,
              finishing a computer engineering degree and shipping personal systems on the side.
            </p>

            <div
              className="rise mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "320ms" }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-[0.95rem] font-medium text-paper btn-lift"
              >
                View work
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-md border border-line-2 px-6 py-3 text-[0.95rem] font-medium text-ink transition-colors hover:bg-paper-2"
              >
                Resume
              </Link>
              <a
                href="mailto:tharpep_pro@outlook.com"
                className="link-underline px-1 text-[0.95rem] font-medium text-accent-ink"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* NOW readout */}
          <div
            className="rise fade-in self-stretch"
            style={{ animationDelay: "440ms" }}
          >
            <div className="rounded-lg border border-line bg-paper-2/60 p-5 sm:p-6">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-2">
                  Now
                </span>
              </div>
              <ul className="mt-5 space-y-4">
                {now.map((item, i) => (
                  <li key={item} className="flex gap-3 text-[0.95rem] leading-snug text-ink">
                    <span className="font-mono text-xs text-ink-3 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Selected work ───────── */}
      <section className="mx-auto max-w-[80rem] px-5 sm:px-8 lg:px-12 py-6">
        <ScrollFadeIn>
          <div className="flex items-baseline justify-between border-b border-line-2 pb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected work</h2>
            <span className="label hidden sm:block">{projectCount} projects total</span>
          </div>
        </ScrollFadeIn>

        <ol className="mt-2">
          {featured.map((p, i) => (
            <ScrollFadeIn key={p.slug} delay={i * 70}>
              <li>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-b border-line py-7 transition-colors hover:bg-paper-2/70 sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:px-3 sm:-mx-3"
                >
                  <span className="font-mono text-sm text-accent-ink pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-pretty text-[0.95rem] leading-relaxed text-ink-2">
                      {p.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                      {p.technologies.slice(0, 4).map((t) => (
                        <span key={t} className="font-mono text-xs text-ink-3">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="col-start-2 flex items-center gap-3 sm:col-start-3 sm:flex-col sm:items-end sm:gap-2 sm:text-right">
                    <span className="font-mono text-xs text-ink-3 whitespace-nowrap">
                      {p.timeline}
                    </span>
                    <span
                      className="text-accent-ink transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    >
                      →
                    </span>
                  </div>
                </Link>
              </li>
            </ScrollFadeIn>
          ))}
        </ol>

        <ScrollFadeIn>
          <Link
            href="/projects"
            className="link-underline mt-8 inline-flex items-center gap-2 font-medium text-ink"
          >
            All {projectCount} projects
            <span aria-hidden>→</span>
          </Link>
        </ScrollFadeIn>
      </section>

      {/* ───────── Stack ───────── */}
      <section className="mx-auto max-w-[80rem] px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <ScrollFadeIn>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight border-b border-line-2 pb-4">
            What I work with
          </h2>
        </ScrollFadeIn>
        <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((col, i) => (
            <ScrollFadeIn key={col.group} delay={i * 60}>
              <div>
                <h3 className="label mb-4 text-accent-ink">{col.group}</h3>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="text-[0.95rem] text-ink-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* ───────── Beyond code ───────── */}
      <section className="mx-auto max-w-[80rem] px-5 sm:px-8 lg:px-12 pb-16 sm:pb-20">
        <ScrollFadeIn>
          <div className="rounded-lg border border-line p-7 sm:p-10">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  There&apos;s a camera in this too
                </h2>
                <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-ink-2">
                  Away from the terminal I shoot travel and street photography, play
                  guitar and bass, and build PCs. The photography lives on its own
                  site, built with the same hands as this one.
                </p>
              </div>
              <Link
                href="/photography"
                className="inline-flex items-center gap-2 self-start rounded-md border border-line-2 px-6 py-3 font-medium text-ink transition-colors hover:bg-paper-2 md:self-auto"
              >
                See the photography
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </ScrollFadeIn>
      </section>

      {/* ───────── Contact close — the accent moment ───────── */}
      <section className="px-5 sm:px-8 lg:px-12 pb-20">
        <ScrollFadeIn>
          <div className="mx-auto max-w-[80rem] overflow-hidden rounded-xl bg-accent px-7 py-14 text-paper sm:px-12 sm:py-20">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/70">
              Open to full-time software roles
            </p>
            <h2 className="display mt-4 text-[clamp(2.25rem,6vw,4rem)] text-paper">
              Let&apos;s build something.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-paper/85">
              I like talking about AI systems, cloud architecture, and any problem
              that&apos;s genuinely interesting. The fastest way to reach me is email.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="mailto:tharpep_pro@outlook.com"
                className="inline-flex items-center gap-2 rounded-md bg-paper px-6 py-3 font-medium text-ink btn-lift"
              >
                tharpep_pro@outlook.com
              </a>
              <a
                href="https://www.linkedin.com/in/pryce-tharpe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-paper/35 px-6 py-3 font-medium text-paper transition-colors hover:bg-paper/10"
              >
                LinkedIn
              </a>
              <Link
                href="/about"
                className="link-underline px-1 font-medium text-paper"
              >
                More about me
              </Link>
            </div>
          </div>
        </ScrollFadeIn>
      </section>
    </main>
  );
}
