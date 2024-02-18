import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section>
      <SectionTitle
        title={"Inspiring Experiences"}
        subtitle={"Memories-Made-Flavorful"}
      ></SectionTitle>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        coverflowEffect={{
          rotate: 10,
          stretch: 50,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper w-10/12 md:w-3/5 lg:w-10/12 mx-auto my-4 lg:my-8"
      >
        {reviews?.map((review) => (
          <SwiperSlide
            key={review.id}
            className="py-12 px-8 md:px-2 lg:py-12 lg:px-16"
          >
            <div className="md:w-10/12 lg:w-3/4 mx-auto bg-[#fffbef] px-4 pt-10 rounded-xl drop-shadow-xl border border-white hover:border-1 hover:border-[#ff5900] duration-500 ease-in-out">
              <div className="w-fit bg-[#ff5900] p-1 rounded-full mx-auto">
                <img className="w-32 mx-auto rounded-full" src={review.image} />
              </div>
              <h2 className="font-semibold lg:text-lg text-black uppercase text-center my-4">
                {review.name}
              </h2>
              <p className="text-sm lg:text-base text-gray-500 text-center h-28 md:h-36 mb-8">
                {review.review}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
