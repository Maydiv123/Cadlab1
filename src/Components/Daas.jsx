import React, { useState, useEffect } from 'react';
import './Daas.css';
import Lottie from 'lottie-react';
import mappingAnimation from '../assets/3d print.json';
import surveillanceAnimation from '../assets/Laser Engraving CAD.json';
import trackingAnimation from '../assets/machine-2.json';

const Daas = () => {
  const [activeTab, setActiveTab] = useState('mapping');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = {
    mapping: {
      title: "Advanced Mapping Solutions",
      description: "Comprehensive mapping services for precise location tracking and spatial analysis",
      features: [
        "Real-time GPS mapping",
        "3D terrain modeling",
        "Satellite imagery integration",
        "Custom map overlays",
        "Route optimization",
        "Geospatial analytics"
      ],
      animation: mappingAnimation
    },
    surveillance: {
      title: "Intelligent Surveillance Systems",
      description: "State-of-the-art surveillance technology for security and monitoring",
      features: [
        "AI-powered video analytics",
        "Motion detection alerts",
        "Face recognition systems",
        "Remote monitoring capabilities",
        "Cloud storage integration",
        "Mobile app access"
      ],
      animation: surveillanceAnimation
    },
    tracking: {
      title: "Advanced Tracking Solutions",
      description: "Comprehensive tracking systems for assets, vehicles, and personnel",
      features: [
        "Real-time asset tracking",
        "Fleet management systems",
        "Employee location tracking",
        "Inventory management",
        "Performance analytics",
        "Custom reporting tools"
      ],
      animation: trackingAnimation
    }
  };

  return (
    <div className="daas-container">
      {/* Hero Section */}
      <section className="daas-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Daas</span> Solutions
          </h1>
          <p className="hero-subtitle">
            Data as a Service - Empowering businesses with advanced mapping, surveillance, and tracking capabilities
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>99.9%</h3>
              <p>Uptime</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Monitoring</p>
            </div>
            <div className="stat-item">
              <h3>50K+</h3>
              <p>Active Users</p>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-cards">
            <div className="card card-1">
              <div className="card-icon">🗺️</div>
              <h4>Mapping</h4>
            </div>
            <div className="card card-2">
              <div className="card-icon">📹</div>
              <h4>Surveillance</h4>
            </div>
            <div className="card card-3">
              <div className="card-icon">📍</div>
              <h4>Tracking</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="daas-features">
        <div className="container">
          <div className="section-header1">
            <h2>Our Core Services</h2>
            <p>Comprehensive solutions for modern business needs</p>
          </div>

          {/* Tab Navigation */}
          <div className="tab-navigation">
            <button 
              className={`tab-btn ${activeTab === 'mapping' ? 'active' : ''}`}
              onClick={() => setActiveTab('mapping')}
            >
              <span className="tab-icon">🗺️</span>
              Mapping
            </button>
            <button 
              className={`tab-btn ${activeTab === 'surveillance' ? 'active' : ''}`}
              onClick={() => setActiveTab('surveillance')}
            >
              <span className="tab-icon">📹</span>
              Surveillance
            </button>
            <button 
              className={`tab-btn ${activeTab === 'tracking' ? 'active' : ''}`}
              onClick={() => setActiveTab('tracking')}
            >
              <span className="tab-icon">📍</span>
              Tracking
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            <div className="feature-grid">
              <div className="feature-info">
                <h3>{features[activeTab].title}</h3>
                <p>{features[activeTab].description}</p>
                <ul className="feature-list">
                  {features[activeTab].features.map((feature, index) => (
                    <li key={index}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="learn-more-btn">Learn More</button>
              </div>
              <div className="feature-animation">
                <Lottie 
                  animationData={features[activeTab].animation} 
                  loop={true}
                  style={{ width: '100%', height: '300px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="daas-benefits">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Daas Solutions?</h2>
            <p>Comprehensive benefits for your business</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Scalable</h3>
              <p>Grow with your business needs without infrastructure concerns</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔒</div>
              <h3>Secure</h3>
              <p>Enterprise-grade security with end-to-end encryption</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Fast</h3>
              <p>Real-time processing and instant data access</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Cost-Effective</h3>
              <p>Pay-as-you-go model with no upfront infrastructure costs</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <h3>Reliable</h3>
              <p>99.9% uptime guarantee with automatic failover</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Accurate</h3>
              <p>Precision tracking and mapping with advanced algorithms</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="daas-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Get started with our Daas solutions today and experience the power of advanced data services</p>
            <div className="cta-buttons">
              <button className="cta-primary">Start Free Trial</button>
              <button className="cta-secondary">Schedule Demo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Daas;
