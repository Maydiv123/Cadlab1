import React from 'react';
import './Footer.css';
import backgroundFooter from '../assets/Background Footer.png';

function FooterComponent() {
  return (
    <footer className="footer">
      {/* Business Growth Section */}
      <section className="business-growth-section">
        <div className="business-growth-container">
          <div className="business-growth-content">
            <h2 className="business-growth-title">Ready to Transform Your Ideas?</h2>
            <p className="business-growth-description">
              Join thousands of businesses that trust CADLAB for their design and manufacturing needs. From concept to production, we're here to bring your vision to life.
            </p>
            <div className="business-growth-buttons">
              <button className="btn-register">Start Your Project</button>
              <button className="btn-contact">Get Free Quote</button>
            </div>
          </div>
        </div>
      </section>

      {/* Background Footer Image Section */}
      <section 
        className="background-footer-section"
        style={{
          backgroundImage: `url(${backgroundFooter})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '730px',
          width: '100%'
        }}
      >
        <div className="footer-links-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">CADLAB</div>
              <p className="footer-description">
                Your trusted partner in CAD/CAM solutions, 3D printing, and precision engineering. We combine cutting-edge technology with expert craftsmanship to deliver exceptional results.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link" title="Visit our website">🌐</a>
                <a href="#" className="social-link" title="Follow us on Facebook">📘</a>
                <a href="#" className="social-link" title="Follow us on Twitter">🐦</a>
                <a href="#" className="social-link" title="Connect on LinkedIn">💼</a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h3 className="footer-column-title">Our Services</h3>
                <ul className="footer-links-list">
                  <li><a href="#">3D Modeling & Design</a></li>
                  <li><a href="#">CAD/CAM Solutions</a></li>
                  <li><a href="#">3D Printing Services</a></li>
                  <li><a href="#">Laser Cutting & Engraving</a></li>
                  <li><a href="#">CNC Machining</a></li>
                  <li><a href="#">Rapid Prototyping</a></li>
                  <li><a href="#">Engineering Consultation</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h3 className="footer-column-title">Customer Support</h3>
                <ul className="footer-links-list">
                  <li><a href="#">24/7 Technical Support</a></li>
                  <li><a href="#">Design Guidelines</a></li>
                  <li><a href="#">File Format Support</a></li>
                  <li><a href="#">Instant Quote Calculator</a></li>
                  <li><a href="#">Order Status Tracking</a></li>
                  <li><a href="#">Live Chat Support</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-column-title">Company</h3>
                <ul className="footer-links-list">
                  <li><a href="#">About CADLAB</a></li>
                  <li><a href="#">Our Team</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                © 2025 CADLAB. All rights reserved. | Privacy Policy | Terms of Service
              </p>
              <div className="footer-contact-info">
                <span>📧 info@cadlab.com</span>
                <span>📞 +1 (555) 123-4567</span>
                <span>📍 123 Innovation Drive, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default FooterComponent; 