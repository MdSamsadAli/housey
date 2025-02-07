// import { Link } from "react-router-dom";
// import Heading from "../common/Heading";
import { facility } from "../data/Data";

const Facility = () => {
  return (
    <>
      <div className="tp-feature-area pt-90 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-feature-title-wrap mb-60 text-center">
                <h2
                  className="tp-section-title m-0 wow fadeInUp"
                  data-wow-delay=".3s"
                  data-wow-duration="1s"
                >
                  Facilities
                </h2>
                <p
                  className="tp-section-title-para wow fadeInUp"
                  data-wow-delay=".5s"
                  data-wow-duration="1s"
                >
                  Enjoy the luxury of time and convenience!
                </p>
              </div>
            </div>

            {facility.map((val, key) => (
              <div
                className="col-lg-3 col-md-6 col-sm-6 mb-30 tp-feature-border"
                key={key}
              >
                <div
                  className="tp-feature-wrapper text-center wow fadeInUp"
                  data-wow-delay=".3s"
                  data-wow-duration="1s"
                >
                  <div className="tp-feature-thumb mb-15">
                    <img src={val.img} alt="thumb" />
                  </div>
                  <div className="tp-feature-content">
                    <h3 className="tp-feature-title">
                      <a href="room-details-1.html">{val.title}</a>
                    </h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* <div
              className="col-lg-3 col-md-6 col-sm-6 mb-30 tp-feature-border wow fadeInUp"
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <div className="tp-feature-wrapper text-center">
                <div className="tp-feature-thumb mb-15">
                  <img src="assets/img/feature/02.jpg" alt="thumb" />
                </div>
                <div className="tp-feature-content">
                  <h3 className="tp-feature-title">
                    <a href="room-details-1.html">Swimming Pool</a>
                  </h3>
                  <p>Host your events in style with our versatile meeting</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6 mb-30 tp-feature-border wow fadeInUp"
              data-wow-delay=".5s"
              data-wow-duration="1s"
            >
              <div className="tp-feature-wrapper text-center">
                <div className="tp-feature-thumb mb-15">
                  <img src="assets/img/feature/04.jpg" alt="thumb" />
                </div>
                <div className="tp-feature-content">
                  <h3 className="tp-feature-title">
                    <a href="room-details-1.html">Bus Transfer</a>
                  </h3>
                  <p>Host your events in style with our versatile meeting</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
              <div
                className="tp-feature-wrapper text-center wow fadeInUp"
                data-wow-delay=".6s"
                data-wow-duration="1s"
              >
                <div className="tp-feature-thumb mb-15">
                  <img src="assets/img/feature/01.jpg" alt="thumb" />
                </div>
                <div className="tp-feature-content">
                  <h3 className="tp-feature-title">
                    <a href="room-details-1.html">Under Protection</a>
                  </h3>
                  <p>Host your events in style with our versatile meeting</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Facility;
