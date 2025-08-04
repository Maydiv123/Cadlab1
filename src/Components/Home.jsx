import React from 'react';
import './Home.css';
import backgroundHero from '../assets/BackgroundHero.png';
import groupImage from '../assets/Group.png';
import logo1 from '../assets/Fictional company logo.png';
import logo2 from '../assets/Fictional company logo (1).png';
import logo3 from '../assets/Fictional company logo (2).png';
import logo4 from '../assets/Fictional company logo (3).png';
import logo5 from '../assets/Fictional company logo (5).png';
import featureImage from '../assets/Feature.png';
import patternImage from '../assets/Pattern.png';
import illustrationImage from '../assets/Illustration.png';
import iconImage from '../assets/Icon.png';
import illustration1Image from '../assets/Illustration (1).png';
import illustration2Image from '../assets/Illustration (2).png';
import backgroundIntegrations from '../assets/Background Integrations.png';
import card1Image from '../assets/Images.png';
import card2Image from '../assets/Images (1).png';
import card3Image from '../assets/Images (2).png';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${backgroundHero})` }}>
        <div className="hero-container1">
          <div className="hero-content1">
            <h1 className="hero-title">
              Transforming Spaces with Technology
            </h1>
            <p className="hero-description">
              CadLab Consulting and Research Pvt. Ltd. is an emerging startup company based in Odisha, specializing in UAV/drone mapping, architectural design, and 3D modeling & BIM solutions.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Start Now</button>
              <button className="btn-secondary">
                Trial <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Illustration Section */}
      <section className="tech-illustration">
        <div className="illustration-container">
          <img src={groupImage} alt="Technology Group" className="group-image" />
        </div>
      </section>

      {/* Logos Section */}
      <section className="logos-section">
        <div className="logos-container">
          <div className="logo-item">
            <img src={logo1} alt="Company Logo 1" className="logo-image" />
          </div>
          <div className="logo-item">
            <img src={logo2} alt="Company Logo 2" className="logo-image" />
          </div>
          <div className="logo-item">
            <img src={logo3} alt="Company Logo 3" className="logo-image" />
          </div>
          <div className="logo-item">
            <img src={logo4} alt="Company Logo 4" className="logo-image" />
          </div>
          <div className="logo-item">
            <img src={logo5} alt="Company Logo 5" className="logo-image" />
          </div>
        </div>
      </section>

      {/* Why Saasly Section */}
      <section className="why-saasly-section">
        <div className="why-saasly-container">
          <img src={patternImage} alt="Pattern" className="pattern-image" />
          <div className="content-right">
            <h2 className="section-title">We optimize technology for business continuity</h2>
            <img src={featureImage} alt="Feature" className="feature-image" />
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="analytics-section">
        <div className="analytics-container">
          <h2 className="analytics-title">We make it easy to track all data analytics</h2>
          <div className="analytics-content">
            <div className="left-content">
              <img src={iconImage} alt="Icon" className="clock-icon" />
              <h3 className="content-title">Mobile Laser Scanning</h3>
              <p className="content-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.
              </p>
              <button className="learn-more-btn">Learn More</button>
            </div>
            <div className="right-content">
              <img src={illustrationImage} alt="Analytics Illustration" className="analytics-illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* Credit Balance and DGPS Section */}
      <section className="credit-dgps-section">
        <div className="credit-dgps-container">
          <div className="credit-dgps-content">
            <div className="left-illustration">
              <img src={illustration1Image} alt="Illustration 1" className="illustration-1-image" />
            </div>
            <div className="right-cards">
              <div className="credit-balance-card">
                <div className="card-header">
                  <h3 className="card-title">Credit Balance</h3>
                  <div className="card-menu">⋯</div>
                </div>
                <div className="balance-amount">$25,215</div>
                <div className="balance-chart">
                  <div className="chart-line"></div>
                </div>
                <div className="balance-shield">
                  <div className="shield-icon">🛡️</div>
                </div>
              </div>
              <div className="dgps-card">
                <div className="dgps-icon">🔒</div>
                <h3 className="dgps-title">DGPS and ETS</h3>
                <p className="dgps-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multiple Platform Section */}
      <section className="multiple-platform-section">
        <div className="multiple-platform-container">
          <div className="multiple-platform-content">
            <div className="left-content">
              <div className="platform-icon">🖥️</div>
              <h3 className="platform-title">Multiple Platform</h3>
              <p className="platform-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.
              </p>
              <button className="learn-more-btn">Learn More</button>
            </div>
            <div className="right-illustration">
              <img src={illustration2Image} alt="Illustration 2" className="illustration-2-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Background Integrations Section */}
      <section className="background-integrations-section">
        <div className="background-integrations-container">
          <img src={backgroundIntegrations} alt="Background Integrations" className="background-integrations-image" />
          <div className="integrated-products-overlay">
            <h2 className="integrated-products-title">Integrated Products</h2>
            <div className="products-grid">
              <div className="product-card">
                <div className="product-image">
                  <img src={card1Image} alt="Essential Drone 1" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Essential Drones</h3>
                  <div className="product-rating">
                    <span className="star-icon">⭐</span>
                    <span className="rating-text">4.0</span>
                  </div>
                  <p className="shipping-text">Get FREE SHIPPING if you add 2 more bags.</p>
                  <p className="product-price">$60</p>
                  <div className="shopping-cart-icon">🛒</div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">
                  <img src={card2Image} alt="Essential Drone 2" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Essential Drones</h3>
                  <div className="product-rating">
                    <span className="star-icon">⭐</span>
                    <span className="rating-text">4.0</span>
                  </div>
                  <p className="shipping-text">Get FREE SHIPPING if you add 2 more bags.</p>
                  <p className="product-price">$60</p>
                  <div className="shopping-cart-icon">🛒</div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">
                  <img src={card3Image} alt="Essential Drone 3" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Essential Drones</h3>
                  <div className="product-rating">
                    <span className="star-icon">⭐</span>
                    <span className="rating-text">4.0</span>
                  </div>
                  <p className="shipping-text">Get FREE SHIPPING if you add 2 more bags.</p>
                  <p className="product-price">$60</p>
                  <div className="shopping-cart-icon">🛒</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
