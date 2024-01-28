import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../../assets/banner/foodizoBanner7.png"
import image2 from "../../../assets/banner/foodizoBanner9.png"
import image3 from "../../../assets/banner/foodizoBanner6.png"
import image4 from "../../../assets/banner/foodizoBanner8.png"
import image5 from "../../../assets/banner/foodizoBanner2.png"
import image6 from "../../../assets/banner/foodizoBanner5.png"

const Banner = () => {
  return (
    <Carousel className="text-center" autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={image1} />
      </div>
      <div>
        <img src={image2} />
      </div>
      <div>
        <img src={image3} />
      </div>
      <div>
        <img src={image4} />
      </div>
      <div>
        <img src={image5} />
      </div>
      <div>
        <img src={image6} />
      </div>
    </Carousel>
  );
};

export default Banner;
