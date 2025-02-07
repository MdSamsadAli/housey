const Footer = () => {
  return (
    <>
      <footer>
        <div className="tp-footer-area tp-pink-bg pt-120">
          <div className="container mb-50">
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                <div className="tp-footer-widget mb-60">
                  <div className="tp-footer-logo mb-25">
                    <a href="index.html">
                      <img
                        data-width="138"
                        src="../src/assets/img/logo/logo-white.png"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-location mb-20">
                      <a href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z">
                        84 N. Hill Field St.Scarsdale, NY 10583
                      </a>
                    </div>
                    <div className="tp-footer-number mb-15">
                      <span className="tp-footer-call-title">
                        Call For Reservations
                      </span>
                      <a href="tel:+(62)43502476" className="tp-footer-call">
                        +(62) 4350 2476
                      </a>
                    </div>
                    <div className="tp-footer-btn">
                      <a href="#">
                        View Map
                        <span>
                          <svg
                            width="10"
                            height="11"
                            viewBox="0 0 10 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 9.5L9 1.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1 1.5H9V9.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-7 col-md-6 col-sm-6">
                <div className="tp-footer-widget mb-60">
                  <h3 className="tp-footer-widget-title mb-25">Quick Links</h3>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="tp-footer-widget-content">
                        <ul>
                          <li>
                            <a href="#">Things To Do</a>
                          </li>
                          <li>
                            <a href="#">Rooms & Suites</a>
                          </li>
                          <li>
                            <a href="#">About Us</a>
                          </li>
                          <li>
                            <a href="#">Book Now</a>
                          </li>
                          <li>
                            <a href="#">Testimonials</a>
                          </li>
                          <li>
                            <a href="#">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="tp-footer-widget-content">
                        <ul>
                          <li>
                            <a href="#">Services</a>
                          </li>
                          <li>
                            <a href="#">Popular Destination</a>
                          </li>
                          <li>
                            <a href="#">Pricing Plan</a>
                          </li>
                          <li>
                            <a href="#">Gallery</a>
                          </li>
                          <li>
                            <a href="#">Restaurant</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="tp-footer-widget tp-footer-widget-space pl-65 mb-60">
                  <h3 className="tp-footer-widget-title mb-15">
                    Don’t miss
                    <br />
                    Our Latest Updated
                  </h3>
                  <p className="tp-footer-widget-para mb-10">
                    Sign up to our newsletter for exclusive offers.
                  </p>
                  <div className="tp-footer-form mb-20">
                    <form action="#">
                      <div className="tp-footer-input p-relative">
                        <input type="email" placeholder="E-mail" />
                        <button
                          type="button"
                          className="tp-footer-input-btn p-absolute"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="tp-footer-social">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.33161 6.77486L15.1688 0H13.7856L8.71722 5.8826L4.66907 0H0L6.12155 8.89546L0 16H1.38336L6.73581 9.78785L11.0109 16H15.68L9.33148 6.77486H9.33187H9.33161ZM7.43696 8.97374L6.81669 8.088L1.88171 1.03969H4.00634L7.98902 6.72789L8.60929 7.61362L13.7863 15.0074H11.6616L7.43709 8.974V8.97361L7.43696 8.97374Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-footer-botom">
            <div className="container">
              <div className="tp-footer-bottom-inner">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="tp-footer-copyright">
                      <p>
                        Copyright © 2024 <a href="#">Housey</a>. All Rights
                        Reserved.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tp-footer-develop tp-footer-copyright text-right">
                      <p>
                        Developed by: <a href="#">ThemePure</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
