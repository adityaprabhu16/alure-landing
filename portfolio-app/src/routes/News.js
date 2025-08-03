import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import News from "../components/News";

const NewsPage = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Latest News & Updates" text="Stay informed about our progress, field trials, and industry recognition" backgroundImage="../assets/backgrounds/contact-bg.png"/>
      <News />
      <Footer />
    </div>
  )
}

export default NewsPage 