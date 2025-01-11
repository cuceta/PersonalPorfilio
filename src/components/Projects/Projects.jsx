import 'react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Family Thread Web Application',
        description: 'A simple app to check weather in any city.',
        thumbnail: 'https://via.placeholder.com/150',
        link: '#',
    },
    {
        id: 2,
        title: 'CheckMate To-Do List Web Application',
        description: 'My personal portfolio to showcase my work.',
        thumbnail: 'https://via.placeholder.com/150',
        link: '#',
    },
    {
        id: 3,
        title: 'Heat Propagation Simulator',
        description: 'A mock e-commerce platform for online shopping.',
        thumbnail: 'https://via.placeholder.com/150',
        link: '#',
    },
    {
        id: 4,
        title: 'Optimal Facility Layout Generator',
        description: 'A mock e-commerce platform for online shopping.',
        thumbnail: 'https://via.placeholder.com/150',
        link: '#',
    },
    {
        id: 5,
        title: 'Performance Measurement Benchmark',
        description: 'A mock e-commerce platform for online shopping.',
        thumbnail: 'https://via.placeholder.com/150',
        link: '#',
    },

];

const App = () => {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className="project-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.thumbnail} alt={project.title} />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
