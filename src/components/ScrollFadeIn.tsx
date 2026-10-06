'use client';

import { useLayoutEffect, useRef, useState } from 'react';

interface ScrollFadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// Shared IntersectionObserver singleton to reduce overhead
class ScrollObserverManager {
  private observer: IntersectionObserver | null = null;
  private callbacks: Map<Element, () => void> = new Map();

  private createObserver(): IntersectionObserver {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const callback = this.callbacks.get(entry.target);
            if (callback) {
              callback();
              this.callbacks.delete(entry.target);
              if (this.observer) {
                this.observer.unobserve(entry.target);
              }
            }
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -100px 0px' }
    );
  }

  getObserver(): IntersectionObserver {
    if (!this.observer) {
      this.observer = this.createObserver();
    }
    return this.observer;
  }

  observe(element: Element, callback: () => void): void {
    this.callbacks.set(element, callback);
    this.getObserver().observe(element);
  }

  unobserve(element: Element): void {
    this.callbacks.delete(element);
    if (this.observer) {
      this.observer.unobserve(element);
    }
  }
}

// Global singleton instance
const observerManager = new ScrollObserverManager();

// 'static' is what the server renders: fully visible, so content never waits on
// JS to appear. After hydration, only wrappers still below the fold switch to
// 'hidden' (off-screen, so no flash) and fade in once scrolled into view.
type Phase = 'static' | 'hidden' | 'shown';

export default function ScrollFadeIn({
  children,
  delay = 0,
  className = ''
}: ScrollFadeInProps) {
  const [phase, setPhase] = useState<Phase>('static');
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Already on screen (or scrolled past): leave it visible, no animation.
    if (element.getBoundingClientRect().top < window.innerHeight) return;

    setPhase('hidden');
    observerManager.observe(element, () => setPhase('shown'));

    return () => {
      observerManager.unobserve(element);
    };
  }, []);

  const animated = phase !== 'static';

  return (
    <div
      ref={ref}
      className={`${animated
        ? `transition-all duration-700 ease-out ${phase === 'shown' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`
        : ''
      } ${className}`}
      style={animated ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
