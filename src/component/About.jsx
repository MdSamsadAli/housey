import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gallery_img_1 from "./../assets/img/gellary/01.jpg";
const About = () => {
  return (
    <>
      <div className="tp-gallery-area tp-bg-gray fix pb-100">
        <div className="container-fluid gx-0 mb-20">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                breakpoints={{
                  1200: { slidesPerView: 2 },
                  991: { slidesPerView: 2, spaceBetween: 30 },
                  768: { slidesPerView: 2, spaceBetween: 20 },
                  576: { slidesPerView: 1, spaceBetween: 20 },
                  0: { slidesPerView: 1, spaceBetween: 20 },
                }}
                pagination={{ el: ".tp-gallery-pagination", type: "fraction" }}
                navigation={{
                  nextEl: ".tp-gallery-button-next",
                  prevEl: ".tp-gallery-button-prev",
                }}
              >
                <SwiperSlide>
                  <div className="tp-gallery-item">
                    <img
                      className="w-100"
                      src={gallery_img_1}
                      alt="gallery 1"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tp-gallery-item">
                    <img
                      className="w-100"
                      src={gallery_img_1}
                      alt="gallery 2"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tp-gallery-item">
                    <img
                      className="w-100"
                      src={gallery_img_1}
                      alt="gallery 3"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tp-gallery-item">
                    <img
                      className="w-100"
                      src={gallery_img_1}
                      alt="gallery 4"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center mb-70">
            <div className="col-lg-8">
              <div className="tp-gallery-pagination-wrapper d-flex justify-content-between align-items-center">
                <div className="tp-gallery-pagination"></div>
                <div className="tp-gallery-btn d-flex align-items-center">
                  <div className="tp-gallery-button-prev">
                    <i className="fa-light fa-angle-left"></i>
                  </div>
                  <div className="tp-gallery-button-next">
                    <i className="fa-light fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-3">
              <div className="tp-gallery-logo">{/* SVG Logo */}</div>
            </div>
            <div className="col-lg-8 col-md-9 col-sm-9">
              <div className="tp-gallery-content">
                <h2 className="tp-gallery-title mb-25">
                  Planning a Dream Vacation or a Spontaneous Weekend Getaway?
                </h2>
                <p className="mb-40">
                  In the era of endless possibilities, travel enthusiasts embark
                  on journeys to explore new horizons. A crucial aspect of any
                  travel plan is finding the perfect accommodation, and in this
                  blog post, we will delve into the art of seamless hotel
                  booking. Whether you are a seasoned traveler or a first-timer,
                  these tips will ensure your hotel booking experience is smooth
                  and rewarding.
                </p>
                <a className="tp-gallery-view" href="pricing-plan.html">
                  <span>View Prices</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
