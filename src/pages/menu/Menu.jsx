import { Helmet } from "react-helmet-async";
import MenuBanner from "./MenuBanner/MenuBanner";
import useMenu from "../../hooks/useMenu";
import TodayOffer from "./TodayOffer/TodayOffer";

const Menu = () => {
  const [menu] = useMenu();

//   console.log(menu)

  const offered = menu.filter((item) => item.category === "offered");
  const burgers = menu.filter((item) => item.category === "burger");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const desserts = menu.filter((item) => item.category === "dessert");
  const juices = menu.filter((item) => item.category === "juice");

  return (
    <section>
      <Helmet>
        <title>Foodizo | Our Menu</title>
      </Helmet>
      <MenuBanner></MenuBanner>
      <TodayOffer items={offered} ></TodayOffer>
    </section>
  );
};

export default Menu;
