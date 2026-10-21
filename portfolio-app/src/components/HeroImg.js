import "./HeroImgStyles.css";
import IntroVideo from '../assets/vineyard.mp4'
import { Link } from 'react-router-dom'
import NewsletterForm from "./NewsletterForm";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <video className="intro-video" src={IntroVideo} alt="IntroVideo" playsInline autoPlay muted loop></video>
        </div>
        <div className="content">
            <h1>Eliminate <span className="gradient-text">Japanese Beetles.</span></h1>
            <p>Hands-free Japanese beetle control. Get field updates and launch news.</p>
            <NewsletterForm />
            <Link to="/contact#contact-form" className="grower-link">Growers: request a pilot</Link>
        </div>
    </div>
  )
}

export default HeroImg