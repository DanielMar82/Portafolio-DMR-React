const Footer = ({ ...props }) => {
  // bg-[#fff4de] #09235a

  const { bgColor } = props;

  return (
    <>
      <main
        className={`bg-[${bgColor}] flex flex-col gap-14 text-[#03002a] p-[50px] pb-[60px]`}
      >
        {/* <h1>Contacto</h1> */}
        <div className="flex  flex-row gap-3 text-xl font-bold justify-around">
          <a
            // href="https://www.instagram.com/dany82_8?igsh=MXh6NHB3bjN3ency"
            href="/"
            className="cursor-grow"
          >
            <h2>Instagram</h2>
          </a>
          <a href="/" className="cursor-grow">
            <h2>Correo</h2>
          </a>
          <a href="/" className="cursor-grow">
            <h2>Correo</h2>
          </a>
        </div>
      </main>
    </>
  );
};

export default Footer;
