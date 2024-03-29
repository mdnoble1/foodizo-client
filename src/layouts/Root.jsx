import { Outlet } from "react-router-dom";
import Navbar from "../pages/home/shared/navbar/Navbar";
import Sidebar from "../pages/home/shared/sidebar/Sidebar";

const Root = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <Navbar></Navbar>
          {/* content goes here  */}
          <Outlet></Outlet>
        </div>
        {/* sidebar  */}
        <Sidebar></Sidebar>
      </div>
    </section>
  );
};

export default Root;
