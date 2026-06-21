import Link from "next/link";

const links = [
  { label: "GitHub", href: "https://github.com/tharpep", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pryce-tharpe", external: true },
  { label: "Email", href: "mailto:tharpep_pro@outlook.com", external: false },
  { label: "Photography", href: "/photography", external: false },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8 lg:px-12 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold tracking-tight text-ink text-lg">Pryce Tharpe</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            </div>
            <p className="label mt-2 normal-case tracking-[0.04em]">
              Software engineer · West Lafayette / Indianapolis, IN
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) =>
              l.external ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.14em] text-ink-2 link-underline hover:text-ink"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  className="font-mono text-xs uppercase tracking-[0.14em] text-ink-2 link-underline hover:text-ink"
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>
        </div>

        <p className="mt-8 font-mono text-xs text-ink-3">
          © {year} — Built with Next.js. Source on{" "}
          <a
            href="https://github.com/tharpep/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-ink-2"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
