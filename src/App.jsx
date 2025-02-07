import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./page/Home";
import NotFoundPage from "./page/NotFoundPage";
import AboutUs from "./page/AboutUs";
import Contact from "./page/Contact";
import Shop from "./page/Shop";
// import SkatingPage from "./page/SkatingPage";
import TopHeader from "./common/TopHeader";

const App = () => {
  return (
    <>
      <Router>
        <div className="tp-header-height">
          <div className="tp-header-area">
            <TopHeader />
            <Header />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
