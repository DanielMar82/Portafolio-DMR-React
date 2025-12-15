import "./Frame.css";

const Frame = () => {
  const color = "#fff4de";

  return (
    <>
      {/* Marco superior */}

      <div
        className={`frame-top fixed top-0 left-0 w-full h-[40px] bg-[${color}] z-50`}
      ></div>

      {/* Marco inferior */}
      <div
        className={`frame-top fixed bottom-0 left-0 w-full h-[40px] bg-[${color}] z-50`}
      ></div>

      {/* Marco izquierdo */}
      <div
        className={`frame-side fixed top-0 left-0 h-full w-[40px] bg-[${color}] z-50`}
      ></div>

      {/* Marco derecho */}
      <div
        className={`frame-side fixed top-0 right-0 h-full w-[40px] bg-[${color}] z-50`}
      ></div>
    </>
  );
};

export default Frame;
