import React from 'react';

const Certification = () => {
  const deepLearningCerts = [
    {
      title: "Neural Networks and Deep Learning",
      date: "July, 2021",
      url: "https://www.coursera.org/account/accomplishments/certificate/B95AQFLK48VS",
      image: "./images/certificate/4.png"
    },
    {
      title: "Improving Deep Neural Networks",
      date: "June, 2021",
      url: "https://www.coursera.org/account/accomplishments/certificate/TAW24L4MLEWG",
      image: "./images/certificate/2.png"
    },
    {
      title: "Structuring Machine Learning Projects",
      date: "August, 2021",
      url: "https://www.coursera.org/account/accomplishments/certificate/FNN7QHRTKZUT",
      image: "./images/certificate/5.png"
    },
    {
      title: "Convolutional Neural Networks",
      date: "October, 2021",
      url: "https://www.coursera.org/account/accomplishments/certificate/BBLRU89H57GE",
      image: "./images/certificate/3.png"
    }
  ];

  const machineLearningCerts = [
    {
      title: "Machine Learning",
      date: "July, 2021",
      url: "https://www.coursera.org/account/accomplishments/certificate/B95AQFLK48VS",
      image: "./images/certificate/1.png"
    }
  ];

  return (
    <div className="certification">
      <div className="container">
        <h2 className="any-heading">Certifications</h2>

        <div className="certi-outer-container deep-learn">
          <h3 className="outer-cont-heading">Deep Learning Specialization || Coursera || Deeplearning.AI</h3>

          <div className="row">
            {deepLearningCerts.map((cert, index) => (
              <div key={index} className={`col-lg-3 col-md-6 col-sm-12 ${index === 0 ? 'first-card' : index === 2 ? 'third-card' : index === 3 ? 'fourth-card' : ''}`}>
                <div className="card cer-card" style={{width: '18rem'}}>
                  <img src={cert.image} className="card-img-top" alt="Certificate" />
                  <div className="card-body">
                    <h5 className="card-title">{cert.title}</h5>
                    <p className="card-text">{cert.date}</p>
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="any-btn cer-btn"
                    >
                      Verify
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="certi-outer-container machine-learn">
          <h3 className="outer-cont-heading">Machine Learning || Coursera || Stanford University</h3>

          <div className="row">
            {machineLearningCerts.map((cert, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                <div className="card cer-card" style={{width: '18rem'}}>
                  <img src={cert.image} className="card-img-top" alt="Certificate" />
                  <div className="card-body">
                    <h5 className="card-title">{cert.title}</h5>
                    <p className="card-text">{cert.date}</p>
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="any-btn cer-btn"
                    >
                      Verify
                    </a>
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

export default Certification;