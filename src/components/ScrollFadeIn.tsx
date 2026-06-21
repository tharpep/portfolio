'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollFadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// Shared IntersectionObserver so many reveals share one observer instance.
class ScrollObserverManager {
  private observer: IntersectionObserver | null = null;
  private callbacks = new Map<Element, () => void>();

  private create(): IntersectionObserver {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.callbacks.get(entry.target)?.();
            this.callbacks.delete(entry.target);
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -80px 0px' }
    );
  }

  observe(el: Element, cb: () => void) {
    if (!this.observer) this.observer = this.create();
    this.callbacks.set(el, cb);
    this.observer.observe(el);
  }

  unobserve(el: Element) {
    this.callbacks.delete(el);
    this.observer?.unobserve(el);
  }
}

const manager = new ScrollObserverManager();

/**
 * Scroll reveal that enhances an already-visible default.
 * Content is fully rendered server-side; the offset/fade only applies once JS has
 * marked the document [data-reveal-ready] (see layout). Without JS, or with reduced
 * motion, the element is simply visible.
 */
export default function ScrollFadeIn({ children, delay = 0, className = '' }: ScrollFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Already in view on mount? reveal immediately to avoid a flash on long pages.
    manager.observe(el, () => setVisible(true));
    return () => manager.unobserve(el);
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
