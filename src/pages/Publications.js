import React from 'react';

const Publications = () => {
  const publicationsData = [
    {
      year: 2025,
      type: "Conference",
      title: "Hessian-aware Training for Enhancing DNN Resilience to Bitwise Corruptions in Their Parameters",
      authors: "Tahmid Hasan Pranto, Seijoon Kim, Lizhong Chen, Sanghyun Hong",
      journal: "Submitted to TMLR",
      url: "#",
      tag: "Submitted to TMLR"
    },
    {
      year: 2023,
      type: "Journal",
      title: "Blockchain for medical collaboration: A federated learning-based approach for multi-class respiratory disease classification",
      authors: "Abdulla All Noman, Mustafizur Rahman, Tahmid Hasan Pranto, Rashedur M Rahman",
      journal: "Healthcare Analytics (Elsevier)",
      url: "https://www.sciencedirect.com/science/article/pii/S2772442523000023"
    },
    {
      year: 2023,
      type: "Journal",
      title: "Toward News Authenticity: Synthesizing Natural Language Processing and Human Expert Opinion to Evaluate News",
      authors: "Md. Anisul Islam Mahmud, A. A. Talha Talukder, Arbiya Sultana, Kazi Iftesam Amin Bhuiyan, Md. Samiur Rahman, Tahmid Hasan Pranto, Rashedur M Rahman",
      journal: "IEEE Access",
      url: "https://ieeexplore.ieee.org/document/10034750"
    },
    {
      year: 2022,
      type: "Journal",
      title: "Blockchain and Machine Learning for Fraud Detection: A Privacy-Preserving and Adaptive Incentive Based Approach",
      authors: "Tahmid Hasan Pranto, Kazi Tamzid Akhter Md Hasib, Tahsinur Rahman, Akm Bahalul Haque, AKM Najmul Islam, Rashedur M Rahman",
      journal: "IEEE Access",
      url: "https://ieeexplore.ieee.org/abstract/document/9857827"
    },
    {
      year: 2022,
      type: "Journal",
      title: "Effect of Label Noise on Multi-Class Semantic Segmentation: A Case Study on Bangladesh Marine Region",
      authors: "Tahmid Hasan Pranto, Abdulla All Noman, Asaduzzaman Noor, Ummey Habiba Deepty, Rashedur M Rahman",
      journal: "Applied Artificial Intelligence | Taylor & Francis",
      url: "https://www.tandfonline.com/doi/full/10.1080/08839514.2022.2039348"
    },
    {
      year: 2022,
      type: "Journal",
      title: "A Blockchain, Smart Contract and Data Mining Based Approach toward the Betterment of E-Commerce",
      authors: "Tahmid Hasan Pranto, Abdulla All Noman, Mustafizur Rahaman, AKM Bahalul Haque, AKM Najmul Islam, Rashedur M Rahman",
      journal: "Cybernetics and Systems | Taylor & Francis",
      url: "https://www.tandfonline.com/doi/abs/10.1080/01969722.2021.2018545"
    },
    {
      year: 2022,
      type: "Journal",
      title: "Machine Learning and Artificial Intelligence in Circular Economy: A Bibliometric Analysis and Systematic Literature Review",
      authors: "Abdulla All Noman, Umma Habiba Akter, Tahmid Hasan Pranto, AKM Bahalul Haque",
      journal: "Annals of Emerging Technologies in Computing",
      url: "https://arxiv.org/abs/2205.01042"
    },
    {
      year: 2021,
      type: "Book Chapter",
      title: "Patch-Wise Semantic Segmentation of Sedimentation from High-Resolution Satellite Images",
      authors: "Tahmid Hasan Pranto, Abdulla All Noman, Asaduzzaman Noor, Ummey Habiba Deepty, Rashedur M. Rahman",
      journal: "Advances in Computational Intelligence | Springer",
      url: "https://link.springer.com/chapter/10.1007%2F978-3-030-85030-2_41"
    },
    {
      year: 2021,
      type: "Journal",
      title: "Blockchain and smart contract for IoT enabled smart agriculture",
      authors: "Tahmid Hasan Pranto, Abdulla All Noman, Atik Mahmud, AKM Bahalul Haque",
      journal: "PeerJ Computer Science",
      url: "https://peerj.com/articles/cs-407/"
    }
  ];

  return (
    <section className="publication">
      <div className="container">
        <h2 className="any-heading-marginless">Publications</h2>

        <div className="publications-list">
          {publicationsData.map((pub, index) => (
            <div key={index} className="card mb-5">
              <div className="card-body blog-card">
                <div className="pub-float">
                  <span className="pub-year">{pub.year}</span> <br />
                  <span className="pub-type">{pub.type}</span>
                  {pub.tag && (
                    <span className="pub-tag">{pub.tag}</span>
                  )}
                </div>
                <div className="pub-info">
                  <h3>{pub.title}</h3>
                  <p><i>{pub.authors}</i></p>
                  <p>{pub.journal}</p>
                  <a href={pub.url} target="_blank" rel="noopener noreferrer">
                    <button className="pub-butn">
                      Visit Publication Site <i className="fas fa-chevron-right"></i>
                    </button>
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

export default Publications;
