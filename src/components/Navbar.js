import React, { useState, useEffect } from 'react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Apply theme to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'academics', label: 'Academics' },
    { id: 'publications', label: 'Publications' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certification' },
    { id: 'thesis', label: 'Thesis' },
    // { id: 'blog', label: 'Blog' },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar-modern">
      <div className="nav-container">
        {/* Logo */}
        <div 
          className="nav-logo"
          onClick={() => handleNavClick('home')}
          style={{ cursor: 'pointer' }}
        >
          <img src={process.env.PUBLIC_URL + "/images/tahmid.png"} alt="Tahmid" />

        </div>

        {/* Desktop Nav */}
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {navigationItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: socials + toggle */}
        <div className="nav-actions">
          <div className="nav-socials">
            <a href="https://www.linkedin.com/in/tahmid-hasan-pranto-40435519b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://scholar.google.com/citations?user=ffkmcYkAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"><i className="fas fa-user-graduate"></i></a>
            <a href="https://www.researchgate.net/profile/Tahmid-Pranto" target="_blank" rel="noopener noreferrer"><i className="fab fa-researchgate"></i></a>
            <a href="https://github.com/Tahmid1406" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div>

          {/* Dark Mode Toggle */}
          <button 
            className="dark-toggle" 
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Mobile toggle */}
        <button 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
