import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-200 flex justify-evenly items-center p-2 w-[100%] h-16 ">
      <div>
        <h1 className="text-red-500  font-semibold text-4xl">Mr_Saxena</h1>
      </div>
      <div className="text-black w-1/2 ">
        <nav className="flex justify-around">
          <Link
            to={"/"}
            className=" font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500 hover:underline underline-offset-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            className=" font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500 hover:underline underline-offset-2"
          >
            About
          </Link>
          <Link
            to="/work"
            className=" font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500 hover:underline underline-offset-2"
          >
            Experience
          </Link>
          <Link
            to="/contact"
            className=" font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500 hover:underline underline-offset-2"
          >
            Contact
          </Link>
          {/* <Link
            to={"/"}
            className=" font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500"
          >
            Demo_development
          </Link> */}
        </nav>
      </div>

      <div className="flex ">
        <Button name="Hire Me"/>
      </div>
    </div>
  );
};

export default Header;
