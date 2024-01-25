import logo from "../../../../assets/logo/foodizoLogo2.png";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center bg-white lg:px-32">
        {/* part 1  */}
        <div className="text-white text-left lg:py-16 ml-6 lg:ml-0">
          <img className="w-36 lg:w-52 mb-4 lg:mb-8" src={logo} alt="logo" />
          <div className="font-medium lg:text-xl text-black">
            <p>Foodizo Restaurant Society, PO 234</p>
            <p>+00 123456789</p>
            <p>info@foodizo.project</p>
          </div>
        </div>
        {/* part 2  */}
        <div className="w-full mx-auto flex md:justify-center items-center my-4 md:my-8 pl-6 md:pl-0  md:border-x-2 md:border-[#ff5900]">
          <ul className="flex flex-col gap-2 pt-2">
            <li>
              <NavLink
                to="/"
                className="text-black font-bold lg:text-xl uppercase"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-black font-bold lg:text-xl uppercase"
              >
                Contact Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard"
                className="text-black font-bold lg:text-xl uppercase"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className="text-black font-bold lg:text-xl uppercase"
              >
                Our Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className="text-black font-bold lg:text-xl uppercase"
              >
                Our Shop
              </NavLink>
            </li>
          </ul>
        </div>
        {/* part 3  */}
        <div className="text-[#ff5900] text-center lg:text-xl py-4 lg:py-24">
          <div className="flex flex-row md:flex-col items-center md:justify-center gap-8 md:gap-4 pl-6 md:pl-0 text-2xl md:text-3xl">
            <NavLink>
              <FaFacebook />
            </NavLink>
            <NavLink>
              <FaInstagramSquare />
            </NavLink>
            <NavLink>
              <FaTwitterSquare />
            </NavLink>
          </div>
        </div>
      </div>
      {/* last part  */}
      <div className="bg-[#ff5900] flex justify-between items-center text-black font-medium text-xs lg:text-lg py-2 px-6 md:px-12 lg:px-32">
        <p>copyright © mdnoble.wd@gmail.com</p>
        <div className="hidden md:block">
          <NavLink className="mr-12">Terms of Use</NavLink>
          <NavLink>Privacy Policy</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
