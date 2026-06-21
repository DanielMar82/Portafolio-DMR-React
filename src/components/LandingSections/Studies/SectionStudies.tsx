import ArticleStudies from "./ArticleStudies";

import { useScrollAppear } from "../../../hooks/useScrollAppear";

const SectionStudies = ({ ...props }) => {
  const { title, position, articles } = props;

  const sectionRef = useScrollAppear();

  return (
    <>
      <section
        ref={sectionRef}
        className={`scroll-appear flex relative flex-col justify-center lg:gap-14 lg:items-center text-left z-10 ${
          position
            ? "lg:flex-row items-start scroll-left"
            : "lg:flex-row-reverse items-end scroll-right"
        }`}
      >
        <h1
          className={`text-[#030029] lg:text-6xl text-8xl w-min font-bold bg-[#fff4de] p-5 rounded-t-[50px] z-10 shadow-[20px_10px_20px_rgba(0,0,0,0.3)] ${
            position ? "rounded-bl-[50px]" : "rounded-br-[50px]"
          }`}
        >
          {title}
        </h1>
        <div className="lg:border-l-2 lg:border-t-0 border-t-2 border-gray-300 my-9 self-stretch z-10 shadow-2xl lg:w-0 w-[20%] lg:mx-0 mx-auto" />

        <div className="flex flex-col gap-6 lg:w-[50%] w-[90%] z-10">
          {articles.map(
            (article: { subtitle: string; text: string }, index: number) => (
              <>
                <ArticleStudies
                  key={index}
                  subtitle={article.subtitle}
                  text={article.text}
                />

                {index < articles.length - 1 && (
                  <div className="border-t-2 border-gray-300 my-3 w-[70%] mx-auto"></div>
                )}
              </>
            ),
          )}
        </div>
        <div
          className={`mx-auto shadow-2xl bg-[#09235a] w-[80%] h-full lg:top-[50px] top-[80px] rounded-[80px] inset-0 absolute z-0 ${
            position ? "left-[170px]" : "right-[120px]"
          }`}
        />
      </section>
    </>
  );
};

export default SectionStudies;
