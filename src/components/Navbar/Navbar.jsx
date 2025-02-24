import 'react';
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
    return (
        // <header id="navBar">
            <div className='navWrapper'>
                <div className="logo">
                    <a href="#about">
                        <img alt="Crislenny Uceta's Logo" src="/src/assets/logo.png"/>
                    </a>
                </div>
                <div className='navbar'>
                    <ul className='nav'>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                    </ul>
                </div>
            </div>
        // </header>
    );
};

export default Navbar;