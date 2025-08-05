import "./HeroImgStyles.css";
import IntroVideo from '../assets/vineyard.mp4'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <video className="intro-video" src={IntroVideo} alt="IntroVideo" playsInline autoPlay muted loop></video>
        </div>
        <div className="content">
            <h1>Eliminate <span className="gradient-text">Japanese Beetles.</span></h1>
            <p>Follow Alure LLC for more.</p>
            <div className="link-container">
              <Link to="/project" className="btn">Learn More</Link>
              <Link to="/contact" className="btn-light">Join Newsletter</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg