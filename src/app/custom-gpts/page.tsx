import Link from "next/link";

export default function CustomGPTs() {
  return (
    <main className="bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-16 min-h-screen">
      
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
          Custom GPTs
        </h1>
        <p className="text-xl text-neutral-300 leading-relaxed max-w-4xl mx-auto mb-8">
          A collection of specialized AI assistants I&apos;ve designed and deployed to solve specific problems, 
          from enterprise workflows to personal productivity and creative exploration.
        </p>
      </section>

      {/* Company GPTs */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-8">
          Enterprise Solutions
        </h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          <GPTCard
            title="MeshGPT"
            description="Internal AI assistant designed to help employees effectively utilize ChatGPT in their daily workflows. Provides guidance on prompt engineering, use cases, and best practices for AI integration."
            category="Company Internal"
            status="private"
            accent="cyan"
          />
          <GPTCard
            title="BOM Specialist"
            description="Specialized assistant for Bill of Materials (BOM) health checks and comprehensive reporting. Streamlines quality assurance processes and identifies potential issues in manufacturing documentation."
            category="Company Internal"
            status="private"
            accent="blue"
          />
        </div>
      </section>

      {/* Personal GPTs */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-8">
          Personal Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <GPTCard
            title="Words of Radiance"
            description="Insightful reading companion for immersive, story-rich books across all genres. Features a private version with Supabase database integration for enhanced personalization."
            category="Literature & Reading"
            link="https://chatgpt.com/g/g-6849ab4f2f0881918511349f88b1767b-words-of-radiance"
            accent="purple"
          />
          <GPTCard
            title="Ghostmind"
            description="Immersive game guide that tracks and roleplays through quests, builds, and lore across all games. Dynamic assistant that adapts to your gaming style and preferences."
            category="Gaming"
            link="https://chatgpt.com/g/g-6849ad1761a88191aeb8de4a82f7f4a6-ghostmind"
            accent="emerald"
          />
          <GPTCard
            title="Dynamic Exam Coach"
            description="Intelligent study companion that helps you study smart with adaptive quizzes, personalized plans, comprehensive summaries, and tailored exam preparation strategies."
            category="Education"
            link="https://chatgpt.com/g/g-687142b75f2881919ba39666ea19c9e5-dynamic-exam-coach"
            accent="blue"
          />
          <GPTCard
            title="Opportunity Finder"
            description="Advanced job matching assistant powered by GPT-4 that analyzes resumes and finds statistically strong job matches based on live listings and deep research capabilities."
            category="Career Development"
            link="https://chatgpt.com/g/g-6880f856757481919848fa2d21948c62-opportunity-finder"
            accent="cyan"
          />
          <GPTCard
            title="System Prompt Architect"
            description="Expert assistant for crafting and refining system prompts using the latest prompt engineering research. Essential tool for AI development and optimization."
            category="AI Development"
            link="https://chatgpt.com/g/g-685dcb4de8ec8191b120d4a5b983a320-system-prompt-architect"
            accent="purple"
          />
          <GPTCard
            title="BoilerPlanner"
            description="Purdue University course planning assistant that tracks, prioritizes, and intelligently manages semester tasks. Currently in active development with expanded features planned."
            category="Academic Planning"
            link="https://chatgpt.com/g/g-684ae29456508191bdbb52e29feb7002-boilerplanner"
            status="development"
            accent="emerald"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <div className="bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 rounded-2xl border border-neutral-700 p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in Custom AI Solutions?
          </h3>
          <p className="text-neutral-300 leading-relaxed mb-6">
            I specialize in designing custom GPTs tailored to specific workflows, industries, and use cases. 
            From enterprise automation to creative assistance, let&apos;s explore how AI can solve your unique challenges.
          </p>
          <a
            href="mailto:ptharpe@purdue.edu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 2.25-10.5 8.25L3 9" />
            </svg>
            Let&apos;s Collaborate
          </a>
        </div>
      </section>
    </main>
  );
}

/* ─────────── GPT Card Component ─────────── */
function GPTCard({ 
  title, 
  description, 
  category, 
  link,
  status,
  accent = "cyan" 
}: { 
  title: string; 
  description: string; 
  category: string; 
  link?: string;
  status?: "private" | "development";
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

  const CardContent = () => (
    <div className={`group rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-6 transition-all duration-300 h-80 flex flex-col ${
      link ? `hover:shadow-xl hover:-translate-y-1 ${accentClasses[accent]} cursor-pointer` : ''
    }`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className={`font-bold text-xl text-white transition-colors ${link ? textClasses[accent] : ''}`}>
          {title}
        </h3>
        <div className="flex flex-col gap-2">
          <span className={`px-3 py-1 text-sm font-medium rounded-lg border ${tagClasses[accent]}`}>
            {category}
          </span>
          {status && (
            <span className={`px-3 py-1 text-xs font-medium rounded-lg border text-center ${
              status === 'private' 
                ? 'bg-neutral-800/60 text-neutral-400 border-neutral-600'
                : 'bg-amber-900/30 text-amber-300 border-amber-700/50'
            }`}>
              {status === 'private' ? 'Private' : 'In Development'}
            </span>
          )}
        </div>
      </div>
      <p className="text-neutral-300 leading-relaxed mb-4 flex-grow">
        {description}
      </p>
      <div className="mt-auto">
        {link && (
          <div className={`flex items-center text-sm font-medium transition-colors ${textClasses[accent]} group-hover:translate-x-1 transition-transform`}>
            Try it out
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M7 17l10-10M17 7H7v10"/>
            </svg>
          </div>
        )}
        {status === 'private' && (
          <div className="text-neutral-500 text-sm">
            Internal company tool
          </div>
        )}
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
} 