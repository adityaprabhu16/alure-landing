import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Curious?" text="Join our newsletter! Interested in a chat or demo? Say so in the description and we'll get back ASAP." backgroundImage="../assets/backgrounds/contact-bg.png"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
