import { Link } from "react-router";

import { useScrollAppear } from "../../hooks/useScrollAppear";

import ReactIcon from "../../assets/Icons/ReactIcon";
import TailwindIcon from "../../assets/Icons/TailwindIcon";
import TypeScriptIcon from "../../assets/Icons/TypeScriptIcon";
import WebIcon from "../../assets/Icons/WebIcon";
import MobileIcon from "../../assets/Icons/MobileIcon";
import GithubCircleIcon from "../../assets/Icons/GithubCircleIcon";

const SectionPortfolio = () => {
  const sectionRef = useScrollAppear();
  return (
    <>
      <section
        id="portfolioProyecto"
        className="flex flex-col gap-6 text-left bg-[#31031e] -mx-20 px-32 py-20"
        ref={sectionRef}
      >
        <h1 className="scroll-appear scroll-right bg-[#fff4de] lg:text-6xl text-7xl font-bold p-4 px-10 rounded-t-3xl rounded-br-3xl text-[#31031e]">
          Portfolio Web
        </h1>
        <div className="scroll-appear flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between">
          <p className="bg-[#500c32] lg:w-[80%] w-full lg:text-2xl text-4xl p-5 rounded-3xl text-[#fff4de] whitespace-pre-line">
            {`Este es mi portfolio web, el conjunto de páginas por las que estás navegando en este instante.
            Aquí es donde recopilo mis proyectos, mis ideas y un poco de quién soy como desarrollador.\n
            Todo programador necesita un sitio donde mostrar lo que desarrolla, y este es el mío:
            un espacio hecho con cariño, con un diseño limpio y colorido, pensado para que sea agradable de ver y sencillo de recorrer, tanto en pantallas grandes como en móviles.`}
          </p>

          <div className="bg-[#500c32] p-4 rounded-full z-10 w-fit h-fit">
            <Link
              className="cursor-grow"
              to={"https://github.com/DanielMar82/Portafolio-DMR-React"}
              target="_blank"
            >
              <GithubCircleIcon className="lg:size-11 size-20 text-[#ffffff] " />
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:gap-10 gap-[200px] lg:w-[60%] w-full py-5 lg:pb-15 rounded-3xl pb-[200px] relative">
          {/* SUB 1 */}
          <article className="flex flex-col gap-5 scroll-appear scroll-left z-10">
            <h1 className="bg-[#500c32] lg:text-4xl text-5xl lg:self-start self-center text-center font-semibold w-fit lg:p-3 p-4 px-4 rounded-2xl ">
              Función y objetivos del proyecto
            </h1>
            <div className="flex flex-row relative">
              <p className="lg:text-2xl text-4xl lg:ml-[150px] bg-[#fff4de] text-[#31031e] p-5 rounded-2xl">
                {`El objetivo principal de este proyecto es enseñar mi nivel como desarrollador web: cómo trabajo, qué tecnologías manejo y cómo me gusta construir y organizar la arquitectura. 
                También funciona como un “diario de proyectos”, donde voy dejando lo que ya he hecho y lo que iré creando en el futuro.`}
              </p>

              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-4 rounded-full absolute xl:right-[-36%] lg:right-[-40%] lg:left-auto left-[25%] lg:top-[-28%] top-[110%]">
                <MobileIcon className="lg:size-16 size-20 text-[#fff4de]" />
              </div>
              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-4 rounded-full absolute lg:right-[-65%] right-[25%] lg:top-[30%] top-[115%]">
                <WebIcon className="lg:size-16 size-20 text-[#fff4de]" />
              </div>
            </div>
          </article>
          {/* SUB 2 */}
          <article className="flex flex-col gap-5 scroll-appear scroll-left z-10">
            <h1 className="bg-[#500c32] lg:text-4xl text-5xl lg:self-start self-center text-center font-semibold w-fit lg:p-3 p-4 px-4 rounded-2xl ">
              Lenguajes, Frameworks y otras tecnologías
            </h1>
            <div className="flex flex-row relative">
              <p className="lg:text-2xl text-4xl lg:ml-[150px] bg-[#fff4de] text-[#31031e] p-5 rounded-2xl whitespace-pre-line">
                {`Este portfolio está hecho con: 
                • React, Vite y TypeScript como base y en distintas funciones. 
                • Tailwind CSS para el diseño y la maquetación. 
                • Y, por supuesto, HTML5 y CSS, que nunca faltan en los proyectos web.\n
                Además, he usado pequeñas utilidades para animaciones y detalles visuales que le dan vida a la página.`}
              </p>

              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-3 rounded-full absolute lg:right-[-40%] lg:top-[70%] top-[108%] lg:left-auto left-[20%] ">
                <ReactIcon className="lg:size-16 size-24 text-[#fff4de]" />
              </div>
              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-6 rounded-full absolute lg:right-[-60%] lg:top-[10%] top-[110%] right-[20%]">
                <TypeScriptIcon className="lg:size-16 size-18 text-[#fff4de]" />
              </div>
            </div>
          </article>
          {/* SUB 3 */}
          <article className="flex flex-col gap-5 scroll-appear scroll-left z-10">
            <h1 className="bg-[#500c32] lg:text-4xl text-5xl lg:self-start self-center text-center font-semibold w-fit lg:p-3 p-4 px-4 rounded-2xl ">
              Destacables del proyecto
            </h1>
            <div className="flex flex-row relative">
              <p className="lg:text-2xl text-4xl lg:ml-[150px] bg-[#fff4de] text-[#31031e] p-5 rounded-2xl whitespace-pre-line">
                {`Entre los destacables del proyecto se encuentran: 
                • Diseño totalmente responsive, para una buena experiencia en cualquier pantalla.
                • Apartados interactivos que añaden una dinámica más entretenida.
                • Estilo colorido y llamativo, pero ordenado y fácil de seguir.
                • Estructura clara e intuitiva, para que navegar sea cómodo.
                • Todo el proyecto esta hecho por mi, desde cero, sin una generación entera hecha con IA, usada unicamente para problemas puntuales y fallos.`}
              </p>

              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-3 rounded-full absolute lg:right-[-55%] lg:top-[30%] top-[108%] right-[40%]">
                <TailwindIcon className="lg:size-16 size-24 text-[#fff4de]" />
              </div>
            </div>
          </article>

          <div className="scroll-appear absolute inset-0 lg:w-full w-[80%] h-full top-[5px] lg:left-20 mx-auto rounded-4xl bg-[#810d37] z-0"></div>
        </div>
      </section>
    </>
  );
};

export default SectionPortfolio;
