import React from 'react'

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import HeroImg2 from '../components/HeroImg2.js';
import Work from "../components/Work.js";
import Info from "../components/Info.js";

// FIXIT: This page is not on a route. It still repeats the Demo claims via Info and the blog cards via Work.
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