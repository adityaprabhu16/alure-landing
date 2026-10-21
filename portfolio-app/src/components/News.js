import React, { useState } from 'react';
import './NewsStyles.css';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Local entrepreneurs tout hands-free, eco-friendly Japanese beetle prevention product",
      description: "A local group of former and current University of Minnesota students says they have a hands-free, eco-friendly solution to the invasive Japanese beetles that wreak havoc on plants, flowers, shrubs and trees.",
      image: "/news1.png",
      date: "March 15, 2024",
      link: "https://kstp.com/kstp-news/top-news/local-entrepreneurs-tout-hands-free-eco-friendly-japanese-beetle-prevention-product/"
    },
    {
      id: 2,
      title: "Start-up company aims to eliminate Japanese beetles with eco-friendly solution",
      description: "A start-up company co-founded by Aditya Prabhu while he was a University of Minnesota College of Science and Engineering undergraduate student aims to attract and eliminate Japanese Beetles in large quantities with a new method that is environmentally safe.",
      image: "/news2.png",
      date: "February 28, 2024",
      link: "https://cse.umn.edu/college/news/start-company-aims-eliminate-japanese-beetles-eco-friendly-solution"
    },
    {
      id: 3,
      title: "Minnesota: A Student Innovation Eliminates Invasive Pests",
      description: "University of Minnesota students develop innovative solution for Japanese beetle control, winning recognition and funding for their eco-friendly approach to pest management.",
      image: "/news3.png",
      date: "February 10, 2024",
      link: "https://www.morningagclips.com/mag_enewsletter/minnesota-a-student-innovation-eliminates-invasive-pests/"
    },
    {
      id: 4,
      title: "University of Minnesota Japanese Beetle Invention",
      description: "CBS News covers the innovative Japanese beetle prevention device developed by University of Minnesota students, highlighting the environmental benefits and commercial potential.",
      image: "/news4.png",
      date: "January 25, 2024",
      link: "https://www.cbsnews.com/minnesota/news/university-of-minnesota-japanese-beetle-invention/"
    }
  ];

  const [openId, setOpenId] = useState(null);

  const toggleCard = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="news-container">
      <div className="news-header">
        {/* FIXIT: /news also renders this heading in its page hero, so the title appears twice. Drop one of them. */}
        <h1>In the press</h1>
        <p>Coverage of Alure and our Minnesota field trials.</p>
      </div>
      
      <div className="news-grid">
        {newsItems.map((item) => {
          const isOpen = openId === item.id;
          return (
          <article
            key={item.id}
            className={isOpen ? "news-item is-open" : "news-item"}
          >
            <button
              type="button"
              className="news-open"
              aria-expanded={isOpen}
              onClick={() => toggleCard(item.id)}
            >
              <span className="news-image">
                {/* FIXIT: Set width and height so the press image does not shift layout when it loads. */}
                <img src={item.image} alt={item.title} />
              </span>
              <span className="news-content">
                {isOpen && <time className="news-date">{item.date}</time>}
                <h3 className="news-title">{item.title}</h3>
                <p className="news-description">{item.description}</p>
              </span>
            </button>
            <a
              className="news-read-more"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More →
            </a>
          </article>
          );
        })}
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