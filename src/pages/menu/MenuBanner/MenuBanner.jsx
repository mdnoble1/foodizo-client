import TitleBanner from "../../shared/TitleBanner/TitleBanner";
import image from "../../../assets/SharedBanner/menuBanner.png";

const MenuBanner = () => {
  return (
    <div>
      <TitleBanner
        image={image}
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
      ></TitleBanner>
    </div>
  );
};

export default MenuBanner;
