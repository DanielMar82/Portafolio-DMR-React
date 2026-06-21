import { useScrollAppear } from "../../hooks/useScrollAppear";

const SectionVideojuegos = () => {
  const sectionRef = useScrollAppear();

  return (
    <>
      {/* APARTADO VIDEOJUEGOS */}
      <section
        ref={sectionRef}
        className="flex flex-col gap-8 justify-between p-10"
      >
        <h1 className="scroll-appear xl:text-7xl text-8xl text-left font-bold text-[#021b07] bg-[#fff4de] lg:p-4 p-7 w-fit self-start shadow-2xl rounded-t-3xl rounded-bl-3xl">
          Videojuegos
        </h1>

        <div className="flex flex-row justify-between">
          <article className="flex flex-col gap-10 lg:w-[50%] w-[80%]">
            <p className="scroll-appear bg-[#fdff9a] 2xl:w-[90%] lg:w-[80%] w-full h-fit p-5 rounded-4xl text-[#021b07] text-left lg:text-2xl text-4xl shadow-2xl whitespace-pre-line z-30">
              {`Los videojuegos son mi forma favorita de vivir historias.\n
              Disfruto de juegos exigentes y que requieren paciencia como Bloodborne o Sekiro, aventuras épicas y divertidas como las sagas de God of war y The legend of Zelda o de historias complejas con mayor peso narrativo como The last of Us o Metal Gear Solid: Snake eater.\n
              Siempre me gusta volver a los juegos de mi infancia con los que me adentre en este mundillo como lo son los juegos de la Nintendo DS.`}
            </p>
            <div className="lg:flex 2xl:flex-row flex-col items-end gap-[4%] hidden relative w-fit">
              <div className="scroll-appear scroll-left bg-[url('/personalImages/videojuegos/ImgVideojuego4.jpg')] bg-cover bg-center rounded-3xl lg:w-[250px] lg:h-[350px] w-[350px] h-[450px] lg:top-[480px] lg:left-[-120px] top-[810px] left-[100px] shadow-[20px_20px_30px_rgba(0,0,0,0.25)] z-20"></div>
              <div className="scroll-appear scroll-left bg-[url('/personalImages/videojuegos/ImgVideojuego6.jpg')] bg-cover bg-center rounded-3xl lg:w-[450px] lg:h-[250px] w-[680px] h-[340px] top-[1030px] lg:top-[480px] lg:left-[-620px] left-[-350px] lg:visible invisible shadow-[20px_20px_30px_rgba(0,0,0,0.25)] z-20"></div>

              <div className="scroll-appear scroll-left bg-[#fdff9a] align-middle rounded-[80px] w-[110%] h-[70%] mx-auto self-center shadow-2xl inset-0 absolute z-0" />
            </div>
          </article>

          {/* COLLAGE MOVIL */}
          <article className="lg:hidden flex flex-col w-full h-[300px] relative">
            <div className="scroll-appear scroll-right bg-[url('/personalImages/videojuegos/ImgVideojuego1.jpg')] bg-cover bg-center rounded-3xl lg:w-[250px] lg:h-[350px] w-[300px] h-[500px] lg:top-[70px] lg:left-[180px] top-[30px] left-[30px] shadow-[20px_20px_30px_rgba(0,0,0,0.25)] inset-0 absolute z-20"></div>
            <div className="scroll-appear scroll-right bg-[url('/personalImages/videojuegos/ImgVideojuego2.jpg')] bg-cover bg-center rounded-3xl lg:w-[420px] lg:h-[250px] w-[650px] h-[380px] lg:top-[70px] lg:left-[480px] top-[480px] left-[-180px] shadow-[20px_20px_30px_rgba(0,0,0,0.25)] inset-0 absolute z-10"></div>
            <div className="scroll-appear bg-[url('/personalImages/videojuegos/ImgVideojuego4.jpg')] bg-cover bg-center rounded-3xl lg:w-[250px] lg:h-[350px] w-[350px] h-[450px] lg:top-[480px] lg:left-[-120px] top-[810px] left-[100px] shadow-[20px_20px_30px_rgba(0,0,0,0.25)] inset-0 absolute z-20"></div>

            <div className="bg-[#fdff9a] align-middle rounded-[80px] lg:w-[600px] lg:h-[450px] w-[350px] h-[1100px] lg:top-[150px] lg:left-[240px] top-[100px] left-[50px] shadow-2xl inset-0 absolute z-0" />
          </article>

          {/* COLLAGE MONITOR */}
          <article className="lg:flex flex-col gap-5 h-fit relative hidden">
            <div className="scroll-appear scroll-right flex xl:flex-row flex-col gap-5 z-20">
              <div className="bg-[url('/personalImages/videojuegos/ImgVideojuego1.jpg')] bg-cover bg-center rounded-3xl lg:w-[250px] lg:h-[330px] w-[300px] h-[500px] shadow-[20px_20px_30px_rgba(0,0,0,0.25)] "></div>
              <div className="bg-[url('/personalImages/videojuegos/ImgVideojuego2.jpg')] bg-cover bg-center rounded-3xl lg:w-[420px] lg:h-[250px] w-[650px] h-[380px] lg:top-[480px] lg:left-[-620px] left-[-350px] shadow-[20px_20px_30px_rgba(0,0,0,0.25)]"></div>
            </div>
            <div className="scroll-appear scroll-right flex xl:flex-row flex-col gap-5 items-end z-20">
              <div className="bg-[url('/personalImages/videojuegos/ImgVideojuego5.jpg')] bg-cover rounded-3xl w-[420px] h-[250px] shadow-[20px_20px_30px_rgba(0,0,0,0.25)] "></div>
              <div className="bg-[url('/personalImages/videojuegos/ImgVideojuego3.jpg')] bg-cover bg-center rounded-3xl w-[250px] h-[330px] shadow-[20px_20px_30px_rgba(0,0,0,0.25)] "></div>
            </div>
            <div className="scroll-appear scroll-right bg-[#fdff9a] align-middle rounded-[80px] w-[80%] h-[80%] mx-auto self-center shadow-2xl inset-0 absolute z-0" />
          </article>
        </div>

        <div className="scroll-appear flex flex-row w-full h-[300px] lg:px-[13%] mx-auto lg:mt-[80px] mt-[100px] justify-between items-center relative">
          <img
            src="/personalImages/videojuegos/ImgVideojuegods1.jpg"
            className="xl:h-[210px] lg:h-[180px] h-[210px] w-auto rounded-3xl shadow-[20px_20px_30px_rgba(0,0,0,0.25)] z-25 self-start "
          />
          <img
            src="/personalImages/videojuegos/ImgVideojuegods2.jpg"
            className="xl:h-[210px] lg:h-[180px] h-[210px] w-auto rounded-3xl shadow-[20px_20px_30px_rgba(0,0,0,0.25)] z-20 self-end 2xl:-ml-0 xl:-ml-20 md:-ml-30 -ml-0"
          />
          <img
            src="/personalImages/videojuegos/ImgVideojuegods3.jpg"
            className="xl:h-[210px] lg:h-[180px] h-[210px] w-auto rounded-3xl shadow-[20px_20px_30px_rgba(0,0,0,0.25)] z-15 self-start xl:-ml-0 -ml-10"
          />
          <img
            src="/personalImages/videojuegos/ImgVideojuegods4.jpg"
            className="xl:h-[210px] lg:h-[180px] h-[210px] w-auto rounded-3xl shadow-[20px_20px_30px_rgba(0,0,0,0.25)] z-10 self-end 2xl:-ml-0 xl:-ml-20 md:-ml-30 -ml-0"
          />

          <div className="bg-[#fdff9a] lg:w-[70%] w-[90%] h-[70%] rounded-[80px] mx-auto align-middle self-center shadow-2xl inset-0 absolute z-0" />
        </div>
      </section>
    </>
  );
};

export default SectionVideojuegos;
