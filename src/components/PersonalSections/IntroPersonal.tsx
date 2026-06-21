const IntroPersonal = () => {
  return (
    <>
      <section className="flex flex-row relative text-left lg:mt-[5%] mt-[30%] lg:mb-[60px] mb-[500px] px-12 lg:min-h-screen">
        <div className="relative flex flex-col gap-7 z-30">
          <h1 className="bg-[#fff4de] w-fit p-3 rounded-4xl xl:text-[120px] text-[90px] text-[#021b07] font-semibold shadow-xl">
            ¿Quién soy?
          </h1>
          <p className="bg-[#fdff9a] lg:w-[45%] w-fit p-5 rounded-4xl lg:text-3xl text-4xl text-[#021b07] shadow-xl">
            Aquí muestro mi perfil personal, un poco de mi mundo: lo que me
            gusta, lo que disfruto y lo que forma parte de mí más allá del
            código y el desarrollo.
          </p>
        </div>

        <div
          className="bg-[url('/personalImages/ImgPersonal1.jpeg')] bg-cover bg-[10%_20%] rounded-3xl xl:w-[350px] lg:w-[300px] w-[250px] xl:h-[580px] lg:h-[530px] h-[480px] lg:left-[55%] left-[-30px] lg:top-[-30px] top-[340px] shadow-[20px_20px_30px_rgba(0,0,0,0.25)] inset-0 absolute z-20"
          style={{ backgroundSize: "150%" }}
        ></div>
        <div
          className="bg-[url('/personalImages/ImgPersonal2.jpeg')] bg-cover bg-[70%_20%] rounded-3xl xl:w-[350px] lg:w-[300px] w-[250px] xl:h-[580px] lg:h-[530px] h-[480px] lg:left-[70%] left-[75%] lg:top-[100px] top-[-30px] shadow-[20px_20px_30px_rgba(0,0,0,0.25)] inset-0 absolute z-10"
          style={{ backgroundSize: "120%" }}
        ></div>

        <div className="shadow-2xl bg-[#021b07] lg:w-[45%] w-[90%] lg:h-[40%] h-full left-[90px] top-[100px] rounded-[80px] inset-0 absolute z-0" />
      </section>
    </>
  );
};

export default IntroPersonal;
