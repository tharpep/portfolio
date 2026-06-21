# Design

Visual system for the Pryce Tharpe developer portfolio. Photography section (`/photography/*`) is a separate, intentionally distinct aesthetic and is out of scope for this system.

## Theme

**Engineered light.** Swiss-precision monochrome on a true cool-neutral off-white (not cream, not warm), with a single committed draftsman's-red accent. The reference points are the Swiss International Typographic Style, an engineering redline drawing, and instrument-panel precision (Teenage Engineering). Warmth is carried by the red accent and the grotesque type, never by a warm-tinted background. Light, not dark, is a deliberate stance against the dark-cyan dev-portfolio default.

Color strategy: **Restrained with a loud signature.** Ink-on-paper carries ~85% of every surface; the red accent is the signature, used decisively on links, marks, indices, and a few drenched moments, never sprinkled.

## Color

OKLCH throughout. Tokens defined in `globals.css` under `@theme`.

| Token | OKLCH | Role |
|---|---|---|
| `--paper` | `0.985 0.003 250` | Page background, true off-white, faint cool tint |
| `--paper-2` | `0.965 0.004 250` | Raised surfaces, code blocks, subtle fills |
| `--paper-3` | `0.93 0.005 250` | Pressed/active fills |
| `--ink` | `0.20 0.012 260` | Primary text, near-black cool |
| `--ink-2` | `0.40 0.012 260` | Secondary text (≥4.5:1 on paper) |
| `--ink-3` | `0.50 0.010 260` | Tertiary/metadata — large or non-body only |
| `--line` | `0.88 0.006 260` | Hairline borders |
| `--line-2` | `0.80 0.008 260` | Stronger dividers |
| `--accent` | `0.57 0.205 27` | Draftsman red — graphic/large use |
| `--accent-ink` | `0.515 0.19 27` | Red for text/links (≥4.5:1 on paper) |
| `--accent-wash` | `0.95 0.03 27` | Faint red tint for selection/hover beds |

Dark inversion is intentionally not used; the brand is the light document. Contrast verified: `--ink`/`--paper` ≈ 15:1, `--ink-2`/`--paper` ≈ 6.5:1, `--accent-ink`/`--paper` ≈ 4.8:1.

## Typography

Two families, on a width/weight-contrast axis within one grotesque, plus a mono for technical metadata.

- **Archivo** (variable, `wght` 400–900 + `wdth` axis) — display, headings, UI, and body. An industrial American grotesque: engineered, legible, not a reflex pick (Inter/Geist/Space Grotesk are rejected). Display uses heavy weight + expanded width + tight tracking (≥ -0.03em); body uses 400–450 at normal width.
- **JetBrains Mono** (`wght` 400–600) — technical metadata only: timelines, tech tags, section indices, inline code, numeric data. Legitimate technical voice for an engineer, never decorative.

Scale: fluid `clamp()`, ratio ≥1.25. Hero display max ~clamp ceiling 5.5rem. `text-wrap: balance` on h1–h3, `text-wrap: pretty` on prose. Body capped at 68ch.

## Motion

Intentional and restrained. One orchestrated page-load on the home hero (staggered lines + accent mark draw). Elsewhere: section reveals that enhance an already-visible default (never gate visibility), link underlines that wipe in, a magnetic lift on primary actions. Easing is ease-out-quint/expo, no bounce. Every animation has a `prefers-reduced-motion: reduce` crossfade/instant fallback. Content renders fully without JS.

## Components

- **Nav** — sticky, paper background, hairline bottom rule on scroll. Wordmark left; links right with wipe-in red underline and `aria-current`. Mono nav labels optional indices.
- **Buttons** — primary is solid ink with paper text (magnetic hover lift); secondary is hairline-bordered ink-on-paper. Accent reserved for the one "contact" CTA. Rounded to 6px max, not pill.
- **Project entries** — not uniform cards. An indexed, ruled list/table on the projects page (mono index + title + meta), with a generous detail page. Featured projects on home use an asymmetric two-up with full borders, leading mono index, never the icon+heading+text card grid.
- **Tech tags** — mono, small, hairline-bordered chips on paper, no colored fills.
- **Rules & indices** — horizontal hairlines and mono `01 / 02` indices used where content is genuinely sequential (not as eyebrow scaffolding on every section).
- **Footer** — hairline top rule, wordmark, mono links, cross-link to photography.

## Layout

Generous fluid margins (`clamp`) with a wide max content column (~72rem) and a narrower reading column (~44rem) for prose. Asymmetry is allowed for emphasis (home hero, featured). Grid for 2D galleries; flex/`flex-wrap` for tag rows and nav. Breakpoint-free where possible. Semantic z-index scale (dropdown → sticky → modal → toast).
