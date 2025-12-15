import { Route, Routes } from "react-router";
import "./App.css";

import Inicio from "./routes/Inicio";
import NotFound from "./routes/NotFound";
import SobreMi from "./routes/SobreMi";

import Footer from "./components/Footer";
import Frame from "./components/Frame/Frame";
import Cursor from "./components/Cursor/Cursor";

function App() {
  return (
    <>
      <Frame />

      <Cursor />

      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/sobremi" element={<SobreMi />}></Route>
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/proyectos" element={<Proyectos />}></Route>  PROYECTOS*/}
      </Routes>

      <Footer bgColor={"#fff4de"} textColor={"#03002a"} />
    </>
  );
}

export default App;
