import IntroPersonal from "../components/PersonalSections/IntroPersonal";
import SectionDeporte from "../components/PersonalSections/SectionDeporte";
import SectionLibros from "../components/PersonalSections/SectionLibros";
import SectionMusica from "../components/PersonalSections/SectionMusica";
import SectionSeriesPelis from "../components/PersonalSections/SectionSeriesPelis";
import SectionVideojuegos from "../components/PersonalSections/SectionVideojuegos";

// Página Personal

const PersonalPage = () => {
  return (
    <>
      <main className="flex flex-col bg-fixed bg-linear-to-tr from-[#021b07] to-[rgb(25,114,71)] pt-20 px-20 text-center">
        <IntroPersonal />

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
