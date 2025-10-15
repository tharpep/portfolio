'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface EnhancedCollectionCardProps {
  title: string;
  subtitle: string;
  year: string;
  desc: string;
  href: string;
  coverUrl?: string | null;
}

export default function EnhancedCollectionCard({ 
  title, 
  subtitle, 
  year, 
  desc, 
  href, 
  coverUrl 
}: EnhancedCollectionCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <Link
      href={href}
      className="group block relative overflow-hidden bg-neutral-900 border border-amber-900/20 hover:border-amber-700/40 transition-all duration-500"
    >
      {/* Image Section */}
      <div className="aspect-[3/2] relative overflow-hidden">
        {coverUrl && !imageError ? (
          <>
            {/* Azure Cover Image */}
            <Image
              src={coverUrl}
              alt={title}
              fill
              className={`
                object-cover transition-all duration-500 group-hover:scale-105
                ${imageLoading ? 'opacity-0' : 'opacity-100'}
              `}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoad={() => setImageLoading(false)}
              onError={() => {
                setImageError(true);
                setImageLoading(false);
              }}
            />
            
            {/* Loading placeholder while image loads */}
            {imageLoading && (
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                <svg className="w-16 h-16 text-amber-400/30 animate-pulse" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21,15 16,10 5,21"/>
                </svg>
              </div>
            )}
          </>
        ) : (
          /* Fallback to original placeholder design */
          <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center h-full">
            <svg className="w-16 h-16 text-amber-400/30 group-hover:text-amber-400/50 transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21,15 16,10 5,21"/>
            </svg>
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        
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