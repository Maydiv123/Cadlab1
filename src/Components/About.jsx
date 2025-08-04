import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Lottie from 'lottie-react';
import machineAnimation from '../assets/machine-2.json';
import laserEngravingAnimation from '../assets/Laser Engraving CAD.json';
import laserAnimation from '../assets/Laser.json';
import printerAnimation from '../assets/3d print.json';
import './About.css';

const About = () => {
  // Custom counting component
  const CountUp = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: true
    });

    useEffect(() => {
      if (inView) {
        let startTime = null;
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const currentCount = Math.floor(progress * end);
          setCount(currentCount);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [inView, end, duration]);

    return (
      <span ref={ref}>
        {count}{suffix}
      </span>
    );
  };

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-background">
          <div className="hero-bg-left"></div>
          <div className="hero-bg-right"></div>
        </div>
        <div className="about-hero-content">
          <div className="hero-text">
            <span className="hero-text-small">FROM</span>
            <div className="hero-text-main">
              <span className="hero-text-left">DESIG</span>
              <span className="hero-text-right">N</span>
            </div>
            <span className="hero-text-small">TO</span>
            <span className="hero-text-bottom">REALITY</span>
          </div>
          <p className="hero-subtitle">Empowering precision through advanced AutoCAD technology</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <h2>From AutoCAD to Your Workshop</h2>
            <p>
              There's something really special about the precision and power of AutoCAD machines 
              when it comes to manufacturing excellence. They understand that every design, every 
              measurement, and every cut must be perfect. And that's exactly what we believe at CADLAB! 
              We've created a comprehensive line of AutoCAD solutions that embody our three key values: 
              precision, innovation, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* AutoCAD Machines Section */}
      <section className="autocad-machines">
        <div className="container">
          <h2>Our AutoCAD Machine Solutions</h2>
          <p className="machines-intro">
            Discover our cutting-edge AutoCAD machines designed for precision manufacturing and design excellence.
          </p>
          <div className="machines-grid">
            <div className="machine-card">
              <div className="machine-icon">
                <Lottie 
                  animationData={laserEngravingAnimation} 
                  loop={true}
                  autoplay={true}
                  style={{ width: '140px', height: '140px' }}
                />
              </div>
              <h3>CNC Milling Machines</h3>
              <p className="machine-subtitle">Precision cutting and shaping</p>
              <p className="machine-description">
                High-precision CNC milling machines with advanced AutoCAD integration for complex 3D machining operations.
              </p>
            </div>
            <div className="machine-card">
              <div className="machine-icon">
                <Lottie 
                  animationData={laserAnimation} 
                  loop={true}
                  autoplay={true}
                  style={{ width: '80px', height: '80px' }}
                />
              </div>
              <h3>Laser Cutting Systems</h3>
              <p className="machine-subtitle">Ultra-precise material cutting</p>
              <p className="machine-description">
                State-of-the-art laser cutting systems that work seamlessly with AutoCAD designs for perfect cuts every time.
              </p>
            </div>
            <div className="machine-card">
              <div className="machine-icon">
                <Lottie 
                  animationData={printerAnimation} 
                  loop={true}
                  autoplay={true}
                  style={{ width: '140px', height: '140px' }}
                />
              </div>
              <h3>3D Printers</h3>
              <p className="machine-subtitle">Rapid prototyping solutions</p>
              <p className="machine-description">
                Advanced 3D printing technology that transforms AutoCAD models into physical prototypes with incredible accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">⚙️</div>
              <h3>Precision</h3>
              <p>Delivering exact measurements and perfect cuts with every AutoCAD machine operation.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔧</div>
              <h3>Reliability</h3>
              <p>Building machines that work consistently and efficiently in any manufacturing environment.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Constantly pushing boundaries to deliver cutting-edge AutoCAD solutions that transform industries.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏭</div>
              <h3>Efficiency</h3>
              <p>Maximizing productivity while minimizing waste through smart AutoCAD automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Dark Green */}
      <section className="about-mission-dark">
        <div className="container">
          <div className="mission-dark-content">
            <h2>From your workshop to the world</h2>
            <span className="mission-subtitle">OUR MISSION</span>
            <p>
            CadLab Consulting and Research Pvt. Ltd. is an emerging startup company based in Odisha, specializing in UAV/drone mapping, architectural design, and 3D modeling & BIM solutions. We leverage cutting-edge drone technology to provide high-precision mapping solutions for industries such as construction, land surveying, and infrastructure development. Our expertise also extends to innovative architectural design and detailed 3D modeling, ensuring efficiency and accuracy in every project. At CadLab, we are committed to transforming spatial data into actionable insights, helping businesses and government agencies optimize planning and decision-making processes. Our dedication to innovation makes us constantly explore new opportunities in the rapidly changing world of commercial drone services and solutions.
            </p>
            <div className="mission-separator"></div>
          </div>
        </div>
      </section>

      {/* Drive Innovation Section */}
      <section className="drive-innovation">
        <div className="container">
          <div className="innovation-content">
            <h2>Let's Drive Innovation</h2>
            <div className="innovation-subtitle">
              <span>To Excel in Manufacturing</span>
              <span>Create Precision with Technology Every Day</span>
            </div>
            
            <div className="innovation-grid">
              <div className="innovation-left">
                <p className="innovation-intro">
                  There's just something so special about the traditional ways of precision engineering and craftsmanship.
                </p>
                <div className="innovation-image">
                  <Lottie 
                    animationData={machineAnimation} 
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
              
              <div className="innovation-right">
                <div className="innovation-text-block">
                  <p>
                  End-to-End solution designed for drone professionals for inspection, realtime  tracking & monitoring creates 3D model and orthomosaic image generation, image analysis, volume calculations etc in a single platform
                  </p>
                </div>
                <div className="innovation-text-block">
                  <p>
                  WebGIS (Web Geographic Information System) Real Time Data Visulisation- Application services span multiple verticals, providing spatial analysis, visualization, and data management capabilities across various industries. Here are some key verticals where WebGIS applications are widely used.
                  </p>
                </div>
                <div className="innovation-text-block">
                  <p>
                    We believe that by incorporating advanced CAD technology into our daily manufacturing processes, we can all make a difference and create products with unmatched precision.
                  </p>
                </div>
              </div>
            </div>
            
            <button className="innovation-cta">VIEW OUR MACHINES</button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <h2>Our Team</h2>
          <p className="team-intro">
            Meet the passionate individuals behind CADLAB who are committed to 
            transforming the world through sustainable innovation.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <img src="/src/assets/Fictional company logo (1).png" alt="Priya Sharma - CEO & Founder" />
              </div>
              <h3>Priya Sharma</h3>
              <p className="member-role">CEO & Founder</p>
              <p className="member-bio">
                Visionary leader with 15+ years of experience in sustainable technology development and CAD solutions.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="/src/assets/Fictional company logo (2).png" alt="Rajesh Kumar - CTO" />
              </div>
              <h3>Rajesh Kumar</h3>
              <p className="member-role">CTO</p>
              <p className="member-bio">
                Technical expert specializing in green technology, computational solutions, and AutoCAD integration.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="/src/assets/Fictional company logo (3).png" alt="Anjali Patel - Head of Design" />
              </div>
              <h3>Anjali Patel</h3>
              <p className="member-role">Head of Design</p>
              <p className="member-bio">
                UX/UI specialist focused on creating intuitive and sustainable user experiences for CAD applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3><CountUp end={10} suffix="K+" /></h3>
              <p>Active Users</p>
            </div>
            <div className="stat-item">
              <h3><CountUp end={50} suffix="+" /></h3>
              <p>Countries Served</p>
            </div>
            <div className="stat-item">
              <h3><CountUp end={99.9} suffix="%" /></h3>
              <p>Uptime</p>
            </div>
            <div className="stat-item">
              <h3><CountUp end={24} suffix="/7" /></h3>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Transform Your Design Process?</h2>
          <p>Join thousands of professionals who trust CADLAB for their sustainable design needs.</p>
          <button className="cta-button">Get Started Today</button>
        </div>
      </section>
    </div>
  );
};

export default About;
