import React from "react";
import "./contact.css";
import contact_logo from "../../assects/contact_logo.jpg";
import resume from "../Contact/Balakrishna_exp_resume.pdf";
const Contact = () => {
  return (
    <section id="contact">
      <h1 className="row1">
        {" "}
        <span id="aa">C</span>ontact Me
      </h1>
      <div className="contactpage">
        <div className="row2">
          <img src={contact_logo} alt="contact_logo" />
        </div>
        <div className="contactcontent">
          <div>
            <h2>Email : Krishna3214aa@gmail.com</h2>
            <br />
            <h2>Mobile No : +91 9121605410</h2>
            <br />
          </div>
          <div className="btncv">
            <a download href={resume}>
              <span className="cv">Dowload CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
