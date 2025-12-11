'use client';

import { useEffect, useRef, useState } from 'react';

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
              // Remove after triggering to prevent re-triggering
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

  disconnect(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
      this.callbacks.clear();
    }
  }
}

// Global singleton instance
const observerManager = new ScrollObserverManager();

export default function ScrollFadeIn({ children, delay = 0, className = '' }: ScrollFadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const callback = () => {
      setIsVisible(true);
    };

    observerManager.observe(element, callback);

    return () => {
      if (element) {
        observerManager.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
