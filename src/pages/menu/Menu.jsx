import { Helmet } from "react-helmet-async";
import MenuBanner from "./MenuBanner/MenuBanner";

const Menu = () => {
  return (
    <section>
      <Helmet>
        <title>Foodizo | Our Menu</title>
      </Helmet>
      <MenuBanner></MenuBanner>
    </section>
  );
};

export default Menu;
