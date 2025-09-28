import React from 'react';

const Thesis = () => {
  const masterThesisImages = [
    { src: "images/thesis/ms1.png", title: "System Overview" },
    { src: "images/thesis/ms2.png", title: "Training Curve" },
    { src: "images/thesis/ms3.png", title: "Bit-flip Attack Illustration" }
  ];

  const bachelorThesisImages = [
    { src: "images/thesis/1.png", title: "Study Area" },
    { src: "images/thesis/2.png", title: "Satellite Image Rasterization" },
    { src: "images/thesis/3.png", title: "Gaussian Noise Injection" },
    { src: "images/thesis/4.png", title: "Model Prediction" },
    { src: "images/thesis/5.png", title: "Loss Function vs Epoch" },
    { src: "images/thesis/6.png", title: "Dice Coefficient vs Epoch" }
  ];

  return (
    <section className="thesis-section">
      <div className="container">

        {/* Bachelor Thesis */}
        <h2 className="any-heading-marginless">Undergraduate Thesis</h2>
        <div className="thesis-block">
          <div className="thesis-hero">
            <h3 className="thesis-title">
              Effect of Label Noise in Patch-wise Multi-class Semantic Segmentation of Sedimentation from High-resolution Satellite
            </h3>
            <p className="thesis-meta"><b>Course:</b> CSE499 - Senior Design Project</p>
            <p className="thesis-meta">
              <b>Supervisor:</b> Dr. Mohammad Rashedur Rahman | 
              <a href="http://ece.northsouth.edu/people/rashedur-rahman/" target="_blank" rel="noopener noreferrer"> NSU Profile</a> | 
              <a href="https://scholar.google.ca/citations?user=L9S6rlUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"> Google Scholar</a>
            </p>
          </div>

          <div className="thesis-details">
            <div className="detail-box">
              <h3>Abstract</h3>
              <p>
                Using high-resolution satellite imagery, we created a dataset of Bangladesh’s marine 
                region and segmented sediment load into five classes using a modified U-Net. 
                We further tested robustness under different label noise scenarios.
              </p>
            </div>
            <div className="detail-box">
              <h3>Study Objective</h3>
              <p>
                This study leverages satellite data and machine learning to support research in 
                soil erosion, flood management, and biodiversity protection, offering insights into 
                sustainable marine resource management.
              </p>
            </div>
          </div>

          <div className="thesis-gallery">
            {bachelorThesisImages.map((img, idx) => (
              <figure key={idx} className="gallery-item">
                <img src={img.src} alt={img.title} />
                <figcaption className="gallery-caption">{img.title}</figcaption>
              </figure>
            ))}
          </div>

          <div className="thesis-actions">
            <a href="https://github.com/Tahmid1406/CSE499_Sediment_Delineation" target="_blank" rel="noopener noreferrer">
              <button className="butn">GitHub Code <i className="fab fa-github"></i> </button>
            </a>
            <a href="./pdf/499.pdf" target="_blank" rel="noopener noreferrer">
              <button className="butn">Project Report <i className="fas fa-file-pdf"> </i></button>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="thesis-divider"></div>


        {/* Bachelor Thesis */}
        <h2 className="any-heading-marginless">Undergraduate Thesis</h2>
        <div className="thesis-block">
          <div className="thesis-hero">
            <h3 className="thesis-title">
              Effect of Label Noise in Patch-wise Multi-class Semantic Segmentation of Sedimentation from High-resolution Satellite
            </h3>
            <p className="thesis-meta"><b>Course:</b> CSE499 - Senior Design Project</p>
            <p className="thesis-meta">
              <b>Supervisor:</b> Dr. Mohammad Rashedur Rahman | 
              <a href="http://ece.northsouth.edu/people/rashedur-rahman/" target="_blank" rel="noopener noreferrer"> NSU Profile</a> | 
              <a href="https://scholar.google.ca/citations?user=L9S6rlUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"> Google Scholar</a>
            </p>
          </div>

          <div className="thesis-details">
            <div className="detail-box">
              <h3>Abstract</h3>
              <p>
                Using high-resolution satellite imagery, we created a dataset of Bangladesh’s marine 
                region and segmented sediment load into five classes using a modified U-Net. 
                We further tested robustness under different label noise scenarios.
              </p>
            </div>
            <div className="detail-box">
              <h3>Study Objective</h3>
              <p>
                This study leverages satellite data and machine learning to support research in 
                soil erosion, flood management, and biodiversity protection, offering insights into 
                sustainable marine resource management.
              </p>
            </div>
          </div>

          <div className="thesis-gallery">
            {bachelorThesisImages.map((img, idx) => (
              <figure key={idx} className="gallery-item">
                <img src={img.src} alt={img.title} />
                <figcaption className="gallery-caption">{img.title}</figcaption>
              </figure>
            ))}
          </div>

          <div className="thesis-actions">
            <a href="https://github.com/Tahmid1406/CSE499_Sediment_Delineation" target="_blank" rel="noopener noreferrer">
              <button className="butn">GitHub Code <i className="fab fa-github"></i> </button>
            </a>
            <a href="./pdf/499.pdf" target="_blank" rel="noopener noreferrer">
              <button className="butn">Project Report <i className="fas fa-file-pdf"> </i></button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Thesis;
