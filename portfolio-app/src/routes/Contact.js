import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Curious?" text="Join our newsletter! Interested in a chat or demo? Say so in the description and we'll get back ASAP." backgroundImage="https://images.unsplash.com/photo-1737947292441-b301ab724114?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
