import Link from "next/link";
import { getProjectsByCategory, type Project, type ProjectCategory } from "@/lib/getProjects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects – Pryce Tharpe",
  description: "Portfolio projects across data, AI, creative tech, and research.",
};

// Enable static generation for better performance
export const dynamic = 'force-static';

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="px-2 py-1 text-xs font-medium bg-blue-900/30 text-blue-300 rounded-md border border-blue-700/50">
      {tech}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-xl border border-neutral-700 bg-neutral-800 p-6 hover:shadow-xl hover:shadow-cyan-400/20 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 hover:border-cyan-500/50"
      prefetch={false}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-bold text-xl font-mono tracking-wide text-white group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          {project.status === 'completed' ? 'Deployed' : 'In Progress'}
        </div>
      </div>
      
      <p className="text-neutral-300 text-sm leading-relaxed mb-4 line-clamp-3">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 text-xs font-medium text-neutral-400">
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-neutral-400 font-mono">{project.timeline}</span>
        <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
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
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-2">
            {category.name}
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
            {category.description}
          </p>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {category.projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

// Pre-compute categories at build time for better performance
const categories = getProjectsByCategory();

export default function Projects() {
  
  return (
    <main id="main" className="bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12 min-h-screen">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold font-mono tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400/90 to-blue-400/90">
          All Projects
        </h1>
        <p className="text-xl text-neutral-300 leading-relaxed max-w-4xl mx-auto">
          Projects spanning data pipelines, AI systems, full-stack development, and research.
          From embedded systems to cloud automation, these reflect what I've built and learned.
        </p>
      </section>

      {/* Project Categories */}
      <div className="space-y-1">
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
}
