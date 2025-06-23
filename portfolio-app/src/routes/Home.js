import React from 'react'

import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Work from "../components/Work";
import News from "../components/News";
import BeetleAnimation from "../components/BeetleAnimation";


const Home = () => {
  return (
    <div>
      <BeetleAnimation />
      <Navbar />
      <HeroImg />
      <News />
      <Work />
      <Footer />
    </div>
  )
}

export default Home
