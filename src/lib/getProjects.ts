export interface ProjectImage {
  path: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  timeline: string;
  status: 'completed' | 'in-progress' | 'planned';
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
  paperUrl?: string;
  hidden?: boolean;
  images?: ProjectImage[];
  challenge?: string;
  solution?: string[];
  result?: string;
  architectureDiagram?: { type: 'component'; name: 'sazed' } | { type: 'mermaid'; chart: string };
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
    slug: "personal-api-gateway",
    title: "Personal API Gateway",
    description: "Centralized API gateway providing unified access to Google services, AI providers, and internal microservices — the backbone of the Sazed personal AI ecosystem.",
    category: "devops-cloud",
    technologies: ["FastAPI", "Python", "Google OAuth", "Cloud Run", "Docker", "Secret Manager", "Anthropic API", "OpenRouter"],
    timeline: "January 2025 - Present",
    status: "completed",
    highlights: [],
    challenge: "Managing authentication and API calls across multiple services (Google Calendar, Gmail, Tasks, AI providers) was becoming repetitive across projects, with scattered credentials and inconsistent patterns.",
    solution: [
      "Built a centralized FastAPI gateway with unified authentication via API keys",
      "Implemented Google OAuth 2.0 with automatic token refresh for all Google services",
      "Created OpenAI-compatible AI routing supporting Claude and OpenRouter providers",
      "Deployed to GCP Cloud Run with secrets managed via Secret Manager"
    ],
    result: "Single endpoint powers the Sazed agent, automations platform, and knowledge base service. Clean separation of auth logic from application code, with consistent rate limiting and error handling across all consumers.",
    githubUrl: "https://github.com/tharpep/api-gateway",
  },
  {
    slug: "personal-automations",
    title: "Personal Automations Platform",
    description: "Automation platform organized by trigger type (scheduled, event-driven, manual) with YAML-driven configuration and deployment to GCP Cloud Run Jobs and Cloud Functions.",
    category: "devops-cloud",
    technologies: ["Python", "Cloud Run Jobs", "Cloud Scheduler", "Cloud Functions", "Docker", "Pushover", "Prompt Engineering"],
    timeline: "January 2025 - Present",
    status: "in-progress",
    highlights: [],
    challenge: "I wanted a simple way to deploy personal automations without repeating infrastructure setup for each new task. It should write the logic and let the platform handle scheduling and deployment.",
    solution: [
      "Organized automations into trigger-type folders (scheduled/triggered/manual) with a YAML config system for schedules and settings",
      "Integrated with my Personal API Gateway for access to Google services (Calendar, Gmail, Tasks)",
      "Designed for extensibility—adding a new automation is just adding a Python file with YAML config",
      "Currently running daily and weekly AI context briefings as the first automations on the platform"
    ],
    result: "A personal automation framework where new scheduled tasks can be deployed by writing a single Python file. Currently powers AI-generated briefings, with more automations planned.",
    githubUrl: "https://github.com/tharpep/automations",
  },
  {
    slug: "azure-etl-pipeline",
    title: "Azure ETL Pipeline",
    description: "Automated Azure financial cost analysis pipeline using Microsoft Fabric and SQL.",
    category: "data-analytics",
    technologies: ["Microsoft Fabric", "Azure Data Factory", "SQL", "Azure Functions", "Python", "Power BI"],
    timeline: "May 2025 - Present",
    status: "completed",
    highlights: [],
    challenge: "A 13-step monthly Azure cost analysis process took managers 2-3 hours of manual work, with risk of errors and inconsistent results.",
    solution: [
      "Built automated ETL pipeline using Microsoft Fabric and Azure Data Factory",
      "Implemented fault-tolerant processing with error recovery and monitoring",
      "Created Power BI dashboards for automated financial reporting"
    ],
    result: "Reduced processing time by 95% (2-3 hours to 5-10 minutes), delivering reliable, repeatable results for financial analysis.",
  },
  {
    slug: "devops-scorecard",
    title: "Azure DevOps Sprint Scorecard",
    description: "Azure DevOps extension providing sprint health and status visibility.",
    category: "data-analytics",
    technologies: ["React", "Next.js", "Node.js", "Azure DevOps Extension SDK", "VSIX", "Vite", "TypeScript"],
    timeline: "June 2025 - Present",
    status: "completed",
    highlights: [],
    challenge: "Stakeholders lacked real-time visibility into sprint health and status within Azure DevOps, requiring manual status updates.",
    solution: [
      "Built Azure DevOps extension with embedded Next.js dashboard",
      "Integrated with Azure DevOps REST API for real-time sprint data",
      "Mentored high school intern in backend development"
    ],
    result: "Extension currently rolling out to project teams. Also mentored a high school intern on backend work during development.",
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
    hidden: true
  },
  {
    slug: "dj-pete-beat-sequencer",
    title: "DJ Pete Beat Sequencer",
    description: "Embedded firmware with a STM32 microcontroller for interactive music production.",
    category: "hardware-embedded",
    technologies: ["STM32", "C", "I2C", "DMA", "DAC", "SPI", "Adafruit NeoTrellis", "Embedded Systems"],
    timeline: "2024",
    status: "completed",
    highlights: [],
    challenge: "For the Purdue Spark Challenge, I wanted to build something that combined my embedded systems coursework with music production.",
    solution: [
      "Implemented multiple communication protocols (I2C, DMA, DAC, SPI) on STM32 microcontroller",
      "Integrated Adafruit NeoTrellis RGB keypads for visual feedback and user interaction",
      "Developed real-time audio processing with low-latency performance"
    ],
    result: "Presented the working beat sequencer at the Spark Challenge. Good hands-on experience with low-level protocols and real-time audio.",
    images: [{ path: "djpete.jpg", caption: "Beat sequencer with NeoTrellis RGB keypad interface" }],
    githubUrl: "https://github.com/tharpep/ECE362-Project"
  },
  {
    slug: "ai-system-prompt",
    title: "AI System Prompt Framework",
    description: "IDE prompt that aims to standardize AI-assisted coding workflows across engineering teams.",
    category: "ai-ml",
    technologies: ["OpenAI API", "Prompt Engineering", "Cursor IDE", "Windsurf IDE", "Python", "Custom GPTs"],
    timeline: "August 2025 - Present",
    status: "completed",
    highlights: [],
    challenge: "Engineering teams needed consistent AI-assisted coding workflows across multiple IDEs, with varying levels of AI experience among developers.",
    solution: [
      "Co-developed master IDE prompt standardizing AI workflows across Cursor, Windsurf, and VS Code",
      "Led 2 company-wide lunch and learns on ChatGPT setup and prompt usage",
      "Conducted 17 group/individual AI check-ins and mentored an intern"
    ],
    result: "Established AI standards and best practices across engineering departments, improving team comfort and productivity with AI tools.",
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
    hidden: true
  },
  {
    slug: "fm-radio-research",
    title: "FM Radio Detection & Demodulation",
    description: "Research project engineering automated FM radio signal detection using USRP software-defined radio and GNU Radio.",
    category: "hardware-embedded",
    technologies: ["USRP", "GNU Radio", "Signal Processing", "Python", "Software-Defined Radio", "RF Engineering"],
    timeline: "2024",
    status: "completed",
    highlights: [],
    challenge: "For an ECE research project, I worked on automating FM signal detection using software-defined radio.",
    solution: [
      "Engineered automated FM detection system using USRP and GNU Radio",
      "Implemented signal processing algorithms for demodulation",
      "Built Python automation scripts for signal analysis workflows"
    ],
    result: "Built a working FM detection and demodulation system. Learned a lot about RF engineering and signal processing in practice.",
  },
  {
    slug: "knowledge-base",
    title: "Personal Knowledge Base",
    description: "Cloud-hosted knowledge base with hybrid retrieval, Google Drive sync, and Voyage AI embeddings for personal document search.",
    category: "ai-ml",
    technologies: ["FastAPI", "Python", "PostgreSQL", "pgvector", "Voyage AI", "Google Drive API", "GCP Cloud Run", "Docker", "Poetry"],
    timeline: "August 2025 - Present",
    status: "in-progress",
    highlights: [],
    challenge: "I wanted a private, searchable knowledge base backed by my own documents — Google Docs, PDFs, spreadsheets — with retrieval quality beyond basic keyword or single-vector search.",
    solution: [
      "Built hybrid retrieval pipeline combining dense vector search (pgvector) with PostgreSQL full-text search, fused via Reciprocal Rank Fusion (RRF)",
      "Applied Voyage AI reranking as a final stage to maximize result relevance",
      "Implemented incremental Google Drive sync with folder change detection and category-based document filtering",
      "Exposed an OpenAI-compatible chat completions endpoint with RAG injection",
      "Deployed to GCP Cloud Run with a Neon PostgreSQL database as the vector store"
    ],
    result: "Deployed and in active use. Powers document retrieval for the Sazed agent.",
    githubUrl: "https://github.com/tharpep/knowledge-base",
  },
  {
    slug: "sazed",
    title: "Sazed - Personal AI Agent",
    description: "End-to-end personal AI agent with agentic tool use, persistent memory, streaming chat, and Claude Desktop integration via MCP.",
    category: "ai-ml",
    technologies: ["Python", "FastAPI", "Anthropic SDK", "React 19", "TypeScript", "Tauri", "Vite", "Zustand", "FastMCP", "PostgreSQL", "GCP Cloud Run", "Docker", "Poetry"],
    timeline: "January 2025 - Present",
    status: "in-progress",
    highlights: [],
    challenge: "I wanted an AI agent that knew my personal context and could act on it, with memory that persisted across sessions, accessible from multiple clients.",
    solution: [
      "Built a FastAPI agent service using the Anthropic SDK with a multi-turn agentic loop",
      "Implemented 20+ tools covering Google Calendar, Tasks, Gmail, Drive, knowledge base search, and Pushover notifications — all routed through the Personal API Gateway",
      "Designed persistent agent memory with post-session fact extraction and summarization using Claude Haiku",
      "Built a cross-platform desktop and web frontend with React 19, Vite, and Tauri featuring real-time SSE streaming and tool call visualization",
      "Created a FastMCP bridge exposing Sazed to Claude Desktop via stdio MCP transport as a single ask_sazed tool"
    ],
    result: "Fully operational personal AI agent in daily use. All backend services deployed to GCP Cloud Run; desktop app available cross-platform via Tauri.",
    githubUrl: "https://github.com/tharpep/sazed",
    architectureDiagram: { type: 'component', name: 'sazed' },
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    description: "Modern portfolio website with Next.js 15 App Router.",
    category: "full-stack",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Vercel", "GitHub Actions", "Python", "Spotify API"],
    timeline: "May 2025 - Present",
    status: "completed",
    highlights: [],
    challenge: "Needed a portfolio site to showcase my work. Used it as a chance to learn Next.js 15 and set up some automation.",
    solution: [
      "Built with Next.js 15 App Router and React 19 Server Components",
      "Implemented live Spotify integration with Python scripts and GitHub Actions",
      "Configured auto-deployment on Vercel with preview URLs per PR"
    ],
    result: "Live at pryce-tharpe.dev. Spotify data updates automatically via GitHub Actions.",
    githubUrl: "https://github.com/tharpep/portfolio",
    demoUrl: "https://pryce-tharpe.dev"
  },
  {
    slug: "simrag-reproduction",
    title: "SimRAG Reproduction Study",
    description: "Reproduction study of a paper implementing similarity-based RAG with two-stage fine-tuning on consumer hardware.",
    category: "ai-ml",
    technologies: ["Python", "RAG", "Qdrant", "Sentence Transformers", "Ollama", "Purdue GenAI API", "PyTorch", "Docker", "Poetry"],
    timeline: "August 2025 - December 2025",
    status: "completed",
    highlights: [],
    challenge: "Reproduce and understand the SimRAG paper's similarity-based RAG techniques, implementing on consumer hardware to learn RAG fundamentals.",
    solution: [
      "Built provider-agnostic interface supporting local (Ollama) and cloud LLMs",
      "Implemented two-stage fine-tuning: instruction following, then domain adaptation",
      "Created test suite with mocked dependencies for reproducible testing"
    ],
    result: "Successfully trained and tested on consumer hardware (RTX 3080). Fine-tuning showed limited improvement because the 1.5B model I used was smaller than the paper's 8B/27B models, highlighting the importance of model capacity in RAG systems.",
    githubUrl: "https://github.com/tharpep/SimRAG-Reproduction",
    paperUrl: "/papers/SimRAG_Reproduction.pdf"
  },
  {
    slug: "ece461-model-registry",
    title: "Trustworthy Model Registry",
    description: "Group project building a model registry with AWS deployment.",
    category: "devops-cloud",
    technologies: ["AWS ECS", "AWS Fargate", "Python", "FastAPI", "React", "Next.js", "Docker", "GitHub Actions"],
    timeline: "August 2025 - December 2025",
    status: "completed",
    highlights: [],
    challenge: "For ECE 46100 (Software Engineering), my team built a model registry. I led the AWS infrastructure and implemented the trustworthiness metrics.",
    solution: [
      "Designed and deployed AWS ECS/Fargate infrastructure for containerized hosting",
      "Implemented three evaluation metrics: Reproducibility, Reviewedness, and Treescore",
      "Built React frontend with Next.js and FastAPI backend"
    ],
    result: "Shipped a working registry with AWS deployment. Good experience with team-based development and weekly milestones.",
    images: [{ path: "trustedmodelregistry_healthboard.png", caption: "System health monitoring dashboard" }],
    githubUrl: "https://github.com/Anjali-Vanamala/ECE461_Part2"
  },
  {
    slug: "team35-seniordesign",
    title: "Senior Design GenAI Subsystem",
    description: "Built the generative AI subsystem for a multi-platform cognitive coaching application.",
    category: "ai-ml",
    technologies: ["Python", "FastAPI", "RAG", "Qdrant", "Ollama", "Purdue GenAI API", "Typer CLI", "Docker"],
    timeline: "August 2025 - December 2025",
    status: "completed",
    highlights: [],
    challenge: "For Senior Design, I built the GenAI subsystem for a cognitive coaching app. My part handled artifact generation and the RAG-powered chat.",
    solution: [
      "Architected RAG system with Qdrant vector storage and document ingestion pipeline",
      "Built artifact generation (flashcards, MCQ, insights) with schema validation",
      "Developed interactive chat with three-layer context (RAG + Summary + Recent messages)"
    ],
    result: "Delivered working subsystem that integrated with the team's mobile and web frontends.",
    images: [{ path: "genai_diagram.png", caption: "GenAI subsystem architecture" }],
    githubUrl: "https://github.com/tharpep/team35-seniordesign"
  },
  {
    slug: "tradingcard-collection-manager",
    title: "Trading Card Collection Manager",
    description: "Full-stack web application for managing trading card collections with multi-user authentication.",
    category: "full-stack",
    technologies: ["React", "TypeScript", "FastAPI", "Supabase", "PostgreSQL", "Row Level Security", "Shadcn UI", "Vite"],
    timeline: "August 2025 - December 2025",
    status: "in-progress",
    highlights: [],
    challenge: "Side project to learn authentication and database security. Building a multi-user app with Supabase.",
    solution: [
      "Implemented Supabase Auth with JWT token management",
      "Built Row Level Security (RLS) policies for data isolation",
      "Created responsive React frontend with Shadcn UI and admin CLI"
    ],
    result: "Completed core authentication and user management. Currently on pause while focusing on other projects.",
    githubUrl: "https://github.com/tharpep/tradingcard_project"
  }
];

// Helper to get visible projects only
const visibleProjects = projects.filter(p => !p.hidden);

export const projectCategories: ProjectCategory[] = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "AI solutions leveraging machine learning, natural language processing, and prompt engineering to solve business challenges.",
    icon: "",
    projects: visibleProjects.filter(p => p.category === "ai-ml")
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Solutions transforming raw data into actionable insights through ETL pipelines, processing, and automation.",
    icon: "",
    projects: visibleProjects.filter(p => p.category === "data-analytics")
  },
  {
    id: "devops-cloud",
    name: "DevOps & Cloud",
    description: "Cloud infrastructure, deployment automation, and DevOps practices for reliable software delivery.",
    icon: "",
    projects: visibleProjects.filter(p => p.category === "devops-cloud")
  },
  {
    id: "full-stack",
    name: "Full-Stack Development",
    description: "End-to-end web applications combining frontend and backend technologies with modern frameworks and best practices.",
    icon: "",
    projects: visibleProjects.filter(p => p.category === "full-stack")
  },
  {
    id: "hardware-embedded",
    name: "Hardware & Embedded Systems",
    description: "Low-level systems engineering projects exploring embedded firmware, signal processing, and RF technologies in hardware and software systems.",
    icon: "",
    projects: visibleProjects.filter(p => p.category === "hardware-embedded")
  }
];

// Helper function to get featured projects for home page
export const getFeaturedProjects = (): Project[] => {
  const featuredSlugs = ["ai-system-prompt", "sazed", "simrag-reproduction", "devops-scorecard"];
  return projects.filter(p => featuredSlugs.includes(p.slug));
};

export const getAllProjects = (): Project[] => {
  return visibleProjects;
};

export const getProjectsByCategory = (): ProjectCategory[] => {
  return projectCategories;
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getNextProject = (currentSlug: string): Project | undefined => {
  const currentProject = visibleProjects.find(p => p.slug === currentSlug);
  if (!currentProject) return undefined;

  // Get all visible projects in the same category, maintaining array order
  const categoryProjects = visibleProjects.filter(p => p.category === currentProject.category);
  const currentIndex = categoryProjects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;

  // Navigate within the category
  const nextIndex = (currentIndex + 1) % categoryProjects.length;
  return categoryProjects[nextIndex];
};

export const getPreviousProject = (currentSlug: string): Project | undefined => {
  const currentProject = visibleProjects.find(p => p.slug === currentSlug);
  if (!currentProject) return undefined;

  // Get all visible projects in the same category, maintaining array order
  const categoryProjects = visibleProjects.filter(p => p.category === currentProject.category);
  const currentIndex = categoryProjects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;

  // Navigate within the category
  const prevIndex = currentIndex === 0 ? categoryProjects.length - 1 : currentIndex - 1;
  return categoryProjects[prevIndex];
};
