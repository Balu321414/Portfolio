import React from "react";
import './project.css';
import portfolio from '../../assects/portfolio_logo.jpg';
import contacForm from '../../assects/contactForm_logo.jpg';
import ageCalculator from '../../assects/age_logo.jpg';
import weatherApp from '../../assects/waether_logo.jpg';
import tictactoeApp from '../../assects/Tic-Tac-Toe_logo.jpg';
import chatApp from '../../assects/chat_logo.jpg';

const Project = () => {
    return (
        <section id="project">
            <h1 className="row1"> <span id="aa">M</span>y Work</h1>
            <div className="ourservice">
                <div class="service"> <img src={portfolio} />
                    <h3 className="projectname">Portfolio</h3>
                </div>
                <div class="service"> <img src={contacForm} />
                    <h3 className="projectname">Contact Form</h3>
                </div>
                <div class="service"> <img src={ageCalculator} />
                    <h3 className="projectname">Age Calculator</h3>
                </div>
                <div class="service"> <img src={weatherApp} />
                    <h3 className="projectname">weather App</h3>
                </div>
                <div class="service"> <img src={tictactoeApp} />
                    <h3 className="projectname">Tic Tac Toe Game</h3>
                </div>
                <div class="service"><img src={chatApp} />
                <h3 className="projectname">Chat App</h3>
                </div>
            </div>
        </section>
    )
}

export default Project;