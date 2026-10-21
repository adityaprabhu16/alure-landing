import React from 'react'

import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import News from "../components/News";
import HowItWorks from "../components/HowItWorks";
import SocialStrip from "../components/SocialStrip";
import BeetleAnimation from "../components/BeetleAnimation";


const Home = () => {
  return (
    <div>
      <BeetleAnimation />
      <Navbar />
      <HeroImg />
      <HowItWorks />
      <News />
      <SocialStrip />
      <Footer />
    </div>
  )
}

export default Home
