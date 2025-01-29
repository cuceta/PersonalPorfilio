import React from 'react';
import '../projectPagesStyles.css'

const CheckMateDetails = () => {
    return (
        <div className="project-detail">
            <h3>Project Goal:</h3>
            <p>
                Develop a fully functional to-do list web application where users can organize their tasks .
            </p>
            <h3>Involvement:</h3>
            <p>
                <ul>
                    <li>Front-End Development</li>
                </ul>
            </p>
            <h3>Key Functionality:</h3>
            <p>
                <ul>
                    <li>Create separate to-do list for different projects</li>
                    <li>Deleting tasks and lists</li>
                    <li>Editing tasks and lists</li>
                    <li>Recovering tasks and lists</li>
                    <li>Setting priority to tasks</li>
                    <li>Sorting tasks on lists by name, priority, due dates</li>
                </ul>
            </p>
        </div>
    );
};

export default CheckMateDetails;