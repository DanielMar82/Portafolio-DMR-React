import ArticleStudies from "./ArticleStudies";

const SectionStudies = ({ ...props }) => {
  const { title, position, articles } = props;

  return (
    <>
      <section
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
            )
          )}
        </div>
        <div
          className={`mx-auto shadow-2xl bg-[#09235a] h-full top-[50px] rounded-[80px] inset-0 absolute z-0 ${
            position ? "left-[150px] w-[75%]" : "right-[170px] w-[85%]"
          }`}
        />
      </section>
    </>
  );
};

export default SectionStudies;
