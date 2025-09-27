'use client';

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useIntersection(options?: UseIntersectionOptions) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);
  const { triggerOnce, ...observerOptions } = options || {};

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (triggerOnce && targetRef.current) {
          observer.unobserve(targetRef.current);
        }
      } else if (!triggerOnce) {
        setIsIntersecting(false);
      }
    }, observerOptions);

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [options, triggerOnce]);

  return [targetRef, isIntersecting] as const;
}
