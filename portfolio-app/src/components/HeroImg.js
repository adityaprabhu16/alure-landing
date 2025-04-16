import "./HeroImgStyles.css";


import React from 'react'
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <h1>Eliminate Japanese Beetles.</h1>
            <p>Follow Alure LLC for more.</p>
            <div>
                <Link to="/project" className="btn">Learn More</Link>
                <br /> 
                <Link to="/contact" className="btn-light">Join Newsletter</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg