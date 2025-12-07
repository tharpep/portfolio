import Link from "next/link";
import { getProjectBySlug, getNextProject, getPreviousProject } from "@/lib/getProjects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI System Prompt Framework – Projects – Pryce Tharpe",
  description: "Enterprise-ready prompt engineering framework with standards enforcement.",
  alternates: { canonical: "/projects/ai-system-prompt" },
};

// Enable static generation for better performance
export const dynamic = 'force-static';

// Pre-compute data at build time for better performance
const project = getProjectBySlug("ai-system-prompt");
const nextProject = getNextProject("ai-system-prompt");
const prevProject = getPreviousProject("ai-system-prompt");

export default function AISystemPrompt() {
  
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
                  Enterprise Rollout
                </span>
                <span className="text-sm text-neutral-400 font-mono">{project.timeline}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400/90 via-emerald-400/90 to-teal-400/90">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-neutral-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 text-sm font-medium bg-emerald-900/30 text-emerald-300 rounded-full border border-emerald-700/50">
                  Prompt Engineering
                </span>
                <span className="px-3 py-1 text-sm font-medium bg-emerald-900/30 text-emerald-300 rounded-full border border-emerald-700/50">
                  OpenAI API
                </span>
                <span className="px-3 py-1 text-sm font-medium bg-emerald-900/30 text-emerald-300 rounded-full border border-emerald-700/50">
                  Cursor IDE
                </span>
                <span className="px-3 py-1 text-sm font-medium bg-emerald-900/30 text-emerald-300 rounded-full border border-emerald-700/50">
                  Windsurf IDE
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-emerald-500/30 via-emerald-500/10 to-transparent mb-12"></div>

            {/* Framework Design Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-mono text-emerald-300 mb-4">Framework Design</h2>
              <div className="space-y-3 text-neutral-300 leading-relaxed text-base">
                <p>
                  Master IDE prompt standardizing AI-assisted coding workflows across engineering departments.
                </p>
                <p>
                  Enforces coding standards with rule citations. Built-in security patterns prevent unsafe code generation and credential exposure.
                </p>
                <p>
                  Supports C#, C/C++, JavaScript/TypeScript, Python, Java, SQL, Bash, Rust, and Go with language-specific patterns.
                </p>
              </div>
            </section>

            {/* Enterprise Integration Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-mono text-emerald-300 mb-4">Enterprise Integration</h2>
              <div className="space-y-3 text-neutral-300 leading-relaxed text-base">
                <p>
                  Integrates with Cursor, Windsurf, and VS Code IDEs for consistent AI assistance.
                </p>
                <p>
                  Department-specific overrides allow teams to adapt while maintaining core standards. Confidence-tagged output indicates when to verify suggestions.
                </p>
              </div>
            </section>

            {/* Training & Enablement Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-mono text-emerald-300 mb-4">Training & Enablement</h2>
              <div className="space-y-3 text-neutral-300 leading-relaxed text-base">
                <p>
                  Co-led 2 company-wide lunch and learns on ChatGPT setup and master prompt usage.
                </p>
                <p>
                  Conducted 17 group/individual AI check-ins and training sessions. Mentored an intern in prompt engineering.
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar - Right Column */}
          <aside className="lg:w-96 lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-xl border border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-6 space-y-8">

              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-bold font-mono text-emerald-300 uppercase tracking-wider mb-3">Tech Stack</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• OpenAI API</li>
                  <li>• Prompt Engineering</li>
                  <li>• Cursor IDE</li>
                  <li>• Windsurf IDE</li>
                  <li>• Python</li>
                  <li>• Custom GPTs</li>
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-neutral-700"></div>

              {/* Key Features */}
              <div>
                <h3 className="text-sm font-bold font-mono text-emerald-300 uppercase tracking-wider mb-3">Key Features</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• Standards enforcement</li>
                  <li>• Multi-IDE integration</li>
                  <li>• Security compliance</li>
                  <li>• Multi-language support</li>
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

              {/* Navigation */}
              <div>
                <h3 className="text-sm font-bold font-mono text-emerald-300 uppercase tracking-wider mb-4">Navigate</h3>
                <div className="space-y-3">
                  {prevProject && (
                    <Link
                      href={`/projects/${prevProject.slug}`}
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
