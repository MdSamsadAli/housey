// import { Link } from "react-router-dom";
// import logo from "../assets/images/logo.png";
// import { navbar } from "../data/Data";
// import { useState } from "react";

const Header = () => {
  // const [toggleNav, setToggleNav] = useState(false);
  // const navOpen = () => {
  //   setToggleNav(!toggleNav);
  // };
  return (
    <>
      {/* <div className="header">
        <div className="container-fluid">
          <div className="row d_flex">
            <div className="col-md-2 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <Link to={"/"}>
                      <img src={logo} alt="logo" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8 col-sm-12">
              <div className="navigation navbar navbar-expand-md navbar-dark">
                <button className="navbar-toggler" onClick={navOpen}>
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className={`${
                    toggleNav
                      ? "navbar-collapse collapsed"
                      : "navbar-collapse collapse"
                  }`}
                >
                  <ul className="navbar-nav mr-auto">
                    {navbar.map((val, key) => (
                      <li
                        className={`nav-item ${key === 0 ? "active" : ""}`}
                        key={key}
                      >
                        <Link className="nav-link" to={val.path}>
                          {val.nav}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <ul className="email text_align_right">
                <li className="d_none">
                  <Link>
                    <i className="fa fa-user"></i>
                  </Link>
                </li>

                <li className="d_none">
                  <Link>
                    <i className="fa fa-search"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      <div id="header-sticky" className="tp-header-bottom tp-header-sm-spacing">
        <div className="container">
          <div className="tp-header-main-wrap p-relative">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-6">
                <div className="tp-header-logo">
                  <a href="index.html">
                    <img
                      width="138"
                      src="/src/assets/img/logo/logo.png"
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 d-none d-lg-block">
                <div className="tp-main-menu">
                  <nav className="tp-mobile-menu-active">
                    <ul>
                      <li className="position-static">
                        <a href="index.html">Home</a>
                        <div className="tp-mega-menu">
                          <div className="tp-main-has-submenu">
                            <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-5">
                              <div className="col homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <a href="index.html">
                                    <img
                                      src="assets/img/menu-demo/demo.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">
                                    <a href="index.html">Modern Hotel</a>
                                  </h4>
                                </div>
                              </div>
                              <div className="col homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <a href="index-2.html">
                                    <img
                                      src="assets/img/menu-demo/demo-2.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">
                                    <a href="index-2.html">City Hotel</a>
                                  </h4>
                                </div>
                              </div>
                              <div className="col homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <a href="index-3.html">
                                    <img
                                      src="assets/img/menu-demo/demo-3.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">
                                    <a href="index-3.html">Luxury Hotel</a>
                                  </h4>
                                </div>
                              </div>
                              <div className="col homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <a href="index-4.html">
                                    <img
                                      src="assets/img/menu-demo/demo-4.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">
                                    <a href="index-4.html">Modern Resort</a>
                                  </h4>
                                </div>
                              </div>
                              <div className="col homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <a href="index-5.html">
                                    <img
                                      src="assets/img/menu-demo/demo-5.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">
                                    <a href="index-5.html">Sea Hotel</a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="room-1.html">Room</a>
                        <ul className="tp-submenu submenu">
                          <li>
                            <a href="room-1.html">Room One</a>
                          </li>
                          <li>
                            <a href="room-1.html">Room Two</a>
                          </li>
                          <li>
                            <a href="room-2.html">Room Three</a>
                          </li>
                          <li>
                            <a href="room-details-1.html">Room Details one</a>
                          </li>
                          <li>
                            <a href="room-details-1.html">Room Details Two</a>
                          </li>
                          <li>
                            <a href="room-details-2.html">Room Details Three</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Blog</a>
                        <ul className="tp-submenu submenu">
                          <li>
                            <a href="blog-grid.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-sidebar.html">Blog Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                          <li>
                            <a href="blog-details-2.html">Blog Details Two</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                        <ul className="tp-submenu submenu">
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                          <li>
                            <a href="offer.html">Offer</a>
                          </li>
                          <li>
                            <a href="pricing-plan.html">Pricing Plan</a>
                          </li>
                          <li>
                            <a href="destination.html">Destination</a>
                          </li>
                          <li>
                            <a href="destination-details.html">
                              Destination Details
                            </a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                          <li>
                            <a href="register.html">Register</a>
                          </li>
                          <li>
                            <a href="forgot.html">Forgot</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist</a>
                          </li>
                          <li>
                            <a href="privacy-policy.html">privacy-policy</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-4 col-lg-2 col-6">
                <div className="tp-header-action d-flex justify-content-end">
                  <div className="tp-header-search tp-search-click d-none d-xl-block">
                    <form
                      action="#"
                      className="tp-header-form tp-header-input-toggle"
                    >
                      <input
                        className="tp-header-search-input"
                        type="text"
                        placeholder="Search..."
                      />
                      <button className="tp-header-submit-btn" type="button">
                        <span>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.1111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.1111C15.2222 4.18375 12.0385 1 8.1111 1C4.18375 1 1 4.18375 1 8.1111C1 12.0385 4.18375 15.2222 8.1111 15.2222Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.0001 17L13.1334 13.1333"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                    </form>
                  </div>
                  <div className="tp-header-btn-wrap d-none d-lg-block ml-30">
                    <a className="tp-header-btn" href="contact.html">
                      Book Now
                    </a>
                  </div>
                  <div className="tp-header-3-menu-bar d-lg-none tp-header-menu-btn-black">
                    <button className="tp-offcanvas-open-btn">
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
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

export default Header;
