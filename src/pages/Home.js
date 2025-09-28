import React from 'react';

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="row">
          
          {/* Left column – photo & personal info */}
          <div className="col-md-5 col-sm-12 personal-information">
            <div>
              <img 
                src="images/pic.jpg" 
                alt="profile image" 
                className="home-pro-img" 
              />
            </div>

            <div className="info">
              <h1>Tahmid Hasan Pranto</h1>
              <i><h3>M.S. in Computer Science (USA)</h3></i>
              <i><h3>B.Sc. in Computer Science & Engineering (Bangladesh)</h3></i>

              {/* Location */}
              <h3>
                <i className="fas fa-map-marker-alt" style={{ marginRight: "8px", color: "#4663ac" }}></i>
                Auburn, Alabama
              </h3>

              {/* Phone */}
              <h3>
                <i className="fas fa-phone" style={{ marginRight: "8px", color: "#4663ac" }}></i>
                (+1) 541-250-7859
              </h3>

              {/* Email */}
              <h3>
                <i className="fas fa-envelope" style={{ marginRight: "8px", color: "#4663ac" }}></i>
                tahmidpranto1406@gmail.com
              </h3>

              <a href="./pdf/cv.pdf" target="_blank" rel="noopener noreferrer">
                <button className="any-btn cv-btn">
                  Download CV <i className="fas fa-download"></i>
                </button>
              </a>
            </div>
          </div>

          {/* Right column – bio, interests, education, profiles */}
          <div className="col-md-7 col-sm-12 index-info">
            
            {/* Biography */}
            <h2 className="any-heading-marginless">Biography</h2>
            <p className="introduction">
              I am Tahmid Hasan Pranto. I recently completed my Master of Science in Computer Science 
              at Oregon State University, Corvallis, OR, USA, where I also served as a Graduate Research 
              and Teaching Assistant. Earlier, I earned my B.Sc. in Computer Science and Engineering 
              from North South University (NSU), Dhaka, Bangladesh. I graduated <i>Cum Laude</i> in both degrees. 
              My research interests broadly include machine learning, robustness, and secure AI systems.
            </p>

            {/* Interests + Education side by side */}
            <div className="row mt-4">
              <div className="col-md-6">
                <h3 className="section-subheading">Interests</h3>
                <ul className="list-unstyled">
                  <li>Adversarial robustness</li>
                  <li>Deep learning for vision</li>
                  <li>Secure AI system deployment</li>
                  <li>Distributed / federated learning</li>
                </ul>
              </div>

              <div className="col-md-6">
                <h3 className="section-subheading">Education</h3>
                <ul className="list-unstyled">
                  <li>
                    🎓 M.S. in Computer Science, 2025<br />
                    <span className="text-muted lil-margin">Oregon State University, USA</span>
                  </li>
                  <li>
                    🎓 B.Sc. in Computer Science & Engineering, 2021<br />
                    <span className="text-muted lil-margin">North South University, Bangladesh</span>
                  </li>
                </ul>
              </div>
            </div>

            
            <h2 className="prof-heading any-heading-marginless">Profiles</h2>
            <div className="row profiles-containers text-center">
              <div className="col-md-3 col-sm-6 profile-wrap text-center">
                <a href="https://www.researchgate.net/profile/Tahmid-Pranto" target="_blank" rel="noopener noreferrer">
                  <div className="text-center">
                    <i className="fab fa-researchgate about-icon"></i>
                    <h3>ResearchGate</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-sm-6 profile-wrap m-left">
                <a href="https://scholar.google.com/citations?user=ffkmcYkAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                  <div className="text-center">
                    <i className="fas fa-user-graduate about-icon"></i>
                    <h3>Google Scholar</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-sm-6 profile-wrap m-left">
                <a href="https://github.com/Tahmid1406" target="_blank" rel="noopener noreferrer">
                  <div className="text-center">
                    <i className="fab fa-github about-icon"></i>
                    <h3>Github</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-sm-6 profile-wrap m-left last-one">
                <a href="https://www.linkedin.com/in/tahmid-hasan-pranto-40435519b/" target="_blank" rel="noopener noreferrer">
                  <div className="text-center">
                    <i className="fab fa-linkedin about-icon"></i>
                    <h3>LinkedIn</h3>
                  </div>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
