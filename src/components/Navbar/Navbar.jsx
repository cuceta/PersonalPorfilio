import React, { useState } from 'react';
import './Navbar.css';
import logo from "/src/assets/logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navWrapper'>
            <div className="logo">
                <a href="#about">
                    <img alt="Crislenny Uceta's Logo" src={logo} />
                </a>
            </div>

            {/* Hamburger Menu Icon */}
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Navigation Links */}
            <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                <ul className='nav'>
                    <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact Me</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;