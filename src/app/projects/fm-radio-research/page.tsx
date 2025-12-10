import type { Metadata } from "next";
import Link from "next/link";
import { getProjectBySlug, getNextProject, getPreviousProject } from "@/lib/getProjects";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "FM Radio Detection & Demodulation – Projects – Pryce Tharpe",
  description: "USRP + GNU Radio research project for automated FM detection.",
  alternates: { canonical: "/projects/fm-radio-research" },
};

// Enable static generation for better performance
export const dynamic = 'force-static';

// Pre-compute data at build time for better performance
const project = getProjectBySlug("fm-radio-research");
const nextProject = getNextProject("fm-radio-research");
const prevProject = getPreviousProject("fm-radio-research");

export default function FmRadioResearch() {
  
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
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm"
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
                <span className="px-3 py-1 text-xs font-medium bg-blue-900/30 text-blue-300 rounded-full border border-blue-700/50">
                  Academic Research
                </span>
                <span className="text-sm text-neutral-400 font-mono">{project.timeline}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400/90 via-pink-400/90 to-rose-400/90">
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
                    className="px-3 py-1 text-sm font-medium bg-purple-900/30 text-purple-300 rounded-full border border-purple-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-purple-500/30 via-purple-500/10 to-transparent mb-12"></div>

            {/* Architecture Section */}
            <ScrollFadeIn>
              <section className="mb-12">
                <h2 className="text-2xl font-bold font-mono text-purple-300 mb-4 section-header-accent">Architecture</h2>
                <div className="space-y-4 text-neutral-300 leading-relaxed text-base">
                  <p>
                    Software-defined radio system using USRP hardware and GNU Radio for signal processing.
                    Automated FM signal detection and demodulation pipeline with configurable sensitivity and frequency scanning.
                  </p>
                  <div className="font-mono text-sm bg-neutral-800/50 border border-neutral-700 rounded-lg p-4 shadow-lg shadow-purple-500/10">
                    <code className="text-purple-400">
                      RF Signal → USRP → GNU Radio → Signal Detection → FM Demodulation → Audio Output
                    </code>
                  </div>
                </div>
              </section>
            </ScrollFadeIn>

            {/* Key Features Section */}
            <ScrollFadeIn delay={100}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold font-mono text-purple-300 mb-6 section-header-accent">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">📡</span>
                      <h3 className="font-bold text-white">Automated Signal Detection</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Algorithms for identifying FM radio signals across the spectrum with configurable sensitivity and frequency scanning capabilities.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">⚡</span>
                      <h3 className="font-bold text-white">Real-time Demodulation</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      FM demodulation pipeline converting RF signals to baseband audio with low latency and distortion.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">🔧</span>
                      <h3 className="font-bold text-white">GNU Radio Integration</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Signal processing workflows using GNU Radio&apos;s DSP library and flowgraph architecture.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">🎛️</span>
                      <h3 className="font-bold text-white">USRP Hardware Control</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Direct interface with USRP software-defined radio hardware for frequency control, gain adjustment, and sampling configuration.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollFadeIn>

            {/* Technical Details Section */}
            <ScrollFadeIn delay={200}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold font-mono text-purple-300 mb-4 section-header-accent">Technical Details</h2>
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
                    <h3 className="text-lg font-bold text-white mb-3">Signal Processing</h3>
                    <div className="space-y-2 text-neutral-300 text-sm leading-relaxed">
                      <p>Implemented signal processing algorithms using GNU Radio for automated FM detection and demodulation. Designed automation scripts for signal analysis.</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
                    <h3 className="text-lg font-bold text-white mb-3">RF Engineering</h3>
                    <div className="space-y-2 text-neutral-300 text-sm leading-relaxed">
                      <p>Applied RF engineering principles in software-defined radio context. Hands-on experience with SDR hardware and digital signal processing optimization.</p>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollFadeIn>

            {/* Impact & Results Section */}
            <ScrollFadeIn delay={300}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold font-mono text-purple-300 mb-4 section-header-accent">Impact & Results</h2>
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
                            <span className="text-purple-400 text-lg mt-1">•</span>
                            <p className="text-neutral-300 text-sm">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4">Technical Contributions</h4>
                      <ul className="space-y-2 text-neutral-300 text-sm">
                        <li>• RF engineering and signal processing experience</li>
                        <li>• Practical implementation of SDR technology</li>
                        <li>• Automated experimental framework development</li>
                        <li>• Digital signal processing optimization</li>
                        <li>• Understanding of radio frequency engineering principles</li>
                        <li>• Hands-on experience with SDR hardware</li>
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
                <h3 className="text-sm font-bold font-mono text-purple-300 uppercase tracking-wider mb-3">Tech Stack</h3>
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
                <h3 className="text-sm font-bold font-mono text-purple-300 uppercase tracking-wider mb-3">Key Features</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• Automated signal detection</li>
                  <li>• Real-time demodulation</li>
                  <li>• GNU Radio integration</li>
                  <li>• USRP hardware control</li>
                </ul>
              </div>

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
                className="group flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-neutral-800/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 w-full md:flex-1 md:max-w-sm"
              >
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-purple-400 flex-shrink-0 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 12H5m7-7l-7 7 7 7"/>
                </svg>
                <div className="flex-1 min-w-0 text-left">
                  <div className="text-xs text-neutral-500 group-hover:text-neutral-400 mb-0.5 font-mono">Previous</div>
                  <div className="text-sm text-neutral-300 group-hover:text-purple-300 font-medium truncate">{prevProject.title}</div>
                </div>
              </Link>
            ) : (
              <div className="hidden md:block flex-1"></div>
            )}

            <Link
              href="/projects"
              prefetch={false}
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl hover:bg-neutral-800/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 w-full md:w-auto"
            >
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <span className="text-sm text-neutral-300 group-hover:text-purple-300 font-medium font-mono">All Projects</span>
            </Link>

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                prefetch={false}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-neutral-800/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 w-full md:flex-1 md:max-w-sm"
              >
                <div className="flex-1 min-w-0 text-right">
                  <div className="text-xs text-neutral-500 group-hover:text-neutral-400 mb-0.5 font-mono">Next</div>
                  <div className="text-sm text-neutral-300 group-hover:text-purple-300 font-medium truncate">{nextProject.title}</div>
                </div>
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-purple-400 flex-shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
