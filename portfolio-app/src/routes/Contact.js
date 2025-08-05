import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="A boundless passion." text="Learn more about the team behind Alure and our passion." backgroundImage="about"/>
      <AboutContent />
      
      <div className="section-divider"></div>
      
      <HeroImg2 heading="Let's have a chat" text="We are always looking for new and exciting opportunities. Let's get in touch" backgroundImage="contact"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
