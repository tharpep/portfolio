import Link from "next/link";          // ← one import, at the top

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-16 px-6 pb-24 sm:gap-20 sm:px-10">
      {/* ─────────── Hero ─────────── */}
      <section className="flex flex-col items-center text-center gap-6 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hey, I’m Pryce 👋
        </h1>

        <p className="text-muted-foreground leading-relaxed">
          Senior CS student at Purdue &amp; Cloud/DevOps intern at Mesh Systems.
          This site showcases my engineering projects, code write-ups, and
          occasional photography.
        </p>

        <Link
          href="/#projects"
          className="mt-4 rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors"
        >
          View my work
        </Link>
      </section>

      {/* ─────────── Quick links (cards) ─────────── */}
      <section
        id="projects"
        className="grid w-full max-w-4xl gap-6 sm:grid-cols-3"
      >
        <Card
          title="Engineering"
          href="/projects"
          emoji="🔧"
          desc="Hardware + IoT builds and system-level write-ups."
        />
        <Card
          title="Coding"
          href="/projects?tag=code"
          emoji="💻"
          desc="C#/TypeScript repos, DevOps scripts, CLI toys."
        />
        <Card
          title="Photography"
          href="/photography"
          emoji="📷"
          desc="Landscapes & street-photo sets."
        />
      </section>
    </main>
  );
}

/* ─────────────────────────────── */
type CardProps = {
  title: string;
  href: string;
  emoji: string;
  desc: string;
};

function Card({ title, href, emoji, desc }: CardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-2 rounded-xl border border-neutral-200 p-6 text-center shadow-sm transition hover:-translate-y-[2px] hover:shadow-md dark:border-neutral-800"
    >
      <span className="text-4xl">{emoji}</span>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </Link>
  );
}
