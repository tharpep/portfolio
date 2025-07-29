import Link from "next/link";
import { getProjectBySlug } from "@/lib/getProjects";

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="px-3 py-1 text-sm font-medium bg-blue-900/30 text-blue-300 rounded-full border border-blue-700/50">
      {tech}
    </span>
  );
}

function HighlightCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 hover:border-cyan-500/50 transition-colors">
      <h3 className="font-bold text-cyan-400 mb-2">{title}</h3>
      <p className="text-neutral-300 text-sm">{description}</p>
    </div>
  );
}

export default function AzureETLPipeline() {
  const project = getProjectBySlug("azure-etl-pipeline");
  
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

      {/* Process Transformation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-8">Process Transformation</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-red-900/10 to-red-800/10 border border-red-700/50">
            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Before: Manual Process
            </h3>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>13-step manual Azure cost analysis process</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Required 2-3 hours of an engineer&apos;s time monthly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Error-prone manual data collection and calculations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Inconsistent reporting timing and formats</span>
              </li>
            </ul>
          </div>
          
          <div className="p-8 rounded-xl bg-gradient-to-br from-green-900/10 to-green-800/10 border border-green-700/50">
            <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              After: Automated Pipeline
            </h3>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Automated pipeline completes analysis in 5-10 minutes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Zero manager involvement in routine operations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Reliable, consistent data processing with validation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Standardized reporting with automated delivery</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-8">Technical Implementation</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Data Extraction & Processing</h3>
            <p className="text-neutral-300 mb-4">
              Built automated system using Microsoft Fabric to extract Azure billing data and SQL for complex transformations, 
              handling cost categorization and departmental allocation with built-in validation and error handling.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge tech="Microsoft Fabric" />
              <TechBadge tech="SQL Transformations" />
              <TechBadge tech="Data Validation" />
            </div>
          </div>
          
          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Automation & Monitoring</h3>
            <p className="text-neutral-300 mb-4">
              Implemented monthly scheduling with comprehensive monitoring and recovery capabilities. 
              Responsible for ongoing pipeline maintenance, database recovery, and continuous enhancements.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge tech="Azure Functions" />
              <TechBadge tech="Scheduled Execution" />
              <TechBadge tech="Recovery Procedures" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-8">Key Achievements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.highlights.map((highlight, index) => (
            <HighlightCard 
              key={index}
              title={`Achievement ${index + 1}`}
              description={highlight}
            />
          ))}
        </div>
      </section>

      {/* Project Scope & Responsibilities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-8">Project Scope & Responsibilities</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Development & Implementation</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>End-to-end pipeline architecture and design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Microsoft Fabric workspace configuration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>SQL query optimization and data modeling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Error handling and monitoring implementation</span>
              </li>
            </ul>
          </div>
          
          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Ongoing Support</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Monthly pipeline monitoring and execution</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Database recovery and backup procedures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Continuous enhancements based on business needs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Performance optimization and scaling</span>
              </li>
            </ul>
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
          
          <div className="text-center">
            <div className="inline-block p-6 rounded-xl bg-cyan-900/20 border border-cyan-700/50 mb-6">
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-neutral-300 font-medium">Time Reduction (2-3 hours → 5-10 minutes)</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-cyan-400 mb-4">Operational Benefits</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Eliminated manual effort for managers</li>
                <li>• Improved data accuracy and consistency</li>
                <li>• Enabled reliable monthly financial analysis</li>
                <li>• Reduced risk of human error in calculations</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-emerald-400 mb-4">Technical Achievements</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Transformed 13-step manual process into automated workflow</li>
                <li>• Built resilient system with recovery capabilities</li>
                <li>• Delivered highly reliable, repeatable results</li>
                <li>• Presented solution at company sprint reviews</li>
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
          href="/projects" 
          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5m7-7l-7 7 7 7"/>
          </svg>
          All Projects
        </Link>
        
        <Link 
          href="/projects/devops-scorecard" 
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