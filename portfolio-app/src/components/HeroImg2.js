import "./HeroImg2Styles.css";

import React from "react";

const HeroImg2 = ({heading, text, backgroundImage}) => {
    const backgroundStyle = backgroundImage 
    ? {
        backgroundImage: `url(${backgroundImage})`,
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