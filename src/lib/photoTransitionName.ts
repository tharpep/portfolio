// Cloudinary public_ids are arbitrary strings (slashes, spaces, mixed case) and
// aren't valid CSS <custom-ident> values, so view-transition-name needs sanitizing.
// The "photo-" prefix also keeps this namespace distinct from the "photo-main"/
// "photo-nav" names used elsewhere and guarantees a non-numeric leading character.
export function photoTransitionName(id: string): string {
  return `photo-${id.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`;
}

// Namespaced separately from photoTransitionName so the standalone hero photo
// never collides with the same photo if it also appears in a collection grid.
export function heroTransitionName(id: string): string {
  return `photo-hero-${id.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`;
}
