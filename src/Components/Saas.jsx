import React from 'react';
import './Saas.css';
import rectangle40 from '../assets/Rectangle 40.png';
import pixelMockup from '../assets/Pixel True Mockup 1.png';
import voamine from '../assets/voamine.png';
import rectangle26 from '../assets/Rectangle 26.png';
import rectangle28 from '../assets/Rectangle 28.png';
import group177 from '../assets/Group 177.png';

const Saas = () => {
  return (
    <div className="saas-container">
      <div className="saas-background">
        <img src={rectangle40} alt="SaaS Background" className="background-image" />
      </div>
      <div className="saas-content">
        <div className="saas-hero">
          <div className="saas-text-content">
            <h1 className="saas-headline">
              INSPIRATION TECHNOLOGY.
            </h1>
            <h2 className="saas-subheadline">
              Runs faster. Costs less and never breaks.
            </h2>
            <p className="saas-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien lectus sit tristique rhoncus, nisi, malesuada. Tellus consequat
            </p>
            <div className="saas-buttons">
              <button className="get-started-btn">Get Started <span className="arrow">→</span></button>
              <button className="free-trial-btn">Free Trail <span className="arrow">→</span></button>
            </div>
          </div>
          <div className="saas-image">
            <img src={pixelMockup} alt="Pixel True Mockup" className="mockup-image" />
          </div>
        </div>
      </div>
      
      {/* Group 186 Section */}
      <div className="group-186-section">
        <div className="group-186-container">
          <div className="group-186-left">
            <div className="voamine-image-container">
              <img src={voamine} alt="Voamine" className="voamine-image" />
              <div className="progress-overlay">
                <div className="progress-circle">40%</div>
              </div>
              <div className="transaction-overlay">
                <div className="transaction-card">
                  <div className="transaction-title">New transaction</div>
                  <div className="profile-avatars">
                    <div className="avatar">Ann</div>
                    <div className="avatar">Monica</div>
                    <div className="avatar">John</div>
                    <div className="avatar">Mia</div>
                    <div className="avatar">Alex</div>
                    <div className="avatar new">New</div>
                  </div>
                  <div className="transaction-input">
                    <input type="text" placeholder="Enter amount" />
                    <button className="send-transfer-btn">Send the transfer</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-186-right">
            <div className="group-186-text-content">
              <h3 className="group-186-subtitle">LOREM IPSUM DOLOR SIT AME</h3>
              <h2 className="group-186-title">Simple Solutions for Complex Connections</h2>
              <p className="group-186-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida feugiat neque, ipsum faucibus. Suspendisse mi feugiat sapien.
              </p>
              <div className="group-186-features">
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>High Analysis</span>
                </div>
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>Certified Institute</span>
                </div>
              </div>
              <button className="learn-more-btn">Learn More <span className="arrow">→</span></button>
            </div>
          </div>
        </div>
      </div>

      {/* Group 177 Section */}
   

      {/* POWERFUL FEATURES Section */}
      <div className="powerful-features-section">
        <div className="powerful-features-container">
          <h3 className="powerful-features-subtitle">POWERFUL FEATURES</h3>
          <h2 className="powerful-features-title">Here's all the good stuff</h2>
          <div className="features-grid">
            <div className="feature-block">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="12" fill="#EFF6FF"/>
                  <path d="M24 12L28.5 18.5L36 20L30 25.5L31.5 33L24 29.5L16.5 33L18 25.5L12 20L19.5 18.5L24 12Z" fill="#3B82F6"/>
                </svg>
              </div>
              <h3 className="feature-title">Reliable system</h3>
              <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            
            <div className="feature-block">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="12" fill="#F0FDF4"/>
                  <path d="M16 16H32V32H16V16ZM18 18V30H30V18H18ZM20 20H28V22H20V20ZM20 24H28V26H20V24Z" fill="#22C55E"/>
                </svg>
              </div>
              <h3 className="feature-title">50+ integrations</h3>
              <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            
            <div className="feature-block">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
                  <path d="M24 12C17.373 12 12 17.373 12 24C12 30.627 17.373 36 24 36C30.627 36 36 30.627 36 24C36 17.373 30.627 12 24 12ZM24 34C18.486 34 14 29.514 14 24C14 18.486 18.486 14 24 14C29.514 14 34 18.486 34 24C34 29.514 29.514 34 24 34ZM26 18H22V26H30V22H26V18Z" fill="#F59E0B"/>
                </svg>
              </div>
              <h3 className="feature-title">Intelligent optimizations</h3>
              <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            
            <div className="feature-block">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="12" fill="#FCE7F3"/>
                  <path d="M24 12C17.373 12 12 17.373 12 24C12 30.627 17.373 36 24 36C30.627 36 36 30.627 36 24C36 17.373 30.627 12 24 12ZM24 34C18.486 34 14 29.514 14 24C14 18.486 18.486 14 24 14C29.514 14 34 18.486 34 24C34 29.514 29.514 34 24 34ZM20 20H28V22H20V20ZM20 24H28V26H20V24ZM20 28H28V30H20V28Z" fill="#EC4899"/>
                </svg>
              </div>
              <h3 className="feature-title">Intuitive design</h3>
              <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="group-177-section">
        <div className="group-177-container">
          <img src={group177} alt="Group 177" className="group-177-image" />
        </div>
      </div>

      {/* YOUR VISION, OUR FUTURE Section */}
      <div className="vision-future-section">
        <div className="vision-future-container">
          <div className="vision-future-left">
            <h3 className="vision-subtitle">YOUR VISION, OUR FUTURE.</h3>
            <h2 className="vision-title">Committed to People, Committed</h2>
            <p className="vision-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="vision-future-right">
            <div className="vision-cards-grid">
              <div className="vision-card blue-card">
                <div className="vision-card-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4L18.5 10.5L26 12L20 16.5L21.5 24L16 20.5L10.5 24L12 16.5L6 12L13.5 10.5L16 4Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="vision-card-title">Creative Ideas</h3>
                <p className="vision-card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida
                </p>
              </div>
              
              <div className="vision-card white-card">
                <div className="vision-card-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 8L20 12L22 14L26 10L24 8ZM8 24L12 20L14 22L10 26L8 24ZM24 24L20 20L22 18L26 22L24 24ZM8 8L12 12L10 14L6 10L8 8Z" fill="#3B82F6"/>
                  </svg>
                </div>
                <h3 className="vision-card-title">Beautiful Blog</h3>
                <p className="vision-card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida
                </p>
              </div>
              
              <div className="vision-card white-card">
                <div className="vision-card-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4L20 8L16 12L12 8L16 4ZM20 16L24 20L20 24L16 20L20 16ZM8 16L12 20L8 24L4 20L8 16ZM16 20L20 24L16 28L12 24L16 20Z" fill="#3B82F6"/>
                  </svg>
                </div>
                <h3 className="vision-card-title">Easy to Use</h3>
                <p className="vision-card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida
                </p>
              </div>
              
              <div className="vision-card white-card">
                <div className="vision-card-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4L20 8L16 12L12 8L16 4ZM20 16L24 20L20 24L16 20L20 16ZM8 16L12 20L8 24L4 20L8 16ZM16 20L20 24L16 28L12 24L16 20Z" fill="#3B82F6"/>
                  </svg>
                </div>
                <h3 className="vision-card-title">User Friendly</h3>
                <p className="vision-card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida
                </p>
              </div>
              
              <div className="vision-card white-card">
                <div className="vision-card-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4C9.373 4 4 9.373 4 16C4 22.627 9.373 28 16 28C22.627 28 28 22.627 28 16C28 9.373 22.627 4 16 4ZM16 26C10.486 26 6 21.514 6 16C6 10.486 10.486 6 16 6C21.514 6 26 10.486 26 16C26 21.514 21.514 26 16 26ZM18 10H14V18H22V14H18V10Z" fill="#3B82F6"/>
                  </svg>
                </div>
                <h3 className="vision-card-title">Perfect Showcase</h3>
                <p className="vision-card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida
                </p>
              </div>
              
              <div className="vision-card white-card">
                <div className="vision-card-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4L20 8L16 12L12 8L16 4ZM20 16L24 20L20 24L16 20L20 16ZM8 16L12 20L8 24L4 20L8 16ZM16 20L20 24L16 28L12 24L16 20Z" fill="#3B82F6"/>
                  </svg>
                </div>
                <h3 className="vision-card-title">Easy to Use</h3>
                <p className="vision-card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User's Review Section */}
      <div className="users-review-section">
        <div className="users-review-container">
          <div className="users-review-header">
            <h2 className="users-review-title">User's Review</h2>
            <p className="users-review-subtitle">
              Collaborate over projects with your team and clients optimised for mobile and tablet don't let slow
            </p>
          </div>
          
          <div className="users-review-content">
            <div className="users-review-left">
              <h3 className="what-people-say-title">What People Say About Us</h3>
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <h4 className="testimonial-name">Davit millar</h4>
                  <p className="testimonial-title">CEO, PParkivew int, Ltd</p>
                </div>
                <div className="testimonial-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p className="testimonial-quote">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisl, tincidunt commodo sit. Et, purus lectus odio cursus placerat leo, non etiam. Neque at leo risus orci,
                </p>
              </div>
            </div>
            
            <div className="users-review-right">
              <div className="rectangle-26-container">
                <img src={rectangle26} alt="Rectangle 26" className="rectangle-26-image" />
                <div className="blue-shape-overlay large"><img src={rectangle28} alt="Rectangle 28" className="rectangle-28-image" /></div>
                <div className="blue-shape-overlay small"></div>
              </div>
            </div>
          </div>
          
          <div className="orange-circles">
            <div className="orange-circle"></div>
            <div className="orange-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saas;
