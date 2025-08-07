import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FM Radio Detection & Demodulation – Projects – Pryce Tharpe",
  description: "USRP + GNU Radio research project for automated FM detection.",
  alternates: { canonical: "/projects/fm-radio-research" },
};
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

function ResearchMetric({ value, label, color = "amber" }: { value: string; label: string; color?: string }) {
  const colorClasses = {
    amber: "from-amber-900/20 to-amber-800/20 border-amber-700/50 text-amber-400",
    red: "from-red-900/20 to-red-800/20 border-red-700/50 text-red-400",
    blue: "from-blue-900/20 to-blue-800/20 border-blue-700/50 text-blue-400",
    green: "from-green-900/20 to-green-800/20 border-green-700/50 text-green-400"
  };

  return (
    <div className={`text-center p-6 rounded-xl bg-gradient-to-br border hover:scale-105 transition-transform ${colorClasses[color as keyof typeof colorClasses]}`}>
      <div className={`text-3xl font-bold mb-2 ${color === 'amber' ? 'text-amber-400' : color === 'red' ? 'text-red-400' : color === 'blue' ? 'text-blue-400' : 'text-green-400'}`}>
        {value}
      </div>
      <div className="text-neutral-300 font-medium text-sm">{label}</div>
    </div>
  );
}

export default function FMRadioResearch() {
  const project = getProjectBySlug("fm-radio-research");
  const nextProject = getNextProject("fm-radio-research");
  const prevProject = getPreviousProject("fm-radio-research");
  
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

      {/* Research Metrics */}
      <section className="grid md:grid-cols-4 gap-4 mb-16">
        <ResearchMetric value="USRP" label="Software-Defined Radio" color="amber" />
        <ResearchMetric value="GNU Radio" label="Signal Processing" color="red" />
        <ResearchMetric value="Python" label="Automation Scripts" color="blue" />
        <ResearchMetric value="RF" label="Radio Engineering" color="green" />
      </section>

      {/* SDR System Architecture */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-amber-300 mb-8">Software-Defined Radio System</h2>
        <div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-red-600/10 to-blue-600/10"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-4">USRP-Based FM Signal Detection Pipeline</h3>
            <p className="text-neutral-300 mb-6">
              Advanced software-defined radio implementation using USRP hardware and GNU Radio for automated FM radio signal 
              detection and demodulation, incorporating sophisticated signal processing algorithms and real-time analysis capabilities.
            </p>
            
            {/* Signal Processing Flow */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-amber-900/20 border border-amber-700/50 text-center">
                <div className="text-2xl mb-2">📡</div>
                <div className="text-sm font-bold text-amber-300">USRP Hardware</div>
                <div className="text-xs text-neutral-400">RF Frontend</div>
              </div>
              <div className="p-4 rounded-lg bg-red-900/20 border border-red-700/50 text-center">
                <div className="text-2xl mb-2">⚙️</div>
                <div className="text-sm font-bold text-red-300">GNU Radio</div>
                <div className="text-xs text-neutral-400">DSP Framework</div>
              </div>
              <div className="p-4 rounded-lg bg-blue-900/20 border border-blue-700/50 text-center">
                <div className="text-2xl mb-2">🔍</div>
                <div className="text-sm font-bold text-blue-300">Detection</div>
                <div className="text-xs text-neutral-400">Signal Analysis</div>
              </div>
              <div className="p-4 rounded-lg bg-green-900/20 border border-green-700/50 text-center">
                <div className="text-2xl mb-2">🎵</div>
                <div className="text-sm font-bold text-green-300">Demodulation</div>
                <div className="text-xs text-neutral-400">Audio Output</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-neutral-400">
              <span>Frequency Range: 88-108 MHz FM Band</span>
              <span>Real-time Processing: Sub-second Detection</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-amber-300 mb-8">Research Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                            description="Advanced signal processing workflows using GNU Radio&apos;s comprehensive DSP library and flowgraph architecture."
            icon="🔧"
          />
          <FeatureCard 
            title="USRP Hardware Control"
            description="Direct interface with USRP software-defined radio hardware for precise frequency control, gain adjustment, and sampling configuration."
            icon="📻"
          />
          <FeatureCard 
            title="Python Automation"
            description="Comprehensive automation scripts for experimental setup, data collection, and batch processing of RF signals and analysis results."
            icon="🐍"
          />
          <FeatureCard 
            title="Signal Analysis Tools"
            description="Advanced analytical tools for spectral analysis, signal characterization, and performance metric evaluation of detection algorithms."
            icon="📊"
          />
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-amber-300 mb-8">Implementation Architecture</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">USRP Hardware Interface</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Direct USRP device control and configuration</li>
                <li>• Precision frequency tuning and gain control</li>
                <li>• High-speed ADC sample rate management</li>
                <li>• Real-time streaming interface optimization</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Signal Processing Pipeline</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• GNU Radio flowgraph design and optimization</li>
                <li>• Custom DSP blocks for FM detection algorithms</li>
                <li>• Multi-stage filtering and decimation chains</li>
                <li>• Real-time spectral analysis and visualization</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Detection Algorithms</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Energy detection with adaptive thresholding</li>
                <li>• Carrier frequency estimation and tracking</li>
                <li>• Signal quality assessment and SNR calculation</li>
                <li>• Multi-channel simultaneous detection capability</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Automation & Analysis</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Python-based experimental control framework</li>
                <li>• Automated data collection and logging systems</li>
                <li>• Statistical analysis and performance evaluation</li>
                <li>• Batch processing capabilities for research datasets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-amber-300 mb-8">Research Achievements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.highlights.map((highlight, index) => (
            <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <div className="flex items-start gap-3">
                <span className="text-amber-400 text-lg mt-1">📡</span>
                <p className="text-neutral-300">{highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-amber-300 mb-8">Research Methodology</h2>
        <div className="space-y-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Digital Signal Processing Framework</h3>
            <p className="text-neutral-300 mb-4">
              Implemented sophisticated signal processing algorithms using GNU Radio&apos;s modular framework, 
              creating custom detection and demodulation workflows optimized for FM radio signal characteristics.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge tech="FFT Analysis" />
              <TechBadge tech="FIR Filtering" />
              <TechBadge tech="FM Demodulation" />
              <TechBadge tech="Decimation" />
            </div>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Automated Experimental Framework</h3>
            <p className="text-neutral-300 mb-4">
              Developed comprehensive automation scripts for experimental control, data collection, and analysis, 
              enabling reproducible research workflows and systematic evaluation of detection algorithm performance.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge tech="Experimental Control" />
              <TechBadge tech="Data Logging" />
              <TechBadge tech="Batch Processing" />
              <TechBadge tech="Statistical Analysis" />
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-amber-300 mb-8">Research Impact</h2>
        <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{project.impact}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-amber-400 mb-4">Technical Contributions</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Advanced RF engineering and signal processing expertise</li>
                <li>• Practical implementation of SDR technology in research</li>
                <li>• Automated experimental framework development</li>
                <li>• Real-time digital signal processing optimization</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-red-400 mb-4">Educational Outcomes</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Deep understanding of radio frequency engineering principles</li>
                <li>• Hands-on experience with professional SDR hardware</li>
                <li>• Research methodology and experimental design skills</li>
                <li>• Academic publication and presentation preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-amber-300 mb-8">Project Timeline</h2>
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
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