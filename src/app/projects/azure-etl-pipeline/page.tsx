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

      {/* Key Metrics */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="text-center p-8 rounded-xl bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 border border-cyan-700/50">
          <div className="text-4xl font-bold text-cyan-400 mb-2">75%</div>
          <div className="text-neutral-300 font-medium">Processing Time Reduction</div>
        </div>
        <div className="text-center p-8 rounded-xl bg-gradient-to-br from-emerald-900/20 to-emerald-800/20 border border-emerald-700/50">
          <div className="text-4xl font-bold text-emerald-400 mb-2">$500K</div>
          <div className="text-neutral-300 font-medium">Annual Cost Savings</div>
        </div>
        <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-700/50">
          <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
          <div className="text-neutral-300 font-medium">System Uptime SLA</div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-8">Architecture Overview</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Data Ingestion Layer</h3>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Real-time streaming from IoT sensors via Azure Event Hubs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Batch processing for historical data migration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Schema validation and data quality checks</span>
              </li>
            </ul>
          </div>
          
          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Processing & Analytics</h3>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Apache Spark for distributed data transformation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Azure Synapse Analytics for complex aggregations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Machine learning models for anomaly detection</span>
              </li>
            </ul>
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

      {/* Technical Implementation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-8">Technical Implementation</h2>
        <div className="space-y-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Data Pipeline Optimization</h3>
            <p className="text-neutral-300 mb-4">
              Implemented parallel processing architecture that dramatically reduced processing time from 8 hours to 2 hours for daily data loads. 
              Key optimizations included partitioning strategies, columnstore indexing, and intelligent data distribution across compute nodes.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge tech="Parallel Processing" />
              <TechBadge tech="Columnstore Indexing" />
              <TechBadge tech="Data Partitioning" />
            </div>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Real-time Anomaly Detection</h3>
            <p className="text-neutral-300 mb-4">
              Built machine learning models using Azure Machine Learning to detect equipment anomalies in real-time, 
              enabling predictive maintenance that prevents costly downtime and extends equipment lifecycle.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge tech="Azure ML" />
              <TechBadge tech="Predictive Analytics" />
              <TechBadge tech="Real-time Processing" />
            </div>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Automated Reporting System</h3>
            <p className="text-neutral-300 mb-4">
              Developed automated Power BI reporting system that delivers daily insights to 50+ stakeholders, 
              reducing manual report generation from 4 hours to 15 minutes while improving data accuracy and consistency.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge tech="Power BI" />
              <TechBadge tech="Automation" />
              <TechBadge tech="Data Visualization" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-8">Business Impact</h2>
        <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{project.impact}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-cyan-400 mb-4">Operational Excellence</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Reduced manual data processing by 80%</li>
                <li>• Improved data accuracy from 92% to 99.7%</li>
                <li>• Eliminated weekend maintenance windows</li>
                <li>• Achieved 99.9% pipeline uptime SLA</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-emerald-400 mb-4">Financial Benefits</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• $500K annual savings from predictive maintenance</li>
                <li>• 75% reduction in infrastructure costs</li>
                <li>• ROI achieved within 6 months of deployment</li>
                <li>• Enabled data-driven decisions across operations</li>
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