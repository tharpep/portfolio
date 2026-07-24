# Photography page redesign — reference sites and open questions

Working notes for the `claude/photography-page-overhaul-5ctkz3` branch. WebFetch
is fully blocked in the sandbox this work was done in (confirmed — even a
plain `example.com` fetch 403s, so it's not bot-protection on any single
site, it's the environment). This file exists so a session *with* live
browsing can actually open these, look at real markup/code, and check the
current implementation against them — everything below was researched
and cited from descriptions/knowledge, never actually viewed rendered.

## What to actually check against the current implementation

The most useful thing a browsing-capable session can do here isn't a fresh
survey — it's verifying/correcting specific decisions already made blind:

1. **Mixed aspect-ratio rows.** Current fix in `PhotoGallery.tsx` /
   `CollectionRows.tsx`: every tile is sized by equal *area*
   (`height = base / sqrt(aspectRatio)`, `width = base * sqrt(aspectRatio)`),
   not equal height, so a portrait and landscape in the same row don't swing
   2-3x apart in width. This was reasoned from general "justified gallery"
   principles, not copied from any specific reference. **Open question:**
   does the Codrops Feb 2026 horizontal-parallax-gallery article (below)
   actually do something more specific/different for mixed orientations?
   Check its demo/CodeSandbox directly.
2. **WebGL displacement-hover shader feel** (`PhotoDistortionHover.tsx`,
   `ogl`-based). Tuned by eye against test images, never checked against the
   original technique's actual displacement-map authoring or blend math.
   `robin-dela/hover-effect` (below) is the real source for this — worth a
   direct diff.
3. **Overall restraint/density calibration** — landing "between rauno.me and
   bruno-simon.com" was a description, not something actually viewed
   side-by-side with the current build.
4. **Named Awwwards examples** (Paul & Henriette, Darker Lights, Ricky
   Michiels, Ruud Luijten, Ana Blagojevic, Diego Marcel, Martin Dellicour) —
   these are names cited in Awwwards' photography category, not URLs I ever
   opened. Worth actually finding and looking at.

## Sources

### Meta-curated inspiration galleries
- https://godly.website — bold/experimental/maximalist end of the spectrum.
- https://www.siteinspire.com — editorial/typographic/restrained counterweight.
- https://www.awwwards.com/websites/photography/ — named examples above.
- https://www.awwwards.com/websites/webgl/ — WebGL technique reference.

### Individual dev/designer-built sites
- https://rauno.me — photography page described (secondhand) as "full-screen
  grid, images sized just right," restrained, well-tuned dark mode. Anchor
  for restraint on this project.
- https://emilkowal.ski — same craft lineage as Rauno.
- https://bruno-simon.com — drive-a-3D-car portfolio. Upper bound of
  ambition, explicitly *not* the target for this project — cited only to
  define "how far we're choosing not to go."

### Creative studios (cursor/WebGL/motion technique reference, not photography)
- https://zajno.com — grid background follows cursor, liquid image feel on interaction.
- https://lusion.co — immersive 3D/WebGL, maximalist.
- https://cuberto.com — cursor "resistance"/magnetic micro-interactions;
  open-sources a `mouse-follower` project.

### Codrops (tympanus.net/codrops) — implementable technique writeups
- https://tympanus.net/codrops/2018/04/10/webgl-distortion-hover-effects/
  (2018) — the original displacement-hover technique. Source of the WebGL
  hover accent on the index page.
- https://tympanus.net/codrops/2026/02/19/creating-a-smooth-horizontal-parallax-gallery-from-dom-to-webgl/
  (Feb 2026) — source of the horizontal-scroll-track approach. **Highest
  priority to actually re-check** — see open question #1 above.
- https://tympanus.net/codrops/2026/02/02/building-a-scroll-revealed-webgl-gallery-with-gsap-three-js-astro-and-barba-js/
  (Feb 2026).
- https://tympanus.net/codrops/2026/03/09/building-a-scroll-reactive-3d-gallery-with-three-js-velocity-and-mood-based-backgrounds/
  (Mar 2026) — source of the mood-reactive background on collection pages.
- https://tympanus.net/codrops/2026/03/11/svg-mask-transitions-on-scroll-with-gsap-and-scrolltrigger/
  (Mar 2026) — deferred/not implemented this pass.

### GitHub repos (real source, not just articles)
- https://github.com/robin-dela/hover-effect — the actual library behind the
  2018 Codrops WebGL hover article. Rejected as a *dependency* (pulls in
  Three.js + GSAP), but never actually read as source — worth diffing
  `PhotoDistortionHover.tsx`'s shader/blend logic against it.
- https://github.com/oframe/ogl — the WebGL library actually in use here.
  Check its `examples/` folder for idiomatic `Renderer`/`Program`/`Mesh`
  setup and resize/texture-load timing, and compare against the current
  hand-rolled implementation.
- https://github.com/kimamov/WebGL-Image-Transition — alternative
  dependency-free approach, noted as a fallback if `ogl`'s API ever stops
  fitting cleanly (it has so far).

## Not yet identified

- No confirmed GitHub repo for the specific Feb 2026 "Smooth Horizontal
  Parallax Gallery" Codrops article — Codrops demos are sometimes on GitHub,
  sometimes CodeSandbox-only. Worth checking the article page itself for a
  demo/source link.
