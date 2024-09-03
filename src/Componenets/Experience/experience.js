import React from "react";
import "./experience.css";
import exp_logo from "../../assects/exp_logo.jpg";
const Experience = () => {
  return (
    <section id="experience">
      <h1 className="row1">
        {" "}
        <span id="aa">W</span>ork Experience
      </h1>
      <div className="experiencepage">
        <div className="row2">
          <img src={exp_logo} alt="xp_logo" />
        </div>
        <div className="experiencecontent">
          <div>
            <ul type="square">
              <li>
                <span className="designation">Front-End Developer</span> at
                Traegen Systems Pvt Ltd
              </li>
              <li type="none" className="year">
                07/2022 - 07/2024
              </li>
              <li type="none">
                <span id="aa">I</span> have Developed and maintained responsive
                web applications using HTML, CSS, JavaScript and React Js,
                Worked closely with backend developers to integrate RESTful APIs
                and ensure seamless data flow.
              </li>{" "}
              <br />
              <br />
              <li>
                <span className="designation">
                  Front-End Developer (Internship)
                </span>{" "}
                at Info Campus
              </li>
              <li type="none" className="year">
                01/2022 - 06/2022
              </li>
              <li type="none">
                {" "}
                <span id="aa">I</span> have learned the frontend developer
                skills as follows{" "}
                <span className="intern">
                  HTML, CSS, <br></br>BootStrap, JavaScript, React Js, Git
                </span>{" "}
                and implimented on some projects.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
