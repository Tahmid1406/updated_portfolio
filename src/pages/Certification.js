import React from 'react';

const Certification = () => {
  const certificates = [
    {
      title: "Machine Learning",
      issuer: "Coursera (Andrew Ng) | Stanford University",
      date: "July 2021",
      url: "https://www.coursera.org/account/accomplishments/certificate/B95AQFLK48VS",
      image: "/images/certificate_machine_learning.png"
    },
    {
      title: "Convolutional Neural Networks",
      issuer: "Coursera | Deeplearning.AI",
      date: "October 2021",
      url: "https://www.coursera.org/account/accomplishments/certificate/BBLRU89H57GE",
      image: "/images/certificate_cnn.png"
    },
    {
      title: "Generative AI with Diffusion Models",
      issuer: "AWS Training and Certification",
      date: "July 2025",
      url: "https://skillbuilder.aws/learn/62GE2Q9GRY/generative-ai-with-diffusion-models/VMVJE9NMQ7",
      image: "/images/certificate_GenAI_with_diffusion.png"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services Training and Certification",
      date: "July 2025",
      url: "https://www.credly.com/badges/6fcf0c54-58c7-438d-b8f9-0816f858e9d5",
      image: "/images/certificate_aws_cp.png"
    },
    {
      title: "LangChain for LLM Application Development",
      issuer: "Deeplearning.AI",
      date: "May 2025",
      url: "https://learn.deeplearning.ai/accomplishments/ede34006-0edd-4ba0-bbdc-3c13dd30d67d?usp=sharing",
      image: "/images/certificate_langchain.png"
    },
    {
      title: "LangChain Chat with Your Data",
      issuer: "Deeplearning.AI",
      date: "May 2025",
      url: "https://learn.deeplearning.ai/accomplishments/f6d0f1b8-1b88-4094-906f-0fad2a628233?usp=sharing",
      image: "/images/certificate_Langchain_chat.png"
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "Coursera | Deeplearning.AI",
      date: "July 2021",
      url: "https://www.coursera.org/account/accomplishments/certificate/B95AQFLK48VS",
      image: "/images/certificate_NNandDL.png"
    },
    {
      title: "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
      issuer: "Coursera | Deeplearning.AI",
      date: "June 2021",
      url: "https://www.coursera.org/account/accomplishments/certificate/TAW24L4MLEWG",
      image: "/images/certificate_improve_dnn.png"
    },
    {
      title: "Structuring Machine Learning Projects",
      issuer: "Coursera | Deeplearning.AI",
      date: "August 2021",
      url: "https://www.coursera.org/account/accomplishments/certificate/FNN7QHRTKZUT",
      image: "/images/certificate_structure_ML_project.png"
    }, 
    {
      title: "Responsible Artificial Intelligence Practices",
      issuer: "AWS Training and Certification",
      date: "July 2025",
      url: "https://skillbuilder.aws/learn/1H631ZWCTP/responsible-artificial-intelligence-practices/BN51NEFJNG",
      image: "/images/certificate_Responsible_Ai.png"
    },
    {
      title: "Foundations of Prompt Engineering",
      issuer: "AWS Training and Certification",
      date: "July 2025",
      url: "https://skillbuilder.aws/learn/VF6H4SZ1BU/foundations-of-prompt-engineering/7U8XFUVXDT",
      image: "/images/certificate_foundation_of_prompt.png"
    }, 
    {
      title: "Planning Machine Learning Projects",
      issuer: "AWS Training and Certification",
      date: "July 2025",
      url: "https://skillbuilder.aws/learn/GVZ97Y7P5R/planning-a-machine-learning-project/FPEBEWNEJA",
      image: "/images/certificate_planning_ml_project.png"
    }
  ];

  return (
    <section className="certification">
      <div className="container">
        <h2 className="any-heading-marginless">Certifications</h2>

        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-thumb">
                <img 
                  src={process.env.PUBLIC_URL + cert.image} 
                  alt={cert.title} 
                />
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
