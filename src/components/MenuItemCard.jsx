const MenuItemCard = ({ item }) => {
  // console.log(item);

  const { name, recipe, image, price } = item || {};
  //   const { name, recipe, image, category, price, rating } = item || {};

  return (
    <section className="w-11/12 lg:w-10/12 h-44 mx-auto flex items-center gap-4 p-4 mb-6 bg-[#fffbef] rounded-3xl drop-shadow-2xl cursor-pointer border border-[#fffbef] hover:border-[#ff5900] duration-500 ease-in-out">
      <img
        className="w-28 h-28 rounded-full border-2 border-[#ff5900]"
        src={image}
        alt="menu"
      />
      <div className="">
        <div className="flex items-start justify-between mb-2">
          <h2 className="font-semibold lg:text-lg text-black uppercase">
            {name}
          </h2>
          <p className="font-semibold lg:text-lg uppercase text-[#ff5900] flex">
            <span className="text-black">$</span> {price}
          </p>
        </div>
        <p className="font-medium text-sm lg:text-base text-gray-500 text-justify">
          {recipe}
        </p>
      </div>
    </section>
  );
};

export default MenuItemCard;
