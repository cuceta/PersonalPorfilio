import 'react';
import './Navbar.css'
// import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div className={'navbar'}>
            {/*<img src={logo} alt={"Logo"}/>*/}
            <ul className={"nav-menu"}>
                <li className={"menu-element"}>About Me</li>
                <li className={"menu-element"}>CS Projects</li>
                <li className={"menu-element"}>Design Projects</li>
                <li className={"menu-element"}>Education</li>
                <li className={"menu-element"}>Skills</li>
                <li className={"menu-element"}>Contact Me</li>
            </ul>
            {/*<div className={"nav-connect"}>Connect With Me!</div>*/}
        </div>
    );
};

export default Navbar;