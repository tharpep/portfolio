import Link from "next/link";
import { getProjectBySlug } from "@/lib/getProjects";

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

function DataMetric({ value, label, color = "green" }: { value: string; label: string; color?: string }) {
  const colorClasses = {
    green: "from-green-900/20 to-green-800/20 border-green-700/50 text-green-400",
    blue: "from-blue-900/20 to-blue-800/20 border-blue-700/50 text-blue-400",
    purple: "from-purple-900/20 to-purple-800/20 border-purple-700/50 text-purple-400",
    orange: "from-orange-900/20 to-orange-800/20 border-orange-700/50 text-orange-400"
  };

  return (
    <div className={`text-center p-6 rounded-xl bg-gradient-to-br border hover:scale-105 transition-transform ${colorClasses[color as keyof typeof colorClasses]}`}>
      <div className={`text-3xl font-bold mb-2 ${color === 'green' ? 'text-green-400' : color === 'blue' ? 'text-blue-400' : color === 'purple' ? 'text-purple-400' : 'text-orange-400'}`}>
        {value}
      </div>
      <div className="text-neutral-300 font-medium text-sm">{label}</div>
    </div>
  );
}

export default function PythonSpotifyManager() {
  const project = getProjectBySlug("python-spotify-manager");
  
  if (!project) {
    return <div>Project not found</div>;
  }

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
          <div className="text-4xl animate-pulse">🎵</div>
          <span className="px-3 py-1 text-xs font-medium bg-orange-900/30 text-orange-300 rounded-full border border-orange-700/50">
            In Progress
          </span>
        </div>
        
        <h1 className="text-5xl font-bold font-mono tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
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
        <DataMetric value="REST API" label="Spotify Integration" color="green" />
        <DataMetric value="OAuth 2.0" label="Authentication" color="blue" />
        <DataMetric value="Pandas" label="Data Processing" color="purple" />
        <DataMetric value="JSON" label="Data Format" color="orange" />
      </section>

      {/* API Integration Showcase */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Spotify API Integration</h2>
        <div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-blue-600/10 to-purple-600/10"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-4">Comprehensive Music Data Pipeline</h3>
            <p className="text-neutral-300 mb-6">
              Advanced Python-based tools leveraging Spotify's Web API for comprehensive music data analysis, 
              playlist management, and listening pattern insights with sophisticated authentication and data processing workflows.
            </p>
            
            {/* API Flow Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-green-900/20 border border-green-700/50 text-center">
                <div className="text-2xl mb-2">🔐</div>
                <div className="text-sm font-bold text-green-300">OAuth 2.0</div>
                <div className="text-xs text-neutral-400">Secure Authentication</div>
              </div>
              <div className="p-4 rounded-lg bg-blue-900/20 border border-blue-700/50 text-center">
                <div className="text-2xl mb-2">📡</div>
                <div className="text-sm font-bold text-blue-300">API Requests</div>
                <div className="text-xs text-neutral-400">RESTful Endpoints</div>
              </div>
              <div className="p-4 rounded-lg bg-purple-900/20 border border-purple-700/50 text-center">
                <div className="text-2xl mb-2">⚙️</div>
                <div className="text-sm font-bold text-purple-300">Data Processing</div>
                <div className="text-xs text-neutral-400">Pandas Analytics</div>
              </div>
              <div className="p-4 rounded-lg bg-orange-900/20 border border-orange-700/50 text-center">
                <div className="text-2xl mb-2">📊</div>
                <div className="text-sm font-bold text-orange-300">Visualization</div>
                <div className="text-xs text-neutral-400">Insights & Reports</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-neutral-400">
              <span>Authentication: OAuth 2.0 PKCE Flow</span>
              <span>Rate Limiting: Respectful API Usage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Core Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            title="Advanced Authentication"
            description="Robust OAuth 2.0 implementation with secure token management, refresh handling, and user privacy protection following Spotify's API guidelines."
            icon="🔒"
          />
          <FeatureCard 
            title="Data Analysis Pipeline"
            description="Comprehensive data processing using Pandas for music analytics, listening pattern analysis, and statistical insights generation."
            icon="📊"
          />
          <FeatureCard 
            title="Playlist Management"
            description="Automated playlist creation, modification, and optimization tools with intelligent music curation and recommendation features."
            icon="🎶"
          />
          <FeatureCard 
            title="Music Insights"
            description="Deep analysis of listening habits, genre preferences, and temporal patterns providing actionable insights into music consumption."
            icon="🎯"
          />
          <FeatureCard 
            title="Data Visualization"
            description="Rich visual representations of music data including listening trends, genre distributions, and temporal analysis charts."
            icon="📈"
          />
          <FeatureCard 
            title="Export & Integration"
            description="Flexible data export options and integration capabilities for external tools and workflows, supporting various formats and APIs."
            icon="🔄"
          />
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Technical Architecture</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">API Integration Layer</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• OAuth 2.0 PKCE flow for secure authentication</li>
                <li>• Rate limiting and respectful API usage patterns</li>
                <li>• Comprehensive error handling and retry logic</li>
                <li>• Token refresh and session management</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Data Processing Engine</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Pandas-powered data manipulation and analysis</li>
                <li>• JSON data parsing and normalization</li>
                <li>• Statistical analysis and pattern recognition</li>
                <li>• Data validation and cleaning pipelines</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Analytics & Insights</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Listening pattern analysis and trend identification</li>
                <li>• Genre preference mapping and evolution tracking</li>
                <li>• Temporal analysis of music consumption habits</li>
                <li>• Recommendation algorithm development and testing</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">Automation Features</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Automated playlist creation and curation</li>
                <li>• Smart playlist organization and management</li>
                <li>• Duplicate detection and removal algorithms</li>
                <li>• Music discovery and recommendation systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Project Achievements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.highlights.map((highlight, index) => (
            <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-lg mt-1">🎵</span>
                <p className="text-neutral-300">{highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Implementation Highlights</h2>
        <div className="space-y-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Authentication & API Integration</h3>
            <p className="text-neutral-300 mb-6">
              Implemented secure OAuth 2.0 authentication flow with Spotify's Web API, including proper token management, 
              refresh handling, and rate limiting to ensure reliable and respectful API usage.
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400 mb-2"># Spotify API Authentication Example</div>
              <div className="text-neutral-300">
                <span className="text-blue-400">import</span> spotipy<br/>
                <span className="text-blue-400">from</span> spotipy.oauth2 <span className="text-blue-400">import</span> SpotifyOAuth<br/>
                <span className="text-blue-400">import</span> pandas <span className="text-blue-400">as</span> pd<br/><br/>
                <span className="text-purple-400"># Configure OAuth with secure scopes</span><br/>
                sp_oauth = SpotifyOAuth(<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;scope=<span className="text-green-300">"playlist-read-private user-library-read"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;cache_path=<span className="text-green-300">".cache"</span><br/>
                )
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Data Analysis & Visualization</h3>
            <p className="text-neutral-300 mb-4">
              Advanced data processing pipelines using Pandas for music analytics, providing insights into listening patterns, 
              genre preferences, and temporal trends through statistical analysis and visualization.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge tech="Statistical Analysis" />
              <TechBadge tech="Data Visualization" />
              <TechBadge tech="Pattern Recognition" />
              <TechBadge tech="Temporal Analysis" />
            </div>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">Automated Playlist Management</h3>
            <p className="text-neutral-300 mb-4">
              Intelligent playlist curation system with automated organization, duplicate detection, and music discovery features 
              that enhance the music listening experience through data-driven recommendations.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechBadge tech="Automation Scripts" />
              <TechBadge tech="Duplicate Detection" />
              <TechBadge tech="Smart Curation" />
              <TechBadge tech="Recommendation Engine" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Impact */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-green-300 mb-8">Project Impact</h2>
        <div className="p-8 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{project.impact}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-green-400 mb-4">Technical Skills Development</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Advanced API integration and authentication patterns</li>
                <li>• Data processing and analysis with Python ecosystem</li>
                <li>• RESTful API consumption best practices</li>
                <li>• OAuth 2.0 security implementation experience</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-blue-400 mb-4">Practical Applications</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Real-world data analysis and insight generation</li>
                <li>• Automated workflow development for personal use</li>
                <li>• Music discovery and recommendation algorithms</li>
                <li>• Understanding of streaming service data structures</li>
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
          href="/projects/custom-gpts" 
          className="flex items-center text-green-400 hover:text-green-300 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5m7-7l-7 7 7 7"/>
          </svg>
          Previous Project
        </Link>
        
        <Link 
          href="/projects/fm-radio-research" 
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