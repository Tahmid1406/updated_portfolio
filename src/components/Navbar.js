import React, { useState } from 'react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    // { id: 'home', label: 'Home' },
    { id: 'academics', label: 'Academics' },
    { id: 'publications', label: 'Publications' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certification' },
    { id: 'thesis', label: 'Thesis' },
    { id: 'blog', label: 'Blog' },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div 
          onClick={() => handleNavClick('home')}
          style={{ cursor: 'pointer' }}
        >
          <img 
            className="img-fluid navbar-brand nav-img" 
            src="./images/tahmid.png" 
            alt="Tahmid" 
          />
        </div>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navigationItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="d-flex">
            <a 
              href="https://www.linkedin.com/in/tahmid-hasan-pranto-40435519b/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin nav-profile-icons"></i>
            </a>
            <a 
              href="https://scholar.google.com/citations?user=ffkmcYkAAAAJ&hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fas fa-user-graduate nav-profile-icons"></i>
            </a>
            <a 
              href="https://www.researchgate.net/profile/Tahmid-Pranto" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fab fa-researchgate nav-profile-icons"></i>
            </a>
            <a 
              href="https://github.com/Tahmid1406" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fab fa-github nav-profile-icons"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;