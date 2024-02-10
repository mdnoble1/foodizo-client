/* eslint-disable react/no-unescaped-entities */
import chef1 from "../../../assets/chef/chef1.png";
import chef2 from "../../../assets/chef/chef2.png";
import chef3 from "../../../assets/chef/chef3.png";
import chef4 from "../../../assets/chef/chef4.png";
import SectionTitle from "../../../components/SectionTitle";
import { FaVimeo, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";

const OurChef = () => {
  return (
    <section>
      <SectionTitle
        title={"Meet Our Maestros"}
        subtitle={"Skill-Mastery-Flavor"}
      ></SectionTitle>
      <div className="w-10/12 mx-auto my-10 lg:my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {/* chef 1  */}
        <div className="p-4 rounded-md hover:bg-[#fffbef] duration-500 ease-in-out cursor-pointer">
          <img
            className="rounded-full mx-auto"
            src={chef1}
            alt="chef"
          />
          <div className="text-center my-4">
            <h2 className="font-semibold lg:text-lg text-black uppercase">
              John Smith
            </h2>
            <p className="font-semibold text-sm lg:text-base text-gray-600">
              Head Chef
            </p>
            <p className="text-sm lg:text-base text-gray-500 text-center h-18 md:h-24">
              A seasoned culinary virtuoso, John orchestrates kitchen brilliance
              with finesse.
            </p>
            <div className="flex items-center justify-between w-1/3 mx-auto mt-6 text-[#ff5900]">
              <FaVimeo className="hover:cursor-pointer"></FaVimeo>
              <FaTwitterSquare className="hover:cursor-pointer"></FaTwitterSquare>
              <FaFacebookSquare className="hover:cursor-pointer"></FaFacebookSquare>
            </div>
          </div>
        </div>
        {/* chef 2  */}
        <div className="p-4 rounded-md hover:bg-[#fffbef] duration-500 ease-in-out cursor-pointer">
          <img
            className="rounded-full mx-auto"
            src={chef2}
            alt="chef"
          />
          <div className="text-center my-4">
            <h2 className="font-semibold lg:text-lg text-black uppercase">
              Sarah Lee
            </h2>
            <p className="font-semibold text-sm lg:text-base text-gray-600">
              Pastry Chef
            </p>
            <p className="text-sm lg:text-base text-gray-500 text-center h-18 md:h-24">
              Sarah's passion for pastry shines in her exquisite, delectable
              creations.
            </p>
            <div className="flex items-center justify-between w-1/3 mx-auto mt-6 text-[#ff5900]">
              <FaVimeo className="hover:cursor-pointer"></FaVimeo>
              <FaTwitterSquare className="hover:cursor-pointer"></FaTwitterSquare>
              <FaFacebookSquare className="hover:cursor-pointer"></FaFacebookSquare>
            </div>
          </div>
        </div>
        {/* chef 3  */}
        <div className="p-4 rounded-md hover:bg-[#fffbef] duration-500 ease-in-out cursor-pointer">
          <img
            className="rounded-full mx-auto"
            src={chef3}
            alt="chef"
          />
          <div className="text-center my-4">
            <h2 className="font-semibold lg:text-lg text-black uppercase">
              Michael Chen
            </h2>
            <p className="font-semibold text-sm lg:text-base text-gray-600">
              Sous Chef
            </p>
            <p className="text-sm lg:text-base text-gray-500 text-center h-18 md:h-24">
              Michael's culinary mastery and attention to detail elevate every
              dining experience.
            </p>
            <div className="flex items-center justify-between w-1/3 mx-auto mt-6 text-[#ff5900]">
              <FaVimeo className="hover:cursor-pointer"></FaVimeo>
              <FaTwitterSquare className="hover:cursor-pointer"></FaTwitterSquare>
              <FaFacebookSquare className="hover:cursor-pointer"></FaFacebookSquare>
            </div>
          </div>
        </div>
        {/* chef 4  */}
        <div className="p-4 rounded-md hover:bg-[#fffbef] duration-500 ease-in-out cursor-pointer">
          <img
            className="rounded-full mx-auto"
            src={chef4}
            alt="chef"
          />
          <div className="text-center my-4">
            <h2 className="font-semibold lg:text-lg text-black uppercase">
              David Johnson
            </h2>
            <p className="font-semibold text-sm lg:text-base text-gray-600">
              Executive Chef
            </p>
            <p className="text-sm lg:text-base text-gray-500 text-center h-18 md:h-24">
              David's innovative flair and leadership inspire culinary
              excellence across the board.
            </p>
            <div className="flex items-center justify-between w-1/3 mx-auto mt-6 text-[#ff5900]">
              <FaVimeo className="hover:cursor-pointer"></FaVimeo>
              <FaTwitterSquare className="hover:cursor-pointer"></FaTwitterSquare>
              <FaFacebookSquare className="hover:cursor-pointer"></FaFacebookSquare>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurChef;
