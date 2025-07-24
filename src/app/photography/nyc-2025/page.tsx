import Link from "next/link";
import PhotoNav from "@/components/PhotoNav";

export default function NYC2025() {
  return (
    <>
      <PhotoNav />
      <main className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black text-amber-50">
        
        {/* Hero Section */}
        <section className="relative py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
              <div>
                <div className="text-amber-400/60 text-sm font-light tracking-widest uppercase mb-2">
                  2025 Collection
                </div>
                <h1 className="text-4xl md:text-6xl font-thin tracking-wider text-amber-100 mb-4 leading-tight">
                  NEW YORK CITY
                </h1>
                <div className="w-20 h-px bg-amber-400 mb-6"></div>
                <p className="text-lg font-light text-amber-200/80 leading-relaxed max-w-2xl">
                  A week exploring the concrete jungle, capturing the raw energy and hidden beauty of urban life. 
                  From the bustling streets of Manhattan to quiet moments in Central Park, 
                  each frame tells a story of humanity thriving in the urban landscape.
                </p>
              </div>
              <Link 
                href="/photography" 
                className="text-amber-400 hover:text-amber-300 text-sm font-light tracking-wide uppercase transition-colors duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                All Collections
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className={`
                    group relative overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 
                    hover:shadow-2xl hover:shadow-amber-400/10 transition-all duration-500 cursor-pointer
                    ${i % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                    ${i % 7 === 0 ? 'lg:row-span-2' : ''}
                  `}
                  style={{
                    aspectRatio: i % 5 === 0 ? '3/2' : i % 3 === 0 ? '4/5' : '1/1'
                  }}
                >
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12 text-amber-400/20 group-hover:text-amber-400/40 transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21,15 16,10 5,21"/>
                    </svg>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>
                  
                  {/* Hover Info */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-center">
                      <div className="text-amber-100 text-sm font-light tracking-wide mb-2">
                        NYC Street {i + 1}
                      </div>
                      <div className="w-8 h-px bg-amber-400 mx-auto"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collection Info */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-black/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-thin tracking-widest text-amber-100 mb-6">
              ABOUT THIS COLLECTION
            </h2>
            <div className="w-12 h-px bg-amber-400 mx-auto mb-8"></div>
            <p className="text-base font-light text-amber-200/80 leading-relaxed mb-8">
              New York City never sleeps, and neither does its energy. This collection captures the essence of urban life—
              the hurried businessman crossing the street, the street performer sharing their art, the quiet moments of 
              reflection amidst the chaos. Each photograph is a window into the soul of the city that never stops moving.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-amber-300/60 text-sm font-light">
              <div>
                <span className="text-amber-400">Location:</span> Manhattan, Brooklyn, Queens
              </div>
              <div>
                <span className="text-amber-400">Duration:</span> 7 Days
              </div>
              <div>
                <span className="text-amber-400">Camera:</span> Canon 5D Mark IV
              </div>
            </div>
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