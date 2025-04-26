import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "./Navbar";
import HeroImg2 from "./HeroImg2"
import Footer from "./Footer";
import "./BlogStyles.css";
import { getBlogContent, getBlogTitle, getBlogBackgroundImage } from "./BlogContent";

const Blog = () => {
    const { blogSlug } = useParams();
    const title = getBlogTitle(blogSlug);
    const content = getBlogContent(blogSlug);
    const backgroundImage = getBlogBackgroundImage(blogSlug);
    // Default content if no blog found
    const defaultContent = `
      <p>Oops! The blog post you're looking for couldn't be found.</p>
      <p>Please check the URL or return to the homepage.</p>
    `;

    return (
      <div>
        <Navbar />
        <HeroImg2 
          text="" 
          backgroundImage={backgroundImage} 
        />
        <div className="blog-content" style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: '20px',
          lineHeight: '1.6'
        }}>
          <h1>{title || 'Not Found'}</h1>
          <div 
            dangerouslySetInnerHTML={{ 
              __html: content || defaultContent 
            }} 
          />
        </div>
        <Footer />
      </div>
    );
  };
  
export default Blog;