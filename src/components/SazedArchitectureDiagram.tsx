'use client';

import { useEffect, useRef } from 'react';
import styles from './SazedArchitectureDiagram.module.css';

export default function SazedArchitectureDiagram() {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const diag = diagramRef.current;
    if (!diag) return;

    const svg = diag.querySelector<SVGSVGElement>('#svg-arrows');
    if (!svg) return;

    const BLUE  = 'rgba(59, 130, 246, .72)';
    const CYAN  = 'rgba(34, 211, 238, .62)';
    const AMBER = 'rgba(245, 158, 11, .78)';
    const GRAY  = 'rgba(148, 163, 184, .48)';

    function pos(id: string) {
      const el = diag!.querySelector<HTMLElement>(`#${id}`);
      if (!el) return null;
      const er = el.getBoundingClientRect();
      const dr = diag!.getBoundingClientRect();
      return {
        cx:    er.left - dr.left + er.width  / 2,
        cy:    er.top  - dr.top  + er.height / 2,
        top:   er.top    - dr.top,
        bot:   er.bottom - dr.top,
        left:  er.left   - dr.left,
        right: er.right  - dr.left,
        w:     er.width,
        h:     er.height,
      };
    }

    function bezier(
      x1: number, y1: number,
      x2: number, y2: number,
      color: string, marker: string,
      dashed: boolean, label: string | null
    ): string {
      const hy = (y1 + y2) / 2;
      const d  = `M${x1},${y1} C${x1},${hy} ${x2},${hy} ${x2},${y2}`;
      const da = dashed ? 'stroke-dasharray="5 4"' : '';
      let out  = `<path d="${d}" fill="none" stroke="${color}" stroke-width="1.5" ${da} marker-end="url(#${marker})" opacity=".88"/>`;
      if (label) {
        const lx = (x1 + x2) / 2 + 7;
        const ly = hy - 5;
        out += `<text x="${lx}" y="${ly}" font-size="10" fill="rgba(203,213,225,.55)" font-family="'SF Mono','Fira Code',monospace">${label}</text>`;
      }
      return out;
    }

    function draw() {
      const ids = ['frontend', 'mcp', 'automations', 'sazed', 'postgres', 'gateway',
                   'google', 'kb', 'github', 'other-ext'];
      const n: Record<string, ReturnType<typeof pos>> = {};
      ids.forEach(id => { n[id] = pos(id); });

      const defs = `<defs>
        <marker id="a-blue"  markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="rgba(59,130,246,.82)"/></marker>
        <marker id="a-cyan"  markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="rgba(34,211,238,.78)"/></marker>
        <marker id="a-amber" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="rgba(245,158,11,.82)"/></marker>
        <marker id="a-gray"  markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="rgba(148,163,184,.65)"/></marker>
      </defs>`;

      let p = defs;

      /* ── Tier 1 → Tier 2 ── */
      if (n.frontend && n.sazed)
        p += bezier(n.frontend.cx, n.frontend.bot, n.sazed.cx - 38, n.sazed.top,
                    BLUE, 'a-blue', false, 'POST /chat · SSE stream');

      if (n.mcp && n.sazed)
        p += bezier(n.mcp.cx, n.mcp.bot, n.sazed.cx + 12, n.sazed.top,
                    BLUE, 'a-blue', false, 'POST /chat');

      if (n.automations && n.gateway) {
        const x1  = n.automations.right + 6;
        const y1  = n.automations.cy;
        const x2  = n.gateway.right - 22;
        const y2  = n.gateway.top;
        const cpx = Math.max(x1, x2) + 72;
        const cpy = (y1 + y2) / 2;
        p += `<path d="M${x1},${y1} C${cpx},${y1} ${cpx},${y2} ${x2},${y2}"
                fill="none" stroke="${GRAY}" stroke-width="1.5" stroke-dasharray="5 4"
                marker-end="url(#a-gray)" opacity=".72"/>`;
        p += `<text x="${cpx + 4}" y="${cpy}" font-size="10"
                fill="rgba(203,213,225,.48)" font-family="'SF Mono','Fira Code',monospace"
                text-anchor="start">direct</text>`;
      }

      /* ── Tier 2 internal ── */
      if (n.sazed && n.postgres) {
        const y = n.sazed.cy;
        p += `<line x1="${n.sazed.right}" y1="${y - 5}" x2="${n.postgres.left}" y2="${y - 5}"
                stroke="${AMBER}" stroke-width="1.5" stroke-dasharray="5 4"
                marker-end="url(#a-amber)" opacity=".9"/>`;
        p += `<line x1="${n.postgres.left}" y1="${y + 5}" x2="${n.sazed.right}" y2="${y + 5}"
                stroke="${AMBER}" stroke-width="1.5" stroke-dasharray="5 4"
                marker-end="url(#a-amber)" opacity=".52"/>`;
      }

      /* ── Tier 2 → Tier 3 ── */
      if (n.sazed && n.gateway)
        p += bezier(n.sazed.cx, n.sazed.bot, n.gateway.cx, n.gateway.top,
                    BLUE, 'a-blue', false, 'tool calls · X-API-Key');

      /* ── Tier 3 → Tier 4 ── */
      const downstream = [
        { id: 'google',    label: null    },
        { id: 'kb',        label: '/kb/*' },
        { id: 'github',    label: null    },
        { id: 'other-ext', label: null    },
      ];

      if (n.gateway) {
        const step = n.gateway.w / (downstream.length + 1);
        downstream.forEach(({ id, label }, i) => {
          const nd = n[id];
          if (!nd) return;
          const gx = n.gateway!.left + step * (i + 1);
          p += bezier(gx, n.gateway!.bot, nd.cx, nd.top, CYAN, 'a-cyan', false, label);
        });
      }

      svg!.innerHTML = p;
    }

    function init() {
      requestAnimationFrame(() => requestAnimationFrame(draw));
    }

    let resizeTimer: ReturnType<typeof setTimeout>;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(draw, 80);
    }

    init();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.diagramScroll}>
        <div className={styles.diagram} ref={diagramRef}>

          {/* ── TIER 1 — Clients / Consumers ── */}
          <div className={styles.tier}>

            <div className={`${styles.node} ${styles.nClient}`} id="frontend">
              <div className={styles.name}>sazed-frontend</div>
              <div className={styles.stack}>React 19 · Vite 7 · Tauri v2 · Zustand</div>
              <div className={styles.desc}>
                Desktop and browser chat interface. Messages stream token by token as they&apos;re generated.
              </div>
              <div className={styles.tags}>
                <span className={`${styles.t} ${styles.tP}`}>POST /chat</span>
                <span className={`${styles.t} ${styles.tP}`}>GET /chat/stream</span>
                <span className={`${styles.t} ${styles.tP}`}>SSE token stream</span>
              </div>
            </div>

            <div className={`${styles.node} ${styles.nClient}`} id="mcp">
              <div className={styles.name}>sazed-mcp</div>
              <div className={styles.stack}>Python · FastMCP · stdio transport</div>
              <div className={styles.desc}>
                Claude Desktop plugin. When Claude needs personal context — calendar, notes, history — it hands off to Sazed via a single tool: <code>ask_sazed</code>.
              </div>
              <div className={styles.tags}>
                <span className={`${styles.t} ${styles.tP}`}>1 MCP tool</span>
                <span className={`${styles.t} ${styles.tP}`}>persistent session</span>
                <span className={`${styles.t} ${styles.tP}`}>POST /chat</span>
              </div>
            </div>

            <div className={`${styles.node} ${styles.nClient}`} id="automations">
              <div className={styles.name}>automations</div>
              <div className={styles.stack}>Python · Poetry · Docker Compose</div>
              <div className={styles.desc}>
                Scheduled and triggered scripts — daily summaries, event-driven workflows, one-off jobs. Bypasses the agent and calls the gateway directly.
              </div>
              <div className={styles.tags}>
                <span className={`${styles.t} ${styles.tP}`}>scheduled</span>
                <span className={`${styles.t} ${styles.tP}`}>triggered</span>
                <span className={`${styles.t} ${styles.tP}`}>bypasses sazed</span>
              </div>
            </div>

          </div>{/* /tier 1 */}

          <div className={styles.gap} />

          {/* ── TIER 2 — Agent Core + Database ── */}
          <div className={styles.tier}>

            <div
              className={`${styles.node} ${styles.nAgent}`}
              id="sazed"
              style={{ maxWidth: '316px' }}
            >
              <div className={styles.name}>sazed — agent core</div>
              <div className={styles.stack}>FastAPI · Python 3.11 · Anthropic SDK</div>
              <div className={styles.desc}>
                The agent loop. Reads messages, picks tools, calls them, streams a response. Remembers every past conversation and extracts facts after each session. Routes simple turns to a fast model, complex ones to a capable one.
              </div>
              <div className={styles.tags}>
                <span className={`${styles.t} ${styles.tB}`}>POST /chat</span>
                <span className={`${styles.t} ${styles.tB}`}>GET /chat/stream</span>
                <span className={`${styles.t} ${styles.tB}`}>GET /conversations</span>
                <span className={`${styles.t} ${styles.tB}`}>GET /memory</span>
                <span className={`${styles.t} ${styles.tB}`}>GET /tools</span>
              </div>
            </div>

            <div className={`${styles.node} ${styles.nDb}`} id="postgres">
              <div className={styles.name}>PostgreSQL</div>
              <div className={styles.stack}>GCP Cloud SQL · asyncpg pool</div>
              <div className={styles.desc}>
                Long-term memory. Stores conversation history and extracted facts — surfaced automatically so context carries across sessions.
              </div>
              <div className={styles.tags}>
                <span className={`${styles.t} ${styles.tA}`}>sessions</span>
                <span className={`${styles.t} ${styles.tA}`}>agent_memory</span>
                <span className={`${styles.t} ${styles.tA}`}>context summaries</span>
              </div>
            </div>

          </div>{/* /tier 2 */}

          <div className={styles.gap} />

          {/* ── TIER 3 — API Gateway ── */}
          <div className={styles.tier}>

            <div
              className={`${styles.node} ${styles.nGateway}`}
              id="gateway"
              style={{ maxWidth: '548px' }}
            >
              <div className={styles.name}>api-gateway</div>
              <div className={styles.stack}>FastAPI · Python 3.11 · httpx · slowapi</div>
              <div className={styles.desc}>
                The switchboard. Every service routes external calls through here — Google, GitHub, AI models, and more. No service touches an external API directly. One key unlocks everything.
              </div>
              <div className={styles.tags}>
                <span className={`${styles.t} ${styles.tC}`}>/calendar</span>
                <span className={`${styles.t} ${styles.tC}`}>/tasks</span>
                <span className={`${styles.t} ${styles.tC}`}>/email</span>
                <span className={`${styles.t} ${styles.tC}`}>/storage</span>
                <span className={`${styles.t} ${styles.tC}`}>/sheets</span>
                <span className={`${styles.t} ${styles.tC}`}>/github</span>
                <span className={`${styles.t} ${styles.tC}`}>/kb</span>
                <span className={`${styles.t} ${styles.tC}`}>/search</span>
                <span className={`${styles.t} ${styles.tC}`}>/notify</span>
              </div>
            </div>

          </div>{/* /tier 3 */}

          <div className={styles.gap} />

          {/* ── TIER 4 — External Services ── */}
          <div className={styles.tier}>

            <div className={`${styles.node} ${styles.nExt}`} id="google">
              <div className={styles.name}>Google Workspace</div>
              <div className={styles.desc}>
                Calendar, email, tasks, Drive, and Sheets. Full read and write access across all Google Workspace services.
              </div>
              <div className={styles.tags}>
                <span className={`${styles.t} ${styles.tE}`}>Calendar</span>
                <span className={`${styles.t} ${styles.tE}`}>Gmail</span>
                <span className={`${styles.t} ${styles.tE}`}>Tasks</span>
                <span className={`${styles.t} ${styles.tE}`}>Drive</span>
                <span className={`${styles.t} ${styles.tE}`}>Sheets</span>
              </div>
            </div>

            <div className={`${styles.node} ${styles.nKb}`} id="kb">
              <div className={styles.name}>knowledge-base</div>
              <div className={styles.stack}>FastAPI · pgvector · Voyage AI</div>
              <div className={styles.desc}>
                Semantic search over Drive documents. Ingests files, embeds them with Voyage AI, and surfaces relevant passages via hybrid retrieval.
              </div>
              <div className={styles.tags}>
                <span className={`${styles.t} ${styles.tG}`}>Voyage embed</span>
                <span className={`${styles.t} ${styles.tG}`}>rerank-2.5</span>
                <span className={`${styles.t} ${styles.tG}`}>5 Drive folders</span>
              </div>
            </div>

            <div className={`${styles.node} ${styles.nExt}`} id="github">
              <div className={styles.name}>GitHub</div>
              <div className={styles.desc}>
                Repo browsing, file reads, issue and PR management, and code search.
              </div>
              <div className={styles.tags}>
                <span className={`${styles.t} ${styles.tE}`}>repos</span>
                <span className={`${styles.t} ${styles.tE}`}>issues · PRs</span>
                <span className={`${styles.t} ${styles.tE}`}>code search</span>
              </div>
            </div>

            <div className={`${styles.node} ${styles.nExt}`} id="other-ext">
              <div className={styles.name}>Notifications &amp; Web</div>
              <div className={styles.desc}>
                Push alerts via Pushover, live web search, and URL fetching.
              </div>
              <div className={styles.tags}>
                <span className={`${styles.t} ${styles.tE}`}>Pushover</span>
                <span className={`${styles.t} ${styles.tE}`}>web search</span>
                <span className={`${styles.t} ${styles.tE}`}>URL fetch</span>
              </div>
            </div>

          </div>{/* /tier 4 */}

          {/* SVG last so it renders above all node cards */}
          <svg className={styles.svgArrows} id="svg-arrows" aria-hidden="true" />
        </div>{/* /.diagram */}
      </div>{/* /.diagramScroll */}

      {/* ── LEGEND ── */}
      <div className={styles.legend}>
        <div className={styles.leg}>
          <div className={styles.dot} style={{ background: 'var(--purple)' }} />
          Clients / Consumers
        </div>
        <div className={styles.leg}>
          <div className={styles.dot} style={{ background: 'var(--blue)' }} />
          Agent Core
        </div>
        <div className={styles.leg}>
          <div className={styles.dot} style={{ background: 'var(--cyan)' }} />
          API Gateway
        </div>
        <div className={styles.leg}>
          <div className={styles.dot} style={{ background: 'var(--green)' }} />
          Knowledge Base
        </div>
        <div className={styles.leg}>
          <div className={styles.dot} style={{ background: 'var(--amber)' }} />
          Database
        </div>
        <div className={styles.leg}>
          <div className={styles.dot} style={{ background: 'var(--slate)' }} />
          External Services
        </div>
        <div className={styles.leg}>
          <svg width="34" height="12" style={{ overflow: 'visible' }} aria-hidden="true">
            <defs>
              <marker id="la" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="rgba(148,163,184,.75)" />
              </marker>
            </defs>
            <line x1="0" y1="6" x2="27" y2="6" stroke="rgba(148,163,184,.5)" strokeWidth="1.5" markerEnd="url(#la)" />
          </svg>
          HTTP / API call
        </div>
        <div className={styles.leg}>
          <svg width="34" height="12" style={{ overflow: 'visible' }} aria-hidden="true">
            <defs>
              <marker id="lb" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="rgba(245,158,11,.75)" />
              </marker>
            </defs>
            <line x1="0" y1="6" x2="27" y2="6" stroke="rgba(245,158,11,.55)" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#lb)" />
          </svg>
          DB read / write
        </div>
        <div className={styles.leg}>
          <svg width="34" height="12" style={{ overflow: 'visible' }} aria-hidden="true">
            <defs>
              <marker id="lc" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="rgba(148,163,184,.55)" />
              </marker>
            </defs>
            <line x1="0" y1="6" x2="27" y2="6" stroke="rgba(148,163,184,.38)" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#lc)" />
          </svg>
          Bypass / direct
        </div>
      </div>

    </div>
  );
}
