import { NavLink } from "react-router-dom";
import logo from "../../../../assets/logo/foodizoLogo3.png";

const Sidebar = () => {
  return (
    <div className="drawer-side z-10">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-10 w-80 min-h-full bg-base-200">
        {/* Sidebar content here */}
        <NavLink to="/">
        <img className="w-40 mx-auto mb-6" src={logo} alt="logo" />
      </NavLink>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `w-full rounded-lg border border-[#ff5900] bg-[#ff5900] text-white flex items-center justify-center gap-3 font-bold text-xl uppercase`
                : `text-black nav-text flex items-center justify-center gap-3 font-bold text-lg uppercase`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? `w-full rounded-lg border border-[#ff5900] bg-[#ff5900] text-white flex items-center justify-center gap-3 font-bold text-xl uppercase`
                : `text-black nav-text flex items-center justify-center gap-3 font-bold text-lg uppercase`
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? `w-full rounded-lg border border-[#ff5900] bg-[#ff5900] text-white flex items-center justify-center gap-3 font-bold text-xl uppercase`
                : `text-black nav-text flex items-center justify-center gap-3 font-bold text-lg uppercase`
            }
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? `w-full rounded-lg border border-[#ff5900] bg-[#ff5900] text-white flex items-center justify-center gap-3 font-bold text-xl uppercase`
                : `text-black nav-text flex items-center justify-center gap-3 font-bold text-lg uppercase`
            }
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
