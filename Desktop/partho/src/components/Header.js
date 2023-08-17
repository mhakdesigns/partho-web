import React from "react";
import logo from '../img/logo.png'
const Header = () => {
  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0 fadeInUp animated">
            <img src={logo} style={{ height: "150px" }} alt="Logo" />
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          {/* <div className="navbar-nav ms-auto py-0">
            <a href="/" className="nav-item nav-link">
              Home
            </a>
            <a href="/about" className="nav-item nav-link active">
              About
            </a>
            <a href="/service" className="nav-item nav-link">
              Services
            </a>
            <a href="/package" className="nav-item nav-link">
              Packages
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <a href="/destination" className="dropdown-item">
                  Destination
                </a>
                <a href="/booking" className="dropdown-item">
                  Booking
                </a>
                <a href="/team" className="dropdown-item">
                  Travel Guides
                </a>
                <a href="/testimonial" className="dropdown-item">
                  Testimonial
                </a>
                <a href="/404" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div>
          </div> */}
            {/* <a href="/contact" className="btn btn-primary">
              Contact
            </a> */}
         
        </div>
      </nav>

      
    </div>
  );
};

export default Header;