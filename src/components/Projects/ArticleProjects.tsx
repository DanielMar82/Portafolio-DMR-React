import { Link } from "react-router";

const ArticleProjects = ({ ...props }) => {
  const { projectTitle, projectText, roundeClass, textClass } = props;

  return (
    <>
      <Link
        to={"/personal#CineSeries"}
        className={`cursor-grow bg-[#5459b8] shadow-[20px_10px_20px_rgba(0,0,0,0.3)] text-left p-6 ${roundeClass}`}
      >
        <h1 className={`text-3xl ${textClass}`}>{projectTitle}</h1>
        <p className="text-xl whitespace-pre-line">{projectText}</p>
      </Link>
    </>
  );
};
export default ArticleProjects;
