
import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroImg2 from "./HeroImg2";
import "./DemoStyles.css";

// Import video files (make sure to add these to your assets folder)
import AlureDemo from '../assets/demos/AlureDemo.mov';
import AlureRender from '../assets/demos/AlureRender.mov';

const Demo = () => {
    return (
        <div className="demo-page">
            <Navbar />
            <HeroImg2 heading="What's Alure?" text="What are we doing, and why is it important?" backgroundImage="demo"/>
            
            <section className="demo-section">
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
            </section>

            <div className="section-divider"></div>

            <section className="demo-section">
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
            </section>
            
            <Footer />
        </div>
    );
}

export default Demo;