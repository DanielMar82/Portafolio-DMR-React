import SectionDeporte from "../components/PersonalSections/SectionDeporte";
import SectionLibros from "../components/PersonalSections/SectionLibros";
import SectionMusica from "../components/PersonalSections/SectionMusica";
import SectionSeriesPelis from "../components/PersonalSections/SectionSeriesPelis";
import SectionVideojuegos from "../components/PersonalSections/SectionVideojuegos";

const PersonalPage = () => {
  return (
    <>
      {/* TODO: Añadir animacion, que las cosas vayan apareciendo solas */}
      {/* TODO: LAS IMAGENES LAGGEAN LA PÁGINA */}
      <main className="flex flex-col bg-fixed bg-linear-to-tr from-[#021b07] to-[rgb(25,114,71)] pt-20 px-20 text-center">
        {/* INTRO PERSONAL */}
        <section className="flex flex-row relative text-left lg:mt-[5%] mt-[30%] lg:mb-[60px] mb-[500px] px-12 lg:min-h-screen">
          <div className="relative flex flex-col gap-7 z-30">
            <h1 className="bg-[#fff4de] w-fit p-3 rounded-4xl xl:text-[120px] text-[90px] text-[#021b07] font-semibold shadow-xl">
              ¿Quién soy?
            </h1>
            <p className="bg-[#021b07] lg:w-[58%] w-fit p-5 rounded-4xl xl:text-3xl lg:text-2xl text-4xl text-[#fff4de] shadow-xl">
              Aquí muestro mi perfil personal, un poco de mi mundo: lo que me
              gusta, lo que disfruto y lo que forma parte de mí más allá del
              código y el desarrollo.
            </p>
          </div>

          <div
            className="bg-[url('/personalImages/ImgPersonal1.jpeg')] bg-cover bg-[10%_20%] rounded-3xl w-[270px] h-[450px] lg:left-[65%] left-[-30px] lg:top-[-30px] top-[340px] shadow-[20px_20px_30px_rgba(0,0,0,0.25)] inset-0 absolute z-20"
            style={{ backgroundSize: "150%" }}
          ></div>
          <div
            className="bg-[url('/personalImages/ImgPersonal2.jpeg')] bg-cover bg-[70%_20%] rounded-3xl w-[270px] h-[450px] lg:left-[78%] left-[75%] lg:top-[80px] top-[-30px] shadow-[20px_20px_30px_rgba(0,0,0,0.25)] inset-0 absolute z-10"
            style={{ backgroundSize: "120%" }}
          ></div>

          <div className="shadow-2xl bg-[#00420e] lg:w-[55%] w-[90%] lg:h-[40%] h-full left-[90px] top-[100px] rounded-[80px] inset-0 absolute z-0" />
        </section>

        <div className="flex flex-col lg:gap-[350px] gap-[450px]">
          <SectionDeporte />

          <SectionVideojuegos />

          <SectionMusica />

          <SectionLibros />

          <SectionSeriesPelis />
        </div>
      </main>
    </>
  );
};

export default PersonalPage;
