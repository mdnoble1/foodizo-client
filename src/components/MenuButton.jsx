const MenuButton = ({ buttonTitle }) => {
  return (
    <section>
      <button className="bg-gradient-to-r from-[#ff5900] to-[#ff8327] p-1 rounded-md text-black hover:text-white hover:scale-105 duration-300 ease-in-out">
        <div className="flex items-center gap-8 font-semibold px-6 py-3 rounded-md text-lg uppercase">
          {buttonTitle}
        </div>
      </button>
    </section>
  );
};

export default MenuButton;
