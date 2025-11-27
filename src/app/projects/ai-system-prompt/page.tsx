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

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="px-3 py-1 text-sm font-medium bg-green-900/30 text-green-300 rounded-full border border-green-700/50">
      {tech}
    </span>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 hover:border-green-500/50 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl group-hover:scale-110 transition-transform">{icon}</span>
        <h3 className="font-bold text-white">{title}</h3>
      </div>
      <p className="text-neutral-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}


// Pre-compute data at build time for better performance
const project = getProjectBySlug("ai-system-prompt");
const nextProject = getNextProject("ai-system-prompt");
const prevProject = getPreviousProject("ai-system-prompt");

export default function AISystemPrompt() {
  
  if (!project) {
    return <div>Project not found</div>;
  }



  return (
    <main className="bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12 min-h-screen">
      {/* Navigation */}
      <nav className="mb-8">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
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
          <div className="text-4xl">🤖</div>
          <span className="px-3 py-1 text-xs font-medium bg-emerald-900/30 text-emerald-300 rounded-full border border-emerald-700/50">
            Enterprise Rollout
          </span>
        </div>
        
        <h1 className="text-5xl font-bold font-mono tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
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


      {/* Core Capabilities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Core Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard 
            title="Standards Enforcement"
            description="Automatically enforces coding standards with rule citations, ensuring consistent code quality across all teams and projects."
            icon="📋"
          />
          <FeatureCard 
            title="Multi-IDE Integration"
            description="Seamlessly integrates with Cursor, Windsurf, and VsCode IDEs, providing consistent AI assistance across development environments."
            icon="💻"
          />
          <FeatureCard 
            title="Security Compliance"
            description="Built-in security patterns prevent unsafe code generation, credential exposure, and compliance violations."
            icon="🔒"
          />
          <FeatureCard 
            title="Multi-Language Support"
            description="Supports C#, C/C++, JavaScript/TypeScript, Python, Java, SQL, Bash, Rust, and Go with language-specific patterns and standards."
            icon="🌐"
          />
        </div>
      </section>


      {/* Project Impact & Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Project Impact & Achievements</h2>
        <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{project.impact}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Key Achievements</h4>
              <div className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-green-400 text-lg mt-1">✓</span>
                    <p className="text-neutral-300 text-sm">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Technical Implementation</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Developed sophisticated prompt system with role-based behavior</li>
                <li>• Multi-language rule enforcement across 8+ programming languages</li>
                <li>• Confidence-tagged output with uncertainty handling</li>
                <li>• Department-specific override and exception handling</li>
                <li>• Security-first design with PII/credential protection</li>
                <li>• Comprehensive documentation and test generation</li>
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