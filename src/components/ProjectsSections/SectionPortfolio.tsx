import { Link } from "react-router";
import ReactIcon from "../../assets/Icons/ReactIcon";
import TailwindIcon from "../../assets/Icons/TailwindIcon";
import TypeScriptIcon from "../../assets/Icons/TypeScriptIcon";
import {
  WebIcon,
  MobileIcon,
  GithubIcon2,
} from "../../assets/Icons/ProjectsIcons";

const SectionPortfolio = () => {
  return (
    <>
      <section className="flex flex-col gap-6 text-left bg-[#31031e] -mx-20 px-32 py-20">
        <h1 className="bg-[#fff4de] lg:text-6xl text-7xl p-4 px-10 rounded-t-3xl rounded-br-3xl text-[#1b0311]">
          Portfolio Web
        </h1>
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between">
          <p className="bg-[#500c32] lg:w-[80%] w-full lg:text-2xl text-4xl p-5 rounded-3xl text-[#fff4de] whitespace-pre-line">
            {`Mi portfolio web, es decir este conjunto de páginas por las que estas navegando ahora.\n
            Como todo programador con conocimientos en desarrollo web debe tener su portfolio web, una página web donde se habla de lo conocimientos y experiencia que uno tiene en el ámbito del desarrollo y la programación.\n
            Mi portfolio destaca por un diseño minimalista, ordenado y con cohesión, lleno de colores radiantes y elegantes, con un diseño apto a muchos tipos de pantallas, tanto para monitores grandes como para pantallas de móviles.`}
          </p>

          <div className="bg-[#500c32] p-4 rounded-full z-10 w-fit h-fit">
            <Link
              className="cursor-grow"
              to={"https://github.com/DanielMar82/Portafolio-DMR-React"}
              target="_blank"
            >
              <GithubIcon2 className="lg:size-11 size-20 text-[#ffffff] " />
            </Link>
          </div>
        </div>

        {/* SUBAPARTADOS: FUNCION Y OBJETIVOS DEL PROYECTO; FRAMEWORKS LENGUAJES Y OTRAS TECNOLOGÍAS; DESTACABLES DEL PROYECTO */}
        <div className="flex flex-col lg:gap-10 gap-[200px] lg:w-[60%] w-full py-5 lg:pb-15 rounded-3xl pb-[200px] relative">
          {/* SUB 1 */}
          <article className="flex flex-col gap-5 z-10">
            <h1 className="bg-[#500c32] lg:text-4xl text-5xl w-fit lg:p-2 p-4 px-4 rounded-2xl ">
              Función y objetivos del proyecto
            </h1>
            <div className="flex flex-row relative">
              <p className="lg:text-2xl text-4xl lg:ml-[150px] bg-[#fff4de] text-black p-5 rounded-2xl">
                La función principal de este proyecto es mostrar de lo que soy
                capaz de desarrollar, usando distintas tecnologías y lenguages
                que conozco y manejo con soltura, realizando diseños
                inteligentes y coherentes con significado pero llamativos y
                destacable.
              </p>

              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-3 rounded-[40%] absolute lg:right-[-30%] lg:left-auto left-[25%] lg:top-[-28%] top-[110%]">
                <MobileIcon className="lg:size-16 size-24 text-[#fff4de]" />
              </div>
              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-3 rounded-[40%] absolute lg:right-[-60%] right-[25%] lg:top-[10%] top-[115%]">
                <WebIcon className="lg:size-16 size-24 text-[#fff4de]" />
              </div>
            </div>
          </article>
          {/* SUB 2 */}
          <article className="flex flex-col gap-5 z-10">
            <h1 className="bg-[#500c32] lg:text-4xl text-5xl w-fit lg:p-2 p-4 px-4 rounded-2xl ">
              Lenguajes, Frameworks y otras tecnologías
            </h1>
            <div className="flex flex-row relative">
              <p className="lg:text-2xl text-4xl lg:ml-[150px] bg-[#fff4de] text-black p-5 rounded-2xl">
                Para este proyecto he usado distintos lenguages como TypeScript,
                HTML5 y css, como principal Framework React y Vite, y otras
                cosas a destacar es el uso y manejo de Tailwind y uso de iconos
                svg.
              </p>

              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-3 rounded-[40%] absolute lg:right-[-30%] lg:top-[-28%] top-[108%] lg:left-auto left-[20%] ">
                <ReactIcon className="lg:size-16 size-24 text-[#fff4de]" />
              </div>
              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-6 rounded-[40%] absolute lg:right-[-60%] lg:top-[10%] top-[125%] right-[40%]">
                <TypeScriptIcon className="lg:size-16 size-18 text-[#fff4de]" />
              </div>
              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-3 rounded-[40%] absolute lg:right-[-45%] lg:top-[80%] top-[112%] right-[20%]">
                <TailwindIcon className="lg:size-16 size-24 text-[#fff4de]" />
              </div>
            </div>
          </article>
          {/* SUB 3 */}
          <article className="flex flex-col gap-5 z-10">
            <h1 className="bg-[#500c32] lg:text-4xl text-5xl w-fit lg:p-2 p-4 px-4 rounded-2xl ">
              Destacables del proyecto
            </h1>
            <div className="flex flex-row relative">
              <p className="lg:text-2xl text-4xl lg:ml-[150px] bg-[#fff4de] text-black p-5 rounded-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse pulvinar ipsum sed nisi fringilla, ut lobortis nisl
                congue. In euismod, ipsum ut mollis placerat, metus dolor
                faucibus massa, eget laoreet diam lacus sit amet dui. Nulla
                aliquet ipsum eu porta euismod. Cras pretium, odio et laoreet
                luctus, leo tellus rutrum metus,
              </p>

              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-3 rounded-[40%] absolute lg:right-[-30%] lg:left-auto left-[20%]  lg:top-[-28%] top-[115%]">
                <ReactIcon className="lg:size-16 size-24 text-[#fff4de]" />
              </div>
              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-3 rounded-[40%] absolute lg:right-[-45%] right-[20%]  lg:top-[80%] top-[105%]">
                <TailwindIcon className="lg:size-16 size-24 text-[#fff4de]" />
              </div>
            </div>
          </article>

          <div className="absolute inset-0 lg:w-full w-[80%] h-full top-[5px] left-[80px] rounded-4xl bg-[#810d37] z-0"></div>
        </div>
      </section>
    </>
  );
};

export default SectionPortfolio;
