// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import effect fade style
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { banner } from "../data/Data";
import { Link } from "react-router-dom";

const BannerSlider = () => {
  return (
    <>
      <div className="tp-hero-area p-relative">
        <div className="shop-slider-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={false}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            effect="fade" // Add fade effect here
            className="tp-hero-slider-active"
          >
            {banner.map((val, key) => (
              <SwiperSlide key={key}>
                <div className="tp-hero-five-bg">
                  <div className="tp-hero-thumb">
                    <img
                      src={val.img}
                      alt="sliderimg"
                      className="img_responsive"
                    />
                  </div>
                  {/* <div className="carousel-caption relative">
                    <div className="row d_flex">
                      <div className="col-md-5">
                        <div className="board">
                          <i>
                            <img src={val.icon_img} alt="icon" />
                          </i>
                          <h3>{val.text}</h3>
                          <div className="link_btn">
                            <Link className="read_more">{val.btn}</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="banner_img">
                          <figure>
                            <img
                              src={val.img}
                              alt="sliderimg"
                              className="img_responsive"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Hero Content Section */}
        <div className="tp-hero-content-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="tp-hero-content text-center">
                  <div className="tp-hero-title-box mb-30">
                    <h5 className="tp-hero-subtitle mb-15">
                      Best Choice for Family
                    </h5>
                    <h2 className="tp-hero-title">
                      Indulge in a Luxurious <br /> Hotel Experience
                    </h2>
                  </div>
                  <Link className="tp-btn" to="/about">
                    <span className="explore-text">Explore More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Date Form Section */}
        <div className="tp-hero-date-form">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-8 col-xl-9 col-lg-10 col-12">
                <div className="tp-hero-search-form">
                  <form action="#">
                    <div className="tp-hero-quantity-wrap d-flex">
                      {/* Check-In Input */}
                      <div className="tp-hero-form-input pb-20 mr-10">
                        <p>Check-In</p>
                        <div className="p-relative">
                          <input
                            name="checkin"
                            type="text"
                            placeholder="dd/mm/yyyy"
                          />
                        </div>
                      </div>
                      {/* Check-Out Input */}
                      <div className="tp-hero-form-input pb-20 mr-10">
                        <p>Check-Out</p>
                        <div className="p-relative">
                          <input
                            name="checkout"
                            type="text"
                            placeholder="dd/mm/yyyy"
                          />
                        </div>
                      </div>
                      {/* Guests Quantity Selector */}
                      <div className="tp-hero-form-quantity mr-20">
                        <p>Guests</p>
                        <div className="tp-hero-quantity p-relative">
                          <span className="tp-hero-quantity-click tp-hero-quantity-toggle">
                            4 Guest(s)
                          </span>
                          <div className="tp-hero-quantity-border tp-hero-quantity-active">
                            <ul className="tp-hero-quantity-list border-bottom">
                              <li>
                                <div className="tp-hero-quantity-content">
                                  <span>Adult</span>
                                  <p>Ages 12 or above</p>
                                </div>
                                <div className="tp-hero-quantity-inner">
                                  <input
                                    className="tp-hero-quantity-input"
                                    type="text"
                                    value="1"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="tp-hero-quantity-content">
                                  <span>Child</span>
                                  <p>Ages below 12</p>
                                </div>
                                <div className="tp-hero-quantity-inner">
                                  <input
                                    className="tp-hero-quantity-input"
                                    type="text"
                                    value="0"
                                  />
                                </div>
                              </li>
                            </ul>
                            <div className="tp-hero-quantity-btn">
                              <button type="button">OK</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Submit Button */}
                      <div className="tp-hero-submit-btn-wrap mb-20">
                        <button className="tp-hero-submit-btn" type="submit">
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSlider;
