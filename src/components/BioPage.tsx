import React from "react";
import type { BioData } from "../core/types";
import { ArrowLeft, ExternalLink, MapPin } from "lucide-react";

export interface BioPageProps {
  bio: BioData;
  onBackToGallery: () => void;
}

export const BioPage: React.FC<BioPageProps> = ({ bio, onBackToGallery }) => {
  return (
    <div className="flex-1 flex flex-col w-full max-w-5xl mx-auto px-6 sm:px-12 py-12 animate-fade-in">
      <div className="pb-8">
        <button
          onClick={onBackToGallery}
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Gallery</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
            <img
              src={bio.portraitUrl}
              alt={bio.name}
              className="w-full h-auto object-cover"
            />
            <div className="p-3.5 bg-zinc-950/90 border-t border-zinc-900 flex items-center justify-between font-mono text-xs text-zinc-400">
              <span className="text-zinc-200">{bio.name}</span>
              <span>{bio.camera}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-2">
            <h1 className="font-serif text-3xl sm:text-4xl font-light text-white tracking-tight">
              About
            </h1>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>{bio.location}</span>
              <span className="text-zinc-700">·</span>
              <span>{bio.camera}</span>
            </div>
          </div>

          <div className="space-y-5 text-zinc-300 font-sans text-base leading-relaxed font-light">
            {bio.bioParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="pt-6 border-t border-zinc-900 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              {bio.socials.map((soc, i) => (
                <a
                  key={i}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-mono text-xs transition-all flex items-center gap-2"
                >
                  <span>{soc.label}</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
