import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black w-[100%] text-white flex justify-evenly">
      <div className="flex flex-col p-10 ml-10 items-center justify-center">
        <h1>Mr_Saxena</h1>
      </div>
      <div className="flex flex-col p-10 ml-10">
        <Link className="p-2 font-extralight ">Home</Link>
        <Link to='/about' className="p-2 font-extralight ">About</Link>
        <Link to='/work' className="p-2 font-extralight ">Experience</Link>
        <Link to='/contact' className="p-2 font-extralight ">Contact Me</Link>
      </div>
      <div className="flex flex-col p-10 ml-10">
        <Link className="p-2 font-extralight ">Instagram</Link>
        <Link className="p-2 font-extralight ">Git Hub</Link>
        <Link className="p-2 font-extralight ">Linkedin</Link>
        <Link className="p-2 font-extralight ">Facebook</Link>
      </div>
      <div className="flex flex-col p-10 ml-10">
        <Link className="p-2 font-extralight ">Get My Resume</Link>
        <Link className="p-2 font-extralight ">Hire me</Link>
        <Link className="p-2 font-extralight ">Projects</Link>
      </div>
    </div>
  );
};

export default Footer;
