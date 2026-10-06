import type { Project } from "@/lib/getProjects";

/**
 * Link row for project cards. Cards make their title link cover the whole
 * card (stretched link); these external links sit above it (relative z-10)
 * so they stay independently clickable. "Details" is plain text: clicking it
 * falls through to the card's own link.
 */
export default function ProjectLinks({ project }: { project: Project }) {
  const external = [
    project.githubUrl && { href: project.githubUrl, label: "Code" },
    project.demoUrl && { href: project.demoUrl, label: "Live" },
    project.paperUrl && { href: project.paperUrl, label: "Paper" },
  ].filter((link): link is { href: string; label: string } => Boolean(link));

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium">
      {/* pointer-events-none: the hover transform would otherwise lift this above the stretched link */}
      <span className="pointer-events-none text-cyan-300 transition-transform duration-300 ease-out group-hover:translate-x-0.5">
        Details →
      </span>
      {external.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 text-neutral-300 hover:text-white hover:underline underline-offset-4"
        >
          {link.label} ↗
        </a>
      ))}
    </div>
  );
}
