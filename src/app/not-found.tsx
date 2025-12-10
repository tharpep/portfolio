import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-neutral-900 text-neutral-100 min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-10 md:py-12">
      <div className="max-w-4xl mx-auto">
        {/* 404 Section */}
        <section className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold font-mono tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400/90 to-blue-400/90">
            404
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-300 mb-4">
            Sorry, we couldn&apos;t find that page.
          </p>
          <div className="inline-block px-4 py-2 bg-amber-900/30 border border-amber-700/50 rounded-lg mb-8">
            <p className="text-sm text-amber-300">
              This page isn&apos;t finished yet
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/" 
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className="px-6 py-3 border border-neutral-700 hover:border-neutral-600 rounded-lg transition-colors font-medium"
            >
              View Projects
            </Link>
          </div>
        </section>

        {/* ─────────── Let's Connect ─────────── */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-8 text-center">
            Let&apos;s Connect
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
              I&apos;m looking for full-time software engineering roles and enjoy talking about AI, cloud systems, or interesting technical problems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/tharpep"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-600 hover:border-neutral-500 text-neutral-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-neutral-800"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/pryce-tharpe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-600 hover:border-neutral-500 text-neutral-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-neutral-800"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:tharpep_pro@outlook.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-600 hover:border-neutral-500 text-neutral-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-neutral-800"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
            <div className="mt-6">
              <Link
                href="/about"
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-lg group"
              >
                More About Me
                <span className="inline-block group-hover:translate-x-1 transition-transform ml-1">→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
