import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      category: "ML/DL/LLM Skills",
      icon: "fas fa-robot",
      skills: ["Pytorch", "Tensorflow", "LangChain", "RAG", "HuggingFace", "ChromaDB", "Transformers", "ViTs"]
    },
    {
      category: "Programming and Scripting",
      icon: "fas fa-terminal",
      skills: ["Java", "C/C++", "Python", "Javascript", "SQL", "MATLAB", "Latex", "Bash"]
    },
    {
      category: "Data Science & Visualization",
      icon: "fas fa-file-code",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy"]
    },
    {
      category: "Web and Cloud",
      icon: "fa fa-code",
      skills: ["AWS", "React.js", "FastAPI", "Django", "REST APIs", "Git", "Docker"]
    },
    {
      category: "Tools and Productivity",
      icon: "fa fa-code",
      skills: ["HPC", "Parallalization", "Linux", "MS Office", "Trello"]
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
