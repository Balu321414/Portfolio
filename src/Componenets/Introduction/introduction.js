import React from "react";
import './introduction.css';
import bg from '../../assects/bg_logo.jpg';
import fb from '../../assects/fb.jpg'


const Introduction = () => {
    return (
        <section id="introduction">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Balakrishna</span><br />Front-End Developer</span>
                <p className="introPara">
                    The web developer is responsible for planning and developing software solutions,<br/> 
                    web applications and maintaining a company's websites and digital products.
                </p>
            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    )
}

export default Introduction;