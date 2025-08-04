import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Talcher Heritage Corridor UAV Mapping, Surveying and Architectural Design",
      status: "Completed",
      statusClass: "completed",
      type: "UAV Mapping & Surveying",
      location: "Talcher, Odisha",
      client: "Talcher Municipality",
      duration: "6 months",
      progress: 100,
      budget: "₹25 Lakhs",
      team: "8 Members",
      description: "Comprehensive UAV mapping and architectural design for the heritage corridor development project.",
      technologies: ["DJI Phantom 4", "AutoCAD", "ArcGIS", "3D Modeling"],
      challenges: "Heritage site preservation, complex terrain mapping",
      outcomes: "Successfully mapped 50+ heritage structures, created detailed 3D models"
    },
    {
      id: 2,
      title: "TFL, Talcher UAV Mapping and Boundary Survey",
      status: "Completed",
      statusClass: "completed",
      type: "Boundary Survey",
      location: "Talcher, Odisha",
      client: "TFL Industries",
      duration: "3 months",
      progress: 100,
      budget: "₹12 Lakhs",
      team: "5 Members",
      description: "Precise boundary survey and UAV mapping for industrial land demarcation.",
      technologies: ["DJI Mavic 2", "RTK GPS", "Survey Software"],
      challenges: "Large industrial area, accurate boundary demarcation",
      outcomes: "Completed 200+ acre boundary survey with 99.9% accuracy"
    },
    {
      id: 3,
      title: "Angul, Talcher Municipality UAV Mapping and GIS Database Preparation",
      status: "Completed",
      statusClass: "completed",
      type: "GIS & Database",
      location: "Angul, Odisha",
      client: "Talcher Municipality",
      duration: "8 months",
      progress: 100,
      budget: "₹35 Lakhs",
      team: "10 Members",
      description: "Complete GIS database preparation and UAV mapping for municipal planning.",
      technologies: ["QGIS", "PostgreSQL", "Python", "Web Mapping"],
      challenges: "Large municipal area, data integration complexity",
      outcomes: "Created comprehensive GIS database for 15+ municipal departments"
    },
    {
      id: 4,
      title: "TFL 36 Inch Pipeline UAV Mapping and Route Survey",
      status: "Completed",
      statusClass: "completed",
      type: "Pipeline Survey",
      location: "Talcher, Odisha",
      client: "TFL Industries",
      duration: "4 months",
      progress: 100,
      budget: "₹18 Lakhs",
      team: "6 Members",
      description: "Comprehensive pipeline route survey and UAV mapping for infrastructure development.",
      technologies: ["Thermal Imaging", "LiDAR", "Pipeline Software"],
      challenges: "Long pipeline route, safety regulations",
      outcomes: "Mapped 25km pipeline route with detailed safety analysis"
    },
    {
      id: 5,
      title: "JSPL, Angul Railtrack Route Survey",
      status: "Completed",
      statusClass: "completed",
      type: "Railway Survey",
      location: "Angul, Odisha",
      client: "JSPL",
      duration: "5 months",
      progress: 100,
      budget: "₹22 Lakhs",
      team: "7 Members",
      description: "Detailed railtrack route survey and mapping for railway infrastructure.",
      technologies: ["Railway Survey Tools", "3D Scanning", "BIM"],
      challenges: "Railway safety standards, precision requirements",
      outcomes: "Completed 15km railtrack survey meeting all safety standards"
    },
    {
      id: 6,
      title: "UAV Mapping and GIS Map Preparation of Hingula, Balaram and Ananta, Jagannath Coal Mines",
      status: "Completed",
      statusClass: "completed",
      type: "Mining Survey",
      location: "Multiple Locations, Odisha",
      client: "Coal India Limited",
      duration: "12 months",
      progress: 100,
      budget: "₹50 Lakhs",
      team: "12 Members",
      description: "Extensive UAV mapping and GIS preparation for multiple coal mine sites.",
      technologies: ["Mining Software", "Volume Calculation", "Safety Monitoring"],
      challenges: "Multiple mine sites, environmental considerations",
      outcomes: "Mapped 3 major coal mines, improved safety monitoring by 40%"
    },
    {
      id: 7,
      title: "VPR-Balabhadra Coal Block Structure Measurement and Valuation",
      status: "On Going",
      statusClass: "ongoing",
      type: "Structure Measurement",
      location: "Balabhadra, Odisha",
      client: "VPR Mining",
      duration: "Ongoing",
      progress: 65,
      budget: "₹30 Lakhs",
      team: "8 Members",
      description: "Advanced structure measurement and valuation for coal block development.",
      technologies: ["3D Laser Scanning", "Valuation Software", "AI Analysis"],
      challenges: "Complex geological structures, real-time monitoring",
      outcomes: "65% completion, improved accuracy in structure assessment"
    }
  ];

  const filteredProjects = projects.filter(project => {
    return filter === 'all' || project.statusClass === filter;
  });

  const completedCount = projects.filter(p => p.statusClass === 'completed').length;
  const ongoingCount = projects.filter(p => p.statusClass === 'ongoing').length;
  const totalBudget = projects.reduce((sum, p) => sum + parseInt(p.budget.replace('₹', '').replace(' Lakhs', '')), 0);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      <div className="projects-hero">
        <div className="projects-hero-content">
          <h1>Our Projects</h1>
          <p>Discover our portfolio of successful UAV mapping, surveying, and architectural design projects</p>
          
          {/* Enhanced Stats */}
          <div className="projects-stats">
            <div className="stat-item">
              <span className="stat-number">{projects.length}</span>
              <span className="stat-label">Total Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{completedCount}</span>
              <span className="stat-label">Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{ongoingCount}</span>
              <span className="stat-label">Ongoing</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">₹{totalBudget}L</span>
              <span className="stat-label">Total Value</span>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-section">
        {/* Filter Buttons Only */}
        <div className="projects-controls">
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
            <button 
              className={`filter-btn ${filter === 'ongoing' ? 'active' : ''}`}
              onClick={() => setFilter('ongoing')}
            >
              Ongoing
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p>Showing {filteredProjects.length} of {projects.length} projects</p>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`project-status ${project.statusClass}`}>
                  {project.status}
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="progress-section">
                <div className="progress-info">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="project-content">
                <p className="project-number">Project #{project.id}</p>
                <p className="project-description">{project.description}</p>
                
                {/* Technology Tags */}
                <div className="tech-tags">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag more">+{project.technologies.length - 3} more</span>
                  )}
                </div>
                
                <div className="project-details">
                  <div className="project-type">
                    <span className="type-label">Type:</span>
                    <span className="type-value">{project.type}</span>
                  </div>
                  <div className="project-location">
                    <span className="location-label">Location:</span>
                    <span className="location-value">{project.location}</span>
                  </div>
                  <div className="project-client">
                    <span className="client-label">Client:</span>
                    <span className="client-value">{project.client}</span>
                  </div>
                  <div className="project-duration">
                    <span className="duration-label">Duration:</span>
                    <span className="duration-value">{project.duration}</span>
                  </div>
                  <div className="project-budget">
                    <span className="budget-label">Budget:</span>
                    <span className="budget-value">{project.budget}</span>
                  </div>
                  <div className="project-team">
                    <span className="team-label">Team:</span>
                    <span className="team-value">{project.team}</span>
                  </div>
                </div>
              </div>
              
              <div className="project-actions">
                <button className="view-details-btn" onClick={() => openModal(project)}>
                  View Details
                </button>
                <button className="download-report-btn">Download Report</button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="no-results">
            <div className="no-results-content">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <h3>No projects found</h3>
              <p>Try adjusting your filter criteria</p>
            </div>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {showModal && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <span className={`project-status ${selectedProject.statusClass}`}>
                {selectedProject.status}
              </span>
            </div>
            
            <div className="modal-body">
              <div className="modal-section">
                <h3>Project Overview</h3>
                <p>{selectedProject.description}</p>
              </div>
              
              <div className="modal-section">
                <h3>Technologies Used</h3>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="modal-section">
                <h3>Challenges & Outcomes</h3>
                <div className="challenges-outcomes">
                  <div className="challenges">
                    <h4>Challenges:</h4>
                    <p>{selectedProject.challenges}</p>
                  </div>
                  <div className="outcomes">
                    <h4>Outcomes:</h4>
                    <p>{selectedProject.outcomes}</p>
                  </div>
                </div>
              </div>
              
              <div className="modal-section">
                <h3>Project Details</h3>
                <div className="modal-details">
                  <div className="detail-item">
                    <span>Client:</span>
                    <span>{selectedProject.client}</span>
                  </div>
                  <div className="detail-item">
                    <span>Location:</span>
                    <span>{selectedProject.location}</span>
                  </div>
                  <div className="detail-item">
                    <span>Duration:</span>
                    <span>{selectedProject.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span>Budget:</span>
                    <span>{selectedProject.budget}</span>
                  </div>
                  <div className="detail-item">
                    <span>Team Size:</span>
                    <span>{selectedProject.team}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="download-report-btn">Download Full Report</button>
              <button className="contact-btn">Contact Project Manager</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
