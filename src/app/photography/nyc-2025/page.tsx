import Link from "next/link";
import dynamic from "next/dynamic";
import PhotoNav from "@/components/PhotoNav";
import type { Metadata } from "next";

// Lazy load PhotoGallery to reduce initial bundle size
const PhotoGallery = dynamic(() => import("@/components/PhotoGallery"), {
  ssr: true,
  loading: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="aspect-square bg-neutral-800/50 rounded-lg animate-pulse" />
      ))}
    </div>
  ),
});

export const metadata: Metadata = {
  title: "New York City (2025) – Photography – Pryce Tharpe",
  description: "Urban landscapes and moments from New York City, 2025 collection.",
  alternates: { canonical: "/photography/nyc-2025" },
};

export default function NYC2025() {
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
            <PhotoGallery collection="nyc-2025" />
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
        <footer className="text-center border-t border-amber-900/20 pt-6">
          <p className="text-neutral-400 text-sm">
            NYC • January 2025 • <span className="text-amber-400">Pryce Tharpe</span>
          </p>
        </footer>
      </main>
    </>
  );
} 