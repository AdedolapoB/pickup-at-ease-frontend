import React from 'react';
import Footer from './Footer'; // Make sure this path is correct
import './Location.css'; // Make sure to create and style your LocationAndHours.css

const Location = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-info">
          <h2>GET IN TOUCH</h2>
          <p>Hey! We are looking forward to start a project with you!</p>
          <p className="contact-description">
            Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <div className="social-links">
            {/* Icons can be sourced from a library like FontAwesome */}
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            {/* Repeat for other social icons */}
          </div>
        </div>
        <div className="contact-details">
          <div className="phone-details">
            <h3>CALL US</h3>
            <p>1 (234) 567-891</p>
            <p>1 (234) 987-654</p>
          </div>
          <div className="location-details">
            <h3>LOCATION</h3>
            <p>121 Rock Street, 21 Avenue, New York, NY 92103-9000</p>
          </div>
          <div className="hours-details">
            <h3>BUSINESS HOURS</h3>
            <p>Mon – Fri ...... 10 am - 8 pm</p>
            <p>Sat, Sun ...... Closed</p>
          </div>
        </div>
        <div className="contact-form">
          <input type="text" placeholder="Enter your Name" />
          <input type="email" placeholder="Enter a valid email address" />
          <textarea placeholder="Enter your message"></textarea>
          <button type="submit">Submit</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Location;
