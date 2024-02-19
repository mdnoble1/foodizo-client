import TitleBanner from "../../shared/TitleBanner/TitleBanner";
import image from "../../../assets/SharedBanner/menuBanner.png";

const MenuBanner = () => {
  return (
    <div>
      <TitleBanner
        image={image}
        title={"Delicious Menu Delights"}
        description={"Explore a tantalizing selection of culinary delights sure to satisfy every palate.Would you like to try a dish?"}
      ></TitleBanner>
    </div>
  );
};

export default MenuBanner;
