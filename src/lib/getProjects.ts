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
    description: "Automated Azure financial cost analysis pipeline using Microsoft Fabric and SQL, reducing a 13-step monthly process from 2-3 hours to 5-10 minutes.",
    category: "data-analytics",
    technologies: ["Microsoft Fabric", "Azure Data Factory", "SQL", "Azure Functions", "Python", "Power BI"],
    timeline: "May 2025 - Present",
    status: "completed",
    highlights: [
      "Reduced data processing time by 95% (2-3 hours to 5-10 minutes)",
      "Reduced manual effort for managers with automated reporting",
      "Built fault-tolerant pipeline with error recovery and monitoring",
      "Delivered reliable, repeatable results for financial analysis"
    ],
    impact: "Automated manual Azure cost analysis workflow, saving managers hours of work monthly"
  },
  {
    slug: "devops-scorecard",
    title: "Azure DevOps Sprint Scorecard",
    description: "Azure DevOps extension providing sprint health and status visibility.",
    category: "data-analytics",
    technologies: ["React", "Next.js", "Node.js", "Azure DevOps Extension SDK", "VSIX", "Vite", "TypeScript"],
    timeline: "June 2025 - Present",
    status: "completed",
    highlights: [
      "Designed to enable instant sprint visibility for stakeholders",
      "Built from mockups and legacy code into extension currently rolling out",
      "Aims to improve Agile transparency for internal and external stakeholders",
      "Mentored high school intern in backend development for the project"
    ],
    impact: "Aims to improve DevOps workflow efficiency and transparency, enabling data-driven sprint management"
  },
  {
    slug: "python-spotify-manager",
    title: "Python Spotify Data Manager",
    description: "Python-based tools for Spotify data manipulation and visualization using RESTful API integration.",
    category: "data-analytics",
    technologies: ["Python", "Spotify API", "Pandas", "RESTful APIs", "OAuth", "Data Visualization", "JSON"],
    timeline: "January 2024 - Present",
    status: "in-progress",
    highlights: [
      "Built API integration with Spotify's OAuth authentication system",
      "Implemented data analysis and visualization pipelines",
      "Created automated playlist management and music data insights",
      "Introduced me to personal projects, API consumption, and OAuth workflows"
    ],
    impact: "Developed music data analysis capabilities, providing insights into listening patterns and automated playlist curation"
  },
  {
    slug: "dj-pete-beat-sequencer",
    title: "DJ Pete Beat Sequencer",
    description: "Embedded firmware for STM32 microcontrollers featuring I2C, DMA, DAC, SPI integration with Adafruit NeoTrellis RGB keypads for interactive music production.",
    category: "hardware-embedded",
    technologies: ["STM32", "C", "I2C", "DMA", "DAC", "SPI", "Adafruit NeoTrellis", "Embedded Systems"],
    timeline: "2024",
    status: "completed",
    highlights: [
      "Implemented embedded systems with multiple communication protocols",
      "Created interactive RGB keypad interface for music production",
      "Presented at Purdue Spark Challenge showcasing technical innovation",
      "Demonstrated proficiency in low-level hardware programming and real-time systems"
    ],
    impact: "Showcased embedded systems proficiency through creative music technology, bridging hardware and artistic expression",
    githubUrl: "https://github.com/tharpep/ECE362-Project"
  },
  {
    slug: "ai-system-prompt",
    title: "AI System Prompt Framework",
    description: "IDE prompt that aims to standardize AI-assisted coding workflows across engineering teams, with AI enablement training including 2 company-wide lunch and learns and 17 group/individual check-ins.",
    category: "ai-ml",
    technologies: ["OpenAI API", "Prompt Engineering", "Cursor IDE", "Windsurf IDE", "Python", "Custom GPTs"],
    timeline: "August 2025 - Present",
    status: "completed",
    highlights: [
      "Developed master IDE prompt that aims to standardize AI-assisted coding workflows across engineering departments",
      "Established AI standards and best practices for development teams",
      "Co-led 2 company-wide lunch and learns on ChatGPT setup and master prompt usage",
      "Conducted 17 group/individual AI check-ins and training sessions",
      "Mentored an intern in prompt engineering and AI integration"
    ],
    impact: "Improved company comfort with AI and knowledge of available tools through training sessions and framework development"
  },
  {
    slug: "custom-gpts",
    title: "Custom GPTs",
    description: "Custom GPTs for enterprise and personal use, including a system prompt builder and student career archivist.",
    category: "ai-ml",
    technologies: ["OpenAI GPT", "Custom GPT Development", "Prompt Engineering", "API Integration", "Workflow Automation"],
    timeline: "January 2024 - Present",
    status: "completed",
    highlights: [
      "Built system prompt builder for all skill levels",
      "Developed student career archivist GPT adopted internally",
      "Focused on prompt engineering and user experience",
      "Integrated OpenAI tools into productivity workflows"
    ],
    impact: "Workflow automation through specialized AI tools tailored for specific business and educational needs"
  },
  {
    slug: "fm-radio-research",
    title: "FM Radio Detection & Demodulation",
    description: "Research project engineering automated FM radio signal detection using USRP software-defined radio and GNU Radio, implementing signal processing workflows and automation scripts.",
    category: "hardware-embedded",
    technologies: ["USRP", "GNU Radio", "Signal Processing", "Python", "Software-Defined Radio", "RF Engineering"],
    timeline: "2024",
    status: "completed",
    highlights: [
      "Engineered automated FM radio detection and demodulation system",
      "Implemented signal processing algorithms",
      "Designed automation scripts for signal analysis",
      "Applied RF engineering principles in software-defined radio"
    ],
    impact: "Understanding of signal processing and RF systems through practical implementation of complex radio technologies"
  },
  {
    slug: "personal-ai-system",
    title: "MY-AI - Personal AI Assistant",
    description: "Personal AI assistant platform with RAG, document knowledge bases, and extensible tool integration, designed to support local models (Ollama) or external APIs (Claude/ChatGPT).",
    category: "ai-ml",
    technologies: ["Python", "FastAPI", "RAG", "Qdrant", "Ollama", "Vector Databases", "LLM Gateway", "Docker", "Poetry", "Typer CLI"],
    timeline: "August 2025 - Present",
    status: "in-progress",
    highlights: [
      "Designed unified AI provider interface with OpenAI-compatible endpoints supporting dynamic provider/model selection",
      "Implemented full document ingestion pipeline with chunking, Qdrant vector storage, and cited answer retrieval",
      "Created extensible tool framework with registry system, parameter validation, and allowlist security",
      "Built SQLite-based request tracking system with unique request IDs and performance metrics",
      "Developed Typer-based CLI with interactive chat, demos, and tab completion support"
    ],
    impact: "Developing a secure, extensible personal AI system that combines knowledge retrieval with tool orchestration",
    githubUrl: "https://github.com/tharpep/MY-AI"
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    description: "Modern portfolio website with Next.js 15 App Router featuring live Spotify integration and automated data updates via GitHub Actions.",
    category: "full-stack",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Vercel", "GitHub Actions", "Python", "Spotify API"],
    timeline: "May 2025 - Present",
    status: "in-progress",
    highlights: [
      "Built with Next.js 15 App Router, React 19 Server Components, and TypeScript strict mode",
      "Implemented live Spotify data display with Python scripts fetching top artists, tracks, and daily favorites",
      "Created GitHub Actions workflow for daily automated Spotify data updates with secure secrets management",
      "Configured auto-deployment on Vercel with preview URLs per PR for development workflow"
    ],
    impact: "Showcasing professional projects and technical expertise through a modern, performant web presence with automated content updates",
    githubUrl: "https://github.com/tharpep/portfolio",
    demoUrl: "https://prycetharpe.dev"
  },
  {
    slug: "simrag-reproduction",
    title: "SimRAG Reproduction Study",
    description: "Reproduction study of SimRAG paper implementing similarity-based RAG with two-stage fine-tuning on consumer hardware, analyzing model capacity limitations and retriever-generator coupling.",
    category: "ai-ml",
    technologies: ["Python", "RAG", "Qdrant", "Sentence Transformers", "Ollama", "Purdue GenAI API", "PyTorch", "Docker", "Poetry"],
    timeline: "August 2025 - December 2025",
    status: "completed",
    highlights: [
      "Designed provider-agnostic interface supporting both local (Ollama) and cloud (Purdue GenAI) LLMs with automatic provider selection",
      "Built RAG system with Sentence Transformers for embeddings, Qdrant vector storage, and context-aware question answering",
      "Implemented both synchronous and asynchronous API calls for flexible integration patterns",
      "Trained and tested model on personal hardware (RTX 3080, 10GB VRAM). Results: context relevance unchanged (0.316), answer quality decreased 0.1-1.9%, response time increased 52-53%. Findings attributed to model capacity limitations (1.5B vs. original 8B/27B) and lack of retriever fine-tuning",
      "Created test suite with mocked external dependencies for reproducible testing"
    ],
    impact: "Understanding of RAG fundamentals and fine-tuning concepts through hands-on implementation, demonstrating practical ML engineering skills",
    githubUrl: "https://github.com/tharpep/SimRAG-Reproduction"
  },
  {
    slug: "ece461-model-registry",
    title: "Trustworthy Model Registry",
    description: "Group project building a model registry with AWS deployment. Led AWS infrastructure setup (ECS/Fargate) and implemented three evaluation metrics: Reproducibility, Reviewedness, and Treescore.",
    category: "devops-cloud",
    technologies: ["AWS ECS", "AWS Fargate", "Python", "FastAPI", "React", "Next.js", "Docker", "GitHub Actions"],
    timeline: "August 2025 - December 2025",
    status: "in-progress",
    highlights: [
      "Designed and deployed AWS ECS/Fargate infrastructure for containerized application hosting",
      "Implemented Reproducibility metric analyzing example code availability and validity",
      "Implemented Reviewedness metric calculating fraction of code added via reviewed pull requests",
      "Implemented Treescore metric computing average net score of parent models in lineage graph",
      "Simulated real software engineering workflow with weekly milestones and client requirements"
    ],
    impact: "Demonstrated cloud infrastructure expertise and metric design skills in team-based software engineering project",
    githubUrl: "https://github.com/Anjali-Vanamala/ECE461_Part2"
  },
  {
    slug: "team35-seniordesign",
    title: "Senior Design GenAI Subsystem",
    description: "Built the generative AI subsystem for a multi-platform cognitive coaching application. Designed and implemented RAG system, artifact generation, and interactive chat with conversation context.",
    category: "ai-ml",
    technologies: ["Python", "FastAPI", "RAG", "Qdrant", "Ollama", "Purdue GenAI API", "Typer CLI", "Docker"],
    timeline: "August 2025 - December 2025",
    status: "in-progress",
    highlights: [
      "Architected and implemented RAG system with Qdrant vector storage and document ingestion pipeline",
      "Built artifact generation system (flashcards, MCQ, insights) with schema validation and template system",
      "Developed interactive chat service with three-layer context (RAG + Summary + Recent messages)",
      "Created FastAPI backend with CLI interface for artifact generation and chat",
      "Integrated multiple AI providers (Ollama, Purdue GenAI API) with automatic provider selection"
    ],
    impact: "Delivered GenAI subsystem enabling educational artifact generation and contextual AI assistance for cognitive coaching platform",
    githubUrl: "https://github.com/tharpep/team35-seniordesign"
  },
  {
    slug: "tradingcard-collection-manager",
    title: "Trading Card Collection Manager",
    description: "Full-stack web application for managing trading card collections with multi-user authentication. Built to learn user authentication, data isolation, and Supabase integration.",
    category: "full-stack",
    technologies: ["React", "TypeScript", "FastAPI", "Supabase", "PostgreSQL", "Row Level Security", "Shadcn UI", "Vite"],
    timeline: "August 2025 - December 2025",
    status: "in-progress",
    highlights: [
      "Implemented multi-user authentication with Supabase Auth and JWT token management",
      "Built Row Level Security (RLS) policies for proper data isolation between users",
      "Created admin CLI for system management with full access to all user data",
      "Designed responsive React frontend with Shadcn UI components and Tailwind CSS",
      "Currently on pause after completing core authentication and user management functionality"
    ],
    impact: "Gained hands-on experience with modern authentication patterns, database security, and multi-user application architecture",
    githubUrl: "https://github.com/tharpep/tradingcard_project"
  }
];

export const projectCategories: ProjectCategory[] = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "AI solutions leveraging machine learning, natural language processing, and prompt engineering to solve business challenges.",
    icon: "",
    projects: projects.filter(p => p.category === "ai-ml")
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Solutions transforming raw data into actionable insights through ETL pipelines, processing, and automation.",
    icon: "",
    projects: projects.filter(p => p.category === "data-analytics")
  },
  {
    id: "devops-cloud",
    name: "DevOps & Cloud",
    description: "Cloud infrastructure, deployment automation, and DevOps practices for reliable software delivery.",
    icon: "",
    projects: projects.filter(p => p.category === "devops-cloud")
  },
  {
    id: "full-stack",
    name: "Full-Stack Development",
    description: "End-to-end web applications combining frontend and backend technologies with modern frameworks and best practices.",
    icon: "",
    projects: projects.filter(p => p.category === "full-stack")
  },
  {
    id: "hardware-embedded",
    name: "Hardware & Embedded Systems",
    description: "Low-level systems engineering projects exploring embedded firmware, signal processing, and RF technologies in hardware and software systems.",
    icon: "",
    projects: projects.filter(p => p.category === "hardware-embedded")
  }
];

// Helper function to get featured projects for home page
export const getFeaturedProjects = (): Project[] => {
  const featuredSlugs = ["ai-system-prompt", "personal-ai-system", "simrag-reproduction", "devops-scorecard"];
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
  const currentProject = projects.find(p => p.slug === currentSlug);
  if (!currentProject) return undefined;
  
  // Get all projects in the same category, maintaining array order
  const categoryProjects = projects.filter(p => p.category === currentProject.category);
  const currentIndex = categoryProjects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  
  // Navigate within the category
  const nextIndex = (currentIndex + 1) % categoryProjects.length;
  return categoryProjects[nextIndex];
};

export const getPreviousProject = (currentSlug: string): Project | undefined => {
  const currentProject = projects.find(p => p.slug === currentSlug);
  if (!currentProject) return undefined;
  
  // Get all projects in the same category, maintaining array order
  const categoryProjects = projects.filter(p => p.category === currentProject.category);
  const currentIndex = categoryProjects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  
  // Navigate within the category
  const prevIndex = currentIndex === 0 ? categoryProjects.length - 1 : currentIndex - 1;
  return categoryProjects[prevIndex];
};
