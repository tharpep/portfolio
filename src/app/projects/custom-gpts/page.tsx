import type { Metadata } from "next";
import Link from "next/link";
import { getProjectBySlug, getNextProject, getPreviousProject } from "@/lib/getProjects";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Custom GPTs – Projects – Pryce Tharpe",
  description: "Custom GPTs for enterprise and personal productivity.",
  alternates: { canonical: "/projects/custom-gpts" },
};

// Enable static generation for better performance
export const dynamic = 'force-static';

// Pre-compute data at build time for better performance
const project = getProjectBySlug("custom-gpts");
const nextProject = getNextProject("custom-gpts");
const prevProject = getPreviousProject("custom-gpts");

export default function CustomGpts() {
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="bg-neutral-900 text-neutral-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12">

        {/* Back Navigation */}
        <nav className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5m7-7l-7 7 7 7"/>
            </svg>
            Back to Projects
          </Link>
        </nav>

        {/* Main Layout: Content + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Main Content - Left Column */}
          <div className="flex-1 lg:max-w-4xl">

            {/* Hero */}
            <div className="mb-12">
              {/* Status and Timeline */}
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 text-xs font-medium bg-emerald-900/30 text-emerald-300 rounded-full border border-emerald-700/50">
                  Enterprise Adopted
                </span>
                <span className="text-sm text-neutral-400 font-mono">{project.timeline}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400/90 via-teal-400/90 to-cyan-400/90">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-neutral-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-medium bg-emerald-900/30 text-emerald-300 rounded-full border border-emerald-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-emerald-500/30 via-emerald-500/10 to-transparent mb-12"></div>

            {/* Architecture Section */}
            <ScrollFadeIn>
              <section className="mb-12">
                <h2 className="text-2xl font-bold font-mono text-emerald-300 mb-4 section-header-accent">Custom GPTs</h2>
                <div className="space-y-4 text-neutral-300 leading-relaxed text-base">
                  <p>
                    Custom GPTs designed for enterprise and personal use, focusing on prompt engineering and user experience.
                    Some were adopted internally by the company, others were not.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
                      <h3 className="text-lg font-bold text-white mb-3">System Prompt Builder</h3>
                      <p className="text-neutral-300 text-sm leading-relaxed">
                        GPT designed to assist users at all skill levels in creating effective system prompts with guidance and best practice recommendations.
                      </p>
                    </div>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
                      <h3 className="text-lg font-bold text-white mb-3">Student Career Archivist</h3>
                      <p className="text-neutral-300 text-sm leading-relaxed">
                        Career documentation assistant that helps organize achievements, extract key accomplishments, and prepare career narratives for applications and interviews.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollFadeIn>

            {/* Key Features Section */}
            <ScrollFadeIn delay={100}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold font-mono text-emerald-300 mb-6 section-header-accent">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">📝</span>
                      <h3 className="font-bold text-white">Prompt Engineering</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Prompt design incorporating context injection, role definition, and output formatting for consistent responses.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">💬</span>
                      <h3 className="font-bold text-white">User Experience Focus</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Conversation flows designed to guide users through complex processes while maintaining engagement and clarity.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">🏢</span>
                      <h3 className="font-bold text-white">Enterprise Integration</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Integration with business workflows and internal processes, designed for professional environments and team collaboration.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">⚡</span>
                      <h3 className="font-bold text-white">Performance Optimization</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Response time optimization through prompt design, token usage minimization, and quality consistency across interaction patterns.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollFadeIn>

            {/* Impact & Results Section */}
            <ScrollFadeIn delay={200}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold font-mono text-emerald-300 mb-4 section-header-accent">Impact & Results</h2>
                <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
                  <p className="text-neutral-300 leading-relaxed text-base mb-6">
                    {project.impact}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4">Key Achievements</h4>
                      <div className="space-y-3">
                        {project.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="text-emerald-400 text-lg mt-1">•</span>
                            <p className="text-neutral-300 text-sm">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4">Technical Highlights</h4>
                      <ul className="space-y-2 text-neutral-300 text-sm">
                        <li>• Advanced prompt engineering techniques</li>
                        <li>• Context injection and role definition</li>
                        <li>• Output formatting for consistency</li>
                        <li>• Token usage optimization</li>
                        <li>• Enterprise workflow integration</li>
                        <li>• User experience optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollFadeIn>

          </div>

          {/* Sidebar - Right Column */}
          <aside className="lg:w-96 lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-xl border border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-6 space-y-8">

              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-bold font-mono text-emerald-300 uppercase tracking-wider mb-3">Tech Stack</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  {project.technologies.map((tech) => (
                    <li key={tech}>• {tech}</li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-neutral-700"></div>

              {/* Key Features */}
              <div>
                <h3 className="text-sm font-bold font-mono text-emerald-300 uppercase tracking-wider mb-3">Key Features</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• Prompt engineering</li>
                  <li>• User experience focus</li>
                  <li>• Enterprise integration</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-neutral-700"></div>

              {/* Achievements */}
              <div>
                <h3 className="text-sm font-bold font-mono text-emerald-300 uppercase tracking-wider mb-3">Achievements</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="text-xs">• {highlight}</li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-neutral-700"></div>

              {/* Links */}
              {project.githubUrl && (
                <>
                  <div>
                    <h3 className="text-sm font-bold font-mono text-emerald-300 uppercase tracking-wider mb-3">Links</h3>
                    <div className="space-y-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-neutral-300 hover:text-emerald-300 transition-colors text-sm"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-neutral-300 hover:text-emerald-300 transition-colors text-sm"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                          </svg>
                          Live Site
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-neutral-700"></div>
                </>
              )}

              {/* Navigation */}
              <div>
                <h3 className="text-sm font-bold font-mono text-emerald-300 uppercase tracking-wider mb-4">Navigate</h3>
                <div className="space-y-3">
                  {prevProject && (
                    <Link
                      href={`/projects/${prevProject.slug}`}
                      prefetch={false}
                      className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-neutral-800/50 transition-colors"
                    >
                      <svg className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M19 12H5m7-7l-7 7 7 7"/>
                      </svg>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-neutral-500 group-hover:text-neutral-400 mb-0.5">Previous</div>
                        <div className="text-sm text-neutral-300 group-hover:text-emerald-300 font-medium leading-snug">{prevProject.title}</div>
                      </div>
                    </Link>
                  )}
                  <Link
                    href="/projects"
                    prefetch={false}
                    className="group flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-neutral-800/50 transition-colors"
                  >
                    <svg className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    <span className="text-sm text-neutral-300 group-hover:text-emerald-300">All Projects</span>
                  </Link>
                  {nextProject && (
                    <Link
                      href={`/projects/${nextProject.slug}`}
                      prefetch={false}
                      className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-neutral-800/50 transition-colors"
                    >
                      <svg className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 12h14m-7-7l7 7-7 7"/>
                      </svg>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-neutral-500 group-hover:text-neutral-400 mb-0.5">Next</div>
                        <div className="text-sm text-neutral-300 group-hover:text-emerald-300 font-medium leading-snug">{nextProject.title}</div>
                      </div>
                    </Link>
                  )}
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
