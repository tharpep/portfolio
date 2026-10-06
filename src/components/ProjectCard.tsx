import Link from "next/link";
import { projectStatusLabel, type Project } from "@/lib/getProjects";
import { formatDateRange } from "@/lib/dates";
import { text } from "@/lib/typography";
import ProjectLinks from "./ProjectLinks";

/**
 * The one project card, used on the home page and /projects. Every card has the
 * same slots in the same order at every screen width:
 *   title → dates · status → description (3 lines, reserved) → stack (1 line) → links
 * so the layout doesn't shift with content length.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const stack = project.technologies.slice(0, 3).join(" · ");

  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-neutral-700 bg-neutral-800/40 p-5 md:p-6 transition-[border-color,box-shadow] duration-300 ease-out hover:border-cyan-500/50 hover:shadow-xl focus-within:border-cyan-500/50">
      <h3 className={`${text.cardTitle} transition-colors group-hover:text-cyan-300`}>
        {/* Stretched link: the ::after covers the whole card */}
        <Link
          href={`/projects/${project.slug}`}
          prefetch={false}
          className="after:absolute after:inset-0 after:rounded-xl after:content-['']"
        >
          {project.title}
        </Link>
      </h3>

      <p className={`${text.meta} mt-1`}>
        {formatDateRange(project.dates)} · {projectStatusLabel(project.status)}
      </p>

      {/* Always three lines tall (clamped and reserved) so cards line up */}
      <p className="mt-3 line-clamp-3 min-h-[4.875em] text-sm leading-relaxed text-neutral-300">
        {project.description}
      </p>

      <p className="mt-3 truncate font-mono text-xs text-neutral-300">{stack}</p>

      <div className="mt-auto pt-4">
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
