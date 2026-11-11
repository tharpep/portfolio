import React, { useMemo, useState } from "react";
import { discoverGalleryModes } from "./core/mode_registry";
import { PRYCE_BIO, SAMPLE_COLLECTIONS, SAMPLE_PHOTOS } from "./core/fixtures";
import type { PhotoItem } from "./core/types";
import { Navbar, type ViewTab } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { BioPage } from "./components/BioPage";
import { PhotoModal } from "./components/PhotoModal";
import { AmbientAura } from "./components/AmbientAura";
import { ExifHud } from "./components/ExifHud";

export function App() {
  const modes = useMemo(() => discoverGalleryModes(), []);
  const [currentView, setCurrentView] = useState<ViewTab>("home");
  const [activeModeId, setActiveModeId] = useState<string>(() => modes[0]?.id || "vertical-cascade");
  const [activeCollection, setActiveCollection] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [modalPhoto, setModalPhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos = useMemo(() => {
    if (!activeCollection) return SAMPLE_PHOTOS;
    return SAMPLE_PHOTOS.filter((p) => p.collectionSlug === activeCollection);
  }, [activeCollection]);

  const activeMode = useMemo(() => {
    return modes.find((m) => m.id === activeModeId) || modes[0];
  }, [modes, activeModeId]);

  const handleSelectMode = (id: string) => {
    setActiveModeId(id);
  };

  const handleSelectCollection = (slug: string | null) => {
    setActiveCollection(slug);
  };

  const handleSelectPhoto = (photo: PhotoItem | null) => {
    setSelectedPhoto(photo);
  };

  const handleEnterGallery = (modeId?: string) => {
    if (modeId) {
      setActiveModeId(modeId);
    }
    setCurrentView("gallery");
  };

  const handleOpenCollectionFromHome = (slug: string) => {
    setActiveCollection(slug);
    setCurrentView("gallery");
  };

  const ActiveComponent = activeMode?.Component;

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col selection:bg-white selection:text-black relative overflow-x-hidden">
      <AmbientAura activePhoto={selectedPhoto || modalPhoto} />

      <Navbar
        currentView={currentView}
        onSelectView={setCurrentView}
        modes={modes}
        activeModeId={activeModeId}
        onSelectMode={handleSelectMode}
        collections={SAMPLE_COLLECTIONS}
        activeCollection={activeCollection}
        onSelectCollection={handleSelectCollection}
        totalPhotos={SAMPLE_PHOTOS.length}
      />

      <main className="flex-1 relative flex flex-col z-10">
        {currentView === "home" && (
          <HomePage
            collections={SAMPLE_COLLECTIONS}
            photos={SAMPLE_PHOTOS}
            onSelectCollection={handleOpenCollectionFromHome}
            onEnterGallery={handleEnterGallery}
            onOpenBio={() => setCurrentView("bio")}
            onSelectPhoto={handleSelectPhoto}
          />
        )}

        {currentView === "gallery" && (
          ActiveComponent ? (
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
          )
        )}

        {currentView === "bio" && (
          <BioPage
            bio={PRYCE_BIO}
            onBackToGallery={() => setCurrentView("gallery")}
          />
        )}
      </main>

      <ExifHud
        selectedPhoto={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={setSelectedPhoto}
      />

      <PhotoModal
        isOpen={!!modalPhoto}
        photo={modalPhoto}
        photos={filteredPhotos}
        onClose={() => setModalPhoto(null)}
        onSelectPhoto={setModalPhoto}
      />

      <footer className="border-t border-zinc-900 py-6 px-6 text-center text-xs font-mono text-zinc-600 z-10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <span>Pryce Tharpe Photography</span>
          <span>&middot;</span>
          <span>Sony Alpha 7C</span>
        </div>
        <div className="flex items-center gap-4 text-zinc-400">
          <button
            onClick={() => setCurrentView("home")}
            className="hover:text-white transition-colors"
          >
            Home
          </button>
          <span>&middot;</span>
          <button
            onClick={() => setCurrentView("gallery")}
            className="hover:text-white transition-colors"
          >
            Gallery
          </button>
          <span>&middot;</span>
          <button
            onClick={() => setCurrentView("bio")}
            className="hover:text-white transition-colors"
          >
            Bio
          </button>
          <span>&middot;</span>
          <a
            href="https://www.instagram.com/pryce_tharpe/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram &rarr;
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
