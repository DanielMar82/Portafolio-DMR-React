import { Link } from "react-router";
import { useScrollAppear } from "../../hooks/useScrollAppear";

const SectionSeriesPelis = () => {
  const sectionRef = useScrollAppear();

  return (
    <>
      {/* APARTADO SERIES LIBROS */}
      <section
        ref={sectionRef}
        className="2xl:px-[200px] bg-[#0d1a0d] -mx-20 px-30 py-20 "
      >
        <div className="grid grid-cols-2 lg:gap-x-36 gap-10">
          <div>
            <h1 className="scroll-appear scroll-left bg-[#fff4de] lg:text-7xl text-8xl text-center font-bold text-[#021b07] py-7 mx-auto self-center rounded-t-3xl rounded-bl-3xl">
              Cine
            </h1>
          </div>
          <div>
            <h1 className="scroll-appear scroll-right bg-[#fff4de] lg:text-7xl text-8xl text-center font-bold text-[#021b07] py-7 mx-auto self-center rounded-t-3xl rounded-br-3xl">
              Series
            </h1>
          </div>

          <div className="col-span-2">
            <p className="scroll-appear text-[#021b07] text-left lg:text-2xl text-4xl bg-[#fdff9a] w-full mx-auto p-5 rounded-4xl whitespace-pre-line">
              {` El cine y las series son otra de mis formas favoritas de vivir historias.\n
              Me cautiva la animación de El viaje de Chihiro, me conmueve la romantica historia de La La Land, me encantan las buenas películas españolas como El Bola y me fascina el giro de guión de Fight Club.\n
              En series, me atrapan mundos tan distintos como el caos moral de Breaking Bad, la fantasía y traiciones de Juego de Tronos, los misterios complejos de Dark o la profunda trama de Fullmetal Alchemist: Brotherhood. Y Cada una me deja algo distinto.`}
            </p>
          </div>

          {/* IMAGENES PELIS */}
          <div className="flex flex-col gap-10 items-center relative">
            <article className="scroll-appear scroll-left relative bg-[url('/personalImages/pelisSeries/ImgPeli1.jpg')] bg-cover bg-center rounded-3xl lg:h-[250px] lg:w-[450px] h-[200px] w-[400px] shadow-[20px_20px_30px_rgba(0,0,0,0.25)] group overflow-hidden z-10 ">
              <Link
                to="https://www.imdb.com/es-es/title/tt0245429/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_el%20viaje%20de"
                className="cursor-grow cursor-none"
                target="_blank"
              >
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out flex items-center justify-center rounded-3xl">
                  <h1 className="text-3xl font-bold text-[#fff4de]">
                    El viaje de Chihiro
                  </h1>
                </div>
              </Link>
            </article>

            <article className="scroll-appear scroll-left relative bg-[url('/personalImages/pelisSeries/ImgPeli2.jpg')] bg-cover bg-center rounded-3xl lg:h-[400px] lg:w-[280px] h-[350px] w-[250px]  shadow-[20px_20px_30px_rgba(0,0,0,0.25)] group overflow-hidden z-10">
              <Link
                to="https://www.imdb.com/es-es/title/tt3783958/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_Lalaland"
                className="cursor-grow cursor-none"
                target="_blank"
              >
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out flex items-center justify-center rounded-3xl">
                  <h1 className="text-3xl font-bold text-[#fff4de]">
                    La la land
                  </h1>
                </div>
              </Link>
            </article>

            <article className="scroll-appear scroll-left relative bg-[url('/personalImages/pelisSeries/ImgPeli3.jpg')] bg-cover bg-center rounded-3xl lg:h-[250px] lg:w-[450px] h-[200px] w-[400px]  shadow-[20px_20px_30px_rgba(0,0,0,0.25)] group overflow-hidden z-10">
              <Link
                to="https://www.imdb.com/es-es/title/tt0137523/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_fight"
                className="cursor-grow cursor-none"
                target="_blank"
              >
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out flex items-center justify-center rounded-3xl">
                  <h1 className="text-3xl font-bold text-[#fff4de]">
                    Fight Club
                  </h1>
                </div>
              </Link>
            </article>

            <article className="scroll-appear scroll-left relative bg-[url('/personalImages/pelisSeries/ImgPeli4.jpg')] bg-cover bg-center rounded-3xl lg:h-[400px] lg:w-[280px] h-[350px] w-[250px]  shadow-[20px_20px_30px_rgba(0,0,0,0.25)] group overflow-hidden z-10">
              <Link
                to="https://www.imdb.com/es-es/title/tt0243794/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_el%20bola"
                className="cursor-grow cursor-none"
                target="_blank"
              >
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out flex items-center justify-center rounded-3xl">
                  <h1 className="text-3xl font-bold text-[#fff4de]">El bola</h1>
                </div>
              </Link>
            </article>
            <div className="scroll-appear bg-[#fdff9a] justify-self-start self-center rounded-[80px] w-[60%] h-[80%]  shadow-2xl inset-0 absolute z-0" />
          </div>

          {/* IMAGENES SERIES */}
          <div className="flex flex-col gap-10 items-center relative">
            <article className="scroll-appear scroll-right relative bg-[url('/personalImages/pelisSeries/ImgSerie1.jpg')] bg-cover bg-center rounded-3xl lg:h-[400px] lg:w-[280px] h-[350px] w-[250px]  shadow-[20px_20px_30px_rgba(0,0,0,0.25)] group overflow-hidden z-10">
              <Link
                to="https://www.imdb.com/es-es/title/tt0903747/"
                className="cursor-grow cursor-none"
                target="_blank"
              >
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out flex items-center justify-center rounded-3xl">
                  <h1 className="text-3xl font-bold text-[#fff4de]">
                    Breaking Bad
                  </h1>
                </div>
              </Link>
            </article>
            <article className="scroll-appear scroll-right relative bg-[url('/personalImages/pelisSeries/ImgSerie2.jpg')] bg-cover bg-center rounded-3xl lg:h-[250px] lg:w-[450px] h-[200px] w-[400px]  shadow-[20px_20px_30px_rgba(0,0,0,0.25)] group overflow-hidden z-10">
              <Link
                to="https://www.imdb.com/es-es/title/tt0944947/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_juego%20de"
                className="cursor-grow cursor-none"
                target="_blank"
              >
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out flex items-center justify-center rounded-3xl">
                  <h1 className="text-3xl font-bold text-[#fff4de]">
                    Juego de tronos
                  </h1>
                </div>
              </Link>
            </article>
            <article className="scroll-appear scroll-right relative bg-[url('/personalImages/pelisSeries/ImgSerie3.jpg')] bg-cover bg-center rounded-3xl lg:h-[400px] lg:w-[280px] h-[350px] w-[250px]  shadow-[20px_20px_30px_rgba(0,0,0,0.25)] group overflow-hidden z-10">
              <Link
                to="https://www.imdb.com/es-es/title/tt5753856/?ref_=fn_t_1"
                className="cursor-grow cursor-none"
                target="_blank"
              >
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out flex items-center justify-center rounded-3xl">
                  <h1 className="text-3xl font-bold text-[#fff4de]">Dark</h1>
                </div>
              </Link>
            </article>
            <article className="scroll-appear scroll-right relative bg-[url('/personalImages/pelisSeries/ImgSerie4.jpg')] bg-cover bg-center rounded-3xl lg:h-[250px] lg:w-[450px] h-[200px] w-[400px]  shadow-[20px_20px_30px_rgba(0,0,0,0.25)] group overflow-hidden z-10">
              <Link
                to="https://www.imdb.com/es-es/title/tt1355642/?ref_=nv_sr_srsg_3_tt_8_nm_0_in_0_q_full%20metal%20a"
                className="cursor-grow cursor-none"
                target="_blank"
              >
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out flex items-center justify-center rounded-3xl">
                  <h1 className="text-3xl font-bold text-[#fff4de]">
                    Full metal alchemist: Brotherhood
                  </h1>
                </div>
              </Link>
            </article>
            <div className="scroll-appear bg-[#fdff9a] justify-self-end self-center rounded-[80px] w-[60%] h-[80%] shadow-2xl inset-0 absolute z-0" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionSeriesPelis;
