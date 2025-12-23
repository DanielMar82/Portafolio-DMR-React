import {
  forwardRef,
  useImperativeHandle,
  useState,
  type RefObject,
} from "react";
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

  const color = "#fff4de";
  const year = new Date().getFullYear();

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
        <div onClick={openNavbar}>
          <ArrowIcon
            className={`
              cursor-grow cursor-pointer transition-transform ease-in-out duration-[1s] text-[#000000]
              ${navOpen ? "rotate-60" : "rotate-0"}
            `}
          />
        </div>
      </div>

      {/* Marco inferior */}
      <div
        className={`
    fixed bottom-0 left-0 w-full z-50 flex bg-[${color}]
    px-10 items-center
    ${
      isOpen ? "frame-top-open" : "frame-top-close"
    }  // puedes reutilizar la de top
  `}
      >
        <h2 className="text-left text-black text-[10px] font-semibold">
          © Daniel Martín Ruiz | {year}
        </h2>
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
