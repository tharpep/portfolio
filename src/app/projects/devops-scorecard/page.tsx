import Link from "next/link";
import { getProjectBySlug } from "@/lib/getProjects";

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
        <h3 className="font-bold text-cyan-400">{title}</h3>
      </div>
      <p className="text-neutral-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function DevOpsScorecard() {
  const project = getProjectBySlug("devops-scorecard");
  
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
        
        <h1 className="text-5xl font-bold font-mono tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
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
            Built using Next.js for the embedded frontend and Azure API Web App for the backend, with secure Azure AD 
            authentication and real-time data integration through the Azure DevOps REST API. The extension transforms 
            traditional status meetings into instant, data-driven insights for both internal teams and external stakeholders.
          </p>
        </div>
      </section>

      {/* Features Overview */}
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
            description="Seamlessly integrates with Azure DevOps REST API and Azure AD authentication for secure data access."
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
            description="Instant insights for both internal teams and external stakeholders through embedded dashboard."
            icon="👥"
          />
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-8">System Architecture</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Data Collection Layer</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Azure DevOps REST API integration</li>
                <li>• Real-time sprint and work item data fetching</li>
                <li>• Webhook listeners for real-time updates (planned)</li>
                <li>• Scheduled data synchronization jobs (planned)</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Data Presentation Layer</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Sprint summary and status visualization</li>
                <li>• Goals and achievements tracking display</li>
                <li>• Impediments and risks identification</li>
                <li>• Next sprint planning overview</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Visualization Layer</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Embedded Next.js application within Azure DevOps UI</li>
                <li>• Real-time sprint summary dashboard</li>
                <li>• Executive summary reports</li>
                <li>• Custom work item board integration</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Infrastructure</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Azure API Web App backend services</li>
                <li>• Azure DevOps REST API integration</li>
                <li>• Azure AD authentication and authorization</li>
                <li>• Azure Static Web Apps for frontend deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-8">Impact & Results</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.highlights.map((highlight, index) => (
            <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 text-lg mt-1">✓</span>
                <p className="text-neutral-300">{highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Details */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-8">Technical Implementation</h2>
        <div className="space-y-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Azure DevOps Data Integration</h3>
            <p className="text-neutral-300 mb-6">
              Comprehensive data collection system that automatically gathers sprint information from Azure DevOps, 
              providing real-time visibility into sprint health and progress for stakeholders.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">Platform Integration</h4>
                <div className="flex flex-wrap gap-2">
                  <TechBadge tech="Azure DevOps" />
                  <TechBadge tech="Azure AD" />
                  <TechBadge tech="Azure Static Web Apps" />
                  <TechBadge tech="Azure API Web App" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">Data Categories</h4>
                <ul className="text-sm text-neutral-300 space-y-1">
                  <li>• Sprint goals and achievements</li>
                  <li>• Work item status and progress</li>
                  <li>• Impediments and risk tracking</li>
                  <li>• Next sprint planning items</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Sprint Data Visualization</h3>
            <p className="text-neutral-300 mb-6">
              Clean, organized presentation of sprint information that transforms Azure DevOps work item data 
              into an easily digestible format for both technical teams and business stakeholders.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-neutral-700/50">
                <div className="text-2xl font-bold text-cyan-400 mb-2">Goals</div>
                <div className="text-xs text-neutral-300">Sprint Objectives</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-neutral-700/50">
                <div className="text-2xl font-bold text-emerald-400 mb-2">Status</div>
                <div className="text-xs text-neutral-300">Health Indicators</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-neutral-700/50">
                <div className="text-2xl font-bold text-blue-400 mb-2">Planning</div>
                <div className="text-xs text-neutral-300">Next Sprint Items</div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Dashboard & Reporting</h3>
            <p className="text-neutral-300 mb-4">
              Created intuitive dashboard system that transforms complex DevOps metrics into actionable insights, 
              enabling teams to track progress and executives to understand organizational DevOps maturity at a glance.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge tech="Real-time Updates" />
              <TechBadge tech="Custom Filters" />
              <TechBadge tech="Export Capabilities" />
              <TechBadge tech="Mobile Responsive" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-8">Business Impact</h2>
        <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{project.impact}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-cyan-400 mb-4">Operational Benefits</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Eliminates need for lengthy status meeting presentations</li>
                <li>• Provides instant sprint visibility for stakeholders</li>
                <li>• Reduces time spent gathering sprint status information</li>
                <li>• Centralizes sprint health data in one accessible location</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-emerald-400 mb-4">Strategic Benefits</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Improves transparency for external stakeholders</li>
                <li>• Enables data-driven sprint planning decisions</li>
                <li>• Enhances Agile process visibility and accountability</li>
                <li>• Streamlines sprint review and retrospective preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-8">Project Timeline</h2>
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <span className="text-lg font-mono text-neutral-300">{project.timeline}</span>
        </div>
      </section>

      {/* Navigation */}
      <section className="flex justify-between items-center pt-12 border-t border-neutral-700">
        <Link 
          href="/projects/azure-etl-pipeline" 
          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5m7-7l-7 7 7 7"/>
          </svg>
          Previous Project
        </Link>
        
        <Link 
          href="/projects/dj-pete-beat-sequencer" 
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