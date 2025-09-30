import React, { useState, useEffect } from "react";

const Thesis = () => {
  const msThesisImages = [
    { src: process.env.PUBLIC_URL + "/images/project_hessian_aware_p1.png", title: "Numerical Perturbations" },
    { src: process.env.PUBLIC_URL + "/images/project_hessian_aware_p2.png", title: "Visualizing the Loss Landscape" },
    { src: process.env.PUBLIC_URL + "/images/project_hessian_aware_p3.png", title: "Accuracy Drop Distribution" },
    { src: process.env.PUBLIC_URL + "/images/project_hessian_aware_p4.png", title: "Bit Position Analysis" },
  ];

  const bachelorThesisImages = [
    { src: process.env.PUBLIC_URL + "/images/thesis/1.png", title: "Study Area" },
    { src: process.env.PUBLIC_URL + "/images/thesis/2.png", title: "Satellite Image Rasterization" },
    { src: process.env.PUBLIC_URL + "/images/thesis/3.png", title: "Gaussian Noise Injection" },
    { src: process.env.PUBLIC_URL + "/images/thesis/4.png", title: "Model Prediction" },
    { src: process.env.PUBLIC_URL + "/images/thesis/5.png", title: "Loss Function vs Epoch" },
    { src: process.env.PUBLIC_URL + "/images/thesis/6.png", title: "Dice Coefficient vs Epoch" },
  ];

  const [msIndex, setMsIndex] = useState(0);
  const [bscIndex, setBscIndex] = useState(0);

  // Auto-advance MS slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setMsIndex((prev) => (prev + 1) % msThesisImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [msThesisImages.length]);

  // Auto-advance BSc slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setBscIndex((prev) => (prev + 1) % bachelorThesisImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bachelorThesisImages.length]);

  return (
    <section className="thesis-section">
      <div className="container">
        {/* Master’s Thesis */}
        <h2 className="any-heading-marginless">Master’s Project Report</h2>
        
        <div className="thesis-block thesis-ms">
          <div className="thesis-hero">
            <h3 className="thesis-title">
              Hessian-aware Training for Enhancing DNNs Resilience to Parameter Corruptions
            </h3>
          </div>

          <div className="thesis-details">
            <div className="detail-box">
              <h3>Abstract</h3>
              <p>Deep neural networks are not resilient to parameter corruptions: even a single-bitwise
                error in their parameters inmemory can cause an accuracy drop of over 10%, and in the
                worst-cases, up to 99%. This susceptibility poses great challenges in deployingmodels on
                computing platforms, where adversaries can induce bit-flips through software or bitwise
                corruptionsmay occur naturally. Most prior work addresses this issue with hardware or
                system-level approaches, such as integrating additional hardware components to verify
                a model’s integrity at inference. However, these methods have not been widely deployed
                as they require infrastructure or platform-widemodifications. In this work, we present a
                new approach to addressing this issue: training models to be more resilient to bitwise
                corruptions to their parameters. Our approach, Hessian-aware training, promotes
                models to have flatter loss surfaces. We show that, while there have been training
                methods, designed to improve generalization through Hessian-based approaches, they
                do not enhance resilience to parameter corruptions. In contrast, models trained with our
                method demonstrate increased resilience to parameter corruptions, particularly with a
                20–50% reduction in the number of bits whose individual flipping leads to a 90–100%
                accuracy drop. Moreover, we show the synergy between ours and existing defenses in
                improving their space and inference time complexity.
              </p>
            </div>
          

          </div>


          {/* Actions */}
          <div className="thesis-actions">
            <div className="notice">⚠️ Code not Available Due to Collaboration Agreement</div>
            <a href={process.env.PUBLIC_URL + "/pdf/MS_report_Tahmid_Hasan_Pranto.pdf"} target="_blank" rel="noopener noreferrer">
              <button className="proj-btn">Project Report <i className="fas fa-file-pdf"></i></button>
            </a>
          </div>


          {/* MS Slideshow */}
          <div className="thesis-slideshow">
            <img src={msThesisImages[msIndex].src} alt={msThesisImages[msIndex].title} />
            <div className="slideshow-caption">{msThesisImages[msIndex].title}</div>
          </div>
        </div>



        <div className="thesis-divider"></div>

        {/* Bachelor’s Thesis */}
        <h2 className="any-heading-marginless thesis-bsc-mt">Undergraduate Thesis</h2>
        <div className="thesis-block thesis-bsc ">
          <div className="thesis-hero">
            <h3 className="thesis-title">
              Effect of Label Noise in Patch-wise Multi-class Semantic Segmentation
            </h3>
          </div>

          <div className="thesis-details">
            <div className="detail-box">
              <h3>Abstract</h3>
              <p>
                Sediment load has direct impact to the biodiversity deep
                under the sea as well as on the agricultural economy of a country. Constant monitoring and data analysis of sedimentation load thus becomes very important. Re-
                motely sensed satellite information is one of the most efficient and reliable way to get
                data and in recent times, satellite data availability has increased significantly, helping researchers worldwide to explore, analyze and approach different problems us-
                ing the most recent computer vision techniques. In this work, we created dataset of
                Bangladesh marine area sedimentation for segmenting sediment load into 5 different
                classes (Land, High Sediment, Moderate Sediment, Low Sediment and No Sediment).
                We used a modified U-Net architecture to segment our training images using corresponding label masks. As high-resolution satellite images cannot be directly used as in-
                puts of deep learning models, we applied a patch-wise learning approach. Among the
                four datasets, our model performed best with Dec-2019 dataset with validation dice co-efficient of 87.81%, validation loss of 0.60 and validation pixel accuracy of 78.97%. We
                further tested our models performance under three kinds of label noise (NCAR, NAR
                and NNAR). We found that for NCAR, performance of the model decreased slightly as
                we increase the percentage of noise. For NAR, after a certain level of rotation the models performance changes drastically and for NNAR model completely gets confused and
                makes random guesses for most of the pixels.
              </p>
            </div>
          </div>


          {/* Actions */}
          <div className="thesis-actions">
            <a href="https://github.com/Tahmid1406/CSE499_Sediment_Delineation" target="_blank" rel="noopener noreferrer">
              <button className="proj-btn">GitHub Code <i className="fab fa-github"></i></button>
            </a>
            <a href={process.env.PUBLIC_URL + "/pdf/499.pdf"} target="_blank" rel="noopener noreferrer">
              <button className="proj-btn">Project Report <i className="fas fa-file-pdf"></i></button>
            </a>
          </div>

          {/* BSc Slideshow */}
          <div className="thesis-slideshow">
            <img src={bachelorThesisImages[bscIndex].src} alt={bachelorThesisImages[bscIndex].title} />
            <div className="slideshow-caption">{bachelorThesisImages[bscIndex].title}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thesis;
