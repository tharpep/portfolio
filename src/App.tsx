import React, { useMemo, useState } from "react";
import { discoverGalleryModes } from "./core/mode_registry";
import { SAMPLE_COLLECTIONS, SAMPLE_PHOTOS } from "./core/fixtures";
import type { PhotoItem } from "./core/types";
import { Navbar } from "./components/Navbar";

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

  const ActiveComponent = activeMode?.Component;

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col selection:bg-white selection:text-black">
      <Navbar
        modes={modes}
        activeModeId={activeModeId}
        onSelectMode={setActiveModeId}
        collections={SAMPLE_COLLECTIONS}
        activeCollection={activeCollection}
        onSelectCollection={setActiveCollection}
        totalPhotos={filteredPhotos.length}
      />

      <main className="flex-1 relative flex flex-col">
        {ActiveComponent ? (
          <ActiveComponent
            photos={filteredPhotos}
            collections={SAMPLE_COLLECTIONS}
            selectedPhoto={selectedPhoto}
            onSelectPhoto={setSelectedPhoto}
            activeCollection={activeCollection}
            onFilterCollection={setActiveCollection}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center text-zinc-500 font-mono text-sm py-20">
            No gallery modes registered.
          </div>
        )}
      </main>

      <footer className="border-t border-zinc-900 py-6 px-6 text-center text-xs font-mono text-zinc-600">
        OBSCURA &middot; Sony Alpha 7C &middot; Tokyo &middot; Kyoto &middot; New York
      </footer>
    </div>
  );
}

export default App;
