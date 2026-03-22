import Intro from "../components/Intro";
import Projects from "../components/Projects/Projects";
import Studies from "../components/Studies/Studies";
const InicioPage = () => {
  // #020018
  // bg-linear-to-tl from-[#030029] to-[#160e7c]
  return (
    <>
      <main className="flex flex-col gap-[400px] bg-fixed bg-linear-to-tr from-[#030029] to-[#160e7c] text-center p-20 pb-[200px] lg:pt-[100px] pt-[250px]">
        <Intro />

        <Studies />

        <Projects />

        {/* TODO: Trayectoria profesional??? Aqui??? */}
        {/* Camino de estudios, trabajos sobre programación, opinión del mundo de la programacion y la IA, lenguages/frameworks favoritos */}
      </main>
    </>
  );
};

export default InicioPage;
