"use client";

import { useEffect, useRef, useState } from "react";

type Options = IntersectionObserverInit & {
  once?: boolean;
};

export function useInView<T extends HTMLElement>(options: Options = {}) {
  const {
    once = true,
    root = null,
    rootMargin = "0px 0px -15% 0px",
    threshold = 0.15,
  } = options;

  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { root, rootMargin, threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [root, rootMargin, threshold, once]);

  return { ref, inView };
}

export default useInView;