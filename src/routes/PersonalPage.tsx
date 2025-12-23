const PersonalPage = () => {
  return (
    <>
      <main className=" bg-linear-to-tr from-[#002909] to-[rgb(14,124,73)] p-20 text-center">
        <section className="text-left my-[100px] px-12">
          <div className="flex flex-col gap-7 mx-auto">
            <h1 className="text-8xl">¿Quíen soy?</h1>
            <p className="text-3xl w-[50%]">
              En este apartado hablo sobre mí, sobre mis gustos, mis aficiones,
              lo que hago cuando no programo.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default PersonalPage;
