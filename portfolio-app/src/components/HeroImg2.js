import "./HeroImg2Styles.css";
import React from "react";

// Import background images
import aboutBg from "../assets/backgrounds/about-bg.png";
import contactBg from "../assets/backgrounds/contact-bg.png";
import projectBg from "../assets/backgrounds/project-bg.png";
import demoBg from "../assets/backgrounds/demo-bg.png";

// Map of background image identifiers to imported assets
const backgroundMap = {
  "about": aboutBg,
  "contact": contactBg,
  "project": projectBg,
  "demo": demoBg,
  // For backward compatibility with paths
  "../assets/backgrounds/about-bg.png": aboutBg,
  "../assets/backgrounds/contact-bg.png": contactBg,
  "../assets/backgrounds/project-bg.png": projectBg,
  "../assets/backgrounds/demo-bg.png": demoBg
};

const HeroImg2 = ({heading, text, backgroundImage}) => {
    // Get the actual image source from our map or use the provided backgroundImage directly
    const imageSource = backgroundMap[backgroundImage] || backgroundImage;
    
    const backgroundStyle = imageSource 
    ? {
        backgroundImage: `url(${imageSource})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    } : {};

    return (
        <div className="hero-img" style={backgroundStyle}>
            <div className="heading">
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default HeroImg2;