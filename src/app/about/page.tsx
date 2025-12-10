import Link from "next/link";
import type { Metadata } from "next";
import SpotifyWidget from "@/components/SpotifyWidget";
import { getSpotifyData } from "@/lib/spotify-data";

export const metadata: Metadata = {
  title: "About – Pryce Tharpe",
  description: "About Pryce Tharpe: Computer Engineering student and software developer.",
};

// DEV PORTFOLIO ABOUT PAGE
// This is the professional about page for the development portfolio
// Keep separate from photography about page at /photography/about

export default async function About() {
  const spotifyData = await getSpotifyData();
  return (
    <main id="main" className="bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-10 md:py-12 min-h-screen">
      
      {/* Hero Section */}
      <section className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold font-mono tracking-wider mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400/90 to-blue-400/90 leading-tight">
          About Me
        </h1>
      </section>

      {/* Subtle Divider */}
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto mb-10 sm:mb-12"></div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
        
        {/* Bio Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6">
            My Journey
          </h2>
          <div className="space-y-4 text-neutral-300 leading-relaxed">
            <p>
              I&apos;m a senior in Computer Engineering at Purdue, focused on software systems that solve real problems. My path started with embedded systems coursework and evolved into cloud and AI engineering during my internship at Mesh Systems. That mix gave me a perspective that spans from low-level code to cloud-scale systems.
            </p>
          </div>
        </section>

        {/* AI Philosophy Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6">
            My Approach to AI
          </h2>
          <div className="rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 p-4 sm:p-5 md:p-6">
            <p className="text-neutral-300 leading-relaxed mb-4">
              I think AI works best when it amplifies what people can do rather than replacing them. At Mesh Systems, I co-developed an AI prompt framework and led training sessions to help engineers use AI tools effectively. The goal was making AI actually useful for daily work, not just impressive in demos.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              My personal projects explore RAG systems and local-first AI tools. I&apos;m interested in building AI that respects privacy, runs where you need it, and solves problems you actually have.
            </p>
          </div>
        </section>

        {/* Personal Interests */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6">
            Beyond Code
          </h2>
          <div className="rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 p-4 sm:p-5 md:p-6 mb-8">
            <p className="text-neutral-300 leading-relaxed">
              Outside of software, I shoot photography, build custom PCs, and play guitar and bass. I&apos;m extending this site to include a photography portfolio alongside the dev work. These hobbies keep me balanced and give me different ways to create and problem-solve.
            </p>
          </div>

          {/* Spotify Widget */}
          {spotifyData && (
            <div className="mb-8">
              <p className="text-neutral-300 text-center mb-6 max-w-2xl mx-auto">
                Music drives my creativity and focus during development. Here&apos;s what I have been listening to.
              </p>
              <SpotifyWidget data={spotifyData} />
            </div>
          )}
        </section>

        {/* Technical Background */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6">
            Technical Background
          </h2>
          <div className="rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 p-4 sm:p-5 md:p-6">
            <p className="text-neutral-300 leading-relaxed">
              I work across the full stack, from embedded C on STM32 microcontrollers to React and Next.js frontends, with Python, Azure, and AI systems in between. I&apos;m equally comfortable debugging low-level hardware protocols and architecting cloud data pipelines. For the complete technical breakdown, check out my <Link href="/resume" className="text-cyan-400 hover:text-cyan-300 transition-colors underline">resume</Link>.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
