import React, { useState, useEffect } from "react";

const Thesis = () => {
  const bachelorThesisImages = [
    { src: "images/thesis/1.png", title: "Study Area" },
    { src: "images/thesis/2.png", title: "Satellite Image Rasterization" },
    { src: "images/thesis/3.png", title: "Gaussian Noise Injection" },
    { src: "images/thesis/4.png", title: "Model Prediction" },
    { src: "images/thesis/5.png", title: "Loss Function vs Epoch" },
    { src: "images/thesis/6.png", title: "Dice Coefficient vs Epoch" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bachelorThesisImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bachelorThesisImages.length]);

  return (
    <section className="thesis-section">
      <div className="container">
        {/* Master’s Thesis */}
        <h2 className="any-heading-marginless">Master’s Thesis</h2>
        <div className="thesis-block thesis-ms">
          {/* keep contents as-is, you can replace later */}
          <div className="thesis-hero">
            <h3 className="thesis-title">
              [Your MS Thesis Title Goes Here]
            </h3>
            <p className="thesis-meta">
              <b>Course:</b> M.S. in Computer Science
            </p>
            <p className="thesis-meta">
              <b>Supervisor:</b> [Supervisor Name] |{" "}
              <a href="#" target="_blank" rel="noopener noreferrer">
                Profile
              </a>{" "}
              |{" "}
              <a href="#" target="_blank" rel="noopener noreferrer">
                Google Scholar
              </a>
            </p>
          </div>

          <div className="thesis-details">
            <div className="detail-box">
              <h3>Abstract</h3>
              <p>[Your MS thesis abstract here]</p>
            </div>
            <div className="detail-box">
              <h3>Objective</h3>
              <p>[Your MS thesis objectives here]</p>
            </div>
          </div>

          <div className="thesis-slideshow">
            <img
              src={bachelorThesisImages[currentIndex].src}
              alt={bachelorThesisImages[currentIndex].title}
            />
            <div className="slideshow-caption">
              {bachelorThesisImages[currentIndex].title}
            </div>
          </div>

          <div className="thesis-actions">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <button className="butn">
                GitHub Code <i className="fab fa-github"></i>
              </button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <button className="butn">
                Project Report <i className="fas fa-file-pdf"></i>
              </button>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="thesis-divider"></div>

        {/* Bachelor’s Thesis */}
        <h2 className="any-heading-marginless">Undergraduate Thesis</h2>
        <div className="thesis-block thesis-bsc">
          <div className="thesis-hero">
            <h3 className="thesis-title">
              Effect of Label Noise in Patch-wise Multi-class Semantic Segmentation
            </h3>
            <p className="thesis-meta">
              <b>Course:</b> CSE499 - Senior Design Project
            </p>
            <p className="thesis-meta">
              <b>Supervisor:</b> Dr. Mohammad Rashedur Rahman |{" "}
              <a
                href="http://ece.northsouth.edu/people/rashedur-rahman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NSU Profile
              </a>{" "}
              |{" "}
              <a
                href="https://scholar.google.ca/citations?user=L9S6rlUAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>
            </p>
          </div>

          <div className="thesis-details">
            <div className="detail-box">
              <h3>Abstract</h3>
              <p>
                Using high-resolution satellite imagery, we created a dataset of
                Bangladesh’s marine region and segmented sediment load into five
                classes using a modified U-Net. We further tested robustness
                under different label noise scenarios.
              </p>
            </div>
            <div className="detail-box">
              <h3>Study Objective</h3>
              <p>
                This study leverages satellite data and machine learning to
                support research in soil erosion, flood management, and
                biodiversity protection, offering insights into sustainable
                marine resource management.
              </p>
            </div>
          </div>

          <div className="thesis-slideshow">
            <img
              src={bachelorThesisImages[currentIndex].src}
              alt={bachelorThesisImages[currentIndex].title}
            />
            <div className="slideshow-caption">
              {bachelorThesisImages[currentIndex].title}
            </div>
          </div>

          <div className="thesis-actions">
            <a
              href="https://github.com/Tahmid1406/CSE499_Sediment_Delineation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="butn">
                GitHub Code <i className="fab fa-github"></i>
              </button>
            </a>
            <a href="./pdf/499.pdf" target="_blank" rel="noopener noreferrer">
              <button className="butn">
                Project Report <i className="fas fa-file-pdf"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thesis;
