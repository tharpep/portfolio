import Link from "next/link";
import { getProjectBySlug } from "@/lib/getProjects";

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="px-3 py-1 text-sm font-medium bg-blue-900/30 text-blue-300 rounded-full border border-blue-700/50">
      {tech}
    </span>
  );
}

function MetricCard({ value, label, color = "cyan" }: { value: string; label: string; color?: string }) {
  const colorClasses = {
    cyan: "from-cyan-900/20 to-cyan-800/20 border-cyan-700/50 text-cyan-400",
    emerald: "from-emerald-900/20 to-emerald-800/20 border-emerald-700/50 text-emerald-400",
    blue: "from-blue-900/20 to-blue-800/20 border-blue-700/50 text-blue-400",
    orange: "from-orange-900/20 to-orange-800/20 border-orange-700/50 text-orange-400"
  };

  return (
    <div className={`text-center p-6 rounded-xl bg-gradient-to-br border ${colorClasses[color as keyof typeof colorClasses]}`}>
      <div className={`text-3xl font-bold mb-2 ${color === 'cyan' ? 'text-cyan-400' : color === 'emerald' ? 'text-emerald-400' : color === 'blue' ? 'text-blue-400' : 'text-orange-400'}`}>
        {value}
      </div>
      <div className="text-neutral-300 font-medium text-sm">{label}</div>
    </div>
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

      {/* Key Metrics */}
      <section className="grid md:grid-cols-4 gap-4 mb-16">
        <MetricCard value="100+" label="DevOps Metrics Tracked" color="cyan" />
        <MetricCard value="80%" label="Manual Auditing Reduction" color="emerald" />
        <MetricCard value="15+" label="Tool Integrations" color="blue" />
        <MetricCard value="40%" label="Team Velocity Improvement" color="orange" />
      </section>

      {/* Features Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-8">Core Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            title="Automated Assessment"
            description="Continuously monitors CI/CD pipelines, security policies, and deployment practices across all teams and projects."
            icon="🔄"
          />
          <FeatureCard 
            title="Interactive Dashboard"
            description="Real-time visualization of DevOps maturity scores with drill-down capabilities and trend analysis."
            icon="📈"
          />
          <FeatureCard 
            title="Multi-Platform Integration"
            description="Seamlessly connects with GitHub, Azure DevOps, Jenkins, Docker, Kubernetes, and monitoring tools."
            icon="🔗"
          />
          <FeatureCard 
            title="Compliance Tracking"
            description="Monitors adherence to security standards, deployment policies, and regulatory requirements."
            icon="🛡️"
          />
          <FeatureCard 
            title="Actionable Insights"
            description="Provides specific recommendations and improvement plans based on industry best practices."
            icon="💡"
          />
          <FeatureCard 
            title="Team Benchmarking"
            description="Compares team performance and identifies knowledge sharing opportunities across the organization."
            icon="🏆"
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
                <li>• REST API integrations with DevOps platforms</li>
                <li>• Webhook listeners for real-time updates</li>
                <li>• Scheduled data synchronization jobs</li>
                <li>• Custom metric collectors for specialized tools</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Analytics Engine</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Rule-based scoring algorithms</li>
                <li>• Trend analysis and pattern recognition</li>
                <li>• Comparative benchmarking logic</li>
                <li>• Automated recommendation generation</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Visualization Layer</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Interactive Grafana dashboards</li>
                <li>• Customizable team scorecards</li>
                <li>• Executive summary reports</li>
                <li>• Mobile-responsive interface</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Infrastructure</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Containerized microservices architecture</li>
                <li>• Prometheus metrics collection</li>
                <li>• PostgreSQL for configuration data</li>
                <li>• Redis for caching and session management</li>
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
            <h3 className="text-xl font-bold text-white mb-4">Automated Metric Collection</h3>
            <p className="text-neutral-300 mb-6">
              Built comprehensive data collection system that automatically gathers DevOps metrics from multiple sources, 
              eliminating manual reporting overhead and ensuring real-time accuracy across all team assessments.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">Supported Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  <TechBadge tech="GitHub Actions" />
                  <TechBadge tech="Azure DevOps" />
                  <TechBadge tech="Jenkins" />
                  <TechBadge tech="Docker Hub" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">Metric Categories</h4>
                <ul className="text-sm text-neutral-300 space-y-1">
                  <li>• Build success rates and frequency</li>
                  <li>• Deployment pipeline efficiency</li>
                  <li>• Security scan compliance</li>
                  <li>• Test coverage and quality gates</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Intelligent Scoring Algorithm</h3>
            <p className="text-neutral-300 mb-6">
              Developed weighted scoring system that evaluates teams across multiple DevOps dimensions, 
              providing objective assessment and personalized improvement roadmaps for each team.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-neutral-700/50">
                <div className="text-2xl font-bold text-cyan-400 mb-2">25%</div>
                <div className="text-xs text-neutral-300">CI/CD Automation</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-neutral-700/50">
                <div className="text-2xl font-bold text-emerald-400 mb-2">30%</div>
                <div className="text-xs text-neutral-300">Security & Compliance</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-neutral-700/50">
                <div className="text-2xl font-bold text-blue-400 mb-2">45%</div>
                <div className="text-xs text-neutral-300">Quality & Performance</div>
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
              <h4 className="text-lg font-bold text-cyan-400 mb-4">Operational Improvements</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Reduced audit preparation time from weeks to hours</li>
                <li>• Increased deployment frequency by 3x across teams</li>
                <li>• Improved mean time to recovery by 60%</li>
                <li>• Achieved 95% compliance score across all teams</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-emerald-400 mb-4">Strategic Benefits</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Enabled data-driven DevOps strategy decisions</li>
                <li>• Facilitated knowledge sharing between teams</li>
                <li>• Reduced onboarding time for new developers</li>
                <li>• Improved stakeholder confidence in delivery</li>
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
          href="/projects/beat-sequencer" 
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