import type { Metadata } from "next";
import Link from "next/link";
import { getProjectBySlug, getNextProject, getPreviousProject } from "@/lib/getProjects";

export const metadata: Metadata = {
  title: "Portfolio Website – Projects – Pryce Tharpe",
  description: "Modern portfolio website with Next.js 15, Spotify integration, and automated deployments.",
  alternates: { canonical: "/projects/portfolio" },
};

// Enable static generation for better performance
export const dynamic = 'force-static';

// Pre-compute data at build time for better performance
const project = getProjectBySlug("portfolio");
const nextProject = getNextProject("portfolio");
const prevProject = getPreviousProject("portfolio");

export default function Portfolio() {

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
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
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
                  Live & Active
                </span>
                <span className="text-sm text-neutral-400 font-mono">{project.timeline}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400/90 via-teal-400/90 to-emerald-400/90">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-neutral-300 leading-relaxed mb-6">
                Portfolio with live Spotify integration and automated deployments.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 text-sm font-medium bg-cyan-900/30 text-cyan-300 rounded-full border border-cyan-700/50">
                  Next.js 15
                </span>
                <span className="px-3 py-1 text-sm font-medium bg-cyan-900/30 text-cyan-300 rounded-full border border-cyan-700/50">
                  React 19
                </span>
                <span className="px-3 py-1 text-sm font-medium bg-cyan-900/30 text-cyan-300 rounded-full border border-cyan-700/50">
                  TypeScript
                </span>
                <span className="px-3 py-1 text-sm font-medium bg-cyan-900/30 text-cyan-300 rounded-full border border-cyan-700/50">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 text-sm font-medium bg-cyan-900/30 text-cyan-300 rounded-full border border-cyan-700/50">
                  Python
                </span>
                <span className="px-3 py-1 text-sm font-medium bg-cyan-900/30 text-cyan-300 rounded-full border border-cyan-700/50">
                  Spotify API
                </span>
              </div>

              {/* GitHub Button */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl transition-all duration-300 border border-neutral-600 hover:border-cyan-500/50"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-cyan-500/30 via-cyan-500/10 to-transparent mb-12"></div>

            {/* Architecture Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-mono text-cyan-300 mb-4">Architecture</h2>
              <div className="space-y-4 text-neutral-300 leading-relaxed text-base">
                <p>
                  Spotify API integration fetches listening data daily via Python scripts.
                  GitHub Actions runs the pipeline, commits JSON, triggers Vercel deployment.
                </p>
                <div className="font-mono text-sm bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                  <code className="text-cyan-400">
                    Spotify API → Python → GitHub Actions → JSON → Vercel Deploy
                  </code>
                </div>
              </div>
            </section>

            {/* Frontend Stack Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-mono text-cyan-300 mb-4">Frontend Stack</h2>
              <div className="space-y-3 text-neutral-300 leading-relaxed text-base">
                <p>
                  Built with Next.js 15 App Router and React 19 Server Components.
                </p>
                <p>
                  TypeScript strict mode with Tailwind CSS for styling. Vercel Analytics for performance monitoring.
                </p>
              </div>
            </section>

            {/* Deployment Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-mono text-cyan-300 mb-4">Deployment</h2>
              <div className="space-y-3 text-neutral-300 leading-relaxed text-base">
                <p>
                  Automated via GitHub Actions with daily Spotify data refresh.
                </p>
                <p>
                  Vercel auto-deployment on every push with preview environments for pull requests.
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar - Right Column */}
          <aside className="lg:w-96 lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-xl border border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-6 space-y-8">

              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-bold font-mono text-cyan-300 uppercase tracking-wider mb-3">Tech Stack</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• Next.js 15</li>
                  <li>• React 19</li>
                  <li>• TypeScript</li>
                  <li>• Python</li>
                  <li>• Spotify API</li>
                  <li>• GitHub Actions</li>
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-neutral-700"></div>

              {/* Key Features */}
              <div>
                <h3 className="text-sm font-bold font-mono text-cyan-300 uppercase tracking-wider mb-3">Key Features</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• Live Spotify data</li>
                  <li>• Automated deployments</li>
                  <li>• Server Components</li>
                  <li>• SEO optimized</li>
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-neutral-700"></div>

              {/* Links */}
              <div>
                <h3 className="text-sm font-bold font-mono text-cyan-300 uppercase tracking-wider mb-3">Links</h3>
                <div className="space-y-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-300 hover:text-cyan-300 transition-colors text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-300 hover:text-cyan-300 transition-colors text-sm"
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

              {/* Navigation */}
              <div>
                <h3 className="text-sm font-bold font-mono text-cyan-300 uppercase tracking-wider mb-4">Navigate</h3>
                <div className="space-y-3">
                  {prevProject && (
                    <Link
                      href={`/projects/${prevProject.slug}`}
                      className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-neutral-800/50 transition-colors"
                    >
                      <svg className="w-4 h-4 text-neutral-500 group-hover:text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M19 12H5m7-7l-7 7 7 7"/>
                      </svg>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-neutral-500 group-hover:text-neutral-400 mb-0.5">Previous</div>
                        <div className="text-sm text-neutral-300 group-hover:text-cyan-300 font-medium leading-snug">{prevProject.title}</div>
                      </div>
                    </Link>
                  )}
                  <Link
                    href="/projects"
                    className="group flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-neutral-800/50 transition-colors"
                  >
                    <svg className="w-4 h-4 text-neutral-500 group-hover:text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    <span className="text-sm text-neutral-300 group-hover:text-cyan-300">All Projects</span>
                  </Link>
                  {nextProject && (
                    <Link
                      href={`/projects/${nextProject.slug}`}
                      className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-neutral-800/50 transition-colors"
                    >
                      <svg className="w-4 h-4 text-neutral-500 group-hover:text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 12h14m-7-7l7 7-7 7"/>
                      </svg>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-neutral-500 group-hover:text-neutral-400 mb-0.5">Next</div>
                        <div className="text-sm text-neutral-300 group-hover:text-cyan-300 font-medium leading-snug">{nextProject.title}</div>
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
