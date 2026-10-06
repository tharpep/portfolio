/**
 * Shared text styles, one per role. Pages combine these with layout classes
 * (margins, alignment) instead of choosing their own sizes, so the same kind of
 * text looks the same everywhere.
 */
export const text = {
  /** Home page hero heading only. */
  heroTitle: "text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tight leading-tight text-white",
  /** The H1 on every other page. */
  pageTitle: "text-3xl sm:text-4xl md:text-5xl font-bold font-mono tracking-tight leading-tight text-white",
  /** H2 section headings. */
  sectionTitle: "text-2xl md:text-3xl font-bold font-mono tracking-tight text-white",
  /** Labels inside a page section (e.g. Challenge / Solution / Result). */
  subTitle: "text-lg font-bold font-mono text-cyan-300",
  /** Titles of cards and list items. Sans: easier to read and wraps less than mono. */
  cardTitle: "text-lg font-semibold leading-snug text-white",
  /** Dates, status and other small facts. */
  meta: "text-sm font-mono text-neutral-300",
  /** A technology name shown as a chip. */
  tag: "inline-block rounded-md border border-neutral-700 px-2 py-0.5 font-mono text-xs text-neutral-300",
} as const;
