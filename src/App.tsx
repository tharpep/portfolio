import React, { useMemo, useState } from "react";
import { discoverGalleryModes } from "./core/mode_registry";
import { SAMPLE_COLLECTIONS, SAMPLE_PHOTOS } from "./core/fixtures";
import type { PhotoItem } from "./core/types";
import { Navbar } from "./components/Navbar";
import { PhotoModal } from "./components/PhotoModal";
import { AmbientAura } from "./components/AmbientAura";
import { FilmGrain } from "./components/FilmGrain";
import { playShutterSound, playDialClick } from "./components/audioFoley";

export function App() {
  const modes = useMemo(() => discoverGalleryModes(), []);
  const [activeModeId, setActiveModeId] = useState<string>(() => modes[0]?.id || "vertical-cascade");
  const [activeCollection, setActiveCollection] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos = useMemo(() => {
    if (!activeCollection) return SAMPLE_PHOTOS;
    return SAMPLE_PHOTOS.filter((p) => p.collectionSlug === activeCollection);
  }, [activeCollection]);

  const activeMode = useMemo(() => {
    return modes.find((m) => m.id === activeModeId) || modes[0];
  }, [modes, activeModeId]);

  const handleSelectMode = (id: string) => {
    playDialClick();
    setActiveModeId(id);
  };

  const handleSelectCollection = (slug: string | null) => {
    playDialClick();
    setActiveCollection(slug);
  };

  const handleSelectPhoto = (photo: PhotoItem | null) => {
    if (photo) {
      playShutterSound();
    }
    setSelectedPhoto(photo);
  };

  const ActiveComponent = activeMode?.Component;

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col selection:bg-white selection:text-black relative overflow-x-hidden">
      <AmbientAura activePhoto={selectedPhoto} />
      <FilmGrain filmStock="iso400" />

      <Navbar
        modes={modes}
        activeModeId={activeModeId}
        onSelectMode={handleSelectMode}
        collections={SAMPLE_COLLECTIONS}
        activeCollection={activeCollection}
        onSelectCollection={handleSelectCollection}
        totalPhotos={filteredPhotos.length}
      />

      <main className="flex-1 relative flex flex-col z-10">
        {ActiveComponent ? (
          <ActiveComponent
            photos={filteredPhotos}
            collections={SAMPLE_COLLECTIONS}
            selectedPhoto={selectedPhoto}
            onSelectPhoto={handleSelectPhoto}
            activeCollection={activeCollection}
            onFilterCollection={handleSelectCollection}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center text-zinc-500 font-mono text-sm py-20">
            No gallery modes registered.
          </div>
        )}
      </main>

      <PhotoModal
        isOpen={!!selectedPhoto}
        photo={selectedPhoto}
        photos={filteredPhotos}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={handleSelectPhoto}
      />

      <footer className="border-t border-zinc-900 py-6 px-6 text-center text-xs font-mono text-zinc-600 z-10">
        OBSCURA &middot; Sony Alpha 7C &middot; Tokyo &middot; Kamakura &middot; Kyoto &middot; New York
      </footer>
    </div>
  );
}

export default App;
