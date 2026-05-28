import { useScrollAppear } from "../../hooks/useScrollAppear";

const SectionLibros = () => {
  const sectionRef = useScrollAppear();

  return (
    <>
      {/* TODO: ARREGLAR EN MOVIL, ARREGLAR RESPONSIVE 1230px */}
      {/* APARTADO LIBROS */}
      <section
        ref={sectionRef}
        className="flex flex-row justify-center py-10 lg:px-10 px-0"
      >
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-6 lg:pt-[100px] pt-[200px] lg:justify-between justify-around relative z-10">
            <div className="scroll-appear scroll-left group relative bg-[url('/personalImages/libros/ImgLibro1.jpg')] bg-cover w-[280px] h-[400px] p-2 rounded-3xl shadow-2xl self-end lg:-mr-0 -mr-6 overflow-hidden after:absolute after:inset-0 after:bg-black/0 after:transition-all after:duration-400 z-10 text-center content-center after:z-10 hover:after:bg-black/80">
              <p className="relative z-20 opacity-0 group-hover:opacity-100 transition-all duration-400 text-white font-semibold">
                "Son las cosas que más amamos las que nos destruyen." -
                Coriolanus Snow
              </p>
            </div>

            <div className=" group relative bg-[url('/personalImages/libros/ImgLibros.jpg')] bg-cover 2xl:w-[450px] xl:w-[400px] lg:w-[370px] w-[350px] h-[250px] p-2 rounded-3xl shadow-2xl self-end lg:-mr-0 -mr-6 overflow-hidden after:absolute after:inset-0 after:bg-black/0 after:transition-all after:duration-400 z-10 text-center content-center after:z-10 hover:after:bg-black/80">
              <p className="relative z-20 opacity-0 group-hover:opacity-100 transition-all duration-400 text-white font-semibold">
                "No es analfabeto aquel que no sabe leer, sino aquel que
                sabiendo leer, no lee." - Miguel de Unamuno
              </p>
            </div>

            <div className="scroll-appear scroll-left group relative bg-[url('/personalImages/libros/ImgManga3.jpg')] bg-cover xl:w-[300px] w-[260px] h-[400px] p-2 rounded-3xl shadow-2xl self-end lg:-mr-0 -mr-6 overflow-hidden after:absolute after:inset-0 after:bg-black/0 after:transition-all after:duration-400 z-10 text-center content-center after:z-10 hover:after:bg-black/80">
              <p className="relative z-20 opacity-0 group-hover:opacity-100 transition-all duration-400 text-white font-semibold">
                "lo único en lo que todos los humanos son iguales es en la
                muerte." - Johan Liebheart
              </p>
            </div>

            <div className="bg-[#fdff9a] scroll-appear justify-self-start self-center rounded-[80px] 2xl:ml-[15%] lg:w-[280px] w-[200px] lg:top-0 top-[200px] h-[70%] shadow-2xl inset-0 absolute z-0" />
          </div>
          <div className="flex flex-col scroll-appear gap-8 xl:px-[5%] z-20">
            <h1 className="bg-[#fff4de] lg:text-7xl text-8xl text-left font-bold text-[#021b07] lg:p-4 p-7 w-fit self-center rounded-t-3xl">
              Libros
            </h1>
            <p className="bg-[#fdff9a] lg:w-[80%] mx-auto text-[#021b07] text-left lg:text-2xl text-4xl font-semibold p-5 rounded-4xl whitespace-pre-line">
              {`Me encanta leer historias que te hacen pensar y otras que simplemente te enganchan desde la primera página.\n
               Disfruto tanto de sagas como Los Juegos del Hambre o Juego de Tronos, que te meten de lleno en mundos enormes y llenos de personajes, como de libros más reflexivos y simbólicos como La metamorfosis o El Principito.\n
              Y, por supuesto, el manga ocupa un lugar especial para mí: obras como Berserk, Monster o Dragon Ball me han marcado mi forma de ver las historias, los personajes y la narrativa.`}
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:pt-[100px] pt-[200px] lg:justify-between justify-around relative z-10 ">
            <div className="scroll-appear scroll-right group relative self-start bg-[url('/personalImages/libros/ImgLibro2.jpg')] bg-cover w-[280px] h-[400px] p-2 rounded-3xl shadow-2xl self-end lg:-ml-0 -ml-6 overflow-hidden after:absolute after:inset-0 after:bg-black/0 after:transition-all after:duration-400 z-10 text-center content-center after:z-10 hover:after:bg-black/80">
              <p className="relative z-20 opacity-0 group-hover:opacity-100 transition-all duration-400 text-white font-semibold">
                "Nunca olvides lo que eres. El resto del mundo no lo hará.
                Llévalo como una armadura, y nunca podrá usarse para hacerte
                daño." - Tyrion Lannister
              </p>
            </div>

            <div className="scroll-appear scroll-right group relative self-start bg-[url('/personalImages/libros/ImgManga1.jpg')] bg-cover 2xl:w-[450px] xl:w-[400px] lg:w-[370px] w-[350px] h-[250px] p-2 rounded-3xl shadow-2xl self-end lg:-ml-0 -ml-6 overflow-hidden after:absolute after:inset-0 after:bg-black/0 after:transition-all after:duration-400 z-10 text-center content-center after:z-10 hover:after:bg-black/80">
              <p className="relative z-20 opacity-0 group-hover:opacity-100 transition-all duration-400 text-white font-semibold">
                "El odio es un lugar al que va el hombre que no soporta la
                tristeza." - Godo
              </p>
            </div>

            <div className="scroll-appear scroll-right group relative self-start bg-[url('/personalImages/libros/ImgManga5.jpg')] bg-cover xl:w-[300px] w-[260px] h-[400px] p-2 rounded-3xl shadow-2xl self-end lg:-ml-0 -ml-6 overflow-hidden after:absolute after:inset-0 after:bg-black/0 after:transition-all after:duration-400 z-10 text-center content-center after:z-10 hover:after:bg-black/80">
              <p className="relative z-20 opacity-0 group-hover:opacity-100 transition-all duration-400 text-white font-semibold">
                "Eres un ser increíble, diste lo mejor de ti y por eso te
                admiro. Pasaste por varias transformaciones, fuiste tan poderoso
                que todos nosotros te odiamos. Espero que renazcas como un buen
                tipo, te estaré esperando para pelear. Yo también entrenaré,
                entrenaré mucho para volverme más fuerte. Adiós Majin Buu." -
                Goku
              </p>
            </div>

            <div className="bg-[#fdff9a] scroll-appear justify-self-end self-center rounded-[80px] 2xl:mr-[15%] lg:w-[280px] w-[200px] lg:top-0 top-[200px] h-[70%] shadow-2xl inset-0 absolute z-0" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionLibros;
