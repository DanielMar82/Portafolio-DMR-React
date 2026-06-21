import { useEffect } from "react";
import { useLocation } from "react-router";

// Hook que permite navegar entre páginas y mandarte al punto exacto del id asignado

export function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    window.scrollTo(0, 0);

    requestAnimationFrame(() => {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, [pathname, hash]);
}
