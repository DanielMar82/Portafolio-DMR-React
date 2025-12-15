import { useEffect, useState } from "react";
import "./Cursor.css";

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="cursorCustom bg-[#fff4de] fixed mix-blend-difference pointer-events-none size-7 rounded-full"
        style={{
          zIndex: 9999,
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};
export default Cursor;
