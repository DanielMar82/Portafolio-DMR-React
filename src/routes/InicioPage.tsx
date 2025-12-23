import Intro from "../components/Intro";
import Projects from "../components/Projects/Projects";
import Studies from "../components/Studies/Studies";
const InicioPage = () => {
  // #020018
  // bg-linear-to-tl from-[#030029] to-[#160e7c]
  return (
    <>
      <main className="bg-fixed bg-linear-to-tr from-[#030029] to-[#160e7c] flex flex-col gap-[400px] p-20 text-center pb-[200px]">
        <Intro />

        <Studies />

        <Projects />
      </main>
    </>
  );
};

export default InicioPage;
