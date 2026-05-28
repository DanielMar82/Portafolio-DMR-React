import { Link } from "react-router";
import ReactIcon from "../../assets/Icons/ReactIcon";
import TailwindIcon from "../../assets/Icons/TailwindIcon";
import TypeScriptIcon from "../../assets/Icons/TypeScriptIcon";
import {
  WebIcon,
  MobileIcon,
  GithubIcon2,
} from "../../assets/Icons/ProjectsIcons";

const SectionProyectosMovil = () => {
  return (
    <>
      <section className="flex flex-col gap-6 text-left bg-[#31031e] -mx-20 px-32 py-20">
        <div className="flex lg:flex-row flex-col lg:gap-[10%] gap-7">
          <h1 className="bg-[#fff4de] w-full lg:text-6xl text-7xl p-4 px-10 rounded-t-3xl rounded-bl-3xl text-[#1b0311]">
            CompleAppMe
          </h1>
          <h1 className="bg-[#fff4de] w-full text-right lg:text-6xl text-7xl p-4 px-10 rounded-t-3xl rounded-br-3xl text-[#1b0311]">
            SuperAppTe
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between">
          <p className="bg-[#500c32] w-full lg:text-2xl text-4xl p-5 rounded-3xl text-[#fff4de] whitespace-pre-line">
            {`Dos aplicaciones móviles en fase de desarrollo, con un objetivo de uso personal para una mayor gestión de datos.
            Ambas aplicaciones son posible de utilizar en sistemas operativos Android e IOS, desarrolladas en ReactNative y Expo, con JavaScript como lenguaje.\n
            CompleAppMe es una aplicación que me ayuda en la gestión de datos de obras de entretenimiento, con esta aplicación puedo guardar los libros, series, peliculas y videojuegos que haya completado y los que quiero completar en un futuro.\n
            SuperAppTe es una aplicación donde guardo los pesos y ejercicios por grupo muscular que realizo en mis rutinas de gimnasio.\n
            Actualmente son aplicaciones móviles en desarrollo con objetivos sencillos pero cuento con planes a futuro para agrandarlas y poder hacerlas incluso como redes sociales.`}
          </p>

          {/* <div className="bg-[#500c32] p-4 rounded-full z-10 w-fit h-fit">
            <Link
              className="cursor-grow"
              to={"https://github.com/DanielMar82/Portafolio-DMR-React"}
              target="_blank"
            >
              <GithubIcon2 className="lg:size-11 size-20 text-[#ffffff] " />
            </Link>
          </div> */}
        </div>

        {/* SUBAPARTADOS: FUNCION Y OBJETIVOS DEL PROYECTO; FRAMEWORKS LENGUAJES Y OTRAS TECNOLOGÍAS; DESTACABLES DEL PROYECTO */}
        <div className="flex flex-col mx-auto lg:gap-10 gap-[200px] lg:w-[60%] w-full py-5 lg:pb-15 rounded-3xl pb-[200px] relative">
          {/* SUB 1 */}
          <article className="flex flex-col gap-5 z-10">
            <h1 className="bg-[#500c32] mx-auto lg:text-4xl text-5xl w-fit lg:p-2 p-4 px-4 rounded-2xl ">
              Función y objetivos del proyecto
            </h1>
            <div className="flex flex-row relative">
              <p className="lg:text-2xl lg:w-[80%] w-[100%] mx-auto text-4xl bg-[#fff4de] text-black p-5 rounded-2xl">
                La función principal de este proyecto es mostrar de lo que soy
                capaz de desarrollar, usando distintas tecnologías y lenguages
                que conozco y manejo con soltura, realizando diseños
                inteligentes y coherentes con significado pero llamativos y
                destacable.
              </p>

              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-3 rounded-[40%] absolute lg:left-[-30%] left-[25%] lg:top-[-28%] top-[110%]">
                <MobileIcon className="lg:size-16 size-24 text-[#fff4de]" />
              </div>
              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-3 rounded-[40%] absolute lg:left-[110%] lg:right-auto left-auto right-[25%] lg:top-[10%] top-[115%]">
                <WebIcon className="lg:size-16 size-24 text-[#fff4de]" />
              </div>
            </div>
          </article>

          <div className="absolute inset-0 lg:w-full w-[80%] mx-auto h-full top-[5px] rounded-4xl bg-[#810d37] z-0"></div>
        </div>
      </section>
    </>
  );
};

export default SectionProyectosMovil;
