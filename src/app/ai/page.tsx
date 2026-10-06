import type { Metadata } from "next";
import Link from "next/link";
import { aiSetupIntro, aiSetupSections, aiSetupUpdated, type SetupItem } from "@/lib/aiSetup";
import { text } from "@/lib/typography";

export const metadata: Metadata = {
  title: "AI Setup – Pryce Tharpe",
  description: "How Pryce Tharpe uses AI day to day: Claude Code and Desktop workflows, the personal systems behind them, connectors, and where he keeps learning.",
  alternates: { canonical: "/ai" },
};

function ItemName({ item }: { item: SetupItem }) {
  if (!item.href) return <>{item.name}</>;
  const linkClass = "text-cyan-300 hover:text-cyan-200 hover:underline underline-offset-4";
  if (item.href.startsWith("/")) {
    return <Link href={item.href} className={linkClass}>{item.name}</Link>;
  }
  return (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {item.name} ↗
    </a>
  );
}

export default function AiSetup() {
  const sections = aiSetupSections.filter((section) => section.items.length > 0);

  return (
    <main id="main" className="text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-10 md:py-12 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className={`${text.pageTitle} mb-3`}>AI Setup</h1>
          <p className={`${text.meta} mb-6`}>Updated {aiSetupUpdated}</p>
          <p className="text-lg text-neutral-300 leading-relaxed">{aiSetupIntro}</p>
        </header>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} aria-labelledby={`ai-${section.id}`}>
              <h2 id={`ai-${section.id}`} className={`${text.sectionTitle} mb-2`}>
                {section.title}
              </h2>
              {section.intro && <p className="text-neutral-300 mb-4">{section.intro}</p>}
              <dl className="divide-y divide-neutral-800 border-y border-neutral-800">
                {section.items.map((item) => (
                  <div key={item.name} className="py-4 grid gap-1 md:grid-cols-[11rem_1fr] md:gap-6">
                    <dt className="font-semibold text-white">
                      <ItemName item={item} />
                    </dt>
                    <dd className="text-neutral-300 leading-relaxed">{item.note}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
