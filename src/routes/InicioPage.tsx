import DownloadCv from "../components/DownloadCv";
import Intro from "../components/Intro";
import Projects from "../components/Projects/Projects";
import Studies from "../components/Studies/Studies";
const InicioPage = () => {
  // #020018
  // bg-linear-to-tl from-[#030029] to-[#160e7c]

  return (
    <>
      <main className="flex flex-col px-20 gap-[300px] bg-fixed bg-linear-to-tr from-[#030029] to-[#160e7c] text-center  lg:pt-[100px] pt-[250px] pb-[150px]">
        <Intro />

        <Studies />

        <Projects />

        <DownloadCv />

        {/* TODO: Trayectoria profesional??? Aqui??? */}
        {/* Camino de estudios, trabajos sobre programación, opinión del mundo de la programacion y la IA, lenguages/frameworks favoritos */}
      </main>
    </>
  );
};

export default InicioPage;
