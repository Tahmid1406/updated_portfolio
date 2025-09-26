import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Publications from './pages/Publications';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certification from './pages/Certification';
import Thesis from './pages/Thesis';
import Blog from './pages/Blog';
import './style.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderPage = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'academics':
        return <Academics />;
      case 'publications':
        return <Publications />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'certifications':
        return <Certification />;
      case 'thesis':
        return <Thesis />;
      case 'blog':
        return <Blog />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;