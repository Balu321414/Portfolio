import React from "react";
import './education.css';
import education_logo from '../../assects/education_logo.jpg'

const Education = () => {
    return (
        <section id="education">
            <h1 className="row1"> <span id="aa">E</span>ducation Qualification</h1>
            <div className="educationpage">
                <div className="row2">
                    <img src={education_logo} alt="education_logo" />
                </div>
                <div className="educationcontent">
                   <div>
                    <ul type="square">
                        <li title="Bachelor Of Science">B.Sc(Computer Science) in Sri Venkateswara University</li>
                        <li type="none" className="grade">78%</li>
                        <li type="none">2021</li><br/>
                        <li title="Mathematics Physics Chemistry">Intermediate(MPC) in Sri Gayatri Junior College</li>
                        <li type="none" className="grade">87%</li>
                        <li type="none">2018</li><br/>
                        <li title="Secondary School Certificate">SSC in Sri Vinayaka vidya Mandir High School </li>
                        <li type="none" className="grade">97%</li>
                        <li type="none">2016</li>
                       
                    </ul>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default Education;