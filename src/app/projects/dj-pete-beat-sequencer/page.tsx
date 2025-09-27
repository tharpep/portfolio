import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DJ Pete Beat Sequencer – Projects – Pryce Tharpe",
  description: "STM32 embedded firmware with RGB keypad interface.",
  alternates: { canonical: "/projects/dj-pete-beat-sequencer" },
};
import Link from "next/link";
import { getProjectBySlug, getNextProject, getPreviousProject } from "@/lib/getProjects";

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="px-3 py-1 text-sm font-medium bg-purple-900/30 text-purple-300 rounded-full border border-purple-700/50">
      {tech}
    </span>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 hover:border-purple-500/50 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl group-hover:scale-110 transition-transform">{icon}</span>
        <h3 className="font-bold text-purple-400 group-hover:text-purple-300 transition-colors">{title}</h3>
      </div>
      <p className="text-neutral-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}


export default function DJPeteBeatSequencer() {
  const project = getProjectBySlug("dj-pete-beat-sequencer");
  const nextProject = getNextProject("dj-pete-beat-sequencer");
  const prevProject = getPreviousProject("dj-pete-beat-sequencer");
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12 min-h-screen">
      {/* Navigation */}
      <nav className="mb-8">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
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
          <div className="text-4xl animate-pulse">🎨</div>
          <span className="px-3 py-1 text-xs font-medium bg-emerald-900/30 text-emerald-300 rounded-full border border-emerald-700/50">
            Purdue Spark Challenge
          </span>
        </div>
        
        <h1 className="text-5xl font-bold font-mono tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
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

      {/* Technical Architecture */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-purple-300 mb-8">Technical Architecture</h2>
        <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <h3 className="text-xl font-bold text-white mb-4">STM32 Embedded System</h3>
            <p className="text-neutral-300 mb-6">
            Advanced embedded firmware leveraging STM32 ARM Cortex-M4 microcontroller with multiple communication protocols 
            and real-time audio processing for interactive music production hardware.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 rounded-lg bg-neutral-700/50">
              <div className="text-2xl font-bold text-purple-400 mb-2">168MHz</div>
              <div className="text-xs text-neutral-300">ARM Cortex-M4</div>
              </div>
            <div className="text-center p-4 rounded-lg bg-neutral-700/50">
              <div className="text-2xl font-bold text-pink-400 mb-2">512KB</div>
              <div className="text-xs text-neutral-300">Flash Memory</div>
              </div>
            <div className="text-center p-4 rounded-lg bg-neutral-700/50">
              <div className="text-2xl font-bold text-cyan-400 mb-2">192KB</div>
              <div className="text-xs text-neutral-300">SRAM</div>
              </div>
            <div className="text-center p-4 rounded-lg bg-neutral-700/50">
              <div className="text-2xl font-bold text-indigo-400 mb-2">8x8</div>
              <div className="text-xs text-neutral-300">RGB Matrix</div>
              </div>
            </div>
            
          <div className="flex flex-wrap gap-2">
            <TechBadge tech="I2C Master/Slave" />
            <TechBadge tech="SPI Full Duplex" />
            <TechBadge tech="DMA Circular Mode" />
            <TechBadge tech="GPIO Interrupt" />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-purple-300 mb-8">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard 
            title="Multi-Protocol Communication"
            description="Implemented I2C and SPI communication protocols for seamless integration with Adafruit NeoTrellis RGB keypads and external peripherals."
            icon="🔗"
          />
          <FeatureCard 
            title="DMA-Driven Audio Processing"
            description="Leveraged Direct Memory Access for real-time audio sample streaming to DAC, eliminating CPU bottlenecks in audio processing pipeline."
            icon="🎵"
          />
          <FeatureCard 
            title="Real-time RGB Control"
            description="Dynamic LED matrix management with per-key RGB control, creating visual feedback system synchronized with audio patterns."
            icon="💡"
          />
          <FeatureCard 
            title="Low-Level Optimization"
            description="Hand-optimized ARM assembly routines for critical audio paths, achieving deterministic timing for professional music applications."
            icon="⚙️"
          />
        </div>
      </section>

      {/* Project Impact & Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-purple-300 mb-8">Project Impact & Achievements</h2>
        <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{project.impact}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-4">Key Achievements</h4>
              <div className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-purple-400 text-lg mt-1">⚡</span>
                    <p className="text-neutral-300 text-sm">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-pink-400 mb-4">Technical Innovation</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Advanced embedded systems architecture design</li>
                <li>• Real-time audio processing on resource-constrained hardware</li>
                <li>• Multi-protocol communication stack implementation</li>
                <li>• Professional-grade timing precision for music applications</li>
                <li>• Demonstrated mastery of low-level embedded programming</li>
                <li>• Applied real-time systems concepts in practical context</li>
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
          className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5m7-7l-7 7 7 7"/>
          </svg>
          Previous Project
        </Link>
        
        <Link 
          href="/projects" 
          className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
        >
          All Projects
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14m-7-7l7 7-7 7"/>
          </svg>
        </Link>
        
        <Link 
          href={`/projects/${nextProject?.slug}`}
          className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
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