import Link from "next/link";
import { getProjectsByCategory, type Project, type ProjectCategory } from "@/lib/getProjects";
import type { Metadata } from "next";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import ProjectLinks from "@/components/ProjectLinks";

export const metadata: Metadata = {
  title: "Projects – Pryce Tharpe",
  description: "Portfolio projects across data, AI, creative tech, and research.",
  alternates: { canonical: '/projects' },
};

// Enable static generation for better performance
export const dynamic = 'force-static';

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="px-2 py-1 text-xs font-medium bg-blue-900/30 text-blue-300 rounded-xl border border-blue-700/50">
      {tech}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative h-full flex flex-col rounded-xl border border-neutral-700 bg-neutral-800/50 p-4 md:p-6 hover:shadow-xl hover:border-cyan-500/50 focus-within:border-cyan-500/50 transition-[box-shadow,border-color] duration-300 ease-out">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-bold text-lg md:text-xl font-mono tracking-wide text-white group-hover:text-cyan-300 transition-colors">
          {/* Stretched link: the ::after covers the whole card */}
          <Link
            href={`/projects/${project.slug}`}
            prefetch={false}
            className="after:absolute after:inset-0 after:rounded-xl after:content-['']"
          >
            {project.title}
          </Link>
        </h3>
        <div className="hidden md:flex items-center gap-1 text-xs text-emerald-400 font-medium flex-shrink-0 ml-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          {project.status === 'completed' ? 'Deployed' : 'In Progress'}
        </div>
      </div>

      <p className="block text-neutral-300 text-sm leading-relaxed mb-4 line-clamp-2 md:line-clamp-3 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 text-xs font-medium text-neutral-300">
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 mt-auto">
        <span className="text-xs md:text-sm text-neutral-300 font-mono">{project.timeline}</span>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function CategorySection({ category }: { category: ProjectCategory }) {
  // Category-specific heading colors
  const headingColors: Record<string, string> = {
    'ai-ml': 'text-cyan-300',
    'data-analytics': 'text-blue-300',
    'devops-cloud': 'text-purple-300',
    'full-stack': 'text-emerald-300',
    'hardware-embedded': 'text-orange-300',
  };

  const headingColor = headingColors[category.id] || headingColors['ai-ml'];

  return (
    <section className="mb-20">
      <ScrollFadeIn>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className={`text-3xl font-bold font-mono tracking-wider mb-3 ${headingColor}`}>
              {category.name}
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl">
              {category.description}
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-2 items-stretch">
            {category.projects.map((project, index) => (
              <ScrollFadeIn key={project.slug} delay={index * 100} className="h-full">
                <ProjectCard project={project} />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
}

// Pre-compute categories at build time for better performance
const categories = getProjectsByCategory();

export default function Projects() {
  
  return (
    <main id="main" className="bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12 min-h-screen overflow-visible">
      <ScrollFadeIn>
        {/* Hero Section */}
        <section className="text-center mb-16 overflow-visible">
          <div className="inline-block py-3 overflow-visible">
            <h1 className="text-5xl font-bold font-mono tracking-wider mb-6 text-white leading-[1.2]">
              Projects
            </h1>
          </div>
          <p className="text-xl text-neutral-300 leading-relaxed max-w-4xl mx-auto">
            Projects spanning data pipelines, AI systems, full-stack development, and research.
            From embedded systems to cloud automation, these reflect what I&apos;ve built and learned.
          </p>
        </section>

      </ScrollFadeIn>

      {/* Project Categories */}
      <div className="space-y-1">
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
}
