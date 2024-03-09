import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black w-[100%] text-white flex justify-evenly">
      <div className="flex flex-col p-10 ml-10 items-center justify-center">
        <h1>Mr_Saxena</h1>
        <h1>Portfolio</h1>
      </div>
      <div className="flex flex-col p-10 ml-10">
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Home
        </Link>
        <Link
          to="/about"
          className="p-2 font-extralight  hover:underline underline-offset-2"
        >
          About
        </Link>
        <Link
          to="/work"
          className="p-2 font-extralight  hover:underline underline-offset-2"
        >
          Experience
        </Link>
        <Link
          to="/contact"
          className="p-2 font-extralight hover:underline underline-offset-2 "
        >
          Contact Me
        </Link>
      </div>
      <div className="flex flex-col p-10 ml-10">
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Instagram
        </Link>
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Git Hub
        </Link>
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Linkedin
        </Link>
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Facebook
        </Link>
      </div>
      <div className="flex flex-col p-10 ml-10">
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">Get My Resume</Link>
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">Hire me</Link>
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">Projects</Link>
      </div>
    </div>
  );
};

export default Footer;
