import SectionPortfolio from "../components/ProjectsSections/SectionPortfolio";
import SectionProyecto2 from "../components/ProjectsSections/SectionProyecto2";
import SectionProyectosMovil from "../components/ProjectsSections/SectionProyectosMovil";

const ProyectosPage = () => {
  return (
    <>
      <main className="flex flex-col gap-[400px] bg-fixed bg-linear-to-tr from-[#3e070f] to-[#651a42] px-20 pb-5 text-center pb-[200px]">
        {/* SECCION INTRO */}
        <section className="flex lg:flex-row flex-col-reverse lg:min-h-screen justify-center lg:items-center lg:px-12 lg:mt-0 mt-[300px] mb-[-200px]">
          <div className="flex flex-col lg:w-[30%] lg:h-[600px] w-full h-[600px] relative z-10">
            <img
              src="/projectsImages/ImgProyectosIntro2.jpg"
              alt=""
              className="lg:h-[55%] h-[60%] object-cover rounded-4xl absolute lg:top-[5%] lg:left-[170px] top-[25%] left-[35%] z-10"
            />
            <img
              src="/projectsImages/ImgProyectosIntro1.jpg"
              alt=""
              className="lg:h-[60%] h-[60%] object-cover rounded-4xl absolute lg:top-[35%] top-[65%] "
            />
          </div>

          <div className="flex flex-col items-end text-left lg:w-[80%] w-full relative gap-8">
            <h1 className="w-fit p-3 rounded-4xl 2xl:text-[100px] xl:text-[90px] lg:text-[70px] text-[90px] text-[#1b0311] font-semibold bg-[#fff4de] z-10">
              Mis proyectos
            </h1>

            <p className="w-[90%] p-5 rounded-4xl xl:text-3xl lg:text-2xl text-4xl text-[#fff4de] bg-[#30061e] z-10">
              Como buen desarrollador web/software he realizados algunos
              proyectos sencillos usando distintos lenguajes, frameworks y
              tecnologías, y aquí te muestro más detalladamente algunos de
              ellos.
            </p>

            <div className="absolute inset-0 flex justify-end items-end">
              <div className="lg:w-[85%] w-full lg:h-[85%] h-[90%] bg-[#810d37] shadow-2xl rounded-[80px] lg:mb-[-5%] mb-[-8%] mr-[10%]" />
            </div>
          </div>
        </section>

        <SectionPortfolio />

        {/* <SectionProyecto2 /> */}

        <SectionProyectosMovil />
      </main>
    </>
  );
};
export default ProyectosPage;
