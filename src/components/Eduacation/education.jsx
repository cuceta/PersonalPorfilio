import React from 'react';
import "./education.css";

const Education = () => {
    return (
        <section className="education" id="education">
            <h1>Education</h1>
            <div className="education-container">
                <div className="education-entry">
                    <div className="education-box">
                        <h2>School Name</h2>
                        <p className="time">Time Period</p>
                        <p className="program-description">Description of the program highlighting key aspects.</p>
                        <ul className="course-list">
                            <li>
                                <h3>Class Name</h3>
                                <p className="class-description">Brief description of what the class covered.</p>
                            </li>
                            <li>
                                <h3>Class Name</h3>
                                <p className="class-description">Brief description of what the class covered.</p>
                            </li>
                            <li>
                                <h3>Class Name</h3>
                                <p className="class-description">Brief description of what the class covered.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="education-entry">
                    <div className="education-box">
                        <h2>School Name</h2>
                        <p className="time">Time Period</p>
                        <p className="program-description">Description of the program highlighting key aspects.</p>
                        <ul className="course-list">
                            <li>
                                <h3>Class Name</h3>
                                <p className="class-description">Brief description of what the class covered.</p>
                            </li>
                            <li>
                                <h3>Class Name</h3>
                                <p className="class-description">Brief description of what the class covered.</p>
                            </li>
                            <li>
                                <h3>Class Name</h3>
                                <p className="class-description">Brief description of what the class covered.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
