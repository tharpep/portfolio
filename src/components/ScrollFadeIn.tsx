'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  startVisible?: boolean;
}

export default function ScrollFadeIn({ children, delay = 0, className = '', startVisible = false }: ScrollFadeInProps) {
  const [isVisible, setIsVisible] = useState(startVisible);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
