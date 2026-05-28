import SectionStudies from "./SectionStudies";

function Studies() {
  const articlesCursos = [
    {
      subtitle: "DAW",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia viverra vulputate. Mauris ante purus, tempor etsollicitudin in, pulvinar quis mauris.",
    },
    {
      subtitle: "DAM",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia viverra vulputate. Mauris ante purus, tempor etsollicitudin in, pulvinar quis mauris.",
    },
  ];

  const articlesConocimientos = [
    {
      subtitle: "Frontend",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia viverra vulputate. Mauris ante purus, tempor etsollicitudin in, pulvinar quis mauris.",
    },
    {
      subtitle: "Backend",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia viverra vulputate. Mauris ante purus, tempor etsollicitudin in, pulvinar quis mauris.",
    },
    {
      subtitle: "Bases de datos",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia viverra vulputate. Mauris ante purus, tempor etsollicitudin in, pulvinar quis mauris.",
    },
    {
      subtitle: "Desarrollo móvil",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia viverra vulputate. Mauris ante purus, tempor etsollicitudin in, pulvinar quis mauris.",
    },
    {
      subtitle: "IA",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia viverra vulputate. Mauris ante purus, tempor etsollicitudin in, pulvinar quis mauris.",
    },
  ];

  return (
    <>
      <main className=" flex flex-col bg-[#030029] -mx-20 px-28 pt-20 lg:pb-32 pb-[30%] gap-44 ">
        <SectionStudies
          title="Estudios cursados"
          position={true}
          articles={articlesCursos}
        />

        <SectionStudies
          title="Conocimientos en el ámbito"
          position={false}
          articles={articlesConocimientos}
        />
      </main>
    </>
  );
}

export default Studies;
