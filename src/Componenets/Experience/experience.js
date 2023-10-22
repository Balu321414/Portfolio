import React from "react";
import './experience.css';
import exp_logo from '../../assects/exp_logo.jpg';
const Experience = () => {
    return (
        <section id="experience">
            <h1 className="row1"> <span id="aa">W</span>ork Experience</h1>
            <div className="experiencepage">
                <div className="row2">
                    <img src={exp_logo} alt="xp_logo" />
                </div>
                <div className="experiencecontent">
                    <div>
                        <ul type="square">
                            <li><span className="designation">Front-End Developer (Internship)</span> at Info Campus</li>
                            <li type="none" className="year">Jul 2023 - Present</li>
                            <li type="none"> <span id="aa">I</span> have learned the frontend developer skills as follows <span className="intern">HTML, CSS, <br></br>BootStrap, JavaScript, React Js, Git</span> and implimented on some projects.
                            </li><br /><br />
                            <li><span className="designation">Process Analyst</span> at Gallagher Center Of Excellence</li>
                            <li type="none" className="year">Aug 2022 - Oct 2023</li>
                            <li type="none"><span id="aa">I</span> have Worked on Insurance (New Business and Renewals) for Home, Unoccupied, Landlord and Wholesale.
                            </li> 
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;