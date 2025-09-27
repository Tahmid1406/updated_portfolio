import React from 'react';

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="row">
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
              <i><h3>B.Sc. in Computer Science & Engineering (Bangladesh) </h3></i>

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

          <div className="col-md-7 col-sm-12 index-info">
            <h2 className="any-heading-marginless">About Me</h2>
            <div className="introduction">
              <p>
                Hello, I’m Tahmid Hasan Pranto. I recently completed my Master of Science in Computer Science 
                at Oregon State University, Corvallis, OR, USA, where I also served as a Graduate Research and 
                Teaching Assistant. Earlier, I earned my B.Sc. in Computer Science and Engineering from North 
                South University (NSU), Dhaka, Bangladesh. I was honored to graduate Cum Laude in both my 
                undergraduate and master’s studies.
              </p>

              <p>
                My academic and research experiences so far have allowed me to explore different areas of machine 
                learning and artificial intelligence, including topics such as adversarial robustness, deep learning 
                for vision, and secure AI system deployment. My recent research has focused on the challenges of making 
                AI models resilient to bit-level corruption in their parameters.
              </p>

              <p>
                Outside of academics, I enjoy spending time with classic films and music—both of which give me fresh 
                perspectives and balance in life. I see my graduate journey as a step toward learning more, asking better 
                questions, and contributing meaningfully to the field of computer science.
              </p>
              
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