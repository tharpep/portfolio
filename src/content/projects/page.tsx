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

export default function Projects() {
  return (
    <main className="flex flex-col gap-10 px-6 pb-24 sm:px-10">
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/projects/${p.slug}`}
              className="block rounded-xl border border-neutral-200 p-6 transition hover:-translate-y-[2px] hover:shadow-md dark:border-neutral-800"
            >
              <h2 className="font-semibold">{p.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
