# Portfolio Project Summaries

---

## Featured Projects

### MY-AI - Privacy-Focused Personal AI Assistant
**Tech Stack:** Python, FastAPI, Ollama, Qdrant, Poetry, Docker, Typer CLI  
**Repository:** [tharpep/MY-AI](https://github.com/tharpep/MY-AI)  
**Status:** Active Development

#### Summary
Built a privacy-first local AI assistant platform featuring Retrieval Augmented Generation (RAG) with personal document knowledge bases and extensible tool integration. Architected a modular system with local-first processing using Ollama and optional cloud fallbacks (OpenAI/Claude) for flexibility.

#### Key Contributions
- **LLM Gateway Architecture**: Designed unified AI provider interface with OpenAI-compatible `/v1/chat/completions` and `/v1/embeddings` endpoints, supporting dynamic provider/model selection per request
- **RAG System**: Implemented full document ingestion pipeline with chunking, Qdrant vector storage, and cited answer retrieval with source references
- **Extensible Tool Framework**: Created base tool interface, registry system, and execution engine with parameter validation and allowlist security
- **Request Logging & Observability**: Built SQLite-based request tracking system with unique request IDs, performance metrics, and structured error handling
- **CLI Development**: Developed comprehensive Typer-based CLI with interactive chat, demos, testing, and tab completion support

#### Technical Highlights
- Comprehensive test suite with mocked dependencies for API, LLM providers, and RAG components
- Proper HTTP status codes, error handling, and route organization
- Docker containerization with development environment setup
- Request ID tracking across all API endpoints for debugging and analytics

#### Skills Demonstrated
Python • FastAPI • Vector Databases (Qdrant) • LLM Integration • RAG Architecture • CLI Development • Docker • Testing (pytest) • API Design • Poetry

---

### Cognitive Coach - Gen-AI Study Assistant Subsystem (Senior Design)
**Tech Stack:** Python, RAG, Qdrant, Ollama, Purdue GenAI Studio API, TypeScript  
**Repository:** [tharpep/team35-seniordesign](https://github.com/tharpep/team35-seniordesign) (Contributor)  
**Role:** Gen-AI Subsystem Owner & Developer  
**Status:** In Progress (Expected Completion: May 2026)

#### Summary
Developing the generative AI subsystem for a multi-platform cognitive learning assistant (web, mobile, smart glasses). Own end-to-end design and implementation of RAG-based artifact generation system that creates personalized study materials from academic notes.

#### Key Contributions
- **RAG Pipeline Ownership**: Architected complete RAG system including document ingestion, vector store management (Qdrant), and context-aware retrieval for academic content
- **AI Artifact Generation**: Implemented automated generation of flashcards, multiple-choice questions, and study insights with JSON schemas, difficulty ratings, and source citations
- **Multi-Provider LLM Integration**: Built AI gateway supporting both local models (Ollama) and cloud APIs (Purdue GenAI Studio) with configurable switching for performance optimization (30-45s → 5-10s response time)
- **Structured Output System**: Designed Pydantic-based schemas for artifact templates ensuring consistent, validated JSON outputs with metadata tracking
- **Testing & Validation**: Created comprehensive unit tests and interactive demos for all RAG and artifact creation functionality

#### System Integration
The gen-ai subsystem provides backend intelligence for web, mobile, and glasses interfaces, processing user notes and generating personalized learning materials on-demand.

#### Technical Highlights
- Reduced artifact generation latency by 70% through provider optimization
- Handles multiple document formats (.txt, .md) with intelligent chunking (1000 chars/chunk)
- Bloom's taxonomy integration for MCQ difficulty classification
- Automated artifact output management with timestamped JSON storage

#### Skills Demonstrated
Python • RAG Architecture • Vector Databases (Qdrant) • LLM Integration • API Gateway Design • JSON Schema Design • Educational Technology • Team Collaboration

---

### Portfolio Website - pryceTharpe.dev
**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Vercel, GitHub Actions, Python (Spotify API), Azure Blob Storage  
**Repository:** [tharpep/portfolio](https://github.com/tharpep/portfolio)  
**Live:** [prycetharpe.dev](https://prycetharpe.dev)  
**Status:** Active

#### Summary
Developed modern portfolio website with Next.js 15 App Router featuring live Spotify integration, automated data updates via GitHub Actions, and dynamic photography galleries with Azure Blob Storage.

#### Key Contributions
- **Modern Web Stack**: Built with Next.js 15 (App Router), React 19 (Server Components), TypeScript (strict mode), and Tailwind CSS for utility-first styling
- **Spotify Integration**: Implemented live music data display with Python scripts fetching top artists, tracks, and daily favorites via Spotify API
- **Automation Pipeline**: Created GitHub Actions workflow for daily automated Spotify data updates with secure secrets management
- **Cloud Storage Integration**: Integrated Azure Blob Storage for scalable image hosting with dynamic SAS URLs and optimized delivery
- **Performance Optimization**: Leveraged Next.js Image Optimization, Vercel Analytics, and responsive design for fast loading across devices
- **CI/CD**: Configured auto-deployment on Vercel with preview URLs per PR for seamless development workflow

#### Technical Highlights
- Python + Spotify API + GitHub Actions → JSON → Vercel auto-deploy pipeline
- TypeScript path aliases (`@/*`) and strict type checking
- Vercel Analytics for performance monitoring
- Mobile-first responsive gallery layouts

#### Skills Demonstrated
Next.js 15 • React 19 • TypeScript • Tailwind CSS • GitHub Actions • Python • API Integration (Spotify, Azure) • Cloud Storage • CI/CD • DevOps • Performance Optimization

---

### ECE 461 Package Registry - AWS Infrastructure & Phase 2 Metrics
**Tech Stack:** TypeScript, Python, AWS (ECS, Fargate, ECR, S3, API Gateway, ALB, CloudWatch), Docker, GitHub Actions  
**Repository:** [Anjali-Vanamala/ECE461_Part2](https://github.com/Anjali-Vanamala/ECE461_Part2) (Contributor)  
**Role:** AWS Infrastructure Engineer & Phase 2 Metrics Developer  
**Status:** In Progress (Expected Completion: December 2025)

#### Summary
Collaborating on a package registry evaluation system for Hugging Face models. Own complete AWS deployment infrastructure and implemented three Phase 2 metrics for model quality assessment.

#### Key Contributions - AWS Infrastructure
- **Containerized Deployment**: Architected full AWS deployment using ECS/Fargate for serverless container orchestration with automated CI/CD via GitHub Actions
- **Container Registry**: Set up ECR (Elastic Container Registry) with 8 Docker image versions using Git SHA-based tagging for traceability
- **Load Balancing & API Gateway**: Configured Application Load Balancer (ALB) and API Gateway with REST API endpoints (GET, POST, PUT, DELETE, OPTIONS) for stable HTTPS access
- **Infrastructure as Code**: Designed task definitions (512 CPU, 1024 MB memory), security groups, VPC networking, and IAM roles with GitHub OIDC authentication
- **Observability**: Implemented CloudWatch Logs integration with custom metrics namespace for request tracking, API latency, and error monitoring
- **Documentation**: Created comprehensive setup guides including quick status scripts, URL grabbers, and detailed command references

#### Key Contributions - Phase 2 Metrics
- **Reproducibility Metric**: Implemented detection system for example code in model files, GitHub repositories, and READMEs with AST-based Python syntax validation
- **Reviewedness Metric**: Built GitHub API integration to calculate fraction of code introduced via reviewed pull requests (last 2 years) with rate limiting
- **Treescore Metric**: Developed recursive parent model quality scoring system using Hugging Face API with caching to avoid duplicate calculations

#### AWS Services Used
ECS (Fargate) • ECR • S3 • Application Load Balancer • API Gateway • CloudWatch • IAM • VPC • Parameter Store • GitHub OIDC

#### Technical Highlights
- Automated deployments on push to `main` branch with zero-downtime rolling updates
- Stable HTTPS endpoints via API Gateway (no IP changes on task restart)
- Concurrent metric calculation using Python ThreadPoolExecutor
- Request tracking with unique IDs across distributed system

#### Skills Demonstrated
AWS (ECS, Fargate, ECR, S3, ALB, API Gateway, CloudWatch) • Docker • CI/CD (GitHub Actions) • Infrastructure as Code • Python • TypeScript • API Integration • System Design • Technical Documentation

---

## Additional Projects

### SimRAG Reproduction Study
**Tech Stack:** Python, RAG, Qdrant, Sentence Transformers, Ollama, Purdue GenAI API  
**Repository:** [tharpep/SimRAG-Reproduction](https://github.com/tharpep/SimRAG-Reproduction) *(Repository will be public after course completion - Fall 2025)*  
**Status:** In Progress (Expected Completion: December 2025)

#### Summary
Educational reproduction study of SimRAG paper focusing on similarity-based Retrieval Augmented Generation techniques. Built clean, modular implementation for learning RAG fundamentals and fine-tuning concepts.

#### Key Contributions
- **Unified AI Gateway**: Designed provider-agnostic interface supporting both local (Ollama) and cloud (Purdue GenAI) LLMs with automatic provider selection
- **RAG Implementation**: Built basic RAG system with Sentence Transformers for embeddings, Qdrant vector storage, and context-aware question answering
- **Async Support**: Implemented both synchronous and asynchronous API calls for flexible integration patterns
- **Testing Infrastructure**: Created comprehensive test suite with mocked external dependencies for reproducible testing
- **Documentation**: Provided document formatting best practices for optimal RAG performance (chunk size optimization, semantic clarity)

#### Technical Highlights
- In-memory and persistent Qdrant storage modes
- 1000-character optimal chunking for semantic search
- Comprehensive logging with rotating log files (1MB rotation, 3 backups)
- Educational codebase emphasizing clarity and core concepts

#### Skills Demonstrated
Python • RAG Architecture • Vector Databases (Qdrant) • Sentence Transformers • LLM Integration • Research Methodology • Testing (pytest) • Async Programming

---

### Trading Card Collection Manager
**Tech Stack:** FastAPI, React 19, TypeScript, PostgreSQL (Supabase), Tailwind CSS, Shadcn UI  
**Repository:** [tharpep/tradingcard_project](https://github.com/tharpep/tradingcard_project)  
**Status:** Paused (Core Features Complete)

#### Summary
Built a full-stack Pokemon trading card collection manager with multi-user support, cloud database, and admin CLI. Features modern React frontend with Shadcn UI components and FastAPI backend following repository pattern architecture.

#### Key Contributions
- **Full-Stack Architecture**: Designed three-tier system with FastAPI backend, React TypeScript frontend, and Supabase PostgreSQL cloud database
- **Database Design**: Implemented PostgreSQL schema with Row Level Security (RLS), unique constraints for duplicate prevention, and stored procedures for auto-quantity increment
- **Multi-User System**: Built user authentication with Supabase Auth (JWT tokens) and data isolation via Row Level Security policies
- **Repository Pattern**: Structured clean data access layer with service-based business logic separation
- **Admin CLI**: Developed comprehensive command-line interface for system-wide management (user admin, batch operations, analytics)
- **Modern UI**: Implemented responsive design with Shadcn UI components, search/filter functionality, and favorites system

#### Technical Highlights
- Supabase cloud database with 14 indexes for performance optimization
- RESTful API with comprehensive endpoint documentation
- Complete test suite (models, API, service layer, database, integration)
- Docker containerization ready for deployment

#### Skills Demonstrated
FastAPI • React 19 • TypeScript • PostgreSQL • Supabase • REST API Design • Repository Pattern • JWT Authentication • Tailwind CSS • Docker • Full-Stack Development

---

## Skills Summary

### Languages
Python • TypeScript • JavaScript • SQL • HTML/CSS

### Frameworks & Libraries
FastAPI • Next.js 15 • React 19 • Tailwind CSS • Poetry • Typer • Pydantic

### AI/ML & Data
RAG Architecture • Vector Databases (Qdrant) • LLM Integration (Ollama, OpenAI, Claude) • Sentence Transformers • Hugging Face API

### Cloud & Infrastructure
AWS (ECS, Fargate, ECR, S3, ALB, API Gateway, CloudWatch, IAM) • Azure Blob Storage • Vercel • Supabase

### DevOps & Tools
Docker • GitHub Actions • CI/CD • Git • PostgreSQL • SQLite

### Software Engineering
REST API Design • Repository Pattern • Testing (pytest) • Async Programming • CLI Development • System Architecture • Technical Documentation