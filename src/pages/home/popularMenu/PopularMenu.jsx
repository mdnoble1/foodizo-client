import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItemCard from "../../../components/menuItemCard";

const PopularMenu = () => {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((item) => item.category == "burger");
        setPopularItems(popular);
      });
  }, []);

  return (
    <section>
      <SectionTitle
        title={"Popular Palates"}
        subtitle={"Savor-Every-Bite"}
      ></SectionTitle>
      <div>
        {popularItems?.map((item) => (
          <MenuItemCard key={item.id} item={item}></MenuItemCard>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
