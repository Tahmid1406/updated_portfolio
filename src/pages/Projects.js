import React from "react";

const Projects = () => {
  const projectsData = [
    {
      title: "Hessian-aware Training for enhanced Robustness of Deep Neural Networks usder Parameter Corruptions",
      course: "Master’s Project | Funded by Samsung Global Research Outreach (GRO)",
      description:
        "Proposed a Hessian-aware training algorithm that minimizes Hessian trace to promote flatter loss surfaces, improving deep neural network resilience against parameter corruptions and bit-flip attacks. Conducted large-scale experiments on MNIST, CIFAR-10, and ImageNet with CNNs, ResNets, and Vision Transformers, showing a 6–12% reduction in vulnerable parameters without sacrificing accuracy. Demonstrated that trained models required ~3× more bit-flips to degrade performance compared to baselines, and validated compatibility with hardware/system-level defenses such as NeuroPot and RADAR.",
      github: "https://github.com/Tahmid1406/MS-thesis",
      report: "/pdf/ms-thesis.pdf", // keep in /public/pdf
      image: "/images/project/ms_thesis.png",
      tech: ["PyTorch", "Deep Learning", "ResNet", "Vision Transformers", "Robustness"],
    },
    {
      title: "End-to-End LLM Chatbot with RAG",
      course: "Personal Project",
      description:
        "Built and deployed a full-stack conversational AI system integrating LLaMA2 with a Retrieval-Augmented Generation (RAG) pipeline. Implemented document ingestion, embeddings (ChromaDB), and vectorDB for context-aware responses. Designed a FastAPI backend with a React frontend, containerized using Docker for seamless deployment.",
      github: "https://github.com/Tahmid1406/LLMchatBot",
      report: "/pdf/chatbot.pdf",
      image: "/images/project/chatbot.png",
      tech: ["LLaMA2", "LangChain", "ChromaDB", "FastAPI", "React", "Docker"],
    },
    {
      title: "Semantic Segmentation of Sedimentation using DNNs",
      course: "Bachelor’s Thesis | Funded by Faculty Research Grant CTRG-21-SEPS-19",
      description:
        "Constructed a high-resolution dataset of Bangladesh’s marine region from Copernicus Sentinel-2 imagery, with five sedimentation classes labeled using ArcGIS/QGIS. Designed a modified U-Net architecture with patch-wise learning to efficiently train on extremely large tiles (36k × 28k pixels). Achieved Dice Coefficient up to 87% and 77% pixel accuracy, validating the effectiveness of deep learning for large-scale marine sediment analysis. Extended the study by evaluating the robustness of models to different label noise scenarios (NCAR, NAR, NNAR) for reliable environmental monitoring.",
      github: "https://github.com/Tahmid1406/CSE499_Sediment_Delineation",
      report: "/pdf/499.pdf",
      image: "/images/project/bsc_thesis.png",
      tech: ["Python", "U-Net", "Deep Learning", "ArcGIS", "QGIS", "Satellite Imagery"],
    },
    {
      title: "Hybridization of Distributed Systems: Blockchain and Machine Learning",
      course: "Research Project | Funded by NSU Faculty Research Grant",
      description:
        "Designed decentralized architectures combining blockchain, smart contracts, and machine learning for fraud detection, federated learning, and secure e-commerce. Proposed a privacy-preserving, incentive-based framework for collaborative model training, achieving 98.9% accuracy while reducing false negatives. Built blockchain-driven e-commerce platforms with data-mining rules for reputation and scam prevention, and extended research into federated medical and financial systems enabling secure collaboration without raw data sharing. Published in IEEE Access and Cybernetics & Systems.",
      github: "",
      report: "/pdf/blockchain_ml.pdf",
      image: "/images/project/blockchain_ml.png",
      tech: ["Blockchain", "Smart Contracts", "Machine Learning", "Federated Learning", "Data Mining", "Privacy-Preserving AI"],
    },
    {
      title: "Human Activity Recognition Using Machine Learning Algorithms",
      course: "CSE 445 - Machine Learning",
      description:
        "Used cellphone sensor data (motion, GPS, acceleration) to classify six types of human activity. Compared multiple ML models, achieving 95% accuracy with SVC. Evaluation included precision, recall, F1-score, and confusion matrices.",
      github: "https://github.com/Tahmid1406/Human-Activity-Classification-Using-ML-Techniques",
      report: "/pdf/445.pdf",
      image: "/images/project/p3_2.png",
      tech: ["Python", "Scikit-learn", "SVC", "Logistic Regression"],
    },
    {
      title: "SHOPLine | Augmented-Reality Based Cross Platform E-Commerce Application",
      course: "CSE 327 - Software Engineering",
      description:
        "Developed a cross-platform e-commerce application with AR product previews. Integrated live 3D camera overlays on Android, enhancing user engagement and online shopping experience.",
      github: "https://github.com/Tahmid1406/SHOPLINE-E-Commerce-Platform-Web-Android-",
      image: "/images/ardemo.png",
      tech: ["Java", "Android", "ARCore", "Firebase"],
    },
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="any-heading-marginless">Projects</h2>

        <div className="projects-list">
          {projectsData.map((project, index) => (
            <div key={index} className="project-entry">
              <div className="project-image">
                <img src={process.env.PUBLIC_URL + project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-course">{project.course}</p>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-btn"
                    >
                      GitHub <i className="fab fa-github"></i>
                    </a>
                  )}
                  {project.report && (
                    <a
                      href={project.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-btn secondary"
                    >
                      Report <i className="fas fa-file-pdf"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
