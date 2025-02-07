import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { rooms } from "../data/Data";

const Rooms = () => {
  return (
    <div className="tp-suites-area pt-115 pb-115">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-section-title-wrapper mb-60 text-center">
              <h6
                className="tp-section-title-pre-red tp-section-title-pre wow fadeInUp"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                Extraordinary Suites
              </h6>
              <h2
                className="tp-section-title wow fadeInUp"
                data-wow-delay=".4s"
                data-wow-duration="1s"
              >
                Discover Tranquility in
                <br /> Our Relax Rooms
              </h2>
            </div>
          </div>
          <div className="col-lg-12">
            <Swiper
              modules={[Navigation, Pagination]} // Pass modules here
              navigation={false}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={3}
              className="tp-service-active"
            >
              {rooms.map((val, key) => (
                <SwiperSlide key={key}>
                  <div className="tp-suites-item p-relative">
                    <a href="room-details-1.html">
                      <div className="tp-suites-thumb">
                        <img className="w-100" src={val.img} alt="service" />
                      </div>
                    </a>
                    <div className="tp-suites-price p-absolute">
                      <span>
                        <b>$175</b> Per Night
                      </span>
                    </div>
                    <div className="tp-suites-content p-absolute">
                      <h3 className="tp-suites-title">
                        <a href="room-details-1.html">Superior Room</a>
                      </h3>
                      <div className="tp-suites-room mb-15">
                        <span>4 Guests</span>
                        <span className="space">|</span>
                        <span>Size: 26sqm, 270 sqft</span>
                      </div>
                      <div className="tp-suites-hidden">
                        <p>
                          Booking the perfect hotel sets the stage for an
                          incredible travel experience.
                        </p>
                        <div className="tp-suites-btn">
                          <a className="tp-btn-2" href="room-details-1.html">
                            <span>
                              <svg
                                width="12"
                                height="15"
                                viewBox="0 0 12 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11 13.8571L6 10.2857L1 13.8571V2.42857C1 2.04969 1.15051 1.68633 1.41842 1.41842C1.68633 1.15051 2.04969 1 2.42857 1H9.57143C9.95031 1 10.3137 1.15051 10.5816 1.41842C10.8495 1.68633 11 2.04969 11 2.42857V13.8571Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tp-service-pagination"></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
