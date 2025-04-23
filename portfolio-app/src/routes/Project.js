import React from 'react'

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import HeroImg2 from '../components/HeroImg2.js';
import PricingCard from "../components/PricingCard.js";
import Work from "../components/Work.js";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="What's Alure LLC?" text="What are we doing, and why is it important?" backgroundImage="https://images.unsplash.com/photo-1625984786407-1ea4d63696c1?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project;