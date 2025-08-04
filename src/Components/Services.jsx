import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
import Lottie from 'lottie-react';
import servicesAnimation from '../assets/Services.json';
import architecturalIcon from '../assets/3d print.json';
import modelingIcon from '../assets/Laser Engraving CAD.json';
import bimIcon from '../assets/Laser.json';
import uavIcon from '../assets/machine-2.json';
import laserIcon from '../assets/3d print.json';
import dgpsIcon from '../assets/Laser Engraving CAD.json';
import etsIcon from '../assets/Laser.json';
import verificationIcon from '../assets/verification.png';
import ratingIcon from '../assets/rating.png';
import blueprintIcon from '../assets/blueprint.png';
import operatorIcon from '../assets/operator.png';
import portfolioIcon from '../assets/portfolio.png';
import timelineIcon from '../assets/timeline.png';
import customerServiceIcon from '../assets/customer-service.png';
import deliveryIcon from '../assets/delivery.png';
import upIcon from '../assets/up.png';
import locationIcon from '../assets/location.png';
import qualityIcon from '../assets/quality.png';
import revisionIcon from '../assets/revision.png';
import uspIcon from '../assets/usp.png';

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animatedServices, setAnimatedServices] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [showPricing, setShowPricing] = useState(false);
  const [selectedPricing, setSelectedPricing] = useState('monthly');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [faqFilter, setFaqFilter] = useState('all');
  const [faqSearch, setFaqSearch] = useState('');

  const services = [
    {
      id: 1,
      title: "Architectural Design",
      category: "design",
      description: "Comprehensive architectural design services including concept development, detailed drawings, and construction documentation. We create innovative and sustainable design solutions tailored to your specific needs.",
      icon: architecturalIcon,
      features: ["Concept Development", "Detailed Drawings", "Construction Documentation", "Sustainable Design"],
      details: {
        duration: "2-4 weeks",
        complexity: "High",
        deliverables: ["2D Drawings", "3D Models", "Construction Documents", "Material Specifications"],
        technologies: ["AutoCAD", "Revit", "SketchUp", "3ds Max"],
        process: [
          "Initial Consultation & Requirements Gathering",
          "Concept Development & Sketching",
          "Detailed Design & Modeling",
          "Documentation & Specifications",
          "Review & Revisions",
          "Final Delivery"
        ]
      },
      stats: {
        projects: 150,
        satisfaction: 98,
        accuracy: 99.5
      },
      pricing: {
        basic: { monthly: 2500, yearly: 25000 },
        standard: { monthly: 4500, yearly: 45000 },
        premium: { monthly: 7500, yearly: 75000 }
      },
      caseStudies: [
        {
          title: "Modern Office Complex",
          description: "Designed a 50,000 sq ft office complex with sustainable features",
          result: "30% energy savings achieved",
          image: "🏢"
        },
        {
          title: "Residential Villa",
          description: "Luxury villa design with smart home integration",
          result: "Client satisfaction score: 9.8/10",
          image: "🏠"
        }
      ],
      team: [
        { name: "Ar. Rajesh Kumar", role: "Lead Architect", experience: "12 years" },
        { name: "Ar. Priya Sharma", role: "Senior Designer", experience: "8 years" },
        { name: "Ar. Amit Patel", role: "3D Specialist", experience: "6 years" }
      ]
    },
    {
      id: 2,
      title: "3D Modeling",
      category: "modeling",
      description: "High-quality 3D modeling services for architectural visualization, product design, and engineering applications. Our detailed models help bring your ideas to life with precision and realism.",
      icon: modelingIcon,
      features: ["Architectural Visualization", "Product Design", "Engineering Models", "Realistic Rendering"],
      details: {
        duration: "1-3 weeks",
        complexity: "Medium",
        deliverables: ["3D Models", "Textures", "Renders", "Animations"],
        technologies: ["Blender", "Maya", "3ds Max", "Cinema 4D"],
        process: [
          "Reference Collection & Analysis",
          "Base Geometry Creation",
          "Detail Modeling & Sculpting",
          "Texture & Material Application",
          "Lighting & Rendering",
          "Quality Assurance & Delivery"
        ]
      },
      stats: {
        projects: 200,
        satisfaction: 97,
        accuracy: 98.8
      },
      pricing: {
        basic: { monthly: 1800, yearly: 18000 },
        standard: { monthly: 3200, yearly: 32000 },
        premium: { monthly: 5500, yearly: 55000 }
      },
      caseStudies: [
        {
          title: "Product Visualization",
          description: "Created photorealistic renders for automotive parts",
          result: "Sales increased by 45%",
          image: "🚗"
        },
        {
          title: "Interior Design",
          description: "Complete 3D interior visualization for hotel renovation",
          result: "Project completed 2 weeks ahead of schedule",
          image: "🏨"
        }
      ],
      team: [
        { name: "Rahul Verma", role: "3D Artist", experience: "10 years" },
        { name: "Sneha Reddy", role: "Texture Artist", experience: "7 years" },
        { name: "Vikram Singh", role: "Rendering Specialist", experience: "5 years" }
      ]
    },
    {
      id: 3,
      title: "BIM Modelling",
      category: "bim",
      description: "Building Information Modeling (BIM) services for comprehensive project management and collaboration. We create intelligent 3D models that contain detailed information about building components.",
      icon: bimIcon,
      features: ["Project Management", "Collaboration Tools", "Intelligent Models", "Component Information"],
      details: {
        duration: "3-6 weeks",
        complexity: "Very High",
        deliverables: ["BIM Models", "Clash Detection", "Quantity Takeoffs", "4D Scheduling"],
        technologies: ["Revit", "Navisworks", "Tekla", "ArchiCAD"],
        process: [
          "BIM Execution Planning",
          "Model Development & Coordination",
          "Clash Detection & Resolution",
          "Quantity Analysis & Scheduling",
          "Documentation & Handover",
          "Maintenance & Updates"
        ]
      },
      stats: {
        projects: 80,
        satisfaction: 99,
        accuracy: 99.8
      },
      pricing: {
        basic: { monthly: 3500, yearly: 35000 },
        standard: { monthly: 6500, yearly: 65000 },
        premium: { monthly: 9500, yearly: 95000 }
      },
      caseStudies: [
        {
          title: "Hospital Complex",
          description: "BIM coordination for 200-bed hospital project",
          result: "Reduced construction time by 25%",
          image: "🏥"
        },
        {
          title: "Shopping Mall",
          description: "Complete BIM implementation for retail complex",
          result: "Cost savings of ₹2.5 crores",
          image: "🛍️"
        }
      ],
      team: [
        { name: "Dr. Meera Iyer", role: "BIM Manager", experience: "15 years" },
        { name: "Karan Malhotra", role: "BIM Coordinator", experience: "9 years" },
        { name: "Anjali Desai", role: "Clash Detection Specialist", experience: "7 years" }
      ]
    },
    {
      id: 4,
      title: "UAV Mapping",
      category: "surveying",
      description: "Advanced drone mapping and surveying services using cutting-edge UAV technology. We provide accurate aerial surveys, topographic mapping, and 3D terrain modeling for various applications.",
      icon: uavIcon,
      features: ["Aerial Surveys", "Topographic Mapping", "3D Terrain Modeling", "High Accuracy"],
      details: {
        duration: "1-2 weeks",
        complexity: "Medium",
        deliverables: ["Orthomosaics", "Point Clouds", "DEM/DTM", "Contour Maps"],
        technologies: ["DJI Phantom", "Pix4D", "Agisoft", "Global Mapper"],
        process: [
          "Flight Planning & Permissions",
          "Aerial Data Collection",
          "Image Processing & Alignment",
          "Point Cloud Generation",
          "Surface Modeling & Analysis",
          "Report Generation & Delivery"
        ]
      },
      stats: {
        projects: 120,
        satisfaction: 96,
        accuracy: 99.2
      },
      pricing: {
        basic: { monthly: 2200, yearly: 22000 },
        standard: { monthly: 3800, yearly: 38000 },
        premium: { monthly: 6200, yearly: 62000 }
      },
      caseStudies: [
        {
          title: "Mining Site Survey",
          description: "Large-scale topographic mapping for mining operations",
          result: "Survey completed in 3 days vs 3 weeks",
          image: "⛏️"
        },
        {
          title: "Agricultural Mapping",
          description: "Crop health monitoring and yield estimation",
          result: "Yield prediction accuracy: 95%",
          image: "🌾"
        }
      ],
      team: [
        { name: "Capt. Arjun Singh", role: "UAV Pilot", experience: "8 years" },
        { name: "Dr. Neha Gupta", role: "GIS Specialist", experience: "12 years" },
        { name: "Ravi Kumar", role: "Data Processor", experience: "6 years" }
      ]
    },
    {
      id: 5,
      title: "Mobile Laser Scanning",
      category: "scanning",
      description: "Mobile laser scanning services for rapid data collection and point cloud generation. Our mobile scanning solutions provide efficient and accurate 3D documentation of large areas and complex structures.",
      icon: laserIcon,
      features: ["Rapid Data Collection", "Point Cloud Generation", "Large Area Coverage", "Complex Structures"],
      details: {
        duration: "2-5 days",
        complexity: "High",
        deliverables: ["Point Clouds", "3D Models", "As-Built Documentation", "Analysis Reports"],
        technologies: ["Leica BLK2GO", "Faro Focus", "Trimble X7", "CloudCompare"],
        process: [
          "Site Assessment & Planning",
          "Mobile Scanning Setup",
          "Data Collection & Validation",
          "Point Cloud Processing",
          "Model Generation & Analysis",
          "Documentation & Delivery"
        ]
      },
      stats: {
        projects: 90,
        satisfaction: 98,
        accuracy: 99.7
      },
      pricing: {
        basic: { monthly: 2800, yearly: 28000 },
        standard: { monthly: 4800, yearly: 48000 },
        premium: { monthly: 7800, yearly: 78000 }
      },
      caseStudies: [
        {
          title: "Heritage Building",
          description: "Complete 3D documentation of historical monument",
          result: "Preservation plan approved by UNESCO",
          image: "🏛️"
        },
        {
          title: "Industrial Plant",
          description: "As-built documentation for facility expansion",
          result: "Reduced downtime by 40%",
          image: "🏭"
        }
      ],
      team: [
        { name: "Suresh Patel", role: "Scanning Specialist", experience: "11 years" },
        { name: "Lakshmi Devi", role: "Point Cloud Analyst", experience: "8 years" },
        { name: "Mohan Das", role: "Field Technician", experience: "5 years" }
      ]
    },
    {
      id: 6,
      title: "DGPS and ETS",
      category: "surveying",
      description: "Differential GPS (DGPS) and Electronic Total Station (ETS) surveying services for high-precision positioning and measurements. We provide accurate geospatial data for construction and engineering projects.",
      icon: dgpsIcon,
      features: ["High-Precision Positioning", "Accurate Measurements", "Geospatial Data", "Construction Support"],
      details: {
        duration: "1-3 days",
        complexity: "Medium",
        deliverables: ["Survey Points", "Control Networks", "Topographic Maps", "Stakeout Data"],
        technologies: ["Trimble R10", "Leica TS16", "Topcon HiPer", "Carlson Survey"],
        process: [
          "Control Point Establishment",
          "Equipment Setup & Calibration",
          "Field Data Collection",
          "Data Processing & Validation",
          "Coordinate Transformation",
          "Report & Documentation"
        ]
      },
      stats: {
        projects: 180,
        satisfaction: 99,
        accuracy: 99.9
      },
      pricing: {
        basic: { monthly: 1500, yearly: 15000 },
        standard: { monthly: 2800, yearly: 28000 },
        premium: { monthly: 4500, yearly: 45000 }
      },
      caseStudies: [
        {
          title: "Bridge Construction",
          description: "Precise alignment for cable-stayed bridge",
          result: "Construction accuracy: ±5mm",
          image: "🌉"
        },
        {
          title: "Railway Track",
          description: "High-speed rail alignment survey",
          result: "Track laid with 99.9% precision",
          image: "🚄"
        }
      ],
      team: [
        { name: "Col. Rajeshwar Singh", role: "Survey Manager", experience: "20 years" },
        { name: "Anita Kumari", role: "DGPS Specialist", experience: "10 years" },
        { name: "Prakash Yadav", role: "ETS Operator", experience: "7 years" }
      ]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "ABC Construction Ltd.",
      service: "BIM Modelling",
      rating: 5,
      comment: "The BIM modeling service exceeded our expectations. The team delivered high-quality models that helped us identify and resolve conflicts early in the project.",
      avatar: "👨‍💼",
      projectValue: "₹25 Crores"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Urban Architects",
      service: "3D Modeling",
      rating: 5,
      comment: "Outstanding 3D modeling work! The visualizations helped our clients understand the design better and accelerated the approval process.",
      avatar: "👩‍🎨",
      projectValue: "₹8 Crores"
    },
    {
      id: 3,
      name: "Amit Patel",
      company: "Infrastructure Solutions",
      service: "UAV Mapping",
      rating: 4,
      comment: "The drone mapping service provided us with accurate topographic data in a fraction of the time traditional surveying would take.",
      avatar: "👨‍🔧",
      projectValue: "₹15 Crores"
    },
 
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'design', name: 'Design', count: services.filter(s => s.category === 'design').length },
    { id: 'modeling', name: 'Modeling', count: services.filter(s => s.category === 'modeling').length },
    { id: 'bim', name: 'BIM', count: services.filter(s => s.category === 'bim').length },
    { id: 'surveying', name: 'Surveying', count: services.filter(s => s.category === 'surveying').length },
    { id: 'scanning', name: 'Scanning', count: services.filter(s => s.category === 'scanning').length }
  ];

  const faqs = [
    {
      id: 1,
      question: "What is the typical turnaround time for projects?",
      answer: "Turnaround times vary by service: Architectural Design (2-4 weeks), 3D Modeling (1-3 weeks), BIM (3-6 weeks), UAV Mapping (1-2 weeks), Laser Scanning (2-5 days), and DGPS/ETS (1-3 days).",
      category: "Timeline",
      icon: timelineIcon,
      details: {
        architectural: "2-4 weeks",
        modeling: "1-3 weeks", 
        bim: "3-6 weeks",
        uav: "1-2 weeks",
        laser: "2-5 days",
        dgps: "1-3 days"
      }
    },
    {
      id: 2,
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer 6 months of post-project support including revisions, technical assistance, and consultation for implementation.",
      category: "Support",
      icon: customerServiceIcon,
      details: {
        duration: "6 months",
        includes: ["Revisions", "Technical Assistance", "Consultation", "Implementation Support"],
        response: "Within 24 hours"
      }
    },
    {
      id: 3,
      question: "What file formats do you deliver?",
      answer: "We deliver in multiple formats: DWG, PDF, 3DS, OBJ, FBX, IFC, LAS, and custom formats as per client requirements.",
      category: "Deliverables",
      icon: deliveryIcon,
      details: {
        formats: ["DWG", "PDF", "3DS", "OBJ", "FBX", "IFC", "LAS"],
        custom: "Available on request",
        compatibility: "All major CAD software"
      }
    },
    {
      id: 4,
      question: "Can you handle large-scale projects?",
      answer: "Absolutely! We've successfully completed projects ranging from small residential designs to large infrastructure projects worth ₹100+ crores.",
      category: "Scale",
      icon: upIcon,
      details: {
        range: "Small to Large Scale",
        maxValue: "₹100+ Crores",
        examples: ["Residential", "Commercial", "Infrastructure", "Industrial"]
      }
    },
    {
      id: 5,
      question: "Do you provide on-site services?",
      answer: "Yes, we provide on-site surveying, scanning, and consultation services across India and internationally.",
      category: "Location",
      icon: locationIcon,
      details: {
        coverage: "India & International",
        services: ["Surveying", "Scanning", "Consultation"],
        travel: "Included in pricing"
      }
    },
    {
      id: 6,
      question: "What is your quality assurance process?",
      answer: "Our QA process includes multiple review stages, accuracy verification, and client feedback integration to ensure the highest quality deliverables.",
      category: "Quality",
      icon: qualityIcon,
      details: {
        stages: ["Initial Review", "Accuracy Check", "Client Feedback", "Final Approval"],
        accuracy: "99.9%",
        guarantee: "100% satisfaction"
      }
    },
    {
      id: 7,
      question: "How do you handle project revisions?",
      answer: "We offer unlimited revisions within the project scope and timeline. Major changes may require additional time and cost assessment.",
      category: "Revisions",
      icon: revisionIcon,
      details: {
        policy: "Unlimited revisions",
        scope: "Within project scope",
        timeline: "Within project timeline",
        majorChanges: "Additional assessment required"
      }
    },
    {
      id: 8,
      question: "What makes CADLAB different from competitors?",
      answer: "Our unique combination of cutting-edge technology, experienced Indian professionals, competitive pricing, and personalized service sets us apart in the industry.",
      category: "USP",
      icon: uspIcon,
      details: {
        technology: "Cutting-edge CAD tools",
        expertise: "Experienced Indian professionals",
        pricing: "Competitive rates",
        service: "Personalized approach"
      }
    }
  ];

  const faqCategories = [
    { id: 'all', name: 'All Questions', count: faqs.length },
    { id: 'Timeline', name: 'Timeline', count: faqs.filter(f => f.category === 'Timeline').length },
    { id: 'Support', name: 'Support', count: faqs.filter(f => f.category === 'Support').length },
    { id: 'Deliverables', name: 'Deliverables', count: faqs.filter(f => f.category === 'Deliverables').length },
    { id: 'Scale', name: 'Scale', count: faqs.filter(f => f.category === 'Scale').length },
    { id: 'Quality', name: 'Quality', count: faqs.filter(f => f.category === 'Quality').length }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed", icon: verificationIcon },
    { number: "98%", label: "Client Satisfaction", icon: ratingIcon },
    { number: "₹200Cr+", label: "Project Value", icon: blueprintIcon },
    { number: "24/7", label: "Support Available", icon: operatorIcon },
    { number: "15+", label: "Years Experience", icon: portfolioIcon }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  const filteredFaqs = faqs.filter(faq => {
    const matchesFilter = faqFilter === 'all' || faq.category === faqFilter;
    const matchesSearch = faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedServices(filteredServices.map((_, index) => index));
    }, 100);
    return () => clearTimeout(timer);
  }, [filteredServices]);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    setActiveTab('overview');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleGetQuote = () => {
    closeModal();
    navigate('/contact');
  };

  return (
    <div className="services">
      {/* Progress Bar */}
      <div className="scroll-progress">
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-container">
          <div className="hero-content">
            <h1 className="services-hero-title">
              <span className="title-line">Our Professional</span>
              <span className="title-highlight">Services</span>
            </h1>
            <p className="services-hero-description">
              Comprehensive CAD and surveying solutions for modern construction and design projects
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support Available</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="lottie-container1">
              <Lottie animationData={servicesAnimation} loop={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="achievements-container">
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">
                  <img src={achievement.icon} alt={achievement.label} />
                </div>
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="services-filter">
        <div className="filter-container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
                <span className="filter-count">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="services-grid-container">
          <div className="services-grid">
            {filteredServices.map((service, index) => (
              <div 
                key={service.id} 
                className={`service-card ${animatedServices.includes(index) ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-header">
                  <div className="service-icon">
                    <div className="icon-container">
                      <div className="icon-placeholder">
                        <span className="icon-text">{service.title.charAt(0)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="service-stats">
                    <div className="stat">
                      <span className="stat-value">{service.stats.projects}+</span>
                      <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">{service.stats.satisfaction}%</span>
                      <span className="stat-label">Satisfaction</span>
                    </div>
                  </div>
                </div>
                
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-details">
                    <div className="detail-item">
                      <span className="detail-label">Duration:</span>
                      <span className="detail-value">{service.details.duration}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Complexity:</span>
                      <span className="detail-value">{service.details.complexity}</span>
                    </div>
                  </div>

                  <div className="service-features">
                    {service.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-check">✓</span>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="service-actions">
                    <button 
                      className="service-learn-more"
                      onClick={() => openModal(service)}
                    >
                      View Details <span className="arrow">→</span>
                    </button>
                    <button className="service-quote">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="client-info">
                    <div className="client-avatar">{testimonial.avatar}</div>
                    <div>
                      <h4 className="client-name">{testimonial.name}</h4>
                      <p className="client-company">{testimonial.company}</p>
                      <span className="service-used">{testimonial.service}</span>
                    </div>
                  </div>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="testimonial-comment">{testimonial.comment}</p>
                <div className="project-value">
                  <span className="value-label">Project Value:</span>
                  <span className="value-amount">{testimonial.projectValue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">Everything you need to know about our services</p>
            
            {/* Search Bar */}
            <div className="faq-search">
              <div className="search-input-wrapper">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="faq-search-input"
                />
                {faqSearch && (
                  <button 
                    className="clear-search"
                    onClick={() => setFaqSearch('')}
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Category Filters */}
            <div className="faq-filters">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  className={`faq-filter-btn ${faqFilter === category.id ? 'active' : ''}`}
                  onClick={() => setFaqFilter(category.id)}
                >
                  <span className="filter-icon">
                    {category.id === 'Timeline' && <img src={timelineIcon} alt="Timeline" />}
                    {category.id === 'Support' && <img src={customerServiceIcon} alt="Support" />}
                    {category.id === 'Deliverables' && <img src={deliveryIcon} alt="Deliverables" />}
                    {category.id === 'Scale' && <img src={upIcon} alt="Scale" />}
                    {category.id === 'Quality' && <img src={qualityIcon} alt="Quality" />}
                    {category.id === 'all' && <img src={uspIcon} alt="All" />}
                  </span>
                  {category.name}
                  <span className="filter-count">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Grid */}
          <div className="faq-grid">
            {filteredFaqs.map((faq, index) => (
              <div 
                key={faq.id} 
                className={`faq-item ${expandedFaq === faq.id ? 'expanded' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="faq-question-header"
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                >
                  <div className="faq-question-content">
                    <div className="faq-icon">
                      <img src={faq.icon} alt={faq.category} />
                    </div>
                    <div className="faq-text">
                      <h3 className="faq-question">{faq.question}</h3>
                      <span className="faq-category">{faq.category}</span>
                    </div>
                  </div>
                  <div className="faq-toggle">
                    <span className="toggle-icon">
                      {expandedFaq === faq.id ? '−' : '+'}
                    </span>
                  </div>
                </div>
                
                <div className="faq-answer-container">
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                    
                    {/* Detailed Information */}
                    <div className="faq-details">
                      {faq.category === 'Timeline' && (
                        <div className="timeline-details">
                          <h4>Service Timelines:</h4>
                          <div className="timeline-grid">
                            <div className="timeline-item">
                              <span className="service-name">Architectural Design</span>
                              <span className="service-time">{faq.details.architectural}</span>
                            </div>
                            <div className="timeline-item">
                              <span className="service-name">3D Modeling</span>
                              <span className="service-time">{faq.details.modeling}</span>
                            </div>
                            <div className="timeline-item">
                              <span className="service-name">BIM Modeling</span>
                              <span className="service-time">{faq.details.bim}</span>
                            </div>
                            <div className="timeline-item">
                              <span className="service-name">UAV Mapping</span>
                              <span className="service-time">{faq.details.uav}</span>
                            </div>
                            <div className="timeline-item">
                              <span className="service-name">Laser Scanning</span>
                              <span className="service-time">{faq.details.laser}</span>
                            </div>
                            <div className="timeline-item">
                              <span className="service-name">DGPS/ETS</span>
                              <span className="service-time">{faq.details.dgps}</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {faq.category === 'Support' && (
                        <div className="support-details">
                          <h4>Support Package Includes:</h4>
                          <div className="support-features">
                            {faq.details.includes.map((feature, idx) => (
                              <div key={idx} className="support-feature">
                                <span className="feature-check">✓</span>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="support-stats">
                            <div className="support-stat">
                              <span className="stat-label">Duration:</span>
                              <span className="stat-value">{faq.details.duration}</span>
                            </div>
                            <div className="support-stat">
                              <span className="stat-label">Response Time:</span>
                              <span className="stat-value">{faq.details.response}</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {faq.category === 'Deliverables' && (
                        <div className="deliverables-details">
                          <h4>Supported Formats:</h4>
                          <div className="format-tags">
                            {faq.details.formats.map((format, idx) => (
                              <span key={idx} className="format-tag">{format}</span>
                            ))}
                          </div>
                          <div className="deliverables-info">
                            <p><strong>Custom Formats:</strong> {faq.details.custom}</p>
                            <p><strong>Compatibility:</strong> {faq.details.compatibility}</p>
                          </div>
                        </div>
                      )}
                      
                      {faq.category === 'Scale' && (
                        <div className="scale-details">
                          <h4>Project Scale Range:</h4>
                          <div className="scale-info">
                            <div className="scale-stat">
                              <span className="stat-label">Range:</span>
                              <span className="stat-value">{faq.details.range}</span>
                            </div>
                            <div className="scale-stat">
                              <span className="stat-label">Max Value:</span>
                              <span className="stat-value">{faq.details.maxValue}</span>
                            </div>
                          </div>
                          <div className="project-examples">
                            <h5>Project Types:</h5>
                            <div className="example-tags">
                              {faq.details.examples.map((example, idx) => (
                                <span key={idx} className="example-tag">{example}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {faq.category === 'Quality' && (
                        <div className="quality-details">
                          <h4>Quality Assurance Process:</h4>
                          <div className="qa-stages">
                            {faq.details.stages.map((stage, idx) => (
                              <div key={idx} className="qa-stage">
                                <span className="stage-number">{idx + 1}</span>
                                <span className="stage-name">{stage}</span>
                              </div>
                            ))}
                          </div>
                          <div className="quality-stats">
                            <div className="quality-stat">
                              <span className="stat-label">Accuracy:</span>
                              <span className="stat-value">{faq.details.accuracy}</span>
                            </div>
                            <div className="quality-stat">
                              <span className="stat-label">Guarantee:</span>
                              <span className="stat-value">{faq.details.guarantee}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredFaqs.length === 0 && (
            <div className="no-faq-results">
              <div className="no-results-icon">🔍</div>
              <h3>No questions found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button 
                className="reset-filters"
                onClick={() => {
                  setFaqSearch('');
                  setFaqFilter('all');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* FAQ Stats */}
          <div className="faq-stats">
            <div className="stat-item">
              <span className="stat-number">{faqs.length}</span>
              <span className="stat-label">Total Questions</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{faqCategories.length - 1}</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="services-cta">
        <div className="services-cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-description">
              Get in touch with our expert team to discuss your requirements and get a customized quote.
            </p>
            <div className="cta-features">
              <div className="cta-feature">
                <span className="feature-icon">⚡</span>
                <span>Fast Turnaround</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">🎯</span>
                <span>High Accuracy</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">💰</span>
                <span>Competitive Pricing</span>
              </div>
            </div>
            <div className="cta-buttons">
              <button className="btn-primary">Get Free Quote</button>
              <button className="btn-secondary">Schedule Consultation</button>
            </div>
          </div>
          <div className="cta-visual">
            <div className="contact-info1">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>info@cadlab.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Odisha, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {isModalOpen && selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <div className="modal-icon">
                <div className="icon-container">
                  <span className="icon-text">{selectedService.title.charAt(0)}</span>
                </div>
              </div>
              <div className="modal-title-section">
                <h2 className="modal-title">{selectedService.title}</h2>
                <div className="modal-stats">
                  <div className="modal-stat">
                    <span className="stat-number">{selectedService.stats.projects}+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="modal-stat">
                    <span className="stat-number">{selectedService.stats.satisfaction}%</span>
                    <span className="stat-label">Satisfaction</span>
                  </div>
                  <div className="modal-stat">
                    <span className="stat-number">{selectedService.stats.accuracy}%</span>
                    <span className="stat-label">Accuracy</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-tabs">
              <button 
                className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`tab-btn ${activeTab === 'pricing' ? 'active' : ''}`}
                onClick={() => setActiveTab('pricing')}
              >
                Pricing
              </button>
              <button 
                className={`tab-btn ${activeTab === 'cases' ? 'active' : ''}`}
                onClick={() => setActiveTab('cases')}
              >
                Case Studies
              </button>
              <button 
                className={`tab-btn ${activeTab === 'team' ? 'active' : ''}`}
                onClick={() => setActiveTab('team')}
              >
                Team
              </button>
            </div>

            <div className="modal-body">
              {activeTab === 'overview' && (
                <>
                  <div className="modal-section">
                    <h3>Service Details</h3>
                    <div className="details-grid">
                      <div className="detail-card">
                        <h4>Duration</h4>
                        <p>{selectedService.details.duration}</p>
                      </div>
                      <div className="detail-card">
                        <h4>Complexity</h4>
                        <p>{selectedService.details.complexity}</p>
                      </div>
                      <div className="detail-card">
                        <h4>Deliverables</h4>
                        <ul>
                          {selectedService.details.deliverables.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="detail-card">
                        <h4>Technologies</h4>
                        <div className="tech-tags">
                          {selectedService.details.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="modal-section">
                    <h3>Process</h3>
                    <div className="process-timeline">
                      {selectedService.details.process.map((step, index) => (
                        <div key={index} className="process-step">
                          <div className="step-number">{index + 1}</div>
                          <div className="step-content">
                            <h4>{step}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'pricing' && (
                <div className="modal-section">
                  <div className="pricing-toggle">
                    <button 
                      className={`toggle-btn ${selectedPricing === 'monthly' ? 'active' : ''}`}
                      onClick={() => setSelectedPricing('monthly')}
                    >
                      Monthly
                    </button>
                    <button 
                      className={`toggle-btn ${selectedPricing === 'yearly' ? 'active' : ''}`}
                      onClick={() => setSelectedPricing('yearly')}
                    >
                      Yearly (Save 20%)
                    </button>
                  </div>
                  <div className="pricing-grid">
                    {Object.entries(selectedService.pricing).map(([plan, prices]) => (
                      <div key={plan} className={`pricing-card ${plan === 'standard' ? 'featured' : ''}`}>
                        <h4 className="plan-name">{plan.charAt(0).toUpperCase() + plan.slice(1)}</h4>
                        <div className="plan-price">
                          <span className="currency">₹</span>
                          <span className="amount">{prices[selectedPricing].toLocaleString()}</span>
                          <span className="period">/{selectedPricing === 'monthly' ? 'month' : 'year'}</span>
                        </div>
                        <ul className="plan-features">
                          <li>✓ Full Service Delivery</li>
                          <li>✓ Technical Support</li>
                          <li>✓ Revisions Included</li>
                          <li>✓ Project Management</li>
                        </ul>
                        <button className="plan-btn">Choose Plan</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'cases' && (
                <div className="modal-section">
                  <h3>Case Studies</h3>
                  <div className="cases-grid">
                    {selectedService.caseStudies.map((study, index) => (
                      <div key={index} className="case-card">
                        <div className="case-icon">{study.image}</div>
                        <h4 className="case-title">{study.title}</h4>
                        <p className="case-description">{study.description}</p>
                        <div className="case-result">
                          <span className="result-label">Result:</span>
                          <span className="result-value">{study.result}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'team' && (
                <div className="modal-section">
                  <h3>Expert Team</h3>
                  <div className="team-grid">
                    {selectedService.team.map((member, index) => (
                      <div key={index} className="team-card">
                        <div className="member-avatar">👤</div>
                        <h4 className="member-name">{member.name}</h4>
                        <p className="member-role">{member.role}</p>
                        <span className="member-experience">{member.experience} experience</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button className="btn-primary" onClick={handleGetQuote}>Get Quote for This Service</button>
              <button className="btn-secondary" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
