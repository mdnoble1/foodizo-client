import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import slide1 from "../../../assets/category/burger.png";
import slide2 from "../../../assets/category/pizza.png";
import slide3 from "../../../assets/category/soup.png";
import slide4 from "../../../assets/category/salad.png";
import slide5 from "../../../assets/category/dessert.png";
import slide6 from "../../../assets/category/juice.png";
import SectionTitle from "../../../components/SectionTitle";

const Category = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 2,
        spacing: 20,
      },
      breakpoints: {
        "(min-width: 426px)": {
          slides: { perView: 3, spacing: 20 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 4, spacing: 20 },
        },
      },
    },

    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <section className="w-11/12 mx-auto my-16">
      <SectionTitle
        title={"Culinary Categories"}
        subtitle={"Explore-Indulge-Enjoy"}
      ></SectionTitle>
      <div ref={sliderRef} className="keen-slider py-6">
        <div className="keen-slider__slide number-slide1 relative h-min">
          <img className="mx-auto rounded-3xl" src={slide1} alt="category" />
          <div className="bg-black w-full h-full flex items-center justify-center rounded-3xl absolute bottom-0 bg-opacity-50">
            <h2 className="font-bold text-xl md:text-3xl lg:text-4xl text-white uppercase">
              Burgers
            </h2>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2 relative h-min">
          <img className="mx-auto rounded-3xl" src={slide2} alt="category" />
          <div className="bg-black w-full h-full flex items-center justify-center rounded-3xl absolute bottom-0 bg-opacity-50">
            <h2 className="font-bold text-xl md:text-3xl lg:text-4xl text-white uppercase">
              Pizzas
            </h2>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3 relative h-min">
          <img className="mx-auto rounded-3xl" src={slide3} alt="category" />
          <div className="bg-black w-full h-full flex items-center justify-center rounded-3xl absolute bottom-0 bg-opacity-50">
            <h2 className="font-bold text-xl md:text-3xl lg:text-4xl text-white uppercase">
              Soups
            </h2>
          </div>
        </div>
        <div className="keen-slider__slide number-slide4 relative h-min">
          <img className="mx-auto rounded-3xl" src={slide4} alt="category" />
          <div className="bg-black w-full h-full flex items-center justify-center rounded-3xl absolute bottom-0 bg-opacity-50">
            <h2 className="font-bold text-xl md:text-3xl lg:text-4xl text-white uppercase">
              Salads
            </h2>
          </div>
        </div>
        <div className="keen-slider__slide number-slide5 relative h-min">
          <img className="mx-auto rounded-3xl" src={slide5} alt="category" />
          <div className="bg-black w-full h-full flex items-center justify-center rounded-3xl absolute bottom-0 bg-opacity-50">
            <h2 className="font-bold text-xl md:text-3xl lg:text-4xl text-white uppercase">
              Desserts
            </h2>
          </div>
        </div>
        <div className="keen-slider__slide number-slide6 relative h-min">
          <img className="mx-auto rounded-3xl" src={slide6} alt="category" />
          <div className="bg-black w-full h-full flex items-center justify-center rounded-3xl absolute bottom-0 bg-opacity-50">
            <h2 className="font-bold text-xl md:text-3xl lg:text-4xl text-white uppercase">
              Juices
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
