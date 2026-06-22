import { useEffect, useState } from "react";

import "./Cursor.css";

// Componente cursor que se mueve con el cursor del ordenador

const useHasHover = () => {
  const [hasHover, setHasHover] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setHasHover(mq.matches);

    const handler = (e: MediaQueryListEvent) => setHasHover(e.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  return hasHover;
};

const Cursor = () => {
  const hasHover = useHasHover();

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!hasHover) return;

    const cursor = document.querySelector(".cursorCustom") as HTMLElement;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".cursor-grow")) {
        cursor.classList.add("cursor-hover");
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".cursor-grow")) {
        cursor.classList.remove("cursor-hover");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, [hasHover]);

  if (!hasHover) return null;

  return (
    <div
      className="cursorCustom bg-[#fff4de] fixed mix-blend-difference pointer-events-none rounded-full"
      style={{
        zIndex: 9999,
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default Cursor;
