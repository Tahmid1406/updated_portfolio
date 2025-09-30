import React from 'react';

const Experience = () => {
  const experienceData = [
    {
      position: "Internship - Junior Machine Learning Engineering",
      organization: "LegoIO LLC, Germantown, MD, USA",
      period: "Jun 2025 – Aug 2025",
      logo: "/images/legoio.jpeg",
      responsibilities: [
        "Gained hands-on experience with production-scale AI deployment pipelines, learning best practices for scaling machine learning models into real-world applications.",
        "Explored cloud services (AWS EC2, S3, SageMaker) to support model training, storage, and deployment workflows.",
        "Worked with backend deep neural network (DNN) systems, studying integration of model inference into web and API-based environments.",
        "Collaborated with senior engineers to understand MLOps practices including containerization, monitoring, and CI/CD."
      ]
    },
    {
      position: "Graduate Research Assistant",
      organization: "EECS Department, Oregon State University, Corvallis, OR, USA",
      period: "Apr 2024 – Mar 2025",
      logo: "/images/osu.png",
      responsibilities: [
        "Collaborated with research team and attended weekly meetings to discuss progress and challenges.",
        "Designed and implemented Hessian-aware training algorithms to improve resilience of deep neural networks against parameter-level bit-flip attacks.",
        "Developed computationally efficient methods (e.g., Hutchinson’s approximation, layer sampling) to make second-order optimization feasible for large-scale models such as ResNet50 and DeiT.",
        "Conducted extensive experiments on MNIST, CIFAR-10, and ImageNet with CNNs, ResNets, and Transformers, demonstrating 6–12% reduction in vulnerable parameters and 3× higher robustness against multi-bit corruptions.",
        "Analyzed loss landscapes and parameter sensitivities to characterize model robustness, and evaluated synergy of the proposed method with hardware/system-level defenses (e.g., NeuroPot, RADAR)."
      ]
    },
    {
      position: "Graduate Teaching Assistant",
      organization: "EECS Department, Oregon State University, Corvallis, OR, USA",
      period: "Aug 2023 – Mar 2024",
      logo: "/images/osu.png",
      responsibilities: [
        "Assisted in teaching and grading for CS374 (Operating Systems), supporting a class of 150+ students.",
        "Held weekly office hours to explain course material, resolve student queries, and provide guidance on assignments.",
        "Evaluated programming projects, homework, and exams with detailed feedback to ensure learning outcomes.",
        "Collaborated with faculty in ensuring grading fairness and instructional delivery."
      ]
    },
    {
      position: "Senior Research Assistant",
      organization: "ECE Department, North South University, Dhaka, Bangladesh",
      period: "January 2022 – Sep 2023",
      logo: "/images/nsu.png",
      responsibilities: [
        "Conducted research on semantic segmentation of high-resolution satellite imagery, analyzing the impact of label noise on deep learning models (U-Net) for marine sedimentation studies.",
        "Developed decentralized applications combining blockchain and machine learning, including federated learning frameworks for e-commerce and medical diagnostics.",
        "Authored and published peer-reviewed articles in international journals and conferences.",
        "Mentored senior-year undergraduate students in their thesis projects, providing guidance on research design, experimentation, and scientific writing."
      ]
    },
    {
      position: "Research Assistant",
      organization: "ECE Department, North South University, Dhaka, Bangladesh",
      period: "May 2021 – December 2021",
      logo: "/images/nsu.png",
      responsibilities: [
        "Worked on semantic segmentation of satellite imagery with deep learning.",
        "Prepared experimental pipelines and data preprocessing workflows.",
        "Collaborated with team on drafting manuscripts."
      ]
    },
    {
      position: "Software Engineering Intern",
      organization: "Worklife, Dhaka, Bangladesh",
      period: "June 2021 – August 2021",
      logo: "/images/worklife.png",
      responsibilities: [
        "Built and maintained backend APIs for a productivity application called Worklife.",
        "Implemented frontend features using React.js.",
        "Collaborated with senior engineers on debugging and deployment."
      ]
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
                <img src={process.env.PUBLIC_URL + exp.logo} alt={exp.organization} />
              </div>
              <div className="exp-details">
                <h4>{exp.position}</h4>
                <h5>{exp.organization}</h5>
                <span className="exp-period">{exp.period}</span>
                <ul className="exp-responsibilities">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
