import { useEffect, useState } from "react";
import "./Cursor.css";

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
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
  }, []);

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
