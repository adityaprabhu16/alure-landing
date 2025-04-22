import "./HeroImgStyles.css";
import IntroVideo from '../assets/vineyard.mp4'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <video className="intro-video" src={IntroVideo} alt="IntroVideo" playsInline autoPlay muted loop poster="../assets/vineyard.mp4" ></video>
        </div>
        <div className="content">
            <h1>Eliminate Japanese Beetles.</h1>
            <p>Follow Alure LLC for more.</p>
            <div>
                <Link to="/project" className="btn">Learn More</Link>
                <br /> 
                <Link to="/contact" className="btn-light">Join Newsletter</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg