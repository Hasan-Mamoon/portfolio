'use client';

import { useState, useEffect, useRef } from 'react';

export function useInView(threshold: number = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsInView(entry.isIntersecting);
    },
    { threshold }
  );

  const element = ref.current; // copy once

  if (element) {
    observer.observe(element);
  }

  return () => {
    if (element) {
      observer.unobserve(element);
    }
  };
}, [threshold]);

  return { ref, isInView };
}