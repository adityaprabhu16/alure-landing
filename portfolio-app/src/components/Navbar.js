import "./NavbarStyles.css";

import React, { useState, useEffect } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";

import BeetleLogo from "../assets/beetle.png";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);

    useEffect(() => {
        const changeColor = () => {
            setColor(window.scrollY >= 1);
        };
        changeColor();
        window.addEventListener("scroll", changeColor);
        return () => window.removeEventListener("scroll", changeColor);
    }, []);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to={"/"} className="logo-container"><img src={BeetleLogo} className="logo" alt="beetle logo"/><h1>Alure.</h1></Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/map">Map</Link></li>
                <li><Link to="/demo">Demo</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {
                    click ? (<FaTimes size={20} style={{color: "#fff"}}/>) : (<FaBars size={20} style={{color: "#fff"}}/>)
                }
            </div>
        </div>
    )
}

export default Navbar