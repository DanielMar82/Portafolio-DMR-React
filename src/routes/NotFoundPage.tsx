const NotFoundPage = () => {
  return (
    <>
      <div className=" flex bg-fixed bg-linear-to-tr from-[#461208] to-[#c73518] p-20 text-center min-h-screen items-center justify-center">
        <div className="flex flex-col lg:gap-9 gap-[140px] justify-around shadow-2xl bg-linear-to-tr from-[#2a0400] to-[#6e1100] lg:py-[60px] py-[90px] px-[10%] mx-[20%] rounded-[100px] text-center lg:my-0 h-fit">
          <div className="flex flex-col lg:gap-0 gap-6 lg:text-7xl text-9xl text-center font-bold">
            <h1>Página no encontrada</h1>

            <h1>:(</h1>
          </div>

          <p className="text-center lg:text-2xl text-6xl">
            La página introducida no existe o es erronea, compruebe la url para
            una búsqueda deseada.
          </p>
          <p className="text-center lg:text-lg text-4xl">
            Si existe algún problema con la web no dude en contactar al correo
            de contacto.
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
