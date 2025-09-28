import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      category: "Machine Learning API",
      icon: "fas fa-robot",
      skills: ["Pytorch", "Tensorflow"]
    },
    {
      category: "Programming",
      icon: "fas fa-terminal",
      skills: ["Java", "C/C++"]
    },
    {
      category: "Scripting Language",
      icon: "fas fa-file-code",
      skills: ["Python", "Javascript", "PHP"]
    },
    {
      category: "Markup Language",
      icon: "fa fa-code",
      skills: ["HTML", "CSS", "XML", "LaTex"]
    },
    {
      category: "Dev Environment",
      icon: "fas fa-laptop-code",
      skills: ["VsCode", "Jupyter Notebook", "PyCharm", "Eclipse"]
    },
    {
      category: "Soft Skills",
      icon: "fas fa-award",
      skills: ["Communication", "Teamwork", "Problem Analysis", "Solution Finding"]
    }
  ];

  return (
    <div className="skill">
      <div className="container">
        <h2 className="any-heading-marginless">Coding and Software Skills</h2>

        <div className="skill-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-box">
              <h3 className="skill-type">
                <i className={skillGroup.icon}></i> {skillGroup.category}
              </h3>
              <ul>
                {skillGroup.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
