import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "wowjs/css/libs/animate.css"; // Import Wow.js animations

const DestinationSection = () => {
  return (
    <div className="container-xxl py-5 destination">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Destination
          </h6>
          <h1 className="mb-5">Popular Destination</h1>
        </div>
        <div className="row g-3">
          <div className="col-lg-7 col-md-6">
            <div className="row g-3">
              <div
                className="col-lg-12 col-md-12 wow zoomIn fadeInLeft animated"
                data-wow-delay="0.1s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img className="img-fluid" src='https://images.unsplash.com/photo-1572431447238-425af66a273b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' alt="" />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    30% OFF
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Lakshadweep{" "}
                  </div>
                </a>
                    <span className="sp">
                      Photo by{" "}
                      <a href="https://unsplash.com/@random_clicks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Anuj Chauhan
                      </a>{" "}
                     
                    </span>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn fadeInUp animated"
                data-wow-delay="0.3s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img className="img-fluid" src="https://images.pexels.com/photos/13691356/pexels-photo-13691356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    25% OFF
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Munnar{" "}
                  </div>
                </a>
                    <span className="sp">
                      Photo by{" "}
                      <a href=" https://www.pexels.com/photo/foggy-sunrise-over-the-green-mountain-in-kerala-13691356/">
                        Nandhu Kumar
                      </a>
                    </span>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn fadeInUp animated"
                data-wow-delay="0.5s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img className="img-fluid" src="https://images.unsplash.com/photo-1595500828636-fbd6bf24517f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    35% OFF
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Kodaikanal
                  </div>
                  
                </a>
                  <span className="sp">
                    Photo by{" "}
                    <a href="https://unsplash.com/@karthikeyanchinnathamby?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                      Karthikeyan Chinnathamby
                    </a>
                  </span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 wow zoomIn fadeInRight animated wow slide-in-left"
            data-wow-delay="0.7s"
            style={{
                minHeight: '350px',
                animationDuration: '500ms',
                // visibility: 'hidden'
              }}
              data-mdb-toggle="animation"
              data-mdb-animation-start="onScroll"
              data-mdb-animation-on-scroll="repeat"
          >
            <a
              className="position-relative d-block h-100 overflow-hidden"
              href=""
            >
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="https://images.unsplash.com/photo-1607054931379-95e37fc6684b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                20% OFF
              </div>
              <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                Wayanad{" "}
              </div>
            </a>
                <span className="sp">
                  Photo by{" "}
                  <a href="https://unsplash.com/@firosnv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Firosnv. Photography
                  </a>
                </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationSection;
