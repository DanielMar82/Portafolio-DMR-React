import IntroProjects from "../components/ProjectsSections/IntroProjects";
import SectionPortfolio from "../components/ProjectsSections/SectionPortfolio";
import SectionProyectosMovil from "../components/ProjectsSections/SectionProyectosMovil";
import { useScrollToHash } from "../hooks/useScrollToHash";

// Página Proyectos

const ProyectosPage = () => {
  useScrollToHash();

  return (
    <>
      <main className="flex flex-col gap-[400px] bg-fixed bg-linear-to-tr from-[#3e070f] to-[#651a42] px-20 pb-5 text-center pb-[200px]">
        <IntroProjects />

        <SectionPortfolio />

        <SectionProyectosMovil />
      </main>
    </>
  );
};
export default ProyectosPage;
