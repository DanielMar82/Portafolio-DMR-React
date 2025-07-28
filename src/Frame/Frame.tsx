import "./Frame.css";
import App from "../App.tsx";
import Footer from "../Footer/Footer.tsx";
import Studies from "../Studies.tsx";

function Frame() {
  return (
    <>
      <div className="Frame" />
      <div className="Content">
        <App />
        <Studies />
        <Footer />
      </div>
    </>
  );
}

export default Frame;
