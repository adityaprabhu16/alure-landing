import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form";
import "../components/InfoStyles.css";
import "../components/DemoStyles.css";

const LAWN_WAITLIST_SUBJECT = "Lawn Maintainence Signup";

const LawnWaitlist = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="Lawn treatment waitlist"
        text="Japanese beetle larvae and your lawn - learn more and sign up for updates."
        backgroundImage="contact"
      />
      <div className="info-container">
        <p>
          At Alure, we are working on both our flagship product for mature Japanese
          Beetles, and for the first time this season, we will be offering a service
          that also addresses the larva of the Japanese Beetle using an applicator we
          built that efficiently distributes an organic fungicide that eliminates the
          larvae naturally.
        </p>
        <br />
        <p>
          If you suspect you have signs of the larvae damaging your lawn, we plan to
          offer this service near the end of the season. Sign up here if you&apos;re
          interested in learning more.
        </p>
      </div>
      <div className="section-divider"></div>
      <HeroImg2
        heading="Get in touch"
        text="Leave your details and we will follow up about this season's lawn service."
        backgroundImage="contact"
      />
      <Form
        fixedSubject={LAWN_WAITLIST_SUBJECT}
        successMessage="Thank you for your interest! We'll be in touch with more information about lawn treatments."
      />
      <Footer />
    </div>
  );
};

export default LawnWaitlist;
