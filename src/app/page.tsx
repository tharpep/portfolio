import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12 min-h-screen">
      
      {/* ─────────── Hero Intro ─────────── */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold font-mono tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Hey, I'm Pryce 👋
        </h1>
        <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto mb-8">
          Senior computer-engineering student at Purdue, currently rotating through the 
          <span className="text-cyan-400 font-semibold"> Cloud, Mobile & DevOps teams</span> at Mesh Systems. 
          I love building resilient cloud platforms, tinkering with IoT hardware, and sharing what I learn along the way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Link
            href="/projects"
            className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            View Projects
          </Link>
          <Link
            href="/Pryce_Tharpe_Resume.pdf"
            className="px-8 py-3 border border-neutral-600 hover:border-neutral-500 text-neutral-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:bg-neutral-700 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v11m0 0-3.25-3.25M12 15.5l3.25-3.25M4.75 19.25h14.5" />
            </svg>
            Download CV
          </Link>
        </div>
      </section>

      {/* ─────────── Quick Impact Stats ─────────── */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-2xl font-bold text-cyan-400 mb-1">95%</div>
          <div className="text-neutral-300 text-sm">Process Time Reduction</div>
        </div>
        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-2xl font-bold text-emerald-400 mb-1">Company-wide</div>
          <div className="text-neutral-300 text-sm">AI Standard Adoption</div>
        </div>
        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-2xl font-bold text-blue-400 mb-1">7</div>
          <div className="text-neutral-300 text-sm">Projects Delivered</div>
        </div>
      </section>

      {/* ─────────── Featured Projects ─────────── */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6">
          Featured Projects
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <FeaturedProjectCard
            title="AI System Prompt Framework"
            href="/projects/ai-system-prompt"
            desc="Company-wide AI prompt standard mandated by VP of Engineering"
            tech="OpenAI API"
          />
          <FeaturedProjectCard
            title="Azure ETL Pipeline"
            href="/projects/azure-etl-pipeline"
            desc="Automated financial analysis reducing 3-hour process to 5-10 minutes"
            tech="Microsoft Fabric"
          />
          <FeaturedProjectCard
            title="DJ Pete Beat Sequencer"
            href="/projects/dj-pete-beat-sequencer"
            desc="STM32 embedded firmware presented at Purdue Spark Challenge"
            tech="STM32"
          />
          <FeaturedProjectCard
            title="Azure DevOps Scorecard"
            href="/projects/devops-scorecard"
            desc="Real-time sprint visibility replacing 30+ minute meetings"
            tech="React"
          />
        </div>
        <div className="text-center mt-6">
          <Link 
            href="/projects" 
            className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            View all projects →
          </Link>
        </div>
      </section>

      {/* ─────────── Experience ─────────── */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6">
          Experience
        </h2>
        <div className="space-y-6">
          <ExperienceCard
            title="Software Engineering Intern"
            organization="Mesh Systems"
            period="May 2025 – Present"
            description="Rotating through Cloud, Mobile & DevOps teams in IoT-focused software solutions firm (150 employees, 3 locations). Leading AI enablement initiatives, building ETL pipelines, and developing Azure DevOps extensions."
            highlights={[
              "Co-developed company's master IDE prompt adopted as standard by VP of Engineering",
              "Built Azure ETL pipeline reducing 13-step, 3-hour process to 5-10 minutes",
              "Led company-wide AI enablement training across multiple departments",
              "Architected React/Next.js Azure DevOps Sprint Scorecard extension"
            ]}
          />
          <ExperienceCard
            title="Student Service Attendant"
            organization="Purdue Union Rack and Roll"
            period="August 2023 – Present"
            description="Front counter operations and facility management responsibilities, demonstrating reliability and customer service skills in team environments."
            highlights={[
              "Worked as part of small teams managing high-volume customer service operations",
              "Responsible for opening and closing facility procedures",
              "Maintained consistent performance standards in fast-paced environment"
            ]}
          />
          <ExperienceCard
            title="Counter Control"
            organization="Royal Pin Woodland"
            period="August 2021 – August 2024"
            description="Front register operations and customer service in recreational facility, with additional training and leadership responsibilities."
            highlights={[
              "Served as primary front counter associate handling customer transactions",
              "Provided lane service and facility support during peak hours",
              "Trained new employees including supervisors, demonstrating leadership capabilities"
            ]}
          />
        </div>
      </section>

      {/* ─────────── Education ─────────── */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6">
          Education
        </h2>
        <div className="space-y-6">
          <ExperienceCard
            title="Computer Engineering, B.S."
            organization="Purdue University"
            period="August 2022 – May 2026"
            description="Honors Program, Goss Scholars Learning Community. Coursework spanning software engineering, machine learning, embedded systems, and data automation with hands-on project experience."
            highlights={[
              "Developed STM32 embedded firmware for beat sequencer presented at Spark Challenge",
              "Engineered automated FM radio detection using USRP and GNU Radio",
              "Built custom GPTs for system prompt engineering and career documentation",
              "Microsoft Certified: Azure Fundamentals (AZ-900)"
            ]}
          />
        </div>
      </section>

      {/* ─────────── Hidden Photography Link ─────────── */}
      <div className="mt-20 text-right">
        <Link 
          href="/photography" 
          className="text-neutral-500 hover:text-neutral-400 text-sm transition-colors duration-300"
        >
          Photography →
        </Link>
      </div>

    </main>
  );
}

/* ─────────── Components ─────────── */
function FeaturedProjectCard({ title, href, desc, tech }: { 
  title: string; 
  href: string; 
  desc: string; 
  tech: string; 
}) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-neutral-700 bg-neutral-800 p-6 hover:shadow-xl hover:shadow-cyan-400/10 hover:-translate-y-1 transition-all duration-300 hover:border-cyan-500/50"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        <span className="px-2 py-1 text-xs font-medium bg-blue-900/30 text-blue-300 rounded-md border border-blue-700/50">
          {tech}
        </span>
      </div>
      <p className="text-neutral-300 text-sm leading-relaxed mb-3">
        {desc}
      </p>
      <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
        View Details
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
    <div className="rounded-xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
        <div>
          <h3 className="font-bold text-lg text-white">{title}</h3>
          <p className="text-cyan-400 font-medium">{organization}</p>
        </div>
        <span className="text-neutral-400 text-sm font-mono mt-1 sm:mt-0">{period}</span>
      </div>
      <p className="text-neutral-300 text-sm leading-relaxed mb-4">
        {description}
      </p>
      {highlights.length > 0 && (
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-neutral-300">
              <span className="text-cyan-400 mt-1">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
