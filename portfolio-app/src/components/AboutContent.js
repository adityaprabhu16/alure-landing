import "./AboutContentStyles.css";

import React from 'react';
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.jpg";

const AboutContent = ({ contactFormId = null }) => {
    const scrollToForm = (event) => {
        const form = document.getElementById(contactFormId);
        if (!form) return;
        event.preventDefault();
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const field = form.querySelector('input, textarea, select');
        if (field) field.focus({ preventScroll: true });
    };

    return (
        <div className="about">
            <div className="left">
                <h1>Who are we?</h1>
                <p>We are a team of engineers, gardeners, brand builders, and entrepreneurs passionate about Japanese Beetles and the problems they cause MN growers!</p>
                {contactFormId && (
                    <a href={`#${contactFormId}`} className="btn contact-jump" onClick={scrollToForm}>
                        Contact
                    </a>
                )}
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true"/>
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="true"/> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;