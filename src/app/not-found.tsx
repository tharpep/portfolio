import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-neutral-900 text-neutral-100 min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-neutral-400">Sorry, we couldn&apos;t find that page.</p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors">Home</Link>
          <Link href="/projects" className="px-6 py-3 border border-neutral-700 hover:border-neutral-600 rounded-lg transition-colors">View Projects</Link>
        </div>
      </div>
    </main>
  );
}


