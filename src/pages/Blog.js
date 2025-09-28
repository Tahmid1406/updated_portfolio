import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Blockchain for medical collaboration: A federated learning-based approach for multi-class respiratory disease classification",
      authors: "Abdulla All Noman, Mustafizur Rahman, Tahmid Hasan Pranto, Rashedur M Rahman",
      journal: "Healthcare Analytics (Elsevier)",
      url: "https://www.sciencedirect.com/science/article/pii/S2772442523000023",
      image: "./images/ardemo.png"
    }
  ];

  return (
    <div className="blog">
      <div className="container">
        <h2 className="any-heading-marginless">My Blogs</h2>

        {blogPosts.map((post, index) => (
          <div key={index} className="card mb-5">
            <div className="card-body blog-card">
              <div className="blog-img">
                <img src={post.image} alt="Blog post" />
              </div>

              <div className="blog-des">
                <h3>{post.title}</h3>
                <p><i>{post.authors}</i></p>
                <p>{post.journal}</p>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  <button className="pub-butn">
                    Read More <i className="fas fa-chevron-right"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;