import { useEffect, useRef } from "react";

export const useScrollAppear = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 },
    );

    const container = containerRef.current;

    if (container) {
      // 1) Observar el contenedor si tiene scroll-appear
      if (container.classList.contains("scroll-appear")) {
        observer.observe(container);
      }

      // 2) Observar todos los hijos con scroll-appear
      const elements =
        container.querySelectorAll<HTMLElement>(".scroll-appear");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return containerRef;
};
