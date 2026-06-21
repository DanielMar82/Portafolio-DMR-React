import DownloadCv from "../components/LandingSections/DownloadCv";
import IntroLanding from "../components/LandingSections/IntroLanding";
import Trayectoria from "../components/LandingSections/Trayectoria/Trayectoria";
import Projects from "../components/LandingSections/Projects/Projects";
import Studies from "../components/LandingSections/Studies/Studies";

// Página Landing/Inicial

const InicioPage = ({ goTo }) => {
  return (
    <>
      <main className="flex flex-col px-20 gap-[300px] bg-fixed bg-linear-to-tr from-[#030029] to-[#160e7c] text-center 2xl:pt-[80px] lg:pt-[60px] pt-[180px] pb-[150px]">
        <IntroLanding />

        <Studies />

        <Trayectoria />

        <Projects goTo={goTo} />

        <DownloadCv />
      </main>
    </>
  );
};

export default InicioPage;
