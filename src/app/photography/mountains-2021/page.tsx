import Link from "next/link";
import PhotoNav from "@/components/PhotoNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mountain Peaks (2021) – Photography – Pryce Tharpe",
  description: "Landscape photography from the 2021 Mountain Peaks collection.",
  alternates: { canonical: "/photography/mountains-2021" },
};

export default function Mountains2021() {
  return (
    <>
      <PhotoNav />
      <main id="main" className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black text-amber-50">
        
        {/* Hero Section */}
        <section className="relative py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
              <div>
                <div className="text-amber-400/60 text-sm font-light tracking-widest uppercase mb-2">
                  2021 Collection
                </div>
                <h1 className="text-4xl md:text-6xl font-thin tracking-wider text-amber-100 mb-4 leading-tight">
                  MOUNTAIN PEAKS
                </h1>
                <div className="w-20 h-px bg-amber-400 mb-6"></div>
                <p className="text-lg font-light text-amber-200/80 leading-relaxed max-w-2xl">
                  Chasing light across mountain ranges, finding solitude and grandeur in nature&apos;s cathedral. 
                  These landscapes speak to something deeper within us—the call of the wild, 
                  the humbling presence of ancient peaks, and the ever-changing dance between earth and sky.
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
              {[...Array(18)].map((_, i) => (
                <div 
                  key={i} 
                  className={`
                    group relative overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 
                    hover:shadow-2xl hover:shadow-amber-400/10 transition-all duration-500 cursor-pointer
                    ${i % 5 === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
                    ${i % 7 === 0 ? 'lg:row-span-2' : ''}
                  `}
                  style={{
                    aspectRatio: i % 5 === 0 ? '16/9' : i % 3 === 0 ? '3/4' : '1/1'
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
                        {['Dawn Summit', 'Alpine Lake', 'Misty Valley', 'Golden Hour', 'Rocky Face', 'Snow Peak'][i % 6]}
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
              Mountain photography is about being present in the moment when light and landscape align. 
              Each sunrise brings new possibilities, each weather pattern a different mood. 
              This collection captures the raw power and serene beauty of high places—
              where silence speaks louder than words and every view reminds us of our place in the natural world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-amber-300/60 text-sm font-light">
              <div>
                <span className="text-amber-400">Location:</span> Rocky Mountains, Colorado
              </div>
              <div>
                <span className="text-amber-400">Duration:</span> 10 Day Trek
              </div>
              <div>
                <span className="text-amber-400">Equipment:</span> Mirrorless + Tripod
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center border-t border-amber-900/20 pt-6">
          <p className="text-neutral-400 text-sm">
            Mountains • Fall 2021 • <span className="text-amber-400">Pryce Tharpe</span>
          </p>
        </footer>
      </main>
    </>
  );
} 