import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Custom GPTs – Projects – Pryce Tharpe",
  description: "Custom GPTs for enterprise and personal productivity.",
  alternates: { canonical: "/projects/custom-gpts" },
};
import Link from "next/link";
import { getProjectBySlug, getNextProject, getPreviousProject } from "@/lib/getProjects";

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="px-3 py-1 text-sm font-medium bg-blue-900/30 text-blue-300 rounded-full border border-blue-700/50">
      {tech}
    </span>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 hover:border-blue-500/50 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl group-hover:scale-110 transition-transform">{icon}</span>
        <h3 className="font-bold text-blue-400 group-hover:text-blue-300 transition-colors">{title}</h3>
      </div>
      <p className="text-neutral-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function GPTMetric({ value, label, color = "blue" }: { value: string; label: string; color?: string }) {
  const colorClasses = {
    blue: "from-blue-900/20 to-blue-800/20 border-blue-700/50 text-blue-400",
    purple: "from-purple-900/20 to-purple-800/20 border-purple-700/50 text-purple-400",
    green: "from-green-900/20 to-green-800/20 border-green-700/50 text-green-400",
    cyan: "from-cyan-900/20 to-cyan-800/20 border-cyan-700/50 text-cyan-400"
  };

  return (
    <div className={`text-center p-6 rounded-xl bg-gradient-to-br border hover:scale-105 transition-transform ${colorClasses[color as keyof typeof colorClasses]}`}>
      <div className={`text-3xl font-bold mb-2 ${color === 'blue' ? 'text-blue-400' : color === 'purple' ? 'text-purple-400' : color === 'green' ? 'text-green-400' : 'text-cyan-400'}`}>
        {value}
      </div>
      <div className="text-neutral-300 font-medium text-sm">{label}</div>
    </div>
  );
}

export default function CustomGPTs() {
  const project = getProjectBySlug("custom-gpts");
  const nextProject = getNextProject("custom-gpts");
  const prevProject = getPreviousProject("custom-gpts");
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12 min-h-screen">
      {/* Navigation */}
      <nav className="mb-8">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
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
          <div className="text-4xl animate-pulse">🤖</div>
          <span className="px-3 py-1 text-xs font-medium bg-emerald-900/30 text-emerald-300 rounded-full border border-emerald-700/50">
            Enterprise Adopted
          </span>
        </div>
        
        <h1 className="text-5xl font-bold font-mono tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
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


      {/* Custom GPTs */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-blue-300 mb-8">Custom GPTs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard 
            title="System Prompt Builder"
            description="Sophisticated GPT designed to assist users at all skill levels in creating effective system prompts with adaptive guidance and best practice recommendations."
            icon="🔧"
          />
          <FeatureCard 
            title="Student Career Archivist"
            description="Professional career documentation assistant that helps organize achievements, extract key accomplishments, and prepare compelling career narratives for applications and interviews."
            icon="📚"
          />
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-blue-300 mb-8">Technical Implementation</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard 
            title="Advanced Prompt Engineering"
            description="Sophisticated prompt design incorporating context injection, role definition, and output formatting for consistent, high-quality responses."
            icon="🔧"
          />
          <FeatureCard 
            title="User Experience Focus"
            description="Intuitive conversation flows designed to guide users naturally through complex processes while maintaining engagement and clarity."
            icon="🎯"
          />
          <FeatureCard 
            title="Enterprise Integration"
            description="Seamless integration with business workflows and internal processes, designed for professional environments and team collaboration."
            icon="🏢"
          />
          <FeatureCard 
            title="Performance Optimization"
            description="Response time optimization through efficient prompt design, token usage minimization, and quality consistency across interaction patterns."
            icon="⚡"
          />
        </div>
      </section>

      {/* Project Impact & Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-blue-300 mb-8">Project Impact & Achievements</h2>
        <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{project.impact}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold text-blue-400 mb-4">Key Achievements</h4>
              <div className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-blue-400 text-lg mt-1">🎯</span>
                    <p className="text-neutral-300 text-sm">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-4">Business Benefits</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Standardized AI assistance across team workflows</li>
                <li>• Reduced learning curve for AI tool adoption</li>
                <li>• Improved consistency in prompt engineering practices</li>
                <li>• Enhanced productivity through specialized automation</li>
                <li>• Demonstrated practical AI integration in business workflows</li>
                <li>• Created reusable frameworks for future AI projects</li>
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
          className="flex items-center text-green-400 hover:text-green-300 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5m7-7l-7 7 7 7"/>
          </svg>
          Previous Project
        </Link>
        
        <Link 
          href="/projects" 
          className="flex items-center text-green-400 hover:text-green-300 transition-colors"
        >
          All Projects
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14m-7-7l7 7-7 7"/>
          </svg>
        </Link>
        
        <Link 
          href={`/projects/${nextProject?.slug}`}
          className="flex items-center text-green-400 hover:text-green-300 transition-colors"
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