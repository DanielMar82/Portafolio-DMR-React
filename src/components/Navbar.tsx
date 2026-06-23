import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useLocation } from "react-router";

import HomeIcon from "../assets/Icons/HomeIcon";
import PersonalIcon from "../assets/Icons/PersonalIcon";
import ProyectosIcon from "../assets/Icons/ProyectosIcon";

// Componente Navbar que aparece arriba de la página

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

  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <main
        className={`
        fixed flex flex-col sm:flex-row sm:justify-around gap-9
        text-left text-[#000] lg:px-[50px] lg:pb-[30px] px-[40px] pb-[80px] lg:pt-[40px] pt-[150px] mt-10 w-full bg-[#fff4de] text-3xl z-40
        transition-transform duration-1500 ease-in-out
        ${open ? "translate-y-0" : "-translate-y-full"}
      `}
      >
        <button
          className="flex flex-col gap-3 items-center"
          onClick={() => goTo("/")}
        >
          <HomeIcon className="cursor-grow cursor-none lg:size-20 size-33 text-[#000000]" />
          <h2 className="font-medium lg:text-3xl lg:block hidden">Inicio</h2>
        </button>

        <button
          className="flex flex-col gap-3 items-center"
          onClick={() => goTo("/personal")}
        >
          <PersonalIcon className="cursor-grow cursor-none lg:size-20 size-33 text-[#000000]" />
          <h2 className="font-medium lg:text-3xl lg:block hidden">Personal</h2>
        </button>

        <button
          className="flex flex-col gap-3 items-center"
          onClick={() => goTo("/proyectos")}
        >
          <ProyectosIcon className="cursor-grow cursor-none lg:size-20 size-33 text-[#000000]" />
          <h2 className="font-medium lg:text-3xl lg:block hidden">Proyectos</h2>
        </button>
      </main>
    </>
  );
});
export default Navbar;
