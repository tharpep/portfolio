import type { Metadata } from "next";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Resume – Pryce Tharpe",
  description: "Resume for Pryce Tharpe - Software Engineer Intern at Mesh Systems and Computer Engineering student at Purdue University.",
};

export default function Resume() {
  return (
    <main id="main" className="bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-10 md:py-12 min-h-screen">

      <ScrollFadeIn>
        {/* Hero Section */}
        <section className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-mono tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400/90 to-blue-400/90 leading-tight">
            Pryce Tharpe
          </h1>
        </section>

        {/* Subtle Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto mb-10 sm:mb-12"></div>
      </ScrollFadeIn>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">

        {/* Professional Experience */}
        <ScrollFadeIn>
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6 border-b border-cyan-500/30 pb-2">
              Professional Experience
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">Mesh Systems</h3>
                    <p className="text-neutral-400 text-sm">Carmel, IN</p>
                  </div>
                  <span className="text-cyan-400 font-mono text-sm mt-1 sm:mt-0">May 2025 -- Present</span>
                </div>
                <p className="text-neutral-300 italic mb-4">Software Engineer Intern</p>
                <p className="text-neutral-300 mb-6 leading-relaxed">
                  Rotated through Cloud, Mobile & DevOps teams on AI enablement, automation, and feature development.
                </p>

                {/* AI System Prompt */}
                <div className="mb-6 pl-4 border-l-2 border-cyan-500/30">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">AI System Prompt & Internal Enablement Platform</h4>
                    <span className="text-neutral-400 font-mono text-sm">Jun -- Aug 2025</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-2">
                    <li>Developed a master IDE prompt that standardized AI-assisted coding workflows across the company.</li>
                    <li>Built internal GPT-based tools and facilitated 17 short enablement sessions (AI 101/workshops) for 20+ engineers across multiple teams, standardizing AI usage across the org.</li>
                  </ul>
                </div>

                {/* Azure DevOps Scorecard */}
                <div className="mb-6 pl-4 border-l-2 border-cyan-500/30">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">Azure DevOps Sprint Scorecard Extension</h4>
                    <span className="text-neutral-400 font-mono text-sm">Jun -- Aug 2025</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-2">
                    <li>Designed and delivered an Azure DevOps extension with real-time sprint dashboards for project tracking.</li>
                    <li>Converted a static HTML prototype into a production-ready React/Next.js solution, integrating backend data from a junior intern&apos;s service.</li>
                  </ul>
                </div>

                {/* Financial Report Automation */}
                <div className="pl-4 border-l-2 border-cyan-500/30">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">Financial Report Automation</h4>
                    <span className="text-neutral-400 font-mono text-sm">May -- Jun 2025</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-2">
                    <li>Designed and launched an automated ETL pipeline with Microsoft Fabric and SQL, cutting monthly Azure reporting from 3 hours to under 10 minutes.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* Subtle Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto"></div>

        {/* Academic & Personal Projects */}
        <ScrollFadeIn delay={100}>
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6 border-b border-cyan-500/30 pb-2">
              Academic & Personal Projects
            </h2>

            <div className="space-y-6">
              {/* ECE 46100 */}
              <div className="pl-4 border-l-2 border-blue-500/30">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">ECE 46100 - Software Engineering --- Package Registry System</h3>
                  <span className="text-neutral-400 font-mono text-sm">Aug -- Dec 2025</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-2">
                  <li>Designed complete AWS deployment infrastructure (ECS/Fargate, ECR, S3, CloudWatch) with CI/CD pipeline using GitHub Actions and OIDC authentication.</li>
                  <li>Implemented LLM-based evaluation metrics for performance claims and reproducibility assessment.</li>
                </ul>
              </div>

              {/* Senior Design */}
              <div className="pl-4 border-l-2 border-blue-500/30">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">Senior Design --- Smart Glasses GenAI Subsystem</h3>
                  <span className="text-neutral-400 font-mono text-sm">Aug -- Dec 2025</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-2">
                  <li>Built FastAPI microservice with retrieval-augmented generation (RAG) pipeline using Qdrant vector store, multi-provider LLM abstraction (Ollama/GenAI API), and three-layer context system.</li>
                  <li>Designed REST endpoints for educational artifact generation (flashcards, MCQs); integrated with Node.js backend and React/React Native frontends.</li>
                </ul>
              </div>

              {/* SimRAG Reproduction */}
              <div className="pl-4 border-l-2 border-blue-500/30">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">SimRAG Reproduction - RAG Fine-Tuning Study</h3>
                  <span className="text-neutral-400 font-mono text-sm">Aug - Dec 2025</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-2">
                  <li>Reproduced NAACL 2025 SimRAG methodology on consumer hardware; implemented two-stage QLoRA fine-tuning with 4-bit quantization and built evaluation framework establishing model capacity lower bounds for RAG effectiveness.</li>
                </ul>
              </div>

              {/* Sazed */}
              <div className="pl-4 border-l-2 border-blue-500/30">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">Sazed — Personal AI Agent</h3>
                  <span className="text-neutral-400 font-mono text-sm">Jan 2025 - Present</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-2">
                  <li>Built a multi-turn agentic loop with the Anthropic SDK — 20+ tools spanning Google Workspace, GitHub, knowledge base search, and push notifications, all routed through a personal API gateway.</li>
                  <li>Implemented persistent memory with post-session fact extraction and context summarization; routes simple turns to a fast model and complex ones to a capable one.</li>
                  <li>Shipped a cross-platform desktop and web frontend (React 19, Vite, Tauri) with real-time SSE streaming and tool call visualization, and a FastMCP bridge exposing the agent to Claude Desktop as a single <code className="text-xs bg-neutral-700 px-1 rounded">ask_sazed</code> tool.</li>
                </ul>
              </div>

              {/* Knowledge Base */}
              <div className="pl-4 border-l-2 border-blue-500/30">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">Personal Knowledge Base</h3>
                  <span className="text-neutral-400 font-mono text-sm">Aug 2025 - Present</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-2">
                  <li>Built a hybrid retrieval pipeline combining pgvector dense search with PostgreSQL full-text search, fused via Reciprocal Rank Fusion (RRF) and re-ranked with Voyage AI rerank-2.5.</li>
                  <li>Implemented incremental Google Drive sync with folder change detection; deployed to GCP Cloud Run with Cloud SQL as the vector store.</li>
                </ul>
              </div>

              {/* API Gateway */}
              <div className="pl-4 border-l-2 border-blue-500/30">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">Personal API Gateway</h3>
                  <span className="text-neutral-400 font-mono text-sm">Jan 2025 - Present</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-2">
                  <li>Centralized FastAPI gateway unifying Google Workspace (Calendar, Gmail, Tasks, Drive, Sheets), GitHub, AI providers, and internal services behind a single API key.</li>
                  <li>Implemented Google OAuth 2.0 with automatic token refresh and OpenAI-compatible AI routing supporting Claude and OpenRouter; deployed to GCP Cloud Run with Secret Manager.</li>
                </ul>
              </div>

              {/* Portfolio */}
              <div className="pl-4 border-l-2 border-blue-500/30">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">Portfolio Website</h3>
                  <span className="text-neutral-400 font-mono text-sm">May 2025 - Present</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-2">
                  <li>Built with Next.js 15, React 19 Server Components, and TypeScript with live Spotify integration via Python scripts and GitHub Actions.</li>
                </ul>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* Subtle Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto"></div>

        {/* Additional Experience */}
        <ScrollFadeIn delay={200}>
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6 border-b border-cyan-500/30 pb-2">
              Additional Experience
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Purdue Rack and Roll</h3>
                    <p className="text-neutral-400 text-sm">West Lafayette, IN</p>
                  </div>
                  <span className="text-cyan-400 font-mono text-sm">Aug 2023 -- Present</span>
                </div>
                <p className="text-neutral-300 leading-relaxed">
                  Managed daily operations and customer experience in a high-responsibility, two-person setting.
                </p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Royal Pin Woodland</h3>
                    <p className="text-neutral-400 text-sm">Indianapolis, IN</p>
                  </div>
                  <span className="text-cyan-400 font-mono text-sm">Aug 2021 -- Aug 2024</span>
                </div>
                <p className="text-neutral-300 leading-relaxed">
                  Trained 5+ new hires, led 2--4-person teams, and supervised a 70-lane center during peak hours.
                </p>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* Subtle Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto"></div>

        {/* Education */}
        <ScrollFadeIn delay={300}>
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6 border-b border-cyan-500/30 pb-2">
              Education
            </h2>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">Purdue University</h3>
                  <p className="text-neutral-400 text-sm">West Lafayette, IN</p>
                </div>
                <span className="text-cyan-400 font-mono text-sm">Aug 2022 -- May 2026</span>
              </div>
              <p className="text-neutral-300 mb-2">Bachelor of Science in Computer Engineering</p>
              <p className="text-neutral-400 italic text-sm">
                Current Coursework: Software Engineering, Machine Learning, Software Senior Design
              </p>
            </div>
          </section>
        </ScrollFadeIn>

        {/* Subtle Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto"></div>

        {/* Skills */}
        <ScrollFadeIn delay={400}>
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6 border-b border-cyan-500/30 pb-2">
              Skills
            </h2>

            <div className="rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 p-4 sm:p-6">
              <p className="text-neutral-300 leading-relaxed">
                <span className="font-semibold text-white">Technical:</span> Python, C/C++, React, Next.js, TypeScript, AWS (ECS, ECR, S3, CloudWatch, IAM), Docker, CI/CD (GitHub Actions), Azure DevOps, Microsoft Fabric, SQL, FastAPI, RAG Systems, LLM Integration, Prompt Engineering, Git/GitHub, pytest
              </p>
            </div>
          </section>
        </ScrollFadeIn>

        {/* PDF Download Link */}
        <ScrollFadeIn delay={500}>
          <div className="text-center pt-8">
            <a
              href="/Pryce_Tharpe___No_PII.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download PDF Resume
            </a>
          </div>
        </ScrollFadeIn>

      </div>
    </main>
  );
}

