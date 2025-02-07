import offer_img from "./../assets/img/room/bg-2.jpg";
const Offer = () => {
  return (
    <>
      <div className="tp-offer-room-area tp-offer-room-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="tp-offer-bg bg-position jarallax p-relative"
                style={{
                  backgroundImage: `url(${offer_img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="row justify-content-end">
                  <div className="col-xl-5 col-lg-6 col-md-7 col-sm-10 col-12">
                    <div className="tp-offer-info-wrapper">
                      <div className="tp-offer-title-wrap">
                        <span className="tp-offer-title-pre">
                          Exclusive Offer
                        </span>
                        <h2 className="tp-offer-title mb-20">
                          When to Book for the Best Deals
                        </h2>
                      </div>
                      <div className="tp-offer-rating-quantity mb-40 d-flex align-items-center">
                        <div className="tp-offer-rating-wrap">
                          <div className="tp-offer-rating-days">
                            <span>3 Days</span>
                            <span className="space">|</span>
                            <span>4 Night</span>
                          </div>
                          <div className="tp-offer-rating">
                            <span>
                              <i className="fa-sharp fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star"></i>
                            </span>
                          </div>
                        </div>
                        <div className="tp-offer-price">
                          <span>Only</span>
                          <h6>$276.00</h6>
                        </div>
                      </div>
                      <span className="tp-offer-border mb-15"></span>
                      <p className="tp-offer-para mb-35">
                        Whether you are embarking on a business trip, family
                        vacation, or romantic getaway, mastering the art of
                        hotel booking ensures comfort, convenience, and
                        unforgettable memories.
                      </p>
                      <div className="tp-offer-btn">
                        <a className="tp-btn-2 tp-btn-3" href="contact.html">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
