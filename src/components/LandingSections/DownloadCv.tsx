import { useScrollAppear } from "../../hooks/useScrollAppear";

import DownloadIcon from "../../assets/Icons/DownloadIcon";

// Componente para descargar el CV

const handleDownload = () => {
  const link = document.createElement("a");

  link.href = "/CV_Daniel_Martin_Ruiz.pdf";
  link.download = "CV_Daniel_Martin_Ruiz.pdf";

  link.click();
};

const DownloadCv = () => {
  const DownloadRef = useScrollAppear();

  return (
    <>
      <main
        ref={DownloadRef}
        className="scroll-appear flex flex-col lg:gap-16 gap-20 py-20 lg:px-[10%]"
      >
        <h1 className="font-bold lg:text-6xl text-7xl">
          Guarda mi curriculum para futuras candicaturas
        </h1>

        <button
          onClick={handleDownload}
          className="group relative flex min-w-[380px] cursor-grow gap-6 cursor-none hover:scale-110 lg:text-3xl text-5xl items-center justify-center shadow-2xl transition-all duration-400 rounded-3xl px-10 py-5 bg-[#5459b8] mx-auto font-bold overflow-hidden"
        >
          <span className="transition-all duration-300 ease-in-out transform group-hover:-translate-x-10 group-hover:opacity-0">
            Descargar CV
          </span>

          <DownloadIcon className="lg:size-15 size-20 text-white transition-all duration-400 ease-in-out transform lg:group-hover:-translate-x-[170%] group-hover:-translate-x-[200%]" />
        </button>
      </main>
    </>
  );
};
export default DownloadCv;
