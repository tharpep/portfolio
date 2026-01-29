import Link from "next/link";
import { getProjectsByCategory, type Project, type ProjectCategory } from "@/lib/getProjects";
import type { Metadata } from "next";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Projects – Pryce Tharpe",
  description: "Portfolio projects across data, AI, creative tech, and research.",
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  // Subtle alternating background patterns
  const bgPattern = index % 2 === 0
    ? 'bg-gradient-to-br from-neutral-800/90 to-neutral-900/50'
    : 'bg-gradient-to-br from-neutral-900/50 to-neutral-800/90';

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group block h-full flex flex-col rounded-xl border border-neutral-700 ${bgPattern} p-4 md:p-6 hover:shadow-xl hover:shadow-cyan-400/20 hover:-translate-y-2 hover:scale-[1.02] transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform hover:border-cyan-500/50`}
      prefetch={false}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-bold text-lg md:text-xl font-mono tracking-wide text-white group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <div className="hidden md:flex items-center gap-1 text-xs text-emerald-400 font-medium flex-shrink-0 ml-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          {project.status === 'completed' ? 'Deployed' : 'In Progress'}
        </div>
      </div>

      <p className="hidden md:block text-neutral-300 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
        {project.description}
      </p>

      <div className="hidden md:flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 text-xs font-medium text-neutral-400">
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs md:text-sm text-neutral-400 font-mono">{project.timeline}</span>
        <div className="hidden md:flex items-center text-cyan-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300 ease-out">
          View Details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M7 17l10-10M17 7H7v10"/>
          </svg>
        </div>
      </div>
    </Link>
  );
}

function CategorySection({ category }: { category: ProjectCategory }) {
  // Category-specific accent colors
  const accentColors: Record<string, { border: string; text: string; bg: string }> = {
    'ai-ml': {
      border: 'border-l-cyan-500',
      text: 'text-cyan-300',
      bg: 'bg-gradient-to-r from-cyan-500/5 to-transparent'
    },
    'data-analytics': {
      border: 'border-l-blue-500',
      text: 'text-blue-300',
      bg: 'bg-gradient-to-r from-blue-500/5 to-transparent'
    },
    'devops-cloud': {
      border: 'border-l-purple-500',
      text: 'text-purple-300',
      bg: 'bg-gradient-to-r from-purple-500/5 to-transparent'
    },
    'full-stack': {
      border: 'border-l-emerald-500',
      text: 'text-emerald-300',
      bg: 'bg-gradient-to-r from-emerald-500/5 to-transparent'
    },
    'hardware-embedded': {
      border: 'border-l-orange-500',
      text: 'text-orange-300',
      bg: 'bg-gradient-to-r from-orange-500/5 to-transparent'
    }
  };

  const colors = accentColors[category.id] || accentColors['ai-ml'];

  return (
    <section className="mb-20">
      <ScrollFadeIn>
        <div className={`max-w-6xl mx-auto pt-6 pb-8 border-l-4 pl-6 ${colors.border} ${colors.bg}`}>
          <div className="mb-8">
            <h2 className={`text-3xl font-bold font-mono tracking-wider mb-3 ${colors.text}`}>
              {category.name}
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
              {category.description}
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-2 items-stretch">
            {category.projects.map((project, index) => (
              <ScrollFadeIn key={project.slug} delay={index * 100} className="h-full">
                <ProjectCard project={project} index={index} />
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
            <h1 className="text-5xl font-bold font-mono tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400/90 to-blue-400/90 leading-[1.2]">
              Projects
            </h1>
          </div>
          <p className="text-xl text-neutral-300 leading-relaxed max-w-4xl mx-auto">
            Projects spanning data pipelines, AI systems, full-stack development, and research.
            From embedded systems to cloud automation, these reflect what I&apos;ve built and learned.
          </p>
        </section>

        {/* Subtle Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto mb-16"></div>
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
