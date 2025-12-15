const Footer = ({ ...props }) => {
  // bg-[#fff4de] #09235a

  const { bgColor } = props;

  return (
    <>
      <main className={`bg-[${bgColor}] text-[#03002a] p-[50px] pb-[90px]`}>
        <h1>Contacto</h1>
        <div className="flex flex-row gap-3 justify-center">
          <h2>Instagram</h2>
          <h2>Correo</h2>
          <h2>Telefono</h2>
        </div>
      </main>
    </>
  );
};

export default Footer;
