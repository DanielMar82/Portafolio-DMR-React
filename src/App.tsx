import "./App.css";

import { Route, Routes } from "react-router";
import { useEffect, useRef } from "react";

import InicioPage from "./routes/InicioPage";
import PersonalPage from "./routes/PersonalPage";
import ProyectosPage from "./routes/ProyectosPage";
import NotFoundPage from "./routes/NotFoundPage";

import Footer from "./components/Footer";
import Frame from "./components/Frame/Frame";
import type { FrameHandle } from "./components/Frame/Frame";
import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/Navbar";
import type { NavbarHandle } from "./components/Navbar";

import { useGoTo } from "./hooks/useGoTo";

function App() {
  const navbarRef = useRef<NavbarHandle>(null);
  const frameRef = useRef<FrameHandle>(null);

  const goTo = useGoTo(navbarRef, frameRef);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
  return (
    <>
      <Frame ref={frameRef} navbarRef={navbarRef} />

      <Navbar ref={navbarRef} goTo={goTo} />

      <Cursor />

      <Routes>
        <Route path="/" element={<InicioPage goTo={goTo} />}></Route>
        <Route path="/personal" element={<PersonalPage />}></Route>
        <Route path="/proyectos" element={<ProyectosPage />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer bgColor={"#fff4de"} textColor={"#03002a"} />
    </>
  );
}

export default App;
