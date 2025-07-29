import Link from "next/link";
import { getProjectBySlug, getNextProject, getPreviousProject } from "@/lib/getProjects";

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="px-3 py-1 text-sm font-medium bg-green-900/30 text-green-300 rounded-full border border-green-700/50">
      {tech}
    </span>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 hover:border-green-500/50 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl group-hover:scale-110 transition-transform">{icon}</span>
        <h3 className="font-bold text-green-400 group-hover:text-green-300 transition-colors">{title}</h3>
      </div>
      <p className="text-neutral-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function CodeExample({ title, code }: { title: string; code: string }) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
      <h4 className="font-semibold text-green-400 mb-3">{title}</h4>
      <pre className="text-xs text-neutral-300 bg-neutral-800/50 p-4 rounded-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function AISystemPrompt() {
  const project = getProjectBySlug("ai-system-prompt");
  const nextProject = getNextProject("ai-system-prompt");
  const prevProject = getPreviousProject("ai-system-prompt");
  
  if (!project) {
    return <div>Project not found</div>;
  }

  const promptExample = `/// <summary>
/// Validates user input and processes order data
/// High confidence — Direct rule match (Standards 6.3.4)
/// </summary>
/// <param name="orderData">Order information to validate</param>
/// <returns>Processed order result</returns>
/// <exception cref="ArgumentException">Invalid order data</exception>
public async Task<OrderResult> ProcessOrderAsync(OrderData orderData)
{
    if (null == orderData?.CustomerId) // Constants on left (Standards 6.2.3)
    {
        _logger.LogWarning("Invalid order data: {CorrelationId}", 
            correlationId); // Structured logging (Standards 4.2.3)
        throw new ArgumentException("Order data cannot be null");
    }
    
    // Single return pattern (Standards 6.2.1)
    return await _orderService.ProcessAsync(orderData);
}`;

  const confidenceExample = `// Agent Output with Confidence Annotation:
// High confidence — Direct rule match (Standards 4.2.1)
// Added ILogger<T> injection for business logic compliance

// Medium confidence — Heuristic, aligned with project pattern  
// Applied team-specific error handling approach

// Low confidence — No clear rule, suggest verifying with user
// Multiple approaches possible for this scenario`;

  return (
    <main className="bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12 min-h-screen">
      {/* Navigation */}
      <nav className="mb-8">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
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
          <div className="text-4xl">🤖</div>
          <span className="px-3 py-1 text-xs font-medium bg-emerald-900/30 text-emerald-300 rounded-full border border-emerald-700/50">
            Enterprise Rollout
          </span>
        </div>
        
        <h1 className="text-5xl font-bold font-mono tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
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

      {/* Adoption Metrics */}
      <section className="grid md:grid-cols-3 gap-4 mb-16">
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-700/50">
          <div className="text-3xl font-bold text-green-400 mb-2">Active Rollout</div>
          <div className="text-neutral-300 font-medium text-sm">New engineers adopting daily</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-emerald-900/20 to-emerald-800/20 border border-emerald-700/50">
          <div className="text-3xl font-bold text-emerald-400 mb-2">Multi-IDE</div>
          <div className="text-neutral-300 font-medium text-sm">Cursor, Windsurf, Rider integration</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-teal-900/20 to-teal-800/20 border border-teal-700/50">
          <div className="text-3xl font-bold text-teal-400 mb-2">VP Endorsed</div>
          <div className="text-neutral-300 font-medium text-sm">Engineering leadership backing</div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Enterprise AI Integration</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">IDE-Native Integration</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Direct embedding within development environments</li>
                <li>• Context-aware code analysis and generation</li>
                <li>• Real-time standards enforcement during development</li>
                <li>• Seamless workflow integration without disruption</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Multi-Language Support</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• C# with enterprise patterns and logging standards</li>
                <li>• C/C++ for embedded systems with safety constraints</li>
                <li>• JavaScript/TypeScript for web applications</li>
                <li>• Python, Java, SQL, Bash, Rust, and Go coverage</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Compliance Engine</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Automated standards enforcement with rule citations</li>
                <li>• Confidence-tagged output with uncertainty handling</li>
                <li>• Department-specific override and exception handling</li>
                <li>• Security and compliance violation prevention</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Enterprise Features</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Team-specific customization and override capabilities</li>
                <li>• Structured logging and observability integration</li>
                <li>• Security-first design with PII/credential protection</li>
                <li>• Comprehensive documentation and test generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Technical Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            title="Standards Enforcement"
            description="Automatically enforces coding standards with rule citations, ensuring consistent code quality across all teams and projects."
            icon="📋"
          />
          <FeatureCard 
            title="Confidence Tagging"
            description="Provides confidence levels for all suggestions with documentation references, enabling informed decision-making by developers."
            icon="🎯"
          />
          <FeatureCard 
            title="Multi-IDE Integration"
            description="Seamlessly integrates with Cursor, Windsurf, and VsCode IDEs, providing consistent AI assistance across development environments."
            icon="💻"
          />
          <FeatureCard 
            title="Department Overrides"
            description="Supports team-specific rule customization while maintaining organization-wide consistency and compliance requirements."
            icon="⚙️"
          />
          <FeatureCard 
            title="Security Compliance"
            description="Built-in security patterns prevent unsafe code generation, credential exposure, and compliance violations."
            icon="🔒"
          />
          <FeatureCard 
            title="Code Generation"
            description="Generates production-ready code with proper logging, documentation, testing patterns, and error handling."
            icon="🚀"
          />
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">AI-Generated Code Examples</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <CodeExample 
            title="Standards-Compliant C# Code"
            code={promptExample}
          />
          <CodeExample 
            title="Confidence Annotation System"
            code={confidenceExample}
          />
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Project Achievements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.highlights.map((highlight, index) => (
            <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-lg mt-1">✓</span>
                <p className="text-neutral-300">{highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Technical Implementation</h2>
        <div className="space-y-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Prompt Engineering Architecture</h3>
            <p className="text-neutral-300 mb-6">
              Developed sophisticated prompt system with role-based behavior definition, multi-language rule enforcement, 
              and confidence-tagged output generation. The system maintains strict compliance with organizational standards 
              while providing flexibility for team-specific requirements and department overrides.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-neutral-700/50">
                <div className="text-2xl font-bold text-green-400 mb-2">8+</div>
                <div className="text-xs text-neutral-300">Programming Languages</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-neutral-700/50">
                <div className="text-2xl font-bold text-emerald-400 mb-2">3</div>
                <div className="text-xs text-neutral-300">IDE Platforms</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-neutral-700/50">
                <div className="text-2xl font-bold text-teal-400 mb-2">100+</div>
                <div className="text-xs text-neutral-300">Coding Standards Rules</div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Enterprise Compliance System</h3>
            <p className="text-neutral-300 mb-4">
              Built comprehensive compliance framework that prevents security violations, enforces documentation standards, 
              and maintains audit trails. The system blocks unsafe code generation while providing clear guidance for 
              compliant alternatives and rule citations for all suggestions.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge tech="Rule Citation System" />
              <TechBadge tech="Security Violation Prevention" />
              <TechBadge tech="Confidence Annotations" />
              <TechBadge tech="Audit Compliance" />
            </div>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Multi-Team Customization</h3>
            <p className="text-neutral-300 mb-4">
              Engineered flexible override system allowing department-specific customizations while maintaining 
              organization-wide consistency. The system supports embedded systems constraints, cloud team rapid iteration 
              needs, and mobile team platform-specific requirements within a unified framework.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge tech="Department Overrides" />
              <TechBadge tech="Team-Specific Rules" />
              <TechBadge tech="Context-Aware Generation" />
              <TechBadge tech="Hierarchical Standards" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Implementation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Company-wide Implementation</h2>
        <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">8</div>
              <div className="text-neutral-300 text-sm">AI 101 Training Sessions</div>
              <div className="text-neutral-400 text-xs">Company-wide rollout</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-2">5</div>
              <div className="text-neutral-300 text-sm">Individual Check-ins</div>
              <div className="text-neutral-400 text-xs">Personalized guidance</div>
            </div>
          </div>
          <p className="text-neutral-300 text-center">
            Led comprehensive AI enablement initiative through training sessions and mentorship, 
            establishing AI standards across engineering departments.
          </p>
        </div>
      </section>

      {/* Business Impact */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Enterprise Impact</h2>
        <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{project.impact}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-green-400 mb-4">Developer Productivity</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Automated code standards enforcement reduces review cycles</li>
                <li>• Context-aware suggestions accelerate development</li>
                <li>• Consistent patterns across teams reduce onboarding time</li>
                <li>• Real-time guidance prevents technical debt accumulation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-emerald-400 mb-4">Organizational Benefits</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Standardized AI practices across engineering departments</li>
                <li>• Reduced code review overhead through automated compliance</li>
                <li>• Enhanced security posture with built-in violation prevention</li>
                <li>• Company-wide AI training and mentorship program delivery</li>
                <li>• Growing adoption demonstrates measurable value delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Project Timeline</h2>
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <span className="text-lg font-mono text-neutral-300">{project.timeline}</span>
        </div>
      </section>

      {/* Navigation */}
      <section className="flex justify-between items-center pt-12 border-t border-neutral-700">
        <Link 
          href={`/projects/${prevProject?.slug}`}
          className="flex items-center text-green-400 hover:text-green-300 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5m7-7l-7 7 7 7"/>
          </svg>
          Previous Project
        </Link>
        
        <Link 
          href="/projects" 
          className="flex items-center text-green-400 hover:text-green-300 transition-colors"
        >
          All Projects
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14m-7-7l7 7-7 7"/>
          </svg>
        </Link>
        
        <Link 
          href={`/projects/${nextProject?.slug}`}
          className="flex items-center text-green-400 hover:text-green-300 transition-colors"
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