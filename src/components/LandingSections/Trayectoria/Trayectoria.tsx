import ArticleTrayectoria from "./ArticleTrayectoria";

import { useScrollAppear } from "../../../hooks/useScrollAppear";

import MobileIcon from "../../../assets/Icons/MobileIcon";
import QuestionIcon from "../../../assets/Icons/QuestionIcon";
import ReactIcon from "../../../assets/Icons/ReactIcon";

const Trayectoria = () => {
  const trayectoriaRef = useScrollAppear();

  return (
    <>
      <main ref={trayectoriaRef} className="px-20 text-[#fff4de]">
        <h1 className="lg:text-6xl text-8xl  text-[#030029] font-bold w-fit mx-auto bg-[#fff4de] p-10 font rounded-[50px] shadow-[20px_10px_20px_rgba(0,0,0,0.3)] scroll-appear">
          Trayectoria profesional
        </h1>
        <section className="flex flex-col gap-[80px] pt-[100px] pb-[100px] relative">
          {/* LINEA GUÍA VERT */}
          <div
            className="lg:w-[40px] w-[20px] h-full self-center lg:absolute"
            style={{
              background: `linear-gradient( to bottom, transparent, #fff4de 15%, #fff4de 85%, transparent )`,
            }}
          />

          <h1 className="text-9xl font-bold w-fit lg:mt-[150px] lg:self-start self-center scroll-appear scroll-left">
            2022
          </h1>

          <ArticleTrayectoria
            className="flex-row-reverse  lg:pr-[15%]"
            classNameIcon="scroll-right"
            classNameText="scroll-left rounded-t-3xl rounded-bl-3xl"
            trayectoriaText={`Tras finalizar Bachillerato decidí dar el salto al mundo de la programación y el desarrollo y comencé el Grado Superior de Desarrollo de Aplicaciones Web en el I.E.S. El Cañaveral de Móstoles.`}
            icon={
              <img
                src="/landingImages/logoCañaveral.png"
                alt="Logo del centro de estudios de Formación profesional I.E.S. El Cañaveral"
                className="size-[150px] rounded-full"
              />
            }
          />

          <ArticleTrayectoria
            className="flex-row lg:pl-[15%]"
            classNameIcon="scroll-left"
            classNameText="scroll-right rounded-t-3xl rounded-br-3xl"
            trayectoriaText={`Después de terminar el Grado Superior de DAW, realicé mis prácticas en la startup Recomiend.App, creando páginas web con conexiones API a sistemas de Inteligencia Artificial que continúan utilizando hoy en día.`}
            icon={
              <img
                src="/landingImages/logoRecomiendApp.webp"
                alt="Logo de RecomiendApp"
                className="size-[150px] rounded-full"
              />
            }
          />

          {/* LINEA HOR */}
          <div
            className="xl:w-[40%] w-[80%] lg:h-[40px] h-[20px] mx-auto bg-[#fff4de]"
            style={{
              background: `linear-gradient( to left, transparent, #fff4de 45%, #fff4de 55%, transparent )`,
            }}
          />

          <h1 className="text-9xl font-bold w-fit lg:self-end self-center scroll-appear scroll-right">
            2024
          </h1>

          <ArticleTrayectoria
            className="flex-row-reverse lg:pr-[15%]"
            classNameIcon="scroll-right"
            classNameText="scroll-left rounded-t-3xl rounded-bl-3xl"
            trayectoriaText={`Al completar DAW, continué mi formación accediendo directamente al segundo año del Grado Superior de Desarrollo de Aplicaciones Multiplataforma, con el primer curso convalidado, otra vez en el I.E.S. El Cañaveral de Móstoles.`}
            icon={
              <img
                src="/landingImages/logoCañaveral.png"
                alt="Logo del centro de estudios de Formación profesional I.E.S. El Cañaveral"
                className="size-[150px] rounded-full"
              />
            }
          />

          <ArticleTrayectoria
            className="flex-row lg:pl-[15%]"
            classNameIcon="scroll-left"
            classNameText="scroll-right rounded-t-3xl rounded-br-3xl"
            trayectoriaText={`Posteriormente realicé las prácticas en Centribal Solutions, una empresa orientada a soluciones de soporte y servicios para empresas y PYMES.
              Durante mi periodo estuve desarrollando en solitario un proyecto web interno para gestionar los horarios de los técnicos, construido desde cero con C# y ASP.NET.`}
            icon={
              <img
                src="/landingImages/logoCentribal.png"
                alt="Logo de Centribal Solutions"
                className="size-[150px] rounded-full"
              />
            }
          />

          {/* LINEA HOR */}
          <div
            className="xl:w-[50%] w-[80%] lg:h-[40px] h-[20px] mx-auto bg-[#fff4de]"
            style={{
              background: `linear-gradient( to left, transparent, #fff4de 45%, #fff4de 55%, transparent )`,
            }}
          />

          <h1 className="text-9xl font-bold w-fit lg:self-start self-center scroll-appear scroll-left">
            2026
          </h1>

          <ArticleTrayectoria
            className="flex-row-reverse lg:pr-[15%] "
            classNameIcon="scroll-right"
            classNameText="scroll-left rounded-t-3xl rounded-bl-3xl"
            trayectoriaText={`Tras un año de pausa en mis estudios, empecé un curso en Udemy sobre React, Next.js y TypeScript, y creé mi primer proyecto personal: mi portfolio web, desarrollado con React y TypeScript.`}
            icon={<ReactIcon className="size-[150px] text-[#030029]" />}
          />

          <ArticleTrayectoria
            className="flex-row lg:pl-[15%]"
            classNameIcon="scroll-left"
            classNameText="scroll-right rounded-t-3xl rounded-br-3xl"
            trayectoriaText={`Además, comencé a trabajar en proyectos personales para facilitar mi día a día: 
              SuperAppTe y CompletAppMe, dos aplicaciones móviles orientadas a la gestión de rutinas de gimnasio y actividades de entretenimiento como libros, series o videojuegos.`}
            icon={<MobileIcon className="size-[150px] text-[#030029]" />}
          />

          <ArticleTrayectoria
            className="flex-row-reverse lg:pr-[15%] "
            classNameIcon="scroll-right"
            classNameText="scroll-left rounded-t-3xl rounded-bl-3xl"
            trayectoriaText={`¿Qué viene ahora?
Más proyectos, más retos y más aprendizaje. Mi objetivo es seguir evolucionando y creciendo como desarrollador y abrir nuevas oportunidades en el camino.`}
            icon={<QuestionIcon className="size-[150px] text-[#030029]" />}
          />
        </section>
      </main>
    </>
  );
};

export default Trayectoria;
