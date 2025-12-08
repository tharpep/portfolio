# Portfolio Design Implementation Plan

## Overview
Redesigning navigation, footer, and general site structure for a more polished, intentional feel.

---

## Decisions Made

| Question | Decision |
|----------|----------|
| Navbar border/shadow | Border-bottom (cleaner look) |
| Glassmorphism on scroll | Yes - more opaque background when scrolled |
| Footer style | Option A - Minimal |
| Footer visibility | All pages (except homepage which uses Let's Connect) |
| Resume in main nav | Yes |
| Resume PDF | Keep both (web version + PDF download) |

---

## Phase 1: Quick Wins

### 1.1 "Say Hello" instead of "Contact Me"
- **Files:** `Nav.tsx`, `ContactDropdownHeader.tsx`, `ContactDropdownAbout.tsx`
- **Change:** Replace all instances of "Contact Me" with "Say Hello"
- **Time:** ~5 minutes

---

## Phase 2: Navbar Restructure

### 2.1 Full-Width Navbar Background
- **Current:** Navbar content constrained to page content width
- **New:** Navbar background spans 100% viewport width, content inside is contained
- **Implementation:**
  ```tsx
  <nav className="w-full bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      {/* nav content */}
    </div>
  </nav>
  ```

### 2.2 Name Left, Links Right Layout
- **Current:** Logo/name with links grouped together
- **New:**
  - Left: "Pryce Tharpe" (or just "PT" logo)
  - Right: Home | Projects | About | Resume | Say Hello (button)
- **Mobile:** Stays as hamburger menu

### 2.3 Sticky Navbar with Glassmorphism
- **Add:** `sticky top-0 z-50` for navbar to stay visible on scroll
- **Glassmorphism:** Use JavaScript to detect scroll position
  - Default: `bg-neutral-900/80 backdrop-blur-md`
  - On scroll (>50px): `bg-neutral-900/95 backdrop-blur-lg shadow-lg`
- **Implementation:** useState + useEffect with scroll listener, or CSS-only with `backdrop-blur`

---

## Phase 3: Footer Strategy

### 3.1 Homepage - No Footer
- **Current:** Has "Let's Connect" section + small footer
- **New:** "Let's Connect" section IS the ending (no footer component)
- **Implementation:** Conditionally hide footer on homepage route

### 3.2 All Other Pages - Minimal Footer
```
─────────────────────────────────────────────────────────────────────────
© 2025 Pryce Tharpe                              GitHub · LinkedIn · Email
─────────────────────────────────────────────────────────────────────────
```

- **Structure:**
  - Full-width background (like navbar)
  - Content contained within max-w-7xl
  - Left: Copyright
  - Right: Social links (icons + text or just icons)
  - Border-top for separation
  - Minimal padding (py-6 or py-8)

- **Pages with footer:**
  - `/projects` (projects list)
  - `/projects/[slug]` (individual project pages)
  - `/about`
  - `/resume`

---

## Phase 4: Resume Page (New)

### 4.1 Create `/resume` Route
- **File:** `src/app/resume/page.tsx`
- **Navigation:** Add "Resume" to main nav (Home | Projects | About | **Resume** | Say Hello)

### 4.2 Resume Page Structure
```
Resume                                              [Download PDF ↓]
═══════════════════════════════════════════════════════════════════

EXPERIENCE
──────────────────────────────────────────────────────────────────
Software Engineering Intern
Mesh Systems | May 2024 - Present

• Point 1
• Point 2
• Point 3

──────────────────────────────────────────────────────────────────

EDUCATION
──────────────────────────────────────────────────────────────────
Purdue University
B.S. Computer Engineering | Expected May 2025

Relevant Coursework: ...

──────────────────────────────────────────────────────────────────

SKILLS
──────────────────────────────────────────────────────────────────
Languages       Python, TypeScript, C, SQL
Frameworks      Next.js, React, FastAPI
Cloud           Azure, AWS, Vercel
Tools           Git, Docker, GitHub Actions

──────────────────────────────────────────────────────────────────

PROJECTS (Optional)
──────────────────────────────────────────────────────────────────
(Brief list linking to /projects pages, or omit if redundant)
```

- **PDF Download:** Button in top-right of page, links to existing `/resume.pdf`
- **Layout:** Could use sidebar layout like portfolio project page, or single column

---

## Phase 5: Vertical Edge Links (DEFERRED)
- **Status:** On hold until you decide placement
- **Options:**
  - Left edge: Email (rotated 90°)
  - Right edge: Social links (GitHub, LinkedIn icons stacked vertically)
  - Single side only
- **Notes:** Only visible on desktop (lg: breakpoint and up)

---

## Phase 6: Photo Integration (DEFERRED)
- **Status:** On hold until you select photos
- **Potential uses:**
  - Homepage hero background (with overlay)
  - About page accent
  - Project page backgrounds (subtle)
  - Footer background strip

---

## Implementation Order

1. [ ] "Say Hello" text change
2. [ ] Navbar: Full-width background
3. [ ] Navbar: Name left, links right (add Resume link)
4. [ ] Navbar: Sticky positioning + glassmorphism on scroll
5. [ ] Footer: Create minimal footer component
6. [ ] Footer: Add to all pages except homepage
7. [ ] Homepage: Remove any existing footer (keep Let's Connect as ending)
8. [ ] Resume page: Create new route with extended resume content
9. [ ] (Later) Vertical edge links
10. [ ] (Later) Photo integration

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/Nav.tsx` | Full restructure - width, layout, sticky, glassmorphism, add Resume link |
| `src/components/ContactDropdownHeader.tsx` | "Say Hello" text |
| `src/components/ContactDropdownAbout.tsx` | "Say Hello" text |
| `src/app/layout.tsx` | Add Footer component conditionally (not on homepage) |
| `src/app/page.tsx` | Ensure no footer, Let's Connect is the ending |
| `src/app/resume/page.tsx` | **NEW FILE** - Extended resume page |
| `src/components/Footer.tsx` | **NEW FILE** - Minimal footer component |

---

## Technical Notes

### Glassmorphism Scroll Effect
```tsx
// In Nav.tsx
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// In className:
className={`... ${scrolled ? 'bg-neutral-900/95 shadow-lg' : 'bg-neutral-900/80'}`}
```

### Conditional Footer in Layout
```tsx
// In layout.tsx or create a wrapper component
// Check pathname to hide footer on homepage
'use client'
import { usePathname } from 'next/navigation';

const pathname = usePathname();
const showFooter = pathname !== '/';
```

---

## Notes

- All changes should maintain mobile responsiveness
- Keep the dark theme consistent (neutral-900 base)
- Cyan accent color remains primary
- Typography hierarchy stays consistent with existing patterns
- Footer should feel intentional but not heavy
- Resume page should be scannable, not overwhelming
