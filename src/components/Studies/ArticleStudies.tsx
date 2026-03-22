const ArticleStudies = ({ ...props }) => {
  const { subtitle, text } = props;

  return (
    <>
      <article className="flex flex-col gap-3 bg-[#5459b8] text-left p-5 rounded-3xl shadow-[20px_10px_20px_rgba(0,0,0,0.3)]">
        <span className="bg-[#fff4de] text-black font-semibold px-1 w-fit">
          <h2 className="lg:text-3xl text-5xl">{subtitle}TituloArt</h2>
        </span>{" "}
        <p className="lg:text-xl text-3xl">{text}TextoArt</p>
      </article>
    </>
  );
};
export default ArticleStudies;
