import Link from "next/link";
import { text } from "@/lib/typography";

export default function NotFound() {
  return (
    <main id="main" className="flex flex-1 items-center justify-center bg-neutral-900 px-4 py-24 text-neutral-100">
      <div className="text-center">
        <h1 className={`${text.pageTitle} mb-4`}>404</h1>
        <p className="mb-8 text-lg text-neutral-300">That page doesn&apos;t exist.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-cyan-700 px-6 py-3 font-medium text-white transition-colors hover:bg-cyan-600"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="rounded-lg border border-neutral-700 px-6 py-3 font-medium transition-colors hover:border-neutral-600"
          >
            Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
