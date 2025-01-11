import 'react';
import './index.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import AboutMe from "./components/Aboutme/aboutMe.jsx";
import CSProjects from "./components/Projects/Projects.jsx";

const App = () => {
    return(
        <div >
            <Navbar/>
            <AboutMe/>
            <CSProjects/>
        </div>

    )
}

export default App