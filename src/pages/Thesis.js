import React from 'react';

const Thesis = () => {
  const thesisImages = [
    {
      src: "images/thesis/1.png",
      title: "Study Area",
      className: "tm-1"
    },
    {
      src: "images/thesis/2.png", 
      title: "Satellite Image Rasterization",
      className: "tm-2"
    },
    {
      src: "images/thesis/3.png",
      title: "Gaussian Noise Injection.",
      className: "tm-2"
    },
    {
      src: "images/thesis/4.png",
      title: "Model Prediction.",
      className: "tm-2"
    },
    {
      src: "images/thesis/5.png",
      title: "Loss Function vs Epoch.",
      className: "tm-2"
    },
    {
      src: "images/thesis/6.png",
      title: "Dice Coefficient vs Epoch.",
      className: "tm-2"
    }
  ];

  return (
    <section className="thesis">
      <div className="container">
        <h1 className="heading">
          <span>Undergraduate</span> Thesis
        </h1>
        
        <div className="row">
          <div className="project-holder last-project">
            <h2>
              <b>Thesis Title : </b>Effect of Label Noise in Patch-wise Multi-class Semantic Segmentation of Sedimentation from High-resolution Satellite.
            </h2>
            <h3>
              <b>Course Title</b>: CSE499 - Senior Design Project
            </h3>
            <h3>
              <b>Supervisor</b> : DR. Mohammad Rashedur Rahman | 
              <a href="http://ece.northsouth.edu/people/rashedur-rahman/" target="_blank" rel="noopener noreferrer">NSU Profile</a> | 
              <a href="https://scholar.google.ca/citations?user=L9S6rlUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
            </h3>
            
            <p className="project-des">
              <i><b>Abstract</b> : </i>The coastline of a country plays innate role in a country's geo-political, socio-economical
              and development aspect. Sediment load has direct impact to the biodiversity deep
              under the sea as well as on the agricultural economy of a country. Constant monitoring and 
              data analysis of sedimentation load thus becomes very important. Remotely sensed satellite 
              information is one of the most efficient and reliable way to get
              data and in recent times, satellite data availability has increased significantly, helping
              researchers worldwide to explore, analyze and approach different problems using the most recent 
              computer vision techniques. In this work, we created dataset of
              Bangladesh marine area sedimentation for segmenting sediment load into 5 different
              classes (Land, High Sediment, Moderate Sediment, Low Sediment and No Sediment).
              We used a modified U-Net architecture to segment our training images using corresponding label masks. 
              As high-resolution satellite images are immense in size, we applied a patch-wise learning approach. The Segmentation
              model performed best with Dec-2019 dataset with validation dice coefficient of 87.81%, validation loss of 0.60 
              and validation pixel accuracy of 78.97%. We further tested our models performance under 
              three kinds of label noise (NCAR, NAR and NNAR). We found that for NCAR, performance of the model 
              decreased slightly as we increase the percentage of noise. For NAR, after a certain level of rotation 
              the models performance changes drastically and for NNAR model completely gets confused and
              makes random guesses for most of the pixels.
            </p>

            <p className="project-des">
              <i><b>Study Objective</b> : </i>
              The overall maritime boundary of Bangladesh expands up-to 354 NM which includes
              12 NM of sovereign right over the resources and an economic marine zone of 200 NM. 
              This marine boundary of Bangladesh has a great impact on the country's overall
              economy. Thus, understanding the load of sedimentation in this huge marine region,
              holds a great impact in several related sectors like marine biology, blue economy
              and aquaculture. Conducting field research in this enormous areas can both be effort-taking
              and costly. Satellite image can aid the purpose of diverse study in marine area
              using the most recent techniques in machine learning paradigm. Crucial cases such
              as soil erosion, flood management, oceanology and biodiversity under the sea can be
              greatly benefited by using these techniques.
            </p>

            <div className="row project-img-holder">
              {thesisImages.map((image, index) => (
                <div key={index} className="col-lg-6 col-md-12 col-sm-12">
                  <img className={`thesis-img ${image.className}`} src={image.src} alt={image.title} />
                  <p className="img-title">Figure: {image.title}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a 
                href="https://github.com/Tahmid1406/CSE499_Sediment_Delineation" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="butn publication-btn publication-btn-1">
                  Github Code
                </button>
              </a>
              <a 
                href="./pdf/499.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="butn publication-btn">
                  Project Report
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thesis;