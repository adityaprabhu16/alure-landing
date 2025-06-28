import "./HeroImg2Styles.css";
import React from "react";

// Import background images - these will be properly processed by webpack
import aboutBg from "../assets/backgrounds/about-bg.png";
import contactBg from "../assets/backgrounds/contact-bg.png";
import projectBg from "../assets/backgrounds/project-bg.png";
import demoBg from "../assets/backgrounds/demo-bg.png";

// Map of background types to imported image assets
const backgroundMap = {
  // Simple keys for cleaner usage
  "about": aboutBg,
  "contact": contactBg,
  "project": projectBg,
  "demo": demoBg
};

const HeroImg2 = ({heading, text, backgroundImage}) => {
    // Determine which image to use - either from our map or a direct image path
    // For production compatibility, we need to handle both imported images and string identifiers
    let imageSource;
    
    // If the backgroundImage is a key in our map (e.g., "about" or a full path like "../assets/backgrounds/about-bg.png")
    if (backgroundImage === "about" || backgroundImage === "../assets/backgrounds/about-bg.png") {
        imageSource = aboutBg;
    } else if (backgroundImage === "contact" || backgroundImage === "../assets/backgrounds/contact-bg.png") {
        imageSource = contactBg;
    } else if (backgroundImage === "project" || backgroundImage === "../assets/backgrounds/project-bg.png") {
        imageSource = projectBg;
    } else if (backgroundImage === "demo" || backgroundImage === "../assets/backgrounds/demo-bg.png") {
        imageSource = demoBg;
    }
    
    // Apply the background style with the imported image
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