import { useScrollAppear } from "../../../hooks/useScrollAppear";

import ArticleProjects from "./ArticleProjects";

const Projects = ({ goTo }) => {
  const projectsRef = useScrollAppear();

  return (
    <>
      <main className="flex flex-col gap-9 bg-[#030029] -mx-20 px-40 py-20 ">
        <section
          ref={projectsRef}
          className="scroll-appear grid grid-cols-2 gap-x-[100px] gap-y-[50px]"
        >
          <ArticleProjects
            projectTitle={"Portfolio web"}
            projectText={`Este portfolio es mi rincón en internet: un lugar donde reúno mis proyectos, mis ideas y mi forma de trabajar como desarrollador.\n
              Creado desde cero, con un estilo visual cuidado, secciones interactivas y una estructura con diseño responsive que funciona bien en gran variedad de pantallas.`}
            roundeClass={
              "rounded-4xl rounded-tr-none lg:rounded-bl-4xl lg:rounded-tr-4xl lg:rounded-br-none"
            }
            linkTo={"/proyectos#portfolioProyecto"}
            goTo={goTo}
          />

          <ArticleProjects
            projectTitle={"CompletAppMe"}
            projectText={`CompletAppMe es una App móvil diseñada para obtener una mejor gestión y organización personal en el ámbito de actividades de entretenimiento.\n
              Pensada para guardar un registro de libros, series, películas, videojuegos y más, todo por categorías, pudiendo lo pendiente y lo completado, además de añadir datos y prioridades cuando se necesite.`}
            roundeClass={
              "rounded-tr-4xl rounded-b-4xl lg:rounded-t-4xl lg:rounded-br-4xl lg:rounded-bl-none"
            }
            textClass={"text-right"}
            linkTo={"/proyectos#appsMovilProyectos"}
            goTo={goTo}
          />

          <h1 className="w-min p-10 rounded-3xl m-auto lg:text-6xl text-8xl font-bold lg:leading-13 leading-20 text-[#030029] bg-[#fff4de] lg:row-start-2 row-start-1 col-span-2 shadow-2xl">
            Mis proyectos
          </h1>

          <ArticleProjects
            projectTitle={"SuperAppTe"}
            projectText={`SuperAppTe es una App móvil pensada para tener un seguimiento rápido y organización personal en las distintas rutinas de gimnasio.\n
              Permite guardar distintos ejercicios por grupo muscular, registrar los pesos máximos de cada ejercicio y marcar el material necesario para realizar el ejercicio, todo en un mismo sitio y de forma cómoda.`}
            roundeClass={
              "rounded-b-4xl rounded-tl-4xl lg:rounded-tl-none lg:w-[50%] lg:col-span-2"
            }
            linkTo={"/proyectos#appsMovilProyectos"}
            goTo={goTo}
          />
        </section>
      </main>
    </>
  );
};
export default Projects;
