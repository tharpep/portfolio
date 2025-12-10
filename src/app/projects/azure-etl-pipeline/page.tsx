import type { Metadata } from "next";
import Link from "next/link";
import { getProjectBySlug, getNextProject, getPreviousProject } from "@/lib/getProjects";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Azure ETL Pipeline – Projects – Pryce Tharpe",
  description: "Automated financial analysis with Microsoft Fabric and Azure services.",
  alternates: { canonical: "/projects/azure-etl-pipeline" },
};

// Enable static generation for better performance
export const dynamic = 'force-static';

// Pre-compute data at build time for better performance
const project = getProjectBySlug("azure-etl-pipeline");
const nextProject = getNextProject("azure-etl-pipeline");
const prevProject = getPreviousProject("azure-etl-pipeline");

export default function AzureETLPipeline() {
  
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
                  Deployed
                </span>
                <span className="text-sm text-neutral-400 font-mono">{project.timeline}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400/90 via-teal-400/90 to-emerald-400/90">
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
                    className="px-3 py-1 text-sm font-medium bg-cyan-900/30 text-cyan-300 rounded-full border border-cyan-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-cyan-500/30 via-cyan-500/10 to-transparent mb-12"></div>

            {/* Architecture Section */}
            <ScrollFadeIn>
              <section className="mb-12">
                <h2 className="text-2xl font-bold font-mono text-cyan-300 mb-4 section-header-accent">Architecture</h2>
                <div className="space-y-4 text-neutral-300 leading-relaxed text-base">
                  <p>
                    Automated pipeline using Microsoft Fabric extracts Azure billing data, processes it with SQL transformations,
                    and delivers standardized financial reports with built-in validation and error handling.
                  </p>
                  <div className="font-mono text-sm bg-neutral-800/50 border border-neutral-700 rounded-lg p-4 shadow-lg shadow-cyan-500/10">
                    <code className="text-cyan-400">
                      Azure Billing Data → Microsoft Fabric → SQL Transformations → Validation → Financial Reports
                    </code>
                  </div>
                </div>
              </section>
            </ScrollFadeIn>

            {/* Key Features Section */}
            <ScrollFadeIn delay={100}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold font-mono text-cyan-300 mb-6 section-header-accent">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">⚡</span>
                      <h3 className="font-bold text-white">Time Reduction</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Reduced processing time by 95% from 2-3 hours to 5-10 minutes through automation.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">🔄</span>
                      <h3 className="font-bold text-white">Automated Workflow</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Transformed 13-step manual process into automated pipeline with minimal manager involvement.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">🛡️</span>
                      <h3 className="font-bold text-white">Fault Tolerance</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Built-in error recovery and monitoring for reliable, repeatable financial analysis.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">📊</span>
                      <h3 className="font-bold text-white">Data Validation</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Automated validation ensures data accuracy and consistency in financial reporting.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollFadeIn>

            {/* Technical Details Section */}
            <ScrollFadeIn delay={200}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold font-mono text-cyan-300 mb-4 section-header-accent">Technical Details</h2>
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
                    <h3 className="text-lg font-bold text-white mb-3">Data Extraction & Processing</h3>
                    <div className="space-y-2 text-neutral-300 text-sm leading-relaxed">
                      <p>Built automated system using Microsoft Fabric to extract Azure billing data and SQL for transformations, handling cost categorization and departmental allocation with built-in validation and error handling.</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
                    <h3 className="text-lg font-bold text-white mb-3">Process Transformation</h3>
                    <div className="space-y-2 text-neutral-300 text-sm leading-relaxed">
                      <p>Before: 13-step manual process requiring 2-3 hours monthly with error-prone data collection.</p>
                      <p>After: Automated pipeline completes analysis in 5-10 minutes with standardized reporting and minimal manager involvement.</p>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollFadeIn>

            {/* Impact & Results Section */}
            <ScrollFadeIn delay={300}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold font-mono text-cyan-300 mb-4 section-header-accent">Impact & Results</h2>
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
                            <span className="text-cyan-400 text-lg mt-1">•</span>
                            <p className="text-neutral-300 text-sm">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4">Business Benefits</h4>
                      <ul className="space-y-2 text-neutral-300 text-sm">
                        <li>• Enabled reliable monthly financial analysis</li>
                        <li>• Reduced risk of human error in calculations</li>
                        <li>• Standardized reporting format and timing</li>
                        <li>• Presented solution at company sprint reviews</li>
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
                <h3 className="text-sm font-bold font-mono text-cyan-300 uppercase tracking-wider mb-3">Tech Stack</h3>
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
                <h3 className="text-sm font-bold font-mono text-cyan-300 uppercase tracking-wider mb-3">Key Features</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• 95% time reduction</li>
                  <li>• Automated workflow</li>
                  <li>• Fault-tolerant pipeline</li>
                  <li>• Data validation</li>
                </ul>
              </div>

            </div>
          </aside>

        </div>

        {/* Bottom Navigation */}
        <ScrollFadeIn delay={0}>
          <nav className="mt-16 pt-8 border-t border-neutral-700">
            <div className="flex items-center justify-between gap-6">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                prefetch={false}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-neutral-800/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 flex-1 max-w-sm"
              >
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-cyan-400 flex-shrink-0 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 12H5m7-7l-7 7 7 7"/>
                </svg>
                <div className="flex-1 min-w-0 text-left">
                  <div className="text-xs text-neutral-500 group-hover:text-neutral-400 mb-0.5 font-mono">Previous</div>
                  <div className="text-sm text-neutral-300 group-hover:text-cyan-300 font-medium truncate">{prevProject.title}</div>
                </div>
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}

            <Link
              href="/projects"
              prefetch={false}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl hover:bg-neutral-800/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <span className="text-sm text-neutral-300 group-hover:text-cyan-300 font-medium font-mono">All Projects</span>
            </Link>

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                prefetch={false}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-neutral-800/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 flex-1 max-w-sm"
              >
                <div className="flex-1 min-w-0 text-right">
                  <div className="text-xs text-neutral-500 group-hover:text-neutral-400 mb-0.5 font-mono">Next</div>
                  <div className="text-sm text-neutral-300 group-hover:text-cyan-300 font-medium truncate">{nextProject.title}</div>
                </div>
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-cyan-400 flex-shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}
            </div>
          </nav>
        </ScrollFadeIn>

      </div>
    </main>
  );
}
