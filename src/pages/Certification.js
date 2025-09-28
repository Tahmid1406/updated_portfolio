import React from 'react';

const Certification = () => {
  const certificates = [
    {
      title: "Neural Networks and Deep Learning",
      issuer: "Coursera | Deeplearning.AI",
      date: "July 2021",
      url: "https://www.coursera.org/account/accomplishments/certificate/B95AQFLK48VS",
      image: "./images/certificate/4.png"
    },
    {
      title: "Improving Deep Neural Networks",
      issuer: "Coursera | Deeplearning.AI",
      date: "June 2021",
      url: "https://www.coursera.org/account/accomplishments/certificate/TAW24L4MLEWG",
      image: "./images/certificate/2.png"
    },
    {
      title: "Structuring Machine Learning Projects",
      issuer: "Coursera | Deeplearning.AI",
      date: "August 2021",
      url: "https://www.coursera.org/account/accomplishments/certificate/FNN7QHRTKZUT",
      image: "./images/certificate/5.png"
    },
    {
      title: "Convolutional Neural Networks",
      issuer: "Coursera | Deeplearning.AI",
      date: "October 2021",
      url: "https://www.coursera.org/account/accomplishments/certificate/BBLRU89H57GE",
      image: "./images/certificate/3.png"
    },
    {
      title: "Machine Learning",
      issuer: "Coursera | Stanford University",
      date: "July 2021",
      url: "https://www.coursera.org/account/accomplishments/certificate/B95AQFLK48VS",
      image: "./images/certificate/1.png"
    }
  ];

  return (
    <section className="certification">
      <div className="container">
        <h2 className="any-heading">Certifications</h2>

        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-thumb">
                <img src={cert.image} alt="Certificate preview" />
              </div>
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                <div className="cert-action">
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-btn"
                  >
                    Verify ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
