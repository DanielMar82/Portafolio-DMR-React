import { Link } from "react-router";

const ArticleProjects = ({ ...props }) => {
  const { projectTitle, projectText, roundeClass, textClass } = props;

  return (
    <>
      <Link
        to={"/personal#CineSeries"}
        className={`flex flex-col lg:col-span-1 col-span-2 cursor-grow cursor-none bg-[#5459b8] gap-4 text-left p-6 mx-auto shadow-[20px_10px_20px_rgba(0,0,0,0.3)] ${roundeClass}`}
      >
        <h1 className={`lg:text-4xl text-6xl font-semibold ${textClass}`}>
          {projectTitle}
        </h1>
        <p className="lg:text-xl text-4xl whitespace-pre-line">{projectText}</p>
      </Link>
    </>
  );
};
export default ArticleProjects;
