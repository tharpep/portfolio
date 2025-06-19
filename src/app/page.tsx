import Link from "next/link";

export default function About() {
  return (
    <main className="flex flex-col gap-10 bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12">
      {/* ─────────── Intro ─────────── */}
      <section className="w-full rounded-xl border border-neutral-700 bg-neutral-800 p-6 sm:p-10 shadow-md mb-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center mb-4">
          Hey, I'm Pryce 👋
        </h1>
        <p className="text-muted-foreground text-center mb-6">
          Senior computer-engineering student at Purdue, currently rotating
          through the Cloud, Mobile &amp; DevOps teams at Mesh Systems. I love
          building resilient cloud platforms, tinkering with IoT hardware, and
          sharing what I learn along the way.
        </p>
        <div className="flex justify-between gap-6 w-full max-w-md mx-auto">
          <Link
            href="/projects"
            className="flex-1 min-w-[140px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-3 text-sm font-medium text-white transition shadow-sm hover:shadow-blue-400/40 hover:shadow-lg hover:brightness-105 text-center"
          >
            View Projects
          </Link>
          <Link
            href="/Pryce_Tharpe_Resume.pdf"
            className="flex-1 min-w-[140px] rounded-full border border-neutral-400 px-8 py-3 text-sm font-medium transition hover:bg-neutral-700 hover:shadow-cyan-400/40 hover:shadow-lg text-center flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v11m0 0-3.25-3.25M12 15.5l3.25-3.25M4.75 19.25h14.5" />
            </svg>
            Download CV
          </Link>
        </div>
      </section>

      {/* ─────────── Featured Project ─────────── */}
      <section className="w-full rounded-xl border border-neutral-700 bg-neutral-800 p-6 sm:p-10 shadow-md mb-6">
        <h2 className="mb-6 text-2xl font-semibold text-center font-mono tracking-wider drop-shadow-sm">
          Current Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
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

      {/* ─────────── Experience ─────────── */}
      <section className="w-full rounded-xl border border-neutral-700 bg-neutral-800 p-6 sm:p-10 shadow-md mb-6">
        <h2 className="mb-6 text-2xl font-semibold text-center font-mono tracking-wider drop-shadow-sm">Experience</h2>
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
              Worked at the front counter, usually as part of a team of 1 or 2. Responsible for opening and closing the facility.
            </p>
          </li>
          <li>
            <h3 className="font-medium">
              Royal Pin Woodland – Counter Control
              <span className="font-normal text-muted-foreground">
                · August 2021 – August 2024
              </span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Served as the first register at the front counter, provided lane service, and frequently trained new employees (including supervisors).
            </p>
          </li>
        </ul>
      </section>

      {/* ─────────── Photography ─────────── */}
      <section
        className="w-full rounded-xl border border-neutral-700 bg-neutral-800 p-6 sm:p-10 shadow-md"
        id="photography"
      >
        <h2 className="mb-6 text-2xl font-semibold text-center font-mono tracking-wider drop-shadow-sm">Photography</h2>
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
      className="flex items-start gap-4 rounded-lg border border-neutral-700 bg-neutral-700 p-4 hover:bg-neutral-600 transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-400/30"
    >
      <span className="text-3xl">{emoji}</span>
      <div className="flex-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
      <MiniPhotoPlaceholder />
    </Link>
  );
}

function MiniPhotoPlaceholder() {
  return (
    <div className="w-24 h-24 rounded-md bg-neutral-600 ml-2 flex-shrink-0" />
  );
}

function PhotoPlaceholder() {
  return (
    <div className="aspect-[4/3] w-full rounded-lg bg-neutral-600" />
  );
}
