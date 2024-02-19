const BannerCover = ({ image, title, description }) => {
  return (
    <section>
      <div className="relative h-min cursor-pointer">
        <img className="mx-auto" src={image} alt="banner" />
        <div className="bg-black w-full h-full flex items-center justify-center absolute bottom-0 bg-opacity-50">
          <div className="text-center w-9/12">
            <h2 className="font-bold text-xl md:text-3xl lg:text-5xl text-white uppercase mb-4 lg:mb-8">
              {title}
            </h2>
            <p className="font-semibold text-xs md:text-base lg:text-2xl text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCover;
