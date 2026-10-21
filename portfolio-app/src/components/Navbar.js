import "./NavbarStyles.css";

import React, { useState, useEffect } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";

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
            {/* FIXIT: Give the logo width and height so it does not shift the header when it loads. */}
            <Link to={"/"} className="logo-container"><img src={BeetleLogo} className="logo" alt="beetle logo"/><h1>Alure</h1></Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : undefined}>Home</NavLink></li>
                <li><NavLink to="/map" className={({ isActive }) => isActive ? "active" : undefined}>Map</NavLink></li>
                <li><NavLink to="/demo" className={({ isActive }) => isActive ? "active" : undefined}>Demo</NavLink></li>
                <li><NavLink to="/news" className={({ isActive }) => isActive ? "active" : undefined}>News</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-contact active" : "nav-contact"}>Contact</NavLink></li>
            </ul>
            {/* FIXIT: This control is a div, so it is not in the tab order. Make it a button. Below 1040px the nav links stay focusable while they sit off-screen. */}
            <div className="hamburger" onClick={handleClick}>
                {
                    click ? (<FaTimes size={20} style={{color: "#fff"}}/>) : (<FaBars size={20} style={{color: "#fff"}}/>)
                }
            </div>
        </div>
    )
}

export default Navbar