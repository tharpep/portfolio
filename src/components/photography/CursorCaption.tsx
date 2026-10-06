'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function useHoverCapable(): boolean {
  const [capable, setCapable] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setCapable(mq.matches);
    const onChange = () => setCapable(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return capable;
}

export default function CursorCaption({
  label,
  containerRef,
}: {
  label: string | null;
  containerRef: React.RefObject<HTMLElement | null>;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 28, stiffness: 320, mass: 0.4 });
  const springY = useSpring(y, { damping: 28, stiffness: 320, mass: 0.4 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, [containerRef, x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-40"
      style={{ x: springX, y: springY }}
    >
      <motion.span
        className="block whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
        style={{ translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: label ? 1 : 0, scale: label ? 1 : 0.85 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}
