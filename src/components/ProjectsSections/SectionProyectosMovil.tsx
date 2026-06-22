import { useScrollAppear } from "../../hooks/useScrollAppear";

import ToolsIcon from "../../assets/Icons/ToolsIcon";
import MobileIcon from "../../assets/Icons/MobileIcon";
import ExpoIcon from "../../assets/Icons/ExpoIcon";
import ReactIcon from "../../assets/Icons/ReactIcon";
import TailwindIcon from "../../assets/Icons/TailwindIcon";
import JavaScriptIcon from "../../assets/Icons/JavaScriptIcon";

const SectionProyectosMovil = () => {
  const sectionRef = useScrollAppear();

  return (
    <>
      <section
        id="appsMovilProyectos"
        className="flex flex-col gap-6 text-left bg-[#31031e] -mx-20 px-32 py-20"
        ref={sectionRef}
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(480px,1fr))] gap-x-20 gap-y-7">
          <h1 className="scroll-appear scroll-left bg-[#fff4de] text-left lg:text-6xl text-7xl font-bold p-4 px-10 rounded-t-3xl rounded-bl-3xl text-[#31031e] break-words">
            CompleAppMe
          </h1>

          <h1 className="scroll-appear scroll-right bg-[#fff4de] text-right lg:text-6xl text-7xl font-bold p-4 px-10 rounded-t-3xl rounded-br-3xl text-[#31031e] break-words">
            SuperAppTe
          </h1>
        </div>

        <div className="scroll-appear flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between">
          <p className="bg-[#500c32] w-full lg:text-2xl text-4xl p-5 rounded-3xl text-[#fff4de] whitespace-pre-line">
            {`SuperAppTe y CompletAppMe son dos aplicaciones móviles en proceso de desarrollo para Android con React Native, Expo y JavaScript. 
            Aunque cada una tiene su propio propósito, las dos nacen de la misma idea: crear herramientas útiles para mi día a día, hechas a mi medida y pensadas para organizar mejor mis rutinas y mis aficiones. 
            Son proyectos personales, prácticos y en constante evolución, que voy ampliando según mis necesidades y las ideas que van surgiendo.\n
            SuperAppTe es una app para llevar un control rápido y ordenado de mis entrenamientos: ejercicios por grupo muscular, pesos y progreso, todo de forma sencilla y accesible.\n
            CompletAppMe es una app para organizar todo lo que quiero ver, leer o jugar. Libros, series, películas y videojuegos guardados por categorías, con lo pendiente y lo completado bien separado.`}
          </p>
        </div>

        <div className="flex flex-col mx-auto lg:gap-10 gap-[200px] lg:w-[60%] w-full py-5 lg:pb-15 rounded-3xl pb-[200px] relative">
          {/* SUBAPARTADO 1 */}
          <article className="flex flex-col gap-5 p-x scroll-appear scroll-left z-10">
            <h1 className="bg-[#500c32] mx-5 self-center text-center font-semibold lg:text-4xl text-5xl w-fit lg:p-3 p-4 px-4 rounded-2xl ">
              Función y objetivos del proyecto
            </h1>
            <div className="flex flex-row relative">
              <p className="lg:text-2xl lg:w-[80%] w-[100%] mx-auto text-4xl bg-[#fff4de] text-[#31031e] p-5 rounded-2xl whitespace-pre-line">
                {`El objetivo principal de estas aplicaciones es facilitarme la organización personal y el seguimiento de mis hábitos, ya sea en el gimnasio o en mi tiempo libre.
                  Ambas apps buscan ser herramientas prácticas, rápidas de usar y adaptadas exactamente a lo que necesito, sin funciones de más ni complicaciones.
                  Además, son proyectos que me permiten seguir aprendiendo y experimentando con desarrollo móvil, diseño de interfaces y nuevas funcionalidades que iré añadiendo con el tiempo.`}
              </p>

              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-4 rounded-full absolute xl:left-[-20%] lg:left-[-30%] left-[25%] lg:top-[-15%] top-[106%]">
                <MobileIcon className="lg:size-16 size-20 text-[#fff4de]" />
              </div>
              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-4 rounded-full absolute lg:left-[110%] lg:right-auto left-auto right-[20%] lg:top-[20%] top-[110%]">
                <ToolsIcon className="lg:size-16 size-20 text-[#fff4de]" />
              </div>
            </div>
          </article>
          {/* SUBAPARTADO 2 */}
          <article className="flex flex-col gap-5 scroll-appear scroll-right z-10">
            <h1 className="bg-[#500c32] mx-5 self-center text-center font-semibold lg:text-4xl text-5xl w-fit lg:p-3 p-4 px-4 rounded-2xl ">
              Lenguajes, Frameworks y otras tecnologías
            </h1>
            <div className="flex flex-row relative">
              <p className="lg:text-2xl lg:w-[80%] w-[100%] mx-auto text-4xl bg-[#fff4de] text-[#31031e] p-5 rounded-2xl whitespace-pre-line">
                {`Ambas aplicaciones están desarrolladas con: 
                • React Native y Expo como base y utilizando JavaScript como lenguaje principal.
                • Para el diseño y la maquetación uso Tailwind CSS (versión adaptada a React Native) y componentes personalizados.
                • También empleo pequeñas librerías para navegación, animaciones y gestión de estado, siempre buscando mantener el proyecto ligero, claro y fácil de mantener.`}
              </p>

              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-4 rounded-full absolute lg:left-[-35%] left-[25%] lg:top-[30%] top-[110%]">
                <ReactIcon className="lg:size-16 size-20 text-[#fff4de]" />
              </div>
              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-4 rounded-full absolute lg:left-[120%] lg:right-auto left-auto right-[25%] lg:top-[-30%] top-[115%]">
                <ExpoIcon className="lg:size-16 size-20 text-[#fff4de]" />
              </div>
            </div>
          </article>
          {/* SUBAPARTADO 3 */}
          <article className="flex flex-col gap-5 scroll-appear scroll-left z-10">
            <h1 className="bg-[#500c32] mx-5 self-center text-center font-semibold lg:text-4xl text-5xl w-fit lg:p-3 p-4 px-4 rounded-2xl ">
              Destacables del proyecto
            </h1>
            <div className="flex flex-row relative">
              <p className="lg:text-2xl lg:w-[80%] w-[100%] mx-auto text-4xl bg-[#fff4de] text-[#31031e] p-5 rounded-2xl whitespace-pre-line">
                {`Ambas aplicaciones tienen un diseño limpio y organizado, con pantallas intuitivas y una estructura clara para que todo esté a mano. 
                Cuentan con una evolución constante y un plan de desarrollo con varias ideas para futuro con nuevas funciones, mejor experiencia para el usuario y añadiendo cosas según las necesidades.
                Y, como en el resto de mis proyectos, todo está hecho por mí desde cero. La IA solo me ha acompañado en dudas puntuales, pero el desarrollo, el diseño y las decisiones son totalmente míos.`}
              </p>

              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-4 rounded-full absolute lg:left-[-25%] left-[25%] lg:top-[-10%] top-[110%]">
                <TailwindIcon className="lg:size-16 size-20 text-[#fff4de]" />
              </div>
              <div className="lg:bg-[#810d37] bg-[#500c32] lg:p-8 p-6 rounded-full absolute lg:left-[110%] lg:right-auto left-auto right-[25%] lg:top-[50%] top-[105%] ">
                <JavaScriptIcon className="lg:size-16 size-16 text-[#fff4de]" />
              </div>
            </div>
          </article>

          <div className=" scroll-appear absolute inset-0 lg:w-full w-[80%] mx-auto h-full top-[5px] rounded-4xl bg-[#810d37] z-0"></div>
        </div>
      </section>
    </>
  );
};

export default SectionProyectosMovil;
