import React from "react";

const Academics = () => {
  const academicData = [
    {
      degree: "M.S. in Computer Science",
      institution: "Oregon State University, Covallis, OR-97330, United States",
      grade: "CGPA: 3.57/4.00",
      distinction: "Cum Laude",
      period: "Fall 2025 - Winter 2025",
      logo: "/images/osu.png"
    },
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "North South University, Dhaka, Bangladesh",
      grade: "CGPA: 3.57/4.00",
      distinction: "Cum Laude",
      period: "Spring 2017 - Spring 2021",
      logo: "/images/nsu.png"
    },
    {
      degree: "Higher Secondary School Certificate",
      institution: "B.A.F. Shaheen College, Dhaka, Bangladesh",
      grade: "GPA: 5.00/5.00",
      logo: "/images/baf.png"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Bangladesh Gas Fields High School & College, Brahmanbaria, Bangladesh",
      grade: "CGPA: 5.00/5.00",
      logo: "/images/gas.png"
    }
  ];

  return (
    <div className="academics-section">
      <div className="container">
        <h2 className="any-heading">Academic Credentials</h2>
        <div className="academic-roadmap">
          {academicData.map((item, index) => (
            <div key={index} className="roadmap-item">
              <img src={item.logo} alt={item.institution} className="roadmap-logo" />
              <div className="roadmap-content">
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                {item.grade && <p>{item.grade}</p>}
                {item.distinction && <p>🎓 {item.distinction}</p>}
                {item.period && <p>📅 {item.period}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academics;
