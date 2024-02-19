import SectionTitle from "../../../components/SectionTitle";
import MenuItemCard from "../../../components/menuItemCard";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category == "popular");

  return (
    <section>
      <SectionTitle
        title={"Popular Palates"}
        subtitle={"Savor-Every-Bite"}
      ></SectionTitle>
      <div className="w-11/12 mx-auto my-10 lg:my-16 grid md:grid-cols-2">
        {popularItems?.map((item) => (
          <MenuItemCard key={item.id} item={item}></MenuItemCard>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
