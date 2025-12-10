import type { Metadata } from "next";
import Link from "next/link";
import { getProjectBySlug, getNextProject, getPreviousProject } from "@/lib/getProjects";
import ScrollFadeIn from "@/components/ScrollFadeIn";

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
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400/90 via-teal-400/90 to-cyan-400/90">
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
                    className="px-3 py-1 text-sm font-medium bg-emerald-900/30 text-emerald-300 rounded-full border border-emerald-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl transition-all duration-300 border border-neutral-600 hover:border-emerald-500/50"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-emerald-500/30 via-emerald-500/10 to-transparent mb-12"></div>

            {/* Architecture Section */}
            <ScrollFadeIn>
            <section className="mb-12">
                <h2 className="text-2xl font-bold font-mono text-emerald-300 mb-4 section-header-accent">Research Approach</h2>
                <div className="space-y-4 text-neutral-300 leading-relaxed text-base">
                <p>
                  Reproduction study of the SimRAG paper exploring similarity-based Retrieval Augmented Generation techniques.
                    Built a modular implementation to understand RAG fundamentals, fine-tuning concepts, and practical ML engineering workflows.
                </p>
                  <div className="font-mono text-sm bg-neutral-800/50 border border-neutral-700 rounded-lg p-4 shadow-lg shadow-emerald-500/10">
                    <code className="text-emerald-400">
                      Documents → Embeddings → Vector DB → Stage 1 Fine-tuning → QA Generation → Stage 2 Fine-tuning → Evaluation
                    </code>
                  </div>
                <p>
                  Focused on learning through implementation rather than just theoretical understanding.
                </p>
              </div>
            </section>
            </ScrollFadeIn>

            {/* Key Features Section */}
            <ScrollFadeIn delay={100}>
            <section className="mb-12">
                <h2 className="text-2xl font-bold font-mono text-emerald-300 mb-6 section-header-accent">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">🔌</span>
                      <h3 className="font-bold text-white">Provider-Agnostic Interface</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Supports both local (Ollama) and cloud (Purdue GenAI) LLMs with automatic provider selection.
                </p>
              </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">🔍</span>
                      <h3 className="font-bold text-white">RAG Implementation</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Sentence Transformers for embeddings, Qdrant vector storage, and context-aware question answering with source citations.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">⚙️</span>
                      <h3 className="font-bold text-white">Two-Stage Fine-Tuning</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      QLoRA fine-tuning: Stage 1 for instruction following, Stage 2 for domain adaptation with synthetic QA pairs.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 card-lift group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">🧪</span>
                      <h3 className="font-bold text-white">Test Suite</h3>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Test suite with mocked external dependencies for reproducible testing and validation.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollFadeIn>

            {/* Technical Details Section */}
            <ScrollFadeIn delay={200}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold font-mono text-emerald-300 mb-4 section-header-accent">Technical Details</h2>
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
                    <h3 className="text-lg font-bold text-white mb-3">Workflow</h3>
                    <div className="space-y-3 text-neutral-300 text-sm leading-relaxed">
                      <p>Two-stage fine-tuning process: instruction following, then domain adaptation with synthetic QA pairs.</p>
                      <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4 space-y-3">
                        <div>
                          <h4 className="text-sm font-semibold text-emerald-200 mb-1">Setup & Document Ingestion</h4>
                          <p className="text-xs text-neutral-400">Load documents, chunk text, generate embeddings, store in Qdrant.</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-emerald-200 mb-1">Stage 1: Instruction Following</h4>
                          <p className="text-xs text-neutral-400">QLoRA fine-tuning on general instructions (~4-6 hours).</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-emerald-200 mb-1">Generate QA Pairs</h4>
                          <p className="text-xs text-neutral-400">Create domain-specific training data from documents.</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-emerald-200 mb-1">Stage 2: Domain Adaptation</h4>
                          <p className="text-xs text-neutral-400">QLoRA fine-tuning on domain QA dataset (~30 minutes).</p>
                        </div>
                  <div>
                          <h4 className="text-sm font-semibold text-emerald-200 mb-1">Testing & Comparison</h4>
                          <p className="text-xs text-neutral-400">Compare baseline RAG vs fine-tuned RAG performance.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
                    <h3 className="text-lg font-bold text-white mb-3">Implementation</h3>
                    <div className="space-y-2 text-neutral-300 text-sm leading-relaxed">
                      <p>Successfully trained and tested model on personal hardware, demonstrating practical ML engineering skills.</p>
                      <p>Experiment framework for research reproducibility with logging, result tracking, and automated testing.</p>
                  </div>
                </div>
              </div>
            </section>
            </ScrollFadeIn>

            {/* Impact & Results Section */}
            <ScrollFadeIn delay={300}>
            <section className="mb-12">
                <h2 className="text-2xl font-bold font-mono text-emerald-300 mb-4 section-header-accent">Impact & Results</h2>
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
                            <span className="text-emerald-400 text-lg mt-1">•</span>
                            <p className="text-neutral-300 text-sm">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4">Technical Highlights</h4>
                      <ul className="space-y-2 text-neutral-300 text-sm">
                        <li>• Modular RAG implementation</li>
                        <li>• Provider-agnostic LLM interface</li>
                        <li>• QLoRA fine-tuning on consumer hardware</li>
                        <li>• Vector storage with Qdrant</li>
                        <li>• Experiment framework for reproducibility</li>
                        <li>• Test suite with mocked dependencies</li>
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
                <h3 className="text-sm font-bold font-mono text-emerald-300 uppercase tracking-wider mb-3">Tech Stack</h3>
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
                <h3 className="text-sm font-bold font-mono text-emerald-300 uppercase tracking-wider mb-3">Key Features</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• Provider-agnostic LLM interface</li>
                  <li>• RAG implementation</li>
                  <li>• Vector storage with Qdrant</li>
                  <li>• Two-stage fine-tuning</li>
                  <li>• Test suite</li>
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-neutral-700"></div>

              {/* Achievements */}
              <div>
                <h3 className="text-sm font-bold font-mono text-emerald-300 uppercase tracking-wider mb-3">Achievements</h3>
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
                <h3 className="text-sm font-bold font-mono text-emerald-300 uppercase tracking-wider mb-3">Links</h3>
                <div className="space-y-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-300 hover:text-emerald-300 transition-colors text-sm"
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
                className="group flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-neutral-800/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10 flex-1 max-w-sm"
              >
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 flex-shrink-0 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 12H5m7-7l-7 7 7 7"/>
                </svg>
                <div className="flex-1 min-w-0 text-left">
                  <div className="text-xs text-neutral-500 group-hover:text-neutral-400 mb-0.5 font-mono">Previous</div>
                  <div className="text-sm text-neutral-300 group-hover:text-emerald-300 font-medium truncate">{prevProject.title}</div>
                </div>
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}

            <Link
              href="/projects"
              prefetch={false}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl hover:bg-neutral-800/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <span className="text-sm text-neutral-300 group-hover:text-emerald-300 font-medium font-mono">All Projects</span>
            </Link>

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                prefetch={false}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-neutral-800/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10 flex-1 max-w-sm"
              >
                <div className="flex-1 min-w-0 text-right">
                  <div className="text-xs text-neutral-500 group-hover:text-neutral-400 mb-0.5 font-mono">Next</div>
                  <div className="text-sm text-neutral-300 group-hover:text-emerald-300 font-medium truncate">{nextProject.title}</div>
                </div>
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 flex-shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
