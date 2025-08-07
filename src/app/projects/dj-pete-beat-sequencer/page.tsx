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

function TechnicalMetric({ value, label, color = "purple" }: { value: string; label: string; color?: string }) {
  const colorClasses = {
    purple: "from-purple-900/20 to-purple-800/20 border-purple-700/50 text-purple-400",
    pink: "from-pink-900/20 to-pink-800/20 border-pink-700/50 text-pink-400",
    indigo: "from-indigo-900/20 to-indigo-800/20 border-indigo-700/50 text-indigo-400",
    cyan: "from-cyan-900/20 to-cyan-800/20 border-cyan-700/50 text-cyan-400"
  };

  return (
    <div className={`text-center p-6 rounded-xl bg-gradient-to-br border hover:scale-105 transition-transform ${colorClasses[color as keyof typeof colorClasses]}`}>
      <div className={`text-3xl font-bold mb-2 ${color === 'purple' ? 'text-purple-400' : color === 'pink' ? 'text-pink-400' : color === 'indigo' ? 'text-indigo-400' : 'text-cyan-400'}`}>
        {value}
      </div>
      <div className="text-neutral-300 font-medium text-sm">{label}</div>
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

      {/* Technical Metrics */}
      <section className="grid md:grid-cols-4 gap-4 mb-16">
        <TechnicalMetric value="STM32" label="ARM Cortex-M4" color="purple" />
        <TechnicalMetric value="I2C/SPI" label="Communication Protocols" color="pink" />
        <TechnicalMetric value="DMA" label="Direct Memory Access" color="indigo" />
        <TechnicalMetric value="RGB" label="NeoTrellis Keypads" color="cyan" />
      </section>

      {/* Hardware Architecture */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-purple-300 mb-8">Hardware Architecture</h2>
        <div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-4">STM32 Embedded System Design</h3>
            <p className="text-neutral-300 mb-6">
              Advanced embedded firmware leveraging STM32 microcontroller capabilities with multiple communication protocols, 
              real-time audio processing, and  peripheral management for music hardware.
            </p>
            
            {/* Hardware Block Diagram */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-purple-900/20 border border-purple-700/50 text-center">
                <div className="text-2xl mb-2">🎛️</div>
                <div className="text-sm font-bold text-purple-300">STM32 MCU</div>
                <div className="text-xs text-neutral-400">ARM Cortex-M4</div>
              </div>
              <div className="p-4 rounded-lg bg-pink-900/20 border border-pink-700/50 text-center">
                <div className="text-2xl mb-2">🌈</div>
                <div className="text-sm font-bold text-pink-300">RGB Matrix</div>
                <div className="text-xs text-neutral-400">NeoTrellis Pads</div>
              </div>
              <div className="p-4 rounded-lg bg-indigo-900/20 border border-indigo-700/50 text-center">
                <div className="text-2xl mb-2">🔊</div>
                <div className="text-sm font-bold text-indigo-300">Audio DAC</div>
                <div className="text-xs text-neutral-400">Real-time Output</div>
              </div>
              <div className="p-4 rounded-lg bg-cyan-900/20 border border-cyan-700/50 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-sm font-bold text-cyan-300">DMA Engine</div>
                <div className="text-xs text-neutral-400">High-Speed Transfer</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-neutral-400">
              <span>Communication: I2C + SPI + DMA</span>
              <span>Real-time Constraints: Sub-millisecond Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-purple-300 mb-8">Embedded Systems Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            title="Multi-Protocol Communication"
            description="Implemented I2C and SPI communication protocols for seamless integration with Adafruit NeoTrellis RGB keypads and external peripherals."
            icon="🔗"
          />
          <FeatureCard 
            title="DMA-Driven Audio"
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
          <FeatureCard 
            title="Interrupt-Driven Design"
            description="Sophisticated interrupt handling architecture ensuring responsive user input while maintaining audio timing precision."
            icon="⚡"
          />
          <FeatureCard 
            title="Memory Management"
            description="Efficient memory allocation strategies for sample storage and real-time audio buffers in constrained embedded environment."
            icon="🧠"
          />
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-purple-300 mb-8">Implementation Deep Dive</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Communication Stack</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• I2C protocol for NeoTrellis keypad matrix</li>
                <li>• SPI interface for high-speed audio data transfer</li>
                <li>• Custom protocol layer for RGB synchronization</li>
                <li>• Hardware abstraction layer for portability</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Audio Processing Engine</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Real-time sample synthesis and playback</li>
                <li>• DMA-based circular buffer management</li>
                <li>• Hardware DAC integration for audio output</li>
                <li>• Precision timing for beat synchronization</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">User Interface System</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• 8x8 RGB LED matrix with individual control</li>
                <li>• Capacitive touch sensing with debouncing</li>
                <li>• Visual pattern feedback and status indicators</li>
                <li>• Responsive UI with sub-10ms input latency</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">System Architecture</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Modular firmware design with clear separation</li>
                <li>• Real-time OS concepts for task scheduling</li>
                <li>• Efficient power management and sleep modes</li>
                <li>• Robust error handling and recovery mechanisms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-purple-300 mb-8">Project Achievements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.highlights.map((highlight, index) => (
            <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <div className="flex items-start gap-3">
                <span className="text-purple-400 text-lg mt-1">⚡</span>
                <p className="text-neutral-300">{highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-purple-300 mb-8">Technical Specifications</h2>
        <div className="space-y-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">STM32 Platform Integration</h3>
            <p className="text-neutral-300 mb-6">
              Developed comprehensive embedded firmware for STM32 ARM Cortex-M4 microcontroller, implementing multiple 
              communication protocols and real-time audio processing capabilities for professional music production hardware.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
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
            </div>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Communication Protocols</h3>
            <p className="text-neutral-300 mb-4">
              Implemented sophisticated communication stack supporting I2C for keypad interface, SPI for high-speed data transfer, 
              and DMA for efficient memory operations, ensuring reliable real-time performance.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge tech="I2C Master/Slave" />
              <TechBadge tech="SPI Full Duplex" />
              <TechBadge tech="DMA Circular Mode" />
              <TechBadge tech="GPIO Interrupt" />
            </div>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Purdue Spark Challenge Recognition</h3>
            <p className="text-neutral-300 mb-4">
              Presented at Purdue&apos;s premier innovation showcase, demonstrating the intersection of embedded systems engineering 
              and creative technology, highlighting both technical complexity and practical musical applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge tech="Innovation Showcase" />
              <TechBadge tech="Technical Presentation" />
              <TechBadge tech="Prototype Demo" />
              <TechBadge tech="Peer Recognition" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Impact */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-purple-300 mb-8">Project Impact</h2>
        <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{project.impact}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-4">Technical Innovation</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Advanced embedded systems architecture design</li>
                <li>• Real-time audio processing on resource-constrained hardware</li>
                <li>• Multi-protocol communication stack implementation</li>
                <li>• Professional-grade timing precision for music applications</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-pink-400 mb-4">Educational Outcomes</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Demonstrated mastery of low-level embedded programming</li>
                <li>• Applied real-time systems concepts in practical context</li>
                <li>• Showcased creative application of engineering principles</li>
                <li>• Enhanced understanding of hardware-software integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-purple-300 mb-8">Project Timeline</h2>
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
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