import MenuItemCard from "../../../components/MenuItemCard";
import SectionTitle from "../../../components/SectionTitle";

const TodayOffer = ({ items }) => {
  return (
    <section className="lg:mt-32 mb-20">
      <SectionTitle
        title={"TODAY'S OFFER"}
        subtitle={"Don't Miss"}
      ></SectionTitle>
      <div className="container mx-auto w-11/12 lg:w-full grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {items?.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
      {/* <div className="mt-10 text-center">
        <Link to="/shop/salads">
          <MenuButton buttonTitle={"ORDER YOUR FAVOURITE FOOD"}></MenuButton>
        </Link>
      </div> */}
    </section>
  );
};

export default TodayOffer;
