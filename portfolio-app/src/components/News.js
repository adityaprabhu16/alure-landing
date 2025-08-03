import React from 'react';
import './NewsStyles.css';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "EPA Registration Progress Update",
      description: "We're excited to share that our Japanese Beetle prevention device has completed Phase 2 of EPA registration. Learn about our journey and what's next for commercial availability.",
      image: "/src/assets/beetle.png",
      date: "March 15, 2024",
      link: "/newsletter/epa-progress"
    },
    {
      id: 2,
      title: "Field Trial Results: 95% Success Rate",
      description: "Our latest field trials across Minnesota vineyards show a 95% reduction in Japanese Beetle damage. See the detailed results and hear from participating growers.",
      image: "/src/assets/vineyard1.JPG",
      date: "February 28, 2024",
      link: "/newsletter/field-trials"
    },
    {
      id: 3,
      title: "Sustainable Agriculture Award Nomination",
      description: "Alure LLC has been nominated for the 2024 Sustainable Agriculture Innovation Award. Discover how our eco-friendly approach is gaining recognition in the industry.",
      image: "/src/assets/beetle_samples.png",
      date: "February 10, 2024",
      link: "/newsletter/award-nomination"
    },
    {
      id: 4,
      title: "New Partnership with University of Minnesota",
      description: "We're thrilled to announce our research partnership with UMN's Department of Entomology. This collaboration will accelerate our product development and field testing.",
      image: "/src/assets/umn.png",
      date: "January 25, 2024",
      link: "/newsletter/umn-partnership"
    }
  ];

  const handleNewsClick = (link) => {
    // For now, we'll just log the click. In a real app, this would navigate to the article
    console.log('Navigating to:', link);
    // You can implement actual navigation here
    // window.location.href = link;
  };

  return (
    <div className="news-container">
      <div className="news-header">
        <h1>Latest News & Updates</h1>
        <p>Stay informed about our progress, field trials, and industry recognition</p>
      </div>
      
      <div className="news-grid">
        {newsItems.map((item) => (
          <div 
            key={item.id} 
            className="news-item"
            onClick={() => handleNewsClick(item.link)}
          >
            <div className="news-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="news-content">
              <div className="news-date">{item.date}</div>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-description">{item.description}</p>
              <div className="news-read-more">
                Read More →
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="news-footer">
        <p>Want to receive these updates directly in your inbox?</p>
        <a href="/contact" className="newsletter-signup-btn">
          Subscribe to Newsletter
        </a>
      </div>
    </div>
  );
};

export default News;