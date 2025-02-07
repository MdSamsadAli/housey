import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { testimonial } from "../data/Data";

// Install Swiper modules
// SwiperCore.use([Pagination, Autoplay]);

const Testimonial = () => {
  return (
    <div className="tp-testimonial-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-bg-gray pt-95 pb-105">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    className="tp-testimonial-active"
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 4000 }}
                    pagination={{
                      el: ".tp-testimonial-pagination",
                      clickable: true,
                    }}
                  >
                    {testimonial.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="tp-testimonial-wrapper text-center">
                          <div className="tp-testimonial-title-wrap">
                            <div className="tp-testimonial-ratings mb-15">
                              {Array(5)
                                .fill()
                                .map((_, i) => (
                                  <span key={i}>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                  </span>
                                ))}
                            </div>
                            <h2 className="tp-testimonial-title mb-25">
                              {item.title}
                            </h2>
                          </div>
                          <div className="tp-testimonial-content mb-30">
                            <p>{item.description}</p>
                          </div>
                          <div className="tp-testimonial-clients">
                            <img src={item.img} alt="testimonial" />
                            <span className="tp-testimonial-clients-name">
                              {item.name}
                            </span>
                            <span className="tp-testimonial-clients-location">
                              {item.location}
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="tp-testimonial-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
