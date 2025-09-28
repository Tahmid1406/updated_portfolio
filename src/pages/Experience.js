import React from 'react';

const Experience = () => {
  const experienceData = [
    {
      position: "Senior Research Assistant",
      organization: "ECE Department, North South University",
      period: "January 2022 – Present",
      logo: "./images/nsu.png"
    },
    {
      position: "Research Assistant",
      organization: "ECE Department, North South University",
      period: "May 2021 – December 2021",
      logo: "./images/nsu.png"
    },
    {
      position: "Software Engineering Intern",
      organization: "Worklife",
      period: "June 2021 – August 2021",
      logo: "./images/worklife.png"
    }
  ];

  return (
    <section className="experience">
      <div className="container">
        <h2 className="any-heading-marginless">Academic & Professional Experience</h2>

        <div className="experience-list">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-entry">
              <div className="exp-meta">
                <img src={exp.logo} alt={exp.organization} />
              </div>
              <div className="exp-details">
                <h4>{exp.position}</h4>
                <h5>{exp.organization}</h5>
                <span className="exp-period">{exp.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
