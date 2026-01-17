import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { getSpotifyData } from "@/lib/spotify-data";
import ScrollFadeIn from "@/components/ScrollFadeIn";

// Lazy load SpotifyWidget to reduce initial bundle size
const SpotifyWidget = dynamic(() => import("@/components/SpotifyWidget"), {
  ssr: true,
  loading: () => (
    <div className="rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 p-4 sm:p-5 md:p-6 animate-pulse">
      <div className="h-32 bg-neutral-700 rounded-lg"></div>
    </div>
  ),
});

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

      <ScrollFadeIn>
        {/* Hero Section */}
        <section className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-mono tracking-wider mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400/90 to-blue-400/90 leading-tight">
            About Me
          </h1>
        </section>

        {/* Subtle Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto mb-10 sm:mb-12"></div>
      </ScrollFadeIn>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">

        {/* Bio Section */}
        <ScrollFadeIn>
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6">
              My Journey
            </h2>
            <div className="space-y-4 text-neutral-300 leading-relaxed">
              <p>
                I&apos;m a senior in Computer Engineering at Purdue. My path started with embedded systems coursework and evolved into cloud and AI engineering during my internship at Mesh Systems. That mix gave me experience with both low-level embedded code and cloud systems.
              </p>
              <p>
                I&apos;ve learned to let my interests guide where I go. I started in electrical engineering, but as I was introduced to software, I followed those interests to computer engineering. That&apos;s how I got to where I am today. I let my curiosity take the lead.
              </p>
            </div>
          </section>
        </ScrollFadeIn>

        {/* AI Philosophy Section */}
        <ScrollFadeIn delay={100}>
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6">
              My Approach to AI
            </h2>
            <div className="rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 p-4 sm:p-5 md:p-6">
              <p className="text-neutral-300 leading-relaxed mb-4">
                I think AI works best when it amplifies what people can do rather than replacing them. At Mesh Systems, I developed a standardized IDE LLM prompt and led training sessions to help teams use AI tools effectively. The goal was making AI actually useful for daily work, not just impressive in demos.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                My personal projects explore RAG systems and local-first AI tools. I&apos;m interested in building AI that respects privacy, runs where you need it, and solves problems you actually have.
              </p>
            </div>
          </section>
        </ScrollFadeIn>

        {/* Personal Interests */}
        <ScrollFadeIn delay={200}>
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6">
              Beyond Code
            </h2>
            <div className="rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 p-4 sm:p-5 md:p-6 mb-8">
              <p className="text-neutral-300 leading-relaxed">
                Outside of software, I shoot photography, build custom PCs, and play guitar and bass. I&apos;m currently extending this site to include a photography portfolio alongside the dev work. These hobbies keep me balanced and give me different ways to create and problem-solve.
              </p>
            </div>

            {/* Spotify Widget */}
            {spotifyData && (
              <div className="mb-8">
                <p className="text-neutral-300 text-center mb-6 max-w-2xl mx-auto">
                  Music drives my creativity and focus during development. Here&apos;s what I&apos;ve been listening to.
                </p>
                <SpotifyWidget data={spotifyData} />
              </div>
            )}
          </section>
        </ScrollFadeIn>


      </div>
    </main>
  );
}
