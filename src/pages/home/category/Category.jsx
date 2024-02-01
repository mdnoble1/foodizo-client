import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import slide2 from "../../../assets/category/slide2.jpg";

const Category = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
  });

  return (
    <section className="w-11/12 mx-auto border border-red-600">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <img className="mx-auto" src={slide2} alt="category" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img className="mx-auto" src={slide2} alt="category" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img className="mx-auto" src={slide2} alt="category" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <img className="mx-auto" src={slide2} alt="category" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <img className="mx-auto" src={slide2} alt="category" />
        </div>
        <div className="keen-slider__slide number-slide6">
          <img className="mx-auto" src={slide2} alt="category" />
        </div>
      </div>
    </section>
  );
};

export default Category;
