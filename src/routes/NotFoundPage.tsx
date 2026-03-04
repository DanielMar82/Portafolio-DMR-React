const NotFoundPage = () => {
  return (
    <>
      <div className="bg-fixed bg-linear-to-tr from-[#461208] to-[#c73518] p-20 text-center h-fit">
        {/* OPCION 1 */}
        {/* <div className="px-[20%] my-10 gap-6 flex flex-col relative z-10">
          <div className="mx-auto bg-[#2a0400] w-[50%] h-full top-[50px] rounded-[80px] inset-0 absolute z-0" />

          <h1 className="text-8xl text-left font-bold z-10">
            Página no encontrada
          </h1>

          <p className="text-left z-10 w-[80%] text-3xl ">
            La página introducida no existe o es erronea, compruebe la url para
            una búsqueda deseada.
          </p>
        </div> */}

        {/* OPCION 2 */}
        <div className="shadow-2xl bg-linear-to-tr from-[#2a0400] to-[#6e1100] py-[90px] px-[10%] mx-[10%] rounded-[100px] my-10 text-center flex flex-col gap-6 relative z-10">
          {/* <div className="mx-auto bg-[#2a0400] w-[50%] h-full top-[50px] rounded-[80px] inset-0 absolute z-0" /> */}

          <h1 className="text-6xl text-center font-bold z-10">
            Página no encontrada
          </h1>

          <h1 className="text-6xl text-center font-bold z-10">:(</h1>

          <p className="text-left z-10 text-2xl ">
            La página introducida no existe o es erronea, compruebe la url para
            una búsqueda deseada.
          </p>
          <p>
            Si hay algún problema con la web no dude en contactarme a mi correo.
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
