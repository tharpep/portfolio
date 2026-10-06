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
        note: "For work in code repositories, including cloud sessions from my phone.",
      },
      {
        name: "Claude Desktop",
        note: "For conversations that need my own information. Sazed is connected to it, so Claude can check my calendar, email, and documents.",
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
        note: "A personal AI agent with 20+ tools, including my calendar, email, and documents. It keeps memory across conversations and runs as a desktop and web app. I use it daily.",
      },
      {
        name: "API Gateway",
        href: "/projects/personal-api-gateway",
        note: "A single service that handles access to Google Workspace, GitHub, and AI model providers. My other projects call it rather than storing their own credentials.",
      },
      {
        name: "Knowledge Base",
        href: "/projects/knowledge-base",
        note: "Searches my Google Drive documents using both keyword and semantic search. Sazed uses it to look things up.",
      },
      {
        name: "Automations",
        href: "/projects/personal-automations",
        note: "Scheduled jobs. Right now they generate daily and weekly briefings on what's coming up.",
      },
    ],
  },
  {
    id: "connectors",
    title: "Connectors and tools",
    items: [
      { name: "Google Workspace", note: "Gmail, Calendar, and Drive, so Claude can read my email, schedule, and documents when I ask." },
      { name: "GitHub", note: "Reading code, reviewing pull requests, and checking build results." },
      { name: "Vercel", note: "Deployments and logs for this site." },
      { name: "Context7", note: "Up-to-date documentation for the libraries I'm using." },
      { name: "Playwright", note: "Browser automation, using the CLI through a Claude skill." },
    ],
  },
  {
    id: "learning",
    title: "Where I learn",
    items: [
      { name: "Claude Academy", href: "https://academy.claude.com/", note: "Anthropic's free courses on Claude Code, MCP, and the API." },
      { name: "Hello Interview", href: "https://www.hellointerview.com/", note: "System design and interview practice, including AI-assisted coding interviews." },
    ],
  },
  {
    id: "teaching",
    title: "Teaching",
    intro: "Teaching is the best way to learn.",
    items: [
      { name: "Colleagues", note: "At Mesh Systems, I ran 17 short AI training sessions for more than 20 engineers and helped standardize how the team used AI coding tools." },
      { name: "Students", note: "Mentored a high school intern on backend work for an Azure DevOps extension." },
      { name: "Friends and family", note: "Helping them get familiar with AI tools for everyday use." },
    ],
  },
];
