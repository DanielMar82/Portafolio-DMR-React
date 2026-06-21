import { Link } from "react-router";

import EmailIcon from "../assets/Icons/EmailIcon";
import { GithubIcon } from "../assets/Icons/GithubIcon";
import InstagramIcon from "../assets/Icons/InstagramIcon";
import { LinkedinIcon } from "../assets/Icons/LinkedinIcon";

// Componente Footer que aparece al final de la página

const Footer = ({ ...props }) => {
  const { bgColor } = props;

  return (
    <>
      <main
        className={`bg-[${bgColor}] flex flex-col gap-14 text-[#03002a] p-[50px] lg:pb-[60px] pb-[170px]`}
      >
        <div className="flex flex-row gap-3 text-xl font-bold justify-around">
          <a
            href="mailto:daniel.mar.ruiz.28@gmail.com?subject=Contacto%20desde%20Web&body=Buenas%20Daniel,%0A%0AQuería%20hablar%20contigo..."
            className="cursor-grow cursor-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon className="lg:size-10 size-15 text-black" />
          </a>

          <Link
            className="cursor-grow cursor-none"
            to={"https://www.linkedin.com/in/danielmr288/"}
            target="_blank"
          >
            <LinkedinIcon className="lg:size-10 size-15 text-black" />
          </Link>

          <Link
            className="cursor-grow cursor-none"
            to={"https://github.com/DanielMar82"}
            target="_blank"
          >
            <GithubIcon className="lg:size-10 size-15 text-black" />
          </Link>

          <Link
            className="cursor-grow cursor-none"
            to={"https://www.instagram.com/dany82_8?igsh=MXh6NHB3bjN3ency"}
            target="_blank"
          >
            <InstagramIcon className="lg:size-10 size-15 text-black" />
          </Link>
        </div>
      </main>
    </>
  );
};

export default Footer;
