import type { Metadata } from "next";
import Link from "next/link";
import { getProjectBySlug, getNextProject, getPreviousProject } from "@/lib/getProjects";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Personal AI System – Projects – Pryce Tharpe",
  description: "Personal AI assistant with RAG capabilities and tool integration.",
  alternates: { canonical: "/projects/personal-ai-system" },
};

// Enable static generation for better performance
export const dynamic = 'force-static';

// Pre-compute data at build time for better performance
const project = getProjectBySlug("personal-ai-system");
const nextProject = getNextProject("personal-ai-system");
const prevProject = getPreviousProject("personal-ai-system");

export default function PersonalAiSystem() {
  
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
                <span className="px-3 py-1 text-xs font-medium bg-orange-900/30 text-orange-300 rounded-full border border-orange-700/50">
                  In Progress
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

              {/* GitHub Button */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl transition-all duration-300 border border-neutral-600 hover:border-emerald-500/50"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-emerald-500/30 via-emerald-500/10 to-transparent mb-12"></div>

            {/* Architecture Section */}
            <ScrollFadeIn>
              <section className="mb-12">
                <h2 className="text-2xl font-bold font-mono text-emerald-300 mb-4 section-header-accent">System Architecture</h2>
                <div className="space-y-4 text-neutral-300 leading-relaxed text-base">
                  <p>
                    Personal AI assistant platform combining Retrieval Augmented Generation (RAG) with extensible tool integration.
                    Designed to support local models (Ollama) or external APIs (Claude/ChatGPT) with a unified interface.
                  </p>
                  <div className="font-mono text-sm bg-neutral-800/50 border border-neutral-700 rounded-lg p-4 shadow-lg shadow-emerald-500/10">
                    <code className="text-emerald-400">
                      Documents → Vector DB → RAG Retrieval → LLM Gateway → Tool Orchestration → Response
                    </code>
                  </div>
                  <p>
                    Privacy-focused design with local-first data storage, PII redaction, and bearer token authentication.
                  </p>
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
                      <span className="text-3xl group-hover:scale-110 transition-transform">🔍</span>
                      <h3 className="font-bold text-white">RAG Knowledge Retrieval</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Retrieval-augmented generation system with document ingestion, vector search, and citation-based knowledge synthesis.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">🔧</span>
                      <h3 className="font-bold text-white">Tool Integration Framework</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Extensible tool allowlist system with parameter validation and allowlist security, supporting external API integrations.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">🔄</span>
                      <h3 className="font-bold text-white">Provider Flexibility</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Supports local models (Ollama) or external APIs (Claude/ChatGPT). Goal is to use local or self-deployed models.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">🛡️</span>
                      <h3 className="font-bold text-white">Security & Privacy</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Security model with PII redaction, bearer token authentication, and local-first data storage policies.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollFadeIn>

            {/* Technical Details Section */}
            <ScrollFadeIn delay={200}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold font-mono text-emerald-300 mb-4 section-header-accent">Technical Details</h2>
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
                    <h3 className="text-lg font-bold text-white mb-3">LLM Gateway</h3>
                    <div className="space-y-2 text-neutral-300 text-sm leading-relaxed">
                      <p>Service for language model interactions with streaming support, timeout management, and model routing capabilities.</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
                    <h3 className="text-lg font-bold text-white mb-3">Document Processing</h3>
                    <div className="space-y-2 text-neutral-300 text-sm leading-relaxed">
                      <p>Automated document ingestion with provenance tracking, ACL management, and vector database integration for retrieval.</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
                    <h3 className="text-lg font-bold text-white mb-3">Tool Orchestration</h3>
                    <div className="space-y-2 text-neutral-300 text-sm leading-relaxed">
                      <p>Routing system with JSON schema validation, uncertainty handling, and fallback mechanisms for reliable tool execution.</p>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollFadeIn>

            {/* Impact & Results Section */}
            <ScrollFadeIn delay={300}>
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
                        <li>• API architecture with clear separation of concerns</li>
                        <li>• RAG implementation with citation tracking</li>
                        <li>• Flexible provider system (Ollama/external APIs)</li>
                        <li>• Privacy-focused design with PII protection</li>
                        <li>• Extensible tool framework with registry system</li>
                        <li>• SQLite-based request tracking with metrics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollFadeIn>

          </div>

          {/* Sidebar - Right Column */}
          <aside className="lg:w-96 lg:sticky lg:top-20 lg:self-start p-6">
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
                  <li>• RAG knowledge retrieval</li>
                  <li>• Tool integration framework</li>
                  <li>• Provider flexibility</li>
                  <li>• Security & privacy</li>
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-neutral-700"></div>

              {/* Achievements */}
              <div>
                <h3 className="text-sm font-bold font-mono text-emerald-300 uppercase tracking-wider mb-3">Achievements</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• Unified AI provider interface</li>
                  <li>• Full RAG document pipeline</li>
                  <li>• Extensible tool framework</li>
                  <li>• Request tracking & metrics</li>
                  <li>• Interactive CLI with chat</li>
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

            </div>
          </aside>

        </div>

        {/* Bottom Navigation */}
        <ScrollFadeIn delay={0}>
          <nav className="mt-16 pt-8 border-t border-neutral-700">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center md:justify-between gap-4 md:gap-6">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                prefetch={false}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-neutral-800/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10 w-full md:flex-1 md:max-w-sm"
              >
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 flex-shrink-0 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 12H5m7-7l-7 7 7 7"/>
                </svg>
                <div className="flex-1 min-w-0 text-left">
                  <div className="text-xs text-neutral-500 group-hover:text-neutral-400 mb-0.5 font-mono">Previous</div>
                  <div className="text-sm text-neutral-300 group-hover:text-emerald-300 font-medium truncate">{prevProject.title}</div>
                </div>
              </Link>
            ) : (
              <div className="hidden md:block flex-1"></div>
            )}

            <Link
              href="/projects"
              prefetch={false}
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl hover:bg-neutral-800/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10 w-full md:w-auto"
            >
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <span className="text-sm text-neutral-300 group-hover:text-emerald-300 font-medium font-mono">All Projects</span>
            </Link>

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                prefetch={false}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-neutral-800/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10 w-full md:flex-1 md:max-w-sm"
              >
                <div className="flex-1 min-w-0 text-right">
                  <div className="text-xs text-neutral-500 group-hover:text-neutral-400 mb-0.5 font-mono">Next</div>
                  <div className="text-sm text-neutral-300 group-hover:text-emerald-300 font-medium truncate">{nextProject.title}</div>
                </div>
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 flex-shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
              </Link>
            ) : (
              <div className="hidden md:block flex-1"></div>
            )}
            </div>
          </nav>
        </ScrollFadeIn>

      </div>
    </main>
  );
}
