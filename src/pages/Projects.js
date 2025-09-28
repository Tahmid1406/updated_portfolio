import React from "react";

const Projects = () => {
  const projectsData = [
    {
      title: "Human Activity Recognition Using Machine Learning Algorithms",
      course: "CSE 445 - Machine Learning",
      description:
        "Used cellphone sensor data (motion, GPS, acceleration) to classify six types of human activity. Compared multiple ML models, achieving 95% accuracy with SVC. Evaluation included precision, recall, F1-score, and confusion matrices.",
      github:
        "https://github.com/Tahmid1406/Human-Activity-Classification-Using-ML-Techniques",
      report: "./pdf/445.pdf",
      image: "images/project/p3_2.png",
      tech: ["Python", "Scikit-learn", "SVC", "Logistic Regression"],
    },
    {
      title:
        "SHOPLine | Augmented-Reality Based Cross Platform E-Commerce Application",
      course: "CSE 327 - Software Engineering",
      description:
        "Developed a cross-platform e-commerce application with AR product previews. Integrated live 3D camera overlays on Android, enhancing user engagement and online shopping experience.",
      github:
        "https://github.com/Tahmid1406/SHOPLINE-E-Commerce-Platform-Web-Android-",
      image: "images/ardemo.png",
      tech: ["Java", "Android", "ARCore", "Firebase"],
    },
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="any-heading-marginless">Projects</h2>

        <div className="projects-list">
          {projectsData.map((project, index) => (
            <div key={index} className="project-entry">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-course">{project.course}</p>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn"
                  >
                    GitHub <i className="fab fa-github"></i>
                  </a>
                  {project.report && (
                    <a
                      href={project.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-btn secondary"
                    >
                      Report <i className="fas fa-file-pdf"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
