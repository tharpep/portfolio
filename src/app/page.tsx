import Link from "next/link";

export default function Home() {
  return (
    <main id="main" className="bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-16 min-h-screen">
      
      {/* ─────────── Hero Intro ─────────── */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold font-mono tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400/80 to-blue-400/80">
          Pryce Tharpe
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto mb-8 prose-relaxed">
          Computer Engineering student at Purdue building scalable systems and thoughtful UIs across cloud, web, and embedded.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <Link
            href="/projects"
            className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-0.5"
          >
            View Projects
          </Link>
          <Link
            href="/Pryce_Tharpe_Resume.pdf"
            className="px-6 py-3 border border-neutral-600 hover:border-neutral-500 text-neutral-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-neutral-800 flex items-center justify-center gap-2 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-y-0.5 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v11m0 0-3.25-3.25M12 15.5l3.25-3.25M4.75 19.25h14.5" />
            </svg>
            Download Resume
          </Link>
        </div>
      </section>

      {/* ─────────── Featured Projects ─────────── */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto will-change-transform">
          <FeaturedProjectCard
            title="AI System Prompt Framework"
            href="/projects/ai-system-prompt"
            desc="Company-wide AI prompt standard highly encouraged and backed by VP of Engineering for engineering departments"
            tech="OpenAI API"
            accent="cyan"
          />
          <FeaturedProjectCard
            title="Azure ETL Pipeline"
            href="/projects/azure-etl-pipeline"
            desc="Automated financial analysis pipeline reducing processing time from 2-3 hours to 5-10 minutes"
            tech="Microsoft Fabric"
            accent="blue"
          />
          <FeaturedProjectCard
            title="DJ Pete Beat Sequencer"
            href="/projects/dj-pete-beat-sequencer"
            desc="STM32 embedded firmware with RGB keypads, presented at Purdue Spark Challenge"
            tech="STM32"
            accent="purple"
          />
          <FeaturedProjectCard
            title="Azure DevOps Scorecard"
            href="/projects/devops-scorecard"
            desc="Real-time sprint visibility extension replacing lengthy status meetings"
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

      {/* ─────────── Experience ─────────── */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-8 text-center">
          Experience
        </h2>
        <div className="space-y-8 max-w-5xl mx-auto">
          <ExperienceCard
            title="Software Engineering Intern"
            organization="Mesh Systems"
            period="May 2025 – Present"
            description="Rotating through Cloud, Mobile & DevOps teams at IoT-focused software solutions firm. Leading AI enablement initiatives, building automated pipelines, and developing enterprise extensions."
            highlights={[
              "Co-developed company's master IDE prompt highly encouraged and backed by VP of Engineering for engineering departments",
              "Built Azure ETL pipeline reducing 13-step manual process from 2-3 hours to 5-10 minutes",
              "Led 8 company-wide AI 101 training sessions plus 5 group/individual check-ins",
              "Architected React/Next.js Azure DevOps Sprint Scorecard extension from mockups to production"
            ]}
          />
          <ExperienceCard
            title="Student Service Attendant"
            organization="Purdue Union Rack and Roll"
            period="August 2023 – Present"
            description="Front counter operations and facility management, demonstrating reliability and customer service in team environments."
            highlights={[
              "Managed high-volume customer service operations in fast-paced environment",
              "Responsible for opening and closing facility procedures",
              "Maintained consistent performance standards while balancing academic responsibilities"
            ]}
          />
          <ExperienceCard
            title="Counter Associate"
            organization="Royal Pin Woodland"
            period="August 2021 – August 2024"
            description="Front operations and customer service in recreational facility, with training and leadership responsibilities."
            highlights={[
              "Served as primary front counter associate handling customer transactions",
              "Provided lane service and facility support during peak operational hours",
              "Trained new employees including supervisors, demonstrating leadership capabilities"
            ]}
          />
        </div>
      </section>

      {/* ─────────── Education ─────────── */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-8 text-center">
          Education
        </h2>
        <div className="max-w-5xl mx-auto">
          <ExperienceCard
            title="Computer Engineering, B.S."
            organization="Purdue University"
            period="August 2022 – May 2026"
            description="Honors Program, Goss Scholars Learning Community. Coursework spanning software engineering, machine learning, embedded systems, and data automation with extensive hands-on project experience."
            highlights={[
              "Developed STM32 embedded firmware for beat sequencer presented at Spark Challenge",
              "Engineered automated FM radio detection using USRP and GNU Radio",
              "Built custom GPTs for system prompt engineering and career documentation",
              "Microsoft Certified: Azure Fundamentals (AZ-900)"
            ]}
          />
        </div>
      </section>

      {/* Photography link removed per user request */}

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
      className={`group block rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${accentClasses[accent]}`}
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

function ExperienceCard({ 
  title, 
  organization, 
  period, 
  description, 
  highlights 
}: { 
  title: string; 
  organization: string; 
  period: string; 
  description: string; 
  highlights: string[]; 
}) {
  return (
    <div className="rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
        <div>
          <h3 className="font-bold text-xl text-white mb-1">{title}</h3>
          <p className="text-cyan-400 font-semibold text-lg">{organization}</p>
        </div>
        <span className="text-neutral-400 font-mono mt-2 sm:mt-0 text-sm bg-neutral-800/60 px-3 py-1 rounded-lg">{period}</span>
      </div>
      <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
        {description}
      </p>
      {highlights.length > 0 && (
        <ul className="space-y-3">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3 text-neutral-300">
              <span className="text-cyan-400 mt-1.5 text-xs">●</span>
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
