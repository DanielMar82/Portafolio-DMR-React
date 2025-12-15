import "../App.css";
import Intro from "../components/Intro";
import Projects from "../components/Projects/Projects";
import Studies from "../components/Studies/Studies";
const Inicio = () => {
  return (
    <>
      <main className=" bg-[#03002a] flex flex-col gap-[400px] p-20 text-center pb-[200px]">
        <Intro />

        <Studies />

        <Projects />
      </main>
    </>
  );
};

export default Inicio;
