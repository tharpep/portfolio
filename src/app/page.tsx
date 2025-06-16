import Link from "next/link";

export default function About() {
  return (
    <main className="flex flex-col gap-16 px-6 pb-24 sm:gap-20 sm:px-10">
      {/* ─────────── Intro ─────────── */}
      <section className="flex flex-col items-start gap-6 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hey, I’m Pryce 👋
        </h1>

        <p className="text-muted-foreground leading-relaxed">
          Senior computer-engineering student at Purdue, currently rotating
          through the Cloud, Mobile &amp; DevOps teams at Mesh Systems. I love
          building resilient cloud platforms, tinkering with IoT hardware, and
          sharing what I learn along the way.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            View Projects
          </Link>
          <Link
            href="/Pryce_Tharpe_Resume.pdf"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            Download CV
          </Link>
        </div>
      </section>

      {/* ─────────── Experience ─────────── */}
      <section className="w-full max-w-3xl">
        <h2 className="mb-6 text-2xl font-semibold">Experience</h2>
        <ul className="flex flex-col gap-6">
          <li>
            <h3 className="font-medium">
              Mesh Systems – Software Engineering Intern{" "}
              <span className="font-normal text-muted-foreground">
                · May 2025 – Present
              </span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Automating Azure infrastructure, building DevOps pipelines, and
              writing cloud APIs. (Full details coming soon.)
            </p>
          </li>

          <li>
            <h3 className="font-medium">
              Purdue University – Undergraduate TA{" "}
              <span className="font-normal text-muted-foreground">
                · Jan 2024 – Dec 2024
              </span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Guided 200 + students through Computer Systems programming labs
              and graded projects. (More highlights to follow.)
            </p>
          </li>

          {/* Add / remove roles as needed */}
        </ul>
      </section>

      {/* ─────────── Featured Project ─────────── */}
      <section className="w-full max-w-3xl">
        <h2 className="mb-6 text-2xl font-semibold">Featured Project</h2>
        <ProjectCard
          title="IoT Energy Monitor"
          href="/projects/iot-energy-monitor"
          emoji="🔋"
          desc="Real-time energy dashboard built with Azure IoT Hub &amp; Next.js."
        />
      </section>

      {/* ─────────── Photography Preview ─────────── */}
      <section className="w-full max-w-5xl" id="photography">
        <h2 className="mb-6 text-2xl font-semibold">Photography</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <PhotoPlaceholder />
          <PhotoPlaceholder />
          <PhotoPlaceholder />
        </div>

        <Link
          href="/photography"
          className="mt-6 inline-block text-sm font-medium underline underline-offset-4 transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
        >
          See full gallery →
        </Link>
      </section>
    </main>
  );
}

/* ─────────── Helpers ─────────── */
type ProjectCardProps = {
  title: string;
  href: string;
  emoji: string;
  desc: string;
};

function ProjectCard({ title, href, emoji, desc }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="flex items-start gap-4 rounded-xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-[2px] hover:shadow-md dark:border-neutral-800"
    >
      <span className="text-3xl">{emoji}</span>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </Link>
  );
}

function PhotoPlaceholder() {
  return (
    <div className="aspect-[4/3] w-full rounded-lg bg-neutral-200 dark:bg-neutral-800" />
  );
}
