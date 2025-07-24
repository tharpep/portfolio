import Link from "next/link";
import PhotoNav from "@/components/PhotoNav";

const events = [
  {
    slug: "nyc-2025",
    title: "New York City",
    subtitle: "Urban Landscapes",
    year: "2025",
    desc: "A week exploring the concrete jungle, capturing the raw energy and hidden beauty of urban life.",
    cover: null,
  },
  {
    slug: "zoo-2022", 
    title: "Wildlife",
    subtitle: "Natural Moments",
    year: "2022",
    desc: "Intimate portraits of animals in their element, showcasing the grace and power of the natural world.",
    cover: null,
  },
  {
    slug: "mountains-2021",
    title: "Mountain Peaks",
    subtitle: "Landscape Poetry",
    year: "2021",
    desc: "Chasing light across mountain ranges, finding solitude and grandeur in nature's cathedral.",
    cover: null,
  },
];

function CollectionCard({ title, subtitle, year, desc, href }: { 
  title: string; 
  subtitle: string;
  year: string;
  desc: string; 
  href: string; 
}) {
  return (
    <Link
      href={href}
      className="group block relative overflow-hidden bg-neutral-900 border border-amber-900/20 hover:border-amber-700/40 transition-all duration-500"
    >
      {/* Image Placeholder */}
      <div className="aspect-[3/2] bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <svg className="w-16 h-16 text-amber-400/30 group-hover:text-amber-400/50 transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21,15 16,10 5,21"/>
        </svg>
        
        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div className="text-amber-200 text-xs font-light tracking-widest uppercase mb-1">
            {year}
          </div>
          <h3 className="text-white text-xl font-light tracking-wide mb-1 group-hover:text-amber-100 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-amber-300/80 text-sm font-light tracking-wide">
            {subtitle}
          </p>
        </div>
      </div>
      
      {/* Description */}
      <div className="p-6 bg-black/40">
        <p className="text-amber-100/70 text-sm leading-relaxed font-light">
          {desc}
        </p>
        <div className="mt-4 flex items-center text-amber-400 text-xs font-light tracking-wider uppercase group-hover:translate-x-1 transition-transform duration-300">
          View Collection
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function Photography() {
  return (
    <>
      <PhotoNav />
      <main className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black text-amber-50">
        
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-400 via-transparent to-transparent"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <h1 className="text-6xl md:text-8xl font-thin tracking-[0.3em] text-amber-100 mb-8 leading-none">
              MOMENTS
            </h1>
            <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light tracking-wide text-amber-200/80 leading-relaxed max-w-2xl mx-auto">
              Capturing the poetry in everyday life through light, shadow, and authentic emotion
            </p>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-amber-400/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-thin tracking-widest text-amber-100 mb-6">
                COLLECTIONS
              </h2>
              <div className="w-16 h-px bg-amber-400 mx-auto mb-8"></div>
              <p className="text-lg font-light text-amber-200/70 max-w-2xl mx-auto leading-relaxed">
                Each collection tells a unique story, exploring different themes, emotions, and perspectives through the lens
              </p>
            </div>

            <div className="grid gap-8 md:gap-12 lg:grid-cols-2 xl:grid-cols-3">
              {events.map((event) => (
                <CollectionCard
                  key={event.slug}
                  title={event.title}
                  subtitle={event.subtitle}
                  year={event.year}
                  desc={event.desc}
                  href={`/photography/${event.slug}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-black/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-thin tracking-widest text-amber-100 mb-8">
              PHILOSOPHY
            </h2>
            <div className="w-12 h-px bg-amber-400 mx-auto mb-8"></div>
            <p className="text-lg font-light text-amber-200/80 leading-relaxed mb-8">
              Photography is about more than capturing what we see—it's about revealing what we feel. 
              Every frame is an opportunity to freeze a moment that will never exist again, 
              to find beauty in the unexpected, and to tell stories that words cannot express.
            </p>
            <a
              href="https://www.instagram.com/pryce_tharpe/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 border border-amber-400/30 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400/60 transition-all duration-300 text-sm font-light tracking-wider uppercase"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
              Follow Journey
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-amber-900/20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-amber-200/60 text-sm font-light tracking-wide">
              © 2025 Pryce Tharpe Photography
            </div>
            <Link 
              href="/" 
              className="text-amber-400/60 hover:text-amber-400 text-sm font-light tracking-wide transition-colors duration-300"
            >
              ← to dev portfolio
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
} 