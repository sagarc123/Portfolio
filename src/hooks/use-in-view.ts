"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

type UseInViewOptions = {
  threshold?: number;
  triggerOnce?: boolean;
};

export const useInView = (options: UseInViewOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true } = options;
  const [inView, setInView] = useState(false);
  const nodeRef = useRef<Element | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback((node: Element | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (node) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else {
          if (!triggerOnce) {
            setInView(false);
          }
        }
      }, { threshold });

      observer.observe(node);
      observerRef.current = observer;
    }

    nodeRef.current = node;
  }, [threshold, triggerOnce]);

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { ref, inView };
};
