import React, { useState } from 'react';
import './Projects.css';
import familyThreadThumbnail from '../../assets/projects/familyThread/thumbnail.png';
import placeholderThumbnail from '../../assets/projects/placeholderthumbnail.jpg';
import closeSymbol from '../../assets/closeSymbol.svg'

const projects = [
    {
        id: 1,
        title: 'Family Thread Web Application',
        description: 'A minimum viable product for a family tree application.',
        details: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Urna quis pretium ultrices laoreet quisque suscipit. Nascetur ex tempor fringilla consectetur potenti ullamcorper turpis amet ultricies. Mi morbi faucibus malesuada habitasse eget eleifend. Mus condimentum eget ac mauris; accumsan eleifend. Litora in etiam varius diam posuere feugiat blandit viverra purus. Nulla cras tortor adipiscing; dui risus tempus dictum id.\n' +
            '\n\n' +
            'Euismod scelerisque habitasse finibus, purus aenean curabitur. Suscipit sapien risus sem velit pellentesque. Lectus tincidunt suspendisse tortor curae ad platea vel. Risus at dapibus tincidunt morbi scelerisque. Odio magnis pulvinar montes, senectus phasellus pharetra fringilla imperdiet. Bibendum consectetur montes aptent quam auctor proin phasellus. At etiam netus volutpat molestie libero lacinia aptent egestas sit.\n' +
            '\n\n' +
            'Consectetur natoque nec justo primis nisl nullam? Sociosqu curabitur nec eleifend consectetur et ac. Condimentum sagittis quam quis porttitor elit. Nunc non odio nunc ex erat vehicula pulvinar. Aenean facilisis eu proin cubilia iaculis iaculis est turpis. Adipiscing purus orci malesuada maximus vivamus turpis ac sociosqu laoreet. Accumsan ad pretium natoque potenti lacinia class.\n' +
            '\n\n' +
            'Aliquet euismod felis ultricies sollicitudin lectus maecenas himenaeos auctor. Lacus ex fermentum volutpat imperdiet sem rhoncus egestas velit. Maecenas sagittis dignissim facilisi pulvinar venenatis. Senectus lacinia justo eget pulvinar ornare tellus. Felis fames dui gravida porttitor consequat convallis scelerisque himenaeos nascetur. Ligula leo elementum tellus pretium viverra sollicitudin iaculis turpis. Parturient dictumst maecenas vulputate eget dis tempor. Eros sit arcu efficitur laoreet class velit nascetur orci. Quis conubia ornare sit dictum, quam bibendum morbi.\n' +
            '\n\n' +
            'Scelerisque vel dignissim himenaeos litora, duis lectus. Parturient tincidunt scelerisque tincidunt auctor leo ipsum; fusce amet vivamus. Ullamcorper ac tristique elementum iaculis massa id volutpat. Dapibus ac risus congue habitant montes faucibus. Inceptos risus nec ornare condimentum, bibendum enim lectus aenean. Vulputate mauris quam turpis, urna quam nascetur. Metus curae iaculis euismod integer convallis.',
        thumbnail: familyThreadThumbnail,
    },
    {
        id: 2,
        title: 'CheckMate To-Do List Web Application',
        description: 'My personal portfolio to showcase my work.',
        details: 'Detailed information about CheckMate To-Do List Web Application.',
        thumbnail: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        title: 'Heat Propagation Simulator',
        description: 'A mock e-commerce platform for online shopping.',
        details: 'Detailed information about Heat Propagation Simulator.',
        thumbnail: 'https://via.placeholder.com/150',
    },
    {
        id: 4,
        title: 'Optimal Facility Layout Generator',
        description: 'A mock e-commerce platform for online shopping.',
        details: 'Detailed information about Heat Propagation Simulator.',
        thumbnail: placeholderThumbnail,
    },
    {
        id: 5,
        title: 'Performance Measurement Benchmark',
        description: 'A mock e-commerce platform for online shopping.',
        details: 'Detailed information about Heat Propagation Simulator.',
        thumbnail: placeholderThumbnail,
    },
    {
        id: 6,
        title: 'Performance Measurement Benchmark',
        description: 'A mock e-commerce platform for online shopping.',
        details: 'Detailed information about Heat Propagation Simulator.',
        thumbnail: placeholderThumbnail,
    },
];

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

    const toggleDetails = (id) => {
        setActiveProject(activeProject === id ? null : id);
    };

    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className="project-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.thumbnail} alt={project.title} />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <button onClick={() => toggleDetails(project.id)}>
                            {activeProject === project.id ? 'Close Details' : 'View Project'}
                        </button>
                    </div>
                ))}
            </div>
            <div className={`project-details-section ${activeProject ? 'active' : ''}`}>
                {activeProject && (
                    <div className="project-details-content">
                        <div className="project-details-content-button">
                            <button className="close-button" onClick={() => setActiveProject(null)}>
                                <img src={closeSymbol} alt='Close symbol' style={{height:"15px", width:"auto"}}/>
                            </button>
                        </div>
                        <h2>{projects.find((project) => project.id === activeProject).title}</h2>
                        <p>{projects.find((project) => project.id === activeProject).details}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;