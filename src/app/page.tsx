import Link from "next/link";

export default function About() {
  return (
    <main className="flex flex-col gap-10 bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12">
      {/* ─────────── Intro ─────────── */}
      <section className="w-full rounded-xl border border-neutral-700 bg-neutral-800 p-6 sm:p-10 shadow-md">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center mb-4">
          Hey, I’m Pryce 👋
        </h1>
        <p className="text-muted-foreground text-center mb-6">
          Senior computer-engineering student at Purdue, currently rotating
          through the Cloud, Mobile &amp; DevOps teams at Mesh Systems. I love
          building resilient cloud platforms, tinkering with IoT hardware, and
          sharing what I learn along the way.
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-full bg-neutral-100 px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            View Projects
          </Link>
          <Link
            href="/Pryce_Tharpe_Resume.pdf"
            className="rounded-full border border-neutral-400 px-6 py-3 text-sm font-medium transition hover:bg-neutral-700"
          >
            Download CV
          </Link>
        </div>
      </section>

      {/* ─────────── Experience ─────────── */}
      <section className="w-full rounded-xl border border-neutral-700 bg-neutral-800 p-6 sm:p-10 shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center">Experience</h2>
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
              Purdue Union Rack and Roll – Student Service Attendant{" "}
              <span className="font-normal text-muted-foreground">
                · August 2023 – Present
              </span>
            </h3>
            <p className="text-sm text-muted-foreground">
              A student!
            </p>
          </li>
        </ul>
      </section>

      {/* ─────────── Featured Project ─────────── */}
      <section className="w-full rounded-xl border border-neutral-700 bg-neutral-800 p-6 sm:p-10 shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center">
          Current Projects
        </h2>
        <div className="flex flex-col gap-6">
        <ProjectCard
          title="This website!"
          href="/projects/website-portfolio"
          emoji="😊"
          desc="A personal portfolio showcasing my projects, photography, and about me."
        />
        <ProjectCard
          title="Spotify Playlist Manager"
          href="/projects/website-portfolio"
          emoji="🎵"
          desc="A web app to manage and curate Spotify playlists with AI recommendations."
        />
        </div>
      </section>

      {/* ─────────── Photography ─────────── */}
      <section
        className="w-full rounded-xl border border-neutral-700 bg-neutral-800 p-6 sm:p-10 shadow-md"
        id="photography"
      >
        <h2 className="mb-6 text-2xl font-semibold text-center">Photography</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <PhotoPlaceholder />
          <PhotoPlaceholder />
          <PhotoPlaceholder />
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/photography"
            className="inline-block text-sm font-medium underline underline-offset-4 transition-colors hover:text-neutral-300"
          >
            See full gallery →
          </Link>
        </div>
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
      className="flex items-start gap-4 rounded-lg border border-neutral-700 bg-neutral-700 p-4 hover:bg-neutral-600 transition"
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
    <div className="aspect-[4/3] w-full rounded-lg bg-neutral-600" />
  );
}
