import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Azure DevOps Scorecard – Projects – Pryce Tharpe",
  description: "Real-time sprint visibility with a Next.js Azure DevOps extension.",
  alternates: { canonical: "/projects/devops-scorecard" },
};

// Enable static generation for better performance
export const dynamic = 'force-static';
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
    <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 hover:border-cyan-500/50 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-bold text-white">{title}</h3>
      </div>
      <p className="text-neutral-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

// Pre-compute data at build time for better performance
const project = getProjectBySlug("devops-scorecard");
const nextProject = getNextProject("devops-scorecard");
const prevProject = getPreviousProject("devops-scorecard");

export default function DevopsScorecard() {
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12 min-h-screen">
      {/* Navigation */}
      <nav className="mb-8">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
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
          <div className="text-4xl">📊</div>
          <span className="px-3 py-1 text-xs font-medium bg-emerald-900/30 text-emerald-300 rounded-full border border-emerald-700/50">
            Deployed
          </span>
        </div>
        
        <h1 className="text-5xl font-bold font-mono tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
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

      {/* Project Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-8">Project Overview</h2>
        <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <p className="text-neutral-300 leading-relaxed mb-4">
            Developed a comprehensive Azure DevOps extension that integrates a custom &quot;Sprint Summary&quot; board directly into 
            Azure DevOps work items, providing real-time sprint health and status visibility for stakeholders.
          </p>
          <p className="text-neutral-300 leading-relaxed">
            Built using Next.js for the embedded frontend and Azure API Web App for the backend, with real-time data 
            integration through the Azure DevOps REST API. The extension transforms traditional status meetings into 
            instant, data-driven insights for both internal teams and external stakeholders.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-8">Core Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            title="Sprint Summary Dashboard"
            description="Clean, organized display of current sprint information including status, goals, achievements, and key metrics."
            icon="📊"
          />
          <FeatureCard 
            title="Goals & Achievements Tracking"
            description="Visual representation of sprint goals with completion status and accomplishments throughout the sprint."
            icon="🎯"
          />
          <FeatureCard 
            title="Azure DevOps Integration"
            description="Seamlessly integrates with Azure DevOps REST API for secure data access within the Azure DevOps environment."
            icon="🔗"
          />
          <FeatureCard 
            title="Impediments & Risks Management"
            description="Clear visibility into sprint blockers, risks, and their impact levels with resolution planning."
            icon="⚠️"
          />
          <FeatureCard 
            title="Next Sprint Planning"
            description="Overview of upcoming sprint goals and planning items to maintain forward momentum."
            icon="📅"
          />
          <FeatureCard 
            title="Stakeholder Visibility"
            description="Data-driven insights for both internal teams and external stakeholders through embedded dashboard."
            icon="👥"
          />
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-8">Technical Architecture</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-lg font-bold text-white mb-4">Backend & Data Integration</h3>
            <ul className="space-y-2 text-neutral-300 text-sm">
              <li>• Azure API Web App backend services</li>
              <li>• Azure DevOps REST API integration</li>
              <li>• Azure DevOps native authentication</li>
              <li>• Sprint and work item data fetching</li>
            </ul>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-lg font-bold text-white mb-4">Frontend & Visualization</h3>
            <ul className="space-y-2 text-neutral-300 text-sm">
              <li>• Embedded Next.js application within Azure DevOps UI</li>
              <li>• Sprint summary dashboard and status visualization</li>
              <li>• Goals, achievements, and impediments tracking</li>
              <li>• Azure Static Web Apps for frontend deployment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-8">Impact & Results</h2>
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
                    <span className="text-cyan-400 text-lg mt-1">✓</span>
                    <p className="text-neutral-300 text-sm">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Business Benefits</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Eliminates need for lengthy status meeting presentations</li>
                <li>• Provides sprint visibility for stakeholders</li>
                <li>• Reduces time spent gathering sprint status information</li>
                <li>• Improves transparency for external stakeholders</li>
                <li>• Enables data-driven sprint planning decisions</li>
                <li>• Enhances Agile process visibility and accountability</li>
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
          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5m7-7l-7 7 7 7"/>
          </svg>
          Previous Project
        </Link>
        
        <Link 
          href="/projects" 
          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          All Projects
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14m-7-7l7 7-7 7"/>
          </svg>
        </Link>
        
        <Link 
          href={`/projects/${nextProject?.slug}`}
          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
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