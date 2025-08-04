import React, { useState } from 'react';
import './Contact.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
    captcha: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call or email service here
  };

  return (

      <div className="contact-wrapper">
        {/* Left Side - Contact Form */}
        <div className="contact-form-section">
          <div className="contact-header">
            <h1>Leave a Message</h1>
            <p>Get in touch with us for any inquiries or support</p>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="tel"
                  id="number"
                  name="number"
                  placeholder="Number"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  required
                />
              </div>
            </div>

            <div className="form-row captcha-row">
              <div className="captcha-group">
                <input
                  type="checkbox"
                  id="captcha"
                  name="captcha"
                  checked={formData.captcha}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="captcha">I am Not a Robot</label>
              </div>
            </div>

            <div className="form-row">
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Address Section */}
        <div className="contact-image-section">
          <div className="image-container">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>Our team is here to help you with all your CAD and surveying needs.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="icon">📧</span>
                  <span>info@cadlab.co.in</span>
                </div>
                <div className="contact-item">
                  <span className="icon">📱</span>
                  <span>9861688555</span>
                </div>
                <div className="contact-item">
                  <span className="icon">📍</span>
                  <span>Cadlab, 5th lane chowk, Amalapada, Angul - 759122</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default Contact;
