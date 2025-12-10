import type { Metadata } from "next";
import Link from "next/link";
import { getProjectBySlug, getNextProject, getPreviousProject } from "@/lib/getProjects";

export const metadata: Metadata = {
  title: "Azure ETL Pipeline – Projects – Pryce Tharpe",
  description: "Automated financial analysis with Microsoft Fabric and Azure services.",
  alternates: { canonical: "/projects/azure-etl-pipeline" },
};

// Enable static generation for better performance
export const dynamic = 'force-static';

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="px-3 py-1 text-sm font-medium bg-blue-900/30 text-blue-300 rounded-full border border-blue-700/50">
      {tech}
    </span>
  );
}


// Pre-compute data at build time for better performance
const project = getProjectBySlug("azure-etl-pipeline");
const nextProject = getNextProject("azure-etl-pipeline");
const prevProject = getPreviousProject("azure-etl-pipeline");

export default function AzureETLPipeline() {
  
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
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
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
                <span>Minimal manager involvement in routine operations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Reliable data processing with validation</span>
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
        <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <h3 className="text-xl font-bold text-white mb-4">Data Extraction & Processing</h3>
          <p className="text-neutral-300 mb-4">
            Built automated system using Microsoft Fabric to extract Azure billing data and SQL for transformations, 
            handling cost categorization and departmental allocation with built-in validation and error handling.
          </p>
          <div className="flex flex-wrap gap-2">
            <TechBadge tech="Microsoft Fabric" />
            <TechBadge tech="SQL Transformations" />
            <TechBadge tech="Data Validation" />
          </div>
        </div>
      </section>

      {/* Key Achievements & Impact */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-cyan-300 mb-8">Key Achievements & Impact</h2>
        <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{project.impact}</h3>
          </div>
          
          <div className="text-center mb-8">
            <div className="inline-block p-6 rounded-xl bg-cyan-900/20 border border-cyan-700/50">
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-neutral-300 font-medium">Time Reduction (2-3 hours → 5-10 minutes)</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Key Achievements</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Automated 13-step manual process into workflow</li>
                <li>• Eliminated routine manager tasks with automated reporting</li>
                <li>• Built fault-tolerant pipeline with error recovery and monitoring</li>
                <li>• Delivered reliable, repeatable results for financial analysis</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Business Benefits</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Improved data accuracy and consistency</li>
                <li>• Enabled reliable monthly financial analysis</li>
                <li>• Reduced risk of human error in calculations</li>
                <li>• Presented solution at company sprint reviews</li>
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
      <section className="pt-12 border-t border-neutral-700">
        {/* Desktop Navigation */}
        <div className="hidden sm:flex justify-between items-center">
          <Link 
            href={`/projects/${prevProject?.slug}`}
            className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5m7-7l-7 7 7 7"/>
            </svg>
            Previous Project
          </Link>
          
          <Link 
            href="/projects" 
            className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            All Projects
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14m-7-7l7 7-7 7"/>
            </svg>
          </Link>
          
          <Link 
            href={`/projects/${nextProject?.slug}`}
            className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Next Project
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14m-7-7l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden space-y-4">
          <div className="flex justify-between">
            <Link 
              href={`/projects/${prevProject?.slug}`}
              className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 12H5m7-7l-7 7 7 7"/>
              </svg>
              Previous
            </Link>
            
            <Link 
              href={`/projects/${nextProject?.slug}`}
              className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
            >
              Next
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14m-7-7l7 7-7 7"/>
              </svg>
            </Link>
          </div>
          
          <div className="text-center">
            <Link 
              href="/projects" 
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
            >
              All Projects
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14m-7-7l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 