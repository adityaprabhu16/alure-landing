import React from 'react'

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import HeroImg2 from '../components/HeroImg2.js';
import Work from "../components/Work.js";
import DemoStyles from "../components/DemoStyles.css";
import InfoStyles from "../components/InfoStyles.css";

// Import video files
import AlureDemo from '../assets/demos/AlureDemo.mov';
import AlureRender from '../assets/demos/AlureRender.mov';
import AlureProduct from "../assets/beetle_samples.png";

const Demo = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="What's Alure?" text="What are we doing, and why is it important?" backgroundImage="../assets/backgrounds/project-bg.png"/>
      
      <div className="info-container">
        <h1>Japanese Beetle Prevention, <span className="gradient-text">Reinvented.</span></h1>
        <br />
        <p>Japanese Beetles (above) are an invasive species to U.S. It is an agricultural and commercial pest that causes heavy plant damage, costing the average vineyard, orchard, or commercial grower over $1,000 an acre to manage. These beetles destroy over <span className="gradient-text">300 common plant species</span>, from soybeans to rosebushes. Unfortunately, the only way to manage them is through harmful pestcides that kill pollinators and sterilize the environment.</p>
        <br />
        <h1>Sustainable, Simple, Aesthetic.</h1>
        <br />
        <img src={AlureProduct} alt="Alure LLC bait and kill device"/>
        <p>Alure LLC has developed a unique approach (above) to managing Japanese Beetles: Bait and Kill surfaces. Instead of pouring harmful pesticides on your plants several times each season, endangering both pollinators and the health of your produce, our unique surface <span className="gradient-text">baits the bugs and kills them on contact.</span> The product is safe for humans and pet, and we are working on EPA product registration to offer this solution commercially. No more refilling bags of dead beetles, or attracting more beetles from current traps. Our surface solution finishes the job by both baiting and killing.</p>
      </div>

      <div className="section-divider"></div>
      
      <div className="demo-section">
        <h1>Virtual Field Site Demo</h1>
        <p>See how our Japanese Beetle device operates in a real-world environment. The video demonstrates the device's effectiveness in the field.</p>
        
        <div className="video-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            src={AlureDemo}
            type="video/mp4"
            title="Alure Field Demo"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="section-divider"></div>

      <div className="demo-section">
        <h1>Virtual Rendering of Product</h1>
        <p>Explore a detailed 3D rendering of our Japanese Beetle device, showcasing its design and functionality from every angle.</p>
        
        <div className="video-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            src={AlureRender}
            type="video/mp4"
            title="Alure 3D Render"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="section-divider"></div>
      
      <div className="info-container">
        <h1>Future Offering.</h1>
        <br />
        <p>Go to our Homepage and sign up for our mailing list to stay tuned if you're interested to try out our end-all Japanese Beetle prevention strategy in the future! We're currently in the process of going through EPA registration this summer. If Japanese Beetles have been pestering you and you are ready to try something new, sign up for our mailing list and hear about our progress!</p>
        <div className="link-container">
          <a href="/contact">
            <button className="btn">Join Newsletter</button>
          </a>
        </div>
      </div>

      <div className="section-divider"></div>
      
      <Work />
      
      <Footer />
    </div>
  )
}

export default Demo; 