# Mobile Optimization Plan

## Overview
Improve mobile experience by addressing oversized elements, excessive text, and poor information density. Goal: make content more scannable and fit more information above the fold.

## 📊 Current Status Summary

**Last Updated:** After final decisions confirmed

### ✅ Completed
- Equal height cards with flexbox
- ScrollFadeIn animations for progressive reveal
- Category-based organization with color coding
- Status indicators with pulse animation
- Responsive grid (single column mobile, 2 columns desktop)
- **Final decisions confirmed for all mobile optimizations**

### 🎯 Ready to Implement (Decisions Confirmed)
- ✅ 2-column grid on mobile (decision confirmed)
- ✅ Technology tags hidden on mobile (decision confirmed)
- ✅ Condensed descriptions: Title + 10 words max on mobile (decision confirmed)
- ✅ Responsive padding: `p-4 md:p-6` (decision confirmed)
- ✅ Category badges: Keep current (no badges on cards) (decision confirmed)
- ⚠️ Responsive font sizes (optional, recommended)

### 📝 Implementation Status
- **Phase 1 (Information Density):** Ready to implement
- **Phase 2 (Visual Polish):** Ready to implement
- **Phase 3 (Testing):** Pending implementation

## Component Architecture

### Current State
- **Shared Components:** Desktop and mobile use the same `ProjectCard` component
- **Responsive Classes:** Only grid layout is responsive (`md:grid-cols-2`), card styling is identical
- **Single Source:** Changes to `ProjectCard` affect both mobile and desktop

### Concern
- Editing mobile-specific styles could unintentionally affect desktop experience
- Need separation to allow independent mobile/desktop optimization

### Solution Options

#### Option A: Responsive Classes (Recommended)
- Keep single `ProjectCard` component
- Use Tailwind responsive prefixes (`md:`, `lg:`) for desktop-specific styles
- Mobile styles are default, desktop styles override with breakpoints
- **Pros:** Single component, easier maintenance, smaller bundle
- **Cons:** Component file becomes more complex with conditional classes

#### Option B: Separate Components
- Create `ProjectCardMobile` and `ProjectCardDesktop` components
- Use conditional rendering or separate grid layouts
- **Pros:** Clear separation, easier to reason about each version
- **Cons:** Code duplication, more files to maintain, larger bundle

#### Option C: Hybrid Approach
- Shared base component with mobile/desktop variants
- Use composition pattern with wrapper components
- **Pros:** Reusable base, clear variants
- **Cons:** More complex architecture

### Decision
**Option A (Responsive Classes)** - Use Tailwind's responsive system:
- Mobile styles as default (no prefix)
- Desktop styles with `md:` or `lg:` prefixes
- This allows mobile-specific optimizations without affecting desktop
- Example: `p-4 md:p-6` (smaller padding on mobile, larger on desktop)
- **Implementation:** Single `ProjectCard` component with responsive classes

---

## Current Implementation Status

### ✅ Implemented
- **Equal Height Cards:** Cards use `h-full flex flex-col` with `items-stretch` on grid
- **ScrollFadeIn Animations:** Category sections and individual cards fade in on scroll
- **Category Organization:** Projects organized by category with color-coded sections
- **Status Indicators:** Visual status badges (Deployed/In Progress) with pulse animation
- **Responsive Grid:** Single column on mobile, 2 columns on desktop (`md:grid-cols-2`)
- **Card Structure:** Title, status, description (line-clamp-3), tech tags, timeline, action link
- **Category Backgrounds:** Gradient backgrounds with proper vertical padding

### ❌ Not Yet Implemented (From Original Plan)
- **2-Column Grid on Mobile:** Currently single column on mobile (plan called for 2 columns)
- **Technology Tags Hidden on Mobile:** Tags are always visible (plan called for `hidden md:flex`)
- **Condensed Descriptions:** Full descriptions shown with `line-clamp-3` (plan called for 10 words max on mobile)
- **Responsive Padding:** Cards use `p-6` for all sizes (plan called for `p-4 md:p-6`)
- **Responsive Font Sizes:** No mobile-specific font size reductions
- **Category Badges:** No category badges visible on cards (mentioned in plan)

## Current Issues

### 1. Project Cards
- **Problem:** Cards fill entire viewport width with too much text
- **Impact:** Only 1 project visible at once on mobile, requires excessive scrolling
- **User Experience:** Feels overwhelming, hard to scan multiple projects quickly
- **Current State:** Single column layout on mobile, full-width cards

### 2. Text Density
- **Problem:** Too many words per card, descriptions are verbose
- **Impact:** Cards feel heavy, take up too much vertical space
- **User Experience:** Hard to quickly understand what each project is about
- **Current State:** Full descriptions with `line-clamp-3` (shows ~3 lines)

### 3. Element Sizing
- **Problem:** Objects (cards, buttons, text) are too large on mobile
- **Impact:** Everything feels "blown up" - we've gone too far in making things legible
- **User Experience:** Feels like viewing a desktop site zoomed in, not a native mobile experience
- **Current State:** Uniform sizing across all breakpoints

### 4. Information Hierarchy
- **Problem:** All information given equal weight, no clear scanning path
- **Impact:** Users can't quickly identify what's important
- **User Experience:** Cognitive overload when trying to browse projects
- **Current State:** All elements (title, description, tech tags, timeline) always visible

---

## Goals

1. **Increase Information Density**
   - Show 2-3 project cards per viewport height (instead of 1-2)
   - Reduce vertical scrolling required to see all projects

2. **Improve Scannability**
   - Make it easy to quickly understand what each project is about
   - Prioritize key information (title, category, key tech) over long descriptions

3. **Better Mobile Proportions**
   - Elements sized appropriately for mobile, not just "legible"
   - Balance between readability and efficient use of screen space

4. **Maintain Essential Information**
   - Keep skills/technologies visible (important for quick scanning)
   - Preserve project categories and status indicators

---

## Proposed Solutions

### 1. Project Card Redesign

#### Current State
- Full-width cards
- Long descriptions (2-3 sentences)
- Large padding/spacing
- All information visible at once

#### Proposed State
- **Compact Layout**
  - Reduce card padding on mobile (from current large padding to more moderate)
  - Tighter spacing between elements within cards
  - Smaller font sizes for secondary text

- **Condensed Descriptions**
  - **Decision:** 10 words maximum, or potentially just title only
  - Focus on "what it is" not "how it works"
  - Move detailed descriptions to project detail pages
  - Consider removing description entirely on mobile cards if title is descriptive enough

- **Visual Hierarchy**
  - Title: Larger, bold, prominent
  - Category/Status: Small badge or tag
  - Description: 10 words max, or potentially omitted (title-only approach)
  - Technologies: **Hidden on mobile, visible on desktop** (decision)
  - Action: Small "View Details" link/button

#### Example Card Structure
```
┌─────────────────────────────────┐
│ [Category Badge]  [Status]      │
│ Project Title                    │
│ Short one-line description...    │
│ [Tech] [Tech] [Tech] [Tech]      │
│ View Details →                   │
└─────────────────────────────────┘
```

### 2. Text Reduction Strategy

#### What to Keep (Mobile)
- Project title (essential)
- Category/status badges (quick filtering)
- Brief description (10 words max, or title-only)
- Action link/button

#### What to Keep (Desktop)
- Project title (essential)
- Category/status badges (quick filtering)
- Technology tags (visible on desktop)
- Brief description
- Action link/button

#### What to Remove/Condense (Mobile)
- Technology tags → Hidden on mobile, shown on desktop
- Long descriptions → 10 words max or title-only
- Detailed feature lists → Move to detail page
- Verbose explanations → Concise statements or remove
- Redundant information → Remove duplicates

#### What to Remove/Condense (Desktop)
- Long multi-sentence descriptions → Condensed but more detailed than mobile
- Detailed feature lists → Move to detail page
- Verbose explanations → Concise statements
- Redundant information → Remove duplicates

#### Description Guidelines
- **Mobile (10 words max or title-only):**
  - **Before:** "Educational reproduction study of SimRAG paper focusing on similarity-based Retrieval Augmented Generation techniques. Built clean, modular implementation for learning RAG fundamentals and fine-tuning concepts."
  - **After (10 words):** "Reproduction study of SimRAG paper implementing RAG with two-stage fine-tuning."
  - **Or title-only:** Just show the project title, no description

- **Desktop:** Can be slightly longer but still concise

### 3. Element Sizing Adjustments

#### Typography
- **Titles:** Reduce from current large size to moderate (still prominent but not overwhelming)
- **Body Text:** Smaller base font size (14px instead of 16px+)
- **Badges/Tags:** Compact sizing, minimal padding

#### Spacing
- **Card Padding:** Reduce from current large padding to moderate (12-16px instead of 20-24px)
- **Card Gaps:** Tighter spacing between cards (16px instead of 24px+)
- **Internal Spacing:** Less space between elements within cards

#### Interactive Elements
- **Buttons/Links:** Smaller but still tappable (minimum 44px touch target)
- **Badges:** Compact, not oversized
- **Icons:** Smaller, proportional to text

### 4. Layout Optimizations

#### Grid/List View
- **Decision:** 2-column grid on mobile (Option A)
- Cards must be compact enough to fit 2 per row comfortably
- Ensure cards remain readable and tappable in 2-column layout
- May need to adjust card width/padding to accommodate 2 columns

#### Card Proportions
- **Height:** Reduce card height significantly (aim for ~150-200px instead of 300px+)
- **Width:** Full width is fine, but use it efficiently
- **Aspect Ratio:** More horizontal/rectangular, less square

#### Information Layout (Mobile)
- **Top Section:** Title + badges (horizontal layout)
- **Middle Section:** Description (10 words max, or omitted if title-only)
- **Bottom Section:** Action link/button only (tech tags hidden)

#### Information Layout (Desktop)
- **Top Section:** Title + badges (horizontal layout)
- **Middle Section:** Description (condensed but more detailed)
- **Bottom Section:** Tech tags + action (horizontal, compact)

### 5. Progressive Disclosure

#### Initial View (List Page)
- Minimal information: Title, category, brief description, key tech
- Quick scanning focus

#### Detail View (Project Page)
- Full description, all details, complete information
- Users who want details can click through

---

## Implementation Considerations

### Breakpoints
- Focus on mobile-first approach
- Ensure changes apply to small screens (< 768px)
- May need tablet adjustments (768px - 1024px)

### Touch Targets
- Maintain minimum 44px for interactive elements
- Ensure buttons/links are easily tappable
- Adequate spacing between clickable elements

### Performance
- Reduced text = faster rendering
- Compact cards = less DOM elements per viewport
- Better perceived performance

### Accessibility
- Don't sacrifice readability for compactness
- Ensure text contrast remains high
- Maintain semantic HTML structure

---

## Success Metrics

### Quantitative
- **Cards per viewport:** 2-3 visible (up from 1-2)
- **Scroll distance:** Reduce by 30-40% to see all projects
- **Text per card:** Reduce by 50-60% (from ~100 words to ~20-30 words)

### Qualitative
- **Scannability:** Can quickly understand project purpose
- **Visual balance:** Doesn't feel "blown up" or oversized
- **Information density:** Feels efficient, not cramped
- **User satisfaction:** Easier to browse and find projects

---

## Testing Approach

1. **Create mockups** of compact card designs
2. **A/B test** different text lengths and layouts
3. **User testing** on actual mobile devices
4. **Iterate** based on feedback and metrics

---

## Decisions Made

### Original Decisions (From Plan)
1. **Layout:** 2-column grid on mobile (Option A) - ⚠️ **NOT IMPLEMENTED** → ✅ **DECIDED: Will implement**
2. **Description Length:** 10 words maximum, or potentially title-only on mobile - ⚠️ **NOT IMPLEMENTED** → ✅ **DECIDED: Title + 10 words max**
3. **Technology Tags:** Hidden on mobile, visible on desktop - ⚠️ **NOT IMPLEMENTED** → ✅ **DECIDED: Hide on mobile**
4. **Card Layout:** Same layout for all project categories - ✅ **IMPLEMENTED**
5. **Filtering/Sorting:** No filtering/sorting on mobile (keep it simple) - ✅ **IMPLEMENTED** (no filtering exists)
6. **Component Architecture:** Option A - Responsive classes with single component - ✅ **IMPLEMENTED**

### Additional Decisions Made During Implementation
7. **Equal Height Cards:** Use flexbox with `h-full flex flex-col` and `items-stretch` - ✅ **IMPLEMENTED**
8. **Scroll Animations:** Use ScrollFadeIn component for progressive reveal - ✅ **IMPLEMENTED**
9. **Category Organization:** Group projects by category with color-coded sections - ✅ **IMPLEMENTED**
10. **Status Indicators:** Show visual status badges with pulse animation - ✅ **IMPLEMENTED**

### Final Decisions (Confirmed)
11. **Mobile Grid:** 2-column grid on mobile - ✅ **DECIDED**
12. **Tech Tags:** Hidden on mobile (`hidden md:flex`) - ✅ **DECIDED**
13. **Description:** Title + 10 words max on mobile - ✅ **DECIDED**
14. **Padding:** `p-4 md:p-6` (responsive) - ✅ **DECIDED**
15. **Category Badges:** Keep current (no badges on cards) - ✅ **DECIDED**
16. **Priority:** Both information density and visual polish - ✅ **DECIDED**

---

## Implementation Details

### Current Implementation (Actual Code)

#### Mobile Card Structure (Current - Before Optimization)
```
┌─────────────────────────────────┐
│ Project Title        [Status]   │
│ Full description text...         │
│ (line-clamp-3, ~3 lines)        │
│ [Tech] [Tech] [Tech] [+X more]  │
│ Timeline    View Details →      │
└─────────────────────────────────┘
```
- **Grid:** Single column (`grid`), 2 columns on desktop (`md:grid-cols-2`)
- **Padding:** `p-6` (24px) on all screen sizes
- **Description:** Full description with `line-clamp-3` (shows ~3 lines)
- **Tech Tags:** Always visible (`flex flex-wrap`)
- **Layout:** `h-full flex flex-col` for equal heights

#### Mobile Card Structure (Target - After Optimization) ✅
```
┌─────────────────────┬─────────────────────┐
│ Project Title [S]   │ Project Title [S]   │
│ Title plus 10 words │ Title plus 10 words │
│ max description...  │ max description...  │
│ Timeline → Details  │ Timeline → Details  │
└─────────────────────┴─────────────────────┘
```
- **Grid:** 2 columns (`grid-cols-2`), 2 columns on desktop (`md:grid-cols-2`)
- **Padding:** `p-4` (16px) on mobile, `p-6` (24px) on desktop
- **Description:** Title + 10 words max (truncated)
- **Tech Tags:** Hidden on mobile (`hidden md:flex`)
- **Layout:** `h-full flex flex-col` for equal heights (maintained)

#### Desktop Card Structure (Current - Before Optimization)
```
┌─────────────────────────────────┐
│ Project Title        [Status]   │
│ Full description text...         │
│ (line-clamp-3, ~3 lines)        │
│ [Tech] [Tech] [Tech] [+X more]  │
│ Timeline    View Details →      │
└─────────────────────────────────┘
```
- Same structure as mobile (no differentiation)

#### Desktop Card Structure (Target - After Optimization) ✅
```
┌─────────────────────────────────┐
│ Project Title        [Status]   │
│ Full description text...         │
│ (line-clamp-3, ~3 lines)        │
│ [Tech] [Tech] [Tech] [+X more]  │
│ Timeline    View Details →      │
└─────────────────────────────────┘
```
- **Grid:** 2 columns (`md:grid-cols-2`)
- **Padding:** `p-6` (24px) on desktop
- **Description:** Full description with `line-clamp-3` (maintained)
- **Tech Tags:** Visible on desktop (`md:flex`)
- **Layout:** `h-full flex flex-col` for equal heights (maintained)

### Planned Implementation (From Original Plan)

#### Mobile Card Structure (Planned)
```
┌─────────────────────┬─────────────────────┐
│ [Badge] [Status]    │ [Badge] [Status]    │
│ Project Title       │ Project Title       │
│ 10-word desc...     │ 10-word desc...     │
│ View Details →      │ View Details →      │
└─────────────────────┴─────────────────────┘
```

#### Desktop Card Structure (Planned)
```
┌─────────────────────────────────┐
│ [Badge]  [Status]                │
│ Project Title                    │
│ Longer description text...       │
│ [Tech] [Tech] [Tech] [Tech]      │
│ View Details →                   │
└─────────────────────────────────┘
```

### Key Implementation Points

#### Current (Actual - Before Optimization)
- **Grid:** `grid` (single column) on mobile, `md:grid-cols-2` on desktop
- **Description:** `line-clamp-3` on all screen sizes
- **Tech Tags:** Always visible (`flex flex-wrap gap-2`)
- **Padding:** `p-6` (24px) on all screen sizes
- **Font Sizes:** Same sizes across all breakpoints
- **Equal Heights:** `h-full flex flex-col` with `items-stretch` on grid

#### Target (Planned - To Be Implemented) ✅
- **Grid:** `grid-cols-2` on mobile, `md:grid-cols-2` on desktop
- **Description:** Title + 10 words max on mobile, full description on desktop
- **Tech Tags:** `hidden md:flex` on mobile, visible on desktop
- **Padding:** `p-4` (16px) on mobile, `p-6` (24px) on desktop (`p-4 md:p-6`)
- **Font Sizes:** Consider responsive sizes (optional)
- **Equal Heights:** Keep `h-full flex flex-col` with `items-stretch` on grid

### Implementation Code Examples

#### Grid Layout
```tsx
// Current
<div className="grid gap-6 md:grid-cols-2 items-stretch">

// Target
<div className="grid grid-cols-2 gap-6 md:grid-cols-2 items-stretch">
```

#### Tech Tags
```tsx
// Current
<div className="flex flex-wrap gap-2 mb-4">

// Target
<div className="hidden md:flex flex-wrap gap-2 mb-4">
```

#### Card Padding
```tsx
// Current
className={`... p-6 ...`}

// Target
className={`... p-4 md:p-6 ...`}
```

#### Description Truncation (Helper Function)
```tsx
// Utility function to add
function truncateWords(text: string, maxWords: number): string {
  const words = text.split(' ');
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
}

// Usage in component
<p className="text-neutral-300 text-sm leading-relaxed mb-4 flex-grow">
  {truncateWords(project.description, 10)}
</p>
```

## Next Steps (Implementation Plan)

### Phase 1: Information Density (High Priority)
1. **Implement 2-column grid on mobile** ✅
   - Change grid from `grid` to `grid-cols-2` on mobile
   - Keep `md:grid-cols-2` on desktop (no change)
   - File: `src/app/projects/page.tsx` line 118
   - Change: `grid gap-6 md:grid-cols-2` → `grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-2`
   - **Gap Size Decision:** Use `gap-4` (16px) on mobile, `gap-6` (24px) on desktop
   - **Rationale:** Tighter spacing on mobile creates more compact, information-dense 2-column layout while maintaining visual separation

2. **Hide technology tags on mobile** ✅
   - Add `hidden md:flex` to tech tags container
   - File: `src/app/projects/page.tsx` line 48
   - Change: `flex flex-wrap gap-2 mb-4` → `hidden md:flex flex-wrap gap-2 mb-4`

3. **Condense descriptions on mobile (Title + 10 words max)** ✅
   - **Decision Confirmed:** Title shown fully, then 10 words maximum from description
   - Create utility function to truncate descriptions to 10 words
   - File: `src/app/projects/page.tsx` line 44
   - Implementation: Add `truncateWords` helper function
   - **Approach:** Title is always shown in full, followed by first 10 words of description with "..." if truncated

### Phase 2: Visual Polish (High Priority)
4. **Responsive padding** ✅
   - Change card padding from `p-6` to `p-4 md:p-6`
   - File: `src/app/projects/page.tsx` line 31
   - Change: `p-6` → `p-4 md:p-6`

5. **Responsive font sizes** ✅
   - **Decision:** Implement responsive font sizes for better mobile information density
   - **Rationale:** Smaller fonts on mobile create more compact, scannable cards while maintaining readability
   - **Implementation:**
     - **Title:** `text-lg md:text-xl` (18px mobile → 20px desktop)
     - **Description:** `text-xs md:text-sm` (12px mobile → 14px desktop)
     - **Status badge:** Keep current `text-xs` (already compact)
     - **Timeline:** `text-xs md:text-sm` (12px mobile → 14px desktop)
     - **"View Details" link:** Keep current `text-sm` (balanced for interaction)
   - File: `src/app/projects/page.tsx` lines 35, 44, 60

### Phase 3: Testing & Refinement
6. **Test on various mobile devices**
   - Verify 2-column layout works on small screens (320px+)
   - Check touch targets remain adequate (44px minimum)
   - Test description truncation displays correctly
   - Verify tech tags are properly hidden on mobile

7. **Gather feedback and iterate**
   - User testing on actual mobile devices
   - Check information density feels right
   - Verify cards remain scannable and readable

## Final Decisions (Confirmed)

### 1. Mobile Grid Layout ✅
- **Decision:** **2-column grid on mobile**
- **Implementation:** Change from `grid` to `grid-cols-2` on mobile, keep `md:grid-cols-2` on desktop
- **Rationale:** Increase information density, show 2-3 cards per viewport

### 2. Technology Tags ✅
- **Decision:** **Hide on mobile, visible on desktop**
- **Implementation:** Add `hidden md:flex` to tech tags container
- **Rationale:** Save vertical space on mobile, tech tags still available on desktop for detailed scanning

### 3. Description Length ✅
- **Decision:** **Title plus 10 words maximum on mobile**
- **Implementation:** Create utility function to truncate descriptions to 10 words, or use conditional rendering
- **Rationale:** Balance between context and compactness - title gives identity, 10 words provide essential context

### 4. Card Padding ✅
- **Decision:** **Responsive padding - `p-4` on mobile, `p-6` on desktop**
- **Implementation:** Change from `p-6` to `p-4 md:p-6`
- **Rationale:**
  - Mobile: `p-4` (16px) provides adequate touch targets (44px minimum) while increasing information density
  - Desktop: `p-6` (24px) maintains comfortable spacing for larger screens
  - This is the standard responsive pattern and balances density with usability

### 7. Gap Sizes ✅
- **Decision:** **`gap-4` (16px) on mobile, `gap-6` (24px) on desktop**
- **Implementation:** Change from `gap-6` to `gap-4 md:gap-6`
- **Rationale:**
  - Mobile: Tighter `gap-4` creates more compact 2-column layout, fitting more cards per viewport
  - Desktop: Larger `gap-6` provides comfortable breathing room for wider screens
  - Maintains visual separation while maximizing information density on small screens

### 8. Font Size Reduction ✅
- **Decision:** **Implement responsive font sizes now**
- **Implementation:** Add responsive text classes (e.g., `text-lg md:text-xl`, `text-xs md:text-sm`)
- **Rationale:**
  - Critical for mobile information density - smaller text allows more content per card
  - Maintains readability with 12px minimum (text-xs) which is standard for mobile
  - Progressive enhancement: starts compact on mobile, scales up on desktop
  - Complements other density improvements (2-column grid, condensed text, reduced padding)

### 9. Timeline Display ✅
- **Decision:** **Keep timeline visible on mobile (with responsive sizing)**
- **Implementation:** Change timeline from `text-xs` to `text-xs md:text-sm`
- **Rationale:**
  - Timeline provides valuable temporal context for quickly scanning projects
  - Users often want to know "when" alongside "what" - helps assess relevance/recency
  - Compact `text-xs` (12px) on mobile keeps it unobtrusive while remaining readable
  - Space savings from hiding tech tags makes room for timeline without overcrowding
  - Timeline is informational (not interactive) so smaller size is acceptable

### 5. Category Badges ✅
- **Decision:** **Keep current implementation (no badges on cards)**
- **Implementation:** No changes needed
- **Rationale:** Section headers already provide clear category context, avoiding redundancy

### 6. Priority ✅
- **Decision:** **Both information density AND visual polish**
- **Implementation:** Implement all optimizations together
- **Rationale:** Comprehensive mobile optimization requires both density improvements and visual refinement

---

## Summary of All Decisions

### Confirmed Decisions ✅
1. **Mobile Grid:** 2-column grid (`grid-cols-2`) on mobile, 2 columns on desktop (`md:grid-cols-2`)
2. **Tech Tags:** Hidden on mobile (`hidden md:flex`), visible on desktop
3. **Description:** Title shown fully + 10 words max from description on mobile
4. **Card Padding:** `p-4` mobile, `p-6` desktop (`p-4 md:p-6`)
5. **Gap Sizes:** `gap-4` mobile, `gap-6` desktop (`gap-4 md:gap-6`)
6. **Font Sizes:** Responsive sizing implemented:
   - Title: `text-lg md:text-xl` (18px → 20px)
   - Description: `text-xs md:text-sm` (12px → 14px)
   - Timeline: `text-xs md:text-sm` (12px → 14px)
   - Status badge: Keep `text-xs`
   - "View Details": Keep `text-sm`
7. **Timeline Display:** Keep visible on mobile with responsive sizing (`text-xs md:text-sm`)
8. **Category Badges:** Keep current (no badges on cards)
9. **Priority:** Both information density AND visual polish

### Ready for Implementation ✅
All decisions finalized. Implementation can proceed with full confidence in the approach.

