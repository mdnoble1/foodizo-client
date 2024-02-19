import { Helmet } from "react-helmet-async";
import MenuBanner from "./MenuBanner/MenuBanner";
import PopularMenu from "../home/popularMenu/PopularMenu";

const Menu = () => {
  return (
    <section>
      <Helmet>
        <title>Foodizo | Our Menu</title>
      </Helmet>
      <MenuBanner></MenuBanner>
      <PopularMenu></PopularMenu>
    </section>
  );
};

export default Menu;
