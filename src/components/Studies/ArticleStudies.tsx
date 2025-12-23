const ArticleStudies = ({ ...props }) => {
  const { subtitle, text } = props;

  return (
    <>
      <article className="shadow-[20px_10px_20px_rgba(0,0,0,0.3)] flex flex-col gap-3 text-left bg-[#5459b8] p-5 rounded-3xl">
        <h2 className="text-3xl">{subtitle}</h2>
        <p className="text-xl">{text}</p>
      </article>
    </>
  );
};
export default ArticleStudies;
