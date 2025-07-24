import Link from "next/link";
import { getProjectsByCategory, type Project, type ProjectCategory } from "@/lib/getProjects";

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
      className="group block rounded-xl border border-neutral-700 bg-neutral-800 p-6 hover:shadow-xl hover:shadow-cyan-400/20 hover:-translate-y-2 transition-all duration-300 hover:border-cyan-500/50"
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
        <div className="text-4xl">{category.icon}</div>
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

export default function Projects() {
  const categories = getProjectsByCategory();
  
  return (
    <main className="bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12 min-h-screen">
                        {/* Hero Section */}
                  <section className="text-center mb-16">
                    <h1 className="text-5xl font-bold font-mono tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                      All Projects
                    </h1>
                    <p className="text-xl text-neutral-300 leading-relaxed max-w-4xl mx-auto">
                      A comprehensive portfolio of innovative solutions spanning data engineering, creative technology, AI, and research.
                      Each project represents a unique intersection of <span className="text-cyan-400 font-semibold">technical excellence</span> and <span className="text-blue-400 font-semibold">creative problem-solving</span>.
                    </p>
                  </section>

      {/* Impact Stats */}
      <section className="grid md:grid-cols-3 gap-6 mb-20">
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-3xl font-bold text-cyan-400 mb-2">$500K+</div>
          <div className="text-neutral-300">Annual Savings Generated</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
          <div className="text-neutral-300">System Uptime SLA</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-3xl font-bold text-blue-400 mb-2">75%</div>
          <div className="text-neutral-300">Performance Improvements</div>
        </div>
      </section>

      {/* Project Categories */}
      <div className="space-y-1">
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </div>

      {/* Contact CTA */}
      <section className="text-center mt-20 p-12 rounded-2xl bg-gradient-to-r from-neutral-800 to-neutral-900 border border-neutral-700">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-4">
          Let's Build Something Amazing
        </h2>
        <p className="text-neutral-300 text-lg mb-6 max-w-2xl mx-auto">
          Interested in collaborating or learning more about these projects? 
          I'm always excited to discuss innovative solutions and technical challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/about"
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-colors"
          >
            Get In Touch
          </Link>
          <Link
            href="/photography"
            className="px-6 py-3 border border-neutral-600 hover:border-neutral-500 text-neutral-300 hover:text-white font-semibold rounded-lg transition-colors"
          >
            View Photography
          </Link>
        </div>
      </section>
    </main>
  );
}
