// Content for /ai. Sections with no items are skipped when rendering.

export interface SetupItem {
  name: string;
  note: string;
  href?: string; // internal path or external URL
}

export interface SetupSection {
  id: string;
  title: string;
  intro?: string;
  items: SetupItem[];
}

// Bump whenever the page content changes.
export const aiSetupUpdated = "October 2026";

export const aiSetupIntro =
  "How I use AI day to day: the tools, the systems I built around them, and where I keep learning.";

export const aiSetupSections: SetupSection[] = [
  {
    id: "workflow",
    title: "How I work",
    items: [
      {
        name: "Claude Code",
        note: "Anything that lives in a repo. Each project has a CLAUDE.md with its commands, architecture, and conventions, so a new session starts with context instead of guesses. I also run cloud sessions from my phone.",
      },
      {
        name: "Claude Desktop",
        note: "Conversations that need my personal context. Sazed is connected as a single ask_sazed tool, so Desktop can reach my calendar, email, and documents through it.",
      },
    ],
  },
  {
    id: "built",
    title: "Systems I built for myself",
    items: [
      {
        name: "Sazed",
        href: "/projects/sazed",
        note: "My personal agent: 20+ tools, memory that persists across sessions, and a desktop app. I use it every day.",
      },
      {
        name: "API Gateway",
        href: "/projects/personal-api-gateway",
        note: "One authenticated entry point to Google Workspace, GitHub, and model providers, so no other service holds those credentials.",
      },
      {
        name: "Knowledge Base",
        href: "/projects/knowledge-base",
        note: "Hybrid search over my Google Drive documents (pgvector plus full-text, then reranked). Sazed uses it for anything it needs to look up.",
      },
      {
        name: "Automations",
        href: "/projects/personal-automations",
        note: "Scheduled jobs, starting with daily and weekly AI briefings on what's coming up.",
      },
    ],
  },
  {
    id: "connectors",
    title: "Connectors and tools",
    items: [
      { name: "Google Workspace", note: "Gmail, Calendar, and Drive, for pulling my own mail, schedule, and documents into a conversation." },
      { name: "GitHub", note: "Reviewing pull requests and CI without leaving the session." },
      { name: "Vercel", note: "Deploys and logs for this site." },
      { name: "Context7", note: "Current library docs, so answers match the version I'm actually on." },
      { name: "Playwright", note: "Browser automation, through the CLI and a Claude skill." },
    ],
  },
  {
    id: "config",
    title: "Config and instructions",
    items: [
      {
        name: "Facts over vibes",
        note: "My CLAUDE.md files describe the project: commands, architecture, where data lives. Not personality prompts.",
      },
      {
        name: "Rules come from mistakes",
        note: "When something breaks, the fix becomes a rule. This site's CLAUDE.md has a note about scroll animations because one once hid the homepage until JavaScript loaded.",
      },
    ],
  },
  {
    id: "learning",
    title: "Where I learn",
    items: [
      { name: "Claude Academy", href: "https://academy.claude.com/", note: "Anthropic's free courses on Claude Code, MCP, and the API." },
      { name: "Hello Interview", href: "https://www.hellointerview.com/", note: "System design and interview practice, including the newer AI-assisted coding round." },
    ],
  },
  {
    id: "teaching",
    title: "Teaching",
    intro: "Teaching is the best way to learn.",
    items: [
      { name: "Colleagues", note: "At Mesh Systems I ran 17 short AI sessions for 20+ engineers and helped standardize how the team used AI in their IDEs." },
      { name: "Students", note: "Mentored a high school intern through backend work on an Azure DevOps extension." },
      { name: "Friends and family", note: "Getting people started with AI tools they'll actually keep using." },
    ],
  },
];
