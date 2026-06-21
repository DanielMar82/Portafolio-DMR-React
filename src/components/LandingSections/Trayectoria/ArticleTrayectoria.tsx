import { useScrollAppear } from "../../../hooks/useScrollAppear";

interface ArticleTrayectoriaProps {
  icon: React.ReactNode;
  trayectoriaText: string;
  className?: string;
  classNameIcon?: string;
  classNameText?: string;
}

const ArticleTrayectoria = ({
  trayectoriaText,
  icon,
  className = "",
  classNameIcon = "",
  classNameText = "",
}: ArticleTrayectoriaProps) => {
  const articleTrayectoriaRef = useScrollAppear();

  return (
    <>
      <article
        ref={articleTrayectoriaRef}
        className={`flex justify-between w-full ${className}`}
      >
        <div
          className={`p-4 bg-[#fff4de] rounded-full self-center shadow-[20px_10px_20px_rgba(0,0,0,0.3)] scroll-appear ${classNameIcon}`}
        >
          {icon}
        </div>

        <div
          className={`lg:w-[45%] w-[65%] h-fit self-center p-5 bg-[#fff4de] shadow-[20px_10px_20px_rgba(0,0,0,0.3)] scroll-appear ${classNameText}`}
        >
          <p className="text-black lg:text-2xl text-4xl text-left whitespace-pre-line">
            {trayectoriaText}
          </p>
        </div>
      </article>
    </>
  );
};
export default ArticleTrayectoria;
