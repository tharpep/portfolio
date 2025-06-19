import Link from "next/link";

const projects = [
  {
    slug: "iot-energy-monitor",
    title: "IoT Energy Monitor",
    desc: "Real-time power-usage tracking using Azure IoT Hub.",
  },
  {
    slug: "mesh-devops-cli",
    title: "Mesh DevOps CLI",
    desc: "Internal tool that scaffolds pipelines and automates release tasks.",
  },
  {
    slug: "campus-drone-photography",
    title: "Campus Drone Photography",
    desc: "Autonomous drone shots stitched into a 3-D campus map.",
  },
  // Add or remove as needed
];

function ProjectCard({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 rounded-xl border border-blue-900/40 bg-neutral-800 p-6 hover:shadow-lg hover:shadow-blue-400/30 hover:-translate-y-1 transition group"
    >
      <div className="flex-1">
        <h2 className="font-semibold text-lg font-mono tracking-wide text-white group-hover:text-cyan-300 transition-colors">{title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      </div>
      <div className="w-16 h-16 rounded-md bg-neutral-700 flex-shrink-0 ml-2 flex items-center justify-center">
        {/* Placeholder image/icon */}
        <svg className="w-8 h-8 text-cyan-400 opacity-60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M4 17l4-4a2 2 0 0 1 2.8 0l2.2 2.2a2 2 0 0 0 2.8 0l4-4" /></svg>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <main className="flex flex-col gap-10 bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12 min-h-screen">
      <section className="w-full rounded-xl border border-neutral-700 bg-neutral-800 p-6 sm:p-10 shadow-md mb-6">
        <h1 className="text-4xl font-bold font-mono tracking-wider drop-shadow-sm text-center mb-8 text-cyan-300">
          Projects
        </h1>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.slug}>
              <ProjectCard title={p.title} desc={p.desc} href={`/projects/${p.slug}`} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
