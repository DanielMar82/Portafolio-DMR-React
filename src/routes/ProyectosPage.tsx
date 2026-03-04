const ProyectosPage = () => {
  return (
    <>
      <main className="bg-fixed bg-linear-to-tr from-[#290000] to-[#7c0e17] p-20 text-center">
        <section className="relative flex flex-col items-end text-left mt-[40px] mb-[70px] px-12">
          <div className="relative flex flex-col items-end gap-7 z-10">
            <h1 className="text-[100px] w-fit p-3 rounded-4xl bg-[#fff4de] text-[#1b0311] font-semibold">
              ¿Qué he hecho?
            </h1>
            <p className="text-4xl rounded-4xl p-5 bg-[#1b0311] text-[#fff4de] w-[70%]">
              Como buen desarrollador web/software he realizados algunos
              proyectos sencillos usando distintos lenguajes, frameworks y
              tecnologías, y aquí te muestro más detalladamente algunos de
              ellos.
            </p>
          </div>
          <div className="shadow-2xl bg-[#44011b] -end w-[67%] h-full right-[90px] top-[100px] rounded-[80px] absolute z-0" />
        </section>
      </main>
    </>
  );
};
export default ProyectosPage;
