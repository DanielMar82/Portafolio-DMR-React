import "./App.css";

import { Route, Routes, useNavigate } from "react-router";
import { useRef } from "react";

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

function App() {
  const navbarRef = useRef<NavbarHandle>(null);
  const frameRef = useRef<FrameHandle>(null);

  const navigate = useNavigate();

  const goTo = (url: string) => {
    navbarRef.current?.close();
    frameRef.current?.close();

    setTimeout(() => {
      navigate(url);
      frameRef.current?.open();
    }, 1000);
  };

  return (
    <>
      <Frame ref={frameRef} navbarRef={navbarRef} />

      <Navbar ref={navbarRef} goTo={goTo} />

      <Cursor />

      <Routes>
        <Route path="/" element={<InicioPage />}></Route>
        <Route path="/personal" element={<PersonalPage />}></Route>
        <Route path="/proyectos" element={<ProyectosPage />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer bgColor={"#fff4de"} textColor={"#03002a"} />
    </>
  );
}

export default App;
