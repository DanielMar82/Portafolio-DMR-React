import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
  type RefObject,
} from "react";
import { useLocation } from "react-router";

import ArrowIcon from "../../assets/Icons/ArrowIcon";
import "./Frame.css";

type FrameProps = {
  navbarRef: RefObject<any>;
};

export type FrameHandle = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const Frame = forwardRef<FrameHandle, FrameProps>(({ navbarRef }, ref) => {
  const [navOpen, setNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const color = "#fff4de";
  const year = new Date().getFullYear();
  const location = useLocation();

  const getPageName = () => {
    switch (location.pathname) {
      case "/":
        return "INICIO";
      case "/personal":
        return "PERSONAL";
      case "/proyectos":
        return "PROYECTOS";
      default:
        return "ERROR";
    }
  };

  const openNavbar = () => {
    setNavOpen((prev) => !prev);
    navbarRef.current?.toggle();
  };

  useImperativeHandle(ref, () => ({
    open() {
      setIsOpen(true);
    },
    close() {
      setIsOpen(false);
    },
    toggle() {
      setIsOpen((prev) => !prev);
    },
  }));

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Marco superior */}
      <div
        className={`
    fixed top-0 left-0 w-full z-50 flex bg-[${color}]
    text-left px-[50px] items-center
    ${isOpen ? "frame-top-open" : "frame-top-close"}
  `}
      >
        <div
          onClick={openNavbar}
          className="flex flex-row gap-4 text-black text-xl justify-end"
        >
          <ArrowIcon
            className={`
              cursor-grow cursor-pointer transition-transform ease-in-out duration-[1s] text-[#000000]
              ${navOpen ? "rotate-60" : "rotate-0"}
            `}
          />
          <p>{getPageName()}</p>
        </div>
      </div>

      {/* Marco inferior */}
      <div
        className={`
    fixed bottom-0 left-0 w-full z-50 flex bg-[${color}]
    px-10 items-center justify-between
    ${
      isOpen ? "frame-top-open" : "frame-top-close"
    }  // puedes reutilizar la de top
  `}
      >
        <h2 className="text-left text-black text-[10px] font-semibold">
          © Daniel Martín Ruiz | {year}
        </h2>
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-grow cursor-pointer size-[40px] flex items-center justify-center transition-all duration-300"
          style={{
            WebkitMask: `conic-gradient(#000 ${
              scrollProgress * 360 + 0.1
            }deg, transparent 0deg)`,
            mask: `conic-gradient(#000 ${
              scrollProgress * 360 + 0.1
            }deg, transparent 0deg)`,
          }}
        >
          <ArrowIcon className="rotate-180 text-black size-[30px]" />
        </div>
      </div>

      {/* Marco izquierdo */}
      <div
        className={`
    fixed top-0 left-0 h-full z-50 bg-[${color}]
    ${isOpen ? "frame-side-open" : "frame-side-close"}
  `}
      />

      {/* Marco derecho */}
      <div
        className={`
    fixed top-0 right-0 h-full z-50 bg-[${color}]
    ${isOpen ? "frame-side-open" : "frame-side-close"}
  `}
      />
    </>
  );
});

export default Frame;
