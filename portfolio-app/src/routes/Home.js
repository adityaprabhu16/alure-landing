import React from 'react'

import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Work from "../components/Work";
import News from "../components/News";


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <News />
      <Work />
      <Footer />
    </div>
  )
}

export default Home
