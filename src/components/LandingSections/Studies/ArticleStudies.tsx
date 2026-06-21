const ArticleStudies = ({ ...props }) => {
  const { subtitle, text } = props;

  return (
    <>
      <article className="flex flex-col gap-3 bg-[#5459b8] text-left p-5 rounded-3xl shadow-[20px_10px_20px_rgba(0,0,0,0.3)]">
        <span className="bg-[#fff4de] text-[#030029] p-1 w-fit">
          <h2 className="lg:text-4xl text-5xl font-semibold">{subtitle}</h2>
        </span>
        <p className="lg:text-2xl text-4xl lg:leading-9 leading-14">{text}</p>
      </article>
    </>
  );
};
export default ArticleStudies;
