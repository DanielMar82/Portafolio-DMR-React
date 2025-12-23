const Projects = () => {
  return (
    <>
      <main className="flex flex-col gap-9">
        <section className="flex flex-row justify-around gap-[100px] ">
          <article className="bg-[#5459b8] shadow-[20px_10px_20px_rgba(0,0,0,0.3)] text-left p-6 rounded-t-4xl rounded-bl-4xl">
            <h1 className="text-3xl">Projecto 1</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt quis nisl eget egestas. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
          </article>

          <article className="bg-[#5459b8] shadow-[20px_10px_20px_rgba(0,0,0,0.3)] text-left p-6 rounded-t-4xl rounded-br-4xl">
            <h1 className="text-3xl">Projecto 2</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt quis nisl eget egestas. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
          </article>
        </section>

        <section className="flex flex-row">
          {/* <article className="bg-[#5459b8] text-left p-6 rounded-l-4xl">
            <h1 className="text-3xl">Projecto 2</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt quis nisl eget egestas. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
          </article> */}

          <div className="bg-[#fff4de] shadow-2xl text-5xl w-min m-auto text-[#09235a] rounded-3xl p-10">
            Mis proyectos
          </div>

          {/* <article className="bg-[#5459b8] text-left p-6 rounded-r-4xl">
            <h1 className="text-3xl">Projecto 2</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt quis nisl eget egestas. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
          </article> */}
        </section>

        <section className="flex  flex-row justify-around gap-[100px] ">
          <article className="bg-[#5459b8] shadow-[20px_10px_20px_rgba(0,0,0,0.3)] text-left p-6 rounded-b-4xl rounded-tl-4xl">
            <h1 className="text-3xl">Projecto 1</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt quis nisl eget egestas. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
          </article>

          <article className="bg-[#5459b8] shadow-[20px_10px_20px_rgba(0,0,0,0.3)] text-left p-6 rounded-b-4xl rounded-tr-4xl">
            <h1 className="text-3xl">Projecto 2</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt quis nisl eget egestas. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
          </article>
        </section>
      </main>

      {/* <main className="flex flex-row text-left px-2 gap-14">
        <section className="flex flex-col px-8 gap-40 rounded-4xl ">
          <article className="flex flex-col gap-5 bg-[#5459b8] relative p-4 rounded-4xl">
            <h1 className="text-4xl">Proyecto</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt quis nisl eget egestas. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
          </article>
          <article className="flex flex-col gap-5 bg-[#5459b8] rounded-4xl p-4">
            <h1 className="text-4xl">Proyecto</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt quis nisl eget egestas. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
          </article>
          <article className="flex flex-col gap-5 bg-[#5459b8] rounded-4xl p-4">
            <h1 className="text-4xl">Proyecto</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt quis nisl eget egestas. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
          </article>
        </section>
        <div className="flex flex-col">
          <h1 className="text-6xl text-center bg-[#fff4de] text-[#09235a] p-9 rounded-t-[50px] rounded-br-[50px]">
            Mis proyectos
          </h1>
          <section className="flex flex-col p-8 gap-40  rounded-4xl mt-[60px]">
            <article className="flex flex-col gap-5 bg-[#5459b8] p-4 rounded-4xl">
              <h1 className="text-4xl">Proyecto</h1>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt quis nisl eget egestas. Vestibulum ante ipsum primis
                in faucibus orci luctus et ultrices posuere cubilia curae;
              </p>
            </article>
            <article className="flex flex-col gap-5 bg-[#5459b8] rounded-4xl p-4">
              <h1 className="text-4xl">Proyecto</h1>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt quis nisl eget egestas. Vestibulum ante ipsum primis
                in faucibus orci luctus et ultrices posuere cubilia curae;
              </p>
            </article>
            <article className="flex flex-col gap-5 bg-[#5459b8] rounded-4xl p-4">
              <h1 className="text-4xl">Proyecto</h1>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt quis nisl eget egestas. Vestibulum ante ipsum primis
                in faucibus orci luctus et ultrices posuere cubilia curae;
              </p>
            </article>
          </section>
        </div>
      </main> */}
    </>
  );
};
export default Projects;

{
  /* <img src="public\ImgPruebas.png" alt="" className="absolute h-36 " /> */
}
