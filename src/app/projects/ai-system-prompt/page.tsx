import Link from "next/link";
import { getProjectBySlug } from "@/lib/getProjects";

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="px-3 py-1 text-sm font-medium bg-green-900/30 text-green-300 rounded-full border border-green-700/50">
      {tech}
    </span>
  );
}

function AIMetric({ value, label, color = "green" }: { value: string; label: string; color?: string }) {
  const colorClasses = {
    green: "from-green-900/20 to-green-800/20 border-green-700/50 text-green-400",
    emerald: "from-emerald-900/20 to-emerald-800/20 border-emerald-700/50 text-emerald-400",
    teal: "from-teal-900/20 to-teal-800/20 border-teal-700/50 text-teal-400",
    cyan: "from-cyan-900/20 to-cyan-800/20 border-cyan-700/50 text-cyan-400"
  };

  return (
    <div className={`text-center p-6 rounded-xl bg-gradient-to-br border hover:scale-105 transition-transform ${colorClasses[color as keyof typeof colorClasses]}`}>
      <div className={`text-3xl font-bold mb-2 ${color === 'green' ? 'text-green-400' : color === 'emerald' ? 'text-emerald-400' : color === 'teal' ? 'text-teal-400' : 'text-cyan-400'}`}>
        {value}
      </div>
      <div className="text-neutral-300 font-medium text-sm">{label}</div>
    </div>
  );
}

function CapabilityCard({ title, description, icon }: { title: string; description: string; icon: string }) {
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
  
  if (!project) {
    return <div>Project not found</div>;
  }

  const promptExample = `{
  "role": "enterprise_analyst",
  "context": {
    "domain": "financial_services",
    "compliance": ["SOX", "GDPR", "PCI-DSS"],
    "safety_level": "high"
  },
  "capabilities": {
    "data_analysis": true,
    "code_generation": false,
    "external_apis": ["financial_data", "risk_metrics"]
  },
  "guardrails": {
    "content_filtering": true,
    "bias_detection": true,
    "output_validation": true
  }
}`;

  const apiExample = `@app.post("/prompt/execute")
async def execute_prompt(request: PromptRequest):
    # Dynamic context injection
    context = await inject_context(
        request.domain, 
        request.user_role
    )
    
    # Safety validation
    if not safety_validator.check(request.prompt):
        raise HTTPException(400, "Safety check failed")
    
    # Optimized execution
    response = await llm_orchestrator.execute(
        prompt=request.prompt,
        context=context,
        guardrails=request.guardrails
    )
    
    return optimize_response(response)`;

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
            Production Ready
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

      {/* Performance Metrics */}
      <section className="grid md:grid-cols-4 gap-4 mb-16">
        <AIMetric value="60%" label="Performance Improvement" color="green" />
        <AIMetric value="30%" label="Token Usage Reduction" color="emerald" />
        <AIMetric value="Zero" label="Safety Incidents" color="teal" />
        <AIMetric value="Multi-LLM" label="Provider Support" color="cyan" />
      </section>

      {/* Framework Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Framework Architecture</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Prompt Engineering Layer</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Dynamic context injection based on domain</li>
                <li>• Role-based prompt templates and constraints</li>
                <li>• Structured output formatting and validation</li>
                <li>• Multi-step reasoning chain optimization</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Safety & Guardrails</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Content filtering and bias detection</li>
                <li>• Output validation against policy frameworks</li>
                <li>• Automated harmful content prevention</li>
                <li>• Compliance monitoring and audit trails</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">LLM Orchestration</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Multi-provider support (OpenAI, Anthropic, etc.)</li>
                <li>• Intelligent model selection and routing</li>
                <li>• Fallback strategies and error handling</li>
                <li>• Performance monitoring and optimization</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Enterprise Integration</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• RESTful API with comprehensive documentation</li>
                <li>• Redis caching for improved performance</li>
                <li>• PostgreSQL for configuration management</li>
                <li>• Docker containerization for scalability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Core Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CapabilityCard 
            title="Dynamic Context Adaptation"
            description="Automatically injects relevant context based on domain, user role, and task requirements, optimizing prompt effectiveness for specific use cases."
            icon="🎯"
          />
          <CapabilityCard 
            title="Safety-First Design"
            description="Built-in guardrails prevent harmful outputs, detect bias, and ensure compliance with enterprise security and ethical standards."
            icon="🛡️"
          />
          <CapabilityCard 
            title="Multi-LLM Support"
            description="Seamlessly switch between different language models based on task requirements, cost optimization, and performance characteristics."
            icon="⚡"
          />
          <CapabilityCard 
            title="Intelligent Routing"
            description="Automatically selects optimal model and configuration based on prompt complexity, domain expertise, and performance requirements."
            icon="🧠"
          />
          <CapabilityCard 
            title="Performance Optimization"
            description="Advanced caching, token usage optimization, and response time improvements reduce costs while maintaining quality."
            icon="🚀"
          />
          <CapabilityCard 
            title="Enterprise Security"
            description="Full audit trails, compliance monitoring, and secure credential management for business-critical applications."
            icon="🔐"
          />
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Implementation Examples</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <CodeExample 
            title="Dynamic Prompt Configuration"
            code={promptExample}
          />
          <CodeExample 
            title="API Integration"
            code={apiExample}
          />
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Innovation Highlights</h2>
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
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Technical Deep Dive</h2>
        <div className="space-y-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Prompt Engineering</h3>
            <p className="text-neutral-300 mb-6">
              Developed sophisticated prompt templates with dynamic context injection, achieving 60% improvement in task performance 
              through structured reasoning chains, role-based constraints, and domain-specific knowledge integration.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-neutral-700/50">
                <div className="text-2xl font-bold text-green-400 mb-2">15+</div>
                <div className="text-xs text-neutral-300">Domain Templates</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-neutral-700/50">
                <div className="text-2xl font-bold text-emerald-400 mb-2">50+</div>
                <div className="text-xs text-neutral-300">Safety Rules</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-neutral-700/50">
                <div className="text-2xl font-bold text-teal-400 mb-2">99.9%</div>
                <div className="text-xs text-neutral-300">Safety Compliance</div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Enterprise Safety Framework</h3>
            <p className="text-neutral-300 mb-4">
              Built comprehensive safety system that prevents harmful outputs, detects bias, and ensures compliance with enterprise policies. 
              Zero safety incidents in production while maintaining high performance and user satisfaction.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge tech="Content Filtering" />
              <TechBadge tech="Bias Detection" />
              <TechBadge tech="Output Validation" />
              <TechBadge tech="Audit Logging" />
            </div>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Multi-Provider Orchestration</h3>
            <p className="text-neutral-300 mb-4">
              Engineered intelligent routing system that automatically selects optimal LLM providers based on task complexity, 
              cost constraints, and performance requirements, reducing token usage by 30% while improving response quality.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge tech="OpenAI GPT-4" />
              <TechBadge tech="Anthropic Claude" />
              <TechBadge tech="Cost Optimization" />
              <TechBadge tech="Load Balancing" />
            </div>
          </div>
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
              <h4 className="text-lg font-bold text-green-400 mb-4">Technical Excellence</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Reduced AI integration complexity by 70%</li>
                <li>• Achieved 99.9% safety compliance in production</li>
                <li>• Improved prompt effectiveness by 60%</li>
                <li>• Enabled safe AI deployment at enterprise scale</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-emerald-400 mb-4">Business Value</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Accelerated AI adoption across business units</li>
                <li>• Reduced development time for AI features by 50%</li>
                <li>• Ensured regulatory compliance and risk mitigation</li>
                <li>• Standardized AI practices organization-wide</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Enterprise Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-lg font-bold text-green-400 mb-3">Financial Services</h3>
            <p className="text-neutral-300 text-sm mb-4">
              Risk analysis, regulatory compliance, and financial document processing with SOX and GDPR compliance built-in.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs bg-green-900/30 text-green-300 rounded">Risk Assessment</span>
              <span className="px-2 py-1 text-xs bg-green-900/30 text-green-300 rounded">Compliance</span>
            </div>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-lg font-bold text-emerald-400 mb-3">Healthcare</h3>
            <p className="text-neutral-300 text-sm mb-4">
              Medical document analysis and clinical decision support with HIPAA compliance and bias detection.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs bg-emerald-900/30 text-emerald-300 rounded">HIPAA Compliant</span>
              <span className="px-2 py-1 text-xs bg-emerald-900/30 text-emerald-300 rounded">Clinical Support</span>
            </div>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-lg font-bold text-teal-400 mb-3">Legal Technology</h3>
            <p className="text-neutral-300 text-sm mb-4">
              Contract analysis, legal research, and document review with attorney-client privilege protection.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs bg-teal-900/30 text-teal-300 rounded">Contract Analysis</span>
              <span className="px-2 py-1 text-xs bg-teal-900/30 text-teal-300 rounded">Privilege Protection</span>
            </div>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-lg font-bold text-cyan-400 mb-3">Manufacturing</h3>
            <p className="text-neutral-300 text-sm mb-4">
              Quality control analysis, predictive maintenance, and operational intelligence with safety protocols.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs bg-cyan-900/30 text-cyan-300 rounded">Quality Control</span>
              <span className="px-2 py-1 text-xs bg-cyan-900/30 text-cyan-300 rounded">Predictive Maintenance</span>
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
          href="/projects/beat-sequencer" 
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
      </section>
    </main>
  );
} 