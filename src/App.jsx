import 'react';
import './index.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import AboutMe from "./components/Aboutme/aboutMe.jsx";
import Projects from "./components/Projects/Projects.jsx";

const App = () => {
    return(
        <div >
            <Navbar/>
            <AboutMe/>
            <Projects/>
        </div>

    )
}

export default App