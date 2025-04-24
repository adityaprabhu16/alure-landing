import "./FooterStyles.css";

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin, FaYoutube  } from "react-icons/fa";

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
                <a href="https://www.instagram.com/alure_llc/">
                    <FaInstagram
                        size={30}
                        style={{
                          color: "#E1306C", // Instagram's brand color
                          marginRight: "1rem"
                        }}
                    />
                  </a>
                  <a href="https://www.facebook.com/realalurellc/">
                    <FaFacebook
                        size={30}
                        style={{
                          color: "#4267B2", // Facebook's brand color
                          marginRight: "1rem"
                        }}
                    />
                  </a>
                  <a href="https://www.youtube.com/@AlureLLC">
                      <FaYoutube
                          size={30}
                          style={{
                            color: "#FF0000", // YouTube's brand color
                            marginRight: "1rem"
                          }}
                      />
                  </a>
                  <a href="https://www.linkedin.com/company/alure-llc/?viewAsMember=true">
                    <FaLinkedin
                        size={30}
                        style={{
                          color: "#0077B5", // LinkedIn's brand color
                          marginRight: "1rem"
                        }}
                    />
                  </a>
                </div>
                <p className="footer-copyright">Copyright {new Date().getFullYear()} Alure LLC. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
