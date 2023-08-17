import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "wowjs/css/libs/animate.css"; //
import i from '../img/about.jpg'
const Welcome = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div
            className="col-lg-6 wow fadeInUp animated "
            data-wow-delay="0.1s"
            style={{ minHeight: "400px" }}
          >
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src={i}
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start txt-main pe-3 ">
              About Us
            </h6>
           
            <p className="mb-4 fadeInUp animated">
              Let us take you on an adventure! We are a team of experienced
              travel enthusiasts who love to help people explore the world. We
              offer a wide range of services, from custom-designed itineraries
              to group tours. We can help you plan your dream vacation, no
              matter what your budget or interests.
            </p>
            <p className="mb-4 fadeInUp animated">
              We believe that travel is more than just seeing new places. It's
              about experiencing new cultures, meeting new people, and learning
              about yourself. We want to help you make the most of your travels
              and create memories that will last a lifetime.
            </p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right txt-main me-2"></i>WorldWide Tours
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right txt-main me-2"></i>
                  Hotel Reservation
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right txt-main me-2"></i>5 Star
                  Accommodations
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right txt-main me-2"></i>Travel Guides
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right txt-main me-2"></i>Trekking
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right txt-main me-2"></i>24/7
                  Service
                </p>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5 mt-2" href="/">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;