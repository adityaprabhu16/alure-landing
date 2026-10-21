import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import MerchCatalog from "../components/MerchCatalog";

const Merch = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading={<>The <span className="gradient-text">field</span> collection.</>}
        text="Apparel from the Alure field season. Pieces will be listed here as they are ready."
        backgroundImage="project"
      />
      <MerchCatalog />
      <Footer />
    </div>
  );
};

export default Merch;
