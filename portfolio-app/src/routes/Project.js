import React from 'react'

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import HeroImg2 from '../components/HeroImg2.js';
import Work from "../components/Work.js";
import Info from "../components/Info.js";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="What's Alure?" text="What are we doing, and why is it important?" backgroundImage="project"/>
      <Info /> 
      <Work />
      <Footer />
    </div>
  )
}

export default Project;