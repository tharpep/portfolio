import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export default function Home() {
  return (
    <main id="main" className="text-neutral-100 relative z-10">
      {/* ─────────── Hero Intro ─────────── */}
      <section className="relative text-center min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-32 py-16 sm:py-20 md:py-24 lg:py-28 pb-24 sm:pb-20 md:pb-24 lg:pb-28">
        {/* Content */}
        <ScrollFadeIn>
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400/80 to-blue-400/80 leading-tight">
              Hi, I&apos;m Pryce Tharpe <span className="text-cyan-400">👋</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto mb-8 prose-relaxed">
              Computer Engineering senior at Purdue. Interested in full-stack development, cloud automation, and AI integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-2xl mx-auto">
              <Link
                href="/resume"
                className="px-6 py-3 border border-neutral-600 hover:border-cyan-500/50 text-neutral-300 hover:text-white font-semibold rounded-xl transition-[transform,box-shadow,border-color,color,background] duration-300 ease-out hover:bg-neutral-800/50 hover:shadow-lg hover:-translate-y-0.5"
              >
                Resume
              </Link>
              <Link
                href="/projects"
                className="px-6 py-3 border border-neutral-600 hover:border-cyan-500/50 text-neutral-300 hover:text-white font-semibold rounded-xl transition-[transform,box-shadow,border-color,color,background] duration-300 ease-out hover:bg-neutral-800/50 hover:shadow-lg hover:-translate-y-0.5"
              >
                View Projects
              </Link>
              <Link
                href="https://github.com/tharpep"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-600 hover:border-cyan-500/50 text-neutral-300 hover:text-white font-semibold rounded-xl transition-[transform,box-shadow,border-color,color,background] duration-300 ease-out hover:bg-neutral-800/50 hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
                GitHub
              </Link>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 sm:bottom-[12%] left-1/2 -translate-x-1/2 z-10">
          <div className="animate-fade-in">
            <a
              href="#content"
              className="flex flex-col items-center gap-2 text-cyan-400/60 hover:text-cyan-400 transition-colors group"
              aria-label="Scroll to content"
            >
              <span className="text-xs font-mono tracking-wider">Scroll</span>
              <svg
                className="w-6 h-6 animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────── Content ─────────── */}
      <div className="relative px-4 sm:px-8 md:px-16 lg:px-32 pb-16">

        {/* ─────────── Featured Projects ─────────── */}
        <ScrollFadeIn delay={100}>
          <section className="mb-16 md:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold font-mono tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-8 text-center">
              Featured Projects
            </h2>

            {/* Lead — Sazed */}
            <div className="max-w-6xl mx-auto mb-6">
              <LeadProjectCard
                title="Sazed - Personal AI Agent"
                href="/projects/sazed"
                desc="End-to-end personal AI agent with agentic tool use, persistent memory, streaming chat, and Claude Desktop integration via MCP. Built with a React/Tauri desktop app and FastAPI backend on GCP."
                technologies={["Python", "FastAPI", "Anthropic SDK", "React 19", "Tauri", "FastMCP", "PostgreSQL"]}
                timeline="Jan 2025 - Present"
                status="Active"
              />
            </div>

            {/* Supporting projects — 2×2 */}
            <div className="grid gap-4 md:gap-5 sm:grid-cols-2 max-w-6xl mx-auto">
              <ProjectCard
                title="AI System Prompt Framework"
                href="/projects/ai-system-prompt"
                desc="Co-developed master IDE prompt standardizing AI-assisted coding across engineering teams."
                technologies={["Prompt Engineering", "Cursor IDE", "Python"]}
                timeline="Aug 2025 - Present"
              />
              <ProjectCard
                title="Azure DevOps Scorecard"
                href="/projects/devops-scorecard"
                desc="Real-time sprint dashboard extension for Azure DevOps, built from mockups to production."
                technologies={["React", "Node.js", "Azure DevOps SDK"]}
                timeline="Jun 2025 - Present"
              />
              <ProjectCard
                title="SimRAG Reproduction"
                href="/projects/simrag-reproduction"
                desc="Similarity-based RAG implementation supporting local and cloud LLMs for retrieval research."
                technologies={["Python", "Qdrant", "PyTorch"]}
                timeline="Aug - Dec 2025"
              />
              <ProjectCard
                title="Azure ETL Pipeline"
                href="/projects/azure-etl-pipeline"
                desc="Automated financial cost analysis pipeline using Microsoft Fabric, SQL, and Power BI."
                technologies={["Microsoft Fabric", "SQL", "Power BI"]}
                timeline="Jun - Aug 2025"
              />
            </div>

            <div className="text-center mt-8">
              <Link
                href="/projects"
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
              >
                View all projects
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-300 ease-out ml-1">&rarr;</span>
              </Link>
            </div>
          </section>
        </ScrollFadeIn>

        {/* ─────────── Currently ─────────── */}
        <ScrollFadeIn delay={200}>
          <section className="mb-16 md:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold font-mono tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-6 md:mb-8 text-center">
              Currently
            </h2>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-3 text-neutral-300 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1.5 text-xs">●</span>
                  <span>Software Engineering Intern at Mesh Systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1.5 text-xs">●</span>
                  <span>Iterating on the Azure DevOps scorecard project</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1.5 text-xs">●</span>
                  <span>Building Sazed and expanding its knowledge base</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1.5 text-xs">●</span>
                  <span>Senior in Computer Engineering at Purdue University</span>
                </li>
              </ul>
            </div>
          </section>
        </ScrollFadeIn>

        {/* ─────────── Connect ─────────── */}
        <ScrollFadeIn delay={300}>
          <div className="border-t border-neutral-800 pt-10 pb-8 text-center">
            <p className="text-neutral-400 text-sm">
              Open to opportunities starting 2026.{" "}
              <a href="mailto:tharpep_pro@outlook.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                tharpep_pro@outlook.com
              </a>
              {" / "}
              <a
                href="https://www.linkedin.com/in/pryce-tharpe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                LinkedIn
              </a>
              {" / "}
              <a
                href="https://github.com/tharpep"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                GitHub
              </a>
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </main>
  );
}

/* ─────────── Components ─────────── */

function LeadProjectCard({
  title,
  href,
  desc,
  technologies,
  timeline,
  status,
}: {
  title: string;
  href: string;
  desc: string;
  technologies: string[];
  timeline: string;
  status: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-neutral-700 bg-neutral-800/30 hover:border-cyan-500/40 transition-colors"
    >
      <div className="p-5 md:p-7 md:flex md:gap-8 md:items-start">
        <div className="md:w-40 flex-shrink-0 mb-3 md:mb-0">
          <span className="text-xs font-mono text-neutral-500">{timeline}</span>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="text-xs text-neutral-400">{status}</span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
            {title}
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-3">{desc}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {technologies.map((tech) => (
              <span key={tech} className="text-xs font-mono text-neutral-500">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

function ProjectCard({
  title,
  href,
  desc,
  technologies,
  timeline,
}: {
  title: string;
  href: string;
  desc: string;
  technologies: string[];
  timeline: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-neutral-700 bg-neutral-800/30 hover:border-cyan-500/40 transition-colors p-5"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-white group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-neutral-400 text-sm leading-relaxed mb-3">{desc}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {technologies.map((tech) => (
            <span key={tech} className="text-xs font-mono text-neutral-500">
              {tech}
            </span>
          ))}
        </div>
        <span className="text-xs font-mono text-neutral-600 flex-shrink-0 ml-3">{timeline}</span>
      </div>
    </Link>
  );
}
