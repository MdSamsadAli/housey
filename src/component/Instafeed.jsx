import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
// import img1 from "../assets/img/instagram/01.jpg"
const InstagramGallery = () => {
  const images = [
    "../src/assets/img/instagram/01.jpg",
    "../src/assets/img/instagram/02.jpg",
    "../src/assets/img/instagram/03.jpg",
    "../src/assets/img/instagram/04.jpg",
    "../src/assets/img/instagram/05.jpg",
    "../src/assets/img/instagram/06.jpg",
  ];

  return (
    <div className="tp-instagram-area pb-10">
      <div className="container-fluid fix">
        <Swiper
          className="tp-instagram-slide"
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            1200: { slidesPerView: 6 },
            991: { slidesPerView: 5 },
            768: { slidesPerView: 4 },
            576: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".tp-destinations-next",
            prevEl: ".tp-destinations-prev",
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="tp-instagram-thumb p-relative">
                <a className="popup-image" href={src}>
                  <img
                    className="w-100"
                    src={src}
                    alt={`Instagram ${index + 1}`}
                  />
                  <div className="tp-instagram-icon p-absolute">
                    <span>
                      <i className="fa-brands fa-instagram"></i>
                    </span>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="tp-destinations-next">Next</div>
        <div className="tp-destinations-prev">Prev</div>
      </div>
    </div>
  );
};

export default InstagramGallery;
