import 'react';
import './index.css';
// import Navbar from "./components/Navbar/Navbar.jsx";
import AboutMe from "./components/Aboutme/aboutMe.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Experience from "./components/Experience/Experience.jsx";
import ContactMe from "./components/ContactMe/ContactMe.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Education from "./components/Eduacation/education.jsx";

const App = () => {
    return(
        <div>
            {/*<Navbar/>*/}
            <AboutMe/>
            <Projects/>
            <div className="row">
                <div className="column">
                    <Experience/>
                </div>
                <div className="column">
                    <Education/>
                </div>
            </div>
            <ContactMe/>
            <Footer/>
        </div>
    )
}

export default App