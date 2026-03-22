import { Link } from "react-router";
import EmailIcon from "../assets/Icons/EmailIcon";
import { GithubIcon } from "../assets/Icons/GithubIcon";
import InstagramIcon from "../assets/Icons/InstagramIcon";
import { LinkedinIcon } from "../assets/Icons/LinkedinIcon";

const Footer = ({ ...props }) => {
  // bg-[#fff4de] #09235a

  const { bgColor } = props;

  return (
    <>
      <main
        className={`bg-[${bgColor}] flex flex-col gap-14 text-[#03002a] p-[50px] lg:pb-[60px] pb-[170px]`}
      >
        {/* <h1>Contacto</h1> */}
        <div className="flex  flex-row gap-3 text-xl font-bold justify-around">
          <Link
            className="cursor-grow"
            to={"/daniel.mar.ruiz.28@gmail.com"}
            target="_blank"
          >
            <EmailIcon className="lg:size-10 size-15 text-[#000]" />
          </Link>

          <Link
            className="cursor-grow"
            to={"https://www.linkedin.com/in/danielmr288/"}
            target="_blank"
          >
            <LinkedinIcon className="lg:size-10 size-15 text-[#000]" />
          </Link>

          <Link
            className="cursor-grow"
            to={"https://github.com/DanielMar82"}
            target="_blank"
          >
            <GithubIcon className="lg:size-10 size-15 text-[#000]" />
          </Link>

          <Link
            className="cursor-grow"
            // to={"https://www.instagram.com/dany82_8?igsh=MXh6NHB3bjN3ency"}
            to={"/"}
            target="_blank"
          >
            <InstagramIcon className="lg:size-10 size-15 text-[#000]" />
          </Link>
        </div>
      </main>
    </>
  );
};

export default Footer;
