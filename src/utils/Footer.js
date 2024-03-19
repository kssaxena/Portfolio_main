import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black w-[100%] text-white flex justify-evenly">
      <div className="flex flex-col p-10 ml-10 items-center justify-center">
        <Link to={"/"} className="text-5xl hover:text-red-500">
          Mr_Saxena
        </Link>
        <h1 className="mt-5">Portfolio</h1>
      </div>
      <div className="flex flex-col p-10 ml-10">
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Home
        </Link>
        <Link
          to="/work"
          className="p-2 font-extralight  hover:underline underline-offset-2"
        >
          Experience
        </Link>
        <Link
          to="/about"
          className="p-2 font-extralight  hover:underline underline-offset-2"
        >
          About
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
          Get My Resume
        </Link>
        <Link
          to="/hireMe"
          className="p-2 font-extralight hover:underline underline-offset-2 "
        >
          Hire me
        </Link>
        <Link className="p-2 font-extralight hover:underline underline-offset-2 ">
          Projects
        </Link>
      </div>
      <div className="flex flex-row p-10 ml-10 items-center ">
        <Link className="flex justify-between p-2 font-extralight hover:underline underline-offset-2 hover:border-b border-red-500 ">
          <Instagram className="hover:text-red-500 m-2 h-8 w-8" />
        </Link>
        <Link className="flex justify-between p-2 font-extralight hover:underline underline-offset-2 hover:border-b border-red-500 ">
          <Github className="hover:text-red-500 m-2 h-8 w-8" />
        </Link>
        <Link className="flex justify-between p-2 font-extralight hover:underline underline-offset-2 hover:border-b border-red-500 ">
          <Linkedin className="hover:text-red-500 m-2 h-8 w-8" />
        </Link>
        <Link className="flex justify-between p-2 font-extralight hover:underline underline-offset-2 hover:border-b border-red-500 ">
          <Facebook className="hover:text-red-500 m-2 h-8 w-8" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
