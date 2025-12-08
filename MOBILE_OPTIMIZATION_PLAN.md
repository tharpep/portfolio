# Mobile Optimization Plan

## Overview
Improve mobile experience by addressing oversized elements, excessive text, and poor information density. Goal: make content more scannable and fit more information above the fold.

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

## Current Issues

### 1. Project Cards
- **Problem:** Cards fill entire viewport width with too much text
- **Impact:** Only 1-2 projects visible at once, requires excessive scrolling
- **User Experience:** Feels overwhelming, hard to scan multiple projects quickly

### 2. Text Density
- **Problem:** Too many words per card, descriptions are verbose
- **Impact:** Cards feel heavy, take up too much vertical space
- **User Experience:** Hard to quickly understand what each project is about

### 3. Element Sizing
- **Problem:** Objects (cards, buttons, text) are too large on mobile
- **Impact:** Everything feels "blown up" - we've gone too far in making things legible
- **User Experience:** Feels like viewing a desktop site zoomed in, not a native mobile experience

### 4. Information Hierarchy
- **Problem:** All information given equal weight, no clear scanning path
- **Impact:** Users can't quickly identify what's important
- **User Experience:** Cognitive overload when trying to browse projects

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

1. **Layout:** 2-column grid on mobile (Option A)
2. **Description Length:** 10 words maximum, or potentially title-only on mobile
3. **Technology Tags:** Hidden on mobile, visible on desktop
4. **Card Layout:** Same layout for all project categories
5. **Filtering/Sorting:** No filtering/sorting on mobile (keep it simple)
6. **Component Architecture:** Option A - Responsive classes with single component

---

## Implementation Details

### Mobile Card Structure
```
┌─────────────────────┬─────────────────────┐
│ [Badge] [Status]    │ [Badge] [Status]    │
│ Project Title       │ Project Title       │
│ 10-word desc...     │ 10-word desc...     │
│ View Details →      │ View Details →      │
└─────────────────────┴─────────────────────┘
```

### Desktop Card Structure
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
- **Grid:** `grid-cols-2` on mobile, `md:grid-cols-2` on desktop (or adjust as needed)
- **Description:** Conditional rendering - 10 words on mobile, more on desktop
- **Tech Tags:** `hidden md:flex` on mobile, visible on desktop
- **Padding:** Smaller on mobile (`p-4`), larger on desktop (`md:p-6`)
- **Font Sizes:** Smaller base sizes on mobile, larger on desktop

## Next Steps

1. Implement responsive classes in `ProjectCard` component
2. Create condensed descriptions (10 words max) for mobile
3. Hide technology tags on mobile using `hidden md:flex`
4. Implement 2-column grid on mobile
5. Adjust element sizing and spacing for mobile
6. Test on various mobile devices
7. Gather feedback and iterate

