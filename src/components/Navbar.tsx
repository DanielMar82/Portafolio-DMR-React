import { forwardRef, useImperativeHandle, useState } from "react";

import HomeIcon from "../assets/Icons/HomeIcon";
import PersonalIcon from "../assets/Icons/PersonalIcon";
import ProyectosIcon from "../assets/Icons/ProyectosIcon";

export type NavbarHandle = {
  toggle: () => void;
  open: () => void;
  close: () => void;
};

type NavbarProps = {
  goTo: (url: string) => void;
};

const Navbar = forwardRef<NavbarHandle, NavbarProps>(({ goTo }, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    toggle() {
      setOpen((prev) => !prev);
    },
    open() {
      setOpen(true);
    },
    close() {
      setOpen(false);
    },
  }));

  return (
    <>
      <main
        className={`
        fixed flex flex-col sm:flex-row sm:justify-around gap-9
        text-left text-[#000] lg:p-[50px] px-[40px] pb-[80px] lg:pt-[40px] pt-[150px] mt-10 w-full bg-[#fff4de] text-3xl z-40
        transition-transform duration-1500 ease-in-out
        ${open ? "translate-y-0" : "-translate-y-full"}
      `}
      >
        <button onClick={() => goTo("/")}>
          <HomeIcon className="cursor-grow cursor-pointer lg:size-20 size-40 text-[#000000]" />
        </button>

        <button onClick={() => goTo("/personal")}>
          <PersonalIcon className="cursor-grow cursor-pointer lg:size-20 size-40 text-[#000000]" />
          {/* <p>Personal</p> */}
        </button>
        <button onClick={() => goTo("/proyectos")}>
          <ProyectosIcon className="cursor-grow cursor-pointer lg:size-20 size-40 text-[#000000]" />
          {/* <p>Proyectos</p> */}
        </button>
      </main>
    </>
  );
});
export default Navbar;
