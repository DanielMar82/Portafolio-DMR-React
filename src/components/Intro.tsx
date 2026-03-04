const Intro = () => {
  return (
    <>
      {/* INTRO OPCION 1 */}
      {/* <h1 className="text-6xl">Daniel Martín Ruiz</h1>
        <div className="bg-[url('public/FotoCarnet.jpg')] bg-amber-200 bg-cover bg-top bg-no-repeat size-[400px] mx-auto my-10 rounded-full"></div>

        <p className="">
          Programador junior con 2 años de experiencia en el mundo del
          desarrollo software y web, con aspiraciones a futuros aprendizajes
        </p> */}

      {/* INTRO OPCION 2 */}
      {/* bg-[#09235a] */}
      <div className="px-[20%] gap-6 flex flex-col relative z-10">
        <div className="mx-auto shadow-2xl  bg-linear-to-tr from-[#09235a] to-[#5188ff] w-[67%] h-full top-[50px] left-20 rounded-[80px] inset-0 absolute z-0" />

        <div className="-translate-x-15 items-stretch flex justify-between z-10 text-8xl text-left">
          <div className="[text-shadow:10px_10px_20px_rgba(0,0,0,0.5)] flex font-bold flex-col self-stretch justify-between">
            <h1>Daniel</h1>
            <h1>Martín</h1>
            <h1>Ruiz</h1>
          </div>

          <img
            src="/FotoCarnet.jpg"
            alt="Foto de carnet"
            className="w-[38%] shadow-2xl rounded-3xl object-cover "
          />
        </div>
        <p className="-translate-x-15 text-2xl text-left z-10 px-4 leading-10 [text-shadow:10px_10px_20px_rgba(0,0,0,0.5)]">
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
      </div>
    </>
  );
};
export default Intro;
