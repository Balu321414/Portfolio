import React from "react";
import './about.css';
import about_logo from '../../assects/about_logo.jpg';

const About = () => {
    return (

        <section id="about">
            <h1 className="row1"> <span id="aa">A</span>bout Me</h1>
            <div className="abutpage">
                <div className="row21">
                    <img src={about_logo} alt="about_logo" />
                </div>
                <div className="aboutcontent">
                    <div>
                        <p className="paracontent">
                            <span id="aa">A </span> 
                              highly motivated frontend developer with over 2 years of professional experience and 6 months of internship experience. <br></br>
                              Proficient in creating responsive, user-friendly web applications using modern technologies like HTML, CSS, JavaScript, and React.js. <br></br>
                              Adept at collaborating with cross-functional teams to deliver projects on time. Seeking to leverage my skills and experience to contribute to a dynamic development team.
                        </p>
                    </div>
                    <div className="row1">
                        <h2 className="btn">Personal Details</h2>
                    </div>
                    <div className="container">
                        <div className="personalinfo">
                            <p>Name : <span className="info">Balakrishna U</span></p>
                            <p>DOB  : <span className="info">27-03-2001</span></p>
                            <p>Nationality : <span className="info">Indian</span></p>
                        </div>
                        <div className="personalinfo">
                            <p>Hobbiles : <span className="info">Cricket, Vollyball, Kabadi.</span></p>
                            <p>Languages : <span className="info">English, Telugu, Tamil.</span></p>
                            <p>Address : <span className="info">Chittoor(A.P)</span></p>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About;