import { Link } from "react-router-dom";
import MenuItemCard from "../../../components/MenuItemCard";
import SectionTitle from "../../../components/SectionTitle";
import MenuButton from "../../../components/MenuButton";

const TodayOffer = ({ items }) => {
  return (
    <section className="my-10 lg:my-16">
      <SectionTitle
        title={"Special Offerings"}
        subtitle={"Daily-Dish-Delicacies"}
      ></SectionTitle>
      <div className="w-11/12 mx-auto mt-10 md:mt-16 mb-4 md:mb-6 grid md:grid-cols-2">
        {items?.slice(0, 6).map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
      <div className="text-center">
        <Link to="/shop/offered">
          <MenuButton buttonTitle={"Order Your Favourite Food"}></MenuButton>
        </Link>
      </div>
    </section>
  );
};

export default TodayOffer;
