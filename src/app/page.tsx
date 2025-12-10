import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export default function Home() {
  return (
    <main id="main" className="text-neutral-100 relative z-10">
      {/* ─────────── Hero Intro ─────────── */}
      <section className="relative text-center min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-32 py-16 sm:py-20 md:py-24 lg:py-28">
        {/* Content */}
        <ScrollFadeIn>
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tight mb-4 pt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400/80 to-blue-400/80 leading-tight">
              Pryce Tharpe
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto mb-8 prose-relaxed">
              Computer Engineering student at Purdue exploring software development through full-stack development, cloud automation, and AI integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
              <Link
                href="/projects"
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-0.5"
              >
                View Projects
              </Link>
              <Link
                href="https://github.com/tharpep"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-neutral-600 hover:border-neutral-500 text-neutral-300 hover:text-white rounded-xl transition-all duration-300 hover:bg-neutral-800 group"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Animated Scroll Indicator - positioned at bottom 12% for visibility */}
        <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 z-10">
          <div className="animate-fade-in">
            <a
              href="#divider"
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

      {/* Subtle Divider */}
      <div id="divider" className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto mb-16 scroll-mt-20"></div>

      {/* Main Content Section */}
      <div id="content" className="relative px-4 sm:px-8 md:px-16 lg:px-32 pb-16">

      {/* ─────────── Brief Story ─────────── */}
      <ScrollFadeIn>
        <section className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed border-l-2 border-cyan-500 pl-4 sm:pl-6 text-left">
            I build full-stack applications and integrate AI into production environments.
            In industry, I&apos;ve worked on cloud automation, AI enablement across engineering
            teams, and tools that scale. My personal projects explore RAG systems, AI assistants,
            and solving problems I care about.
          </p>
        </section>
      </ScrollFadeIn>

      {/* Subtle Divider */}
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto mb-16"></div>

      {/* ─────────── Featured Projects ─────────── */}
      <ScrollFadeIn delay={100}>
        <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto will-change-transform">
          <FeaturedProjectCard
            title="AI System Prompt Framework"
            href="/projects/ai-system-prompt"
            desc="Co-developed master IDE prompt standardizing AI-assisted coding workflows across engineering teams. Co-led company-wide training sessions and established AI standards."
            tech="OpenAI API"
            accent="cyan"
          />
          <FeaturedProjectCard
            title="MY-AI Personal Assistant"
            href="/projects/personal-ai-system"
            desc="Privacy-first AI system with RAG and tool integration. Local-first architecture with Qdrant vector storage and extensible tool framework. Building the AI assistant I want to use."
            tech="Python"
            accent="purple"
          />
          <FeaturedProjectCard
            title="SimRAG Reproduction"
            href="/projects/simrag-reproduction"
            desc="Deep dive into similarity-based RAG techniques. Built a modular implementation supporting local and cloud LLMs to understand retrieval fundamentals and fine-tuning beyond what was required."
            tech="Python"
            accent="blue"
          />
          <FeaturedProjectCard
            title="Azure DevOps Scorecard"
            href="/projects/devops-scorecard"
            desc="Real-time sprint dashboard extension for Azure DevOps. Built the React/Node.js application from mockups to production at Mesh Systems, giving teams instant visibility into sprint health and status."
            tech="React"
            accent="emerald"
          />
        </div>
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-lg group"
          >
            View all projects
            <span className="inline-block group-hover:translate-x-1 transition-transform ml-1">→</span>
          </Link>
        </div>
      </section>
      </ScrollFadeIn>

      {/* Subtle Divider */}
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto mb-16"></div>

      {/* ─────────── Current Work ─────────── */}
      <ScrollFadeIn delay={200}>
        <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-8 text-center">
          Currently
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 p-4 sm:p-6 md:p-8">
            <ul className="space-y-4 text-neutral-300 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5 text-xs">●</span>
                <span>Software Engineering Intern at Mesh Systems (Cloud, Mobile, DevOps teams)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5 text-xs">●</span>
                <span>Co-developed AI prompt framework used across engineering departments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5 text-xs">●</span>
                <span>Building personal projects that solve problems I encounter daily</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5 text-xs">●</span>
                <span>Senior in Computer Engineering at Purdue University</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      </ScrollFadeIn>

      {/* Subtle Divider */}
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto mb-16"></div>

      {/* ─────────── Let's Connect ─────────── */}
      <ScrollFadeIn delay={300}>
        <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-8 text-center">
          Let&apos;s Connect
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
            I&apos;m looking for full-time software engineering roles and enjoy talking about AI, cloud systems, or interesting technical problems.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/tharpep"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-600 hover:border-neutral-500 text-neutral-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-neutral-800"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pryce-tharpe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-600 hover:border-neutral-500 text-neutral-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-neutral-800"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:tharpep_pro@outlook.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-600 hover:border-neutral-500 text-neutral-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-neutral-800"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </div>
          <div className="mt-6">
            <Link
              href="/about"
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-lg group"
            >
              More About Me
              <span className="inline-block group-hover:translate-x-1 transition-transform ml-1">→</span>
            </Link>
          </div>
        </div>
      </section>
      </ScrollFadeIn>

      </div>
    </main>
  );
}

/* ─────────── Components ─────────── */
function FeaturedProjectCard({ 
  title, 
  href, 
  desc, 
  tech, 
  accent = "cyan" 
}: { 
  title: string; 
  href: string; 
  desc: string; 
  tech: string; 
  accent?: "cyan" | "blue" | "purple" | "emerald";
}) {
  const accentClasses = {
    cyan: "border-cyan-500/50 group-hover:border-cyan-400/70 group-hover:shadow-cyan-400/10",
    blue: "border-blue-500/50 group-hover:border-blue-400/70 group-hover:shadow-blue-400/10",
    purple: "border-purple-500/50 group-hover:border-purple-400/70 group-hover:shadow-purple-400/10",
    emerald: "border-emerald-500/50 group-hover:border-emerald-400/70 group-hover:shadow-emerald-400/10"
  };

  const textClasses = {
    cyan: "group-hover:text-cyan-300",
    blue: "group-hover:text-blue-300", 
    purple: "group-hover:text-purple-300",
    emerald: "group-hover:text-emerald-300"
  };

  const tagClasses = {
    cyan: "bg-cyan-900/30 text-cyan-300 border-cyan-700/50",
    blue: "bg-blue-900/30 text-blue-300 border-blue-700/50",
    purple: "bg-purple-900/30 text-purple-300 border-purple-700/50",
    emerald: "bg-emerald-900/30 text-emerald-300 border-emerald-700/50"
  };

  return (
    <Link
      href={href}
      className={`group block rounded-2xl border bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-4 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ${accentClasses[accent]}`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className={`font-bold text-xl text-white transition-colors ${textClasses[accent]}`}>
          {title}
        </h3>
        <span className={`px-3 py-1 text-sm font-medium rounded-lg border ${tagClasses[accent]}`}>
          {tech}
        </span>
      </div>
      <p className="text-neutral-300 leading-relaxed mb-6">
        {desc}
      </p>
      <div className={`flex items-center text-sm font-medium transition-colors ${textClasses[accent]} group-hover:translate-x-1 transition-transform`}>
        View Details
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M7 17l10-10M17 7H7v10"/>
        </svg>
      </div>
    </Link>
  );
}

