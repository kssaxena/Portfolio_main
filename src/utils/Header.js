import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="bg-gray-200 flex justify-evenly items-center p-2 w-[100%] h-16  shadow-black drop-shadow-md ">
      <div>
        <Link to="/" className="text-red-500 font-semibold text-3xl">
          Mr_Saxena
        </Link>
      </div>
      <div className="text-black w-1/2 ">
        <nav className="flex justify-around">
          <Link
            to={"/"}
            className={` font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500 hover:underline underline-offset-2 
            ${
              location.pathname === "/"
                ? "underline decoration-red-500 decoration-2 underline-offset-4"
                : ""
            } `}
          >
            Home
          </Link>
          <Link
            to="/work"
            className={` font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500 hover:underline underline-offset-2 ${
              location.pathname === "/work"
                ? "underline decoration-red-500 decoration-2 underline-offset-4"
                : ""
            }`}
          >
            Experience
          </Link>
          <Link
            to="/about"
            className={` font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500 hover:underline underline-offset-2 ${
              location.pathname === "/about"
                ? "underline decoration-red-500 decoration-2 underline-offset-4"
                : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={` font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500 hover:underline underline-offset-2 ${
              location.pathname === "/contact"
                ? "underline decoration-red-500 decoration-2 underline-offset-4"
                : ""
            }`}
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

      <Link to="/hireMe">
        <div className="flex ">
          <Button name="Hire Me" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
