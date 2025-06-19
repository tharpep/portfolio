import Link from "next/link";

export default function Mountains2021() {
  return (
    <main className="flex flex-col gap-10 bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12 min-h-screen">
      <section className="w-full rounded-xl border border-neutral-700 bg-neutral-800 p-6 sm:p-10 shadow-md mb-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold font-mono tracking-wider drop-shadow-sm text-cyan-300">Mountains 2021</h1>
          <Link href="/photography" className="text-cyan-400 hover:underline text-base">&larr; Back to all events</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="aspect-[4/3] w-full rounded-lg bg-neutral-700 flex items-center justify-center">
              <svg className="w-12 h-12 text-cyan-400 opacity-60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M4 17l4-4a2 2 0 0 1 2.8 0l2.2 2.2a2 2 0 0 0 2.8 0l4-4" /></svg>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 