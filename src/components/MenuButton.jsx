const MenuButton = ( { buttonTitle } ) => {
    return (
      <div>
        <button className="btn btn-outline text-black uppercase text-sm md:text-base lg:text-lg">
          {buttonTitle}
        </button>
      </div>
    );
  };
  
  export default MenuButton;
  