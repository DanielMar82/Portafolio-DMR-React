import SadFaceIcon from "../assets/Icons/SadFaceIcon";

const NotFoundPage = () => {
  return (
    <>
      {/* TODO: ¿?Meterle el fondo con texto: ERROR */}

      <main className="flex bg-fixed bg-linear-to-tr from-[#461208] to-[rgb(199,53,24)] p-20 text-center min-h-screen items-center justify-center">
        <div className="relative flex flex-col lg:gap-9 gap-[140px] justify-around shadow-2xl bg-linear-to-tr from-[#46170d] to-[rgb(209,48,16)] bg-cover bg-center lg:py-[60px] py-[90px] px-[10%] mx-[20%] rounded-tl-[100px] rounded-br-[100px] text-center lg:my-0 h-fit">
          <div className="absolute inset-0 bg-black/60 rounded-tl-[100px] rounded-br-[100px] z-0"></div>

          <div className="relative z-10 flex flex-col lg:gap-6 gap-10 lg:text-7xl text-8xl text-center font-bold">
            <h1>Página no encontrada</h1>
            <SadFaceIcon className="text-white self-center lg:size-[80px] size-[180px]" />
          </div>

          <p className="relative z-10 text-center lg:text-2xl text-5xl">
            La página introducida no existe o es errónea, compruebe la URL para
            una búsqueda deseada.
          </p>

          <p className="relative z-10 text-center lg:text-lg text-4xl">
            Si existe algún problema con la web no dude en contactar al correo
            enlazado al final de la página.
          </p>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
