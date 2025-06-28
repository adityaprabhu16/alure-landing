import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="A boundless passion." text="Learn more about the team behind Alure and our passion." backgroundImage="../assets/backgrounds/about-bg.png"/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
