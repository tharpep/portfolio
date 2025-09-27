export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  timeline: string;
  status: 'completed' | 'in-progress' | 'planned';
  highlights: string[];
  impact?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  projects: Project[];
}

const projects: Project[] = [
  {
    slug: "azure-etl-pipeline",
    title: "Azure ETL Pipeline",
    description: "Scalable data processing pipeline using Microsoft Fabric and SQL to automate Azure financial cost analysis, transforming a 13-step, 2-3 hour monthly process into a 5-10 minute workflow.",
    category: "data-analytics",
    technologies: ["Microsoft Fabric", "Azure Data Factory", "SQL", "Azure Functions", "Python", "Power BI"],
    timeline: "May 2025 - Present",
    status: "completed",
    highlights: [
      "Reduced data processing time by 95% (2-3 hours to 5-10 minutes)",
      "Eliminated manual effort for managers with automated reporting",
      "Built fault-tolerant pipeline with ongoing support and recovery capabilities",
      "Delivered highly reliable, repeatable results for financial analysis"
    ],
    impact: "Transformed manual Azure cost analysis into an automated, reliable workflow, saving managers hours of work monthly"
  },
  {
    slug: "devops-scorecard",
    title: "Azure DevOps Sprint Scorecard",
    description: "React/Next.js/Node.js Azure DevOps extension providing real-time sprint health and status visibility, designed to enable instant insights for both internal and external stakeholders.",
    category: "data-analytics",
    technologies: ["React", "Next.js", "Node.js", "Azure DevOps Extension SDK", "VSIX", "Vite", "TypeScript"],
    timeline: "June 2025 - Present",
    status: "completed",
    highlights: [
      "Designed to enable instant sprint visibility for stakeholders",
      "Built from mockups and legacy code into production-ready extension",
      "Will improve Agile transparency for internal and external stakeholders",
      "Mentored high school intern in backend development for the project"
    ],
    impact: "Will dramatically improve DevOps workflow efficiency and transparency, enabling data-driven sprint management"
  },
  {
    slug: "python-spotify-manager",
    title: "Python Spotify Data Manager",
    description: "Comprehensive Python-based tools for Spotify data manipulation and visualization using RESTful API integration, featuring advanced data analysis and playlist management capabilities.",
    category: "data-analytics",
    technologies: ["Python", "Spotify API", "Pandas", "RESTful APIs", "OAuth", "Data Visualization", "JSON"],
    timeline: "2024 - Present",
    status: "in-progress",
    highlights: [
      "Built robust API integration with Spotify's complex authentication system",
      "Implemented advanced data analysis and visualization pipelines",
      "Created automated playlist management and music data insights",
      "Enhanced technical fluency in API consumption and data processing"
    ],
    impact: "Developed comprehensive music data analysis capabilities, providing insights into listening patterns and automated playlist curation"
  },
  {
    slug: "dj-pete-beat-sequencer",
    title: "DJ Pete Beat Sequencer",
    description: "Embedded firmware for STM32 microcontrollers featuring advanced I2C, DMA, DAC, SPI integration with Adafruit NeoTrellis RGB keypads for interactive music production.",
    category: "creative-tech",
    technologies: ["STM32", "C", "I2C", "DMA", "DAC", "SPI", "Adafruit NeoTrellis", "Embedded Systems"],
    timeline: "Academic Project - 2024",
    status: "completed",
    highlights: [
      "Implemented complex embedded systems with multiple communication protocols",
      "Created interactive RGB keypad interface for music production",
      "Presented at Purdue Spark Challenge showcasing technical innovation",
      "Demonstrated expertise in low-level hardware programming and real-time systems"
    ],
    impact: "Showcased embedded systems expertise through creative music technology, bridging hardware and artistic expression"
  },
  {
    slug: "ai-system-prompt",
    title: "AI System Prompt Framework",
    description: "Advanced prompt engineering framework adopted across engineering departments. Co-led AI enablement training with 2 company-wide lunch and learns plus 17 group/individual check-ins.",
    category: "ai-ml",
    technologies: ["OpenAI API", "Prompt Engineering", "Cursor IDE", "Windsurf IDE", "Python", "Custom GPTs"],
    timeline: "August 2025 - Present",
    status: "completed",
    highlights: [
      "Co-developed master IDE prompt adopted across engineering departments",
      "Established AI standards and best practices for development teams",
      "Co-led 2 company-wide lunch and learns on ChatGPT setup and master prompt usage",
      "Conducted 17 group/individual AI check-ins and training sessions",
      "Mentored an intern in prompt engineering and AI integration"
    ],
    impact: "Enhanced company's AI adoption, improving prompt engineering standards and developer workflows in engineering departments"
  },
  {
    slug: "custom-gpts",
    title: "Advanced Custom GPTs",
    description: "Designed and deployed sophisticated custom GPTs for enterprise and personal use, including a system prompt builder and student career archivist adopted internally by the company.",
    category: "ai-ml",
    technologies: ["OpenAI GPT", "Custom GPT Development", "Prompt Engineering", "API Integration", "Workflow Automation"],
    timeline: "2024 - Present",
    status: "completed",
    highlights: [
      "Built system prompt builder for all skill levels",
      "Developed student career archivist GPT adopted internally",
      "Focused on advanced prompt engineering and user experience",
      "Integrated OpenAI tools into productivity workflows"
    ],
    impact: "Enhanced productivity and workflow automation through specialized AI tools tailored for specific business and educational needs"
  },
  {
    slug: "fm-radio-research",
    title: "FM Radio Detection & Demodulation",
    description: "Research project engineering automated FM radio signal detection using USRP software-defined radio and GNU Radio, implementing robust signal processing workflows and automation scripts.",
    category: "research-engineering",
    technologies: ["USRP", "GNU Radio", "Signal Processing", "Python", "Software-Defined Radio", "RF Engineering"],
    timeline: "Academic Research - 2024",
    status: "completed",
    highlights: [
      "Engineered automated FM radio detection and demodulation system",
      "Implemented sophisticated signal processing algorithms",
      "Designed robust automation scripts for signal analysis",
      "Applied advanced RF engineering principles in software-defined radio"
    ],
    impact: "Advanced understanding of signal processing and RF systems through practical implementation of complex radio technologies"
  },
  {
    slug: "personal-ai-system",
    title: "Personal AI System",
    description: "Comprehensive personal AI assistant with RAG capabilities, tool integration, and local-first architecture. Currently implementing MVP with document retrieval and knowledge synthesis.",
    category: "ai-ml",
    technologies: ["Python", "RAG", "Vector Databases", "LLM Gateway", "API Design", "Local AI", "Tool Integration"],
    timeline: "2024 - Present",
    status: "in-progress",
    highlights: [
      "Designed comprehensive API architecture with LLM Gateway and Personal API",
      "Implemented RAG MVP with document ingestion and retrieval capabilities",
      "Built tool allowlist system with strict validation and safety guardrails",
      "Created local-first architecture with cloud fallback options"
    ],
    impact: "Developing a secure, extensible personal AI system that combines knowledge retrieval with intelligent tool orchestration"
  }
];

export const projectCategories: ProjectCategory[] = [
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Scalable solutions transforming raw data into actionable insights through advanced ETL pipelines, real-time processing, and intelligent automation.",
    icon: "📊",
    projects: projects.filter(p => p.category === "data-analytics")
  },
  {
    id: "creative-tech",
    name: "Creative Technology",
    description: "Innovative applications bridging art and engineering, combining technical excellence with creative expression to build engaging user experiences.",
    icon: "🎨",
    projects: projects.filter(p => p.category === "creative-tech")
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Cutting-edge AI solutions leveraging machine learning, natural language processing, and prompt engineering to solve complex business challenges.",
    icon: "🤖",
    projects: projects.filter(p => p.category === "ai-ml")
  },
  {
    id: "research-engineering",
    name: "Research & Engineering",
    description: "Academic and research projects exploring advanced engineering concepts, signal processing, and emerging technologies in hardware and software systems.",
    icon: "🔬",
    projects: projects.filter(p => p.category === "research-engineering")
  }
];

// Helper function to get featured projects for home page
export const getFeaturedProjects = (): Project[] => {
  const featuredSlugs = ["ai-system-prompt", "azure-etl-pipeline", "dj-pete-beat-sequencer", "devops-scorecard"];
  return projects.filter(p => featuredSlugs.includes(p.slug));
};

export const getAllProjects = (): Project[] => {
  return projects;
};

export const getProjectsByCategory = (): ProjectCategory[] => {
  return projectCategories;
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getNextProject = (currentSlug: string): Project | undefined => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
};

export const getPreviousProject = (currentSlug: string): Project | undefined => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  return projects[prevIndex];
};
