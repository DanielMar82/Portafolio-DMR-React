const Intro = () => {
  return (
    <>
      {/* INTRO OPCION 1 */}
      {/* <div className="relative">
        <h1 className="text-6xl">Daniel Martín Ruiz</h1>
        <div className="bg-[url('public/FotoCarnet.jpg')] bg-amber-200 bg-cover bg-top bg-no-repeat size-[600px] mx-auto rounded-full z-10"></div>

        <p className="z-10">
          Programador junior con 2 años de experiencia en el mundo del
          desarrollo software y web, con aspiraciones a futuros aprendizajes
        </p>

        <div className="left-[50%] shadow-2xl bg-linear-to-tr from-[#09235a] to-[#5188ff] size-[400px] rounded-full inset-0 absolute z-0" />
      </div> */}

      {/* INTRO OPCION 2 */}
      {/* bg-[#09235a] */}
      {/* <div className="lg:px-[20%] px-[10%] gap-6 flex flex-col relative z-10">
        <div className="mx-auto shadow-2xl bg-linear-to-tr from-[#09235a] to-[#5188ff] lg:w-[67%] w-[90%] h-full top-[50px] left-20 rounded-[80px] inset-0 absolute z-0" />

        <div className="flex lg:flex-row justify-between lg:items-stretch gap-8 text-8xl text-left w-full -translate-x-15 z-10">
          <div className="flex flex-col lg:self-stretch lg:justify-between justify-around text-[110px] font-bold [text-shadow:10px_10px_20px_rgba(0,0,0,0.5)]">
            <h1>Daniel</h1>
            <h1>Martín</h1>
            <h1>Ruiz</h1>
          </div>

          <img
            src="/FotoCarnet.jpg"
            alt="Foto de carnet"
            className="lg:w-[38%] w-[70%] shadow-2xl rounded-3xl object-cover "
          />
        </div>
        <p className="-translate-x-15 lg:text-2xl text-4xl text-left z-10 lg:px-4 lg:leading-10 leading-16 [text-shadow:10px_10px_20px_rgba(0,0,0,0.5)]">
          Programador junior con{" "}
          <span className="bg-[#fff4de] text-black font-semibold px-1">
            2 años de experiencia
          </span>{" "}
          en el mundo del{" "}
          <span className="bg-[#fff4de] text-black font-semibold px-1">
            desarrollo software y web,
          </span>{" "}
          con aspiraciones a futuros aprendizajes
        </p>
      </div> */}

      {/* INTRO OPCION 2 / MODO GRID */}
      <div className="grid grid-cols-2 gap-6 lg:px-[20%] relative z-10">
        <div className="mx-auto shadow-2xl bg-linear-to-tr from-[#09235a] to-[#5188ff] lg:w-[67%] w-[90%] h-full lg:top-[50px] top-[30px] lg:left-20 left-5 rounded-[80px] inset-0 absolute z-0" />

        <h1 className="lg:-translate-x-15 lg:text-left row-start-1 col-start-1 lg:col-span-1 col-span-2 w-full lg:text-9xl lg:leading-40 text-[90px] font-bold [text-shadow:10px_10px_20px_rgba(0,0,0,0.5)] z-10">
          Daniel Martín Ruiz
        </h1>

        <p className="lg:-translate-x-15 lg:col-span-2 lg:text-2xl text-5xl text-left lg:px-4 lg:leading-10 leading-loose w-fit [text-shadow:10px_10px_20px_rgba(0,0,0,0.5)] z-10">
          Programador junior con{" "}
          <span className="bg-[#fff4de] text-black font-semibold px-1">
            2 años de experiencia
          </span>{" "}
          en el mundo del{" "}
          <span className="bg-[#fff4de] text-black font-semibold px-1">
            desarrollo software y web,
          </span>{" "}
          con aspiraciones a futuros aprendizajes
        </p>

        <img
          src="/FotoCarnet.jpg"
          alt="Foto de carnet"
          className="lg:row-start-1 lg:col-start-2 lg:ml-8 lg:w-[80%] lg:h-full h-[80%] shadow-2xl self-center rounded-3xl object-cover z-10 col-start-2"
        />
      </div>
    </>
  );
};
export default Intro;
