import { isYearMonth, type DateRange } from "./dates";

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
  dates: DateRange;
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
  /** Show the live homelab architecture map at the top of the page. */
  homelabMap?: boolean;
  /** Also show the homelab's last-24-hours counts above the map. */
  homelabStats?: boolean;
  /** Slug of the project this one is part of (shown as a link under the description). */
  partOf?: string;
  /** Slugs of projects that are part of this one (shown as links). */
  relatedSlugs?: string[];
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
    description: "API gateway that handles Google, GitHub and AI provider access for my other services.",
    category: "devops-cloud",
    technologies: ["FastAPI", "Python", "Google OAuth", "GitHub Apps", "MCP", "PostgreSQL"],
    dates: { start: "2025-01", end: "present" },
    status: "in-progress",
    highlights: [],
    challenge: "Each service kept a copy of the Google, GitHub and AI credentials and the code to call them. Adding an integration meant repeating that work, and rotating a token meant updating several places.",
    solution: [
      "I built a FastAPI gateway that the other services call for Google Workspace, GitHub, web search and AI providers, so the credentials and OAuth token refresh live there.",
      "When the services moved to my homelab, I added a service registry that runs health checks every minute and sends outage and disk alerts to my phone.",
      "I set up a GitHub App account for automated changes, so code from Sazed's worker comes in as pull requests instead of pushes to main.",
      "I added an MCP server so Claude Code and Claude Desktop can check on the homelab and hand tasks to Sazed."
    ],
    result: "Adding an integration is now a router in the gateway instead of a change to each service, and rotating a credential means updating it in the gateway.",
    githubUrl: "https://github.com/tharpep/api-gateway",
    partOf: "homelab",
  },
  {
    slug: "personal-automations",
    title: "Personal Automations Platform",
    description: "Automation platform organized by trigger type with YAML-driven configuration and deployment to GCP Cloud Run Jobs and Cloud Functions.",
    category: "devops-cloud",
    technologies: ["Python", "Cloud Run Jobs", "Cloud Scheduler", "Cloud Functions", "Docker", "Pushover", "Prompt Engineering"],
    dates: { start: "2025-01", end: "present" },
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
    // Superseded: automations now run inside Sazed as data.
    hidden: true,
  },
  {
    slug: "azure-etl-pipeline",
    title: "Azure ETL Pipeline",
    description: "Automated Azure financial cost analysis pipeline using Microsoft Fabric and SQL.",
    category: "data-analytics",
    technologies: ["Microsoft Fabric", "Azure Data Factory", "SQL", "Azure Functions", "Python", "Power BI"],
    dates: { start: "2025-05", end: "present" },
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
    dates: { start: "2025-06", end: "present" },
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
    dates: { start: "2024-01", end: "present" },
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
    dates: { start: "2024" },
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
    slug: "kelsier",
    title: "Kelsier",
    description: "Terminal workspace for running several coding agents at once, tracking each one's task, branch, and whether it's waiting on me.",
    category: "ai-ml",
    technologies: ["Bash", "Go", "tmux", "Claude Code hooks", "fzf", "jq", "GitHub Actions"],
    dates: { start: "2026-08", end: "present" },
    status: "in-progress",
    highlights: [],
    challenge: "Once I started running several Claude Code sessions at once, I kept losing track of them: which terminal had which task, which branch it was on, and which one was waiting for me. I like working in the terminal, so I wanted to keep track of them there instead of switching to a separate app.",
    solution: [
      "I built it on tmux so everything stays in the terminal, and Claude Code runs unchanged in a tmux window while kel does the bookkeeping.",
      "I used Claude Code's hooks and status line to report each agent's state, context use and cost, so nothing has to poll in the background.",
      "The tmux status bar shows each agent's state, and a key binding jumps to the agent that's waiting on me.",
      "A sidebar lists the agents along with what each branch still needs (commit, push or a pull request), read from git."
    ],
    result: "The status bar and the jump key are working, and CI runs the tests on Linux and macOS.",
    githubUrl: "https://github.com/tharpep/kelsier"
  },
  {
    slug: "ai-system-prompt",
    title: "AI System Prompt Framework",
    description: "IDE prompt that aims to standardize AI-assisted coding workflows across engineering teams.",
    category: "ai-ml",
    technologies: ["OpenAI API", "Prompt Engineering", "Cursor IDE", "Windsurf IDE", "Python", "Custom GPTs"],
    dates: { start: "2025-08", end: "present" },
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
    dates: { start: "2024-01", end: "present" },
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
    dates: { start: "2024" },
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
    description: "Document search service for Sazed using vector and full-text search.",
    category: "ai-ml",
    technologies: ["FastAPI", "Python", "PostgreSQL", "pgvector", "Voyage AI"],
    dates: { start: "2025-08", end: "present" },
    status: "in-progress",
    highlights: [],
    challenge: "I wanted Sazed to look things up in my own documents and notes. Keyword search missed anything worded differently, and vector search on its own missed exact names and terms.",
    solution: [
      "I combined pgvector similarity search with PostgreSQL full-text search and merged the two rankings with Reciprocal Rank Fusion, so it catches both meaning and exact matches.",
      "I rerank the merged results with Voyage AI before returning them, since Sazed reads the top few results.",
      "Documents come in as uploads (PDF, Word, Markdown) or URLs from the dashboard or chat, and re-uploading a file replaces it instead of duplicating it."
    ],
    result: "Sazed uses it for document and journal search.",
    githubUrl: "https://github.com/tharpep/knowledge-base",
    partOf: "homelab",
  },
  {
    slug: "sazed",
    title: "Sazed – Personal AI Agent",
    description: "Personal AI agent that works with my calendar, email, tasks and documents, hosted on my homelab.",
    category: "ai-ml",
    technologies: ["Python", "FastAPI", "Anthropic SDK", "Claude Code", "PostgreSQL", "React 19", "TypeScript", "MCP"],
    dates: { start: "2025-01", end: "present" },
    status: "in-progress",
    highlights: [],
    challenge: "My calendar, email, tasks and notes were spread across different apps, and the AI assistants I used couldn't see any of it or do anything with it. I wanted my own agent that knew that context and that I could reach from my phone or desktop.",
    solution: [
      "I built the agent loop on the Anthropic SDK and routed its outside calls through my API gateway, so credentials and API code live in the gateway instead of the agent.",
      "I gave it memory by pulling facts out of each conversation and summarizing older context, which keeps long chats usable without resending everything.",
      "I added scheduled automations and a background worker for longer jobs, so research or code tasks don't hold up a chat.",
      "For code changes, the worker opens pull requests from a separate GitHub App account, so I review every change before it's merged."
    ],
    result: "I use it daily from my phone and desktop.",
    githubUrl: "https://github.com/tharpep/sazed",
    homelabMap: true,
    partOf: "homelab",
  },
  {
    slug: "homelab",
    title: "Homelab",
    description: "Proxmox server at home that runs Sazed and its related services.",
    category: "devops-cloud",
    technologies: ["Proxmox", "LXC", "Tailscale", "Caddy", "PostgreSQL", "GitHub Actions"],
    dates: { start: "2026-05", end: "present" },
    status: "in-progress",
    highlights: [],
    challenge: "Sazed and its services were spread across Google Cloud, Neon and Vercel, while I already had a Proxmox server at home. I wanted to run all of it myself on that server, without opening it up to the internet.",
    solution: [
      "I run each service in a separate LXC container on Proxmox, so I can restart or rebuild one without affecting the rest.",
      "It's only reachable over Tailscale, and Caddy adds the API keys to requests, so the apps on my phone and laptop don't hold any.",
      "Each container has a self-hosted GitHub Actions runner, so pushing to main deploys that service the same way Google Cloud did.",
      "The services are described in a YAML registry that the gateway uses for health checks and phone alerts, and that also generates the map on this page."
    ],
    result: "Sazed, the API gateway, the knowledge base and the agent worker all run on it now.",
    homelabMap: true,
    homelabStats: true,
    relatedSlugs: ["sazed", "personal-api-gateway", "knowledge-base"],
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    description: "Portfolio website with Next.js 15 App Router.",
    category: "full-stack",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Vercel", "GitHub Actions", "Python", "Spotify API"],
    dates: { start: "2025-05", end: "present" },
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
    slug: "photography-portfolio",
    title: "Photography Portfolio",
    description: "Photography portfolio with auto-discovered collections from Cloudinary, AI-generated metadata, EXIF extraction, and mood-aware theming.",
    category: "full-stack",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Cloudinary", "Anthropic SDK", "View Transitions API"],
    dates: { start: "2025-05", end: "present" },
    status: "completed",
    highlights: [],
    challenge: "Wanted a photography site that required zero code changes to add new content — just upload a folder to Cloudinary and it appears automatically with proper titles, descriptions, and theming.",
    solution: [
      "Built zero-config collection discovery from Cloudinary folder structure via the Admin API",
      "Integrated Claude Haiku to generate collection titles, descriptions, and mood classification at request time, cached with ISR",
      "Implemented EXIF metadata extraction pipeline from Cloudinary and blur-up placeholder generation with aggressive caching",
      "Added mood-aware theming that adapts page backgrounds and navigation based on collection content",
      "Used the View Transitions API for smooth page-to-page navigation as a progressive enhancement"
    ],
    result: "Adding a new collection is just uploading a folder to Cloudinary — no code changes, no config files, no redeployment.",
    githubUrl: "https://github.com/tharpep/portfolio",
    demoUrl: "https://pryce-tharpe.dev/photography"
  },
  {
    slug: "simrag-reproduction",
    title: "SimRAG Reproduction Study",
    description: "Reproduction study of a paper implementing similarity-based RAG with two-stage fine-tuning on consumer hardware.",
    category: "ai-ml",
    technologies: ["Python", "RAG", "Qdrant", "Sentence Transformers", "Ollama", "Purdue GenAI API", "PyTorch", "Docker", "Poetry"],
    dates: { start: "2025-08", end: "2025-12" },
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
    dates: { start: "2025-08", end: "2025-12" },
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
    dates: { start: "2025-08", end: "2025-12" },
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
    dates: { start: "2025-08", end: "2025-12" },
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

export const projectStatusLabel = (status: Project["status"]) =>
  status === "completed" ? "Completed" : status === "in-progress" ? "In Progress" : "Planned";

// Content checks. Cards reserve three lines for the description (about 140
// characters at every screen width), so longer text gets cut off. These warn in
// the dev server and build logs rather than failing the build.
const DESCRIPTION_MAX = 140;
for (const p of visibleProjects) {
  if (p.description.length > DESCRIPTION_MAX) {
    console.warn(`[projects] "${p.slug}" description is ${p.description.length} characters; cards show about ${DESCRIPTION_MAX}.`);
  }
  if (!isYearMonth(p.dates.start) || (p.dates.end && p.dates.end !== "present" && !isYearMonth(p.dates.end))) {
    console.warn(`[projects] "${p.slug}" dates must be "YYYY-MM" or "YYYY" (end may be "present").`);
  }
}

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

// Featured projects for the home page, in display order
const featuredSlugs = ["ai-system-prompt", "sazed", "simrag-reproduction", "kelsier"];

export const getFeaturedProjects = (): Project[] => {
  return featuredSlugs
    .map(slug => visibleProjects.find(p => p.slug === slug))
    .filter((p): p is Project => p !== undefined);
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
