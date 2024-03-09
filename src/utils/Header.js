import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-200 flex justify-evenly items-center p-2 w-[100%] h-16 ">
      <div>
        <h1 className="text-red-500 font-semibold text-4xl">Mr_Saxena</h1>
      </div>
      <div className="text-black w-1/2 ">
        <nav className="flex justify-around">
          <Link
            to={"/"}
            className=" font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            className=" font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500"
          >
            About
          </Link>
          <Link
            to="/work"
            className=" font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500"
          >
            Experience
          </Link>
          <Link
            to="/contact"
            className=" font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
