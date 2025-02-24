import 'react';
import './index.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import AboutMe from "./components/Aboutme/aboutMe.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Experience from "./components/Experience/Experience.jsx";
import ContactMe from "./components/ContactMe/ContactMe.jsx";

const App = () => {
    return(
        <div >
            <Navbar/>
            <AboutMe/>
            <Projects/>
            <Experience/>
            <ContactMe/>
            <script>
                let lastScrollTop = 0;

            </script>
        </div>
    )
}

export default App