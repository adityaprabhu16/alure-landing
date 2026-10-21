import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import News from "../components/News";
import Work from "../components/Work";

const NewsPage = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="In the press" text="Coverage of Alure and our Minnesota field trials." backgroundImage="contact"/>
      <News />
      <Work />
      <Footer />
    </div>
  )
}

export default NewsPage 