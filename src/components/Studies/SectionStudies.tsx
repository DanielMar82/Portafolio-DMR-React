import ArticleStudies from "./ArticleStudies";

const SectionStudies = ({ ...props }) => {
  const { title, position, articles } = props;

  return (
    <>
      {/* <section
        className={`flex relative justify-center gap-14 items-center text-left z-10 ${
          position ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <h1
          className={`text-[#09235a] text-5xl shadow-[20px_10px_20px_rgba(0,0,0,0.3)] w-min z-10 bg-[#fff4de] p-5 rounded-t-[50px] ${
            position ? "rounded-bl-[50px]" : "rounded-br-[50px]"
          }`}
        >
          {title}
        </h1>
        <div className="border-l-2 border-gray-300 my-9 self-stretch z-10 shadow-2xl" />

        <div className="flex flex-col gap-6 w-[50%] z-10">
          {articles.map(
            (article: { subtitle: string; text: string }, index: number) => (
              <>
                <ArticleStudies
                  key={index}
                  subtitle={article.subtitle}
                  text={article.text}
                />

                {index < articles.length - 1 && (
                  <div className="border-t-2 border-gray-300 my-3 w-[80%] mx-auto"></div>
                )}
              </>
            ),
          )}
        </div>
        <div
          className={`mx-auto shadow-2xl bg-[#09235a] h-full top-[50px] rounded-[80px] inset-0 absolute z-0 ${
            position ? "left-[150px] w-[75%]" : "right-[170px] w-[85%]"
          }`}
        />
      </section> */}

      <section
        className={`flex relative flex-col justify-center lg:gap-14 lg:items-center text-left z-10 ${
          position ? "lg:flex-row items-start" : "lg:flex-row-reverse items-end"
        }`}
      >
        <h1
          className={`text-[#09235a] lg:text-5xl text-7xl w-min bg-[#fff4de] p-5 rounded-t-[50px] z-10 shadow-[20px_10px_20px_rgba(0,0,0,0.3)] ${
            position ? "rounded-bl-[50px]" : "rounded-br-[50px]"
          }`}
        >
          {title}Titulo1
        </h1>
        <div className="lg:border-l-2 lg:border-t-0 border-t-2 border-gray-300 my-9 self-stretch z-10 shadow-2xl lg:w-0 w-[20%] lg:mx-0 mx-auto" />

        <div className="flex flex-col gap-6 lg:w-[50%] w-[80%] z-10">
          {articles.map(
            (article: { subtitle: string; text: string }, index: number) => (
              <>
                <ArticleStudies
                  key={index}
                  subtitle={article.subtitle}
                  text={article.text}
                />

                {index < articles.length - 1 && (
                  <div className="border-t-2 border-gray-300 my-3 w-[80%] mx-auto"></div>
                )}
              </>
            ),
          )}
        </div>
        <div
          className={`mx-auto shadow-2xl bg-[#09235a] w-[85%] h-full lg:top-[50px] top-[8%] rounded-[80px] inset-0 absolute z-0 ${
            position ? "left-[170px]" : "right-[120px]"
          }`}
        />
      </section>
    </>
  );
};

export default SectionStudies;
