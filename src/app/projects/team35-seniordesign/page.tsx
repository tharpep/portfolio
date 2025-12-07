import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senior Design GenAI Subsystem – Projects – Pryce Tharpe",
  description: "Built the complete generative AI subsystem for a multi-platform cognitive coaching application with RAG, artifact generation, and interactive chat.",
  alternates: { canonical: "/projects/team35-seniordesign" },
};

// Enable static generation for better performance
export const dynamic = 'force-static';
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
        <h3 className="font-bold text-white">{title}</h3>
      </div>
      <p className="text-neutral-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

// Pre-compute data at build time for better performance
const project = getProjectBySlug("team35-seniordesign");
const nextProject = getNextProject("team35-seniordesign");
const prevProject = getPreviousProject("team35-seniordesign");

export default function Team35SeniorDesign() {
  
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
          <span className="px-3 py-1 text-xs font-medium bg-orange-900/30 text-orange-300 rounded-full border border-orange-700/50">
            In Progress
          </span>
        </div>
        
        <h1 className="text-5xl font-bold font-mono tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
          {project.title}
        </h1>
        
        <p className="text-xl text-neutral-300 leading-relaxed max-w-4xl mb-8">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-6">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        {/* GitHub Link */}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl transition-all duration-300 border border-neutral-600 hover:border-purple-500/50"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        )}
      </section>

      {/* Core Capabilities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-purple-300 mb-8">Core Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard 
            title="RAG System"
            description="Complete retrieval-augmented generation system with Qdrant vector storage, document ingestion pipeline, and context-aware retrieval for educational content."
            icon=""
          />
          <FeatureCard 
            title="Artifact Generation"
            description="Built comprehensive artifact generation system creating flashcards, multiple-choice questions, and insights with schema validation and template-based generation."
            icon=""
          />
          <FeatureCard 
            title="Interactive Chat Service"
            description="Developed chat service with three-layer context system combining RAG retrieval, conversation summaries, and recent message history for coherent conversations."
            icon=""
          />
          <FeatureCard 
            title="Multi-Provider Integration"
            description="Integrated multiple AI providers (Ollama for local, Purdue GenAI API for cloud) with automatic provider selection and fallback mechanisms."
            icon=""
          />
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-purple-300 mb-8">Technical Implementation</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard 
            title="FastAPI Backend"
            description="Built comprehensive FastAPI backend with RESTful endpoints for artifact generation, chat interactions, and document management with proper error handling."
            icon=""
          />
          <FeatureCard 
            title="CLI Interface"
            description="Created Typer-based CLI with commands for artifact generation, chat interactions, document ingestion, and system configuration with tab completion support."
            icon=""
          />
          <FeatureCard 
            title="Vector Storage"
            description="Implemented Qdrant vector database integration with persistent collections, semantic search, and efficient document retrieval for RAG operations."
            icon=""
          />
          <FeatureCard 
            title="Schema Validation"
            description="Designed JSON schema validation system for artifact generation ensuring structured output for flashcards, MCQ, and insights with error handling."
            icon=""
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
              <h4 className="text-lg font-bold text-white mb-4">Technical Innovation</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Complete GenAI subsystem architecture and implementation</li>
                <li>• Advanced RAG system with multi-layer context management</li>
                <li>• Production-ready artifact generation with schema validation</li>
                <li>• Multi-provider AI integration with automatic selection</li>
                <li>• Comprehensive CLI and API interfaces</li>
                <li>• Original work demonstrating full-stack AI system design</li>
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


