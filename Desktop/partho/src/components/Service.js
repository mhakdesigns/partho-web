import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'wowjs/css/libs/animate.css'; // Import Wow.js animations

const ServicesSection = () => {
  const services = [
    {
      icon: 'globe',
      title: 'WorldWide Tours',
      description: 'We help you plan your dream vacation, from booking flights and hotels to organizing tours and activities.',
    },
    {
      icon: 'hotel',
      title: 'Hotel Reservation',
      description: "We make it easy to find and book the perfect hotel for your trip, no matter where you're going",
    },
    {
      icon: 'user',
      title: 'Travel Guides',
      description: ' We provide comprehensive information on destinations all over the world, from popular tourist spots to hidden gems',
    },
    {
      icon: 'tree',
      title: 'Trekking ',
      description: 'We help you plan your dream trek, from finding the perfect route to booking your gear.',
    },
    // Add more services here
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center txt-main px-3">Services</h6>
          <h1 className="mb-5">Our Services</h1>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={`${0.1 * index}s`}>
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className={`fa fa-3x fa-${service.icon} txt-main mb-4`}></i>
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;