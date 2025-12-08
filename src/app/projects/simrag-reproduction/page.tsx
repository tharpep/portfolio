import type { Metadata } from "next";
import Link from "next/link";
import { getProjectBySlug, getNextProject, getPreviousProject } from "@/lib/getProjects";
import MermaidDiagram from "@/components/MermaidDiagram";

export const metadata: Metadata = {
  title: "SimRAG Reproduction Study – Projects – Pryce Tharpe",
  description: "Educational reproduction study of SimRAG paper focusing on similarity-based RAG techniques.",
  alternates: { canonical: "/projects/simrag-reproduction" },
};

// Enable static generation for better performance
export const dynamic = 'force-static';

// Pre-compute data at build time for better performance
const project = getProjectBySlug("simrag-reproduction");
const nextProject = getNextProject("simrag-reproduction");
const prevProject = getPreviousProject("simrag-reproduction");

export default function SimRAGReproduction() {
  
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
            className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors text-sm"
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
                  Completed
                </span>
                <span className="text-sm text-neutral-400 font-mono">{project.timeline}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400/90 via-orange-400/90 to-red-400/90">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-neutral-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.slice(0, 6).map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm font-medium bg-amber-900/30 text-amber-300 rounded-full border border-amber-700/50">
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl transition-all duration-300 border border-neutral-600 hover:border-amber-500/50"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-amber-500/30 via-amber-500/10 to-transparent mb-12"></div>

            {/* Research Approach Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-mono text-amber-300 mb-4">Research Approach</h2>
              <div className="space-y-3 text-neutral-300 leading-relaxed text-base">
                <p>
                  Reproduction study of the SimRAG paper exploring similarity-based Retrieval Augmented Generation techniques.
                </p>
                <p>
                  Built a clean, modular implementation to understand RAG fundamentals, fine-tuning concepts, and practical ML engineering workflows.
                </p>
                <p>
                  Focused on learning through implementation rather than just theoretical understanding.
                </p>
              </div>
            </section>

            {/* System Architecture Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-mono text-amber-300 mb-4">System Architecture</h2>
              <div className="space-y-3 text-neutral-300 leading-relaxed text-base">
                <p>
                  Designed provider-agnostic interface supporting both local (Ollama) and cloud (Purdue GenAI) LLMs with automatic provider selection for optimal performance.
                </p>
                <p>
                  Built complete RAG system with Sentence Transformers for embeddings, Qdrant vector storage, and context-aware question answering with source citations.
                </p>
                <p>
                  Implemented both synchronous and asynchronous API calls for flexible integration patterns.
                </p>
              </div>
            </section>

            {/* Workflow Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-mono text-amber-300 mb-4">Workflow</h2>
              <div className="space-y-4 text-neutral-300 leading-relaxed text-base">
                <p>
                  Two-stage fine-tuning process: instruction following, then domain adaptation with synthetic QA pairs.
                </p>
                <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-8 overflow-x-auto min-h-[400px] flex items-center justify-center">
                  <div className="min-w-[1200px]">
                    <MermaidDiagram
                      chart={`flowchart LR
    Start([Start]) --> Setup[Setup & Config]
    Setup --> Ingest[Document Ingestion]
    Ingest --> Stage1[Stage 1: Instruction Following]
    Stage1 --> Train1[QLoRA Training<br/>~3-4 hours]
    Train1 --> GenerateQA[Generate QA Pairs]
    GenerateQA --> Stage2[Stage 2: Domain Adaptation]
    Stage2 --> Train2[QLoRA Training<br/>~3-4 hours]
    Train2 --> Test{Testing}
    Test --> Baseline[Baseline RAG]
    Test --> FineTuned[Fine-tuned RAG]
    Baseline --> Compare[Compare Results]
    FineTuned --> Compare
    Compare --> Results[Display Results]
    Results --> End([End])
    
    style Start fill:#b3e5fc,stroke:#0277bd,stroke-width:2px,color:#000
    style Setup fill:#b3e5fc,stroke:#0277bd,stroke-width:2px,color:#000
    style End fill:#b3e5fc,stroke:#0277bd,stroke-width:2px,color:#000
    style Ingest fill:#c8e6c9,stroke:#388e3c,stroke-width:2px,color:#000
    style Train1 fill:#e1bee7,stroke:#7b1fa2,stroke-width:2px,color:#000
    style Train2 fill:#e1bee7,stroke:#7b1fa2,stroke-width:2px,color:#000
    style GenerateQA fill:#fff9c4,stroke:#f57f17,stroke-width:2px,color:#000
    style Baseline fill:#ffccbc,stroke:#e64a19,stroke-width:2px,color:#000
    style FineTuned fill:#ffccbc,stroke:#e64a19,stroke-width:2px,color:#000
    style Compare fill:#ffccbc,stroke:#e64a19,stroke-width:2px,color:#000
    style Test fill:#ffccbc,stroke:#e64a19,stroke-width:2px,color:#000
    style Results fill:#fff9c4,stroke:#f57f17,stroke-width:2px,color:#000`}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Implementation Details Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold font-mono text-amber-300 mb-4">Implementation Details</h2>
              <div className="space-y-3 text-neutral-300 leading-relaxed text-base">
                <p>
                  Successfully trained and tested model on personal hardware, demonstrating practical ML engineering skills beyond typical academic requirements.
                </p>
                <p>
                  Created comprehensive test suite with mocked external dependencies for reproducible testing and validation.
                </p>
                <p>
                  Structured experiment framework for research reproducibility with comprehensive logging, result tracking, and automated testing.
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar - Right Column */}
          <aside className="lg:w-96 lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-xl border border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-6 space-y-8">

              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-bold font-mono text-amber-300 uppercase tracking-wider mb-3">Tech Stack</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• Python</li>
                  <li>• RAG</li>
                  <li>• Qdrant</li>
                  <li>• Sentence Transformers</li>
                  <li>• Ollama</li>
                  <li>• Purdue GenAI API</li>
                  <li>• PyTorch</li>
                  <li>• Docker</li>
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-neutral-700"></div>

              {/* Key Features */}
              <div>
                <h3 className="text-sm font-bold font-mono text-amber-300 uppercase tracking-wider mb-3">Key Features</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• Provider-agnostic LLM interface</li>
                  <li>• Complete RAG implementation</li>
                  <li>• Vector storage with Qdrant</li>
                  <li>• Comprehensive test suite</li>
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-neutral-700"></div>

              {/* Achievements */}
              <div>
                <h3 className="text-sm font-bold font-mono text-amber-300 uppercase tracking-wider mb-3">Achievements</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="text-xs">• {highlight}</li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-neutral-700"></div>

              {/* Links */}
              <div>
                <h3 className="text-sm font-bold font-mono text-amber-300 uppercase tracking-wider mb-3">Links</h3>
                <div className="space-y-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-300 hover:text-amber-300 transition-colors text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-neutral-700"></div>

              {/* Navigation */}
              <div>
                <h3 className="text-sm font-bold font-mono text-amber-300 uppercase tracking-wider mb-4">Navigate</h3>
                <div className="space-y-3">
                  {prevProject && (
                    <Link
                      href={`/projects/${prevProject.slug}`}
                      className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-neutral-800/50 transition-colors"
                    >
                      <svg className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M19 12H5m7-7l-7 7 7 7"/>
                      </svg>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-neutral-500 group-hover:text-neutral-400 mb-0.5">Previous</div>
                        <div className="text-sm text-neutral-300 group-hover:text-amber-300 font-medium leading-snug">{prevProject.title}</div>
                      </div>
                    </Link>
                  )}
                  <Link
                    href="/projects"
                    className="group flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-neutral-800/50 transition-colors"
                  >
                    <svg className="w-4 h-4 text-neutral-500 group-hover:text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    <span className="text-sm text-neutral-300 group-hover:text-amber-300">All Projects</span>
                  </Link>
                  {nextProject && (
                    <Link
                      href={`/projects/${nextProject.slug}`}
                      className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-neutral-800/50 transition-colors"
                    >
                      <svg className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 12h14m-7-7l7 7-7 7"/>
                      </svg>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-neutral-500 group-hover:text-neutral-400 mb-0.5">Next</div>
                        <div className="text-sm text-neutral-300 group-hover:text-amber-300 font-medium leading-snug">{nextProject.title}</div>
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
