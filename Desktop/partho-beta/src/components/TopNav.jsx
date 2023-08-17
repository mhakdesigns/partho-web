import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 

const TopNav = () => {
  return (
    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
      <div className="row gx-0">
        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
            <small className="me-3 text-light">
              <i className="fa fa-map-marker-alt me-2"></i> kerala, India
            </small>
            <small className="me-3 text-light">
              <i className="fa fa-phone-alt me-2"></i>+91 994 717 1200
            </small>
            <small className="text-light">
              <i className="fa fa-envelope-open me-2"></i>care.partho@gmail.com
            </small>
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href="https://wa.me/+919947171200/"
            >
              <i className="fab fa-whatsapp fw-normal"></i>
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href="https://www.instagram.com/partho.info/"
            >
              <i className="fab fa-instagram fw-normal"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav