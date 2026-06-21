import { useScrollAppear } from "../../hooks/useScrollAppear";

const SectionDeporte = () => {
  const sectionRef = useScrollAppear();

  return (
    <>
      {/* APARTADO DEPORTE */}
      <section
        ref={sectionRef}
        className=" flex flex-row justify-between bg-[#0d1a0d] -mx-20 px-30 py-20"
      >
        <div className="flex flex-col relative">
          <img
            src="/personalImages/deporte/ImgGimEsp.jpg"
            alt="Entrenamiento"
            decoding="async"
            className="scroll-appear scroll-left absolute z-10 lg:w-[230px] lg:h-[360px] w-[350px] h-[600px] lg:top-[40px] top-[240px] lg:left-[380px] left-[-15px] rounded-3xl object-cover shadow-xl max-w-none transform-gpu "
          />

          <img
            src="/personalImages/deporte/ImgGimEsp2.jpg"
            alt="Gimnasio"
            decoding="async"
            className="scroll-appear scroll-left absolute z-10 w-[250px] h-[390px] top-[350px] left-[90px] hidden lg:block rounded-3xl object-cover shadow-xl max-w-none transform-gpu "
          />

          <img
            src="/personalImages/deporte/ImgGimnasio3.jpg"
            alt="Pesas"
            decoding="async"
            className="scroll-appear scroll-left absolute z-10 lg:w-[450px] lg:h-[230px] w-[750px] h-[330px] lg:top-[290px] top-[880px] lg:left-[10px] left-[-200px] rounded-3xl object-cover shadow-xl max-w-none transform-gpu "
          />

          <img
            src="/personalImages/deporte/ImgGimnasio5.jpg"
            alt="Entrenamiento gimnasio"
            decoding="async"
            className="scroll-appear scroll-left absolute z-10 w-[250px] h-[370px] top-0 left-[40px] hidden lg:block rounded-3xl object-cover shadow-xl max-w-none transform-gpu "
          />

          <div className="scroll-appear scroll-left absolute inset-0 z-0 shadow-2xl bg-[#fdff9a] lg:w-[550px] lg:h-[530px] w-[360px] h-[880px] lg:left-[-20px] left-[-80px] m-auto rounded-[80px]" />
        </div>

        <div className="flex flex-col gap-8 w-[50%] z-20">
          <h1 className="scroll-appear scroll-right lg:text-7xl text-8xl text-right font-bold text-[#021b07] bg-[#fff4de] lg:p-4 p-7 w-fit self-end rounded-t-3xl rounded-br-3xl">
            Deporte
          </h1>
          <p className="scroll-appear scroll-right text-[#021b07] text-left lg:text-2xl text-4xl bg-[#fdff9a] p-5 rounded-4xl whitespace-pre-line">
            {`Amante del deporte y la actividad física.\n
            Entreno en el gimnasio para mantenerme activo, ganar fuerza y evitar una vida sedentaria.\n
              Fan de la natacion desde que empecé con tan solo 4 años. Deporte que no solo me hace moverme y quemar grandes cantidades de calorias, si no que tambien me ayuda a meditar, generar ideas y pensar en distintas cosas del día a día. `}
          </p>
          <div className="flex flex-col w-full h-[300px] relative">
            <img
              src="/personalImages/deporte/ImgNatacion.jpg"
              alt="Natación"
              decoding="async"
              className="scroll-appear scroll-right absolute z-20 max-w-none lg:w-[400px] lg:h-[200px] w-[640px] h-[300px] top-[30px] lg:left-[-80px] left-[-350px] rounded-3xl object-cover shadow-xl"
            />

            <img
              src="/personalImages/deporte/ImgNatacion2.jpg"
              alt="Natación 2"
              decoding="async"
              className="scroll-appear scroll-right absolute z-10 w-[250px] h-[340px] top-[10px] left-[240px] hidden lg:block rounded-3xl object-cover shadow-xl "
            />

            <div className="scroll-appear scroll-right absolute inset-0 z-0 shadow-2xl bg-[#fdff9a] lg:w-[85%] lg:h-[290px] w-[670px] lg:left-[-40px] left-[-250px] rounded-[80px]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionDeporte;
