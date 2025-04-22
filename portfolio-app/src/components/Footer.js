import "./FooterStyles.css";

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Minneapolis, MN</p>
                        <p>United States</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{ color:"#fff", marginRight: "2rem" }}/>
                        (507) 339-4520
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        info@alurellc.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About Alure LLC</h4>
                <p>Alure LLC has developed a unique approach to managing Japanese Beetles: Bait and Kill surfaces. Our unique surface attracts the bugs and kills them on contact. No more refilling bags of dead beetles, or attracting more beetles from current traps!</p>
                <div className="social">
                    <FaFacebook
                      size={30}
                      style={{
                        color: "#fff",
                        marginRight: "1rem"
                      }}
                    />
                    <FaTwitter
                      size={30}
                      style={{
                        color: "#fff",
                        marginRight: "1rem"
                      }}
                    />
                    <FaLinkedin
                      size={30}
                      style={{
                        color: "#fff",
                        marginRight: "1rem"
                      }}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
