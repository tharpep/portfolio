import type { GalleryModeModule } from "./types";

interface ModeModuleExport {
  default?: GalleryModeModule;
  mode?: GalleryModeModule;
}

export function discoverGalleryModes(): GalleryModeModule[] {
  // Vite auto-discovers all mode components in the modes directory
  const modules = import.meta.glob<ModeModuleExport>("../modes/*.tsx", { eager: true });
  const modes: GalleryModeModule[] = [];

  for (const [path, mod] of Object.entries(modules)) {
    const typedMod = mod as ModeModuleExport;
    const mode = typedMod.default || typedMod.mode;
    if (mode && mode.id && mode.Component) {
      modes.push(mode);
    } else {
      console.warn(`[mode_registry] File ${path} does not export a valid GalleryModeModule`);
    }
  }

  // Sort by defined order or fallback to label
  return modes.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}
