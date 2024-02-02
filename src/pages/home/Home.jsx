import Banner from "./banner/Banner";
import Category from "./category/Category";
import PopularMenu from "./popularMenu/PopularMenu";
import Footer from "./shared/footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Footer></Footer>
    </div>
  );
};

export default Home;
