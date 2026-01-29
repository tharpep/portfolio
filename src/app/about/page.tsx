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
          <h1 className="text-4xl sm:text-5xl font-bold font-mono tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400/90 to-blue-400/90 leading-tight">
            About Me
          </h1>

          {/* Quick Facts */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 text-sm font-medium bg-cyan-900/30 text-cyan-300 rounded-xl border border-cyan-700/50">
              Purdue &apos;26 — Computer Engineering
            </span>
            <span className="px-4 py-2 text-sm font-medium bg-cyan-900/30 text-cyan-300 rounded-xl border border-cyan-700/50">
              Intern @ Mesh Systems
            </span>
            <span className="px-4 py-2 text-sm font-medium bg-cyan-900/30 text-cyan-300 rounded-xl border border-cyan-700/50">
              Full-Stack · AI · Cloud
            </span>
          </div>
        </section>

        {/* Subtle Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto mb-10 sm:mb-12"></div>
      </ScrollFadeIn>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">

        {/* Bio Section */}
        <ScrollFadeIn>
          <section>
            <div className="space-y-4 text-neutral-300 leading-relaxed">
              <p>
                I follow my curiosity. I started college wanting to be an electrical engineer, but once I got into software, I knew that was where I wanted to be. I switched to computer engineering and haven&apos;t looked back.
              </p>
              <p>
                That same instinct shapes how I work now. I gravitate toward problems that feel interesting; full-stack development, AI systems, cloud infrastructure. Not because they&apos;re trendy, but because they&apos;re where I find the most engaging challenges. When something clicks, I go deeper. When it doesn&apos;t, I find what does.
              </p>
              <p>
                I think the best work comes from genuine interest. Forcing yourself through topics you don&apos;t care about leads to mediocre results. Following what pulls your attention leads to better code, better ideas, and work you actually want to finish.
              </p>
            </div>
          </section>
        </ScrollFadeIn>

        {/* Subtle Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto mb-10 sm:mb-12"></div>

        {/* Personal Interests */}
        <ScrollFadeIn delay={100}>
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6">
              Beyond Code
            </h2>
            <div className="space-y-4 text-neutral-300 leading-relaxed mb-8">
              <p>
                Outside of software, I shoot photography, build custom PCs, and play guitar and bass. I&apos;m currently extending this site to include a photography portfolio alongside the dev work. These hobbies keep me balanced and give me different ways to create and problem-solve.
              </p>
            </div>

            {/* Subtle Divider */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto my-12"></div>

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
