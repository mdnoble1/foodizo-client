import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import logo from "../../../../assets/logo/foodizoLogo1.png";

const Navbar = () => {
  return (
    <div className="max-w-screen-2xl bg-black navbar flex items-center justify-between px-4 lg:px-16 py-2 lg:py-6">
      <div>
        <img className="w-36 lg:w-52" src={logo} alt="logo" />
      </div>
      <div className="lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <FiMenu className="text-2xl text-[#ff5900]"></FiMenu>
        </label>
      </div>
      <div className="hidden lg:block">
        <ul className="flex items-center justify-between gap-12">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `text-[#ff5900] border-b-2 border-b-[#ff5900] flex items-center gap-3 font-bold text-2xl uppercase`
                  : `text-white nav-text flex items-center gap-3 font-bold text-xl uppercase`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? `text-[#ff5900] border-b-2 border-b-[#ff5900] flex items-center gap-3 font-bold text-2xl uppercase`
                  : `text-white nav-text flex items-center gap-3 font-bold text-xl uppercase`
              }
            >
              Contact Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? `text-[#ff5900] border-b-2 border-b-[#ff5900] flex items-center gap-3 font-bold text-2xl uppercase`
                  : `text-white nav-text flex items-center gap-3 font-bold text-xl uppercase`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? `text-[#ff5900] border-b-2 border-b-[#ff5900] flex items-center gap-3 font-bold text-2xl uppercase`
                  : `text-white nav-text flex items-center gap-3 font-bold text-xl uppercase`
              }
            >
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? `text-[#ff5900] border-b-2 border-b-[#ff5900] flex items-center gap-3 font-bold text-2xl uppercase`
                  : `text-white nav-text flex items-center gap-3 font-bold text-xl uppercase`
              }
            >
              Our Shop
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
