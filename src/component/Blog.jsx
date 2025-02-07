const Blog = () => {
  return (
    <>
      <div className="tp-blog-area pt-95 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section-title-wrapper text-center">
                <h6
                  className="tp-section-title-pre-red tp-section-title-pre wow fadeInUp"
                  data-wow-delay=".3s"
                  data-wow-duration="1s"
                >
                  Hotel News & Event
                </h6>
                <h2
                  className="tp-section-title mb-60 wow fadeInUp"
                  data-wow-delay=".4s"
                  data-wow-duration="1s"
                >
                  Explore Our Blog
                </h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-50">
              <div
                className="tp-blog-wrapper wow fadeInLeft"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                <div className="tp-blog-thumb mb-25">
                  <img
                    className="w-100"
                    src="assets/img/blog/01.jpg"
                    alt="blog"
                  />
                </div>
                <div className="tp-blog-content pb-30 mb-10">
                  <span className="tp-blog-date mb-10">April 10, 2024</span>
                  <h3 className="tp-blog-title mb-15">
                    <a href="blog-details.html">
                      Weighing the pros and cons of each choice.
                    </a>
                  </h3>
                  <p>
                    Navigating the world of hotel booking is a crucial aspect of
                    ensuring.
                  </p>
                </div>
                <div className="tp-blog-user-wrap d-flex align-items-center justify-content-between">
                  <div className="tp-blog-user">
                    <img src="assets/img/blog/01.png" alt="blog" />
                    <span>Jane Cooper</span>
                  </div>
                  <div className="tp-blog-read">
                    <span>
                      <i className="fa-regular fa-clock"></i> 4 Min Read
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-50">
              <div
                className="tp-blog-wrapper wow fadeInUp"
                data-wow-delay=".5s"
                data-wow-duration="1s"
              >
                <div className="tp-blog-thumb mb-25">
                  <img
                    className="w-100"
                    src="assets/img/blog/03.jpg"
                    alt="blog"
                  />
                </div>
                <div className="tp-blog-content pb-30 mb-10">
                  <span className="tp-blog-date mb-10">April 16, 2024</span>
                  <h3 className="tp-blog-title mb-15">
                    <a href="blog-details.html">
                      We will delve into the art of seamless hotel booking.
                    </a>
                  </h3>
                  <p>
                    Navigating the world of hotel booking is a crucial aspect of
                    ensuring.
                  </p>
                </div>
                <div className="tp-blog-user-wrap d-flex align-items-center justify-content-between">
                  <div className="tp-blog-user">
                    <img src="assets/img/blog/02.png" alt="blog" />
                    <span>Cody Fisher</span>
                  </div>
                  <div className="tp-blog-read">
                    <span>
                      <i className="fa-regular fa-clock"></i> 7 Min Read
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-50">
              <div
                className="tp-blog-wrapper wow fadeInRight"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                <div className="tp-blog-thumb mb-25">
                  <img
                    className="w-100"
                    src="assets/img/blog/02.jpg"
                    alt="blog"
                  />
                </div>
                <div className="tp-blog-content pb-30 mb-10">
                  <span className="tp-blog-date mb-10">April 18, 2024</span>
                  <h3 className="tp-blog-title mb-15">
                    <a href="blog-details.html">
                      Identifying your travel goals and preferences.
                    </a>
                  </h3>
                  <p>
                    Navigating the world of hotel booking is a crucial aspect of
                    ensuring.
                  </p>
                </div>
                <div className="tp-blog-user-wrap d-flex align-items-center justify-content-between">
                  <div className="tp-blog-user">
                    <img src="assets/img/blog/03.png" alt="blog" />
                    <span>Devon Lane</span>
                  </div>
                  <div className="tp-blog-read">
                    <span>
                      <i className="fa-regular fa-clock"></i> 4 Min Read
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="tp-blog-btn text-center">
                <a className="tp-btn-square" href="blog-grid.html">
                  All Publications
                  <span className="ml-5">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 1H9V9"
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
      </div>
    </>
  );
};

export default Blog;
