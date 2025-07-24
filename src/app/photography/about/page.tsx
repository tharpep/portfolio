import Link from "next/link";
import PhotoNav from "@/components/PhotoNav";

// PHOTOGRAPHY ABOUT PAGE
// This is the artistic about page for the photography portfolio
// Keep separate from dev portfolio about page at /about

export default function PhotographyAbout() {
  return (
    <>
      <PhotoNav />
      <main className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black text-amber-50">
        
        {/* Hero Section */}
        <section className="relative py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="text-amber-400/60 text-sm font-light tracking-widest uppercase mb-4">
              Behind the Lens
            </div>
            <h1 className="text-4xl md:text-6xl font-thin tracking-wider text-amber-100 mb-8 leading-tight">
              Where Engineering
              <br />
              <span className="text-amber-400">Meets Art</span>
            </h1>
            <p className="text-lg text-amber-200/80 leading-relaxed max-w-3xl mx-auto">
              A journey from algorithms to apertures, discovering that the precision of code 
              and the poetry of light share the same fundamental truth: 
              <span className="text-amber-300 font-medium"> both seek to capture and create meaning</span>.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 space-y-16 pb-20">
          
          {/* My Story */}
          <section>
            <h2 className="text-3xl font-light tracking-wide text-amber-300 mb-8">
              The Journey
            </h2>
            <div className="space-y-6 text-amber-100/90 leading-relaxed text-lg">
              <p>
                My path to photography began not with a camera, but with code. As a Computer Engineering 
                student immersed in the logical world of algorithms and systems, I found myself drawn to 
                something more expressive, more immediate—the ability to freeze a moment and tell its story.
              </p>
              <p>
                What started as a creative outlet during my studies at Purdue has become a profound passion. 
                Photography offers me something that engineering, for all its intellectual satisfaction, 
                cannot: the spontaneous magic of light, shadow, and human emotion converging in a single frame.
              </p>
              <p>
                The technical precision I&apos;ve developed as an engineer informs my photography—understanding 
                light like I understand data, composing shots with the same methodical approach I use to 
                architect software. Yet photography has taught me to embrace the unpredictable, to find 
                beauty in the unplanned moments that no algorithm could predict.
              </p>
            </div>
          </section>

          {/* Philosophy */}
          <section>
            <h2 className="text-3xl font-light tracking-wide text-amber-300 mb-8">
              Creative Philosophy
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-amber-900/20 to-neutral-900/40 rounded-lg p-6 border border-amber-800/30">
                <h3 className="text-xl font-medium text-amber-200 mb-4">Authentic Moments</h3>
                <p className="text-amber-100/80 leading-relaxed">
                  I believe the most powerful photographs are found, not forced. Whether capturing 
                  urban energy or natural serenity, I seek those genuine moments that reveal truth 
                  beyond the surface.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-900/20 to-neutral-900/40 rounded-lg p-6 border border-amber-800/30">
                <h3 className="text-xl font-medium text-amber-200 mb-4">Technical Precision</h3>
                <p className="text-amber-100/80 leading-relaxed">
                  My engineering background brings discipline to my craft. I approach each shot with 
                  technical knowledge while remaining open to creative serendipity—balancing 
                  preparation with spontaneity.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-900/20 to-neutral-900/40 rounded-lg p-6 border border-amber-800/30">
                <h3 className="text-xl font-medium text-amber-200 mb-4">Storytelling Through Light</h3>
                <p className="text-amber-100/80 leading-relaxed">
                  Every photograph is a story told through light. I&apos;m drawn to how different lighting 
                  conditions can completely transform a subject, revealing new narratives in familiar scenes.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-900/20 to-neutral-900/40 rounded-lg p-6 border border-amber-800/30">
                <h3 className="text-xl font-medium text-amber-200 mb-4">Continuous Learning</h3>
                <p className="text-amber-100/80 leading-relaxed">
                  Like engineering, photography demands constant growth. Each shoot teaches me 
                  something new about light, composition, or the art of seeing—there&apos;s always 
                  another layer to discover.
                </p>
              </div>
            </div>
          </section>

          {/* Current Focus - PLACEHOLDER */}
          <section>
            <h2 className="text-3xl font-light tracking-wide text-amber-300 mb-8">
              Current Explorations
            </h2>
            <div className="bg-gradient-to-br from-amber-900/20 to-neutral-900/40 rounded-lg p-8 border border-amber-800/30">
              <div className="space-y-6 text-amber-100/90 leading-relaxed">
                <p>
                  Right now, I&apos;m particularly fascinated by the intersection of urban architecture 
                  and natural light—how steel and glass can become canvases for the sun&apos;s daily performance. 
                  My recent work in New York City has been exploring this dynamic.
                </p>
                <p className="text-amber-200/70 italic">
                  {/* PLACEHOLDER: Add current photography projects or themes you&apos;re exploring */}
                  [PLACEHOLDER: Describe specific photography projects, techniques you&apos;re learning, 
                  or themes you&apos;re currently exploring. For example: portrait work, landscape series, 
                  street photography evolution, specific equipment you&apos;re mastering, etc.]
                </p>
                <p>
                  As my engineering career grows, I&apos;m committed to keeping photography as a vital 
                  creative outlet. The two disciplines complement each other beautifully—engineering 
                  gives me the technical foundation and problem-solving skills, while photography 
                  keeps me connected to intuition, emotion, and the art of seeing.
                </p>
              </div>
            </div>
          </section>

          {/* Equipment & Approach - PLACEHOLDER */}
          <section>
            <h2 className="text-3xl font-light tracking-wide text-amber-300 mb-8">
              Tools & Technique
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-amber-200 mb-4">Current Kit</h3>
                <div className="space-y-3 text-amber-100/80">
                  <p className="text-amber-200/70 italic">
                    [PLACEHOLDER: List your camera bodies, lenses, and key equipment. 
                    For example: &quot;Canon 5D Mark IV, 24-70mm f/2.8L, 85mm f/1.4L&quot; etc.]
                  </p>
                  <p>
                    I believe in learning my tools intimately rather than constantly upgrading. 
                    Understanding the capabilities and limitations of each piece of equipment 
                    allows me to push creative boundaries more effectively.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-amber-200 mb-4">Post-Processing Philosophy</h3>
                <div className="space-y-3 text-amber-100/80">
                  <p>
                    My approach to editing mirrors my engineering mindset: purposeful and precise. 
                    I enhance what was already there rather than creating something that wasn&apos;t, 
                    using post-processing to reveal the story I saw when I clicked the shutter.
                  </p>
                  <p className="text-amber-200/70 italic">
                    [PLACEHOLDER: Describe your editing workflow, software preferences, 
                    or specific techniques you favor]
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Future Vision - PLACEHOLDER */}
          <section>
            <h2 className="text-3xl font-light tracking-wide text-amber-300 mb-8">
              Looking Forward
            </h2>
            <div className="bg-gradient-to-br from-amber-900/20 to-neutral-900/40 rounded-lg p-8 border border-amber-800/30">
              <div className="space-y-6 text-amber-100/90 leading-relaxed">
                <p>
                  Photography will always be more than a hobby for me—it&apos;s a way of seeing, 
                  of staying connected to the world beyond screens and code. As I advance in my 
                                      engineering career, I&apos;m excited to explore how these two passions might intersect 
                  in unexpected ways.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-lg font-medium text-amber-200 mb-3">Near Term</h4>
                    <ul className="space-y-2 text-amber-100/80 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span>Expand portfolio with diverse shooting environments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span className="text-amber-200/70 italic">[PLACEHOLDER: Add specific photography goals - exhibitions, collaborations, skills to develop]</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-amber-200 mb-3">Long Term Vision</h4>
                    <ul className="space-y-2 text-amber-100/80 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span>Explore photography projects that bridge technology and art</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span className="text-amber-200/70 italic">[PLACEHOLDER: Add long-term creative aspirations or dream projects]</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Connect */}
          <section className="text-center">
            <h2 className="text-3xl font-light tracking-wide text-amber-300 mb-8">
              Let&apos;s Create Together
            </h2>
            <p className="text-amber-100/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              Photography is about connection—between artist and subject, between viewer and moment. 
              I&apos;m always interested in collaborating with fellow creatives or simply sharing 
              perspectives on the art of seeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link
                href="/photography"
                className="px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-black font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/30"
              >
                View My Work
              </Link>
              <a
                href="mailto:ptharpe@purdue.edu"
                className="px-8 py-3 border border-amber-600/50 hover:border-amber-500 text-amber-200 hover:text-amber-100 font-medium rounded-lg transition-all duration-300 hover:bg-amber-900/20 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 2.25-10.5 8.25L3 9" />
                </svg>
                Get in Touch
              </a>
            </div>
          </section>

          {/* Back to Dev Portfolio */}
          <div className="text-left pt-12">
            <Link 
              href="/" 
              className="text-amber-500/60 hover:text-amber-400 text-sm transition-colors duration-300"
            >
              ← to dev portfolio
            </Link>
          </div>
        </div>
      </main>
    </>
  );
} 