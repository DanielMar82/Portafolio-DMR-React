import ArticleProjects from "./ArticleProjects";

const Projects = () => {
  return (
    <>
      <main className="flex flex-col gap-9">
        <section className="grid grid-cols-2 gap-x-[100px] gap-y-[50px]">
          <ArticleProjects
            projectTitle={"Portfolio web"}
            projectText={`Página web donde compilo los proyectos que he ido realizando y cuento datos sobre mí como persona.\n
              Desarrollado con TypeScript y con los frameworks de React.js y Next.js, combinando estilos css con Tailwind css para crear distintas animaciones y un gran diseño.`}
            roundeClass={
              "rounded-4xl rounded-tr-none lg:rounded-bl-4xl lg:rounded-tr-4xl lg:rounded-br-none"
            }
          />

          <ArticleProjects
            projectTitle={"CompletAppMe"}
            projectText={`Aplicación móvil diseñada para para la gestión y organización personal de actividades de entretenimiento.\n
              CompletAppMe es una aplicación en la que puedes guardar un registro de libros, series, videojuegos y más cosas para completar, pudiendo dar prioridad, marcar como completado o añadir datos varios.`}
            roundeClass={
              "rounded-tr-4xl rounded-b-4xl lg:rounded-t-4xl lg:rounded-br-4xl lg:rounded-bl-none"
            }
            textClass={"text-right"}
          />

          <div className="lg:row-start-2 row-start-1 col-span-2 shadow-2xl lg:text-5xl text-8xl w-min m-auto text-[#09235a] rounded-3xl bg-[#fff4de] p-10">
            Mis proyectos
          </div>

          <ArticleProjects
            projectTitle={"SuperAppTe"}
            projectText={`Aplicación móvil diseñada para la organización y seguimiento personal de ejercicios y pesos máximos en el gimnasio.\n
              SuperAppTe es una aplicación en la que puedes guardar los distintos ejercicios para cada grupo muscular y donde puedes hacer un seguimiento de los pesos máximos de ese ejercicio.                                       `}
            roundeClass={
              "rounded-b-4xl rounded-tl-4xl lg:rounded-tl-none lg:w-[50%] lg:col-span-2"
            }
          />
        </section>
      </main>

      {/* <main className="flex flex-row text-left px-2 gap-14">
        <section className="flex flex-col px-8 gap-40 rounded-4xl ">
          <article className="flex flex-col gap-5 bg-[#5459b8] relative p-4 rounded-4xl">
            <h1 className="text-4xl">Proyecto</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt quis nisl eget egestas. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
          </article>
          <article className="flex flex-col gap-5 bg-[#5459b8] rounded-4xl p-4">
            <h1 className="text-4xl">Proyecto</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt quis nisl eget egestas. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
          </article>
          <article className="flex flex-col gap-5 bg-[#5459b8] rounded-4xl p-4">
            <h1 className="text-4xl">Proyecto</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt quis nisl eget egestas. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
          </article>
        </section>
        <div className="flex flex-col">
          <h1 className="text-6xl text-center bg-[#fff4de] text-[#09235a] p-9 rounded-t-[50px] rounded-br-[50px]">
            Mis proyectos
          </h1>
          <section className="flex flex-col p-8 gap-40  rounded-4xl mt-[60px]">
            <article className="flex flex-col gap-5 bg-[#5459b8] p-4 rounded-4xl">
              <h1 className="text-4xl">Proyecto</h1>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt quis nisl eget egestas. Vestibulum ante ipsum primis
                in faucibus orci luctus et ultrices posuere cubilia curae;
              </p>
            </article>
            <article className="flex flex-col gap-5 bg-[#5459b8] rounded-4xl p-4">
              <h1 className="text-4xl">Proyecto</h1>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt quis nisl eget egestas. Vestibulum ante ipsum primis
                in faucibus orci luctus et ultrices posuere cubilia curae;
              </p>
            </article>
            <article className="flex flex-col gap-5 bg-[#5459b8] rounded-4xl p-4">
              <h1 className="text-4xl">Proyecto</h1>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt quis nisl eget egestas. Vestibulum ante ipsum primis
                in faucibus orci luctus et ultrices posuere cubilia curae;
              </p>
            </article>
          </section>
        </div>
      </main> */}
    </>
  );
};
export default Projects;

{
  /* <img src="public\ImgPruebas.png" alt="" className="absolute h-36 " /> */
}
