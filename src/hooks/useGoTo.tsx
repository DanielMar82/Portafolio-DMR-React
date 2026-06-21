import { useNavigate } from "react-router";
import type { RefObject } from "react";

import type { NavbarHandle } from "../components/Navbar";
import type { FrameHandle } from "../components/Frame/Frame";

// Hook para realizar cambio entre página con la animación de los Frame

export function useGoTo(
  navbarRef: RefObject<NavbarHandle | null>,
  frameRef: RefObject<FrameHandle | null>,
) {
  {
    const navigate = useNavigate();

    const goTo = (url: string, scrollTop: boolean = true) => {
      const cursor = document.querySelector(".cursorCustom");
      cursor?.classList.remove("cursor-hover");

      navbarRef.current?.close();
      frameRef.current?.close();

      setTimeout(() => {
        navigate(url);

        if (scrollTop) {
          window.scrollTo(0, 0);
        }

        frameRef.current?.open();
      }, 1000);
    };

    return goTo;
  }
}
