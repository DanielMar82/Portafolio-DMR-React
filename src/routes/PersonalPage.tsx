const PersonalPage = () => {
  return (
    <>
      {/* TODO: Problemas con el fondo y los section */}
      <main className="flex flex-col bg-fixed bg-linear-to-tr from-[#002909] to-[rgb(14,124,73)] p-20 pb-40 text-center">
        {/* INTRO PERSONAL */}
        <section className="flex flex-row relative text-left mt-[40px] mb-[70px] px-12">
          <div className="relative flex flex-col gap-7 mx-auto z-10">
            <h1 className="text-[120px] w-fit p-3 rounded-4xl bg-[#fff4de] text-[#0c2b0c] font-semibold">
              ¿Quién soy?
            </h1>
            <p className="text-4xl rounded-4xl p-5 bg-[#0c2b0c] text-[#fff4de] w-[58%]">
              En este apartado hablo sobre mí, sobre mis gustos, mis aficiones,
              lo que hago cuando no programo.
            </p>
          </div>

          <div
            className="bg-[url('/personalImages/ImgPersonal1.jpeg')] bg-cover bg-[10%_20%] rounded-3xl w-[270px] h-[450px] left-[67%] top-[-30px] inset-0 absolute z-10"
            style={{ backgroundSize: "150%" }}
          ></div>
          <div
            className="bg-[url('/personalImages/ImgPersonal2.jpeg')] bg-cover bg-[70%_20%] rounded-3xl w-[270px] h-[450px] left-[79%] top-[50px] inset-0 absolute z-0"
            style={{ backgroundSize: "120%" }}
          ></div>

          <div className="shadow-2xl bg-[#00420e] w-[56%] h-full left-[90px] top-[100px] rounded-[80px] inset-0 absolute z-0" />
        </section>

        {/* APARTADO DEPORTE */}
        <section className="mt-[500px] flex flex-row justify-between text-6xl p-10">
          <div className="flex flex-col relative">
            <div className="bg-[url('/personalImages/ImgGimEsp.jpeg')] bg-cover rounded-3xl w-[230px] h-[360px] top-[40px] left-[380px] inset-0 absolute z-10"></div>
            <div className="bg-[url('/personalImages/ImgGimEsp2.jpeg')] bg-cover rounded-3xl w-[250px] h-[390px] top-[350px] left-[90px] inset-0 absolute z-10"></div>
            <div className="bg-[url('/personalImages/ImgGimnasio3.jpg')] bg-cover rounded-3xl w-[450px] h-[230px] top-[290px] left-[10px] inset-0 absolute z-10"></div>
            <div className="bg-[url('/personalImages/ImgGimnasio5.jpg')] bg-cover rounded-3xl w-[250px] h-[370px] top-[0px] left-[40px] inset-0 absolute z-10"></div>
            <div className="shadow-2xl bg-[#fdff9a] w-[550px] h-[530px] left-[-20px] m-auto rounded-[80px] inset-0 absolute z-0" />
          </div>

          <div className="flex flex-col gap-8 w-[50%]">
            <h1 className="text-7xl text-right font-bold text-[#355e24] bg-[#fdff9a] p-4 w-fit self-end rounded-3xl">
              Deporte
            </h1>
            <p className="text-[#355e24] font-semibold text-left text-2xl bg-[#fdff9a] p-5 rounded-4xl whitespace-pre-line">
              {`Amante del deporte, con varios años de entrenamiento en el
              gimnasio para fortalecer los musculos y tener una vida menos
              sedentaria y con mayor movilidad.\n
              Natación como hobbie, fan de la natacion desde que empecé con tan solo 4 años. Deporte que no solo me hace moverme y quemar grandes cantidades de calorias, si no que tambien me ayuda a meditar, generar ideas y pensar en distintas cosas del día a día. `}
            </p>
            <div className="flex flex-col w-full h-[300px] relative">
              <div className="bg-[url('/personalImages/ImgNatacion.jpg')] bg-cover rounded-3xl w-[400px] h-[200px] top-[30px] left-[-80px] inset-0 absolute z-20"></div>
              <div className="bg-[url('/personalImages/ImgNatacion2.jpg')] bg-cover rounded-3xl w-[250px] h-[340px] top-[10px] left-[190px] inset-0 absolute z-10"></div>
              <div className="shadow-2xl bg-[#fdff9a] w-[570px] h-[290px]  top-[80px] left-[-40px] rounded-[80px] inset-0 absolute z-0" />
            </div>
          </div>
        </section>

        <section className="mt-[500px] flex flex-row justify-between text-6xl p-10">
          <div className="flex flex-col gap-8 w-[50%]">
            <h1 className="text-7xl text-left font-bold text-[#355e24] bg-[#fdff9a] p-4 w-fit self-start rounded-3xl">
              Videojuegos
            </h1>
            <p className="text-[#355e24] font-semibold text-left text-2xl bg-[#fdff9a] p-5 rounded-4xl whitespace-pre-line">
              {`Amante del deporte, con varios años de entrenamiento en el
              gimnasio para fortalecer los musculos y tener una vida menos
              sedentaria y con mayor movilidad.\n
              Natación como hobbie, fan de la natacion desde que empecé con tan solo 4 años. Deporte que no solo me hace moverme y quemar grandes cantidades de calorias, si no que tambien me ayuda a meditar, generar ideas y pensar en distintas cosas del día a día. `}
            </p>
          </div>
        </section>

        <section className="mt-[500px] flex flex-row justify-center text-6xl p-10">
          <div className="flex flex-col gap-8 w-[30%]">
            <h1 className="text-7xl text-left font-bold text-[#355e24] bg-[#fdff9a] p-4 w-fit self-center rounded-3xl">
              Libros
            </h1>
            <p className="text-[#355e24] font-semibold text-left text-2xl bg-[#fdff9a] p-5 rounded-4xl whitespace-pre-line">
              {`Amante del deporte, con varios años de entrenamiento en el
              gimnasio para fortalecer los musculos y tener una vida menos
              sedentaria y con mayor movilidad.\n
              Natación como hobbie, fan de la natacion desde que empecé con tan solo 4 años. Deporte que no solo me hace moverme y quemar grandes cantidades de calorias, si no que tambien me ayuda a meditar, generar ideas y pensar en distintas cosas del día a día. `}
            </p>
          </div>
        </section>

        <section className="mt-[500px] text-6xl" id="CineSeries">
          <div className="flex flex-row justify-around">
            <div className="flex flex-col">
              <h1 className="text-7xl text-left font-bold text-[#355e24] bg-[#fdff9a] p-4 w-fit self-center rounded-3xl">
                Cine
              </h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-7xl text-left font-bold text-[#355e24] bg-[#fdff9a] p-4 w-fit self-center rounded-3xl">
                Series
              </h1>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PersonalPage;
