import React from 'react';
import './Footer.css'; // Update your CSS file with the new styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-company">
          <h4>About Pickup at Ease</h4>
          <p>Providing top-notch pickup and delivery services, we aim to streamline your logistics with our award-winning support and technology-driven solutions.</p>
          <div className="certification-badges">
            <img src="/badges/iso-certified.png" alt="ISO Certified" />
            {/* ... other badges */}
          </div>
        </div>

        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <a href="mailto:info@pickupatease.com" className="email-link">info@pickupatease.com</a>
          <p className="phone-number">1-234-567-8910</p>
          <p className="hours">
            Mon - Fri: 10am - 6pm (ET)<br />
            *Hours may vary on holidays
          </p>
        </div>

        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
            {/* ... other quick links */}
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to receive the latest news and exclusive offers.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-section social-media-links">
          <h4>Follow Us</h4>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin-icon.png" alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook-icon.png" alt="Facebook" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Pickup at Ease. All rights reserved.</p>
        <div className="terms-privacy">
          <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
