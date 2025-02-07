// import About from "../component/About";
import About from "../component/About";
import BannerSlider from "../component/BannerSlider";
import Facility from "../component/Facility";
import Offer from "../component/Offer";
import Pricing from "../component/Pricing";
import Rooms from "../component/Rooms";
import WhyUs from "../component/WhyUs";
// import SkatingV from "../component/SkatingV";
import Testimonial from "../component/Testimonials";
import Blog from "../component/Blog";
import Instafeed from "../component/Instafeed";

const Home = () => {
  return (
    <main>
      <BannerSlider />
      <Facility />
      <WhyUs />
      <Rooms />
      <Offer />
      <About />
      <Pricing />
      <Testimonial />
      <Blog />
      <Instafeed />
    </main>
  );
};

export default Home;
