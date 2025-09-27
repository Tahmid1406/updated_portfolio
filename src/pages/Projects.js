import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      title: "Human Activity Recognition Using Machine Learning Algorithms",
      course: "CSE 445 - Machine Learning",
      description: "In this project we used cellphone sensor data (angular motion, acceleration, geographic location and tri-axial (3-d) motion data) to classify human activity. The activity has been classified for 6 classes and a total of 3 machine learning models have been tested on this dataset. SVC performs with a highest testing accuracy of 95% followed by logistic regression with testing accuracy of 82% followed by Ridge classifier CV with testing accuracy of 81%. For further investigation about the models performance, we showed the precision, recall, f1-score along with corresponding confusion matrix.",
      github: "https://github.com/Tahmid1406/Human-Activity-Classification-Using-ML-Techniques",
      report: "./pdf/445.pdf",
      image: "images/project/p3_2.png"
    },
    {
      title: "SHOPLine | Augmented-Reality Based Cross Platform E-Commerce Application",
      course: "Course: CSE327 - Software Engineering",
      description: "The purpose of this project is to add a live camera 3D preview of the products that the customers buy from the online e-commerce sites. Our android version of the project will have this feature. User will just press a button and the camera will show a live 3d preview to the user. Which will make online shopping far more interesting and will hopefully attract more consumers.",
      github: "https://github.com/Tahmid1406/SHOPLINE-E-Commerce-Platform-Web-Android-",
      image: "images/ardemo.png"
    }
  ];

  return (
    <div className="project">
      <div className="container">
        <h2 className="any-heading">Projects</h2>

        <div className="proj-outer-container">
          <div className="row">
            {projectsData.map((project, index) => (
              <div key={index} className="col-md-6">
                <div className="card project-card mb-5" style={{width: '90%'}}>
                  <div className="text-center proj-img">
                    <img 
                      src={project.image} 
                      className="card-img-top" 
                      alt="Project Screenshot"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.course}</p>
                    <p className="card-text">{project.description}</p>
                    <div className="text-center mb-3 mt-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <button className={`any-btn project-btn-git ${index === 0 ? 'g1' : ''}`}>
                          Github Code <i className="fas fa-chevron-right"></i>
                        </button>
                      </a>
                      {project.report && (
                        <a 
                          href={project.report} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <button className="any-btn project-btn-report">
                            Project Report <i className="fas fa-download"></i>
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;