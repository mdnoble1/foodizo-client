import SectionTitle from "../../../components/SectionTitle";
import MenuItemCard from "../../../components/MenuItemCard";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";
import MenuButton from "../../../components/MenuButton";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category == "popular");

  return (
    <section className="my-10 lg:my-16">
      <SectionTitle
        title={"Popular Palates"}
        subtitle={"Savor-Every-Bite"}
      ></SectionTitle>
      <div className="w-11/12 mx-auto mt-10 md:mt-16 mb-4 md:mb-6 grid md:grid-cols-2">
        {popularItems?.slice(0, 6).map((item) => (
          <MenuItemCard key={item.id} item={item}></MenuItemCard>
        ))}
      </div>
      <div className="text-center">
        <Link to="/shop/offered">
          <MenuButton buttonTitle={"Show All"}></MenuButton>
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
