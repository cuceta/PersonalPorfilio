import 'react';
import './index.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import AboutMe from "./components/Aboutme/aboutMe.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Experience from "./components/Experience/Experience.jsx";

const App = () => {
    return(
        <div >
            <Navbar/>
            <AboutMe/>
            <Projects/>
            <Experience/>
        </div>

    )
}

export default App