import SectionStudies from "./SectionStudies";

function Studies() {
  const articlesCursos = [
    {
      subtitle: "G.S. DAW",
      text: (
        <>
          Grado Superior en Desarrollo de Aplicaciones Web , con formación en
          lenguajes, frameworks,{" "}
          <span className="spanhighlight">diseño de interfaces</span>,{" "}
          <span className="spanhighlight">arquitectura web</span> y{" "}
          <span className="spanhighlight">desarrollo full‑stack</span>.
        </>
      ),
    },
    {
      subtitle: "G.S. DAM",
      text: (
        <>
          Grado Superior en Desarrollo de Aplicaciones Multiplataforma, con
          formación en lenguajes, frameworks,{" "}
          <span className="spanhighlight">diseño de software</span> y{" "}
          <span className="spanhighlight">
            desarrollo de aplicaciones de escritorio y móviles
          </span>
          .
        </>
      ),
    },
  ];

  const articlesConocimientos = [
    {
      subtitle: "Frontend",
      text: (
        <>
          Trabajo en desarrollo y diseño de interfaces, utilizando{" "}
          <span className="spanhighlight">
            JavaScript, TypeScript, HTML, CSS y Tailwind
          </span>
          , manejando frameworks orientados al frontend como{" "}
          <span className="spanhighlight">React, Next.js y Angular</span>.
        </>
      ),
    },
    {
      subtitle: "Backend",
      text: (
        <>
          Conocimiento en desarrollo backend y estructuración de aplicaciones,
          trabajando con lenguajes como{" "}
          <span className="spanhighlight">PHP, Java, C y C#</span>, y frameworks
          como{" "}
          <span className="spanhighlight">
            Symfony, .NET, ASP.NET y Node.js
          </span>
          .
        </>
      ),
    },
    {
      subtitle: "Bases de datos",
      text: (
        <>
          Experiencia en <span className="spanhighlight">lenguaje SQL</span> y
          en la gestión de bases de datos relacionales y no relacionales,
          utilizando sistemas como{" "}
          <span className="spanhighlight">MySQL, PostgreSQL, SQL Server</span> y
          herramientas de administración como phpMyAdmin, además de servicios en
          la nube como <span className="spanhighlight">Firebase</span>.
        </>
      ),
    },
    {
      subtitle: "Desarrollo móvil",
      text: (
        <>
          Conocimientos en desarrollo móvil, tanto en{" "}
          <span className="spanhighlight">
            entornos nativos con Java y Kotlin
          </span>{" "}
          como en{" "}
          <span className="spanhighlight">
            soluciones multiplataforma con React Native y Expo
          </span>
          , creando interfaces adaptadas a dispositivos móviles y trabajando con
          Android Studio como entorno de desarrollo.
        </>
      ),
    },
    {
      subtitle: "IA",
      text: (
        <>
          Uso y manejo de herramientas de Inteligencia Artificial aplicadas al
          desarrollo, utilizándolas como{" "}
          <span className="spanhighlight">
            apoyo para resolver dudas, depurar errores y optimizar procesos
          </span>
          . Trabajo con IA de forma responsable y orientada al aprendizaje,
          formulando preguntas precisas y coherentes, y con experiencia en{" "}
          <span className="spanhighlight">
            integración de APIs de IA en proyectos reales
          </span>
          .
        </>
      ),
    },
  ];

  return (
    <>
      <main className=" flex flex-col bg-[#030029] -mx-20 px-28 pt-20 lg:pb-32 pb-[20%] gap-44 ">
        <SectionStudies
          title="Formación"
          position={true}
          articles={articlesCursos}
        />

        <SectionStudies
          title="Conocimientos y habilidades"
          position={false}
          articles={articlesConocimientos}
        />
      </main>
    </>
  );
}

export default Studies;
