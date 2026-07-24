'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

// Ties the page background to the collection's existing `mood` field (the
// only mood data we actually have — per-photo mood would need new AI-metadata
// work, out of scope here) rather than a hard light/dark toggle. The
// background eases from neutral white into the mood color as the hero photo
// scrolls out of view into the gallery below it — for light-mood collections
// that's white-to-white (no visible change, which is correct: there's
// nothing to react to), for dark-mood collections it's a genuine shift.
export default function MoodBackground({
  isDark,
  hero,
  children,
}: {
  isDark: boolean;
  hero: React.ReactNode;
  children: React.ReactNode;
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['end end', 'end start'],
  });

  const finalColor = isDark ? '#0f0f0f' : '#ffffff';
  const bg = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? [finalColor, finalColor] : ['#ffffff', finalColor]
  );

  return (
    <motion.div style={{ backgroundColor: bg }} className="min-h-screen">
      <div ref={heroRef}>{hero}</div>
      {children}
    </motion.div>
  );
}
