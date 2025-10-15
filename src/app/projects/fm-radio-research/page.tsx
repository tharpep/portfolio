import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FM Radio Detection & Demodulation – Projects – Pryce Tharpe",
  description: "USRP + GNU Radio research project for automated FM detection.",
  alternates: { canonical: "/projects/fm-radio-research" },
};

// Enable static generation for better performance
export const dynamic = 'force-static';
import Link from "next/link";
import { getProjectBySlug, getNextProject, getPreviousProject } from "@/lib/getProjects";

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="px-3 py-1 text-sm font-medium bg-amber-900/30 text-amber-300 rounded-full border border-amber-700/50">
      {tech}
    </span>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 hover:border-amber-500/50 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl group-hover:scale-110 transition-transform">{icon}</span>
        <h3 className="font-bold text-amber-400 group-hover:text-amber-300 transition-colors">{title}</h3>
      </div>
      <p className="text-neutral-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}


// Pre-compute data at build time for better performance
const project = getProjectBySlug("fm-radio-research");
const nextProject = getNextProject("fm-radio-research");
const prevProject = getPreviousProject("fm-radio-research");

export default function FmRadioResearch() {
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12 min-h-screen">
      {/* Navigation */}
      <nav className="mb-8">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5m7-7l-7 7 7 7"/>
          </svg>
          Back to Projects
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-4xl animate-pulse">🔬</div>
          <span className="px-3 py-1 text-xs font-medium bg-blue-900/30 text-blue-300 rounded-full border border-blue-700/50">
            Academic Research
          </span>
        </div>
        
        <h1 className="text-5xl font-bold font-mono tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-400 to-blue-400">
          {project.title}
        </h1>
        
        <p className="text-xl text-neutral-300 leading-relaxed max-w-4xl mb-8">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      </section>



      {/* Research Capabilities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-amber-300 mb-8">Research Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard 
            title="Automated Signal Detection"
            description="Sophisticated algorithms for identifying FM radio signals across the spectrum with configurable sensitivity and frequency scanning capabilities."
            icon="🎯"
          />
          <FeatureCard 
            title="Real-time Demodulation"
            description="High-performance FM demodulation pipeline converting RF signals to baseband audio with minimal latency and distortion."
            icon="⚡"
          />
          <FeatureCard 
            title="GNU Radio Integration"
            description="Advanced signal processing workflows using GNU Radio's comprehensive DSP library and flowgraph architecture."
            icon="🔧"
          />
          <FeatureCard 
            title="USRP Hardware Control"
            description="Direct interface with USRP software-defined radio hardware for precise frequency control, gain adjustment, and sampling configuration."
            icon="📻"
          />
        </div>
      </section>



      {/* Research Impact & Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-amber-300 mb-8">Research Impact & Achievements</h2>
        <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{project.impact}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold text-amber-400 mb-4">Key Achievements</h4>
              <div className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-amber-400 text-lg mt-1">📡</span>
                    <p className="text-neutral-300 text-sm">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-red-400 mb-4">Technical Contributions</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Advanced RF engineering and signal processing expertise</li>
                <li>• Practical implementation of SDR technology in research</li>
                <li>• Automated experimental framework development</li>
                <li>• Real-time digital signal processing optimization</li>
                <li>• Deep understanding of radio frequency engineering principles</li>
                <li>• Hands-on experience with professional SDR hardware</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="mb-16">
        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <span className="text-lg font-mono text-neutral-300">{project.timeline}</span>
        </div>
      </section>

      {/* Navigation */}
      <section className="flex justify-between items-center pt-12 border-t border-neutral-700">
        <Link 
          href={`/projects/${prevProject?.slug}`}
          className="flex items-center text-amber-400 hover:text-amber-300 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5m7-7l-7 7 7 7"/>
          </svg>
          Previous Project
        </Link>
        
        <Link 
          href="/projects" 
          className="flex items-center text-amber-400 hover:text-amber-300 transition-colors"
        >
          All Projects
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14m-7-7l7 7-7 7"/>
          </svg>
        </Link>
        
        <Link 
          href={`/projects/${nextProject?.slug}`}
          className="flex items-center text-amber-400 hover:text-amber-300 transition-colors"
        >
          Next Project
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14m-7-7l7 7-7 7"/>
          </svg>
        </Link>
      </section>
    </main>
  );
} 