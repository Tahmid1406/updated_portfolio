import React from 'react';

const Experience = () => {
  const experienceData = [
    {
      position: "Senior Research Assistant",
      organization: "ECE Department, North South University",
      period: "January 2022 - Present",
      logo: "./images/nsu.png",
      position_class: "left"
    },
    {
      position: "Research Assistant",
      organization: "ECE Department, North South University",
      period: "May 2021 - December 2021",
      logo: "./images/nsu.png",
      position_class: "right"
    },
    {
      position: "Software Engineering Internship",
      organization: "Worklife",
      period: "June 2021 - August 2021",
      logo: "./images/worklife.png",
      position_class: "left"
    }
  ];

  return (
    <section className="experience">
      <div className="container">
        <h2 className="any-heading ex-heading">Academic & Professional Experience</h2>

        {experienceData.map((exp, index) => (
          <div key={index} className="main-timeline-2">
            <div className={`timeline-2 ${exp.position_class}-2`}>
              <div className="card blog-card">
                <img 
                  src={exp.logo} 
                  className="card-img-top ex-nsu-logo"
                  alt="Organization Logo"
                />
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-2">{exp.position}</h4>
                  <h5 className="fw-bold mb-2">
                    <i>{exp.organization}</i>
                  </h5>
                  <p className="text-muted mb-2">
                    <i className="far fa-clock" aria-hidden="true"></i> {exp.period}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;