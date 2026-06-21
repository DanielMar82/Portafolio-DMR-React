const IntroLanding = () => {
  return (
    <>
      <main className="grid grid-cols-2 gap-6 lg:px-[20%] lg:mt-0 mt-[100px] relative z-10">
        <div className="mx-auto shadow-2xl bg-linear-to-tr from-[#09235a] to-[#5188ff] lg:w-[67%] w-[90%] h-full lg:top-[50px] top-[15px] lg:left-20 left-5 rounded-[80px] inset-0 absolute z-0" />

        <div className="flex lg:flex-nowrap flex-wrap lg:flex-col flex-row justify-between lg:-translate-x-15 col-span-2 lg:col-span-1 gap-x-4 gap-y-0 w-full lg:w-fit lg:text-[170px] text-[100px] text-left font-bold lg:leading-40 leading-none [text-shadow:10px_10px_20px_rgba(0,0,0,0.5)] z-10">
          <h1>Daniel</h1>
          <h1>Martín</h1>
          <h1>Ruiz</h1>
        </div>

        <p className="lg:-translate-x-15 lg:col-span-2 lg:text-2xl text-5xl text-left lg:px-4 lg:leading-10 leading-loose lg:w-[115%] w-fit [text-shadow:10px_10px_20px_rgba(0,0,0,0.5)] z-10">
          Programador junior con{" "}
          <span className="bg-[#fff4de] text-[#030029] font-bold px-1">
            3 años de experiencia
          </span>{" "}
          en{" "}
          <span className="bg-[#fff4de] text-[#030029] font-bold px-1">
            desarrollo software y web
          </span>
          , con aspiraciones a futuros aprendizajes y con pasión en crear nuevos
          proyectos.
        </p>
        <div className=" lg:row-start-1 lg:col-start-2 relative xl:w-[80%] lg:w-[110%] w-full lg:h-full h-[80%] aspect-3/4 self-center ml-auto">
          <img
            src="/landingImages/FotoIntroPerfil.jpeg"
            alt="Foto de perfil"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </main>
    </>
  );
};
export default IntroLanding;
